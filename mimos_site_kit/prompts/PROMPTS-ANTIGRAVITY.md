# Mimos e Caprichos — Kit de Imagens + Prompts

Este pacote foi montado para apoiar a criação do site institucional da **Mimos e Caprichos** no VS Code usando o Antigravity.

## Estrutura sugerida de uso das imagens

- `images/logo-temporario.png` → logo no header e footer
- `images/hero-desktop.png` → imagem principal da hero no desktop
- `images/hero-mobile.png` → imagem principal da hero no mobile
- `images/categoria-cestas.png` → card/section “Cestas personalizadas”
- `images/categoria-baloes.png` → card/section “Balões e surpresas”
- `images/categoria-personalizados.png` → card/section “Presentes personalizados”
- `images/banner-personalizados.png` → banner largo da seção “Seu presente, do seu jeito”
- `images/categoria-corporativos.png` → card/section “Presentes corporativos”
- `images/sobre-loja.png` → seção “Sobre nós” ou “Nossa loja”
- `images/banner-inspiracao.png` → seção “Inspirações que encantam” ou banner secundário
- `images/inspiracao-extra.png` → imagem de apoio para galeria ou carrossel

---

## PROMPT 01 — Estrutura inicial do projeto

Crie o projeto do site institucional da **Mimos e Caprichos**, uma loja de presentes personalizados em Valinhos-SP.

### Stack
- Next.js com App Router
- React + TypeScript
- Tailwind CSS
- Lucide React para ícones
- Tipografia: DM Serif Display para títulos e Manrope para textos

### Direção visual
- Estética premium, feminina, minimalista e acolhedora
- Paleta inspirada no logo:
  - Rosa principal: `#EB4B8E`
  - Rosa claro: `#FBE8EE`
  - Azul de apoio: `#18A9C9`
  - Off-white: `#FFF9F6`
  - Texto principal: `#2D2630`
- Bordas suaves, sombras leves, bastante respiro, aparência profissional de agência premium

### Objetivo do site
- Site institucional no primeiro momento
- Foco em apresentação da empresa, serviços/produtos, confiança e geração de contato
- CTA forte para WhatsApp
- Não criar e-commerce, carrinho ou checkout

### Requisitos
1. Analise a pasta atual antes de alterar qualquer coisa.
2. Se estiver vazia, inicialize o projeto.
3. Estruture o site para ser desenvolvido por seções/dobras.
4. Crie componentes reutilizáveis.
5. Deixe o projeto responsivo.
6. Faça a base pronta para publicação futura na Vercel.

---

## PROMPT 02 — Header + Hero

Desenvolva a primeira dobra do site usando as imagens do pacote.

### Header
- Barra superior discreta com:
  - “Presentes personalizados em Valinhos”
  - “Atendimento pelo WhatsApp”
  - telefone `(19) 99200-5279`
- Logo à esquerda usando `images/logo-temporario.png`
- Menu: Início, Nossa História, Presentes, Empresas, Avaliações, Contato
- Botão principal rosa: **Fale conosco**
- Header sticky, elegante, com leve sombra ao rolar
- Mobile com menu hambúrguer funcional

### Hero Desktop
Use `images/hero-desktop.png`.

#### Conteúdo textual
Eyebrow:
**PRESENTES QUE TRANSFORMAM MOMENTOS**

Título:
**Pequenos gestos.**
**Grandes emoções.**

Descrição:
**Presentes e personalizados feitos com carinho para tornar cada momento inesquecível.**

Botões:
- **Fale pelo WhatsApp**
- **Conheça nossos presentes**

Ações:
- WhatsApp: `https://wa.me/5519992005279`
- Segundo botão pode rolar para a seção de presentes ou abrir WhatsApp até a seção existir.

Abaixo dos botões, criar 3 diferenciais com ícones:
- Presentes para todas as ocasiões
- Personalizados do seu jeito
- Atendimento em Valinhos e região

### Hero Mobile
Use `images/hero-mobile.png`.
Não apenas reduza a versão desktop: faça composição mobile específica.

### Animações
- Fade-in suave
- Hover sutil
- Sem exageros
- Respeitar `prefers-reduced-motion`

---

## PROMPT 03 — Seção de categorias / presentes

Crie uma seção chamada **Encontre o presente perfeito**.

Use cards com imagens do pacote:
- `images/categoria-cestas.png`
- `images/categoria-baloes.png`
- `images/categoria-personalizados.png`
- `images/categoria-corporativos.png`

### Cards
1. **Cestas personalizadas**
   - Combinações especiais para emocionar em qualquer ocasião.
2. **Balões e surpresas**
   - Balões, kits e combinações que criam momentos únicos.
3. **Presentes personalizados**
   - Canecas, caixinhas, kits e lembranças feitas com carinho.
4. **Presentes corporativos**
   - Soluções criativas para empresas, ações e eventos.

- Cards arredondados, hover suave, sombra discreta
- Layout em grid responsivo

---

## PROMPT 04 — Seção Sobre Nós

Crie uma dobra institucional com a imagem `images/sobre-loja.png`.

### Estrutura
- Imagem da loja à esquerda no desktop
- Texto à direita
- No mobile, empilhar

### Conteúdo sugerido
Tag:
**SOBRE NÓS**

Título:
**Uma história feita de carinho e detalhes**

Texto:
**A Mimos e Caprichos nasceu em Valinhos com o propósito de transformar momentos em lembranças especiais. Aqui você encontra presentes criativos, personalizados e feitos com muito carinho, sempre pensando em tornar cada ocasião mais única e inesquecível.**

Botão:
**Conheça nossa história**

---

## PROMPT 05 — Banner de personalizados

Crie uma seção de destaque com a imagem `images/banner-personalizados.png`.

### Conteúdo sugerido
Título:
**Seu presente, do seu jeito.**

Texto:
**Conte pra gente a sua ideia e criamos um presente único, com todo o carinho que cada momento merece.**

Botão:
**Personalize com a gente**

A seção deve ser visualmente forte, com grande destaque para a imagem.

---

## PROMPT 06 — Galeria / Inspirações

Crie uma seção chamada **Inspirações que encantam**.

Use como base:
- `images/banner-inspiracao.png`
- `images/inspiracao-extra.png`
- `images/categoria-cestas.png`
- `images/categoria-baloes.png`
- `images/categoria-personalizados.png`
- `images/categoria-corporativos.png`

Pode criar uma galeria em grid ou carrossel.

Texto de apoio:
**Confira algumas ideias reais que já fizeram muitos momentos se tornarem ainda mais especiais.**

---

## PROMPT 07 — Avaliações do Google

Crie uma seção de prova social com grande destaque.

### Estrutura
- Título: **O carinho de quem já comprou**
- Subtexto: **Histórias e experiências que fazem a diferença.**
- Bloco de nota média com destaque: `5,0` e `874 avaliações no Google`
- Botão: **Ver todas as avaliações no Google**

### Observação importante
Não invente avaliações finais no código de produção. Se precisar prototipar a estrutura, deixe comentários claramente identificados como placeholders até substituir pelos comentários reais.

---

## PROMPT 08 — Visite nossa loja / contato

Crie uma seção institucional com:
- Foto da loja usando `images/sobre-loja.png`
- Endereço: **Av. Onze de Agosto, 849 — Centro, Valinhos — SP, 13276-130**
- Telefone: **(19) 99200-5279**
- Horários:
  - Segunda a Sexta: 09h às 18h
  - Sábado: 09h às 13h
- Botões:
  - **Fale pelo WhatsApp**
  - **Ver no Google Maps**

---

## PROMPT 09 — Rodapé

Criar footer completo com:
- logo
- descrição curta
- menu institucional
- categorias principais
- contato
- redes sociais
- copyright
- links de política de privacidade e termos

Texto curto sugerido:
**Presentes e personalizados feitos com carinho para tornar cada momento inesquecível.**

---

## Observações gerais

- Trabalhe sempre em código, não transforme as referências em uma imagem única de fundo.
- Preserve textos editáveis em HTML.
- Otimize as imagens.
- Garanta excelente visual em desktop e mobile.
- Priorize boa performance, clareza visual e conversão por WhatsApp.

