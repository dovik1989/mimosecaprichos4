import React from "react";
import { siteConfig } from "@/data/site-config";
import { Container } from "@/components/ui/Container";
import { Star, ChevronLeft, ChevronRight, ArrowRight, Quote } from "lucide-react";

/**
 * PLACEHOLDER ESTRUTURAL IDENTIFICADO:
 * As avaliações abaixo reproduzem o layout aprovado no mockup (Mariana Silva, Carlos Andrade, Juliana Ferraz)
 * e devem ser substituídas pelas avaliações reais do perfil da loja no Google Meu Negócio.
 */
const reviews = [
  {
    id: "review-1",
    author: "Mariana Silva",
    time: "Há 2 semanas",
    text: "Atendimento maravilhoso! Super atenciosas e caprichosas. O presente ficou lindo e fez toda a diferença no meu dia especial!",
    rating: 5,
  },
  {
    id: "review-2",
    author: "Carlos Andrade",
    time: "Há 1 mês",
    text: "Produtos de excelente qualidade e muito bem montados. Entrega no prazo e atendimento nota 10!",
    rating: 5,
  },
  {
    id: "review-3",
    author: "Juliana Ferraz",
    time: "Há 1 mês",
    text: "Sempre peço na Mimos e Caprichos e nunca me decepciono. Tudo feito com muito carinho e bom gosto!",
    rating: 5,
  },
];

export function ReviewsSection() {
  return (
    <section id="avaliacoes" className="py-16 sm:py-24 bg-[#FFF8FA] border-t border-[#F8E7EE]">
      <Container>
        {/* ========================================================= */}
        {/* CABEÇALHO COM GOOGLE RATING BOX                           */}
        {/* ========================================================= */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12">
          {/* Título & Subtítulo */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-pink">
              AVALIAÇÕES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-dark tracking-tight mt-1">
              O carinho de quem já comprou
            </h2>
            <p className="text-xs sm:text-sm text-brand-muted mt-1 font-sans">
              Histórias e experiências que fazem a diferença.
            </p>
          </div>

          {/* Box Oficial de Avaliação do Google (Conforme mockup) */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 border border-[#F5E2EC] shadow-xs flex items-center gap-4 shrink-0">
            {/* Logo Google oficial */}
            <div className="w-10 h-10 rounded-full bg-stone-50 border border-stone-200 flex items-center justify-center shrink-0">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
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
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-xl sm:text-2xl font-bold text-brand-dark">5,0</span>
                <div className="flex text-amber-400 text-xs">
                  {"★★★★★"}
                </div>
              </div>
              <p className="text-[11px] sm:text-xs text-brand-muted font-medium">
                874 avaliações no Google
              </p>
            </div>

            <div className="hidden sm:block h-8 w-[1px] bg-[#F5E2EC] mx-1" />

            <p className="hidden sm:block text-[11px] text-brand-muted max-w-[140px] leading-tight">
              Clientes reais compartilhando momentos especiais
            </p>
          </div>
        </div>

        {/* ========================================================= */}
        {/* CARDS DE DEPOIMENTOS                                      */}
        {/* ========================================================= */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((rev) => (
              <div
                key={rev.id}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-[#F5E2EC] shadow-xs hover:shadow-card hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Topo do card: Aspas rosa + Estrelas */}
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="w-8 h-8 rounded-full bg-[#FFF0F5] text-brand-pink flex items-center justify-center">
                      <Quote className="w-4 h-4 fill-brand-pink text-brand-pink" />
                    </div>
                    <div className="flex text-amber-400 text-sm">
                      {"★★★★★"}
                    </div>
                  </div>

                  {/* Texto do comentário */}
                  <p className="text-xs sm:text-sm text-brand-dark/85 leading-relaxed font-sans">
                    {rev.text}
                  </p>
                </div>

                {/* Autor do comentário */}
                <div className="mt-6 pt-4 border-t border-[#F8E8EE] flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-[#FCE8F0] text-brand-pink font-bold text-xs flex items-center justify-center">
                      {rev.author[0]}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-brand-dark">{rev.author}</h4>
                      <p className="text-[10px] text-brand-muted">{rev.time}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================= */}
        {/* RODAPÉ DA SEÇÃO: DISCLAIMER + BOTÃO GOOGLE                */}
        {/* ========================================================= */}
        <div className="mt-10 sm:mt-12 text-center space-y-3">
          <p className="text-[11px] text-brand-muted/70">
            Comentários ilustrativos — substituir por avaliações reais do Google na versão final.
          </p>

          <div>
            <a
              href={siteConfig.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-brand-pink hover:bg-brand-pink-hover text-white text-xs sm:text-sm font-semibold shadow-soft hover:shadow-floating transition-all duration-300 hover:scale-[1.02]"
            >
              <span>Ver avaliações no Google</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
