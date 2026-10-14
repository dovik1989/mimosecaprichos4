export interface NavItem {
  label: string;
  href: string;
}

export interface DifferentialItem {
  id: string;
  iconName: string;
  title: string;
  description?: string;
}

export interface CategoryItem {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  badge?: string;
  whatsappMessage?: string;
}

export interface TestimonialItem {
  id: string;
  author: string;
  role?: string;
  rating: number;
  comment: string;
  date?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageSrc: string;
}

