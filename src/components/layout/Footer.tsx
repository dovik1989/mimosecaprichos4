"use client";

import { FaInstagram, FaFacebookF } from "react-icons/fa6";
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
  ChevronDown,
} from "lucide-react";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/animation";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [modalContent, setModalContent] = useState<"privacy" | "terms" | null>(null);

  const categoriesList = [
    { label: "Cestas personalizadas", href: "/presentes/cestas-personalizadas" },
    { label: "Balões & surpresas", href: "/presentes/presentes-e-mimos" },
    { label: "Presentes personalizados", href: "/presentes/presentes-personalizados" },
    { label: "Presentes corporativos", href: "/presentes/presentes-corporativos" },
    { label: "Lembranças e kits", href: "/presentes/presentes-personalizados" },
    { label: "Todas as ocasiões", href: "/presentes/datas-comemorativas" },
  ];

  return (
    <footer className="bg-[#FFF5F8] text-brand-dark/80 pt-14 sm:pt-16 pb-28 lg:pb-12 border-t border-[#F8E2EC] relative">
      <Container>
        <StaggerContainer
          staggerInterval={0.08}
          distance={18}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6 xl:gap-8 items-start"
        >
          {/* 1. Logo & Descrição Curta (3 colunas no lg) */}
          <StaggerItem index={0} className="lg:col-span-3 space-y-3.5">
            <div className="relative h-14 sm:h-16 flex items-center">
              <Image
                src="/images/logos/logo-oficial-mimos.png"
                alt="Mimos e Caprichos"
                width={707}
                height={364}
                className="h-16 sm:h-[76px] w-auto max-w-none object-contain object-left"
              />
            </div>

            <p className="text-xs leading-relaxed text-brand-muted max-w-xs font-sans">
              Presentes e personalizados feitos com carinho para tornar cada momento inesquecível.
            </p>

            {/* Redes Sociais */}
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white border border-[#FADCE8] text-[#2D2630] flex items-center justify-center hover:bg-brand-pink hover:text-white hover:border-brand-pink transition-all shadow-2xs"
                aria-label="Instagram da Mimos e Caprichos Valinhos"
              >
                <FaInstagram size={16} aria-hidden="true" />
              </a>

              <a
                href={siteConfig.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white border border-[#FADCE8] text-[#2D2630] flex items-center justify-center hover:bg-brand-pink hover:text-white hover:border-brand-pink transition-all shadow-2xs"
                aria-label="Facebook da Mimos e Caprichos Valinhos"
              >
                <FaFacebookF size={16} aria-hidden="true" />
              </a>
            </div>
          </StaggerItem>

          {/* 2. Menu Institucional (2 colunas) */}
          <StaggerItem index={1} className="hidden lg:block lg:col-span-2">
            <h4 className="font-bold text-xs sm:text-sm text-brand-dark mb-3">Menu</h4>
            <ul className="space-y-2 text-xs">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href.startsWith("#") ? `/${item.href}` : item.href}
                    className="text-brand-muted hover:text-brand-pink transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </StaggerItem>

          {/* 3. Nossos Presentes (2 colunas) */}
          <StaggerItem index={2} className="hidden lg:block lg:col-span-2">
            <h4 className="font-bold text-xs sm:text-sm text-brand-dark mb-3">Nossos Presentes</h4>
            <ul className="space-y-2 text-xs">
              {categoriesList.map((cat, idx) => (
                <li key={idx}>
                  <Link
                    href={cat.href.startsWith("#") ? `/${cat.href}` : cat.href}
                    className="text-brand-muted hover:text-brand-pink transition-colors"
                  >
                    {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </StaggerItem>

          {/* 4. Contato (3 colunas) */}
          <StaggerItem index={3} className="hidden lg:block lg:col-span-3 space-y-3">
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
          </StaggerItem>

          <div className="lg:hidden sm:col-span-2 space-y-3">
            {[{ title: "Menu", links: navItems }, { title: "Nossos Presentes", links: categoriesList }].map(group => (
              <details key={group.title} className="group rounded-2xl border border-[#FADCE8] bg-white">
                <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between px-4 py-3 text-sm font-bold text-brand-dark [&::-webkit-details-marker]:hidden">
                  {group.title}
                  <ChevronDown aria-hidden="true" className="size-4 text-brand-pink transition-transform group-open:rotate-180" />
                </summary>
                <ul className="space-y-1 px-4 pb-3 text-xs">
                  {group.links.map(item => <li key={item.href + item.label}><Link href={item.href.startsWith("#") ? `/${item.href}` : item.href} className="inline-flex min-h-9 items-center text-brand-muted hover:text-brand-pink">{item.label}</Link></li>)}
                </ul>
              </details>
            ))}
            <section aria-labelledby="footer-mobile-contact" className="rounded-2xl border border-[#FADCE8] bg-white p-4">
              <h4 id="footer-mobile-contact" className="mb-3 text-sm font-bold text-brand-dark">Contato</h4>
              <div className="space-y-3 pr-14 text-xs text-brand-muted">
                <div className="flex items-center gap-2.5"><Phone aria-hidden="true" className="size-4 shrink-0 text-brand-pink" /><a href={`tel:${siteConfig.phoneRaw}`} className="font-medium hover:text-brand-pink">(19) 99200-5279</a></div>
                <div className="flex items-start gap-2.5"><MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-brand-pink" /><a href={siteConfig.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="leading-snug hover:text-brand-pink">Av. Onze de Agosto, 849<br />Centro, Valinhos - SP</a></div>
                <div className="flex items-start gap-2.5"><Clock aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-brand-pink" /><span className="leading-snug">Seg. a Sex: 09h às 18h<br />Sábado: 09h às 13h</span></div>
              </div>
            </section>
          </div>

          {/* 5. Frase Script / Lettering Decorativo (2 colunas) */}
          <StaggerItem index={4} className="lg:col-span-2 hidden lg:flex items-center justify-center border-l border-[#F0D5E2] pl-6 xl:pl-8">
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
          </StaggerItem>
        </StaggerContainer>

        {/* Barra Inferior com Copyright e Links Legais (sem linha divisória pesada) */}
        <Reveal direction="fade" delay={0.15} distance={12}>
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
        </Reveal>

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
