"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { MessageCircle, Gift, Heart, ArrowRight, ArrowDown } from "lucide-react";
import { DoodleHeart } from "@/components/ui/Doodles";
import { Reveal } from "@/components/animation";

function DoodleGiftBox({ className = "w-14 h-16" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="56"
      height="68"
      viewBox="0 0 56 68"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Cyan/Blue box with hand-drawn dash pattern */}
      <rect
        x="6"
        y="24"
        width="44"
        height="40"
        rx="4"
        stroke="#00AEEF"
        strokeWidth="2"
        fill="#FFFFFF"
      />
      {/* Decorative hand-drawn doodle text/lines on box */}
      <path d="M11 34h8M11 42h5M11 50h10M36 36h8M36 46h6" stroke="#00AEEF" strokeWidth="1.5" />

      {/* Vertical pink ribbon */}
      <rect x="23" y="24" width="10" height="40" fill="#EB4B8E" />

      {/* Pink Bow on top */}
      <path
        d="M28 24C21 14 9 12 13 20c3 6 15 4 15 4z"
        fill="#FFA4C8"
        stroke="#EB4B8E"
        strokeWidth="1.8"
      />
      <path
        d="M28 24C35 14 47 12 43 20c-3 6-15 4-15 4z"
        fill="#FFA4C8"
        stroke="#EB4B8E"
        strokeWidth="1.8"
      />
      <circle cx="28" cy="24" r="3.5" fill="#EB4B8E" />
      {/* Hanging ribbon tails */}
      <path d="M25 26c-3 6-5 12-6 16" stroke="#EB4B8E" strokeWidth="2" />
      <path d="M31 26c3 6 5 12 6 16" stroke="#EB4B8E" strokeWidth="2" />
    </svg>
  );
}

export function HowItWorksSection() {
  return (
    <section className="relative py-10 sm:py-12 lg:py-14 bg-white border-t border-[#F8E7EE] overflow-hidden">
      <Container className="relative z-10">
        {/* ========================================================= */}
        {/* LAYOUT DESKTOP: UMA ÚNICA FAIXA HORIZONTAL (35% / 65%)    */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* ========================================================= */}
          {/* COLUNA ESQUERDA (~35%): Eyebrow + Título                   */}
          {/* ========================================================= */}
          <Reveal direction="up" distance={20} duration={0.8} delay={0.05} className="lg:col-span-4 flex flex-col items-start justify-center">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-pink mb-1.5">
              COMO FUNCIONA
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-[34px] xl:text-[38px] text-[var(--color-heading-primary)] leading-[1.18] tracking-tight">
              É simples surpreender <br />
              com a Mimos e Caprichos
            </h2>
          </Reveal>

          {/* ========================================================= */}
          {/* COLUNA DIREITA (~65%): 3 Passos Horizontais + Doodles      */}
          {/* ========================================================= */}
          <div className="hidden lg:block lg:col-span-8 relative">
            <div className="flex items-start justify-between w-full lg:pr-14 xl:pr-16">
              {/* ---------------- PASSO 1 ---------------- */}
              <Reveal direction="up" distance={22} duration={0.8} delay={0.15} className="flex-1 flex flex-col items-center text-center">
                {/* Número 1 em pequeno círculo rosa acima do ícone */}
                <div className="w-6 h-6 rounded-full border-2 border-brand-pink text-brand-pink text-xs font-bold flex items-center justify-center bg-white mb-2 shadow-2xs">
                  1
                </div>

                {/* Ícone de conversa em círculo rosa suave */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#FFF0F5] border border-[#FADDE8]/80 flex items-center justify-center text-brand-pink mb-3 shadow-2xs">
                  <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-brand-pink stroke-[1.8]" />
                </div>

                <h3 className="font-bold text-brand-dark text-sm sm:text-[15px] leading-snug">
                  Conte sua ideia
                </h3>
                <p className="text-xs text-[#554959] mt-1 leading-[1.4] max-w-[170px]">
                  Fale pra gente a ocasião e o que você imagina.
                </p>
              </Reveal>

              {/* Seta horizontal 1 (alinhada à altura dos ícones) */}
              <Reveal direction="fade" duration={0.7} delay={0.25} className="pt-9 sm:pt-10 px-1 text-slate-400 shrink-0">
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 stroke-[1.8]" />
              </Reveal>

              {/* ---------------- PASSO 2 ---------------- */}
              <Reveal direction="up" distance={22} duration={0.8} delay={0.32} className="flex-1 flex flex-col items-center text-center">
                {/* Número 2 em pequeno círculo rosa */}
                <div className="w-6 h-6 rounded-full border-2 border-brand-pink text-brand-pink text-xs font-bold flex items-center justify-center bg-white mb-2 shadow-2xs">
                  2
                </div>

                {/* Ícone de presente em círculo rosa suave */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#FFF0F5] border border-[#FADDE8]/80 flex items-center justify-center text-brand-pink mb-3 shadow-2xs">
                  <Gift className="w-6 h-6 sm:w-7 sm:h-7 text-brand-pink stroke-[1.8]" />
                </div>

                <h3 className="font-bold text-brand-dark text-sm sm:text-[15px] leading-snug">
                  Criamos com carinho
                </h3>
                <p className="text-xs text-[#554959] mt-1 leading-[1.4] max-w-[170px]">
                  Montamos uma opção especial e personalizada.
                </p>
              </Reveal>

              {/* Seta horizontal 2 (alinhada à altura dos ícones) */}
              <Reveal direction="fade" duration={0.7} delay={0.42} className="pt-9 sm:pt-10 px-1 text-slate-400 shrink-0">
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 stroke-[1.8]" />
              </Reveal>

              {/* ---------------- PASSO 3 ---------------- */}
              <Reveal direction="up" distance={22} duration={0.8} delay={0.48} className="flex-1 flex flex-col items-center text-center">
                {/* Número 3 em pequeno círculo rosa */}
                <div className="w-6 h-6 rounded-full border-2 border-brand-pink text-brand-pink text-xs font-bold flex items-center justify-center bg-white mb-2 shadow-2xs">
                  3
                </div>

                {/* Ícone de coração em círculo rosa suave */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#FFF0F5] border border-[#FADDE8]/80 flex items-center justify-center text-brand-pink mb-3 shadow-2xs">
                  <Heart className="w-6 h-6 sm:w-7 sm:h-7 text-brand-pink stroke-[1.8]" />
                </div>

                <h3 className="font-bold text-brand-dark text-sm sm:text-[15px] leading-snug">
                  Surpreenda alguém
                </h3>
                <p className="text-xs text-[#554959] mt-1 leading-[1.4] max-w-[170px]">
                  Entregamos um presente que vai emocionar.
                </p>
              </Reveal>
            </div>

            {/* ========================================================= */}
            {/* ELEMENTOS DECORATIVOS À DIREITA (Coração e Presente)       */}
            {/* ========================================================= */}
            {/* Coração em contorno no canto superior direito */}
            <div className="hidden lg:block absolute -top-1 right-2 xl:right-4 text-brand-pink">
              <Reveal direction="fade" duration={0.8} delay={0.5}>
                <DoodleHeart className="w-6 h-6 text-brand-pink rotate-12" />
              </Reveal>
            </div>

            {/* Ilustração decorativa de presente no canto inferior direito */}
            <div className="hidden lg:block absolute -bottom-3 right-0">
              <Reveal direction="fade" duration={0.8} delay={0.55}>
                <DoodleGiftBox className="w-12 h-16 xl:w-14 xl:h-18" />
              </Reveal>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* LAYOUT MOBILE (Organização Vertical Conforme Referência)   */}
        {/* ========================================================= */}
        <div className="lg:hidden mt-8 flex flex-col space-y-6">
          {/* Passo 1 */}
          <Reveal direction="up" distance={18} duration={0.75} delay={0.1}>
            <div className="flex items-start gap-4">
              <div className="relative shrink-0 flex flex-col items-center">
                <span className="w-5 h-5 rounded-full border border-brand-pink text-brand-pink text-[10px] font-bold flex items-center justify-center bg-white mb-1">
                  1
                </span>
                <div className="w-12 h-12 rounded-full bg-[#FFF0F5] border border-[#FADDE8] flex items-center justify-center text-brand-pink shadow-xs">
                  <MessageCircle className="w-5 h-5 text-brand-pink stroke-[1.8]" />
                </div>
              </div>
              <div className="pt-2">
                <h3 className="font-bold text-brand-dark text-base">Conte sua ideia</h3>
                <p className="text-xs text-[#554959] mt-0.5 leading-relaxed">
                  Fale pra gente a ocasião e o que você imagina.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal direction="fade" duration={0.6} delay={0.18} className="pl-6 text-slate-300">
            <ArrowDown className="w-4 h-4 text-slate-400" />
          </Reveal>

          {/* Passo 2 */}
          <Reveal direction="up" distance={18} duration={0.75} delay={0.24}>
            <div className="flex items-start gap-4">
              <div className="relative shrink-0 flex flex-col items-center">
                <span className="w-5 h-5 rounded-full border border-brand-pink text-brand-pink text-[10px] font-bold flex items-center justify-center bg-white mb-1">
                  2
                </span>
                <div className="w-12 h-12 rounded-full bg-[#FFF0F5] border border-[#FADDE8] flex items-center justify-center text-brand-pink shadow-xs">
                  <Gift className="w-5 h-5 text-brand-pink stroke-[1.8]" />
                </div>
              </div>
              <div className="pt-2">
                <h3 className="font-bold text-brand-dark text-base">Criamos com carinho</h3>
                <p className="text-xs text-[#554959] mt-0.5 leading-relaxed">
                  Montamos uma opção especial e personalizada.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal direction="fade" duration={0.6} delay={0.32} className="pl-6 text-slate-300">
            <ArrowDown className="w-4 h-4 text-slate-400" />
          </Reveal>

          {/* Passo 3 */}
          <Reveal direction="up" distance={18} duration={0.75} delay={0.38}>
            <div className="flex items-start gap-4">
              <div className="relative shrink-0 flex flex-col items-center">
                <span className="w-5 h-5 rounded-full border border-brand-pink text-brand-pink text-[10px] font-bold flex items-center justify-center bg-white mb-1">
                  3
                </span>
                <div className="w-12 h-12 rounded-full bg-[#FFF0F5] border border-[#FADDE8] flex items-center justify-center text-brand-pink shadow-xs">
                  <Heart className="w-5 h-5 text-brand-pink stroke-[1.8]" />
                </div>
              </div>
              <div className="pt-2">
                <h3 className="font-bold text-brand-dark text-base">Surpreenda alguém</h3>
                <p className="text-xs text-[#554959] mt-0.5 leading-relaxed">
                  Entregamos um presente que vai emocionar.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

