"use client";

import React from "react";
import Image from "next/image";
import { siteConfig } from "@/data/site-config";
import { Container } from "@/components/ui/Container";
import { Gift, Heart, Truck, ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import { createWhatsAppUrl } from "@/lib/utils";
import { Reveal } from "@/components/animation";

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
        <Reveal direction="fade" duration={0.9} delay={0.1} className="w-full h-full">
          <div className="relative w-full h-full">
            {/* Imagem real hero-desktop com enquadramento preservando os presentes */}
            <Image
              src="/images/hero-banner-cestas.webp"
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
        </Reveal>
      </div>

      <Container className="relative z-10 py-10 sm:py-12 lg:py-16 xl:py-20 w-full">
        {/* ========================================================= */}
        {/* COMPOSIÇÃO MOBILE (< lg) (Conforme referência "mobile.png") */}
        {/* ========================================================= */}
        <div className="lg:hidden flex flex-col items-start text-left space-y-4">
          {/* Título Mobile */}
          <Reveal direction="up" distance={16} duration={0.7} delay={0.05} className="w-full">
            <h1 className="font-serif text-4xl sm:text-5xl text-brand-dark leading-[1.12] tracking-tight">
              <span className="text-[var(--color-heading-primary)]">Pequenos gestos.</span> <br />
              <span className="text-brand-pink font-normal italic">Grandes emoções.</span>
            </h1>
          </Reveal>

          {/* Descrição Mobile */}
          <Reveal direction="up" distance={14} duration={0.7} delay={0.16} className="w-full">
            <p className="text-sm sm:text-base text-brand-muted leading-relaxed font-sans">
              Presentes e personalizados que encantam, surpreendem e eternizam momentos.
            </p>
          </Reveal>

          {/* Botão Mobile */}
          <Reveal direction="up" distance={14} duration={0.7} delay={0.28} className="w-full">
            <div className="w-full pt-1">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-full bg-brand-pink hover:bg-brand-pink-hover text-white text-sm font-semibold shadow-soft transition-all duration-300 ease-premium"
              >
                <FaWhatsapp size={19} aria-hidden="true" className="shrink-0" />
                <span>Fale pelo WhatsApp</span>
                <ArrowRight className="w-4 h-4 ml-0.5 transition-transform duration-300 ease-premium group-hover:translate-x-1" />
              </a>
            </div>
          </Reveal>

          {/* Imagem Mobile integrada com degradê superior suave (sem card, sem borda, sem sombra) */}
          <Reveal direction="up" distance={18} duration={0.75} delay={0.38} className="w-full">
            <div className="w-full pt-1">
              <div
                className="relative aspect-[4/4] sm:aspect-[4/3.6] w-full rounded-b-[28px] rounded-t-[20px] overflow-hidden"
                style={{
                  WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.2) 6%, rgba(0,0,0,0.8) 18%, black 30%, black 100%)",
                  maskImage: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.2) 6%, rgba(0,0,0,0.8) 18%, black 30%, black 100%)",
                }}
              >
                <Image
                  src="/images/hero-banner-cestas.webp"
                  alt="Presentes afetivos Mimos e Caprichos"
                  fill
                  priority
                  className="object-cover object-[center_30%]"
                  sizes="(max-width: 640px) 100vw, 400px"
                />

                {/* Degradê superior suave fundindo a imagem com o fundo da Hero */}
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[#FFF9F6] via-[#FFF9F6]/85 via-25% via-[#FFF9F6]/40 via-65% to-transparent z-10"
                  aria-hidden="true"
                />

                {/* Suave fusão na base para transição harmoniosa */}
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#FFF9F6]/40 to-transparent z-10"
                  aria-hidden="true"
                />
              </div>
            </div>
          </Reveal>

          {/* 3 Diferenciais Mobile em linha com ícones */}
          <Reveal direction="up" distance={14} duration={0.7} delay={0.48} className="w-full">
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
          </Reveal>
        </div>

        {/* ========================================================= */}
        {/* COMPOSIÇÃO DESKTOP (Conforme "Homepage Pastel Mimos e Caprichos") */}
        {/* ========================================================= */}
        <div className="hidden lg:grid grid-cols-12 gap-8 xl:gap-12 items-center">
          {/* Coluna Texto (7 colunas no lg, 6 no xl para respiração perfeita) */}
          <div className="col-span-7 xl:col-span-6 flex flex-col items-start text-left space-y-6">
            <Reveal direction="up" distance={20} duration={0.7} delay={0.05} className="w-full">
              <h1 className="font-serif text-5xl xl:text-6xl text-brand-dark leading-[1.12] tracking-tight">
                <span className="text-[var(--color-heading-primary)]">Pequenos gestos.</span> <br />
                <span className="text-brand-pink font-normal italic">Grandes emoções.</span>
              </h1>
            </Reveal>

            <Reveal direction="up" distance={16} duration={0.7} delay={0.18} className="w-full">
              <p className="text-base xl:text-lg text-brand-muted leading-relaxed font-sans max-w-lg">
                Presentes e personalizados que encantam, surpreendem e eternizam momentos.
              </p>
            </Reveal>

            {/* Botão Desktop: Fale pelo WhatsApp */}
            <Reveal direction="up" distance={16} duration={0.7} delay={0.30} className="w-full">
              <div className="pt-1">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-brand-pink hover:bg-brand-pink-hover text-white text-sm font-semibold shadow-soft hover:shadow-floating transition-all duration-300 ease-premium hover:scale-[1.02]"
                >
                  <FaWhatsapp size={19} aria-hidden="true" className="shrink-0" />
                  <span>Fale pelo WhatsApp</span>
                  <ArrowRight className="w-4 h-4 ml-0.5 transition-transform duration-300 ease-premium group-hover:translate-x-1" />
                </a>
              </div>
            </Reveal>

            {/* 3 Diferenciais Desktop com divisores elegantes em linha */}
            <Reveal direction="up" distance={16} duration={0.7} delay={0.42} className="w-full">
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
            </Reveal>
          </div>

          {/* Espaço da direita no grid reservado para a composição da foto com fade */}
          <div className="col-span-5 xl:col-span-6" />
        </div>
      </Container>
    </section>
  );
}
