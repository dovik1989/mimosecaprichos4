const fs = require('node:fs');
const http = require('node:http');
const crypto = require('node:crypto');
const { createInterface } = require('node:readline/promises');
require('@next/env').loadEnvConfig(process.cwd());
const redirect = 'http://127.0.0.1:8765/oauth/callback';
const clientId = process.env.GOOGLE_BUSINESS_CLIENT_ID;
const clientSecret = process.env.GOOGLE_BUSINESS_CLIENT_SECRET;
const state = crypto.randomBytes(32).toString('hex');
const verifier = crypto.randomBytes(32).toString('base64url');
const rl = createInterface({ input: process.stdin, output: process.stdout });
async function main() {
  if (!clientId || !clientSecret) throw Error('Configure GOOGLE_BUSINESS_CLIENT_ID e GOOGLE_BUSINESS_CLIENT_SECRET em .env.local antes de continuar.');
  let server;
  const codePromise = new Promise((resolve, reject) => {
    server = http.createServer((req, res) => {
      const url = new URL(req.url, redirect);
      if (url.pathname !== '/oauth/callback') { res.writeHead(404).end(); return; }
      if (url.searchParams.get('state') !== state) { res.writeHead(400).end('Estado de autorizacao invalido.'); return; }
      if (url.searchParams.has('error') || !url.searchParams.get('code')) {
        res.writeHead(400).end('Autorizacao nao concluida.'); reject(Error('A autorizacao do Google nao foi concluida.')); return;
      }
      res.setHeader('Content-Type', 'text/plain; charset=utf-8');
      res.end('Autorização recebida. Volte ao terminal para selecionar a loja.');
      resolve(url.searchParams.get('code'));
    });
    server.on('error', reject);
    server.listen(8765, '127.0.0.1', () => {
      const url = new URL('https://accounts.google.com/o/oauth2/v2/auth');
      url.search = new URLSearchParams({ client_id: clientId, redirect_uri: redirect, response_type: 'code', scope: 'https://www.googleapis.com/auth/business.manage', access_type: 'offline', prompt: 'consent', state, code_challenge: crypto.createHash('sha256').update(verifier).digest('base64url'), code_challenge_method: 'S256' }).toString();
      console.log('Abra este endereço no navegador e entre na conta que administra a loja:\n' + url.href);
    });
  });
  const timeout = setTimeout(() => { console.error('Tempo de autorização esgotado. Execute novamente.'); server.closeAllConnections(); server.close(); rl.close(); process.exitCode = 1; }, 10 * 60 * 1000);
  try {
    const code = await codePromise;
    const response = await fetch('https://oauth2.googleapis.com/token', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: new URLSearchParams({ code, client_id: clientId, client_secret: clientSecret, redirect_uri: redirect, grant_type: 'authorization_code', code_verifier: verifier }), signal: AbortSignal.timeout(15000) });
    if (!response.ok) throw Error('Falha na troca da autorização: HTTP ' + response.status);
    const token = await response.json();
    if (!token.refresh_token) throw Error('O Google não retornou um refresh token. Revogue a autorização anterior e tente novamente.');
    async function get(url) {
      const result = await fetch(url, { headers: { Authorization: 'Bearer ' + token.access_token }, signal: AbortSignal.timeout(15000) });
      if (!result.ok) throw Error('Falha ao listar conta/loja: HTTP ' + result.status + '. Verifique a aprovação e ativação das APIs.');
      return result.json();
    }
    const locations = [];
    let accountPage;
    do {
      const accounts = await get('https://mybusinessaccountmanagement.googleapis.com/v1/accounts?' + new URLSearchParams(accountPage ? { pageToken: accountPage } : {}));
      for (const account of accounts.accounts || []) {
        let locationPage;
        do {
          const data = await get('https://mybusinessbusinessinformation.googleapis.com/v1/' + account.name + '/locations?' + new URLSearchParams({ readMask: 'name,title,storefrontAddress', pageSize: '100', ...(locationPage ? { pageToken: locationPage } : {}) }));
          for (const location of data.locations || []) locations.push({ resource: account.name + '/' + location.name, title: location.title, address: (location.storefrontAddress?.addressLines || []).join(', ') });
          locationPage = data.nextPageToken;
        } while (locationPage);
      }
      accountPage = accounts.nextPageToken;
    } while (accountPage);
    if (!locations.length) throw Error('Nenhuma loja encontrada para esta conta Google.');
    locations.forEach((location, i) => console.log(`${i + 1}. ${location.title} — ${location.address}`));
    const choice = Number(await rl.question('Qual loja conectar? Digite o número: '));
    if (!Number.isInteger(choice) || !locations[choice - 1]) throw Error('Seleção inválida.');
    const path = '.env.local';
    let env = fs.existsSync(path) ? fs.readFileSync(path, 'utf8') : '';
    for (const [key, value] of Object.entries({ GOOGLE_BUSINESS_REFRESH_TOKEN: token.refresh_token, GOOGLE_BUSINESS_LOCATION: locations[choice - 1].resource })) {
      const line = key + '=' + JSON.stringify(value);
      const pattern = new RegExp('^' + key + '=.*$', 'm');
      env = pattern.test(env) ? env.replace(pattern, () => line) : env + '\n' + line;
    }
    fs.writeFileSync(path, env.trimEnd() + '\n', { mode: 0o600 });
    console.log('Conexão salva em .env.local. Copie as quatro variáveis GOOGLE_BUSINESS_* para o ambiente do projeto na Vercel e faça um novo deploy. Não compartilhe os valores no chat.');
  } finally { clearTimeout(timeout); server.closeAllConnections(); server.close(); }
}
main().catch(error => { console.error(error.message); process.exitCode = 1; }).finally(() => rl.close());
