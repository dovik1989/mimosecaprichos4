import React from "react";
import Image from "next/image";
import { siteConfig } from "@/data/site-config";
import { Container } from "@/components/ui/Container";
import { ArrowRight, Pencil, Gift, Heart } from "lucide-react";
import { createWhatsAppUrl } from "@/lib/utils";

export function CustomBannerSection() {
  const whatsappUrl = createWhatsAppUrl(
    siteConfig.phoneRaw,
    "Olá! Quero personalizar um presente exclusivo do meu jeito na Mimos e Caprichos."
  );

  return (
    <section id="personalize" className="py-12 sm:py-16 bg-white">
      <Container>
        {/* Card em tom pastel rosa conforme o mockup aprovado */}
        <div className="relative rounded-3xl sm:rounded-4xl bg-[#FFF2F6] border border-[#FADDE8] p-6 sm:p-10 lg:p-12 overflow-hidden shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
            {/* Coluna Esquerda: Texto + Botão (4 colunas) */}
            <div className="lg:col-span-4 flex flex-col items-start space-y-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-pink">
                PERSONALIZADOS
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-dark leading-[1.15] tracking-tight">
                Seu presente, <br />
                <span className="text-brand-pink font-normal italic">do seu jeito.</span>
              </h2>

              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-sans max-w-sm">
                Conte pra gente a sua ideia e criamos um presente único, com todo o carinho que cada momento merece.
              </p>

              <div className="pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-brand-pink hover:bg-brand-pink-hover text-white text-xs sm:text-sm font-semibold shadow-soft hover:shadow-floating transition-all duration-300"
                >
                  <span>Personalize com a gente</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Coluna Central: Imagem real banner-personalizados.png (5 colunas) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/banner-personalizados.png"
                  alt="Seu presente, do seu jeito - Mimos e Caprichos"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 450px"
                />
              </div>
            </div>

            {/* Coluna Direita: 3 Passos com ícones em círculos rosa (3 colunas) */}
            <div className="lg:col-span-3 flex flex-row lg:flex-col justify-around lg:justify-center gap-4 lg:gap-6 pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l border-[#F7D8E4]">
              {/* Passo 1 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-white border border-[#FADDE8] flex items-center justify-center text-brand-pink mb-2 shadow-2xs">
                  <Pencil className="w-4 h-4 text-brand-pink" />
                </div>
                <span className="text-[11px] sm:text-xs font-semibold text-brand-dark">
                  Escolha os itens
                </span>
              </div>

              {/* Passo 2 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-white border border-[#FADDE8] flex items-center justify-center text-brand-pink mb-2 shadow-2xs">
                  <Gift className="w-4 h-4 text-brand-pink" />
                </div>
                <span className="text-[11px] sm:text-xs font-semibold text-brand-dark">
                  Personalize como quiser
                </span>
              </div>

              {/* Passo 3 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-white border border-[#FADDE8] flex items-center justify-center text-brand-pink mb-2 shadow-2xs">
                  <Heart className="w-4 h-4 text-brand-pink fill-brand-pink" />
                </div>
                <span className="text-[11px] sm:text-xs font-semibold text-brand-dark">
                  Surpreenda alguém especial
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
