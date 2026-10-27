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
  price?: string;
  description: string;
  photos: CatalogPhoto[];
  informationStatus: "pending-approval" | "approved";
  availability: "on-request" | "available" | "unavailable";
  whatsappMessage?: string;
}

// Descriptive working names, not an official product assortment or composition.
// Never fill remaining slots with duplicates, invented products or unrelated photos.
const basketProductOrder = [12, 1, 11, 9, 3, 5, 10, 8, 6, 2, 7, 4];
const basketPricesByPhoto: Record<number, string> = {
  1: "R$ 179,90",
  2: "R$ 175,90",
  3: "R$ 335,90",
  4: "R$ 59,90",
  5: "R$ 155,90",
  6: "R$ 119,90",
  7: "R$ 245,90",
  8: "R$ 174,90",
  9: "R$ 469,90",
  10: "R$ 155,90",
  11: "R$ 189,90",
  12: "R$ 255,90",
};

export const catalogProducts: CatalogProduct[] = [
  ...[
    { id: "caneca", name: "Caneca", price: "R$ 49,90", image: "caneca.webp" },
    { id: "caixa", name: "Caixa", price: "R$ 65,90", image: "caixa.webp" },
    { id: "caderno", name: "Caderno", price: "R$ 39,90", image: "caderno.webp" },
    { id: "garrafa-squeeze", name: "Garrafa Squeeze", price: "R$ 59,90", image: "garrafas.webp" },
    { id: "garrafa-termica", name: "Garrafa Térmica", price: "R$ 129,90", image: "garrafas.webp" },
    { id: "bloco-de-anotacoes", name: "Bloco de Anotações", price: "R$ 24,90", image: "bloco-de-anotacoes.webp" },
    { id: "toalha", name: "Toalha", price: "R$ 24,90", image: "toalha.webp" },
  ].map(product => createCatalogProduct({
    id: `corporativo-${product.id}`,
    category: "presentes-corporativos",
    name: product.name,
    price: product.price,
    description: "Produto personalizado para empresas, eventos e ocasiões especiais.",
    image: `/images/produtos/presentes-corporativos/${product.image}`,
    informationStatus: "approved",
    whatsappMessage: `Olá! Gostaria de saber mais informações e valores sobre ${product.name} personalizado que vi no site da Mimos e Caprichos.`,
  })),
  ...[
    { id: "kit-vinho", name: "Kit Vinho", price: "A partir de R$ 49,90", image: "kit-vinho.webp" },
    { id: "placa-sorte", name: "Placa Sorte", price: "R$ 19,90", image: "placa-sorte.webp" },
    { id: "kit-caneca", name: "Kit Caneca", price: "R$ 39,90", image: "kit-caneca.webp" },
    { id: "balao-base", name: "Balão Base", price: "R$ 35,90", image: "balao-base.webp" },
    { id: "kit-urso", name: "Kit Urso", price: "R$ 125,90", image: "kit-urso.webp" },
    { id: "kit-ferrero", name: "Kit Ferrero", price: "R$ 59,90", image: "kit-ferrero.webp" },
    { id: "orquidea", name: "Orquídea", price: "R$ 89,90", image: "orquidea.webp" },
    { id: "kit-luminaria", name: "Kit Luminária", price: "R$ 145,90", image: "kit-luminaria.webp" },
    { id: "kit-caneca-2", name: "Kit Caneca 2", price: "R$ 94,90", image: "kit-caneca-2.webp" },
    { id: "kit-cerveja", name: "Kit Cerveja", price: "R$ 129,90", image: "kit-cerveja.webp" },
    { id: "kit-significado", name: "Kit Significado", price: "R$ 94,90", image: "kit-significado.webp" },
    { id: "kit-bule", name: "Kit Bule", price: "R$ 215,90", image: "kit-bule.webp" },
  ].map(product => createCatalogProduct({
    id: `mimo-${product.id}`,
    category: "presentes-e-mimos",
    name: product.name,
    price: product.price,
    description: "Presente preparado com carinho para surpreender em momentos especiais.",
    image: `/images/produtos/presentes-e-mimos/${product.image}`,
    informationStatus: "approved",
    whatsappMessage: `Olá! Gostaria de saber mais informações e valores sobre ${product.name} que vi no site da Mimos e Caprichos.`,
  })),
  ...Array.from({ length: 12 }, (_, index) => {
    const number = index + 1;
    const photoNumber = basketProductOrder[index];
    return createCatalogProduct({
      id: `cesta-personalizada-${String(number).padStart(2, "0")}`,
      category: "cestas-personalizadas",
      name: `Cesta Personalizada ${number}`,
      price: basketPricesByPhoto[photoNumber],
      description: "Cesta personalizada preparada com carinho para surpreender em momentos especiais.",
      image: `/images/produtos/cestas-personalizadas/cesta-personalizada-${String(photoNumber).padStart(2, "0")}${photoNumber === 8 || photoNumber === 12 ? "-v2" : ""}.webp`,
      informationStatus: "approved",
      whatsappMessage: `Olá! Gostaria de saber mais informações e valores sobre a Cesta Personalizada ${number} que vi no site da Mimos e Caprichos.`,
    });
  }),
  ...[
    { id: "copo-termico", name: "Copo Térmico", price: "R$ 59,90", image: "copo-termico.webp" },
    { id: "bau-romantico", name: "Baú Romântico", price: "R$ 239,90", image: "bau-romantico.webp" },
    { id: "kit-luminaria", name: "Kit Luminária", price: "R$ 200,90", image: "kit-luminaria.webp" },
    { id: "azulejo", name: "Azulejo", price: "A partir de R$ 29,90", image: "azulejo.webp" },
    { id: "bau-personalizado", name: "Baú Personalizado", price: "R$ 284,90", image: "bau-personalizado.webp" },
    { id: "kit-romantico", name: "Kit Romântico", price: "R$ 89,90", image: "kit-romantico.webp" },
    { id: "kit-ferrero", name: "Kit Ferrero", price: "R$ 69,90", image: "kit-ferrero.webp" },
    { id: "kit-polaroid", name: "Kit Polaroid", price: "R$ 185,90", image: "kit-polaroid.webp" },
    { id: "porta-retrato-10x15", name: "Porta-retrato 10x15", price: "R$ 19,90", image: "porta-retrato-10x15.webp" },
    { id: "kit-mulher", name: "Kit Mulher", price: "R$ 109,90", image: "kit-mulher.webp" },
    { id: "chaveiro-3d", name: "Chaveiro 3D", price: "R$ 19,90", image: "chaveiro-3d.webp" },
    { id: "kit-seja-forte", name: "Kit Seja Forte", price: "R$ 129,90", image: "kit-seja-forte.webp" },
  ].map(product => createCatalogProduct({
    id: `personalizado-${product.id}`,
    category: "presentes-personalizados",
    name: product.name,
    price: product.price,
    description: "Presente personalizado preparado com carinho para tornar cada momento ainda mais especial.",
    image: `/images/produtos/presentes-personalizados-v2/${product.image}`,
    informationStatus: "approved",
    whatsappMessage: `Olá! Gostaria de saber mais informações e valores sobre ${product.name} que vi no site da Mimos e Caprichos.`,
  })),
  ...[
    { id: "niver", name: "Niver", price: "R$ 184,90", image: "niver.webp" },
    { id: "dia-da-mulher", name: "Dia da Mulher", price: "R$ 245,90", image: "dia-da-mulher.webp" },
    { id: "pascoa", name: "Páscoa", price: "R$ 95,90", image: "pascoa.webp" },
    { id: "dia-das-maes", name: "Dia das Mães", price: "R$ 199,90", image: "dia-das-maes.webp" },
    { id: "cesta-junina", name: "Cesta Junina", price: "R$ 165,90", image: "cesta-junina.webp" },
    { id: "dia-dos-namorados", name: "Dia dos Namorados", price: "R$ 539,90", image: "dia-dos-namorados.webp" },
    { id: "dia-dos-pais", name: "Dia dos Pais", price: "R$ 199,90", image: "dia-dos-pais.webp" },
    { id: "dia-da-secretaria", name: "Dia da Secretária", price: "R$ 124,90", image: "dia-da-secretaria.webp" },
    { id: "dia-das-criancas", name: "Dia das Crianças", price: "R$ 235,90", image: "dia-das-criancas.webp" },
    { id: "dia-dos-professores", name: "Dia dos Professores", price: "R$ 99,90", image: "dia-dos-professores.webp" },
    { id: "formatura", name: "Formatura", price: "R$ 229,90", image: "formatura.webp" },
    { id: "natal", name: "Natal", price: "R$ 345,90", image: "natal-v2.webp" },
  ].map(product => createCatalogProduct({
    id: `datas-comemorativas-${product.id}`,
    category: "datas-comemorativas",
    name: product.name,
    price: product.price,
    description: "",
    image: `/images/produtos/datas-comemorativas/${product.image}`,
    informationStatus: "approved",
    whatsappMessage: `Olá! Vi o presente ${product.name} na categoria Datas comemorativas do site da Mimos e Caprichos e gostaria de saber mais informações e valores.`,
  })),
];

export const basketProducts = catalogProducts.filter(product => product.category === "cestas-personalizadas");

interface ProductInput {
  id?: string;
  category: CatalogCategoryId;
  name: string;
  price?: string;
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
    price: input.price,
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
  { id: "cestas-personalizadas", homeCardId: "cestas", title: "Cestas personalizadas", description: "Presentes preparados com carinho para surpreender em qualquer ocasião.", capacity: 12, published: true },
  { id: "presentes-e-mimos", homeCardId: "baloes", title: "Presentes e Mimos", description: "O mimo perfeito para encantar e surpreender.", capacity: 12, published: true },
  { id: "presentes-personalizados", homeCardId: "personalizados", title: "Presentes personalizados", description: "Canecas, caixinhas, lembranças e muito mais.", capacity: 12, published: true },
  { id: "presentes-corporativos", homeCardId: "corporativos", title: "Presentes corporativos", description: "Soluções criativas para empresas, brindes, eventos e momentos importantes.", capacity: 8, published: true },
  { id: "datas-comemorativas", homeCardId: "datas-comemorativas", title: "Datas comemorativas", description: "Presentes especiais para celebrar cada data com carinho e emoção.", capacity: 12, published: true },
];

export function getCategoryProducts(category: CatalogCategoryId, preview = isCatalogPreview) {
  return catalogProducts.filter(product => product.category === category && (preview || product.informationStatus === "approved"));
}


export const basketCatalog = {
  title: "Cestas personalizadas",
  description: "Presentes preparados com carinho para surpreender em qualquer ocasião.",
  capacity: 12,
  preview: false,
};
