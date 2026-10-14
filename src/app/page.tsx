import { HeroSection } from "@/components/sections/HeroSection";
import { CategoriesSection } from "@/components/sections/CategoriesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { CustomBannerSection } from "@/components/sections/CustomBannerSection";
import { InspirationsSection } from "@/components/sections/InspirationsSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { LocationContactSection } from "@/components/sections/LocationContactSection";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Dobra Principal */}
      <HeroSection />

      {/* 2. Categorias de Presentes */}
      <CategoriesSection />

      {/* 3. Dobra Institucional Sobre Nós */}
      <AboutSection />

      {/* 4. Banner "Seu presente, do seu jeito" */}
      <CustomBannerSection />

      {/* 5. Galeria de Inspirações */}
      <InspirationsSection />

      {/* 6. Avaliações Google / Prova Social */}
      <ReviewsSection />

      {/* 7. Visite a Loja & Informações de Contato */}
      <LocationContactSection />
    </>
  );
}

