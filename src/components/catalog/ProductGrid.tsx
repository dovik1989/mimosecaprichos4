"use client";

import { useState } from "react";
import { ImagePlus } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { StaggerContainer, StaggerItem } from "@/components/animation";
import type { CatalogProduct } from "@/data/catalog";
import { ProductCard } from "./ProductCard";
import { ProductDetailsModal } from "./ProductDetailsModal";

export function ProductGrid({ products, capacity = 8, preview = false, pendingLabel }: { products: CatalogProduct[]; capacity?: number; preview?: boolean; pendingLabel?: string }) {
  const [selected, setSelected] = useState<CatalogProduct | null>(null);
  const pending = preview ? Math.max(0, capacity - products.length) : 0;
  return <Container className="py-8 sm:py-12 lg:py-14">
    {preview && <aside aria-label="Situação da prévia do catálogo" className="mb-7 sm:mb-8 rounded-xl bg-brand-pink-subtle px-4 sm:px-5 py-4 text-xs leading-relaxed text-brand-muted">
      <p className="font-semibold text-brand-dark">Prévia para aprovação</p>
      <p className="mt-1">{products.length} referências em revisão · {pending} posições aguardando fotos e informações. Nomes e descrições provisórios; esta seleção ainda não é o catálogo oficial.</p>
    </aside>}
    {!preview && products.length === 0 && <div className="rounded-2xl border border-brand-border bg-white px-6 py-12 sm:py-16 text-center">
      <h2 className="font-serif text-2xl text-[var(--color-heading-primary)]">Nossa seleção está sendo preparada</h2>
      <p className="text-sm text-brand-muted leading-relaxed mt-3">Enquanto isso, conheça as outras opções de presentes.</p>
      <Link href="/#presentes" className="inline-flex mt-6 text-sm text-brand-dark underline underline-offset-4 hover:text-brand-pink">Voltar aos presentes</Link>
    </div>}
    <StaggerContainer className="grid grid-cols-1 min-[360px]:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6" staggerInterval={0.07} baseDelay={0.04} distance={16} duration={0.65}>
      {products.map((product, index) => <StaggerItem key={product.id} index={index} className="h-full min-w-0"><ProductCard product={product} onOpen={() => setSelected(product)} priority={index < 4} /></StaggerItem>)}
      {Array.from({ length: pending }, (_, index) => <StaggerItem key={`pending-${index}`} index={products.length + index} className="h-full min-w-0">
        <div className="h-full rounded-2xl border border-dashed border-brand-border bg-brand-offwhite/60 p-2.5 sm:p-3.5">
          <div className="aspect-[4/5] rounded-xl bg-brand-pink-subtle flex flex-col items-center justify-center gap-3 px-3 text-center text-brand-muted"><ImagePlus size={24} strokeWidth={1.2} aria-hidden="true" /><p className="text-xs font-medium">Fotografia pendente</p></div>
          <div className="px-0.5 pt-3 pb-4"><p className="text-sm font-semibold text-brand-muted">{pendingLabel ?? `Posição ${products.length + index + 1}`}</p><p className="text-xs text-brand-muted mt-2 leading-relaxed">Reservada na prévia.<br />Produto a confirmar.</p></div>
        </div>
      </StaggerItem>)}
    </StaggerContainer>
    <ProductDetailsModal product={selected} onClose={() => setSelected(null)} />
  </Container>;
}
