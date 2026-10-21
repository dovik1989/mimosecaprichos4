"use client";

import React from "react";
import { siteConfig } from "@/data/site-config";
import { createWhatsAppUrl } from "@/lib/utils";
import { FaWhatsapp } from "react-icons/fa6";

export function WhatsAppFloating() {
  const whatsappUrl = createWhatsAppUrl(siteConfig.phoneRaw, siteConfig.defaultWhatsAppMessage);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center group">
      {/* Tooltip on hover */}
      <div className="hidden md:flex items-center bg-white text-brand-dark text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg border border-brand-pink/20 mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
        <span>Fale conosco no WhatsApp</span>
        <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-white rotate-45 border-r border-t border-brand-pink/20" />
      </div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp com a Mimos e Caprichos"
        className="relative w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full flex items-center justify-center shadow-floating transition-transform duration-300 hover:scale-110 active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40"
      >
        <FaWhatsapp className="w-8 h-8" aria-hidden="true" />

        {/* Badge vermelho com número "1" conforme o mockup mobile tela 9 */}
        <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-white text-[11px] font-bold flex items-center justify-center shadow-xs border-2 border-white">
          1
        </span>
      </a>
    </div>
  );
}
