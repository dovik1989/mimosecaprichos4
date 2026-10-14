import React from "react";
import Image from "next/image";
import { siteConfig } from "@/data/site-config";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { MessageCircle, Heart, Store, Sparkles, MapPin } from "lucide-react";
import { createWhatsAppUrl } from "@/lib/utils";

export function AboutSection() {
  const whatsappUrl = createWhatsAppUrl(
    siteConfig.phoneRaw,
    "Olá! Conheci a história da Mimos e Caprichos no site e gostaria de saber mais sobre a loja e os presentes."
  );

  return (
    <section id="sobre" className="py-20 lg:py-28 bg-[#FFF8FA] relative overflow-hidden border-t border-brand-border/40">
      {/* Elemento de iluminação suave */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -z-10 w-96 h-96 bg-brand-pink-light/40 rounded-full blur-3xl pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* ========================================================= */}
          {/* IMAGEM DA LOJA: À ESQUERDA NO DESKTOP, EMPILHADO NO MOBILE */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 w-full">
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none group">
              {/* Moldura da imagem da loja física */}
              <div className="relative aspect-[4/3] rounded-3xl sm:rounded-4xl overflow-hidden shadow-card border-4 border-white bg-white">
                <Image
                  src="/images/sobre-loja.png"
                  alt="Fachada e ambiente acolhedor da loja Mimos e Caprichos em Valinhos"
                  fill
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Card flutuante sobre nossa loja física */}
              <div className="absolute -bottom-5 sm:-bottom-6 right-4 sm:right-6 bg-white/95 backdrop-blur-md py-3.5 px-5 rounded-2xl shadow-soft border border-brand-pink-light flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-brand-pink-light flex items-center justify-center shrink-0">
                  <Store className="w-5 h-5 text-brand-pink" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-brand-dark">Loja Física no Centro</p>
                  <p className="text-xs text-brand-muted flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-brand-pink" />
                    Valinhos — SP
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* TEXTO INSTITUCIONAL: À DIREITA NO DESKTOP                  */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-6 pt-6 lg:pt-0">
            {/* Tag */}
            <Badge variant="pink" size="md">
              SOBRE NÓS
            </Badge>

            {/* Título */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-dark leading-[1.18] tracking-tight">
              Uma história feita de <br className="hidden sm:inline" />
              <span className="text-brand-pink font-normal italic">carinho e detalhes</span>
            </h2>

            {/* Texto */}
            <p className="text-base sm:text-lg text-brand-muted leading-relaxed font-sans">
              A Mimos e Caprichos nasceu em Valinhos com o propósito de transformar momentos em lembranças especiais. Aqui você encontra presentes criativos, personalizados e feitos com muito carinho, sempre pensando em tornar cada ocasião mais única e inesquecível.
            </p>

            {/* Diferenciais afetivos da marca */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full pt-1">
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/90 border border-brand-border/60 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-brand-pink-light flex items-center justify-center shrink-0 mt-0.5">
                  <Heart className="w-4 h-4 text-brand-pink fill-brand-pink" />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-dark text-sm">Feito com Amor</h4>
                  <p className="text-xs text-brand-muted mt-0.5 leading-relaxed">
                    Atenção personalizada em cada detalhe encomendado.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/90 border border-brand-border/60 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-brand-pink-light flex items-center justify-center shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4 text-brand-pink" />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-dark text-sm">Presentes Criativos</h4>
                  <p className="text-xs text-brand-muted mt-0.5 leading-relaxed">
                    Opções exclusivas para emocionar quem você ama.
                  </p>
                </div>
              </div>
            </div>

            {/* Botão de Ação */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <Button
                href={whatsappUrl}
                variant="primary"
                size="md"
                leftIcon={<MessageCircle className="w-4 h-4 text-white" />}
                className="shadow-soft hover:shadow-floating"
              >
                Conheça nossa história
              </Button>

              <Button
                href="#contato"
                variant="outline-dark"
                size="md"
              >
                Visitar nossa loja
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
