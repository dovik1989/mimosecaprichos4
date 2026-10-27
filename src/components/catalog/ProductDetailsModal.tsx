"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import type { CatalogProduct } from "@/data/catalog";
import { productWhatsAppUrl } from "./ProductCard";

export function ProductDetailsModal({ product, onClose }: { product: CatalogProduct | null; onClose: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const [photoIndex, setPhotoIndex] = useState(0);
  const count = product?.photos.length ?? 0;
  const navigate = (step: number) => setPhotoIndex(index => (index + step + count) % count);

  useEffect(() => {
    if (!product) return;
    const dialog = dialogRef.current;
    if (!dialog) return;
    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;
    setPhotoIndex(0);
    dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus({ preventScroll: true });
    };
  }, [product]);

  if (!product) return null;
  const photo = product.photos[photoIndex] ?? product.photos[0];
  return <dialog ref={dialogRef} aria-labelledby="product-dialog-title" aria-describedby="product-dialog-description" onCancel={event => { event.preventDefault(); onClose(); }} onKeyDown={event => {
    if (event.key !== "Tab") return;
    const controls = [...event.currentTarget.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex="0"]')];
    const first = controls[0];
    const last = controls[controls.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
  }} onClick={event => { if (event.target === event.currentTarget) onClose(); }} className="fixed m-auto p-0 w-[calc(100%-24px)] max-w-4xl max-h-[calc(100dvh-24px)] overflow-y-auto rounded-2xl bg-white text-brand-dark shadow-xl backdrop:bg-brand-dark/50">
    <div className="relative grid sm:grid-cols-[1.1fr_1fr]">
      <button type="button" autoFocus onClick={onClose} aria-label="Fechar visualização do presente" className="absolute right-3 top-3 z-10 w-11 h-11 bg-white rounded-full shadow-sm flex items-center justify-center text-brand-dark hover:text-brand-pink focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-pink"><X size={20} /></button>
      <div className="relative bg-brand-offwhite min-w-0">
        <div className="relative h-[min(48dvh,420px)] sm:h-[min(76dvh,650px)]" onTouchStart={event => { touchStart.current = { x: event.touches[0].clientX, y: event.touches[0].clientY }; }} onTouchEnd={event => {
          const start = touchStart.current;
          touchStart.current = null;
          if (!start || count < 2) return;
          const dx = event.changedTouches[0].clientX - start.x;
          const dy = event.changedTouches[0].clientY - start.y;
          if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) navigate(dx < 0 ? 1 : -1);
        }} onKeyDown={event => { if (count > 1 && (event.key === "ArrowLeft" || event.key === "ArrowRight")) { event.preventDefault(); navigate(event.key === "ArrowLeft" ? -1 : 1); } }} tabIndex={count > 1 ? 0 : undefined} aria-label={count > 1 ? "Fotografias do presente; deslize ou use as setas" : undefined}>
          <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 639px) 100vw, 500px" className="object-contain" />
        </div>
        {count > 1 && <div className="flex items-center justify-center gap-4 py-3">
          <button type="button" onClick={() => navigate(-1)} aria-label="Fotografia anterior" className="w-11 h-11 rounded-full bg-white flex items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-pink"><ChevronLeft size={18} /></button>
          <span aria-live="polite" className="text-xs text-brand-muted">{photoIndex + 1} / {count}</span>
          <button type="button" onClick={() => navigate(1)} aria-label="Próxima fotografia" className="w-11 h-11 rounded-full bg-white flex items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-pink"><ChevronRight size={18} /></button>
        </div>}
      </div>
      <div className="flex flex-col justify-center p-6 sm:p-8 sm:pt-16">
        <h2 id="product-dialog-title" className="font-serif text-3xl text-[var(--color-heading-primary)] leading-tight">{product.name}</h2>
        {product.price && <p className="mt-2 text-xl font-bold text-brand-dark">{product.price}</p>}
        <p id="product-dialog-description" className="text-sm text-brand-muted leading-relaxed mt-4">{product.description}</p>
        {product.informationStatus === "pending-approval" && <p className="text-xs text-brand-muted mt-4">Nome descritivo provisório. Consulte as opções e os valores pelo WhatsApp.</p>}
        {product.availability === "unavailable" ? <p className="mt-auto pt-4 text-xs font-semibold text-brand-muted">Indisponível no momento</p> : (<a href={productWhatsAppUrl(product)} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-brand-pink hover:bg-brand-pink-hover px-4 py-3.5 min-h-11 text-white text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-pink"><FaWhatsapp size={19} aria-hidden="true" />Consultar pelo WhatsApp</a>)}
      </div>
    </div>
  </dialog>;
}
