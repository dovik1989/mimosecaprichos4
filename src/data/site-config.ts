import { NavItem, CategoryItem, DifferentialItem } from "@/types";

export const siteConfig = {
  name: "Mimos e Caprichos",
  tagline: "Presentes e personalizados feitos com carinho para tornar cada momento inesquecível.",
  shortDescription: "Loja de presentes personalizados e cestas afetivas em Valinhos-SP.",
  city: "Valinhos - SP",
  address: "Av. Onze de Agosto, 849 — Centro, Valinhos — SP, 13276-130",
  addressShort: "Av. Onze de Agosto, 849, Centro, Valinhos-SP",
  phoneDisplay: "(19) 99200-5279",
  phoneRaw: "5519992005279",
  defaultWhatsAppMessage: "Olá! Gostaria de saber mais sobre os presentes personalizados da Mimos e Caprichos.",
  googleMapsUrl: "https://maps.google.com/?q=Av.+Onze+de+Agosto,+849+-+Centro,+Valinhos+-+SP,+13276-130",
  googleReviewsUrl: "https://maps.google.com/?q=Av.+Onze+de+Agosto,+849+-+Centro,+Valinhos+-+SP,+13276-130",
  hours: {
    weekdays: "Segunda a Sexta: 09h às 18h",
    saturday: "Sábado: 09h às 13h",
    sunday: "Domingo: Fechado",
  },
  reviewsSummary: {
    rating: "5,0",
    totalReviews: 874,
    platform: "Google",
  },
  socials: {
    instagram: "https://www.instagram.com/mimosecaprichosvalinhos/",
    facebook: "https://www.facebook.com/mimosecaprichosvalinhos",
  },
};

export const navItems: NavItem[] = [
  { label: "Início", href: "#inicio" },
  { label: "Nossa História", href: "#sobre" },
  { label: "Presentes", href: "#presentes" },
  { label: "Empresas", href: "#corporativos" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Contato", href: "#contato" },
];

export const heroDifferentials: DifferentialItem[] = [
  {
    id: "occasions",
    iconName: "Gift",
    title: "Presentes para todas as ocasiões",
    description: "Aniversários, datas comemorativas, maternidade e celebrações.",
  },
  {
    id: "custom",
    iconName: "Sparkles",
    title: "Personalizados do seu jeito",
    description: "Cada detalhe pensado exclusivamente para encantar quem recebe.",
  },
  {
    id: "local",
    iconName: "MapPin",
    title: "Atendimento em Valinhos e região",
    description: "Retirada em nossa loja física no Centro ou entrega combinada.",
  },
];

export const categoryCards: CategoryItem[] = [
  {
    id: "cestas",
    title: "Cestas personalizadas",
    description: "Combinações especiais para emocionar em qualquer ocasião.",
    imageSrc: "/images/categoria-cestas.png",
    whatsappMessage: "Olá! Gostaria de um orçamento para uma Cesta Personalizada.",
  },
  {
    id: "baloes",
    title: "Balões e surpresas",
    description: "Balões, kits e combinações que criam momentos únicos.",
    imageSrc: "/images/categoria-baloes.png",
    whatsappMessage: "Olá! Gostaria de encomendar balões personalizados e kits surpresa.",
  },
  {
    id: "personalizados",
    title: "Presentes personalizados",
    description: "Canecas, caixinhas, kits e lembranças feitas com carinho.",
    imageSrc: "/images/categoria-personalizados.png",
    whatsappMessage: "Olá! Quero conhecer as opções de presentes e itens personalizados.",
  },
  {
    id: "corporativos",
    title: "Presentes corporativos",
    description: "Soluções criativas para empresas, ações e eventos.",
    imageSrc: "/images/categoria-corporativos.png",
    whatsappMessage: "Olá! Gostaria de um orçamento corporativo para brindes e presentes da minha empresa.",
  },
];

