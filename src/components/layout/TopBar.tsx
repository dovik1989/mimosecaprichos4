import React from "react";
import { siteConfig } from "@/data/site-config";
import { Container } from "@/components/ui/Container";
import { MapPin, Phone, MessageCircle } from "lucide-react";
import { createWhatsAppUrl } from "@/lib/utils";

export function TopBar() {
  const whatsappUrl = createWhatsAppUrl(siteConfig.phoneRaw, siteConfig.defaultWhatsAppMessage);

  return (
    <div className="bg-[#FAF3F5] text-brand-dark/80 text-xs py-2 border-b border-brand-border/60">
      <Container className="flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-4">
        {/* Localização / Selo */}
        <div className="flex items-center gap-1.5 text-center sm:text-left">
          <MapPin className="w-3.5 h-3.5 text-brand-pink shrink-0" />
          <span className="font-medium">Presentes personalizados em Valinhos</span>
        </div>

        {/* Atendimento + Telefone */}
        <div className="flex items-center gap-3 sm:gap-4 font-medium">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-brand-muted hover:text-brand-pink transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
            <span>Atendimento pelo WhatsApp</span>
          </a>

          <span className="text-brand-border">|</span>

          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="inline-flex items-center gap-1.5 font-semibold text-brand-dark hover:text-brand-pink transition-colors"
          >
            <Phone className="w-3 h-3 text-brand-pink" />
            <span>{siteConfig.phoneDisplay}</span>
          </a>
        </div>
      </Container>
    </div>
  );
}

