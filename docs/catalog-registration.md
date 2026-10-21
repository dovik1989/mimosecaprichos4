# Cadastro de produtos e categorias

## Estado atual

O layout de Cestas personalizadas foi aprovado pelo usuário. As outras quatro categorias reutilizam seus componentes e têm zero produtos cadastrados. Não foram inventadas fotos, nomes, preços ou composições. O Header não possui dropdown: contém um link simples "Presentes", que foi preservado sem duplicar itens. Rodapé, galeria, avaliações e demais seções não foram alterados nesta etapa.

As novas rotas são `/presentes/presentes-e-mimos`, `/presentes/presentes-personalizados`, `/presentes/presentes-corporativos` e `/presentes/datas-comemorativas`. São geradas por uma única página dinâmica com quatro parâmetros estáticos; slugs desconhecidos retornam 404. A rota dedicada de Cestas foi preservada.

## Publicação das cinco categorias

Tanto em desenvolvimento quanto em produção, as quatro páginas mostram oito posições com "Fotografia pendente" e "Posição 1" a "Posição 8", sem links de WhatsApp para itens não cadastrados. Os cinco cards da Home abrem suas rotas no mesmo site, mantendo carrossel, setas, rodinha e indicador.

No build de produção padrão, as quatro categorias ainda sem produtos exibem a grade de oito placeholders claramente identificados, igual à página-modelo. Não há fotos inventadas ou CTAs de produtos inexistentes. As cinco rotas são vinculadas na Home e nos links correspondentes do rodapé. Todos os cinco cards abrem suas próprias páginas, mesmo quando uma categoria ainda não tem produtos. As quatro páginas ficam com `noindex, nofollow` até terem produtos aprovados e publicação habilitada. Elas continuam acessíveis por URL direta com o estado vazio: `noindex` não é controle de acesso.

Para uma prévia hospedada **protegida**, pode-se definir `NEXT_PUBLIC_CATALOG_PREVIEW=true` antes de iniciar/buildar. Não definir essa variável na hospedagem pública. É um sinal de build, não uma preferência do visitante, cookie ou query string. Rebuildar ao alterá-la. `npm run build` sem essa variável valida a versão pública segura.

## Uma fonte de dados

Cadastros ficam somente em `src/data/catalog.ts`, no array `catalogProducts`. Categorias e sua configuração ficam em `catalogCategories` no mesmo arquivo. Não cadastrar produtos dentro dos componentes ou páginas.

Adicionar um item com `createCatalogProduct` informando categoria, nome, descrição e fotografia principal. `additionalImages` é opcional. O helper gera ID estável a partir da categoria e do nome; se nomes coincidirem ou precisarem mudar, fornecer `id` explícito e único. Caminhos são relativos a `public`, por exemplo `/images/catalogo/foto-da-cliente.jpg`. Fotografias podem ser strings ou `{ src, alt }`.

```ts
// Modelo de cadastro; não colar como produto real sem substituir pelos dados oficiais.
createCatalogProduct({
  category: "presentes-personalizados",
  name: nomeOficialRecebido,
  description: descricaoOficialRecebida,
  image: fotografiaPrincipalRecebida,
  additionalImages: fotografiasAdicionaisRecebidas,
})
```

O padrão é `informationStatus: "pending-approval"` e `availability: "on-request"`. Após conferir o conteúdo, definir `informationStatus: "approved"`. Opções de disponibilidade: `available`, `on-request` e `unavailable`. Itens indisponíveis podem ser visualizados, mas não mostram CTA de WhatsApp.

`whatsappMessage` permite mensagem específica; quando ausente, é gerada automaticamente com o nome. A referência `id` é anexada em ambos os casos, e o helper existente codifica a mensagem e usa o número oficial. A primeira foto vira capa; as seguintes habilitam botões, teclado e swipe no modal automaticamente.

As cinco categorias já estão públicas (`published: true`). Para publicar um produto, cadastrar conteúdo oficial, revisar fotos/textos e marcar `informationStatus: "approved"`. O link da categoria não depende da existência de produtos. Apenas cadastrar um item pendente não publica esse item. Confirmar novamente estado de produção e SEO antes do deploy.

## Componentes compartilhados

`CategoryPage` compõe `CategoryHeader` e `ProductGrid`. A grade usa `ProductCard` e `ProductDetailsModal`, os mesmos da página-modelo. As novas categorias usam os mesmos rótulos padrão de posições e o mesmo visual de Cestas, sem alterações. O grid preserva quatro colunas em desktop, duas a partir de 360px e uma abaixo disso, com oito posições na prévia.

## Validação desta etapa

Build de produção aprovado com as quatro rotas estáticas. Em Chromium, cada rota foi aberta diretamente em 1440px e 390px: oito posições, quatro/duas colunas, zero produtos, fotos ou CTAs inventados e ausência de overflow horizontal. Testados os cinco destinos da Home em desenvolvimento, rodinha e progresso do balão, além dos três produtos e fechamento do lightbox de Cestas. Sem exceções de runtime durante o teste.

Na execução de produção padrão, todas as quatro URLs responderam 200 em acesso direto e nova requisição, com estado vazio, `noindex`, sem placeholders ou CTAs de produtos; naquela etapa a Home omitia os quatro links vazios (comportamento substituído pela correção de publicação abaixo). Cestas mantém seus três itens e slugs desconhecidos retornam 404. O helper foi testado com entradas temporárias não persistidas, conferindo IDs, defaults e fotografias adicionais. Não houve teste em aparelho físico.

Capturas da prévia: `artifacts/catalog-categories/desktop.png` e `mobile.png`. Revisão independente: ship no escopo da replicação do modelo aprovado, sem correções materiais. Conferência documental confirmou identidade visual preservada. As instruções históricas da V1 sobre aguardar aprovação/commit foram superadas pelo pedido atual de replicação e envio ao GitHub; isso não autoriza divulgar categorias vazias no ambiente público.


## Correção da navegação em produção

O pedido posterior autorizou explicitamente publicar e vincular as cinco páginas, inclusive as vazias. Removida a condição `canLinkCategory` que desviava os quatro cards ao WhatsApp em produção. Todos os cards usam Next Link com suas rotas em desktop e mobile. Categorias sem dados oficiais continuam com o estado em preparação, sem produtos inventados. Os links correspondentes do rodapé foram atualizados preservando seu visual; o Header não tem dropdown de categorias e não foi redesenhado. O problema observado online não era arquivo ausente: o deployment reportado pelo GitHub já servia o commit `1cb20ab`; a condição de ambiente era a causa. O origin permanece em mimosecaprichos3, e o site público informado usa mimosecaprichos4; a correção deve ser enviada para ambos sem force push nem alteração de origin.


## Padronização pública da grade de oito posições

A solicitação mais recente substitui o estado vazio das quatro páginas pela grade completa, inclusive em produção. `CategoryPage` passa a usar a configuração visual `preview` do mesmo `ProductGrid` de Cestas: oito posições totais, rosa-claro, ícone de fotografia e nomes "Posição 1" a "Posição 8". Esse parâmetro da grade controla apenas sua apresentação; não é autorização para publicar cadastros pendentes. `getCategoryProducts` continua omitindo produtos não aprovados em produção. Os espaços não são produtos e não têm CTA nem lightbox. Quando um produto oficial for cadastrado/aprovado, ele substitui automaticamente uma posição e utiliza ProductCard/ProductDetailsModal. As instruções anteriores sobre ocultar placeholders em produção foram substituídas por este pedido explícito. Não é necessário definir variável de ambiente para ver a grade publicada. A página dedicada de Cestas e o estilo dos componentes compartilhados não foram alterados.
