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

export function ScriptQuote({ className = "" }: { className?: string }) {
  return (
    <div className={`font-serif italic text-brand-dark/85 text-center select-none ${className}`}>
      <div className="flex justify-center mb-1">
        <DoodleHeart className="w-8 h-8 text-brand-pink stroke-[2]" />
      </div>
      <p className="text-xl sm:text-2xl font-serif leading-tight text-brand-dark/90">
        &ldquo;Mais que presentes, <br />
        <span className="text-brand-pink font-normal not-italic font-serif">entregamos emoções&rdquo;</span>
      </p>
      <div className="flex justify-center mt-1">
        <span className="text-brand-pink text-lg font-serif">♡</span>
      </div>
    </div>
  );
}
