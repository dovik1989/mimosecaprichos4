"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import { Container } from "@/components/ui/Container";
import { Menu, X, ChevronDown, MessageCircle, Phone } from "lucide-react";
import { cn, createWhatsAppUrl } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappUrl = createWhatsAppUrl(siteConfig.phoneRaw, siteConfig.defaultWhatsAppMessage);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full bg-white transition-all duration-300",
        isScrolled
          ? "shadow-sm border-b border-[#F5E6EC] py-2.5"
          : "border-b border-[#F7ECF1] py-3.5"
      )}
    >
      <Container className="flex items-center justify-between">
        {/* Logo */}
        <Link
          href="#inicio"
          className="flex items-center gap-3 shrink-0 focus:outline-none"
        >
          <div className="relative h-11 sm:h-12 flex items-center">
            <Image
              src="/images/logos/logo-oficial-mimos.png"
              alt="Mimos e Caprichos"
              width={707}
              height={364}
              priority
              className="h-[56px] sm:h-[68px] w-auto max-w-none object-contain object-left"
            />
          </div>
        </Link>

        {/* Desktop Navigation (Centralizada) */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-brand-dark/85">
          <Link
            href="#inicio"
            onClick={() => setActiveSection("inicio")}
            className={cn(
              "relative py-1 transition-colors hover:text-brand-pink",
              activeSection === "inicio" ? "text-brand-pink font-semibold" : "text-brand-dark/80"
            )}
          >
            Início
            {activeSection === "inicio" && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-pink rounded-full" />
            )}
          </Link>

          <Link
            href="#sobre"
            onClick={() => setActiveSection("sobre")}
            className="py-1 text-brand-dark/80 hover:text-brand-pink transition-colors"
          >
            Nossa história
          </Link>

          {/* Dropdown / Presentes com chevron */}
          <Link
            href="#presentes"
            onClick={() => setActiveSection("presentes")}
            className="inline-flex items-center gap-1 py-1 text-brand-dark/80 hover:text-brand-pink transition-colors"
          >
            <span>Presentes</span>
            <ChevronDown className="w-3.5 h-3.5 text-brand-dark/60 mt-0.5" />
          </Link>

          <Link
            href="#corporativos"
            onClick={() => setActiveSection("corporativos")}
            className="py-1 text-brand-dark/80 hover:text-brand-pink transition-colors"
          >
            Empresas
          </Link>

          <Link
            href="#avaliacoes"
            onClick={() => setActiveSection("avaliacoes")}
            className="py-1 text-brand-dark/80 hover:text-brand-pink transition-colors"
          >
            Avaliações
          </Link>

          <Link
            href="#contato"
            onClick={() => setActiveSection("contato")}
            className="py-1 text-brand-dark/80 hover:text-brand-pink transition-colors"
          >
            Contato
          </Link>
        </nav>

        {/* Desktop CTA: Fale conosco */}
        <div className="hidden lg:flex items-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-brand-pink hover:bg-brand-pink-hover text-white text-sm font-medium shadow-sm transition-all duration-300 hover:scale-[1.02]"
          >
            <MessageCircle className="w-4 h-4 fill-white text-transparent" />
            <span>Fale conosco</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle (Conforme mockup mobile) */}
        <div className="flex items-center lg:hidden">
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-brand-dark hover:text-brand-pink transition-colors focus:outline-none"
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMobileMenuOpen ? (
              <X className="w-7 h-7 text-brand-dark" />
            ) : (
              <Menu className="w-7 h-7 text-brand-dark" />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bottom-0 bg-white z-50 flex flex-col p-6 animate-fadeIn shadow-xl border-t border-[#F5E6EC]">
          <nav className="flex flex-col gap-3 py-4 text-base font-medium">
            <Link
              href="#inicio"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-xl text-brand-pink bg-[#FDF0F4]"
            >
              Início
            </Link>
            <Link
              href="#sobre"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-xl text-brand-dark hover:text-brand-pink"
            >
              Nossa história
            </Link>
            <Link
              href="#presentes"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-xl text-brand-dark hover:text-brand-pink"
            >
              Presentes
            </Link>
            <Link
              href="#corporativos"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-xl text-brand-dark hover:text-brand-pink"
            >
              Empresas
            </Link>
            <Link
              href="#avaliacoes"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-xl text-brand-dark hover:text-brand-pink"
            >
              Avaliações
            </Link>
            <Link
              href="#contato"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-xl text-brand-dark hover:text-brand-pink"
            >
              Contato
            </Link>
          </nav>

          <div className="mt-auto pt-6 border-t border-[#F5E6EC] flex flex-col gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 py-3 rounded-full bg-brand-pink text-white font-medium shadow-sm"
            >
              <MessageCircle className="w-5 h-5 fill-white text-transparent" />
              <span>Fale pelo WhatsApp</span>
            </a>

            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="flex items-center justify-center gap-2 py-2 text-sm text-brand-muted hover:text-brand-pink"
            >
              <Phone className="w-4 h-4 text-brand-pink" />
              <span>{siteConfig.phoneDisplay}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
