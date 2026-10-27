"use client";

import React from "react";
import { Camera, Heart, Info, Lightbulb, MessageCircle, type LucideIcon } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Reveal } from "@/components/animation";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/site-config";
import { createWhatsAppUrl } from "@/lib/utils";

type Step = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const steps: Step[] = [
  {
    title: "Chame no WhatsApp",
    description: `Fale com a gente pelo ${siteConfig.phoneDisplay}.`,
    icon: MessageCircle,
  },
  {
    title: "Conte sua ideia e o que deseja",
    description: "Conte qual item procura, a ocasião e para quem será o presente.",
    icon: Lightbulb,
  },
  {
    title: "Envie as informações necessárias",
    description: "Informe o endereço de entrega, o nome de quem vai receber e a data desejada.",
    icon: Info,
  },
  {
    title: "Aguarde seu pedido ficar pronto",
    description: "Enviaremos uma foto quando tudo estiver pronto e finalizado.",
    icon: Camera,
  },
  {
    title: "Ajudamos você a surpreender",
    description: "Enviamos o presente para quem você deseja e, juntos, tornamos esse dia inesquecível.",
    icon: Heart,
  },
];

export function HowItWorksSection() {
  const whatsappUrl = createWhatsAppUrl(
    siteConfig.phoneRaw,
    "Olá! Quero contar minha ideia para montar um presente especial."
  );

  return (
    <section className="relative overflow-hidden border-t border-[#F8E7EE] bg-white py-12 sm:py-14 lg:py-16">
      <Container size="wide">
        <Reveal direction="up" distance={20} duration={0.8} delay={0.05} className="max-w-[780px]">
          <p className="mb-2 text-xs font-bold uppercase tracking-wider text-brand-pink">
            Como funciona
          </p>
          <h2 className="font-serif text-[30px] leading-[1.08] tracking-[-0.025em] text-[var(--color-heading-primary)] sm:text-[38px] lg:text-[46px]">
            <span className="lg:block">É simples surpreender</span>{" "}
            <span className="lg:block lg:whitespace-nowrap">com a Mimos e Caprichos</span>
          </h2>
        </Reveal>

        <ol className="relative mt-10 grid gap-7 sm:mt-12 lg:grid-cols-5 lg:gap-5 xl:gap-7">
          <span
            className="pointer-events-none absolute left-[10%] right-[10%] top-[45px] hidden h-px bg-[#F4CDD9] lg:block"
            aria-hidden="true"
          />

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <li key={step.title} className="relative">
                <Reveal
                  direction="up"
                  distance={18}
                  duration={0.72}
                  delay={0.1 + index * 0.08}
                  className="flex items-start gap-4 lg:flex-col lg:items-center lg:text-center"
                >
                  <div className="relative z-10 flex shrink-0 flex-col items-center bg-white">
                    <span className="mb-2 flex size-6 items-center justify-center rounded-full border-2 border-brand-pink bg-white text-xs font-bold text-brand-pink">
                      {index + 1}
                    </span>
                    <span className="flex size-14 items-center justify-center rounded-full border border-[#FADDE8] bg-[#FFF0F5] text-brand-pink sm:size-16">
                      <Icon className="size-6 stroke-[1.8] sm:size-7" aria-hidden="true" />
                    </span>
                  </div>

                  <div className="min-w-0 pt-1 lg:pt-0">
                    <h3 className="text-[15px] font-bold leading-snug text-brand-dark sm:text-base">
                      {step.title}
                    </h3>
                    <p className="mx-auto mt-1.5 max-w-[250px] text-xs leading-[1.55] text-[#554959] sm:text-[13px]">
                      {step.description}
                    </p>

                    {index === 0 && (
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-brand-pink px-4 py-2.5 text-xs font-bold text-white transition-colors hover:bg-brand-pink-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-pink"
                        aria-label="Chamar a Mimos e Caprichos no WhatsApp"
                      >
                        <FaWhatsapp className="size-4" aria-hidden="true" />
                        Chamar no WhatsApp
                      </a>
                    )}
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
