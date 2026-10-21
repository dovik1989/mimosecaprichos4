import { FaInstagram, FaFacebookF } from "react-icons/fa6";
import React from "react";
import { siteConfig } from "@/data/site-config";
import { Container } from "@/components/ui/Container";
import { Gift, Heart, Phone } from "lucide-react";
import { createWhatsAppUrl } from "@/lib/utils";

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
              <FaInstagram size={14} aria-hidden="true" />
            </a>
            <a
              href={siteConfig.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 rounded-full bg-[#FCE8F0] text-brand-pink flex items-center justify-center hover:bg-brand-pink hover:text-white transition-colors"
              aria-label="Facebook da Mimos e Caprichos Valinhos"
            >
              <FaFacebookF size={14} aria-hidden="true" />
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}
