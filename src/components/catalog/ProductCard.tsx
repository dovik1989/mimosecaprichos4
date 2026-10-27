import Image from "next/image";
import { Maximize2 } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import type { CatalogProduct } from "@/data/catalog";
import { createWhatsAppUrl } from "@/lib/utils";
import { siteConfig } from "@/data/site-config";

export function productWhatsAppUrl(product: CatalogProduct) {
  const message = product.whatsappMessage ?? `Olá! Vi o presente ${product.name} no site da Mimos e Caprichos e gostaria de conhecer as opções e valores.`;
  return createWhatsAppUrl(siteConfig.phoneRaw, `${message} Referência: ${product.id}.`);
}

export function ProductCard({ product, onOpen, priority = false }: { product: CatalogProduct; onOpen: () => void; priority?: boolean }) {
  const photo = product.photos[0];
  return <article className="group flex flex-col h-full bg-white rounded-2xl border border-brand-border p-2.5 sm:p-3.5">
    <button type="button" onClick={onOpen} aria-label={`Ampliar fotografia: ${product.name}`} className="relative block w-full aspect-[4/5] rounded-xl overflow-hidden bg-brand-offwhite focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-pink">
      <Image src={photo.src} alt={photo.alt} fill priority={priority} sizes="(max-width: 359px) calc(100vw - 52px), (max-width: 1023px) 50vw, 300px" className="object-cover transition-transform duration-500 ease-premium motion-safe:group-hover:scale-[1.03]" />
      <span aria-hidden="true" className="absolute bottom-2 right-2 w-8 h-8 bg-white/95 text-brand-dark rounded-full flex items-center justify-center shadow-sm"><Maximize2 size={14} /></span>
    </button>
    <div className="flex flex-col flex-1 px-0.5 pt-3 pb-0.5">
      <h2 className="text-sm sm:text-base font-bold text-brand-dark leading-snug">{product.name}</h2>
      {product.price && <p className="mt-1 text-base sm:text-lg font-bold leading-tight text-brand-dark">{product.price}</p>}
      <p className="text-xs sm:text-[13px] text-brand-muted leading-relaxed mt-2 mb-4">{product.description}</p>
      {product.availability === "unavailable" ? <p className="mt-auto pt-4 text-xs font-semibold text-brand-muted">Indisponível no momento</p> : (<a href={productWhatsAppUrl(product)} target="_blank" rel="noopener noreferrer" aria-label={`Quero este presente: ${product.name}, pelo WhatsApp`} className="inline-flex items-center justify-center gap-1.5 min-h-11 px-2 sm:px-3 py-2.5 mt-auto rounded-full bg-brand-pink hover:bg-brand-pink-hover text-white text-xs leading-snug font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-pink">
        <FaWhatsapp size={16} aria-hidden="true" className="shrink-0" /><span>Quero este presente</span>
      </a>)}
    </div>
  </article>;
}
