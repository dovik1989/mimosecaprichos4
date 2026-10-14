import React from "react";
import Image from "next/image";
import { siteConfig } from "@/data/site-config";
import { Container } from "@/components/ui/Container";
import { ArrowRight } from "lucide-react";
import { createWhatsAppUrl } from "@/lib/utils";
import { LargeDoodleHeart, HandmadeLettering } from "@/components/ui/Doodles";

export function AboutSection() {
  const whatsappUrl = createWhatsAppUrl(
    siteConfig.phoneRaw,
    "Olá! Conheci a história da Mimos e Caprichos no site e gostaria de saber mais sobre a loja e os presentes."
  );

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
            <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full rounded-[24px] sm:rounded-[28px] overflow-hidden shadow-sm border border-[#F2E5EC]/60 bg-[#FAF2F5]">
              <Image
                src="/images/sobre-loja.png"
                alt="Interior e fachada da loja Mimos e Caprichos em Valinhos"
                fill
                priority={false}
                className="object-cover object-center transition-transform duration-700 ease-out hover:scale-[1.02]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* ========================================================= */}
          {/* COLUNA DIREITA: Conteúdo Institucional + Lettering         */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
              {/* Bloco de Texto Principal (Aproximadamente 70% da coluna) */}
              <div className="sm:col-span-8 flex flex-col items-start space-y-5">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-pink">
                  SOBRE NÓS
                </span>

                <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] xl:text-[44px] text-brand-dark leading-[1.15] tracking-tight">
                  Uma história feita <br />
                  de carinho e detalhes
                </h2>

                <p className="text-xs sm:text-[14px] text-[#554959] leading-[1.65] font-sans">
                  A Mimos e Caprichos nasceu em Valinhos com o propósito de transformar momentos em lembranças especiais. Aqui você encontra presentes criativos, personalizados e feitos com muito carinho, sempre pensando em tornar cada ocasião mais única e inesquecível.
                </p>

                <div className="pt-2 w-full sm:w-auto">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-full bg-brand-pink hover:bg-brand-pink-hover text-white text-sm font-semibold shadow-soft hover:shadow-floating transition-all duration-300 hover:scale-[1.02]"
                  >
                    <span>Conheça nossa história</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Elementos Decorativos à Direita: Coração no Topo + Lettering no Rodapé */}
              <div className="sm:col-span-4 flex sm:flex-col items-center justify-around sm:justify-between self-stretch pt-4 sm:pt-0 sm:pl-2">
                {/* Coração decorativo rosa no canto superior direito conforme referência */}
                <div className="sm:self-end">
                  <LargeDoodleHeart className="w-14 h-14 sm:w-16 sm:h-16 text-brand-pink" />
                </div>

                {/* Frase decorativa em estilo manuscrito com sparkles */}
                <div className="sm:self-center mt-2 sm:mt-auto">
                  <HandmadeLettering className="scale-90 sm:scale-100" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
