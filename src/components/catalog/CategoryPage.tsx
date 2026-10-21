import { CategoryHeader } from "./CategoryHeader";
import { ProductGrid } from "./ProductGrid";
import { getCategoryProducts, isCatalogPreview, type CatalogCategory } from "@/data/catalog";

export function CategoryPage({ category }: { category: CatalogCategory }) {
  const products = category.published || isCatalogPreview ? getCategoryProducts(category.id) : [];
  return <>
    <CategoryHeader title={category.title} description={category.description} />
    <ProductGrid products={products} capacity={category.capacity} preview />
  </>;
}
