import React from "react";
import { siteConfig } from "@/data/site-config";
import { Container } from "@/components/ui/Container";
import { MessageCircle, Gift, Heart, ArrowRight, ArrowDown } from "lucide-react";
import { createWhatsAppUrl } from "@/lib/utils";
import { DoodleHeart } from "@/components/ui/Doodles";

export function HowItWorksSection() {
  const whatsappUrl = createWhatsAppUrl(
    siteConfig.phoneRaw,
    "Olá! Gostaria de conversar com a equipe da Mimos e Caprichos e solicitar um presente personalizado."
  );

  return (
    <section className="py-16 sm:py-24 bg-[#FFFBFD] border-t border-[#F8E7EE] overflow-hidden">
      <Container>
        {/* Cabeçalho */}
        <div className="mb-12 sm:mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-pink">
            COMO FUNCIONA
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-dark tracking-tight mt-1 max-w-xl">
            É simples surpreender com a Mimos e Caprichos
          </h2>
        </div>

        {/* ========================================================= */}
        {/* LAYOUT DESKTOP: 3 PASSOS HORIZONTAIS + ILUSTRAÇÃO         */}
        {/* ========================================================= */}
        <div className="hidden lg:grid grid-cols-12 gap-6 items-center">
          {/* Passo 1 */}
          <div className="col-span-3 flex flex-col items-center text-center">
            <div className="relative mb-4">
              <div className="w-16 h-16 rounded-full bg-white border border-[#FADDE8] shadow-xs flex items-center justify-center text-brand-pink">
                <MessageCircle className="w-7 h-7 text-brand-pink" />
              </div>
              <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-white border border-brand-pink text-brand-pink text-xs font-bold flex items-center justify-center shadow-2xs">
                1
              </span>
            </div>
            <h3 className="font-bold text-brand-dark text-base">Conte sua ideia</h3>
            <p className="text-xs text-brand-muted mt-1 leading-relaxed max-w-[200px]">
              Fale pra gente a ocasião e o que você imagina.
            </p>
          </div>

          {/* Seta divisória */}
          <div className="col-span-1 flex justify-center text-brand-pink/40">
            <ArrowRight className="w-6 h-6" />
          </div>

          {/* Passo 2 */}
          <div className="col-span-3 flex flex-col items-center text-center">
            <div className="relative mb-4">
              <div className="w-16 h-16 rounded-full bg-white border border-[#FADDE8] shadow-xs flex items-center justify-center text-brand-pink">
                <Gift className="w-7 h-7 text-brand-pink" />
              </div>
              <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-white border border-brand-pink text-brand-pink text-xs font-bold flex items-center justify-center shadow-2xs">
                2
              </span>
            </div>
            <h3 className="font-bold text-brand-dark text-base">Criamos com carinho</h3>
            <p className="text-xs text-brand-muted mt-1 leading-relaxed max-w-[200px]">
              Montamos uma opção especial e personalizada.
            </p>
          </div>

          {/* Seta divisória */}
          <div className="col-span-1 flex justify-center text-brand-pink/40">
            <ArrowRight className="w-6 h-6" />
          </div>

          {/* Passo 3 */}
          <div className="col-span-3 flex flex-col items-center text-center">
            <div className="relative mb-4">
              <div className="w-16 h-16 rounded-full bg-white border border-[#FADDE8] shadow-xs flex items-center justify-center text-brand-pink">
                <Heart className="w-7 h-7 text-brand-pink fill-brand-pink" />
              </div>
              <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-white border border-brand-pink text-brand-pink text-xs font-bold flex items-center justify-center shadow-2xs">
                3
              </span>
            </div>
            <h3 className="font-bold text-brand-dark text-base">Surpreenda alguém</h3>
            <p className="text-xs text-brand-muted mt-1 leading-relaxed max-w-[200px]">
              Entregamos um presente que vai emocionar.
            </p>
          </div>

          {/* Ilustração fofa no canto direito */}
          <div className="col-span-1 flex justify-center">
            <DoodleHeart className="w-9 h-9 text-brand-pink" />
          </div>
        </div>

        {/* ========================================================= */}
        {/* LAYOUT MOBILE (Conforme mockup "mobile.png" tela 5)        */}
        {/* ========================================================= */}
        <div className="lg:hidden flex flex-col space-y-6">
          {/* Passo 1 */}
          <div className="flex items-start gap-4">
            <div className="relative shrink-0">
              <div className="w-14 h-14 rounded-full bg-white border border-[#FADDE8] shadow-xs flex items-center justify-center text-brand-pink">
                <MessageCircle className="w-6 h-6 text-brand-pink" />
              </div>
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-white border border-brand-pink text-brand-pink text-[11px] font-bold flex items-center justify-center">
                1
              </span>
            </div>
            <div>
              <h3 className="font-bold text-brand-dark text-base">Conte sua ideia</h3>
              <p className="text-xs text-brand-muted mt-0.5 leading-relaxed">
                Fale pra gente a ocasião e o que você imagina.
              </p>
            </div>
          </div>

          <div className="pl-6 text-brand-pink/50">
            <ArrowDown className="w-4 h-4" />
          </div>

          {/* Passo 2 */}
          <div className="flex items-start gap-4">
            <div className="relative shrink-0">
              <div className="w-14 h-14 rounded-full bg-white border border-[#FADDE8] shadow-xs flex items-center justify-center text-brand-pink">
                <Gift className="w-6 h-6 text-brand-pink" />
              </div>
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-white border border-brand-pink text-brand-pink text-[11px] font-bold flex items-center justify-center">
                2
              </span>
            </div>
            <div>
              <h3 className="font-bold text-brand-dark text-base">Criamos com carinho</h3>
              <p className="text-xs text-brand-muted mt-0.5 leading-relaxed">
                Montamos uma opção especial e personalizada.
              </p>
            </div>
          </div>

          <div className="pl-6 text-brand-pink/50">
            <ArrowDown className="w-4 h-4" />
          </div>

          {/* Passo 3 */}
          <div className="flex items-start gap-4">
            <div className="relative shrink-0">
              <div className="w-14 h-14 rounded-full bg-white border border-[#FADDE8] shadow-xs flex items-center justify-center text-brand-pink">
                <Heart className="w-6 h-6 text-brand-pink fill-brand-pink" />
              </div>
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-white border border-brand-pink text-brand-pink text-[11px] font-bold flex items-center justify-center">
                3
              </span>
            </div>
            <div>
              <h3 className="font-bold text-brand-dark text-base">Surpreenda alguém</h3>
              <p className="text-xs text-brand-muted mt-0.5 leading-relaxed">
                Entregamos um presente que vai emocionar.
              </p>
            </div>
          </div>

          {/* Card de Atendimento Rápido no WhatsApp (Mobile) */}
          <div className="mt-6 p-5 rounded-3xl bg-[#FFF2F6] border border-[#FADDE8] space-y-3 text-left">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-brand-pink text-white flex items-center justify-center shadow-xs">
                <MessageCircle className="w-6 h-6 fill-white text-transparent" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-pink">
                  ATENDIMENTO RÁPIDO PELO WHATSAPP
                </span>
                <p className="text-xs text-brand-dark/85 font-medium leading-snug">
                  Fale agora com a gente e solicite seu presente personalizado.
                </p>
              </div>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 px-5 rounded-full bg-brand-pink text-white text-xs font-semibold shadow-soft hover:bg-brand-pink-hover transition-all"
            >
              <span>Falar no WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

