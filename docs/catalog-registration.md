# Cadastro de produtos e categorias

## Estado atual

O layout de Cestas personalizadas foi aprovado pelo usuário. As outras quatro categorias reutilizam seus componentes e têm zero produtos cadastrados. Não foram inventadas fotos, nomes, preços ou composições. O Header não possui dropdown: contém um link simples "Presentes", que foi preservado sem duplicar itens. Rodapé, galeria, avaliações e demais seções não foram alterados nesta etapa.

As novas rotas são `/presentes/presentes-e-mimos`, `/presentes/presentes-personalizados`, `/presentes/presentes-corporativos` e `/presentes/datas-comemorativas`. São geradas por uma única página dinâmica com quatro parâmetros estáticos; slugs desconhecidos retornam 404. A rota dedicada de Cestas foi preservada.

## Prévia e segurança de publicação

Com `npm run dev`, as quatro páginas mostram oito posições com "Fotografia pendente" e "Produto a cadastrar", sem links de WhatsApp para itens não cadastrados. Os cinco cards da Home abrem suas rotas no mesmo site, mantendo carrossel, setas, rodinha e indicador.

No build de produção padrão, as quatro categorias ainda vazias exibem somente o estado vazio e retorno aos presentes. Não há placeholders, fotos provisórias, CTAs de produtos ou links da Home para essas categorias. Os cards não publicados conservam o contato original no WhatsApp. As quatro páginas ficam com `noindex, nofollow` até terem produtos aprovados e publicação habilitada. Elas continuam acessíveis por URL direta com o estado vazio: `noindex` não é controle de acesso.

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

Para tornar uma categoria pública: cadastrar e aprovar conteúdo oficial, revisar fotos/textos e então definir `published: true` em `catalogCategories`. A Home só divulga uma nova categoria quando ela tiver ao menos um produto aprovado. Apenas cadastrar um item pendente não o publica. Confirmar novamente estado de produção e SEO antes do deploy.

## Componentes compartilhados

`CategoryPage` compõe `CategoryHeader` e `ProductGrid`. A grade usa `ProductCard` e `ProductDetailsModal`, os mesmos da página-modelo. O rótulo de posição das novas categorias é parametrizado, mantendo as posições e o visual de Cestas sem alterações. O grid preserva quatro colunas em desktop, duas a partir de 360px e uma abaixo disso, com oito posições na prévia.

## Validação desta etapa

Build de produção aprovado com as quatro rotas estáticas. Em Chromium, cada rota foi aberta diretamente em 1440px e 390px: oito posições, quatro/duas colunas, zero produtos, fotos ou CTAs inventados e ausência de overflow horizontal. Testados os cinco destinos da Home em desenvolvimento, rodinha e progresso do balão, além dos três produtos e fechamento do lightbox de Cestas. Sem exceções de runtime durante o teste.

Na execução de produção padrão, todas as quatro URLs responderam 200 em acesso direto e nova requisição, com estado vazio, `noindex`, sem placeholders ou CTAs de produtos; a Home omite os quatro links vazios. Cestas mantém seus três itens e slugs desconhecidos retornam 404. O helper foi testado com entradas temporárias não persistidas, conferindo IDs, defaults e fotografias adicionais. Não houve teste em aparelho físico.

Capturas da prévia: `artifacts/catalog-categories/desktop.png` e `mobile.png`. Revisão independente: ship no escopo da replicação do modelo aprovado, sem correções materiais. Conferência documental confirmou identidade visual preservada. As instruções históricas da V1 sobre aguardar aprovação/commit foram superadas pelo pedido atual de replicação e envio ao GitHub; isso não autoriza divulgar categorias vazias no ambiente público.
