const chokidar = require("chokidar");
const { spawn, execSync } = require("child_process");
const path = require("path");

const DEBOUNCE_MS = 10000; // 10 segundos de espera após última modificação
let debounceTimer = null;
let isSyncing = false;
let pendingChange = false;

console.log("\n========================================================");
console.log("  🌸 MIMOS E CAPRICHOS — AUTO-COMMIT & SYNC WATCHER");
console.log("========================================================");
console.log("👀 Monitorando arquivos do projeto em tempo real...");
console.log("💾 Qualquer alteração salva será testada e enviada automaticamente ao GitHub!");
console.log("⏱️  Tempo de espera inteligente (debounce): 10 segundos.");
console.log("========================================================\n");

// Iniciar servidor Next.js em paralelo se solicitado
const args = process.argv.slice(2);
if (args.includes("--with-dev")) {
  console.log("🚀 Iniciando servidor Next.js dev em paralelo...\n");
  const devProcess = spawn("cmd.exe", ["/c", "npm.cmd", "run", "dev"], {
    stdio: "inherit",
    cwd: path.resolve(__dirname, ".."),
  });

  devProcess.on("exit", (code) => {
    console.log(`\nServidor dev encerrado com código ${code}`);
    process.exit(code || 0);
  });
}

// Configurar watcher com chokidar
const projectRoot = path.resolve(__dirname, "..");
const watcher = chokidar.watch(
  [
    path.join(projectRoot, "src"),
    path.join(projectRoot, "public"),
    path.join(projectRoot, "package.json"),
    path.join(projectRoot, "tailwind.config.ts"),
    path.join(projectRoot, "next.config.ts"),
  ],
  {
    ignored: [
      /(^|[\/\\])\../, // arquivos e pastas ocultos (.git, .next, etc)
      /node_modules/,
      /\.log$/,
      /scripts[\/\\]watch-sync\.js$/,
    ],
    persistent: true,
    ignoreInitial: true,
  }
);

function triggerSync() {
  if (isSyncing) {
    pendingChange = true;
    return;
  }

  isSyncing = true;
  pendingChange = false;

  console.log("\n⏰ Tempo esgotado! Iniciando validação e commit automático...");

  const syncProcess = spawn("node", [path.join(__dirname, "auto-sync.js"), "auto: sincronização automática após edição"], {
    stdio: "inherit",
    cwd: projectRoot,
  });

  syncProcess.on("close", (code) => {
    isSyncing = false;
    if (code === 0) {
      console.log("✨ Repositório GitHub 100% atualizado! Continuando monitoramento...\n");
    } else {
      console.log("⚠️ A sincronização não foi concluída (código " + code + "). Continuando monitoramento...\n");
    }

    if (pendingChange) {
      console.log("🔁 Alterações pendentes detectadas durante o último push. Agendando nova sincronização...");
      scheduleSync("arquivos modificados durante sincronização");
    }
  });
}

function scheduleSync(filePath) {
  if (debounceTimer) {
    clearTimeout(debounceTimer);
  }

  const relativePath = path.relative(projectRoot, filePath);
  console.log(`📝 [${new Date().toLocaleTimeString("pt-BR")}] Alteração detectada em: ${relativePath}`);
  console.log(`⏳ Aguardando ${DEBOUNCE_MS / 1000}s de inatividade para commitar e enviar ao GitHub...`);

  debounceTimer = setTimeout(() => {
    triggerSync();
  }, DEBOUNCE_MS);
}

watcher
  .on("change", (p) => scheduleSync(p))
  .on("add", (p) => scheduleSync(p))
  .on("unlink", (p) => scheduleSync(p))
  .on("error", (err) => console.error("Erro no watcher:", err));

// Capturar encerramento do processo
process.on("SIGINT", () => {
  console.log("\n🛑 Encerrando watcher de auto-commit...");
  watcher.close();
  process.exit(0);
});
