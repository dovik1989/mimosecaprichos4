"use client";

import React, { useEffect, useRef, useState } from "react";
import { verifiedReviewCollection } from "./reviews/verifiedReviews";
import { useReviewWheel } from "./reviews/useReviewWheel";
import { Container } from "@/components/ui/Container";
import { ChevronLeft, ChevronRight, ArrowRight, Star } from "lucide-react";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/animation";

const isValidDate = (value: string) => Number.isFinite(Date.parse(value));

function ReviewText({ text }: { text: string }) {
  const [expanded, setExpanded] = useState(false);
  const [overflows, setOverflows] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);
  useEffect(() => {
    const element = textRef.current;
    if (!element || expanded) return;
    const update = () => setOverflows(element.scrollHeight > element.clientHeight + 1);
    const observer = new ResizeObserver(update);
    observer.observe(element);
    update();
    return () => observer.disconnect();
  }, [text, expanded]);
  return <div className="my-auto">
    <p ref={textRef} className={`text-xs sm:text-[13px] text-[#2D2630] font-sans leading-[1.65] whitespace-pre-line break-words ${expanded ? "" : "line-clamp-4"}`}>{text}</p>
    {overflows && <button type="button" aria-expanded={expanded} onClick={() => setExpanded(!expanded)} className="text-[11px] text-brand-dark underline underline-offset-4 mt-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-pink">{expanded ? "Ler menos" : "Ler avaliação completa"}</button>}
  </div>;
}

/**
 * Ícone estilizado de aspas duplas rosas conforme o mockup aprovado
 */
function PinkQuoteIcon({ className = "w-7 h-7 text-brand-pink" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="28"
      height="24"
      viewBox="0 0 28 24"
      fill="currentColor"
    >
      <path d="M2.5 12C2.5 7.5 5.5 4 9.5 3c.6 0 1 .4 1 1 0 .5-.4.9-.9 1C6.8 5.6 4.8 8.2 4.6 11.2c.7-.4 1.5-.7 2.4-.7 2.8 0 5 2.2 5 5s-2.2 5-5 5c-2.8 0-4.5-2.2-4.5-8.5zm14 0c0-4.5 3-8 7-9 .6 0 1 .4 1 1 0 .5-.4.9-.9 1-2.8.6-4.8 3.2-5 6.2.7-.4 1.5-.7 2.4-.7 2.8 0 5 2.2 5 5s-2.2 5-5 5c-2.8 0-4.5-2.2-4.5-8.5z" />
    </svg>
  );
}

export function ReviewsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const collection = verifiedReviewCollection;
  const reviews = collection.reviews.filter(r => r.approvedByBusiness && r.rating === 5 && r.text.trim() && r.author.trim() && r.verifiedAt).slice(0, 15);
  const googleUrl = collection.allReviewsUrl || "https://www.google.com/maps/search/?api=1&query=Mimos+e+Caprichos+Av.+Onze+de+Agosto+849+Valinhos+SP";
  const figures = collection.summary;
  const summary = figures && Number.isFinite(figures.averageRating) && figures.averageRating >= 1 && figures.averageRating <= 5 && Number.isInteger(figures.totalReviews) && figures.totalReviews > 0 && isValidDate(figures.checkedAt) ? figures : null;
  const dateFormat = new Intl.DateTimeFormat("pt-BR", { day: "numeric", month: "short", year: "numeric", timeZone: "America/Sao_Paulo" });
  const stopWheelAnimation = useReviewWheel(scrollContainerRef);
  const [canScroll, setCanScroll] = useState({ left: false, right: false });
  useEffect(() => {
    const viewport = scrollContainerRef.current;
    if (!viewport) return;
    const update = () => setCanScroll({ left: viewport.scrollLeft > 1, right: viewport.scrollLeft < viewport.scrollWidth - viewport.clientWidth - 1 });
    viewport.addEventListener("scroll", update, { passive: true });
    const observer = new ResizeObserver(update);
    observer.observe(viewport);
    for (const card of viewport.children) observer.observe(card);
    update();
    return () => { viewport.removeEventListener("scroll", update); observer.disconnect(); };
  }, [collection]);

  const scroll = (direction: "left" | "right") => {
    stopWheelAnimation.current();
    if (scrollContainerRef.current) {
      const viewport = scrollContainerRef.current;
      const card = viewport.firstElementChild;
      if (!card) return;
      const step = card.getBoundingClientRect().width + parseFloat(getComputedStyle(viewport).columnGap);
      const scrollAmount = direction === "left" ? -step : step;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
    }
  };

  return (
    <section id="avaliacoes" className="relative py-12 sm:py-16 lg:py-18 bg-[#FDF1F5] overflow-hidden border-t border-[#F8E7EE]">
      {/* ========================================================= */}
      {/* ELEMENTOS DECORATIVOS ORGÂNICOS DE FUNDO                   */}
      {/* ========================================================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-0">
        {/* Formas orgânicas suaves com blur */}
        <div className="absolute -bottom-16 -left-16 w-80 h-80 rounded-full bg-[#FCE6EE] blur-3xl opacity-60" />
        <div className="absolute -top-16 -right-16 w-80 h-80 rounded-full bg-[#FFF0F6] blur-3xl opacity-60" />
      </div>

      <Container className="relative z-10">
        {/* ========================================================= */}
        {/* 1. CABEÇALHO HORIZONTAL (TÍTULO + SELO GOOGLE RATING)     */}
        {/* ========================================================= */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8 sm:mb-10">
          {/* Esquerda: Título */}
          <Reveal direction="up" distance={20} duration={0.8} delay={0.05}>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-pink">
              AVALIAÇÕES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] text-[var(--color-heading-primary)] tracking-tight mt-1 leading-[1.15]">
              O carinho de quem já comprou
            </h2>
            <p className="text-xs sm:text-[13px] text-[#554959] mt-1 font-sans">
              {reviews.length ? "Avaliações 5 estrelas selecionadas" : "Conheça as experiências dos nossos clientes no Google."}
            </p>
          </Reveal>

          {/* Direita: Selo Oficial do Google Rating */}
          <Reveal direction="up" distance={20} duration={0.8} delay={0.15} className="bg-white rounded-[22px] sm:rounded-full px-5 sm:px-6 py-3 shadow-xs border border-[#F4E1EC] flex items-center gap-3.5 sm:gap-4 shrink-0 self-start lg:self-auto">
            {/* Logo Google oficial colorido */}
            <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0">
              <svg className="w-7 h-7" width="28" height="28" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
                />
                <path
                  fill="#34A853"
                  d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.35 24 12 24z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                />
                <path
                  fill="#EA4335"
                  d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.35 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                />
              </svg>
            </div>

            <div>
              {summary ? <>
                <p className="font-bold text-xl text-brand-dark">{summary.averageRating.toLocaleString("pt-BR", { minimumFractionDigits: 1, maximumFractionDigits: 1 })} <span className="text-xs font-normal">de 5 no Google</span></p>
                <p className="text-[11px] text-[#554959]">{summary.totalReviews.toLocaleString("pt-BR")} avaliações</p>
                <p className="text-[10px] text-[#554959]">Consultado em {dateFormat.format(new Date(summary.checkedAt))}</p>
              </> : <span className="text-sm font-semibold text-brand-dark">Avaliações no Google</span>}
            </div>
          </Reveal>
        </div>

        {/* ========================================================= */}
        {/* 2. CARDS DE AVALIAÇÃO + SETAS DE NAVEGAÇÃO LATERAIS       */}
        {/* ========================================================= */}
        {reviews.length === 0 && <div className="rounded-[22px] bg-white border border-[#F6DCE6]/70 p-6 sm:p-7 text-sm text-[#554959]">Confira os comentários e as avaliações dos nossos clientes diretamente no Google.</div>}
        <div className={reviews.length ? "relative flex items-center gap-2 sm:gap-3 lg:gap-4" : "hidden"}>
          {/* Seta circular esquerda */}
          <button
            type="button"
            onClick={() => scroll("left")}
            className="w-9 h-9 rounded-full bg-white border border-[#F2D6E3] text-[#2D2630] hover:text-brand-pink hover:border-brand-pink flex items-center justify-center transition-all duration-300 ease-premium shadow-2xs shrink-0 active:scale-95 disabled:opacity-40 disabled:cursor-default focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-pink"
            aria-label="Avaliação anterior" aria-controls="reviews-carousel" disabled={!canScroll.left}
          >
            <ChevronLeft className="w-4 h-4" width="16" height="16" />
          </button>

          {/* Container dos 3 cards */}
          <StaggerContainer
            ref={scrollContainerRef}
            id="reviews-carousel" role="region" aria-label="Avaliações 5 estrelas selecionadas" tabIndex={reviews.length ? 0 : undefined}
            staggerInterval={0.1}
            baseDelay={0.12}
            duration={0.8}
            distance={22}
            className="min-w-0 flex-1 flex gap-4 sm:gap-5 overflow-x-auto overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden py-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-pink"
          >
            {reviews.map((rev, index) => (
              <StaggerItem
                key={rev.id}
                index={index}
                className="flex-none w-[calc(100%_-_16px)] sm:w-[calc((100%_-_20px)/2)] lg:w-[calc((100%_-_40px)/3)] bg-white rounded-[22px] sm:rounded-[26px] p-6 sm:p-7 shadow-[0_4px_20px_rgba(235,75,142,0.06)] hover:shadow-[0_8px_30px_rgba(235,75,142,0.12)] border border-[#F6DCE6]/70 flex flex-col justify-between min-h-[170px] sm:min-h-[185px] transition-all duration-400 ease-premium hover:-translate-y-1"
              >
                {/* Linha superior: Aspas rosas à esquerda + 5 estrelas amarelas */}
                <div className="flex items-center justify-between mb-2">
                  <PinkQuoteIcon className="w-7 h-7 text-brand-pink" />
                  <div className="flex text-[#FBBC05] gap-0.5" role="img" aria-label={`${rev.rating} de 5 estrelas`}>
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FBBC05] text-[#FBBC05]" />
                    ))}
                  </div>
                </div>

                {/* Texto do depoimento */}
                <ReviewText text={rev.text} />
                {rev.isExcerpt && <p className="text-[10px] text-[#554959] mt-2">Trecho da avaliação exibido na captura.</p>}
                <div className="mt-4 pt-3 border-t border-[#F8E7EE] text-[11px] text-[#554959]">
                  <p className="font-semibold text-brand-dark break-words">{rev.author}</p>
                  {rev.publishedAt && isValidDate(rev.publishedAt) && <time dateTime={rev.publishedAt} className="block mt-1">{dateFormat.format(new Date(rev.publishedAt))}</time>}
                  {!rev.publishedAt && rev.publicationLabel && <p className="mt-1">Na captura: {rev.publicationLabel}</p>}
                  <a href={rev.originalUrl || googleUrl} target="_blank" rel="noopener noreferrer" className="inline-block mt-2 underline underline-offset-4 hover:text-brand-pink focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-pink">{rev.originalUrl ? "Ver avaliação no Google" : "Ver avaliações no Google"}</a>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Seta circular direita */}
          <button
            type="button"
            onClick={() => scroll("right")}
            className="w-9 h-9 rounded-full bg-white border border-[#F2D6E3] text-[#2D2630] hover:text-brand-pink hover:border-brand-pink flex items-center justify-center transition-all duration-300 ease-premium shadow-2xs shrink-0 active:scale-95 disabled:opacity-40 disabled:cursor-default focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-pink"
            aria-label="Próxima avaliação" aria-controls="reviews-carousel" disabled={!canScroll.right}
          >
            <ChevronRight className="w-4 h-4" width="16" height="16" />
          </button>
        </div>

        {/* ========================================================= */}
        {/* 3. CRITÉRIO DE SELEÇÃO + ACESSO A TODAS AS AVALIAÇÕES     */}
        {/* ========================================================= */}
        <Reveal direction="up" distance={16} duration={0.8} delay={0.2} className="mt-6 sm:mt-8 text-center space-y-3.5">
          {reviews.length > 0 && <p className="text-[11px] text-[#554959] font-sans">Seleção de avaliações 5 estrelas. Veja todas as notas e opiniões no Google.</p>}

          <div>
            <a
              href={googleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-brand-pink hover:bg-brand-pink-hover text-white text-xs sm:text-sm font-semibold shadow-soft hover:shadow-floating transition-all duration-300 ease-premium hover:scale-[1.02]"
            >
              <span>Ver avaliações no Google</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-premium group-hover:translate-x-1" />
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
