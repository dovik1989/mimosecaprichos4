"use client";

import React, { useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/site-config";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  MapPin,
  Phone,
  Clock,
  MessageCircle,
  ExternalLink,
  Copy,
  Check,
  Navigation,
} from "lucide-react";
import { createWhatsAppUrl } from "@/lib/utils";

export function LocationContactSection() {
  const [copied, setCopied] = useState(false);

  const whatsappUrl = createWhatsAppUrl(
    siteConfig.phoneRaw,
    "Olá! Gostaria de tirar dúvidas sobre o endereço ou horário de funcionamento da loja Mimos e Caprichos."
  );

  const handleCopyAddress = () => {
    navigator.clipboard.writeText("Av. Onze de Agosto, 849 — Centro, Valinhos — SP, 13276-130");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contato" className="py-20 lg:py-28 bg-white border-t border-brand-border/40 relative">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Informações Institucionais & Contato */}
          <div className="lg:col-span-6 space-y-6">
            <Badge variant="pink" size="md">
              VISITE NOSSA LOJA
            </Badge>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-dark leading-[1.18] tracking-tight">
              Venha tomar um café e escolher <br className="hidden sm:inline" />
              <span className="text-brand-pink font-normal italic">seu presente de perto</span>
            </h2>

            <p className="text-base sm:text-lg text-brand-muted leading-relaxed font-sans">
              Estamos localizados em ponto privilegiado no centro de Valinhos, prontos para te receber com todo carinho e te ajudar a escolher ou personalizar o presente ideal.
            </p>

            {/* Cards de Endereço, Horários e Telefone */}
            <div className="space-y-4 pt-2">
              {/* Endereço com botão Copiar */}
              <div className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-brand-offwhite border border-brand-border/70 shadow-xs hover:border-brand-pink-light transition-colors">
                <div className="w-11 h-11 rounded-xl bg-brand-pink-light flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-brand-pink" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-semibold text-brand-dark text-base">Endereço</h3>
                    <button
                      type="button"
                      onClick={handleCopyAddress}
                      className="text-xs text-brand-pink hover:text-brand-pink-hover font-medium inline-flex items-center gap-1 focus:outline-none"
                      title="Copiar endereço"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-600 font-semibold">Copiado!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copiar</span>
                        </>
                      )}
                    </button>
                  </div>
                  <p className="text-sm sm:text-base text-brand-dark/90 mt-1 font-medium">
                    Av. Onze de Agosto, 849 — Centro, Valinhos — SP, 13276-130
                  </p>
                </div>
              </div>

              {/* Horário de Atendimento */}
              <div className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-brand-offwhite border border-brand-border/70 shadow-xs hover:border-brand-pink-light transition-colors">
                <div className="w-11 h-11 rounded-xl bg-brand-pink-light flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5 text-brand-pink" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-brand-dark text-base">Horários</h3>
                  <div className="mt-1 space-y-0.5 text-sm sm:text-base text-brand-dark/90 font-medium">
                    <p>Segunda a Sexta: 09h às 18h</p>
                    <p>Sábado: 09h às 13h</p>
                  </div>
                </div>
              </div>

              {/* Telefone & WhatsApp */}
              <div className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-brand-offwhite border border-brand-border/70 shadow-xs hover:border-brand-pink-light transition-colors">
                <div className="w-11 h-11 rounded-xl bg-brand-pink-light flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-5 h-5 text-brand-pink" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-brand-dark text-base">Telefone</h3>
                  <a
                    href={`tel:${siteConfig.phoneRaw}`}
                    className="inline-block mt-1 text-base sm:text-lg font-bold text-brand-dark hover:text-brand-pink transition-colors"
                  >
                    (19) 99200-5279
                  </a>
                </div>
              </div>
            </div>

            {/* Botões Obrigatórios: WhatsApp + Google Maps */}
            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <Button
                href={whatsappUrl}
                variant="primary"
                size="lg"
                leftIcon={<MessageCircle className="w-5 h-5 text-white" />}
                className="shadow-soft hover:shadow-floating"
              >
                Fale pelo WhatsApp
              </Button>

              <Button
                href={siteConfig.googleMapsUrl}
                variant="outline-dark"
                size="lg"
                rightIcon={<ExternalLink className="w-4 h-4 ml-1 text-brand-pink" />}
                isExternal
                className="hover:border-brand-pink hover:text-brand-pink"
              >
                Ver no Google Maps
              </Button>
            </div>
          </div>

          {/* Foto da Loja Física usando images/sobre-loja.png */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl sm:rounded-4xl overflow-hidden shadow-card border-4 border-white aspect-[4/3] group bg-stone-100">
              <Image
                src="/images/sobre-loja.png"
                alt="Loja física Mimos e Caprichos em Valinhos - SP"
                fill
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end justify-between p-6 sm:p-8">
                <div>
                  <p className="text-white font-serif text-xl sm:text-2xl font-normal drop-shadow-sm">
                    Mimos e Caprichos
                  </p>
                  <p className="text-white/85 text-xs sm:text-sm drop-shadow-sm flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-brand-pink" />
                    Centro de Valinhos — SP
                  </p>
                </div>

                <a
                  href={siteConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-sm text-brand-dark text-xs sm:text-sm font-semibold px-4 py-2 rounded-full shadow-md hover:bg-brand-pink hover:text-white transition-all duration-300 shrink-0"
                >
                  <Navigation className="w-3.5 h-3.5 text-brand-pink" />
                  <span>Traçar Rota</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
