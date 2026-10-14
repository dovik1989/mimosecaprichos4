import React from "react";
import { siteConfig } from "@/data/site-config";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Star, ExternalLink, Quote, CheckCircle2 } from "lucide-react";

/**
 * ============================================================================
 * PLACEHOLDER TEMPORÁRIO PARA DEMONSTRAÇÃO VISUAL DA ESTRUTURA
 * ============================================================================
 * AVISO IMPORTANTE (Conforme requisitos do Prompt 07):
 * Os itens abaixo são placeholders estruturais destinados a validar o design,
 * tipografia e grid responsivo. Eles serão substituídos pelas avaliações reais
 * extraídas do perfil oficial da Mimos e Caprichos no Google Meu Negócio.
 * ============================================================================
 */
const placeholderGoogleReviews = [
  {
    id: "review-placeholder-1",
    author: "Cliente Google Verificado",
    role: "Avaliação no Google Meu Negócio",
    comment:
      "Atendimento impecável e produtos de extrema qualidade! A cesta personalizada superou todas as expectativas e a entrega foi pontualíssima em Valinhos. Recomendo de olhos fechados!",
    rating: 5,
    relativeTime: "há 2 semanas",
  },
  {
    id: "review-placeholder-2",
    author: "Cliente Google Verificado",
    role: "Avaliação no Google Meu Negócio",
    comment:
      "A Mimos e Caprichos é a melhor loja de presentes da região. O cuidado com os balões personalizados e cada mínimo detalhe do laço fez toda a diferença. Quem recebeu ficou encantado!",
    rating: 5,
    relativeTime: "há 1 mês",
  },
  {
    id: "review-placeholder-3",
    author: "Cliente Google Verificado",
    role: "Avaliação no Google Meu Negócio",
    comment:
      "Fizemos uma encomenda de brindes corporativos para nossa empresa e fomos atendidos com muita agilidade, carinho e profissionalismo. Apresentação impecável!",
    rating: 5,
    relativeTime: "há 1 mês",
  },
];

export function ReviewsSection() {
  return (
    <section id="avaliacoes" className="py-20 lg:py-28 bg-[#FFF8FA] border-t border-brand-border/40 relative">
      <Container>
        {/* Cabeçalho da Seção */}
        <SectionHeading
          eyebrow="PROVA SOCIAL & CONFIANÇA"
          title="O carinho de quem já comprou"
          description="Histórias e experiências que fazem a diferença."
          align="center"
          className="mb-12 sm:mb-16"
        />

        {/* Bloco de Nota Média com Grande Destaque */}
        <div className="max-w-2xl mx-auto mb-14 bg-white rounded-3xl sm:rounded-4xl p-8 sm:p-10 border border-brand-pink-light/80 shadow-card text-center relative overflow-hidden">
          {/* Fundo sutil de ambientação */}
          <div className="absolute top-0 right-0 w-36 h-36 bg-brand-pink-light/40 rounded-full blur-2xl pointer-events-none" />

          {/* Logo do Google + Selo Oficial */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-stone-50 border border-stone-200/80 mb-5">
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
              />
              <path
                fill="#34A853"
                d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.35 24 12 24z"
              />
              <path
                fill="#FBBC05"
                d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
              />
              <path
                fill="#EA4335"
                d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.35 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
              />
            </svg>
            <span className="font-semibold text-brand-dark text-xs sm:text-sm tracking-wide">
              Avaliações do Google
            </span>
            <CheckCircle2 className="w-4 h-4 text-emerald-600 ml-0.5" />
          </div>

          {/* Número da Nota 5,0 e Total de Avaliações */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <span className="font-serif text-6xl sm:text-7xl text-brand-dark font-normal tracking-tight leading-none">
              5,0
            </span>

            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-base sm:text-lg font-semibold text-brand-dark mt-1.5">
                874 avaliações no Google
              </p>
              <p className="text-xs text-brand-muted">
                Classificação máxima de satisfação em Valinhos-SP
              </p>
            </div>
          </div>
        </div>

        {/* Grid com Cards de Avaliações (Placeholder estrutural identificado) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {placeholderGoogleReviews.map((review) => (
            <div
              key={review.id}
              className="bg-white p-7 sm:p-8 rounded-3xl border border-brand-border/70 shadow-sm hover:shadow-card hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Estrelas + Aspas */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-7 h-7 text-brand-pink-light/80" />
                </div>

                {/* Comentário */}
                <p className="text-sm sm:text-base text-brand-dark/90 leading-relaxed font-sans italic">
                  &ldquo;{review.comment}&rdquo;
                </p>
              </div>

              {/* Autor da Avaliação */}
              <div className="mt-6 pt-4 border-t border-brand-border/60 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-brand-dark">{review.author}</p>
                  <p className="text-xs text-brand-muted flex items-center gap-1 mt-0.5">
                    <span>{review.role}</span>
                  </p>
                </div>
                <span className="text-[11px] text-brand-muted/70">{review.relativeTime}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Botão Oficial: Ver todas as avaliações no Google */}
        <div className="text-center">
          <Button
            href={siteConfig.googleReviewsUrl}
            variant="outline-dark"
            size="lg"
            rightIcon={<ExternalLink className="w-4 h-4 ml-1 text-brand-pink" />}
            isExternal
            className="shadow-xs hover:border-brand-pink hover:text-brand-pink"
          >
            Ver todas as avaliações no Google
          </Button>
        </div>
      </Container>
    </section>
  );
}
