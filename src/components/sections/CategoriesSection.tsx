"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/site-config";
import { Container } from "@/components/ui/Container";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { createWhatsAppUrl } from "@/lib/utils";
import { DoodleTripleHearts } from "@/components/ui/Doodles";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/animation";

const categories = [
  {
    id: "cestas",
    title: "Cestas personalizadas",
    description: "Combinações especiais para emocionar em qualquer ocasião.",
    imageSrc: "/images/categoria-cestas.png",
    whatsappMessage: "Olá! Gostaria de um orçamento para uma Cesta Personalizada da Mimos e Caprichos.",
  },
  {
    id: "baloes",
    title: "Balões & surpresas",
    description: "Balões, kits e combinações que criam momentos únicos.",
    imageSrc: "/images/categoria-baloes.png",
    whatsappMessage: "Olá! Gostaria de encomendar balões personalizados e kits surpresa.",
  },
  {
    id: "personalizados",
    title: "Presentes personalizados",
    description: "Canecas, caixinhas, lembranças e muito mais, do seu jeito.",
    imageSrc: "/images/categoria-personalizados.png",
    whatsappMessage: "Olá! Gostaria de saber mais sobre as opções de presentes e lembranças personalizadas.",
  },
  {
    id: "corporativos",
    title: "Presentes corporativos",
    description: "Soluções criativas para empresas e eventos.",
    imageSrc: "/images/categoria-corporativos.png",
    whatsappMessage: "Olá! Gostaria de um orçamento para presentes corporativos da minha empresa.",
  },
];

export function CategoriesSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -340 : 340;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="presentes" className="py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
      <Container>
        {/* ========================================================= */}
        {/* CABEÇALHO DA SEÇÃO (Conforme referência aprovada)          */}
        {/* ========================================================= */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-12">
          {/* Lado Esquerdo: Eyebrow + Título + Três Corações Vazados */}
          <Reveal direction="up" distance={20} duration={0.75} delay={0.05} className="flex flex-col items-start">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-pink">
              NOSSOS PRESENTES
            </span>
            <div className="flex items-center gap-3 mt-1.5 flex-wrap">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] text-brand-dark tracking-tight leading-[1.12]">
                Encontre o presente perfeito
              </h2>
              <DoodleTripleHearts className="w-11 h-8 text-brand-pink shrink-0 -translate-y-1" />
            </div>
          </Reveal>

          {/* Lado Direito: Descrição Curta + Dois Botões Circulares de Navegação */}
          <Reveal direction="up" distance={20} duration={0.75} delay={0.15} className="flex items-center justify-between sm:justify-end gap-5 lg:gap-6">
            <p className="text-xs sm:text-[13px] text-brand-muted max-w-[270px] leading-relaxed">
              Opções criativas, personalizadas e cheias de carinho para cada momento da sua vida.
            </p>

            {/* Botões Circulares com Setas de Navegação */}
            <div className="flex items-center gap-2.5 shrink-0">
              <button
                type="button"
                onClick={() => handleScroll("left")}
                className="w-10 h-10 rounded-full border border-[#E8DCE2] hover:border-brand-pink bg-white text-brand-dark hover:text-brand-pink flex items-center justify-center transition-all duration-300 ease-premium shadow-2xs hover:scale-105 active:scale-95"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => handleScroll("right")}
                className="w-10 h-10 rounded-full border border-[#E8DCE2] hover:border-brand-pink bg-white text-brand-dark hover:text-brand-pink flex items-center justify-center transition-all duration-300 ease-premium shadow-2xs hover:scale-105 active:scale-95"
                aria-label="Próximo"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </Reveal>
        </div>

        {/* ========================================================= */}
        {/* CARDS DE CATEGORIAS (4 cards alinhados no desktop)        */}
        {/* ========================================================= */}
        <StaggerContainer
          ref={scrollContainerRef}
          staggerInterval={0.1}
          baseDelay={0.08}
          duration={0.75}
          distance={24}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 no-scrollbar"
        >
          {categories.map((category, index) => {
            const whatsappUrl = createWhatsAppUrl(siteConfig.phoneRaw, category.whatsappMessage);

            return (
              <StaggerItem key={category.id} index={index}>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={category.id === "corporativos" ? "corporativos" : undefined}
                  className="group flex flex-col bg-white rounded-[22px] p-3.5 sm:p-4 border border-[#F2E5EC] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_36px_-6px_rgba(235,75,142,0.14)] hover:-translate-y-1 transition-all duration-400 ease-premium h-full"
                >
                  {/* Imagem em destaque com zoom sutil até 1.03 */}
                  <div className="relative aspect-[4/3.7] w-full rounded-[16px] overflow-hidden bg-[#FAF2F5] mb-3.5">
                    <Image
                      src={category.imageSrc}
                      alt={category.title}
                      fill
                      className="object-cover object-center transition-transform duration-700 ease-premium group-hover:scale-[1.03]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>

                  {/* Bloco de Informações */}
                  <div className="flex-1 flex flex-col justify-between px-1">
                    <h3 className="font-bold text-brand-dark text-[16px] sm:text-[17px] group-hover:text-brand-pink transition-colors duration-300 ease-premium leading-snug">
                      {category.title}
                    </h3>

                    {/* Linha com Descrição à esquerda e Botão Circular Rosa com Seta à direita */}
                    <div className="flex items-end justify-between gap-3 pt-2 mt-auto">
                      <p className="text-[12px] sm:text-[12.5px] text-brand-muted leading-relaxed line-clamp-2">
                        {category.description}
                      </p>

                      {/* Ícone circular rosa com seta à direita */}
                      <div className="w-8 h-8 rounded-full border border-[#F3B3C8] bg-white text-brand-pink group-hover:bg-brand-pink group-hover:text-white group-hover:border-transparent flex items-center justify-center shrink-0 transition-all duration-300 ease-premium shadow-2xs">
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-premium group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </div>
                </a>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Container>
    </section>
  );
}
