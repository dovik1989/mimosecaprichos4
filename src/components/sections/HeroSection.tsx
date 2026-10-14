import React from "react";
import Image from "next/image";
import { siteConfig } from "@/data/site-config";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { MessageCircle, Gift, Sparkles, MapPin, ArrowRight, Heart, Star } from "lucide-react";

export function HeroSection() {
  const whatsappUrl = `https://wa.me/5519992005279`;

  const differentials = [
    {
      id: "occasions",
      icon: Gift,
      title: "Presentes para todas as ocasiões",
      description: "Aniversários, maternidade, datas comemorativas e celebrações especiais.",
    },
    {
      id: "custom",
      icon: Sparkles,
      title: "Personalizados do seu jeito",
      description: "Cada item criado sob medida, com nomes, fotos, mensagens e muito afeto.",
    },
    {
      id: "local",
      icon: MapPin,
      title: "Atendimento em Valinhos e região",
      description: "Retirada em nossa loja física no Centro ou entregas combinadas com cuidado.",
    },
  ];

  return (
    <section
      id="inicio"
      className="relative pt-4 sm:pt-8 pb-16 lg:pt-12 lg:pb-24 overflow-hidden bg-gradient-to-b from-brand-offwhite via-[#FFF7FA] to-brand-offwhite"
    >
      {/* Elementos visuais de fundo sutis */}
      <div className="absolute top-0 right-10 -z-10 w-72 sm:w-96 h-72 sm:h-96 bg-brand-pink-light/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-5 -z-10 w-64 sm:w-80 h-64 sm:h-80 bg-brand-blue-light/40 rounded-full blur-3xl pointer-events-none" />

      <Container>
        {/* ========================================================= */}
        {/* COMPOSIÇÃO MOBILE ESPECÍFICA (< lg)                       */}
        {/* ========================================================= */}
        <div className="lg:hidden flex flex-col items-center text-center space-y-5 animate-fadeIn">
          {/* Eyebrow Mobile */}
          <Badge variant="pink" size="md" className="shadow-xs">
            PRESENTES QUE TRANSFORMAM MOMENTOS
          </Badge>

          {/* Título Mobile */}
          <h1 className="font-serif text-3xl sm:text-4xl text-brand-dark leading-[1.18] tracking-tight">
            Pequenos gestos. <br />
            <span className="text-brand-pink italic font-normal">Grandes emoções.</span>
          </h1>

          {/* Imagem Mobile Dedicada (hero-mobile.png) */}
          <div className="relative w-full max-w-sm mx-auto my-2 group">
            <div className="relative aspect-[4/3] sm:aspect-[16/10] rounded-3xl overflow-hidden shadow-card border-2 border-white bg-brand-pink-subtle">
              <Image
                src="/images/hero-mobile.png"
                alt="Presentes afetivos Mimos e Caprichos Valinhos"
                fill
                priority
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Badge flutuante mobile */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full shadow-soft border border-brand-pink-light/80 flex items-center gap-2 whitespace-nowrap">
              <Heart className="w-3.5 h-3.5 text-brand-pink fill-brand-pink shrink-0" />
              <span className="text-xs font-semibold text-brand-dark">Feito à mão com afeto</span>
            </div>
          </div>

          {/* Descrição Mobile */}
          <p className="text-base text-brand-muted leading-relaxed font-sans px-2 pt-2">
            Presentes e personalizados feitos com carinho para tornar cada momento inesquecível.
          </p>

          {/* CTAs Mobile (largura total e fáceis de tocar) */}
          <div className="flex flex-col gap-3 w-full max-w-sm pt-2">
            <Button
              href={whatsappUrl}
              variant="primary"
              size="lg"
              fullWidth
              leftIcon={<MessageCircle className="w-5 h-5 text-white" />}
              className="shadow-floating hover:brightness-105 active:scale-[0.98]"
            >
              Fale pelo WhatsApp
            </Button>

            <Button
              href="#presentes"
              variant="outline-dark"
              size="md"
              fullWidth
              rightIcon={<ArrowRight className="w-4 h-4 text-brand-pink" />}
            >
              Conheça nossos presentes
            </Button>
          </div>

          {/* Prova social rápida */}
          <div className="flex items-center justify-center gap-2 text-xs text-brand-muted pt-1">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span><strong>5,0 no Google</strong> em Valinhos</span>
          </div>
        </div>

        {/* ========================================================= */}
        {/* COMPOSIÇÃO DESKTOP (>= lg)                                */}
        {/* ========================================================= */}
        <div className="hidden lg:grid grid-cols-12 gap-12 items-center animate-fadeIn">
          {/* Coluna Texto Desktop */}
          <div className="col-span-6 flex flex-col items-start text-left space-y-6">
            <Badge variant="pink" size="md">
              PRESENTES QUE TRANSFORMAM MOMENTOS
            </Badge>

            <h1 className="font-serif text-5xl xl:text-6xl text-brand-dark leading-[1.12] tracking-tight">
              Pequenos gestos. <br />
              <span className="text-brand-pink italic font-normal">Grandes emoções.</span>
            </h1>

            <p className="text-lg xl:text-xl text-brand-muted leading-relaxed font-sans max-w-xl">
              Presentes e personalizados feitos com carinho para tornar cada momento inesquecível.
            </p>

            {/* Botões de Ação */}
            <div className="flex items-center gap-4 pt-2">
              <Button
                href={whatsappUrl}
                variant="primary"
                size="lg"
                leftIcon={<MessageCircle className="w-5 h-5 text-white" />}
                className="shadow-soft hover:shadow-floating hover:scale-[1.02] transition-all"
              >
                Fale pelo WhatsApp
              </Button>

              <Button
                href="#presentes"
                variant="outline-dark"
                size="lg"
                rightIcon={<ArrowRight className="w-4 h-4 text-brand-pink transition-transform group-hover:translate-x-1" />}
              >
                Conheça nossos presentes
              </Button>
            </div>

            {/* Avaliações do Google Desktop */}
            <div className="pt-3 flex items-center gap-3 text-xs sm:text-sm text-brand-muted">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span>
                <strong>5,0 no Google</strong> • Mais de 870 avaliações apaixonadas em Valinhos
              </span>
            </div>
          </div>

          {/* Coluna Imagem Desktop (hero-desktop.png) */}
          <div className="col-span-6 relative">
            <div className="relative mx-auto w-full max-w-xl group">
              <div className="relative aspect-[4/3] rounded-4xl overflow-hidden shadow-card border-4 border-white bg-brand-pink-subtle">
                <Image
                  src="/images/hero-desktop.png"
                  alt="Presentes personalizados e cestas da Mimos e Caprichos em Valinhos"
                  fill
                  priority
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(min-width: 1024px) 50vw, 600px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Selo flutuante de acolhimento e exclusividade */}
              <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md py-3.5 px-5 rounded-2xl shadow-soft border border-brand-pink-light/80 flex items-center gap-3.5 hover:shadow-card transition-all">
                <div className="w-11 h-11 rounded-xl bg-brand-pink-light flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5 text-brand-pink" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-brand-dark">Produção afetiva</p>
                  <p className="text-xs text-brand-muted">Cuidado artesanal em cada detalhe</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 3 DIFERENCIAIS COM ÍCONES                                 */}
        {/* ========================================================= */}
        <div className="mt-14 sm:mt-20 pt-8 sm:pt-12 border-t border-brand-border/60">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
            {differentials.map((item) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.id}
                  className="group flex items-start gap-4 p-5 sm:p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-brand-border/60 shadow-xs hover:shadow-soft hover:border-brand-pink-light hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-2xl bg-brand-pink-light/80 group-hover:bg-brand-pink group-hover:text-white text-brand-pink flex items-center justify-center shrink-0 transition-colors duration-300">
                    <IconComponent className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-dark text-base group-hover:text-brand-pink transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-brand-muted leading-relaxed font-sans">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
