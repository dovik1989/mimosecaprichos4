import React from "react";
import Image from "next/image";
import { siteConfig } from "@/data/site-config";
import { Container } from "@/components/ui/Container";
import { MapPin, Phone, Clock, MessageCircle, Navigation, ArrowRight } from "lucide-react";
import { createWhatsAppUrl } from "@/lib/utils";

function InstagramIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function TikTokIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.97v7.54c0 1.9-.53 3.8-1.57 5.4-1.22 1.86-3.15 3.23-5.32 3.75-2.06.49-4.29.17-6.13-.88-1.99-1.14-3.47-3.08-4.04-5.31-.6-2.31-.19-4.83 1.13-6.81 1.25-1.89 3.28-3.19 5.55-3.61.35-.06.71-.09 1.07-.11v4.06c-.46.04-.92.14-1.35.31-1.07.41-1.95 1.23-2.42 2.28-.47 1.05-.48 2.28-.01 3.33.45 1.02 1.3 1.83 2.34 2.23 1.04.4 2.22.35 3.22-.14 1-.49 1.75-1.4 2.05-2.47.16-.57.24-1.16.24-1.76V.02z" />
    </svg>
  );
}

export function LocationContactSection() {
  const whatsappUrl = createWhatsAppUrl(
    siteConfig.phoneRaw,
    "Olá! Gostaria de tirar dúvidas sobre a localização ou horário de funcionamento da loja Mimos e Caprichos."
  );

  return (
    <section id="contato" className="py-16 sm:py-24 bg-white border-t border-[#F8E7EE]">
      <Container>
        {/* Cabeçalho */}
        <div className="mb-10 sm:mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-pink">
            VISITE NOSSA LOJA
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-dark tracking-tight mt-1">
            Estamos em Valinhos e prontos para te atender!
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-center">
          {/* Foto da Loja Física à esquerda (5 colunas) */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] rounded-3xl xl:rounded-4xl overflow-hidden shadow-card border-4 border-white bg-white">
              <Image
                src="/images/sobre-loja.png"
                alt="Fachada e interior da loja Mimos e Caprichos em Valinhos"
                fill
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 500px"
              />
            </div>
          </div>

          {/* Coluna de Informações + Mapa (7 colunas) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
              {/* Informações de Endereço, Telefone e Horários */}
              <div className="space-y-4">
                {/* Endereço */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#FFF0F5] text-brand-pink flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-brand-pink" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-brand-dark">Endereço</h4>
                    <p className="text-xs text-brand-muted mt-0.5 leading-snug">
                      Av. Onze de Agosto, 849 <br />
                      Centro, Valinhos - SP, 13276-130
                    </p>
                  </div>
                </div>

                {/* Telefone */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#FFF0F5] text-brand-pink flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4 text-brand-pink" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-brand-dark">Telefone</h4>
                    <a
                      href={`tel:${siteConfig.phoneRaw}`}
                      className="text-xs font-semibold text-brand-dark hover:text-brand-pink transition-colors mt-0.5 inline-block"
                    >
                      (19) 99200-5279
                    </a>
                  </div>
                </div>

                {/* Horários */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#FFF0F5] text-brand-pink flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4 text-brand-pink" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-brand-dark">Horários</h4>
                    <p className="text-xs text-brand-muted mt-0.5 leading-snug">
                      Segunda a Sexta: 09h às 18h <br />
                      Sábado: 09h às 13h
                    </p>
                  </div>
                </div>
              </div>

              {/* Card Ilustrativo do Mapa Google (Conforme mockups desktop e mobile) */}
              <a
                href={siteConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative h-48 rounded-2xl sm:rounded-3xl overflow-hidden border border-[#F2DCE6] bg-[#F4F6F8] p-3 shadow-2xs hover:shadow-card transition-all flex flex-col justify-between"
              >
                {/* Visual estilizado de ruas de mapa */}
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />
                <div className="absolute top-1/2 left-0 right-0 h-4 bg-white/70 -rotate-12" />
                <div className="absolute top-0 bottom-0 left-1/3 w-4 bg-white/70 rotate-6" />

                <div className="relative z-10 flex justify-between items-start">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                    VILA OLIVO
                  </span>
                  <span className="text-[10px] text-brand-pink font-semibold flex items-center gap-0.5 group-hover:underline">
                    Abrir Mapa <Navigation className="w-2.5 h-2.5" />
                  </span>
                </div>

                {/* Pin Card em destaque central */}
                <div className="relative z-10 self-center bg-white/95 backdrop-blur-sm p-2.5 rounded-xl border border-[#F6DCE6] shadow-sm flex items-center gap-2 max-w-[210px]">
                  <div className="w-7 h-7 rounded-full bg-brand-pink text-white flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 fill-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-brand-dark leading-tight">Mimos e Caprichos</p>
                    <p className="text-[10px] text-brand-muted truncate">Av. Onze de Agosto, 849 - Centro</p>
                  </div>
                </div>

                <div className="relative z-10">
                  <span className="text-[10px] text-slate-400">Av. Onze de Agosto</span>
                </div>
              </a>
            </div>

            {/* Botões de Ação: Fale pelo WhatsApp + Ver no Google Maps */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-brand-pink hover:bg-brand-pink-hover text-white text-xs sm:text-sm font-semibold shadow-soft hover:shadow-floating transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4 fill-white text-transparent" />
                <span>Fale pelo WhatsApp</span>
                <ArrowRight className="w-4 h-4 ml-0.5 sm:hidden" />
              </a>

              <a
                href={siteConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white border border-[#F2D7E2] hover:border-brand-pink text-brand-dark text-xs sm:text-sm font-semibold shadow-xs hover:bg-[#FFF9FB] transition-all duration-300"
              >
                <MapPin className="w-4 h-4 text-brand-pink" />
                <span>Ver no Google Maps</span>
              </a>
            </div>

            {/* Redes Sociais no Mobile (Conforme mockup "mobile.png" tela 8) */}
            <div className="pt-6 border-t border-[#F7E8EE] lg:hidden">
              <span className="text-[10px] font-bold uppercase tracking-wider text-brand-pink">
                NOS ACOMPANHE
              </span>
              <h3 className="font-serif text-2xl text-brand-dark mt-0.5 mb-4">
                nas redes sociais
              </h3>
              <div className="flex items-center gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3.5 rounded-2xl bg-[#FFF2F6] border border-[#FADDE8] text-brand-pink flex items-center justify-center hover:bg-brand-pink hover:text-white transition-all"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3.5 rounded-2xl bg-[#FFF2F6] border border-[#FADDE8] text-brand-pink flex items-center justify-center hover:bg-brand-pink hover:text-white transition-all"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3.5 rounded-2xl bg-[#FFF2F6] border border-[#FADDE8] text-brand-pink flex items-center justify-center hover:bg-brand-pink hover:text-white transition-all"
                  aria-label="TikTok"
                >
                  <TikTokIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
