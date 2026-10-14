import React from "react";
import Image from "next/image";
import { siteConfig } from "@/data/site-config";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { MessageCircle, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { createWhatsAppUrl } from "@/lib/utils";

export function CustomBannerSection() {
  const whatsappUrl = createWhatsAppUrl(
    siteConfig.phoneRaw,
    "Olá! Tenho uma ideia especial e gostaria de personalizar um presente com a Mimos e Caprichos."
  );

  const perks = [
    "Nomes, datas e mensagens sob medida",
    "Composições únicas com flores, balões e mimos",
    "Embalagens refinadas com acabamento artesanal",
  ];

  return (
    <section id="personalize" className="py-16 sm:py-24 bg-brand-offwhite relative overflow-hidden">
      {/* Luz ambiente de destaque no fundo */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 -z-10 w-96 h-96 bg-brand-pink-light/60 rounded-full blur-3xl pointer-events-none" />

      <Container>
        <div className="relative rounded-3xl sm:rounded-4xl overflow-hidden bg-[#1E1722] text-white shadow-2xl min-h-[500px] lg:min-h-[540px] flex items-center border border-white/10 group">
          {/* Imagem de Fundo com Alta Nitidez e Efeito Hover Sutil */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/banner-personalizados.png"
              alt="Banner de presentes personalizados sob medida - Mimos e Caprichos"
              fill
              className="object-cover object-center sm:object-right transition-transform duration-1000 ease-out group-hover:scale-105"
              sizes="(max-width: 1280px) 100vw, 1280px"
              priority={false}
            />

            {/* Gradiente sofisticado: escuro e legível à esquerda, transparente à direita para revelar a imagem */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1E1722] via-[#1E1722]/85 to-black/20 sm:to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1E1722]/90 via-transparent to-transparent sm:hidden" />
          </div>

          {/* Conteúdo em Destaque Visual */}
          <div className="relative z-10 p-7 sm:p-12 lg:p-16 max-w-2xl space-y-6">
            {/* Tag / Eyebrow */}
            <Badge
              variant="pink"
              size="md"
              className="bg-brand-pink text-white border-transparent shadow-xs"
            >
              <Sparkles className="w-3.5 h-3.5 mr-1" />
              EXCLUSIVIDADE & AFETO
            </Badge>

            {/* Título Principal */}
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white leading-[1.12] tracking-tight">
              Seu presente, <br />
              <span className="text-brand-pink italic font-normal">do seu jeito.</span>
            </h2>

            {/* Texto Descritivo */}
            <p className="text-base sm:text-lg text-white/90 leading-relaxed font-sans max-w-xl">
              Conte pra gente a sua ideia e criamos um presente único, com todo o carinho que cada momento merece.
            </p>

            {/* Lista de Vantagens do Personalizado */}
            <ul className="space-y-2.5 pt-1 text-sm text-white/80">
              {perks.map((perk, index) => (
                <li key={index} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-pink shrink-0" />
                  <span>{perk}</span>
                </li>
              ))}
            </ul>

            {/* Botão de Conversão Forte */}
            <div className="pt-3">
              <Button
                href={whatsappUrl}
                variant="primary"
                size="lg"
                leftIcon={<MessageCircle className="w-5 h-5 text-white" />}
                rightIcon={<ArrowRight className="w-4 h-4 ml-1 text-white/80 transition-transform group-hover:translate-x-1" />}
                className="shadow-floating hover:brightness-105 hover:scale-[1.02] transition-all"
              >
                Personalize com a gente
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
