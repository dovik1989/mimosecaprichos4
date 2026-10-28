"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { catalogCategories } from "@/data/catalog";
import { Container } from "@/components/ui/Container";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { DoodleTripleHearts, DoodleDoubleHeart } from "@/components/ui/Doodles";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/animation";
import { useCarouselNavigation } from "@/components/ui/useCarouselNavigation";
import { BalloonProgress } from "@/components/ui/BalloonProgress";

const categories = [
  {
    id: "cestas",
    title: "Cestas personalizadas",
    description: "Combinações especiais para emocionar em qualquer ocasião.",
    imageSrc: "/images/categoria-cestas-personalizadas-capa-v2.webp",
    imageFitClass: "object-cover object-top",
    whatsappMessage: "Olá! Gostaria de um orçamento para uma Cesta Personalizada da Mimos e Caprichos.",
    mobilePosClass: "obj-pos-cestas",
  },
  {
    id: "baloes",
    title: "Presentes e Mimos",
    description: "O mimo perfeito para encantar e surpreender",
    imageSrc: "/images/categoria-presentes-e-mimos-capa-v2.webp",
    imageFitClass: "object-cover object-top",
    whatsappMessage: "Olá! Gostaria de encomendar balões personalizados e kits surpresa.",
    mobilePosClass: "obj-pos-baloes",
  },
  {
    id: "personalizados",
    title: "Presentes personalizados",
    description: "Canecas, caixinhas, lembranças e muito mais.",
    imageSrc: "/images/categoria-presentes-personalizados-capa-v2.webp",
    imageFitClass: "object-cover object-center",
    whatsappMessage: "Olá! Gostaria de saber mais sobre as opções de presentes e lembranças personalizadas.",
    mobilePosClass: "obj-pos-personalizados",
  },
  {
    id: "corporativos",
    title: "Presentes corporativos",
    description: "Soluções criativas para empresas, brindes, eventos e momentos importantes.",
    imageSrc: "/images/categoria-presentes-corporativos-capa-v2.webp",
    imageFitClass: "object-cover object-center",
    desktopPosClass: "lg:object-center",
    whatsappMessage: "Olá! Gostaria de um orçamento para presentes corporativos da minha empresa.",
    mobilePosClass: "object-center",
  },
  {
    id: "datas-comemorativas",
    title: "Datas comemorativas",
    description: "Dia da Mulher, Páscoa, Dia das Mães, Namorados, Pais, Professores, Natal, aniversários, casamentos e bodas.",
    imageSrc: "/images/categoria-datas-comemorativas-capa-v2.webp",
    imageFitClass: "object-cover object-center",
    whatsappMessage: "Olá! Gostaria de conhecer as opções de presentes para datas comemorativas.",
    mobilePosClass: "object-center",
  },
];

export function CategoriesSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const cardPointerStart = useRef({ x: 0, y: 0 });
  const { progress, isDesktop, stopWheelAnimation } = useCarouselNavigation(scrollContainerRef);

  const handleScroll = (direction: "left" | "right") => {
    stopWheelAnimation.current();
    const viewport = scrollContainerRef.current;
    const track = viewport?.firstElementChild;
    const card = track?.firstElementChild;
    if (!viewport || !track || !card) return;
    const step = card.getBoundingClientRect().width + parseFloat(getComputedStyle(track).columnGap);
    viewport.scrollBy({
      left: direction === "left" ? -step : step,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
    });
  };

  return (
    <section id="presentes" className="py-10 sm:py-20 lg:py-24 bg-white overflow-hidden">
      <Container>
        {/* ========================================================= */}
        {/* CABEÇALHO DA SEÇÃO (Conforme mockup aprovado)              */}
        {/* ========================================================= */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 sm:gap-6 mb-5 sm:mb-10 lg:mb-12">
          {/* Lado Esquerdo: Eyebrow + Título + Corações Decorativos */}
          <Reveal direction="up" distance={20} duration={0.75} delay={0.05} className="flex flex-col items-start w-full lg:w-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-pink">
              NOSSAS OPÇÕES
            </span>
            <div className="mt-1.5 w-full">
              {/* Título com quebra harmoniosa no mobile e corações na mesma linha */}
              <h2 className="font-serif text-[28px] sm:text-4xl lg:text-[44px] text-[var(--color-heading-primary)] tracking-tight leading-[1.18] sm:leading-[1.12]">
                <span className="block sm:inline">Nossas cestas e </span>
                <span className="inline-flex items-center gap-2">
                  presentes
                  <DoodleDoubleHeart className="w-8 h-6 sm:hidden text-brand-pink shrink-0 -translate-y-0.5" />
                </span>
                <DoodleTripleHearts className="hidden sm:inline-block w-11 h-8 text-brand-pink shrink-0 -translate-y-1 ml-3 align-middle" />
              </h2>
            </div>
            {/* Descrição Mobile: posicionada logo abaixo do título */}
            <p className="sm:hidden text-xs text-brand-muted leading-relaxed mt-2.5">
              Opções criativas, personalizadas e cheias de carinho para cada momento da sua vida.
            </p>
          </Reveal>

          {/* Lado Direito Desktop: Descrição Curta + Dois Botões Circulares de Navegação */}
          <Reveal direction="up" distance={20} duration={0.75} delay={0.15} className="hidden sm:flex items-center justify-end gap-5 lg:gap-6">
            <p className="text-xs sm:text-[13px] text-brand-muted max-w-[270px] leading-relaxed">
              Opções criativas, personalizadas e cheias de carinho para cada momento da sua vida.
            </p>

            {/* Botões Circulares com Setas de Navegação (Desktop) */}
            <div className="hidden lg:flex items-center gap-2.5 shrink-0">
              <button
                type="button"
                onClick={() => handleScroll("left")}
                className="w-10 h-10 rounded-full border border-[#E8DCE2] hover:border-brand-pink bg-white text-brand-dark hover:text-brand-pink flex items-center justify-center transition-all duration-300 ease-premium shadow-2xs hover:scale-105 active:scale-95"
                aria-label="Anterior"
                aria-controls="gift-carousel"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => handleScroll("right")}
                className="w-10 h-10 rounded-full border border-[#E8DCE2] hover:border-brand-pink bg-white text-brand-dark hover:text-brand-pink flex items-center justify-center transition-all duration-300 ease-premium shadow-2xs hover:scale-105 active:scale-95"
                aria-label="Próximo"
                aria-controls="gift-carousel"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </Reveal>
        </div>

        {/* ========================================================= */}
        {/* CARDS DE CATEGORIAS (Mobile compacto / 4 colunas desktop)  */}
        {/* ========================================================= */}
        <div ref={scrollContainerRef} id="gift-carousel" tabIndex={isDesktop ? 0 : undefined} aria-label={isDesktop ? "Categorias de presentes; use as setas ou role para ver mais" : "Categorias de presentes"} className="lg:overflow-x-auto lg:overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden py-4 -my-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-pink">
        <StaggerContainer
          staggerInterval={0.1}
          baseDelay={0.08}
          duration={0.75}
          distance={24}
          className="flex flex-col lg:flex-row lg:flex-nowrap gap-2.5 lg:gap-6"
        >
          {categories.map((category, index) => {
            const catalog = catalogCategories.find(item => item.homeCardId === category.id);
            if (!catalog) throw new Error(`Missing catalog category: ${category.id}`);
            return (
              <StaggerItem key={category.id} index={index} className="shrink-0 w-full lg:w-[calc((100%-4.5rem)/4)]">
                <Link
                  href={`/presentes/${catalog.id}`}
                  onPointerDown={event => { cardPointerStart.current = { x: event.clientX, y: event.clientY }; }}
                  onClick={event => {
                    if (event.detail > 0 && Math.hypot(event.clientX - cardPointerStart.current.x, event.clientY - cardPointerStart.current.y) > 8) event.preventDefault();
                  }}
                  id={category.id === "corporativos" ? "corporativos" : undefined}
                  className="group flex flex-col bg-white rounded-2xl lg:rounded-[22px] p-2.5 lg:p-4 border border-[#F2E5EC] shadow-[0_2px_10px_-2px_rgba(0,0,0,0.04)] lg:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_36px_-6px_rgba(235,75,142,0.14)] hover:-translate-y-1 transition-all duration-400 ease-premium h-full"
                >
                  {/* Imagem em proporção horizontal compacta no mobile (h-[126px]) e aspecto original no desktop */}
                  <div className="relative w-full h-[126px] lg:h-auto lg:aspect-[4/3.7] rounded-[14px] lg:rounded-[16px] overflow-hidden bg-[#FAF2F5] mb-2.5 lg:mb-3.5 shrink-0">
                    <Image
                      src={category.imageSrc}
                      alt={category.title}
                      fill
                      priority
                      unoptimized
                      className={cn(
                        "transition-transform duration-700 ease-premium",
                        category.imageFitClass ?? "object-cover group-hover:scale-[1.03]",
                        category.desktopPosClass ?? "lg:object-center",
                        category.mobilePosClass
                      )}
                      sizes="(max-width: 1023px) 100vw, 25vw"
                    />
                  </div>

                  {/* Bloco de Informações Mobile (compacto: Título + Descrição à esquerda, Botão à direita) */}
                  <div className="flex lg:hidden items-center justify-between gap-2.5 px-0.5 pb-0.5">
                    <div className="min-w-0 flex-1">
                      <h3 className="font-bold text-brand-dark text-[14.5px] leading-tight group-hover:text-brand-pink transition-colors">
                        {category.title}
                      </h3>
                      <p className={cn("text-[11.5px] text-brand-muted leading-tight mt-1", category.id !== "datas-comemorativas" && "line-clamp-2")}>
                        {category.description}
                      </p>
                    </div>

                    <div className="w-8 h-8 rounded-full border border-[#F3B3C8] bg-white text-brand-pink group-hover:bg-brand-pink group-hover:text-white group-hover:border-transparent flex items-center justify-center shrink-0 transition-all duration-300 ease-premium shadow-2xs">
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-premium group-hover:translate-x-0.5" />
                    </div>
                  </div>

                  {/* Bloco de Informações Desktop (100% preservado conforme layout original) */}
                  <div className="hidden lg:flex flex-1 flex-col justify-between px-1">
                    <h3 className="font-bold text-brand-dark text-[16px] lg:text-[17px] group-hover:text-brand-pink transition-colors duration-300 ease-premium leading-snug">
                      {category.title}
                    </h3>

                    <div className="flex items-end justify-between gap-3 pt-2 mt-auto">
                      <p className={cn("text-[12px] lg:text-[12.5px] text-brand-muted leading-relaxed", category.id !== "datas-comemorativas" && "line-clamp-2")}>
                        {category.description}
                      </p>

                      <div className="w-8 h-8 rounded-full border border-[#F3B3C8] bg-white text-brand-pink group-hover:bg-brand-pink group-hover:text-white group-hover:border-transparent flex items-center justify-center shrink-0 transition-all duration-300 ease-premium shadow-2xs">
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-premium group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
        </div>
        <div className="hidden lg:block">
          <BalloonProgress progress={progress} />
        </div>
      </Container>
    </section>
  );
}
