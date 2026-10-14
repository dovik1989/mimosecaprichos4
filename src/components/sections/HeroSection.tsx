import React from "react";
import Image from "next/image";
import { siteConfig } from "@/data/site-config";
import { Container } from "@/components/ui/Container";
import { MessageCircle, Gift, Heart, Truck, ArrowRight } from "lucide-react";
import { createWhatsAppUrl } from "@/lib/utils";

export function HeroSection() {
  const whatsappUrl = createWhatsAppUrl(
    siteConfig.phoneRaw,
    "Olá! Gostaria de encomendar um presente especial na Mimos e Caprichos."
  );

  return (
    <section
      id="inicio"
      className="relative bg-[#FFF9F6] overflow-hidden min-h-[580px] lg:min-h-[620px] xl:min-h-[660px] flex items-center"
    >
      {/* ========================================================================= */}
      {/* IMAGEM DESKTOP INTEGRADA COM FADE SUAVE NO LADO ESQUERDO (>= lg)          */}
      {/* Sem container de card, sem borda dura, sem sombra: fusão com o fundo      */}
      {/* ========================================================================= */}
      <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[52%] xl:w-[56%] 2xl:w-[53%] z-0 pointer-events-none select-none">
        <div className="relative w-full h-full">
          {/* Imagem real hero-desktop com enquadramento preservando os presentes */}
          <Image
            src="/images/hero-desktop.png"
            alt="Presentes e personalizados da Mimos e Caprichos em Valinhos"
            fill
            priority
            className="object-cover object-right"
            sizes="(min-width: 1024px) 56vw, 800px"
          />

          {/* Overlay de Fade no lado esquerdo conforme especificação do mockup */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to left, transparent 0%, rgba(255,249,246,0.15) 20%, rgba(255,249,246,0.55) 40%, rgba(255,249,246,0.9) 70%, #FFF9F6 100%)",
            }}
          />

          {/* Suaves fusões de transição no topo e na base para total integração */}
          <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-[#FFF9F6] to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#FFF9F6] to-transparent pointer-events-none" />
        </div>
      </div>

      <Container className="relative z-10 py-10 sm:py-12 lg:py-16 xl:py-20 w-full">
        {/* ========================================================= */}
        {/* COMPOSIÇÃO MOBILE (< lg) (Conforme referência "mobile.png") */}
        {/* ========================================================= */}
        <div className="lg:hidden flex flex-col items-start text-left space-y-4">
          {/* Eyebrow */}
          <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-brand-dark/70">
            PRESENTES QUE TRANSFORMAM MOMENTOS
          </span>

          {/* Título Mobile */}
          <h1 className="font-serif text-4xl sm:text-5xl text-brand-dark leading-[1.12] tracking-tight">
            Pequenos gestos. <br />
            <span className="text-brand-pink font-normal italic">Grandes emoções.</span>
          </h1>

          {/* Descrição Mobile */}
          <p className="text-sm sm:text-base text-brand-muted leading-relaxed font-sans">
            Presentes e personalizados feitos com carinho para tornar cada momento inesquecível.
          </p>

          {/* Botões Mobile */}
          <div className="flex flex-col gap-3 w-full pt-1">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-brand-pink hover:bg-brand-pink-hover text-white text-sm font-semibold shadow-soft transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white text-transparent" />
              <span>Fale pelo WhatsApp</span>
              <ArrowRight className="w-4 h-4 ml-0.5" />
            </a>

            <a
              href="#presentes"
              className="flex items-center justify-center py-3.5 px-6 rounded-full bg-white border border-[#F3D7E3] hover:border-brand-pink text-brand-dark text-sm font-semibold transition-all"
            >
              Conheça nossos presentes
            </a>
          </div>

          {/* Imagem Mobile (hero-mobile.png adaptada à largura) */}
          <div className="w-full pt-2">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-[#F5E2EC] bg-white shadow-2xs">
              <Image
                src="/images/hero-mobile.png"
                alt="Presentes afetivos Mimos e Caprichos"
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 640px) 100vw, 400px"
              />
            </div>
          </div>

          {/* 3 Diferenciais Mobile em linha com ícones */}
          <div className="grid grid-cols-3 gap-2 w-full pt-3 text-center">
            <div className="flex flex-col items-center">
              <div className="w-9 h-9 rounded-xl bg-[#FDEAF1] flex items-center justify-center text-brand-pink mb-1.5">
                <Gift className="w-4 h-4" />
              </div>
              <span className="text-[11px] font-medium text-brand-dark/85 leading-snug">
                Presentes para todas as ocasiões
              </span>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-9 h-9 rounded-xl bg-[#FDEAF1] flex items-center justify-center text-brand-pink mb-1.5">
                <Heart className="w-4 h-4" />
              </div>
              <span className="text-[11px] font-medium text-brand-dark/85 leading-snug">
                Personalizados do seu jeito
              </span>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-9 h-9 rounded-xl bg-[#FDEAF1] flex items-center justify-center text-brand-pink mb-1.5">
                <Truck className="w-4 h-4" />
              </div>
              <span className="text-[11px] font-medium text-brand-dark/85 leading-snug">
                Entrega em Valinhos e região
              </span>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* COMPOSIÇÃO DESKTOP (Conforme "Homepage Pastel Mimos e Caprichos") */}
        {/* ========================================================= */}
        <div className="hidden lg:grid grid-cols-12 gap-8 xl:gap-12 items-center">
          {/* Coluna Texto (7 colunas no lg, 6 no xl para respiração perfeita) */}
          <div className="col-span-7 xl:col-span-6 flex flex-col items-start text-left space-y-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-dark/70">
              PRESENTES QUE TRANSFORMAM MOMENTOS
            </span>

            <h1 className="font-serif text-5xl xl:text-6xl text-brand-dark leading-[1.12] tracking-tight">
              Pequenos gestos. <br />
              <span className="text-brand-pink font-normal italic">Grandes emoções.</span>
            </h1>

            <p className="text-base xl:text-lg text-brand-muted leading-relaxed font-sans max-w-lg">
              Presentes e personalizados feitos com carinho para tornar cada momento inesquecível.
            </p>

            {/* Botões Desktop: Conheça nossos presentes (rosa) + Fale pelo WhatsApp (branco) */}
            <div className="flex items-center gap-4 pt-1">
              <a
                href="#presentes"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-brand-pink hover:bg-brand-pink-hover text-white text-sm font-semibold shadow-soft hover:shadow-floating transition-all duration-300 hover:scale-[1.02]"
              >
                <span>Conheça nossos presentes</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white border border-[#F3D7E3] hover:border-brand-pink text-brand-dark text-sm font-semibold shadow-xs hover:bg-[#FFF8FA] transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4 fill-emerald-500 text-transparent" />
                <span>Fale pelo WhatsApp</span>
              </a>
            </div>

            {/* 3 Diferenciais Desktop com divisores elegantes em linha */}
            <div className="pt-8 mt-2 flex items-center gap-6 border-t border-[#F5E2EC] w-full">
              <div className="flex items-center gap-3">
                <Gift className="w-5 h-5 text-brand-pink shrink-0" />
                <span className="text-xs font-medium text-brand-dark/85 max-w-[125px] leading-tight">
                  Presentes para todas as ocasiões
                </span>
              </div>

              <div className="h-8 w-[1px] bg-[#F5E2EC]" />

              <div className="flex items-center gap-3">
                <Heart className="w-5 h-5 text-brand-pink shrink-0" />
                <span className="text-xs font-medium text-brand-dark/85 max-w-[125px] leading-tight">
                  Personalizados do seu jeito
                </span>
              </div>

              <div className="h-8 w-[1px] bg-[#F5E2EC]" />

              <div className="flex items-center gap-3">
                <Truck className="w-5 h-5 text-brand-pink shrink-0" />
                <span className="text-xs font-medium text-brand-dark/85 max-w-[145px] leading-tight">
                  Retirada na loja e entregas em Valinhos e região
                </span>
              </div>
            </div>
          </div>

          {/* Espaço da direita no grid reservado para a composição da foto com fade */}
          <div className="col-span-5 xl:col-span-6" />
        </div>
      </Container>
    </section>
  );
}
