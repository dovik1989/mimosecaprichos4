"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig, navItems } from "@/data/site-config";
import { Container } from "@/components/ui/Container";
import {
  MapPin,
  Phone,
  Clock,
  MessageCircle,
  Heart,
  X,
  ShieldCheck,
  FileText,
} from "lucide-react";
import { createWhatsAppUrl } from "@/lib/utils";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappUrl = createWhatsAppUrl(siteConfig.phoneRaw, siteConfig.defaultWhatsAppMessage);
  const [modalContent, setModalContent] = useState<"privacy" | "terms" | null>(null);

  const categoriesList = [
    { label: "Cestas Personalizadas", href: "#presentes" },
    { label: "Balões e Surpresas", href: "#presentes" },
    { label: "Presentes Personalizados", href: "#presentes" },
    { label: "Presentes Corporativos", href: "#corporativos" },
  ];

  return (
    <footer className="bg-[#1F1722] text-white/80 pt-16 pb-12 border-t border-white/10 relative">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          {/* 1. Logo & Descrição Curta & Redes Sociais */}
          <div className="lg:col-span-4 space-y-5">
            {/* Logo */}
            <div className="relative w-48 h-14 bg-white/95 p-2 rounded-2xl shadow-sm inline-block">
              <Image
                src="/images/logo-temporario.png"
                alt="Mimos e Caprichos - Valinhos"
                fill
                className="object-contain p-1.5"
                sizes="192px"
              />
            </div>

            {/* Descrição curta solicitada */}
            <p className="text-sm leading-relaxed text-white/75 font-sans max-w-sm">
              Presentes e personalizados feitos com carinho para tornar cada momento inesquecível.
            </p>

            {/* Redes Sociais */}
            <div className="pt-1">
              <p className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-3">
                Conecte-se conosco
              </p>
              <div className="flex items-center gap-3">
                <a
                  href={siteConfig.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 hover:bg-brand-pink text-white/80 hover:text-white border border-white/10 flex items-center justify-center transition-all duration-300 hover:scale-105"
                  aria-label="Instagram da Mimos e Caprichos"
                >
                  <InstagramIcon className="w-5 h-5" />
                </a>

                <a
                  href={siteConfig.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 hover:bg-brand-pink text-white/80 hover:text-white border border-white/10 flex items-center justify-center transition-all duration-300 hover:scale-105"
                  aria-label="Facebook da Mimos e Caprichos"
                >
                  <FacebookIcon className="w-5 h-5" />
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366] text-[#25D366] hover:text-white border border-[#25D366]/30 flex items-center justify-center transition-all duration-300 hover:scale-105"
                  aria-label="WhatsApp da Mimos e Caprichos"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* 2. Menu Institucional */}
          <div className="lg:col-span-2">
            <h4 className="font-serif text-lg text-white mb-4">Institucional</h4>
            <ul className="space-y-2.5 text-sm">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/70 hover:text-brand-pink transition-colors inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Categorias Principais */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-lg text-white mb-4">Categorias</h4>
            <ul className="space-y-2.5 text-sm">
              {categoriesList.map((cat, idx) => (
                <li key={idx}>
                  <Link
                    href={cat.href}
                    className="text-white/70 hover:text-brand-pink transition-colors inline-block"
                  >
                    {cat.label}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-pink hover:text-white text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-1.5 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Pedir item sob medida</span>
                </a>
              </li>
            </ul>
          </div>

          {/* 4. Contato, Endereço e Horários */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-lg text-white mb-4">Loja & Contato</h4>

            <div className="space-y-3.5 text-sm text-white/75 font-sans">
              {/* Endereço */}
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-pink shrink-0 mt-0.5" />
                <span className="leading-snug">{siteConfig.address}</span>
              </div>

              {/* Telefone */}
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-pink shrink-0" />
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="hover:text-white font-semibold transition-colors"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </div>

              {/* Horários */}
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-brand-pink shrink-0 mt-0.5" />
                <div className="space-y-0.5 text-xs text-white/70">
                  <p>{siteConfig.hours.weekdays}</p>
                  <p>{siteConfig.hours.saturday}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Rodapé Inferior: Copyright + Links de Política e Termos */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p className="flex items-center gap-1.5 text-center sm:text-left">
            <span>© {currentYear} {siteConfig.name}. Feito com</span>
            <Heart className="w-3.5 h-3.5 text-brand-pink fill-brand-pink inline" />
            <span>em Valinhos-SP. Todos os direitos reservados.</span>
          </p>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => setModalContent("privacy")}
              className="hover:text-white transition-colors focus:outline-none underline-offset-4 hover:underline"
            >
              Política de Privacidade
            </button>
            <span className="text-white/20">•</span>
            <button
              type="button"
              onClick={() => setModalContent("terms")}
              className="hover:text-white transition-colors focus:outline-none underline-offset-4 hover:underline"
            >
              Termos de Uso
            </button>
          </div>
        </div>

        {/* Modal de Políticas e Termos */}
        {modalContent && (
          <div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
            onClick={() => setModalContent(null)}
          >
            <div
              className="relative max-w-xl w-full bg-white text-brand-dark rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/20 max-h-[85vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-4 border-b border-brand-border/60">
                <div className="flex items-center gap-2.5">
                  {modalContent === "privacy" ? (
                    <>
                      <ShieldCheck className="w-5 h-5 text-brand-pink" />
                      <h3 className="font-serif text-xl font-normal">Política de Privacidade</h3>
                    </>
                  ) : (
                    <>
                      <FileText className="w-5 h-5 text-brand-pink" />
                      <h3 className="font-serif text-xl font-normal">Termos de Uso</h3>
                    </>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => setModalContent(null)}
                  className="p-1 rounded-full text-brand-muted hover:text-brand-dark hover:bg-stone-100 transition-colors"
                  aria-label="Fechar modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="py-4 space-y-3.5 text-sm text-brand-muted leading-relaxed font-sans">
                {modalContent === "privacy" ? (
                  <>
                    <p>
                      A <strong>Mimos e Caprichos</strong> valoriza a sua privacidade. Esta página é de caráter institucional e tem por objetivo apresentar nossos produtos, serviços e informações de contato.
                    </p>
                    <p>
                      <strong>Coleta de Dados:</strong> Nosso site institucional não exige cadastro nem armazena senhas ou dados financeiros. O atendimento e encomendas são realizados diretamente através do aplicativo WhatsApp.
                    </p>
                    <p>
                      <strong>Uso de Informações:</strong> As informações eventualmente compartilhadas por você via WhatsApp são utilizadas unicamente para orçamentos, montagem de presentes personalizados e combinação de entregas em Valinhos e região.
                    </p>
                    <p>
                      Para qualquer dúvida sobre privacidade, entre em contato pelo telefone (19) 99200-5279.
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      Bem-vindo ao site institucional da <strong>Mimos e Caprichos</strong> (Valinhos-SP).
                    </p>
                    <p>
                      <strong>Objetivo do Site:</strong> Este site destina-se à apresentação de nosso portfólio de presentes afetivos, cestas, balões e soluções corporativas. Não realizamos transações financeiras automáticas ou vendas diretas online pelo site.
                    </p>
                    <p>
                      <strong>Preços e Disponibilidade:</strong> Fotos e composições apresentadas são referências visuais de peças já criadas. Preços, flores e itens específicos de época devem ser consultados e confirmados via atendimento no WhatsApp.
                    </p>
                    <p>
                      <strong>Propriedade Intelectual:</strong> Logomarca, fotos e textos são de propriedade da Mimos e Caprichos.
                    </p>
                  </>
                )}
              </div>

              <div className="pt-4 border-t border-brand-border/60 text-right">
                <button
                  type="button"
                  onClick={() => setModalContent(null)}
                  className="px-5 py-2 rounded-full bg-brand-pink text-white text-xs font-semibold hover:bg-brand-pink-hover transition-colors"
                >
                  Entendido
                </button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </footer>
  );
}
