import type { Metadata } from "next";
import { CategoryHeader } from "@/components/catalog/CategoryHeader";
import { ProductGrid } from "@/components/catalog/ProductGrid";
import { basketCatalog, basketProducts } from "@/data/catalog";

export const metadata: Metadata = {
  title: "Cestas personalizadas | Mimos e Caprichos Valinhos",
  description: basketCatalog.description,
  // Keep the unapproved preview out of search indexes.
  robots: { index: false, follow: false },
  openGraph: {
    title: "Cestas personalizadas | Mimos e Caprichos",
    description: basketCatalog.description,
    url: "/presentes/cestas-personalizadas",
    images: [{ url: "/images/categoria-cestas.png", alt: "Cesta personalizada Mimos e Caprichos" }],
  },
};

export default function BasketCategoryPage() {
  return <>
    <CategoryHeader title={basketCatalog.title} description={basketCatalog.description} />
    <ProductGrid products={basketProducts} capacity={basketCatalog.capacity} preview={basketCatalog.preview} />
  </>;
}
