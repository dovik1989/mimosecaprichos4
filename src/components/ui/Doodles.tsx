import React from "react";

export function DoodleHeart({ className = "w-6 h-6 text-brand-pink" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 33s-11-7.5-14.5-13.5C2 13 6 5 13.5 6.5 17 7.5 20 12 20 12s3-4.5 6.5-5.5C34 5 38 13 34.5 19.5 31 25.5 20 33 20 33z" />
    </svg>
  );
}

export function DoodleDoubleHeart({ className = "w-8 h-8 text-brand-pink" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 60 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 28s-8-5.5-10.5-10C5 13 8 7 13.5 8 16 8.5 18 12 18 12s2-3.5 4.5-4C28 7 31 13 28.5 18 26 22.5 18 28 18 28z" />
      <path d="M38 32s-10-7-13-12.5C22 13 26 5.5 33 7c3 1 5.5 5 5.5 5s2.5-4 5.5-5C51 5.5 55 13 52 19.5 48.5 25 38 32 38 32z" />
    </svg>
  );
}

export function DoodleTripleHearts({ className = "w-11 h-8 text-brand-pink" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Coração 1 (esquerda maior) */}
      <path
        d="M17 28s-7-5.5-9.5-10.5C5 12 7.5 7 13 7.5c3 .3 4 3 4 3s1-2.7 4-3C26.5 7 29 12 26.5 17.5 24 22.5 17 28 17 28z"
        transform="rotate(-12 17 17)"
      />
      {/* Coração 2 (alto direita) */}
      <path
        d="M43 19s-5-4-7-7.5c-1.8-3.5 0-7 4-6.5 2 .2 3 2 3 2s1-1.8 3-2c4-.5 5.8 3 4 6.5-2 3.5-7 7.5-7 7.5z"
        transform="rotate(15 43 11)"
      />
      {/* Coração 3 (baixo direita) */}
      <path
        d="M51 34s-4.5-3.5-6-6.5c-1.5-3 0-6 3.5-5.5 1.8.2 2.5 1.8 2.5 1.8s.8-1.6 2.5-1.8c3.5-.5 5 2.5 3.5 5.5-1.5 3-6 6.5-6 6.5z"
        transform="rotate(22 51 28)"
      />
    </svg>
  );
}

export function LargeDoodleHeart({ className = "w-16 h-16 text-brand-pink" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        d="M32 54s-20-14-25.5-25C1 17 8.5 3 21 5.5c6 1.2 11 8.5 11 8.5s5-7.3 11-8.5C55.5 3 63 17 57.5 29 52 40 32 54 32 54z"
        transform="rotate(10 32 32)"
      />
    </svg>
  );
}

export function HandmadeLettering({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center select-none text-[#2D2630] ${className}`}>
      {/* 3 risquinhos estilo doodle sparkles acima de Mais */}
      <div className="flex items-center gap-1.5 text-brand-pink mb-0.5">
        <span className="w-1 h-3.5 -rotate-45 bg-brand-pink rounded-full" />
        <span className="w-1 h-4.5 bg-brand-pink rounded-full -translate-y-1" />
        <span className="w-1 h-3.5 rotate-45 bg-brand-pink rounded-full" />
      </div>

      <p className="font-serif italic text-2xl sm:text-3xl text-brand-dark tracking-tight leading-[1.05] text-center">
        &lsquo;Mais
      </p>
      <p className="font-serif italic text-lg sm:text-xl text-brand-dark/95 tracking-tight leading-[1.1] text-center">
        que presentes,
      </p>
      <p className="font-serif italic text-2xl sm:text-3xl text-brand-dark tracking-tight leading-[1.05] text-center">
        entregamos
      </p>
      <p className="font-serif italic text-2xl sm:text-3xl text-brand-dark tracking-tight leading-[1.05] text-center flex items-center justify-center gap-1 mt-0.5">
        <span>emoções</span>
        <span className="text-brand-pink not-italic text-lg font-serif">♡</span>
      </p>
    </div>
  );
}

// Alias para compatibilidade com Footer
export const ScriptQuote = HandmadeLettering;
