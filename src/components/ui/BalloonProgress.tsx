"use client";

const wave = "M0 12 Q25 2 50 12 T100 12 T150 12 T200 12 T250 12 T300 12 T350 12 T400 12 T450 12 T500 12 T550 12 T600 12 T650 12 T700 12 T750 12 T800 12 T850 12 T900 12 T950 12 T1000 12";

export function BalloonProgress({ progress }: { progress: number }) {
  const position = Math.min(1, Math.max(0, Number.isFinite(progress) ? progress : 0));

  return (
    <div
      role="progressbar"
      aria-label="Progresso do carrossel de presentes"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(position * 100)}
      className="relative mt-4 h-20 px-6 sm:mt-5 sm:h-24 sm:px-7"
    >
      <div className="relative h-full" aria-hidden="true">
        <svg className="absolute top-12 h-6 w-full sm:top-14" viewBox="0 0 1000 24" preserveAspectRatio="none" fill="none">
          <path d={wave} stroke="var(--color-pink-light)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
          <path d={wave} stroke="var(--color-pink-primary)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" style={{ clipPath: `inset(0 ${(1 - position) * 100}% 0 0)` }} />
        </svg>
        <div className="absolute inset-x-0 top-0 will-change-transform" style={{ transform: `translateX(${position * 100}%)` }}>
          <div className="w-10 -translate-x-1/2 sm:w-12">
            <svg className="gift-balloon-float h-[72px] w-10 sm:h-20 sm:w-12" viewBox="0 0 48 80" fill="none">
              <path d="M24 39C21 45 29 47 25 53C20 59 26 62 24 67" stroke="var(--color-blue-accent)" strokeWidth="1.2" strokeLinecap="round" />
              <path d="M24 38C18 32 5 24 5 14C5 3 18 1 24 10C30 1 43 3 43 14C43 24 30 32 24 38Z" fill="var(--color-pink-primary)" />
              <path d="M24 38L21 42Q24 40 27 42Z" fill="var(--color-blue-accent)" />
              <path d="M10 15C9 9 15 6 19 10" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity=".8" />
              <path d="M10 20L11 22" stroke="white" strokeWidth="1.8" strokeLinecap="round" opacity=".65" />
              <path d="M38 13C40 21 30 29 27 32" stroke="white" strokeWidth="1" strokeLinecap="round" opacity=".35" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
