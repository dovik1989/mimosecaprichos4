"use client";

import React, { useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/site-config";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { MessageCircle, Sparkles, X, ZoomIn, ArrowRight } from "lucide-react";
import { createWhatsAppUrl } from "@/lib/utils";

interface GalleryItem {
  id: string;
  title: string;
  category: "all" | "cestas" | "baloes" | "personalizados" | "corporativos";
  categoryLabel: string;
  imageSrc: string;
  colSpanDesktop: string;
  aspectDesktop: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: "banner-insp",
    title: "Composições Elegantes para Aniversários & Celebrações",
    category: "cestas",
    categoryLabel: "Cestas & Flores",
    imageSrc: "/images/banner-inspiracao.png",
    colSpanDesktop: "lg:col-span-8",
    aspectDesktop: "aspect-[16/9] lg:aspect-[21/9]",
  },
  {
    id: "extra-insp",
    title: "Momentos Afetivos & Detalhes Especiais",
    category: "personalizados",
    categoryLabel: "Lembranças Afetivas",
    imageSrc: "/images/inspiracao-extra.png",
    colSpanDesktop: "lg:col-span-4",
    aspectDesktop: "aspect-square lg:aspect-auto",
  },
  {
    id: "cestas-insp",
    title: "Cesta de Café da Manhã Completa",
    category: "cestas",
    categoryLabel: "Cestas Artesanais",
    imageSrc: "/images/categoria-cestas.png",
    colSpanDesktop: "lg:col-span-3 sm:col-span-6",
    aspectDesktop: "aspect-square",
  },
  {
    id: "baloes-insp",
    title: "Bouquet de Balões & Caixinha Surpresa",
    category: "baloes",
    categoryLabel: "Balões e Surpresas",
    imageSrc: "/images/categoria-baloes.png",
    colSpanDesktop: "lg:col-span-3 sm:col-span-6",
    aspectDesktop: "aspect-square",
  },
  {
    id: "pers-insp",
    title: "Kits de Porcelana & Mimos Criativos",
    category: "personalizados",
    categoryLabel: "Personalizados",
    imageSrc: "/images/categoria-personalizados.png",
    colSpanDesktop: "lg:col-span-3 sm:col-span-6",
    aspectDesktop: "aspect-square",
  },
  {
    id: "corp-insp",
    title: "Presentes e Brindes Corporativos de Fim de Ano",
    category: "corporativos",
    categoryLabel: "Empresas",
    imageSrc: "/images/categoria-corporativos.png",
    colSpanDesktop: "lg:col-span-3 sm:col-span-6",
    aspectDesktop: "aspect-square",
  },
];

const filterTabs = [
  { id: "all", label: "Todas as Ideias" },
  { id: "cestas", label: "Cestas" },
  { id: "baloes", label: "Balões & Surpresas" },
  { id: "personalizados", label: "Personalizados" },
  { id: "corporativos", label: "Corporativos" },
];

export function InspirationsSection() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filteredItems =
    activeFilter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <section id="inspiracoes" className="py-20 lg:py-28 bg-[#FFFBF8] border-t border-brand-border/40 relative">
      <Container>
        {/* Cabeçalho da Seção */}
        <SectionHeading
          eyebrow="PORTFÓLIO DE AFETO"
          title="Inspirações que encantam"
          description="Confira algumas ideias reais que já fizeram muitos momentos se tornarem ainda mais especiais."
          align="center"
          className="mb-10 sm:mb-12"
        />

        {/* Filtros em Abas Delicadas */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-2.5 mb-10 sm:mb-14">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`text-xs sm:text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-pink ${
                  isActive
                    ? "bg-brand-pink text-white shadow-soft"
                    : "bg-white text-brand-dark/80 hover:text-brand-pink hover:bg-brand-pink-light/50 border border-brand-border/60"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Galeria em Grid Responsivo e Elegante */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 sm:gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className={`group relative rounded-3xl overflow-hidden border border-brand-border/70 shadow-sm bg-white cursor-pointer hover:shadow-card transition-all duration-500 col-span-1 sm:col-span-6 ${
                activeFilter === "all" ? item.colSpanDesktop : "lg:col-span-4"
              }`}
            >
              <div
                className={`relative w-full h-full min-h-[250px] sm:min-h-[280px] ${
                  activeFilter === "all" ? item.aspectDesktop : "aspect-square"
                }`}
              >
                <Image
                  src={item.imageSrc}
                  alt={item.title}
                  fill
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Overlay de Hover com Informações e Ícone de Zoom */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/85 via-brand-dark/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 text-white">
                  <div className="flex justify-end">
                    <span className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                      <ZoomIn className="w-4 h-4" />
                    </span>
                  </div>

                  <div>
                    <span className="inline-block text-[11px] font-semibold uppercase tracking-wider text-brand-pink-light bg-brand-pink/60 backdrop-blur-sm px-2.5 py-0.5 rounded-full mb-1.5">
                      {item.categoryLabel}
                    </span>
                    <h4 className="font-serif text-lg sm:text-xl font-normal leading-snug">
                      {item.title}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Botão de Encomenda Abaixo da Galeria */}
        <div className="mt-14 sm:mt-16 text-center">
          <Button
            href={createWhatsAppUrl(
              siteConfig.phoneRaw,
              "Olá! Vi a galeria de inspirações no site e gostaria de encomendar um presente especial parecido."
            )}
            variant="primary"
            size="lg"
            leftIcon={<MessageCircle className="w-5 h-5 text-white" />}
            rightIcon={<ArrowRight className="w-4 h-4 ml-1" />}
            className="shadow-soft hover:shadow-floating"
          >
            Quero um presente inspirado nessas ideias
          </Button>
        </div>

        {/* Modal / Lightbox de Visualização Rápida */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-2xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Botão Fechar */}
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
                aria-label="Fechar visualização"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Imagem Ampliada */}
              <div className="relative aspect-[4/3] w-full bg-stone-100">
                <Image
                  src={selectedImage.imageSrc}
                  alt={selectedImage.title}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 700px"
                />
              </div>

              {/* Detalhes e CTA de Encomenda no Modal */}
              <div className="p-6 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white">
                <div>
                  <span className="text-xs font-semibold uppercase text-brand-pink tracking-wider">
                    {selectedImage.categoryLabel}
                  </span>
                  <h3 className="font-serif text-xl text-brand-dark mt-0.5">
                    {selectedImage.title}
                  </h3>
                </div>

                <Button
                  href={createWhatsAppUrl(
                    siteConfig.phoneRaw,
                    `Olá! Adorei a inspiração "${selectedImage.title}" que vi no site e gostaria de encomendar algo parecido.`
                  )}
                  variant="primary"
                  size="md"
                  leftIcon={<MessageCircle className="w-4 h-4 text-white" />}
                  className="shrink-0 w-full sm:w-auto"
                >
                  Pedir no WhatsApp
                </Button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
