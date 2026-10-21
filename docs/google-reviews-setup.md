# Avaliações Google — conexão pendente

## Atualização: importação manual das capturas fornecidas

Segundo lote: adicionadas Eunice, Brunamanu Paranhos, Eliane Pedroso, Nadia Maria Souza Bueno, Tatiane Melo, Yasmin Almeida, Dieny (Diih) e Millena Sãovesso Cafuoco. Total atual: **14 avaliações únicas** de cinco estrelas. Tatiane também está identificada como trecho, pois a captura mostra "Mais" e texto cortado. Falta uma avaliação para completar 15. As contagens de seis e nove restantes no relato do primeiro lote abaixo são históricas.

Foram cadastradas seis avaliações únicas das capturas enviadas pelo usuário: Maria Eduarda Ferreira, Gabriela Frederizi, Karoline Souza, Any Claro, Renata Gabrielle e Rayane Silva. O print de Renata/Rayane foi enviado duas vezes e foi deduplicado. Todas exibem cinco estrelas. Any e Renata aparecem cortadas no Google; somente o trecho visível foi transcrito e identificado como trecho no card. Períodos relativos são apresentados como "Na captura", sem inventar datas exatas. As respostas do proprietário não foram incluídas como depoimentos. O link direto do perfil fornecido pelo usuário foi cadastrado. Não há links individuais nem média/total confirmados. Faltam nove avaliações únicas para chegar a 15. A integração API continua pendente. As observações de coleção vazia abaixo registram o estado anterior à entrega das capturas.

## Estado verificado no repositório

Não há integração GBP/OAuth, variáveis locais `.env*`, cliente Google ou tokens configurados no código inspecionado. Nenhuma conexão disponível nesta sessão autoriza consultar o perfil Google Business Profile. Não foi possível verificar o projeto Cloud, quotas ou o vínculo de proprietário/administrador. Nenhuma avaliação real foi obtida.

A seção usa uma coleção vazia e um acesso ao Google, sem comentários ilustrativos, média ou quantidade inventadas. O destino provisório é uma busca pelo nome e endereço da empresa; ainda não é um permalink confirmado do perfil ou de todas as avaliações. Confirmar o perfil exato antes de preencher `allReviewsUrl`. As demais seções não foram alteradas; os indicadores antigos presentes fora desta seção permanecem fora do escopo e precisam de verificação própria.

## O que a proprietária/administradora precisa configurar

1. Confirmar acesso de proprietário ou administrador ao perfil verificado **Mimos e Caprichos**, Av. Onze de Agosto, 849, Centro, Valinhos/SP. Não compartilhar senha.
2. Selecionar/criar um projeto Google Cloud da empresa e informar seu ID/número público. Solicitar acesso básico às GBP APIs com uma conta cadastrada como proprietária/administradora. Os pré-requisitos atuais incluem perfil verificado e ativo há pelo menos 60 dias e site da empresa informado no perfil.
3. Confirmar aprovação no Console: quota 0 indica ausência de acesso aprovado; habilitar as APIs necessárias, incluindo Google My Business API (reviews v4), Account Management e Business Information para descobrir conta/local. Não é possível inferir aprovação apenas por possuir uma chave API.
4. Configurar consentimento OAuth, domínio, política de privacidade e público do aplicativo; criar cliente OAuth de aplicação web com URI de retorno HTTPS exata do ambiente que receberá a integração. A rota de retorno ainda não foi criada. Definir hospedagem/domínio e fluxo de autorização antes de implementá-la. Verificar a necessidade de publicação/verificação OAuth conforme o público e as exigências do Console; modo de teste não é configuração permanente.
5. Autorizar pessoalmente via Google o escopo `https://www.googleapis.com/auth/business.manage`, com acesso offline para atualização de tokens. Esse escopo permite gestão, não apenas leitura; o aplicativo deve limitar suas operações às consultas autorizadas. Consentimento OAuth não substitui aprovação de acesso à API.
6. Armazenar `GOOGLE_BUSINESS_CLIENT_ID`, `GOOGLE_BUSINESS_CLIENT_SECRET`, `GOOGLE_BUSINESS_REFRESH_TOKEN` e os IDs de conta/local somente no gerenciador de segredos da hospedagem/ambiente servidor. São nomes propostos, ainda não consumidos por este código. Não enviar tokens pelo chat, não usar prefixo `NEXT_PUBLIC_`, não versionar credenciais.
7. Confirmar permissão de exibição pública dos dados: a política GBP limita o uso a criar, gerenciar e relatar perfis autorizados. Não presumir que autorização de leitura concede licença irrestrita para um widget público. Validar o caso de uso com o Google e as exigências de atribuição, retenção e remoção antes de ativar a publicação.

## Consulta e seleção após autorização

Usar no servidor `GET https://mybusiness.googleapis.com/v4/accounts/{accountId}/locations/{locationId}/reviews?pageSize=50&orderBy=rating%20desc`, percorrendo `nextPageToken`. O local deve estar verificado. A resposta fornece `averageRating` e `totalReviewCount`; não calcular esses indicadores pela amostra positiva.

Revisar candidatos de cinco estrelas com texto completo, priorizando experiências concretas de atendimento, personalização, qualidade, entrega e cuidado. Aprovar aproximadamente 15 com a empresa, sem alterar o sentido, autoria, data ou nota. Registrar data de conferência e a origem. Nunca completar a quantidade com texto fictício.

O recurso Review fornece autor, nota, comentário e timestamps; não fornece um permalink público genérico de leitura da avaliação. `reviewReplyUrl` é para responder, não para o visitante ler. Não fabricar URLs a partir de `reviewId`: receber links públicos verificados ou manter o link geral com rótulo "Ver avaliações no Google".

A implementação autenticada futura deve ficar em módulo servidor, com renovação de token, timeout, controle de quotas, paginação e tratamento de falhas. Não consultar a API a cada movimento do carrossel. Definir cache/atualização e expurgo conforme os termos aplicáveis e confirmar elegibilidade do uso público; não salvar respostas autenticadas permanentemente no Git nem presumir que um prazo de cache autoriza republicação. Em falha, mostrar o estado sem indicadores e o acesso ao Google, preservando a Home.

## Alternativa sem API

Receber 10–15 avaliações reais verificadas e aprovadas para republicação pela empresa, com os direitos/autorizações necessários. Registrar em `src/components/sections/reviews/verifiedReviews.ts`: `id`, `author` público, `text` fiel, `rating`, `publishedAt` quando disponível, `originalUrl` público quando disponível, `source: "Google"`, `verifiedAt` e `approvedByBusiness: true`. Não copiar por scraping. Aprovação da empresa não dispensa direitos de terceiros ou políticas da fonte.

Preencher `allReviewsUrl` com o link confirmado do perfil/todas as avaliações. Manter `summary: null` até haver uma fonte autorizada com média, total e data de consulta. Se forem fornecidos manualmente, revisar periodicamente e retirar números sem atualização confiável. A estrutura aceita até 15 avaliações selecionadas e mantém texto integral, autoria, data e atribuição. A coleção vazia é intencional, não uma integração concluída.

## Custos e restrições

A API Google My Business é disponibilizada sem cobrança para usuários registrados; hospedagem e serviços auxiliares podem ter custos. Acesso é sujeito a aprovação e quotas. Excesso de quota causa 429 e precisa de backoff. Google Places é outro produto, com termos e cobrança próprios; não foi habilitado como substituto.

## Fontes oficiais consultadas

Validação da implementação: build de produção concluído com TypeScript e lint. Em Chromium, usando 15 registros sintéticos temporários removidos antes do build, foram verificados três cards em 1440px, rodinha nas duas direções, setas por largura real do card, saída vertical nos dois limites, movimento reduzido, metadados e tolerância a data inválida. Em 375px, 390px e 430px, foram verificados um card com parte do próximo, swipe com eventos de toque sintetizados e ausência de interceptação do wheel vertical. Inspeção visual confirmou cards compactos e acesso à leitura completa. Não foram testados aparelhos físicos ou Safari. Isso valida o componente, não a autenticidade de avaliações: a coleção final permanece vazia e a integração não foi concluída.

- [Listar avaliações e escopo OAuth](https://developers.google.com/my-business/reference/rest/v4/accounts.locations.reviews/list)
- [Campos de uma avaliação](https://developers.google.com/my-business/reference/rest/v4/accounts.locations.reviews)
- [Pré-requisitos e aprovação](https://developers.google.com/my-business/content/prereqs)
- [Configuração básica](https://developers.google.com/my-business/content/basic-setup)
- [Políticas, uso e atribuição](https://developers.google.com/my-business/content/policies)
- [Quotas](https://developers.google.com/my-business/content/limits)
- [Preço](https://developers.google.com/my-business/content/pricing)
