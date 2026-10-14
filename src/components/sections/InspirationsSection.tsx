"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/site-config";
import { Container } from "@/components/ui/Container";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { createWhatsAppUrl } from "@/lib/utils";

const inspirationPhotos = [
  {
    id: "photo-1",
    imageSrc: "/images/banner-inspiracao.png",
    title: "Buquê de Balão com Cesta",
    category: "baloes",
  },
  {
    id: "photo-2",
    imageSrc: "/images/categoria-baloes.png",
    title: "Balão Feliz Dia das Crianças",
    category: "baloes",
  },
  {
    id: "photo-3",
    imageSrc: "/images/inspiracao-extra.png",
    title: "Bandeja Ser Criança é Bom Demais",
    category: "personalizados",
  },
  {
    id: "photo-4",
    imageSrc: "/images/categoria-cestas.png",
    title: "Cesta de Ursinho & Chocolates",
    category: "cestas",
  },
  {
    id: "photo-5",
    imageSrc: "/images/categoria-corporativos.png",
    title: "Kit Executivo Personalizado",
    category: "personalizados",
  },
  {
    id: "photo-6",
    imageSrc: "/images/categoria-personalizados.png",
    title: "Caneca Amor Não Envelhece",
    category: "personalizados",
  },
  {
    id: "photo-7",
    imageSrc: "/images/hero-desktop.png",
    title: "Cesta Feliz Dia das Professoras",
    category: "cestas",
  },
  {
    id: "photo-8",
    imageSrc: "/images/banner-personalizados.png",
    title: "Kit Você é Especial",
    category: "personalizados",
  },
];

const mobileFilterTabs = [
  { id: "all", label: "Todos" },
  { id: "cestas", label: "Cestas" },
  { id: "baloes", label: "Balões" },
  { id: "personalizados", label: "Personalizados" },
];

export function InspirationsSection() {
  const [mobileFilter, setMobileFilter] = useState("all");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const whatsappUrl = createWhatsAppUrl(
    siteConfig.phoneRaw,
    "Olá! Vi a galeria de inspirações no site e gostaria de encomendar algo especial."
  );

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -260 : 260;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const filteredMobilePhotos =
    mobileFilter === "all"
      ? inspirationPhotos
      : inspirationPhotos.filter((p) => p.category === mobileFilter);

  return (
    <section id="inspiracoes" className="py-14 sm:py-20 bg-white border-t border-[#F8E7EE]">
      <Container>
        {/* ========================================================= */}
        {/* CABEÇALHO DA SEÇÃO (Alinhado com a referência aprovada)   */}
        {/* ========================================================= */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-7 sm:mb-9">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-pink">
              GALERIA
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-[34px] xl:text-[38px] text-brand-dark tracking-tight mt-1 leading-[1.2]">
              Inspirações que encantam
            </h2>
          </div>

          <div className="flex items-center gap-5 sm:gap-6">
            <p className="text-xs sm:text-[13px] text-[#554959] max-w-xs lg:max-w-sm leading-relaxed hidden sm:block">
              Confira algumas ideias reais que já fizeram muitos momentos serem ainda mais especiais.
            </p>

            {/* Setas de navegação circulares com scroll interativo */}
            <div className="hidden sm:flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => scroll("left")}
                className="w-9 h-9 rounded-full border border-[#F0D5E1] hover:border-brand-pink bg-white text-brand-dark hover:text-brand-pink flex items-center justify-center transition-colors shadow-2xs active:scale-95"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-4 h-4" width="16" height="16" />
              </button>
              <button
                type="button"
                onClick={() => scroll("right")}
                className="w-9 h-9 rounded-full border border-[#F0D5E1] hover:border-brand-pink bg-white text-brand-dark hover:text-brand-pink flex items-center justify-center transition-colors shadow-2xs active:scale-95"
                aria-label="Próximo"
              >
                <ChevronRight className="w-4 h-4" width="16" height="16" />
              </button>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* LAYOUT DESKTOP: 5 CARDS EM LINHA (Proporção compacta)     */}
        {/* ========================================================= */}
        <div
          ref={scrollContainerRef}
          className="hidden lg:flex gap-3.5 xl:gap-4 overflow-x-auto scroll-smooth no-scrollbar py-1"
        >
          {inspirationPhotos.map((photo) => (
            <div
              key={photo.id}
              className="flex-none w-[calc((100%-4*16px)/5)] aspect-[4/4.3] rounded-[18px] sm:rounded-[20px] overflow-hidden bg-[#FAF2F5] border border-[#F5E2EC] shadow-2xs hover:shadow-card hover:-translate-y-1 transition-all duration-300 relative group"
              style={{ position: "relative" }}
            >
              <Image
                src={photo.imageSrc}
                alt={photo.title}
                fill
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 1280px) 20vw, 240px"
              />
            </div>
          ))}
        </div>

        {/* ========================================================= */}
        {/* LAYOUT MOBILE (Conforme mockup "mobile.png" tela 4)        */}
        {/* ========================================================= */}
        <div className="lg:hidden flex flex-col space-y-6">
          {/* Abas de filtro mobile */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
            {mobileFilterTabs.map((tab) => {
              const isActive = mobileFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setMobileFilter(tab.id)}
                  className={`text-xs font-semibold px-4 py-1.5 rounded-full whitespace-nowrap transition-all ${
                    isActive
                      ? "bg-brand-pink text-white shadow-xs"
                      : "bg-[#FBF1F5] text-brand-dark/80 hover:bg-[#F8E3EC]"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Grid 2 colunas mobile */}
          <div className="grid grid-cols-2 gap-3">
            {filteredMobilePhotos.map((photo) => (
              <div
                key={photo.id}
                className="relative aspect-square rounded-2xl overflow-hidden bg-[#FAF2F5] border border-[#F5E2EC] shadow-2xs"
                style={{ position: "relative" }}
              >
                <Image
                  src={photo.imageSrc}
                  alt={photo.title}
                  fill
                  className="object-cover object-center"
                  sizes="50vw"
                />
              </div>
            ))}
          </div>

          {/* Botão Ver mais inspirações mobile */}
          <div className="pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-full bg-brand-pink text-white text-sm font-semibold shadow-soft"
            >
              <span>Ver mais inspirações</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
