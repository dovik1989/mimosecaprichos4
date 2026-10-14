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

function TikTokMiniIcon() {
  return (
    <svg className="w-3.5 h-3.5" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.97v7.54c0 1.9-.53 3.8-1.57 5.4-1.22 1.86-3.15 3.23-5.32 3.75-2.06.49-4.29.17-6.13-.88-1.99-1.14-3.47-3.08-4.04-5.31-.6-2.31-.19-4.83 1.13-6.81 1.25-1.89 3.28-3.19 5.55-3.61.35-.06.71-.09 1.07-.11v4.06c-.46.04-.92.14-1.35.31-1.07.41-1.95 1.23-2.42 2.28-.47 1.05-.48 2.28-.01 3.33.45 1.02 1.3 1.83 2.34 2.23 1.04.4 2.22.35 3.22-.14 1-.49 1.75-1.4 2.05-2.47.16-.57.24-1.16.24-1.76V.02z" />
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
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 rounded-full bg-[#FCE8F0] text-brand-pink flex items-center justify-center hover:bg-brand-pink hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <InstagramMiniIcon />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 rounded-full bg-[#FCE8F0] text-brand-pink flex items-center justify-center hover:bg-brand-pink hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <FacebookMiniIcon />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 rounded-full bg-[#FCE8F0] text-brand-pink flex items-center justify-center hover:bg-brand-pink hover:text-white transition-colors"
              aria-label="TikTok"
            >
              <TikTokMiniIcon />
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}
