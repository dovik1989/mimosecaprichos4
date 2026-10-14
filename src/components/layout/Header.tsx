"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig, navItems } from "@/data/site-config";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Menu, X, MessageCircle, Phone } from "lucide-react";
import { cn, createWhatsAppUrl } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        "sticky top-0 z-40 w-full transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-soft py-3 border-b border-brand-pink-light/60"
          : "bg-brand-offwhite/90 backdrop-blur-sm py-4 border-b border-brand-border/40"
      )}
    >
      <Container className="flex items-center justify-between">
        {/* Logo */}
        <Link
          href="#inicio"
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-pink rounded-lg"
        >
          <div className="relative w-40 h-11 sm:w-48 sm:h-12 transition-transform duration-300 group-hover:scale-[1.02]">
            <Image
              src="/images/logo-temporario.png"
              alt="Mimos e Caprichos - Presentes Personalizados"
              fill
              priority
              className="object-contain object-left"
              sizes="(max-width: 640px) 160px, 192px"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-brand-dark/85 hover:text-brand-pink transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-brand-pink after:transition-all after:duration-300"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Button
            href={whatsappUrl}
            variant="primary"
            size="md"
            leftIcon={<MessageCircle className="w-4 h-4 text-white" />}
          >
            Fale conosco
          </Button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <Button
            href={whatsappUrl}
            variant="primary"
            size="sm"
            className="text-xs px-3 py-1.5"
            leftIcon={<MessageCircle className="w-3.5 h-3.5" />}
          >
            WhatsApp
          </Button>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2.5 rounded-xl text-brand-dark hover:text-brand-pink hover:bg-brand-pink-light/60 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-pink"
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] sm:top-[73px] bottom-0 bg-white/95 backdrop-blur-xl border-t border-brand-border/60 z-50 flex flex-col p-6 animate-fadeIn shadow-2xl overflow-y-auto">
          <nav className="flex flex-col gap-2 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-brand-dark py-3 px-4 rounded-xl hover:bg-brand-pink-light/70 hover:text-brand-pink transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto pt-6 border-t border-brand-border/60 flex flex-col gap-3">
            <Button
              href={whatsappUrl}
              variant="primary"
              size="lg"
              fullWidth
              leftIcon={<MessageCircle className="w-5 h-5 text-white" />}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Fale pelo WhatsApp
            </Button>

            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="flex items-center justify-center gap-2 py-3 text-sm font-semibold text-brand-muted hover:text-brand-pink transition-colors"
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

