"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { ArrowRight } from "lucide-react";
import { OurStoryDialog } from "./OurStoryDialog";
import { LargeDoodleHeart } from "@/components/ui/Doodles";
import { Reveal } from "@/components/animation";

export function AboutSection() {
  const [storyOpen, setStoryOpen] = useState(false);

  return (
    <section id="sobre" className="py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
      <Container>
        {/* ========================================================= */}
        {/* COMPOSIÇÃO HORIZONTAL DE DUAS COLUNAS (~50% / ~50%)       */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-center">
          {/* ========================================================= */}
          {/* COLUNA ESQUERDA: Fotografia Grande do Interior da Loja     */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 w-full">
            <Reveal direction="up" distance={25} duration={0.8} delay={0.05}>
              <div
                className="relative w-full rounded-[24px] sm:rounded-[28px] overflow-hidden shadow-sm border border-[#F2E5EC]/60 bg-[#FAF2F5]"
                style={{ position: "relative" }}
              >
                <Image
                  src="/images/sobre-nos-fachada.webp"
                  alt="Interior e fachada da loja Mimos e Caprichos em Valinhos"
                  width={1367}
                  height={1150}
                  priority={false}
                  className="block h-auto w-full"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </Reveal>
          </div>

          {/* ========================================================= */}
          {/* COLUNA DIREITA: Conteúdo Institucional                     */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 w-full relative">
            {/* Coração decorativo rosa no canto superior direito */}
            <div className="absolute top-0 right-0 sm:right-2 -translate-y-2 pointer-events-none select-none">
              <Reveal direction="fade" duration={0.9} delay={0.35}>
                <LargeDoodleHeart className="w-14 h-14 sm:w-16 sm:h-16 text-brand-pink" />
              </Reveal>
            </div>

            {/* Bloco de Texto Principal */}
            <div className="flex flex-col items-start space-y-5 max-w-xl pr-12 sm:pr-16">
              <Reveal direction="up" distance={20} duration={0.8} delay={0.12} className="w-full">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-pink">
                  SOBRE NÓS
                </span>

                <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] xl:text-[44px] text-[var(--color-heading-primary)] leading-[1.15] tracking-tight mt-1.5">
                  Uma história feita <br />
                  de carinho e detalhes
                </h2>
              </Reveal>

              <Reveal direction="up" distance={18} duration={0.8} delay={0.24} className="w-full">
                <p className="text-xs sm:text-[14px] text-[#554959] leading-[1.65] font-sans">
                  A Mimos e Caprichos nasceu em Valinhos com o propósito de transformar momentos em lembranças especiais. Aqui você encontra presentes criativos, personalizados e feitos com muito carinho, sempre pensando em tornar cada ocasião mais única e inesquecível.
                </p>
              </Reveal>

              <Reveal direction="up" distance={18} duration={0.8} delay={0.36} className="w-full">
                <div className="pt-2 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={() => setStoryOpen(true)}
                    aria-haspopup="dialog"
                    aria-controls="our-story-dialog"
                    className="group inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-full bg-brand-pink hover:bg-brand-pink-hover text-white text-sm font-semibold shadow-soft hover:shadow-floating transition-all duration-300 ease-premium hover:scale-[1.02]"
                  >
                    <span>Conheça nossa história</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-premium group-hover:translate-x-1" />
                  </button>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </Container>
      <OurStoryDialog open={storyOpen} onClose={() => setStoryOpen(false)} />
    </section>
  );
}
