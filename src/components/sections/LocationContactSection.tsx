"use client";

import React from "react";
import Image from "next/image";
import { siteConfig } from "@/data/site-config";
import { Container } from "@/components/ui/Container";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { createWhatsAppUrl } from "@/lib/utils";
import { Reveal } from "@/components/animation";

export function LocationContactSection() {
  const whatsappUrl = createWhatsAppUrl(
    siteConfig.phoneRaw,
    "Olá! Gostaria de tirar dúvidas sobre a localização ou horário de funcionamento da loja Mimos e Caprichos."
  );

  return (
    <section id="contato" className="py-14 sm:py-20 bg-[#FFF7FA] border-t border-[#F8E2EC] overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-end">
          {/* Coluna Esquerda (~42%): Eyebrow, Título e Foto da Fachada */}
          <div className="lg:col-span-5 flex flex-col justify-end">
            <Reveal direction="up" distance={20} duration={0.8} delay={0.05} className="mb-4 sm:mb-5">
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-brand-pink block mb-1">
                VISITE NOSSA LOJA
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] leading-[1.15] text-[var(--color-heading-primary)] font-normal tracking-tight">
                Estamos em Valinhos <br className="hidden sm:inline" />
                e prontos para te atender!
              </h2>
            </Reveal>

            {/* Foto da Fachada da Loja Física */}
            <Reveal direction="up" distance={25} duration={0.85} delay={0.18}>
              <div className="relative aspect-[4/3] sm:aspect-[4/3] w-full rounded-[22px] sm:rounded-[26px] overflow-hidden shadow-sm border border-[#F2D7E4] bg-white">
                <Image
                  src="/images/fachada-mimos-caprichos.webp"
                  alt="Fachada da loja Mimos e Caprichos em Valinhos"
                  fill
                  quality={95}
                  className="object-cover object-top transition-transform duration-700 ease-premium hover:scale-[1.02]"
                  sizes="(max-width: 1024px) 100vw, 520px"
                  priority
                />
              </div>
            </Reveal>
          </div>

          {/* Coluna Direita (~58%): Bloco Agrupado Branco (Informações + Mapa + Botões) */}
          <Reveal direction="up" distance={25} duration={0.85} delay={0.25} className="lg:col-span-7">
            <div className="bg-white rounded-[24px] sm:rounded-[28px] p-6 sm:p-7 xl:p-8 shadow-[0_4px_24px_rgba(244,143,177,0.08)] border border-[#F3DFE9] flex flex-col justify-between">
              {/* Área Superior: Informações de Contato + Mini Mapa */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 lg:gap-4 xl:gap-6 items-center">
                {/* Informações: Endereço, Telefone, Horários (sem caixas ou títulos pesados) */}
                <div className="sm:col-span-7 lg:col-span-6 space-y-4">
                  {/* Endereço */}
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-brand-pink shrink-0 mt-0.5 stroke-[1.8]" />
                    <div className="text-xs sm:text-[13px] text-brand-dark leading-snug font-sans">
                      <p className="font-semibold text-brand-dark">Av. Onze de Agosto, 849</p>
                      <p className="text-brand-muted text-xs mt-0.5">Centro, Valinhos - SP, 13276-130</p>
                    </div>
                  </div>

                  {/* Telefone */}
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-brand-pink shrink-0 stroke-[1.8]" />
                    <a
                      href={`tel:${siteConfig.phoneRaw}`}
                      className="text-xs sm:text-[13px] font-semibold text-brand-dark hover:text-brand-pink transition-colors"
                    >
                      (19) 99200-5279
                    </a>
                  </div>

                  {/* Horários */}
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-brand-pink shrink-0 mt-0.5 stroke-[1.8]" />
                    <div className="text-xs sm:text-[13px] text-brand-dark leading-snug">
                      <p className="font-semibold text-brand-dark">Segunda a Sexta: 09h às 18h</p>
                      <p className="text-brand-muted text-xs mt-0.5">Sábado: 09h às 13h</p>
                    </div>
                  </div>
                </div>

                {/* Mini Mapa Incorporado Google Maps */}
                <div className="sm:col-span-5 lg:col-span-6">
                  <div className="relative w-full aspect-[16/11] lg:aspect-auto lg:h-[220px] xl:h-[240px] rounded-[18px] overflow-hidden border border-[#E9D6E2] shadow-2xs bg-[#F5F2F4]">
                    <iframe
                      src="https://www.google.com/maps?q=Av.+Onze+de+Agosto,+849+-+Centro,+Valinhos+-+SP&hl=pt-BR&z=16&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Localização da loja Mimos e Caprichos no Google Maps"
                      className="w-full h-full block"
                    />
                  </div>
                </div>
              </div>

              {/* Área Inferior: Botões de Ação na mesma linha dentro do card */}
              <div className="pt-6 sm:pt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-brand-pink hover:bg-brand-pink-hover text-white text-xs sm:text-sm font-semibold shadow-soft hover:shadow-floating transition-all duration-200"
                >
                  <MessageCircle className="w-4 h-4 fill-white text-transparent" />
                  <span>Fale pelo WhatsApp</span>
                </a>

                <a
                  href={siteConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white border border-[#FF4D8D]/40 hover:border-brand-pink text-brand-pink hover:bg-[#FFF5F8] text-xs sm:text-sm font-semibold transition-all duration-200"
                >
                  <MapPin className="w-4 h-4 text-brand-pink stroke-[2]" />
                  <span>Ver no Google Maps</span>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
