import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CategoryPage } from "@/components/catalog/CategoryPage";
import { catalogCategories, getCategoryProducts, isCatalogPreview } from "@/data/catalog";

// The approved basket page keeps its existing dedicated route and markup.
const categories = catalogCategories.filter(category => category.id !== "cestas-personalizadas");
export const dynamicParams = false;
export function generateStaticParams() {
  return categories.map(category => ({ category: category.id }));
}

type PageProps = { params: Promise<{ category: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category: slug } = await params;
  const category = categories.find(item => item.id === slug);
  if (!category) return {};
  const publishable = category.published && !isCatalogPreview && getCategoryProducts(category.id, false).length > 0;
  return {
    title: `${category.title} | Mimos e Caprichos Valinhos`,
    description: category.description,
    robots: { index: publishable, follow: publishable },
    openGraph: { title: `${category.title} | Mimos e Caprichos`, description: category.description, url: `/presentes/${category.id}` },
  };
}

export default async function CatalogCategoryPage({ params }: PageProps) {
  const { category: slug } = await params;
  const category = categories.find(item => item.id === slug);
  if (!category) notFound();
  return <CategoryPage category={category} />;
}
