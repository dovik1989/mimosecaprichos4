"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, X, ArrowRight } from "lucide-react";
import { catalogProducts, type CatalogCategoryId } from "@/data/catalog";
import { BalloonProgress } from "@/components/ui/BalloonProgress";
import { useCarouselNavigation } from "@/components/ui/useCarouselNavigation";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/animation";

const filters: { id: "all" | CatalogCategoryId; label: string }[] = [
  { id: "all", label: "Todas" },
  { id: "cestas-personalizadas", label: "Cestas" },
  { id: "presentes-e-mimos", label: "Presentes e Mimos" },
  { id: "presentes-personalizados", label: "Personalizados" },
  { id: "presentes-corporativos", label: "Corporativos" },
  { id: "datas-comemorativas", label: "Datas comemorativas" },
];

// Derive the gallery from approved catalog products; shared main photos appear once.
const gallery = catalogProducts.filter(product => product.informationStatus === "approved" && product.photos[0]?.src)
  .filter((product, index, products) => products.findIndex(item => item.category === product.category && item.photos[0].src === product.photos[0].src) === index)
  .map(product => ({ id: product.id, category: product.category, name: product.name, photo: product.photos[0], href: `/presentes/${product.category}` }));

export function InspirationsSection() {
  const [filter, setFilter] = useState<(typeof filters)[number]["id"]>("all");
  const [visibleCount, setVisibleCount] = useState(12);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const { progress, stopWheelAnimation } = useCarouselNavigation(viewportRef);
  const photos = filter === "all" ? gallery : gallery.filter(photo => photo.category === filter);
  const active = activeIndex === null ? null : photos[activeIndex];
  const navigate = (direction: number) => setActiveIndex(index => index === null ? null : (index + direction + photos.length) % photos.length);

  useLayoutEffect(() => {
    stopWheelAnimation.current();
    const viewport = viewportRef.current;
    if (viewport) {
      viewport.scrollTo({ left: 0, behavior: "instant" });
      viewport.dispatchEvent(new Event("scroll"));
    }
  }, [filter, stopWheelAnimation]);

  useEffect(() => {
    if (activeIndex === null) return;
    const dialog = dialogRef.current;
    if (!dialog) return;
    triggerRef.current = document.activeElement as HTMLElement;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      triggerRef.current?.focus({ preventScroll: true });
    };
  }, [activeIndex === null]);

  const scroll = (direction: number) => {
    stopWheelAnimation.current();
    const viewport = viewportRef.current;
    const card = viewport?.querySelector("button");
    if (!viewport || !card) return;
    viewport.scrollBy({ left: direction * (card.getBoundingClientRect().width + parseFloat(getComputedStyle(viewport).columnGap)), behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  };

  return (
    <section id="inspiracoes" className="py-14 sm:py-20 bg-white border-t border-[#F8E7EE] overflow-hidden">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-7 sm:mb-9">
          <Reveal direction="up" distance={20} duration={0.8} delay={0.05}>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-pink">GALERIA</span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-[34px] xl:text-[38px] text-[var(--color-heading-primary)] tracking-tight mt-1 leading-[1.2]">Inspirações que encantam</h2>
          </Reveal>
          <Reveal direction="up" distance={20} duration={0.8} delay={0.15} className="flex items-center gap-5 sm:gap-6">
            <p className="text-xs sm:text-[13px] text-[#554959] max-w-xs lg:max-w-sm leading-relaxed hidden sm:block">Confira algumas ideias reais que já fizeram muitos momentos serem ainda mais especiais.</p>
            <div className="hidden lg:flex items-center gap-2 shrink-0">
              {[-1, 1].map(direction => <button key={direction} type="button" onClick={() => scroll(direction)} aria-label={direction < 0 ? "Anterior" : "Próximo"} aria-controls="inspiration-carousel" className="w-9 h-9 rounded-full border border-[#F0D5E1] hover:border-brand-pink bg-white text-brand-dark hover:text-brand-pink flex items-center justify-center transition-all duration-300 ease-premium focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-pink">{direction < 0 ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}</button>)}
            </div>
          </Reveal>
        </div>
        <div role="group" aria-label="Filtrar inspirações por categoria" className="flex gap-2 overflow-x-auto pb-2 mb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {filters.map(tab => <button key={tab.id} type="button" aria-pressed={filter === tab.id} onClick={() => { setFilter(tab.id); setVisibleCount(12); }} className={`shrink-0 text-xs font-semibold px-4 py-2 rounded-full whitespace-nowrap transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-pink ${filter === tab.id ? "bg-brand-pink text-white" : "bg-[#FBF1F5] text-brand-dark hover:bg-[#F8E3EC]"}`}>{tab.label}</button>)}
        </div>
        <p className="sr-only" role="status">{photos.length} inspirações em {filters.find(tab => tab.id === filter)?.label}</p>
        <div ref={viewportRef} id="inspiration-carousel" tabIndex={0} aria-label="Galeria de inspirações; use as setas ou role para ver mais" className="grid grid-cols-2 gap-3 lg:flex lg:gap-4 lg:overflow-x-auto lg:overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden py-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-pink">
          {photos.map((photo, index) => <button key={photo.id} type="button" onClick={() => setActiveIndex(index)} aria-label={`Ampliar fotografia: ${photo.name}`} data-category={photo.category} className={`${index >= visibleCount ? "hidden lg:block" : "block"} relative min-w-0 aspect-square lg:aspect-[4/4.3] lg:flex-none lg:w-[calc((100%-4*16px)/5)] rounded-2xl lg:rounded-[20px] overflow-hidden bg-[#FAF2F5] border border-[#F5E2EC] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-pink group`}>
            <Image src={photo.photo.src} alt={photo.name} fill loading="lazy" className="object-contain transition-transform duration-700 ease-premium group-hover:scale-[1.02]" sizes="(max-width: 1023px) 50vw, (max-width: 1280px) 20vw, 240px" />
          </button>)}
        </div>
        {photos.length === 0 && <p className="py-10 text-center text-sm text-brand-muted">As inspirações desta categoria serão adicionadas em breve.</p>}
        <div className="hidden lg:block"><BalloonProgress progress={progress} imageSrc="/images/balão_azul_pastel_brilhante.png" imageWidth={1024} imageHeight={1536} balloonWidth={44} label="Progresso da galeria de inspirações" /></div>
        {photos.length > visibleCount && <button type="button" onClick={() => setVisibleCount(count => count + 12)} className="lg:hidden mt-6 flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-full bg-brand-pink text-white text-sm font-semibold hover:bg-brand-pink-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-pink">Ver mais inspirações<ArrowRight size={16} /></button>}
      </Container>
      {active && <dialog ref={dialogRef} aria-labelledby="inspiration-photo-title" onCancel={event => { event.preventDefault(); setActiveIndex(null); }} onClick={event => { if (event.target === event.currentTarget) setActiveIndex(null); }} onKeyDown={event => { if (event.key === "ArrowLeft" || event.key === "ArrowRight") { event.preventDefault(); navigate(event.key === "ArrowLeft" ? -1 : 1); } }} className="fixed m-auto p-0 w-[calc(100%-24px)] max-w-3xl max-h-[calc(100dvh-24px)] overflow-y-auto rounded-2xl bg-white text-brand-dark shadow-xl backdrop:bg-brand-dark/50">
        <div className="relative">
          <button autoFocus type="button" onClick={() => setActiveIndex(null)} aria-label="Fechar fotografia" className="absolute right-3 top-3 z-10 size-11 rounded-full bg-white shadow-sm flex items-center justify-center"><X size={20} /></button>
          <div className="relative h-[65dvh] bg-[#FAF2F5]"><Image src={active.photo.src} alt={active.name} fill sizes="(max-width: 768px) 100vw, 768px" className="object-contain" /></div>
          <div className="p-5 flex flex-wrap items-center justify-between gap-4">
            <div><h3 id="inspiration-photo-title" className="font-serif text-2xl text-[var(--color-heading-primary)]">{active.name}</h3><Link href={active.href} className="inline-block mt-2 text-sm text-brand-dark underline underline-offset-4 hover:text-brand-pink">Conhecer este presente</Link></div>
            {photos.length > 1 && <div className="flex items-center gap-3"><button type="button" onClick={() => navigate(-1)} aria-label="Fotografia anterior" className="size-11 flex items-center justify-center rounded-full bg-[#FBF1F5]"><ChevronLeft size={20} /></button><span className="text-xs tabular-nums" aria-live="polite">{activeIndex! + 1} / {photos.length}</span><button type="button" onClick={() => navigate(1)} aria-label="Próxima fotografia" className="size-11 flex items-center justify-center rounded-full bg-[#FBF1F5]"><ChevronRight size={20} /></button></div>}
          </div>
        </div>
      </dialog>}
    </section>
  );
}
