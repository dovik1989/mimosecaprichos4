"use client";

import { useEffect, useRef } from "react";
import { ChevronDown, Heart, Sparkles, X } from "lucide-react";

const values = [
  {
    title: "Respeito e Honestidade",
    description: "Tratar clientes, colaboradores e parceiros com educação, empatia e cordialidade em todas as situações. Agir com transparência, responsabilidade e ética em cada atendimento, venda e processo interno.",
  },
  {
    title: "Qualidade e Capricho",
    description: "Garantir alto padrão na escolha dos produtos, higiene na manipulação e cuidado em cada detalhe da montagem.",
  },
  {
    title: "Compromisso com o Cliente",
    description: "Cumprir prazos, respeitar horários, processos e compromissos, atender solicitações corretamente e buscar sempre superar expectativas pois entendemos que nossos produtos fazem parte de momentos importantes.",
  },
  {
    title: "Organização e Padronização",
    description: "Manter ambiente de trabalho limpo, organizado e seguir os padrões definidos pela empresa.",
  },
  {
    title: "Carinho e Dedicação",
    description: "Preparar cada pedido como se fosse único, entendendo que não entregamos apenas produtos, e sim momentos, presença e sentimentos.",
  },
  {
    title: "Celebrar Momentos",
    description: "Valorizar cada data comemorativa e cada história por trás do pedido, tornando cada entrega especial e memorável.",
  },
];

export function OurStoryDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const backdropPointerDown = useRef(false);

  useEffect(() => {
    if (!open) return;
    const dialog = dialogRef.current;
    if (!dialog) return;

    const trigger = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;
    const previousGutter = document.documentElement.style.scrollbarGutter;
    document.documentElement.style.scrollbarGutter = "stable";
    document.body.style.overflow = "hidden";
    dialog.showModal();
    dialog.querySelector<HTMLElement>("[data-story-scroll]")?.scrollTo(0, 0);

    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      document.documentElement.style.scrollbarGutter = previousGutter;
      trigger?.focus({ preventScroll: true });
    };
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      id="our-story-dialog"
      aria-labelledby="our-story-title"
      aria-describedby="our-story-description"
      className="our-story-dialog fixed inset-0 m-auto w-[calc(100%-2rem)] max-w-[820px] max-h-[90dvh] overflow-hidden rounded-[24px] border-0 bg-white p-0 text-brand-dark shadow-floating sm:rounded-[28px]"
      onCancel={(event) => { event.preventDefault(); onClose(); }}
      onPointerDown={(event) => { backdropPointerDown.current = event.target === event.currentTarget; }}
      onClick={(event) => {
        if (backdropPointerDown.current && event.target === event.currentTarget) onClose();
        backdropPointerDown.current = false;
      }}
    >
      <button
        type="button"
        autoFocus
        onClick={onClose}
        aria-label="Fechar nossa história"
        className="absolute right-3 top-3 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white text-brand-pink shadow-sm transition-colors hover:bg-brand-pink-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-pink sm:right-5 sm:top-5"
      >
        <X size={22} aria-hidden="true" />
      </button>

      <div data-story-scroll className="max-h-[90dvh] overflow-y-auto overscroll-contain p-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-14 sm:p-10 sm:pt-12">
        <header className="border-b border-[#F3DFE9] pb-7">
          <p className="pr-8 text-[11px] font-bold uppercase tracking-wider text-brand-pink sm:text-xs">CONHEÇA NOSSA ESSÊNCIA</p>
          <h2 id="our-story-title" className="mt-3 font-serif text-3xl leading-[1.15] tracking-tight text-[var(--color-heading-primary)] sm:text-[40px]">
            Mais que presentes,<br className="hidden sm:block" /> entregamos emoções.
          </h2>
          <p id="our-story-description" className="mt-4 text-sm leading-relaxed text-brand-muted">
            Conheça a história, o propósito e os valores que fazem parte da Mimos e Caprichos.
          </p>
        </header>

        <section aria-labelledby="story-history" className="py-7">
          <h3 id="story-history" className="font-serif text-2xl text-[var(--color-heading-primary)]">Nossa História</h3>
          <p className="mt-3 text-sm leading-[1.75] text-brand-muted">
            A Mimos e Caprichos nasceu em Valinhos com o propósito de transformar momentos em lembranças especiais. Aqui você encontra presentes criativos, personalizados e feitos com muito carinho, sempre pensando em tornar cada ocasião mais única e inesquecível.
          </p>
        </section>

        <div className="space-y-6 rounded-2xl bg-[#FFF7FA] p-5 sm:p-6">
          <section aria-labelledby="story-mission">
            <h3 id="story-mission" className="flex items-center gap-3 font-serif text-2xl text-[var(--color-heading-primary)]">
              <Heart size={21} className="shrink-0 text-brand-pink" aria-hidden="true" />Nossa Missão
            </h3>
            <p className="mt-3 text-sm leading-[1.75] text-brand-muted">
              Transformar o dia a dia das pessoas com presentes fofos e personalizados, fazendo desde os simples momentos serem lembrados com ternura e encanto, deixando cada entrega única e especial.
            </p>
          </section>
          <section aria-labelledby="story-vision" className="border-t border-[#F3DFE9] pt-6">
            <h3 id="story-vision" className="flex items-center gap-3 font-serif text-2xl text-[var(--color-heading-primary)]">
              <Sparkles size={21} className="shrink-0 text-brand-pink" aria-hidden="true" />Nossa Visão
            </h3>
            <p className="mt-3 text-sm leading-[1.75] text-brand-muted">
              Ser referência no mercado em presentes e cestas personalizadas, destacando-se pela criatividade, qualidade dos produtos e excelência no atendimento, expandindo nossa presença e tornando-nos parte dos principais momentos comemorativos de nossos clientes, seja ele pessoa física ou jurídica.
            </p>
          </section>
        </div>

        <section aria-labelledby="story-values" className="pt-8">
          <h3 id="story-values" className="font-serif text-2xl text-[var(--color-heading-primary)]">Nossos Valores</h3>
          <div className="mt-4 divide-y divide-[#F3DFE9] border-y border-[#F3DFE9]">
            {values.map((value) => (
              <details key={value.title} className="group">
                <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 text-sm font-semibold text-[var(--color-heading-primary)] transition-colors hover:text-brand-pink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-pink [&::-webkit-details-marker]:hidden">
                  {value.title}
                  <ChevronDown size={18} aria-hidden="true" className="shrink-0 text-brand-pink transition-transform duration-200 group-open:rotate-180 motion-reduce:transition-none" />
                </summary>
                <p className="pb-5 pr-3 text-sm leading-[1.75] text-brand-muted">{value.description}</p>
              </details>
            ))}
          </div>
        </section>
      </div>
    </dialog>
  );
}
