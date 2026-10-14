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
      className="relative pt-6 sm:pt-10 pb-12 lg:pt-12 lg:pb-16 bg-[#FFF9FB] overflow-hidden"
    >
      <Container>
        {/* ========================================================= */}
        {/* COMPOSIÇÃO MOBILE (Conforme referência "mobile.png")       */}
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

          {/* Botões Mobile (WhatsApp primeiro, depois Conheça nossos presentes) */}
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
              className="flex items-center justify-center py-3.5 px-6 rounded-full bg-white border border-brand-pink/30 text-brand-dark text-sm font-semibold hover:border-brand-pink transition-all"
            >
              Conheça nossos presentes
            </a>
          </div>

          {/* Imagem Mobile (hero-mobile.png com cantos arredondados) */}
          <div className="w-full pt-3">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-card border-2 border-white bg-white">
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

          {/* 3 Diferenciais Mobile (Linha com ícones) */}
          <div className="grid grid-cols-3 gap-2 w-full pt-4 text-center">
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
        <div className="hidden lg:grid grid-cols-12 gap-10 xl:gap-14 items-center">
          {/* Coluna Texto (6 colunas) */}
          <div className="col-span-6 flex flex-col items-start text-left space-y-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-dark/70">
              PRESENTES QUE TRANSFORMAM MOMENTOS
            </span>

            <h1 className="font-serif text-5xl xl:text-6xl text-brand-dark leading-[1.12] tracking-tight">
              Pequenos gestos. <br />
              <span className="text-brand-pink font-normal italic">Grandes emoções.</span>
            </h1>

            <p className="text-lg text-brand-muted leading-relaxed font-sans max-w-lg">
              Presentes e personalizados feitos com carinho para tornar cada momento inesquecível.
            </p>

            {/* Botões Desktop: Conheça nossos presentes (rosa) + Fale pelo WhatsApp (branco) */}
            <div className="flex items-center gap-4 pt-2">
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

            {/* 3 Diferenciais Desktop com ícones elegantes em linha */}
            <div className="pt-8 mt-2 flex items-center gap-6 border-t border-[#F5E2EC] w-full">
              <div className="flex items-center gap-3">
                <Gift className="w-5 h-5 text-brand-pink shrink-0" />
                <span className="text-xs font-medium text-brand-dark/85 max-w-[120px] leading-tight">
                  Presentes para todas as ocasiões
                </span>
              </div>

              <div className="h-8 w-[1px] bg-[#F5E2EC]" />

              <div className="flex items-center gap-3">
                <Heart className="w-5 h-5 text-brand-pink shrink-0" />
                <span className="text-xs font-medium text-brand-dark/85 max-w-[120px] leading-tight">
                  Personalizados do seu jeito
                </span>
              </div>

              <div className="h-8 w-[1px] bg-[#F5E2EC]" />

              <div className="flex items-center gap-3">
                <Truck className="w-5 h-5 text-brand-pink shrink-0" />
                <span className="text-xs font-medium text-brand-dark/85 max-w-[140px] leading-tight">
                  Retirada na loja e entregas em Valinhos e região
                </span>
              </div>
            </div>
          </div>

          {/* Coluna Imagem Desktop (6 colunas) */}
          <div className="col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-3xl xl:rounded-4xl overflow-hidden shadow-card border-4 border-white bg-white">
              <Image
                src="/images/hero-desktop.png"
                alt="Presentes e personalizados da Mimos e Caprichos em Valinhos"
                fill
                priority
                className="object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
                sizes="(min-width: 1024px) 50vw, 600px"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
