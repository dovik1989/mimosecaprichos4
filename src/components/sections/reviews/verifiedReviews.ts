export interface VerifiedReview {
  id: string;
  author: string;
  text: string;
  rating: 1 | 2 | 3 | 4 | 5;
  publishedAt?: string;
  publicationLabel?: string;
  isExcerpt?: boolean;
  originalUrl?: string;
  source: "Google";
  verifiedAt: string;
  approvedByBusiness: true;
}

export interface VerifiedReviewCollection {
  reviews: VerifiedReview[];
  // Overall Google figures, never computed from the selected five-star subset.
  summary: { averageRating: number; totalReviews: number; checkedAt: string } | null;
  allReviewsUrl: string | null;
}

// Transcribed from Google screenshots supplied by the business for publication.
// Relative publication periods are preserved as shown, not converted to invented dates.
// Do not commit API responses here: authenticated API content needs a server-side lifecycle.
export const verifiedReviewCollection: VerifiedReviewCollection = {
  reviews: [
    {
      id: "maria-eduarda-ferreira",
      author: "Maria Eduarda Ferreira",
      text: "Melhor loja de Valinhos sempre sou muito bem atendida por todos, desde presencial quanto pelo WhatsApp são muito rápidos e impecáveis nos serviços. Carinho enorme pela Bel e Osmar são top de mais 💗",
      rating: 5,
      publicationLabel: "2 meses atrás",
      source: "Google",
      verifiedAt: "2026-10-20",
      approvedByBusiness: true,
    },
    {
      id: "gabriela-frederizi",
      author: "Gabriela Frederizi",
      text: "Excelência em atendimento e produtos! Tudo muito bom, feito com amor e carinho.. atendimento impecável! Eu amo!",
      rating: 5,
      publicationLabel: "5 meses atrás",
      source: "Google",
      verifiedAt: "2026-10-20",
      approvedByBusiness: true,
    },
    {
      id: "karoline-souza",
      author: "Karoline Souza",
      text: "A loja e maravilhosa sempre que preciso as meninas sao bem organizada e prestativas sempre atendendo minhas expectativas desejo sucesso sempre",
      rating: 5,
      publicationLabel: "3 meses atrás",
      source: "Google",
      verifiedAt: "2026-10-20",
      approvedByBusiness: true,
    },
    {
      id: "any-claro",
      author: "Any Claro",
      text: "Não dá para explicar o capricho e a atenção no atendimento! O próprio nome da loja já diz, muito mimo e capricho junto..\nObrigada sempre pelo cuidado, eu amei e quem recebeu amou muito mais 🥰",
      rating: 5,
      publicationLabel: "10 meses atrás",
      isExcerpt: true,
      source: "Google",
      verifiedAt: "2026-10-20",
      approvedByBusiness: true,
    },
    {
      id: "renata-gabrielle",
      author: "Renata Gabrielle",
      text: "Sem palavras, são simplesmente incríveis!! Desde o atendimento até a entrega 💗 💗 amoo comprar coisinhas para presentear pessoas especiais 😍 😍",
      rating: 5,
      publicationLabel: "7 meses atrás",
      isExcerpt: true,
      source: "Google",
      verifiedAt: "2026-10-20",
      approvedByBusiness: true,
    },
    {
      id: "rayane-silva",
      author: "Rayane Silva",
      text: "Fui em busca do presente bem em cima da hora,e mesmo assim o atendimento foi nota 10. A entrega realizada sem nenhuma intercorrência. Parabéns pelo trabalho amamos a cesta!",
      rating: 5,
      publicationLabel: "3 meses atrás",
      source: "Google",
      verifiedAt: "2026-10-20",
      approvedByBusiness: true,
    },
    {
      id: "eunice",
      author: "Eunice",
      text: "Atendimento maravilho, responde super rápido no WhatsApp e super ágil na produção e no envio. Muitas opções de mimos para presentear. Moro em Campinas mas faço questão em comprar nesta loja pelo excelente atendimento.",
      rating: 5,
      publicationLabel: "10 meses atrás",
      source: "Google",
      verifiedAt: "2026-10-20",
      approvedByBusiness: true,
    },
    {
      id: "brunamanu-paranhos",
      author: "Brunamanu Paranhos",
      text: "Atendimento impecável! Qualidade nos produtos... sou de São Paulo, fiz o pedido e além de super atenciosos, foram muito ágeis tbm... com certeza voltarei a comprar mais vezes! Fidelizaram uma cliente a distância!",
      rating: 5,
      publicationLabel: "5 meses atrás",
      source: "Google",
      verifiedAt: "2026-10-20",
      approvedByBusiness: true,
    },
    {
      id: "eliane-pedroso",
      author: "Eliane Pedroso",
      text: "Quero agradecer a Bell pelo atendimento, desde o início que eu entrei em contato com ela, ela sempre atenciosa, prestativa, mi mostrando todas as opções, esclarecendo alguma dúvida. Para que tudo fique perfeito. Eu amei. E recomendo sim a loja para quando vcs precisarem comprar algo para presentear alguém. Obrigada!!💗",
      rating: 5,
      publicationLabel: "um ano atrás",
      source: "Google",
      verifiedAt: "2026-10-20",
      approvedByBusiness: true,
    },
    {
      id: "nadia-maria-souza-bueno",
      author: "Nadia Maria Souza Bueno",
      text: "Atendimento on line prático e rápido, entrega pontual e produto exatamente como pedi.",
      rating: 5,
      publicationLabel: "3 meses atrás",
      source: "Google",
      verifiedAt: "2026-10-20",
      approvedByBusiness: true,
    },
    {
      id: "tatiane-melo",
      author: "Tatiane Melo",
      text: "Já comprei muitas coisas e ganhei tantas outras e tanto os produtos quanto o atendimento é sem igual. A equipe sempre solícitas,gentis e um olhar muito atento ao que ...",
      rating: 5,
      publicationLabel: "2 meses atrás",
      isExcerpt: true,
      source: "Google",
      verifiedAt: "2026-10-20",
      approvedByBusiness: true,
    },
    {
      id: "yasmin-almeida",
      author: "Yasmin Almeida",
      text: "A loja tem muitaaaaa opção de mimo, possibilitando montagens diferentes de uma cesta convencional, fora que você pode mandar a foto e eles revelam, essa opção da foto deixou a cesta muitoooo mais a cara da pessoa presenteada! O atendimento foi maravilhoso e o preço super justo com oque foi entregue! Amei e comprarei mais vezes!",
      rating: 5,
      publicationLabel: "um ano atrás",
      source: "Google",
      verifiedAt: "2026-10-20",
      approvedByBusiness: true,
    },
    {
      id: "dieny-diih",
      author: "Dieny (Diih)",
      text: "Quase 1 ano atrás, meu namorado encomendou com a loja e do começo ao final foi maravilhoso, ele elogiou bastante pelo atendimento e eu amei pelo cuidado com a cesta e no atendimento com ele, tanto que fiz honra de entrar em contato para agradecer. Uma loja maravilhoso e uma equipe incrível 💗",
      rating: 5,
      publicationLabel: "um ano atrás",
      source: "Google",
      verifiedAt: "2026-10-20",
      approvedByBusiness: true,
    },
    {
      id: "millena-saovesso-cafuoco",
      author: "Millena Sãovesso Cafuoco",
      text: "Atendimento excelente, elas têm solução pra tudo e dão updates em cada etapa do processo. A gente se sente seguro! Angela maravilhosa deixa qualquer correria mais leve!",
      rating: 5,
      publicationLabel: "2 meses atrás",
      source: "Google",
      verifiedAt: "2026-10-20",
      approvedByBusiness: true,
    },
  ],
  summary: null,
  allReviewsUrl: "https://www.google.com/maps/place/Mimos+e+Caprichos+Valinhos/@-22.974301,-46.9989981,17z/data=!4m16!1m7!3m6!1s0x94c8cd051ce28299:0x5472272736ccc75c!2sMimos+e+Caprichos+Valinhos!8m2!3d-22.974306!4d-46.9964178!16s%2Fg%2F11pxltvqr8!3m7!1s0x94c8cd051ce28299:0x5472272736ccc75c!8m2!3d-22.974306!4d-46.9964178!9m1!1b1!16s%2Fg%2F11pxltvqr8?entry=ttu",
};
