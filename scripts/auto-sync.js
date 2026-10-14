const { execSync } = require("child_process");

function run(command) {
  try {
    return execSync(command, { encoding: "utf8", stdio: ["pipe", "pipe", "pipe"] }).trim();
  } catch (err) {
    throw new Error(err.stderr ? err.stderr.trim() : err.message);
  }
}

function sync() {
  console.log("\n📦 [Mimos e Caprichos] Sincronizando com o GitHub...\n");

  try {
    // 1. Verifica status do git
    const status = run("git status --porcelain");
    
    // Pega mensagem customizada se passada como argumento
    const customMsg = process.argv.slice(2).join(" ").trim();
    const now = new Date();
    const timestamp = now.toLocaleDateString("pt-BR") + " " + now.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
    const commitMsg = customMsg || `update: sincronização automática do site (${timestamp})`;

    if (status) {
      console.log("📝 Mudanças detectadas. Criando commit...");
      run("git add -A");
      run(`git commit -m "${commitMsg}"`);
      console.log(`✅ Commit criado: "${commitMsg}"`);
    } else {
      console.log("✨ Nenhuma alteração pendente para commit.");
    }

    // 2. Envia para o repositório remoto
    console.log("🚀 Enviando para https://github.com/dovik1989/mimosecaprichos.git (branch main)...");
    const pushOutput = run("git push origin main");
    if (pushOutput) {
      console.log(pushOutput);
    }
    console.log("\n🎉 Sincronização concluída com sucesso no GitHub!\n");
  } catch (error) {
    console.error("\n❌ Erro durante a sincronização:", error.message, "\n");
    process.exit(1);
  }
}

sync();

