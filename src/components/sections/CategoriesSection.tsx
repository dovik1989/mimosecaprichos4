import React from "react";
import Image from "next/image";
import { siteConfig } from "@/data/site-config";
import { Container } from "@/components/ui/Container";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { createWhatsAppUrl } from "@/lib/utils";
import { DoodleDoubleHeart } from "@/components/ui/Doodles";

const categories = [
  {
    id: "cestas",
    title: "Cestas personalizadas",
    description: "Combinações especiais para emocionar em qualquer ocasião.",
    imageSrc: "/images/categoria-cestas.png",
    whatsappMessage: "Olá! Gostaria de um orçamento para uma Cesta Personalizada.",
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
    whatsappMessage: "Olá! Gostaria de saber mais sobre opções de presentes personalizados.",
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
  return (
    <section id="presentes" className="py-16 sm:py-24 bg-white">
      <Container>
        {/* Cabeçalho da Seção com Título e Setas de Navegação (Desktop) */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-10 sm:mb-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-pink">
              NOSSOS PRESENTES
            </span>
            <div className="flex items-center gap-2 mt-1">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-dark tracking-tight">
                Encontre o presente perfeito
              </h2>
              <DoodleDoubleHeart className="w-7 h-7 sm:w-9 sm:h-9 text-brand-pink shrink-0" />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <p className="text-xs sm:text-sm text-brand-muted max-w-xs leading-relaxed hidden sm:block">
              Opções criativas, personalizadas e cheias de carinho para cada momento da sua vida.
            </p>

            <div className="hidden sm:flex items-center gap-2">
              <button
                type="button"
                className="w-9 h-9 rounded-full border border-[#F2D7E2] hover:border-brand-pink text-brand-dark hover:text-brand-pink flex items-center justify-center transition-colors"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                className="w-9 h-9 rounded-full border border-[#F2D7E2] hover:border-brand-pink text-brand-dark hover:text-brand-pink flex items-center justify-center transition-colors"
                aria-label="Próximo"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Subtexto Mobile */}
        <p className="text-xs text-brand-muted mb-6 sm:hidden">
          Opções criativas, personalizadas e cheias de carinho para cada momento da sua vida.
        </p>

        {/* Grid de 4 Cards (4 colunas no desktop, empilhados no mobile conforme mockups) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            const whatsappUrl = createWhatsAppUrl(siteConfig.phoneRaw, category.whatsappMessage);

            return (
              <a
                key={category.id}
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                id={category.id === "corporativos" ? "corporativos" : undefined}
                className="group flex flex-col bg-white rounded-3xl p-3.5 border border-[#F6E6ED] shadow-xs hover:shadow-card hover:-translate-y-1 transition-all duration-300"
              >
                {/* Imagem com cantos arredondados */}
                <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-[#FAF2F5] mb-4">
                  <Image
                    src={category.imageSrc}
                    alt={category.title}
                    fill
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>

                {/* Conteúdo */}
                <div className="flex-1 flex flex-col justify-between px-1.5 pb-1">
                  <div>
                    <h3 className="font-bold text-brand-dark text-base sm:text-lg group-hover:text-brand-pink transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-xs text-brand-muted mt-1 leading-relaxed">
                      {category.description}
                    </p>
                  </div>

                  {/* Seta circular rosa no canto inferior direito conforme mockup */}
                  <div className="flex justify-end pt-4 mt-2">
                    <div className="w-8 h-8 rounded-full border border-[#F6DCE5] text-brand-pink group-hover:bg-brand-pink group-hover:text-white group-hover:border-transparent flex items-center justify-center transition-all duration-300">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
