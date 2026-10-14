import React from "react";
import Image from "next/image";
import { siteConfig } from "@/data/site-config";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { MessageCircle, ArrowUpRight, Sparkles } from "lucide-react";
import { createWhatsAppUrl } from "@/lib/utils";

interface CategoryData {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  tag: string;
  whatsappMessage: string;
}

const categories: CategoryData[] = [
  {
    id: "cestas",
    title: "Cestas personalizadas",
    description: "Combinações especiais para emocionar em qualquer ocasião.",
    imageSrc: "/images/categoria-cestas.png",
    tag: "Mais Pedidas",
    whatsappMessage: "Olá! Gostaria de um orçamento para uma Cesta Personalizada da Mimos e Caprichos.",
  },
  {
    id: "baloes",
    title: "Balões e surpresas",
    description: "Balões, kits e combinações que criam momentos únicos.",
    imageSrc: "/images/categoria-baloes.png",
    tag: "Momentos Únicos",
    whatsappMessage: "Olá! Gostaria de saber mais sobre os Balões e kits de surpresa.",
  },
  {
    id: "personalizados",
    title: "Presentes personalizados",
    description: "Canecas, caixinhas, kits e lembranças feitas com carinho.",
    imageSrc: "/images/categoria-personalizados.png",
    tag: "Feito com Afeto",
    whatsappMessage: "Olá! Gostaria de conhecer as opções de Presentes Personalizados (canecas, caixas e kits).",
  },
  {
    id: "corporativos",
    title: "Presentes corporativos",
    description: "Soluções criativas para empresas, ações e eventos.",
    imageSrc: "/images/categoria-corporativos.png",
    tag: "Para Empresas",
    whatsappMessage: "Olá! Gostaria de um orçamento para Presentes Corporativos da minha empresa.",
  },
];

export function CategoriesSection() {
  return (
    <section id="presentes" className="py-20 lg:py-28 bg-[#FFFDFB] relative">
      <Container>
        <SectionHeading
          eyebrow="NOSSO CATÁLOGO AFETIVO"
          title="Encontre o presente perfeito"
          description="Cada detalhe é planejado com muito afeto para surpreender quem você ama ou valorizar seus parceiros e colaboradores."
          align="center"
          className="mb-12 sm:mb-16"
        />

        {/* Grid Responsivo de 4 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {categories.map((category) => {
            const whatsappUrl = createWhatsAppUrl(siteConfig.phoneRaw, category.whatsappMessage);

            return (
              <div
                key={category.id}
                id={category.id === "corporativos" ? "corporativos" : undefined}
                className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-brand-border/70 shadow-sm hover:shadow-card hover:-translate-y-1.5 transition-all duration-300"
              >
                {/* Imagem do Card com Badge e Overlay */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-pink-subtle">
                  <Image
                    src={category.imageSrc}
                    alt={category.title}
                    fill
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Tag discreta no canto superior */}
                  <div className="absolute top-3.5 left-3.5">
                    <span className="bg-white/95 backdrop-blur-sm text-brand-dark text-[11px] font-semibold px-3 py-1 rounded-full border border-brand-pink-light/60 shadow-xs">
                      {category.tag}
                    </span>
                  </div>
                </div>

                {/* Conteúdo textual */}
                <div className="flex-1 p-6 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-serif text-2xl text-brand-dark group-hover:text-brand-pink transition-colors duration-300">
                      {category.title}
                    </h3>
                    <p className="mt-2.5 text-sm text-brand-muted leading-relaxed font-sans">
                      {category.description}
                    </p>
                  </div>

                  {/* Botão de Ação / Pedido */}
                  <div className="pt-4 border-t border-brand-border/50">
                    <Button
                      href={whatsappUrl}
                      variant="secondary"
                      size="sm"
                      fullWidth
                      className="group-hover:bg-brand-pink group-hover:text-white transition-all duration-300 justify-between font-semibold"
                      rightIcon={<ArrowUpRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
                    >
                      Pedir pelo WhatsApp
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bloco de Apoio Inferior: Ideias sob medida */}
        <div className="mt-14 sm:mt-16 bg-brand-pink-subtle/70 rounded-3xl p-6 sm:p-8 border border-brand-pink-light/80 text-center max-w-3xl mx-auto shadow-xs">
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-brand-pink-light text-brand-pink mb-3">
            <Sparkles className="w-5 h-5" />
          </div>
          <h4 className="font-serif text-xl sm:text-2xl text-brand-dark">
            Não encontrou exatamente o que tinha em mente?
          </h4>
          <p className="mt-2 text-sm sm:text-base text-brand-muted leading-relaxed max-w-xl mx-auto">
            Criamos opções personalizadas sob medida para a sua história. Conte sua ideia e montamos uma proposta exclusiva.
          </p>
          <div className="mt-5">
            <Button
              href={createWhatsAppUrl(
                siteConfig.phoneRaw,
                "Olá! Gostaria de conversar sobre uma ideia personalizada exclusiva para um presente."
              )}
              variant="primary"
              size="md"
              leftIcon={<MessageCircle className="w-4 h-4 text-white" />}
            >
              Falar com nossa equipe no WhatsApp
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
