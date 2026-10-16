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
  X,
  ShieldCheck,
  FileText,
} from "lucide-react";

function InstagramRoundIcon() {
  return (
    <svg className="w-4 h-4" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookRoundIcon() {
  return (
    <svg className="w-4 h-4" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function TikTokRoundIcon() {
  return (
    <svg className="w-4 h-4" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.97v7.54c0 1.9-.53 3.8-1.57 5.4-1.22 1.86-3.15 3.23-5.32 3.75-2.06.49-4.29.17-6.13-.88-1.99-1.14-3.47-3.08-4.04-5.31-.6-2.31-.19-4.83 1.13-6.81 1.25-1.89 3.28-3.19 5.55-3.61.35-.06.71-.09 1.07-.11v4.06c-.46.04-.92.14-1.35.31-1.07.41-1.95 1.23-2.42 2.28-.47 1.05-.48 2.28-.01 3.33.45 1.02 1.3 1.83 2.34 2.23 1.04.4 2.22.35 3.22-.14 1-.49 1.75-1.4 2.05-2.47.16-.57.24-1.16.24-1.76V.02z" />
    </svg>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [modalContent, setModalContent] = useState<"privacy" | "terms" | null>(null);

  const categoriesList = [
    { label: "Cestas personalizadas", href: "#presentes" },
    { label: "Balões & surpresas", href: "#presentes" },
    { label: "Presentes personalizados", href: "#presentes" },
    { label: "Presentes corporativos", href: "#corporativos" },
    { label: "Lembranças e kits", href: "#presentes" },
    { label: "Todas as ocasiões", href: "#presentes" },
  ];

  return (
    <footer className="bg-[#FFF5F8] text-brand-dark/80 pt-14 sm:pt-16 pb-10 sm:pb-12 border-t border-[#F8E2EC] relative">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6 xl:gap-8 items-start">
          {/* 1. Logo & Descrição Curta (3 colunas no lg) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="relative h-12 sm:h-14 flex items-center">
              <Image
                src="/images/logos/logo-oficial-mimos.png"
                alt="Mimos e Caprichos"
                width={707}
                height={364}
                className="h-12 sm:h-14 w-auto object-contain object-left"
              />
            </div>

            <p className="text-xs leading-relaxed text-brand-muted max-w-xs font-sans">
              Presentes e personalizados feitos com carinho para tornar cada momento inesquecível.
            </p>

            {/* Redes Sociais */}
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white border border-[#FADCE8] text-[#2D2630] flex items-center justify-center hover:bg-brand-pink hover:text-white hover:border-brand-pink transition-all shadow-2xs"
                aria-label="Instagram"
              >
                <InstagramRoundIcon />
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white border border-[#FADCE8] text-[#2D2630] flex items-center justify-center hover:bg-brand-pink hover:text-white hover:border-brand-pink transition-all shadow-2xs"
                aria-label="Facebook"
              >
                <FacebookRoundIcon />
              </a>

              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white border border-[#FADCE8] text-[#2D2630] flex items-center justify-center hover:bg-brand-pink hover:text-white hover:border-brand-pink transition-all shadow-2xs"
                aria-label="TikTok"
              >
                <TikTokRoundIcon />
              </a>
            </div>
          </div>

          {/* 2. Menu Institucional (2 colunas) */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-xs sm:text-sm text-brand-dark mb-3">Menu</h4>
            <ul className="space-y-2 text-xs">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-brand-muted hover:text-brand-pink transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Nossos Presentes (2 colunas) */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-xs sm:text-sm text-brand-dark mb-3">Nossos Presentes</h4>
            <ul className="space-y-2 text-xs">
              {categoriesList.map((cat, idx) => (
                <li key={idx}>
                  <Link
                    href={cat.href}
                    className="text-brand-muted hover:text-brand-pink transition-colors"
                  >
                    {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Contato (3 colunas) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bold text-xs sm:text-sm text-brand-dark mb-3">Contato</h4>

            <div className="space-y-2.5 text-xs text-brand-muted">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-pink shrink-0 stroke-[1.8]" />
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="hover:text-brand-pink font-medium transition-colors"
                >
                  (19) 99200-5279
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-pink shrink-0 mt-0.5 stroke-[1.8]" />
                <span className="leading-snug">
                  Av. Onze de Agosto, 849 <br />
                  Centro, Valinhos - SP
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-brand-pink shrink-0 mt-0.5 stroke-[1.8]" />
                <span className="leading-snug">
                  Seg. a Sex: 09h às 18h <br />
                  Sábado: 09h às 13h
                </span>
              </div>
            </div>
          </div>

          {/* 5. Frase Script / Lettering Decorativo (2 colunas) */}
          <div className="lg:col-span-2 hidden lg:flex items-center justify-center border-l border-[#F0D5E2] pl-6 xl:pl-8">
            <div className="relative w-auto h-32 xl:h-36 flex items-center justify-center select-none">
              <Image
                src="/images/frase-decorativa.png"
                alt="Mais que presentes, entregamos emoções"
                width={100}
                height={140}
                className="h-full w-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>

        {/* Barra Inferior com Copyright e Links Legais (sem linha divisória pesada) */}
        <div className="pt-10 sm:pt-12 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-brand-muted">
          <p>© {currentYear} Mimos e Caprichos. Todos os direitos reservados.</p>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setModalContent("privacy")}
              className="hover:text-brand-pink transition-colors"
            >
              Política de Privacidade
            </button>
            <span className="text-[#E8CBD9]">|</span>
            <button
              type="button"
              onClick={() => setModalContent("terms")}
              className="hover:text-brand-pink transition-colors"
            >
              Termos de Uso &gt;
            </button>
          </div>
        </div>

        {/* Modal de Políticas e Termos */}
        {modalContent && (
          <div
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
            onClick={() => setModalContent(null)}
          >
            <div
              className="relative max-w-lg w-full bg-white text-brand-dark rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#FADDE8] max-h-[85vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-3 border-b border-[#F7E6ED]">
                <div className="flex items-center gap-2">
                  {modalContent === "privacy" ? (
                    <>
                      <ShieldCheck className="w-5 h-5 text-brand-pink" />
                      <h3 className="font-serif text-lg font-bold">Política de Privacidade</h3>
                    </>
                  ) : (
                    <>
                      <FileText className="w-5 h-5 text-brand-pink" />
                      <h3 className="font-serif text-lg font-bold">Termos de Uso</h3>
                    </>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => setModalContent(null)}
                  className="p-1 rounded-full text-brand-muted hover:text-brand-dark"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="py-4 space-y-3 text-xs sm:text-sm text-brand-muted leading-relaxed">
                {modalContent === "privacy" ? (
                  <>
                    <p>
                      A <strong>Mimos e Caprichos</strong> valoriza a sua privacidade. Esta página é de caráter institucional e tem por objetivo apresentar nossos produtos, serviços e informações de contato em Valinhos-SP.
                    </p>
                    <p>
                      O atendimento e encomendas são realizados diretamente através do nosso canal oficial no WhatsApp. As informações compartilhadas são utilizadas unicamente para orçamentos e entregas de presentes.
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      Bem-vindo ao site institucional da <strong>Mimos e Caprichos</strong>.
                    </p>
                    <p>
                      Este site destina-se à apresentação do portfólio de presentes afetivos, cestas e personalizados. Fotos apresentadas são criações reais da loja para inspiração.
                    </p>
                  </>
                )}
              </div>

              <div className="pt-3 border-t border-[#F7E6ED] text-right">
                <button
                  type="button"
                  onClick={() => setModalContent(null)}
                  className="px-5 py-2 rounded-full bg-brand-pink text-white text-xs font-semibold hover:bg-brand-pink-hover transition-colors"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </footer>
  );
}
