# Cestas personalizadas — prévia local V1

## Escopo e direção

Modo: Persuade. Extensão da identidade existente, sem nova direção visual. O usuário escolheu explicitamente grade de produtos, quatro colunas no desktop, duas no tablet/mobile e uma em telas muito estreitas. Implementação direta em código, sem comp de referência; não há sorteio de conceito para um pedido com composição definida.

THESIS: permitir explorar presentes por fotografia e consultar um item específico pelo WhatsApp.
OWN-WORLD: herdar azul dos títulos, rosa, branco/pastel, DM Serif Display e Manrope do site; usar as fotografias existentes confirmadas pelo usuário.
STORY: retorno à Home, título da categoria, aviso de prévia, grade de oito posições, ampliação e consulta do presente selecionado.
FIRST VIEWPORT: Header existente, cabeçalho rosa pastel com título azul e descrição solicitada, aviso discreto de revisão e início da grade de quatro colunas em 1440px. Em 390px, duas colunas com botões legíveis e fotos 4:5.
FORM: imagens dominam os cards; nomes descritivos e observacionais, sem composição comercial ou preço. Modal nativo com fechamento, foco, Escape e contato contextual. Movimento contido com o Reveal existente e prefers-reduced-motion.
CONSTRAINTS: somente uma categoria; prévia sem publicação; não apresentar posições pendentes como itens reais; design da Home preservado além do link solicitado e do destino correto das âncoras compartilhadas.

## Confirmação do usuário

Pergunta: as fotos de cestas já usadas no site são reais e podem entrar na prévia com nomes descritivos provisórios?
Resposta: "Sim, usar na prévia".

## Inventário utilizado

| Referência provisória | Fotografia | Pendências |
| --- | --- | --- |
| Cesta com ursinho | public/images/categoria-cestas.png | Nome oficial, descrição/composição e disponibilidade |
| Cesta com balão de coração | public/images/inspiracao-extra.png | Nome oficial, descrição/composição e disponibilidade |
| Cesta rosa personalizada | public/images/categoria-datas-comemorativas.jpg | Nome oficial, descrição/composição e disponibilidade |

Os assets de banners e hero são cenas amplas ou referências semelhantes; não foram convertidos em itens adicionais nem em ângulos extras sem identificação confiável. As cinco posições restantes estão explicitamente reservadas na prévia, sem imagem de produto inventada nem CTA. Faltam cinco produtos distintos com fotografias, nomes e informações oficiais. Os três atuais também precisam de aprovação de nomes e descrições. Não há preços cadastrados.

## Arquitetura e publicação

Rota: `/presentes/cestas-personalizadas`. Dados em `src/data/catalog.ts`. Componentes reutilizáveis em `src/components/catalog/`: CategoryHeader, ProductGrid, ProductCard e ProductDetailsModal. Outras categorias não foram criadas.

O modal suporta uma lista de fotografias, incluindo navegação por botões, teclado e swipe quando houver mais de uma fotografia confirmada para o mesmo produto. Cada referência atual tem somente uma fotografia; não se inventaram variações para demonstrar essa funcionalidade.

`basketCatalog.preview` mantém o aviso e as posições pendentes. `preview: false` omite as posições reservadas; a publicação só deve acontecer após aprovação e revisão dos dados. A rota está com `noindex, nofollow` enquanto prévia. Isso não é controle de acesso: não fazer deploy antes da aprovação. Esta tarefa não autoriza commit/push nem publicação.

O número do WhatsApp permanece o configurado no projeto. A mensagem inclui nome descritivo e ID de referência, codificados pelo helper existente. O Header/Footer mantêm a mesma renderização; âncoras de Home agora usam `/#...` para funcionar também em rotas internas.

## Validação da prévia

Build de produção concluído com TypeScript/lint e geração estática da rota. Em Chromium, testados 1440, 1024, 768, 390, 360 e 320px: colunas esperadas, oito posições, três produtos, cinco pendências, fotos carregadas em 4:5, sem overflow horizontal, CTAs com altura mínima de 44px e URLs/contexto corretos do WhatsApp. Modal validado com Tab contido, Escape, botão X, restauração do foco e bloqueio/restauração do scroll da página. Testados retorno à Home, clique da categoria e supressão do clique após deslocamento do ponteiro. Sem exceções de runtime. Não houve teste em aparelho físico ou navegação multifoto com um produto real, pois os itens atuais têm uma foto cada.

Capturas finais: `artifacts/catalog/desktop.png` (1440px), `mobile.png` (390px) e `modal-mobile.png`. Resultados do navegador em `artifacts/catalog/validation.json`. Revisão independente Impeccable: **ship no escopo da prévia local**, sem correções materiais. Conferência documental confirmou a herança do sistema visual, sem criar nova identidade ou reparar lacunas globais preexistentes. Aprovação editorial/visual do usuário e cinco produtos adicionais continuam pendentes; não houve commit, push ou deploy desta vitrine.
