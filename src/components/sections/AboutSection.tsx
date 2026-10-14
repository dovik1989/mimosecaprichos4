import React from "react";
import Image from "next/image";
import { siteConfig } from "@/data/site-config";
import { Container } from "@/components/ui/Container";
import { ArrowRight, Heart, Star, Package } from "lucide-react";
import { createWhatsAppUrl } from "@/lib/utils";
import { ScriptQuote } from "@/components/ui/Doodles";

export function AboutSection() {
  const whatsappUrl = createWhatsAppUrl(
    siteConfig.phoneRaw,
    "Olá! Conheci a história da Mimos e Caprichos no site e gostaria de saber mais sobre a loja."
  );

  return (
    <section id="sobre" className="py-16 sm:py-24 bg-white overflow-hidden">
      <Container>
        {/* ========================================================= */}
        {/* LAYOUT MOBILE (Conforme "mobile.png" tela 3)               */}
        {/* ========================================================= */}
        <div className="lg:hidden flex flex-col items-start space-y-5">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-pink">
            SOBRE NÓS
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl text-brand-dark leading-[1.18] tracking-tight">
            Uma história feita de carinho e detalhes
          </h2>

          <p className="text-sm text-brand-muted leading-relaxed font-sans">
            A Mimos e Caprichos nasceu em Valinhos com o propósito de transformar momentos em lembranças especiais. Aqui você encontra presentes criativos, personalizados e feitos com muito carinho, sempre pensando em tornar cada ocasião mais única e inesquecível.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-brand-pink text-white text-sm font-semibold shadow-soft hover:bg-brand-pink-hover transition-all"
          >
            <span>Conheça nossa história</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          {/* Imagem da loja no mobile */}
          <div className="w-full pt-2">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-card border-2 border-white bg-white">
              <Image
                src="/images/sobre-loja.png"
                alt="Loja Mimos e Caprichos em Valinhos"
                fill
                className="object-cover object-center"
                sizes="(max-width: 640px) 100vw, 400px"
              />
            </div>
          </div>

          {/* 3 Indicadores Mobile */}
          <div className="grid grid-cols-3 gap-2 w-full pt-4 text-center">
            <div className="flex flex-col items-center">
              <Heart className="w-5 h-5 text-brand-pink mb-1" />
              <p className="text-xs font-bold text-brand-dark">+27 mil</p>
              <p className="text-[10px] text-brand-muted leading-tight">entregas realizadas</p>
            </div>

            <div className="flex flex-col items-center">
              <Star className="w-5 h-5 text-brand-pink mb-1" />
              <p className="text-xs font-bold text-brand-dark">Atendimento</p>
              <p className="text-[10px] text-brand-muted leading-tight">personalizado</p>
            </div>

            <div className="flex flex-col items-center">
              <Package className="w-5 h-5 text-brand-pink mb-1" />
              <p className="text-xs font-bold text-brand-dark">Loja física</p>
              <p className="text-[10px] text-brand-muted leading-tight">em Valinhos</p>
            </div>
          </div>

          {/* Frase em Lettering / Script no mobile */}
          <div className="w-full pt-6 flex justify-center">
            <ScriptQuote className="scale-95" />
          </div>
        </div>

        {/* ========================================================= */}
        {/* LAYOUT DESKTOP (Conforme "Homepage Pastel Mimos e Caprichos") */}
        {/* ========================================================= */}
        <div className="hidden lg:grid grid-cols-12 gap-10 xl:gap-14 items-center">
          {/* Imagem da loja à esquerda (5 colunas) */}
          <div className="col-span-5">
            <div className="relative aspect-[4/3] rounded-3xl xl:rounded-4xl overflow-hidden shadow-card border-4 border-white bg-white">
              <Image
                src="/images/sobre-loja.png"
                alt="Loja Mimos e Caprichos em Valinhos"
                fill
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
                sizes="(min-width: 1024px) 45vw, 500px"
              />
            </div>
          </div>

          {/* Texto à direita (4 colunas) */}
          <div className="col-span-4 flex flex-col items-start space-y-5">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-pink">
              SOBRE NÓS
            </span>

            <h2 className="font-serif text-3xl xl:text-4xl text-brand-dark leading-[1.2] tracking-tight">
              Uma história feita de carinho e detalhes
            </h2>

            <p className="text-sm xl:text-base text-brand-muted leading-relaxed font-sans">
              A Mimos e Caprichos nasceu em Valinhos com o propósito de transformar momentos em lembranças especiais. Aqui você encontra presentes criativos, personalizados e feitos com muito carinho, sempre pensando em tornar cada ocasião mais única e inesquecível.
            </p>

            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-brand-pink hover:bg-brand-pink-hover text-white text-sm font-semibold shadow-soft hover:shadow-floating transition-all duration-300 hover:scale-[1.02]"
              >
                <span>Conheça nossa história</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Frase em Lettering / Script no canto direito (3 colunas) */}
          <div className="col-span-3 flex justify-center pl-4 border-l border-[#F7E8EE]">
            <ScriptQuote />
          </div>
        </div>
      </Container>
    </section>
  );
}
