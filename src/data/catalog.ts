export interface CatalogPhoto {
  src: string;
  alt: string;
}

export type CatalogCategoryId = "cestas-personalizadas" | "presentes-e-mimos" | "presentes-personalizados" | "presentes-corporativos" | "datas-comemorativas";

// Explicit opt-in is intended only for a protected preview deployment.
export const isCatalogPreview = process.env.NODE_ENV === "development" || process.env.NEXT_PUBLIC_CATALOG_PREVIEW === "true";

export interface CatalogProduct {
  id: string;
  category: CatalogCategoryId;
  name: string;
  description: string;
  photos: CatalogPhoto[];
  informationStatus: "pending-approval" | "approved";
  availability: "on-request" | "available" | "unavailable";
  whatsappMessage?: string;
}

// Descriptive working names, not an official product assortment or composition.
// Never fill remaining slots with duplicates, invented products or unrelated photos.
export const catalogProducts: CatalogProduct[] = [
  createCatalogProduct({
    id: "presente-empresarial-brindes",
    category: "presentes-corporativos",
    name: "Presente Empresarial / Brindes",
    description: "Presentes e brindes personalizados para empresas e ocasiões especiais.",
    image: "/images/produtos/presentes-corporativos/presente-empresarial-brindes.webp",
    informationStatus: "approved",
    whatsappMessage: "Olá! Vi o Presente Empresarial / Brindes no site da Mimos e Caprichos e gostaria de conhecer as opções, personalizações e valores.",
  }),
  ...Array.from({ length: 11 }, (_, index) => {
    const number = index + 1;
    return createCatalogProduct({
      id: `cesta-personalizada-${String(number).padStart(2, "0")}`,
      category: "cestas-personalizadas",
      name: `Cesta Personalizada ${number}`,
      description: "Cesta personalizada preparada com carinho para surpreender em momentos especiais.",
      image: `/images/produtos/cestas-personalizadas/cesta-personalizada-${String(number).padStart(2, "0")}.webp`,
      informationStatus: "approved",
      whatsappMessage: `Olá! Gostaria de saber mais informações e valores sobre a Cesta Personalizada ${number} que vi no site da Mimos e Caprichos.`,
    });
  }),
];

export const basketProducts = catalogProducts.filter(product => product.category === "cestas-personalizadas");

interface ProductInput {
  id?: string;
  category: CatalogCategoryId;
  name: string;
  description: string;
  image: string | CatalogPhoto;
  additionalImages?: (string | CatalogPhoto)[];
  availability?: CatalogProduct["availability"];
  whatsappMessage?: string;
  informationStatus?: CatalogProduct["informationStatus"];
}

export function createCatalogProduct(input: ProductInput): CatalogProduct {
  const slug = input.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  const photo = (image: string | CatalogPhoto): CatalogPhoto => typeof image === "string" ? { src: image, alt: input.name } : image;
  return {
    id: input.id ?? `${input.category}-${slug}`,
    category: input.category,
    name: input.name,
    description: input.description,
    photos: [photo(input.image), ...(input.additionalImages ?? []).map(photo)],
    availability: input.availability ?? "on-request",
    informationStatus: input.informationStatus ?? "pending-approval",
    whatsappMessage: input.whatsappMessage,
  };
}

export interface CatalogCategory {
  id: CatalogCategoryId;
  homeCardId: string;
  title: string;
  description: string;
  capacity: number;
  published: boolean;
}

export const catalogCategories: CatalogCategory[] = [
  { id: "cestas-personalizadas", homeCardId: "cestas", title: "Cestas personalizadas", description: "Presentes preparados com carinho para surpreender em qualquer ocasião.", capacity: 11, published: true },
  { id: "presentes-e-mimos", homeCardId: "baloes", title: "Presentes e Mimos", description: "O mimo perfeito para encantar e surpreender.", capacity: 8, published: true },
  { id: "presentes-personalizados", homeCardId: "personalizados", title: "Presentes personalizados", description: "Canecas, caixinhas, lembranças e muito mais.", capacity: 8, published: true },
  { id: "presentes-corporativos", homeCardId: "corporativos", title: "Presentes corporativos", description: "Soluções criativas para empresas, brindes, eventos e momentos importantes.", capacity: 8, published: true },
  { id: "datas-comemorativas", homeCardId: "datas-comemorativas", title: "Datas comemorativas", description: "Presentes especiais para celebrar cada data com carinho e emoção.", capacity: 8, published: true },
];

export function getCategoryProducts(category: CatalogCategoryId, preview = isCatalogPreview) {
  return catalogProducts.filter(product => product.category === category && (preview || product.informationStatus === "approved"));
}


export const basketCatalog = {
  title: "Cestas personalizadas",
  description: "Presentes preparados com carinho para surpreender em qualquer ocasião.",
  capacity: 11,
  preview: false,
};
