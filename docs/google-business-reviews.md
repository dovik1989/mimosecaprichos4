# Conectar as avaliações do Perfil da Empresa no Google

A integração está preparada, mas permanece nas avaliações aprovadas atuais até configurar as credenciais. Não é necessário instalar SDK: as chamadas HTTPS são feitas apenas no servidor. Nenhuma chave deve usar prefixo NEXT_PUBLIC_.

1. No Google Cloud, crie ou selecione o projeto da loja e solicite acesso às Business Profile APIs: https://developers.google.com/my-business/content/prereqs . A ativação depende da aprovação do Google.
2. Ative Google My Business API, My Business Account Management API e My Business Business Information API. Configure a tela de consentimento OAuth e permita o escopo https://www.googleapis.com/auth/business.manage . O Google não oferece escopo exclusivo de leitura de avaliações; esta integração só consulta dados, sem responder, editar ou excluir comentários.
3. Crie um cliente OAuth do tipo Aplicativo da Web e cadastre o redirecionamento exato http://127.0.0.1:8765/oauth/callback . Se o aplicativo estiver em teste, cadastre a conta administradora como usuário de teste. Tokens de apps externos em teste podem expirar em sete dias; configure a publicação/validação exigida pelo Google para uso contínuo.
4. Crie `.env.local` na raiz (ignorado pelo Git) com:

```
GOOGLE_BUSINESS_CLIENT_ID=seu-client-id
GOOGLE_BUSINESS_CLIENT_SECRET=seu-client-secret
```

5. Execute `node scripts/connect-google-business.cjs`. Abra a URL indicada, autorize a conta proprietária/administradora e escolha a loja no terminal. O script usa estado aleatório e PKCE, e salva refresh token e localização em `.env.local`, sem exibir os segredos.
6. Na Vercel, em Settings → Environment Variables, configure as quatro variáveis de `.env.local`: GOOGLE_BUSINESS_CLIENT_ID, GOOGLE_BUSINESS_CLIENT_SECRET, GOOGLE_BUSINESS_REFRESH_TOKEN e GOOGLE_BUSINESS_LOCATION. Faça novo deploy.
7. Acesse a seção de avaliações. `/api/google-reviews` deve retornar `synchronized: true`, comentários e resumo da loja; nunca tokens. Sem configuração retorna `available: false`; erro do Google retorna HTTP 503 e o site mantém as avaliações aprovadas.

## Comportamento

A primeira tela continua estática. O navegador consulta o servidor apenas ao se aproximar da seção de avaliações. O servidor renova o token de acesso e consulta os 50 registros atualizados mais recentemente, exibindo até 15 com texto, de qualquer nota. A média e a contagem vêm do resumo global do Google, não são calculadas a partir da seleção. O link permite ver todas as avaliações. Nomes e comentários são renderizados como texto, sem HTML externo.

Cache temporário em memória por uma hora, sem gravar respostas da API no repositório ou em banco. Instâncias serverless possuem caches independentes. Em caso de erro, não se exibem respostas expiradas; o site volta à seleção manual. A integração não modifica o Perfil da Empresa. Para desconectar, remova as quatro variáveis, faça novo deploy e revogue o acesso do aplicativo na conta Google.

## Referências

- https://developers.google.com/my-business/content/implement-oauth
- https://developers.google.com/my-business/reference/rest/v4/accounts.locations.reviews/list
- https://developers.google.com/my-business/content/policies
