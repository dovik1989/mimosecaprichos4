const { execSync } = require("child_process");

function run(command, silent = false) {
  try {
    return execSync(command, { encoding: "utf8", stdio: silent ? "pipe" : ["pipe", "pipe", "pipe"] }).trim();
  } catch (err) {
    const errorMsg = err.stderr ? err.stderr.trim() : (err.stdout ? err.stdout.trim() : err.message);
    throw new Error(errorMsg);
  }
}

function sync() {
  console.log("\n========================================================");
  console.log("  🌸 MIMOS E CAPRICHOS — SINCRONIZAÇÃO AUTOMÁTICA GITHUB");
  console.log("========================================================\n");

  try {
    // 1. Verificar remote e branch
    const remoteUrl = run("git remote get-url origin");
    const currentBranch = run("git branch --show-current");
    console.log(`📡 Repositório remoto: ${remoteUrl}`);
    console.log(`🌿 Branch ativa: ${currentBranch}\n`);

    if (remoteUrl !== "https://github.com/dovik1989/mimosecaprichos.git") {
      throw new Error(`Remote divergente detectado: ${remoteUrl}. Esperado: https://github.com/dovik1989/mimosecaprichos.git`);
    }

    // 2. Identificar arquivos modificados
    const statusOutput = run("git status --porcelain");
    const modifiedFiles = statusOutput
      ? statusOutput.split("\n").map(line => line.trim()).filter(Boolean)
      : [];

    if (modifiedFiles.length > 0) {
      console.log(`📋 Arquivos modificados identificados (${modifiedFiles.length}):`);
      modifiedFiles.forEach(f => console.log(`   • ${f}`));
      console.log("");
    } else {
      console.log("✨ Nenhum arquivo modificado detectado no momento.");
    }

    // 3. Executar teste de build obrigatório antes de commitar
    console.log("🔨 Executando validação de build (npm run build)...");
    const buildOutput = run("npm.cmd run build", false);
    console.log("✅ Build concluído com sucesso e 0 erros de compilação!\n");

    // 4. Se houver alterações, commitar
    if (modifiedFiles.length > 0) {
      const customMsg = process.argv.slice(2).join(" ").trim();
      const now = new Date();
      const timestamp = now.toLocaleDateString("pt-BR") + " " + now.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
      const commitMsg = customMsg || `update: sincronização do site (${timestamp})`;

      console.log(`📝 Criando commit com a mensagem: "${commitMsg}"...`);
      run("git add -A");
      run(`git commit -m "${commitMsg}"`);
    }

    // 5. Verificar se há commits remotos para puxar com segurança (sem sobrescrever)
    console.log("🔄 Verificando atualizações remotas (git pull --rebase)...");
    try {
      run("git pull --rebase origin main");
    } catch (pullErr) {
      console.warn("⚠️ Aviso no pull:", pullErr.message);
    }

    // 6. Enviar para o GitHub
    console.log(`🚀 Enviando commits para ${remoteUrl} na branch ${currentBranch}...`);
    const pushOutput = run(`git push origin ${currentBranch}`);
    if (pushOutput) {
      console.log(`   ${pushOutput}`);
    }

    // 7. Obter informações finais do commit
    const commitHash = run("git rev-parse HEAD");
    const shortHash = run("git rev-parse --short HEAD");
    const commitSubject = run("git log -1 --pretty=%B");

    console.log("\n========================================================");
    console.log("  🎉 SINCRONIZAÇÃO CONCLUÍDA COM SUCESSO!");
    console.log("========================================================");
    console.log(`• Repositório:  ${remoteUrl}`);
    console.log(`• Branch:       ${currentBranch}`);
    console.log(`• Hash Commit:  ${shortHash} (${commitHash})`);
    console.log(`• Mensagem:     ${commitSubject}`);
    console.log(`• Status Push:  Enviado e atualizado na origin/${currentBranch}`);
    console.log("========================================================\n");
  } catch (error) {
    console.error("\n❌ FALHA NA SINCRONIZAÇÃO:");
    console.error(error.message);
    console.error("\nNenhuma alteração corrompida foi enviada.\n");
    process.exit(1);
  }
}

sync();
