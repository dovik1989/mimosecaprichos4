import React from "react";
import { siteConfig } from "@/data/site-config";
import { Container } from "@/components/ui/Container";
import { Gift, Heart, Phone } from "lucide-react";
import { createWhatsAppUrl } from "@/lib/utils";

function InstagramMiniIcon() {
  return (
    <svg className="w-3.5 h-3.5" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookMiniIcon() {
  return (
    <svg className="w-3.5 h-3.5" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export function TopBar() {
  const whatsappUrl = createWhatsAppUrl(siteConfig.phoneRaw, siteConfig.defaultWhatsAppMessage);

  return (
    <div className="bg-white text-brand-dark/75 text-xs py-2 border-b border-[#F5E6EC]">
      <Container className="flex items-center justify-between">
        {/* Left: Gift & Heart messages */}
        <div className="flex items-center gap-4 sm:gap-6">
          <div className="flex items-center gap-1.5 text-xs">
            <Gift className="w-3.5 h-3.5 text-brand-pink shrink-0" />
            <span>Presentes personalizados em Valinhos</span>
          </div>

          <div className="hidden md:flex items-center gap-1.5 text-xs">
            <Heart className="w-3.5 h-3.5 text-brand-pink fill-brand-pink shrink-0" />
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-pink transition-colors"
            >
              Atendimento pelo WhatsApp
            </a>
          </div>
        </div>

        {/* Right: Phone & Socials */}
        <div className="flex items-center gap-4">
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="flex items-center gap-1.5 font-medium text-brand-dark hover:text-brand-pink transition-colors text-xs"
          >
            <Phone className="w-3.5 h-3.5 text-brand-pink" />
            <span>{siteConfig.phoneDisplay}</span>
          </a>

          {/* Social Icons matching mockup */}
          <div className="hidden sm:flex items-center gap-2">
            <a
              href={siteConfig.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 rounded-full bg-[#FCE8F0] text-brand-pink flex items-center justify-center hover:bg-brand-pink hover:text-white transition-colors"
              aria-label="Instagram da Mimos e Caprichos Valinhos"
            >
              <InstagramMiniIcon />
            </a>
            <a
              href={siteConfig.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 rounded-full bg-[#FCE8F0] text-brand-pink flex items-center justify-center hover:bg-brand-pink hover:text-white transition-colors"
              aria-label="Facebook da Mimos e Caprichos Valinhos"
            >
              <FacebookMiniIcon />
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}
