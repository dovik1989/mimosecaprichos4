import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Reveal } from "@/components/animation";
import { Container } from "@/components/ui/Container";

export function CategoryHeader({ title, description }: { title: string; description: string }) {
  return <section className="bg-brand-pink-subtle border-b border-brand-border">
    <Container className="pt-7 pb-10 sm:pt-9 sm:pb-14 lg:pb-16">
      <Link href="/#presentes" className="inline-flex items-center gap-2 text-xs sm:text-sm text-brand-muted hover:text-brand-pink transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-pink">
        <ArrowLeft size={15} aria-hidden="true" />Voltar aos presentes
      </Link>
      <Reveal direction="up" distance={16} duration={0.7} className="mt-8 sm:mt-10">
        <p className="text-xs font-bold uppercase tracking-wider text-brand-pink">Nossos presentes</p>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-[56px] leading-[1.1] tracking-tight text-[var(--color-heading-primary)] mt-3">{title}</h1>
        <p className="text-sm sm:text-base text-brand-muted leading-relaxed mt-4 max-w-xl">{description}</p>
      </Reveal>
    </Container>
  </section>;
}
