import { HeroSection } from "@/components/sections/HeroSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { CategoriesSection } from "@/components/sections/CategoriesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { CustomBannerSection } from "@/components/sections/CustomBannerSection";
import { InspirationsSection } from "@/components/sections/InspirationsSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { LocationContactSection } from "@/components/sections/LocationContactSection";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero / Dobra Principal */}
      <HeroSection />

      {/* 2. Indicadores de Confiança */}
      <TrustBar />

      {/* 3. Categorias de Presentes ("Encontre o presente perfeito ♡ ♡") */}
      <CategoriesSection />

      {/* 4. Nossa História ("Uma história feita de carinho e detalhes") */}
      <AboutSection />

      {/* 5. Banner de Presentes Personalizados ("Seu presente, do seu jeito.") */}
      <CustomBannerSection />

      {/* 6. Galeria de Inspirações ("Inspirações que encantam") */}
      <InspirationsSection />

      {/* 7. Como Funciona ("É simples surpreender com a Mimos e Caprichos") */}
      <HowItWorksSection />

      {/* 8. Avaliações do Google ("O carinho de quem já comprou") */}
      <ReviewsSection />

      {/* 9. Localização e Contato ("Estamos em Valinhos e prontos para te atender!") */}
      <LocationContactSection />
    </>
  );
}
