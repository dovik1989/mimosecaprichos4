"use client";

import React from "react";
import Image from "next/image";
import { siteConfig } from "@/data/site-config";
import { Container } from "@/components/ui/Container";
import { ArrowRight, Pencil, Heart } from "lucide-react";
import { createWhatsAppUrl } from "@/lib/utils";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/animation";

function RibbonBowIcon({ className = "w-6 h-6 text-brand-pink" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="11.5" r="2" />
      <path d="M10 11.5C6.5 9 3.5 8 3.5 10.5c0 2.5 4.5 1.5 6.5 1" />
      <path d="M14 11.5c3.5-2.5 6.5-3.5 6.5-1 0 2.5-4.5 1.5-6.5 1" />
      <path d="M10.5 13.5L7 20" />
      <path d="M13.5 13.5L17 20" />
    </svg>
  );
}

export function CustomBannerSection() {
  const whatsappUrl = createWhatsAppUrl(
    siteConfig.phoneRaw,
    "Olá! Quero personalizar um presente exclusivo do meu jeito na Mimos e Caprichos."
  );

  return (
    <section id="personalize" className="py-10 sm:py-14 bg-white overflow-hidden">
      <Container>
        {/* Faixa horizontal elegante em tom pastel rosa conforme o mockup aprovado */}
        <div className="relative rounded-[26px] sm:rounded-[32px] bg-[#FFF2F6] border border-[#F8DEE8] px-6 sm:px-10 lg:px-12 py-8 sm:py-9 lg:py-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 xl:gap-8 items-center">
            {/* ========================================================= */}
            {/* 1. Coluna Esquerda: Eyebrow + Título + Texto + Botão      */}
            {/* ========================================================= */}
            <div className="lg:col-span-4 flex flex-col items-start space-y-3.5 sm:space-y-4">
              <Reveal direction="up" distance={20} duration={0.8} delay={0.08} className="w-full">
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-brand-pink">
                  PERSONALIZADOS
                </span>

                <h2 className="font-serif text-3xl sm:text-4xl lg:text-[38px] xl:text-[42px] text-[var(--color-heading-primary)] leading-[1.12] tracking-tight mt-1.5">
                  Seu presente, <br />
                  <span className="text-brand-pink font-normal italic">do seu jeito.</span>
                </h2>
              </Reveal>

              <Reveal direction="up" distance={16} duration={0.8} delay={0.20} className="w-full">
                <p className="text-xs sm:text-[13px] text-[#554959] leading-[1.65] font-sans max-w-sm">
                  Conte pra gente a sua ideia e criamos um presente único, com todo o carinho que cada momento merece.
                </p>
              </Reveal>

              <Reveal direction="up" distance={16} duration={0.8} delay={0.32} className="w-full">
                <div className="pt-2">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-brand-pink hover:bg-brand-pink-hover text-white text-xs sm:text-sm font-semibold shadow-soft hover:shadow-floating transition-all duration-300 ease-premium hover:scale-[1.02]"
                  >
                    <span>Personalize com a gente</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-premium group-hover:translate-x-1" />
                  </a>
                </div>
              </Reveal>
            </div>

            {/* ========================================================= */}
            {/* 2. Coluna Central: Imagem ampla e integrada               */}
            {/* ========================================================= */}
            <div className="lg:col-span-5 flex justify-center w-full">
              <Reveal direction="up" distance={25} duration={0.85} delay={0.18} className="w-full">
                <div
                  className="relative w-full aspect-[16/10.5] sm:aspect-[16/10] rounded-[20px] sm:rounded-[22px] overflow-hidden shadow-sm border border-[#F6DCE7]/60 bg-white"
                  style={{ position: "relative" }}
                >
                  <Image
                    src="/images/banner-personalizados.png"
                    alt="Seu presente, do seu jeito - Mimos e Caprichos"
                    fill
                    priority={false}
                    className="object-cover object-center transition-transform duration-700 ease-premium hover:scale-[1.02]"
                    sizes="(max-width: 1024px) 100vw, 550px"
                  />
                </div>
              </Reveal>
            </div>

            {/* ========================================================= */}
            {/* 3. Coluna Direita: 3 Ícones verticais delicados           */}
            {/* ========================================================= */}
            <StaggerContainer
              staggerInterval={0.12}
              baseDelay={0.28}
              duration={0.8}
              distance={20}
              className="lg:col-span-3 flex flex-row lg:flex-col justify-around lg:justify-between items-center h-full py-2 gap-4 lg:gap-7 border-t lg:border-t-0 lg:border-l border-[#F2D7E4] lg:pl-6 xl:pl-8"
            >
              {/* Item 1 */}
              <StaggerItem index={0} className="flex flex-col items-center text-center group">
                <Pencil
                  className="w-6 h-6 text-brand-pink stroke-[1.7] mb-1.5 transition-transform duration-300 ease-premium group-hover:scale-110"
                  width="24"
                  height="24"
                />
                <span className="text-[11px] sm:text-xs font-semibold text-brand-dark leading-snug">
                  Escolha os itens
                </span>
              </StaggerItem>

              {/* Item 2 */}
              <StaggerItem index={1} className="flex flex-col items-center text-center group">
                <RibbonBowIcon className="w-6 h-6 text-brand-pink mb-1.5 transition-transform duration-300 ease-premium group-hover:scale-110" />
                <span className="text-[11px] sm:text-xs font-semibold text-brand-dark leading-snug">
                  Personalize como quiser
                </span>
              </StaggerItem>

              {/* Item 3 */}
              <StaggerItem index={2} className="flex flex-col items-center text-center group">
                <Heart
                  className="w-6 h-6 text-brand-pink stroke-[1.7] mb-1.5 transition-transform duration-300 ease-premium group-hover:scale-110"
                  width="24"
                  height="24"
                />
                <span className="text-[11px] sm:text-xs font-semibold text-brand-dark leading-snug">
                  Surpreenda alguém especial
                </span>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </Container>
    </section>
  );
}
