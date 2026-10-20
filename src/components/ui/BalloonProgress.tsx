"use client";

import Image from "next/image";

const wave = "M0 12 Q25 2 50 12 T100 12 T150 12 T200 12 T250 12 T300 12 T350 12 T400 12 T450 12 T500 12 T550 12 T600 12 T650 12 T700 12 T750 12 T800 12 T850 12 T900 12 T950 12 T1000 12";

interface BalloonProgressProps {
  progress: number;
  imageSrc?: string;
  imageWidth?: number;
  imageHeight?: number;
  balloonWidth?: number;
  label?: string;
}

export function BalloonProgress({
  progress,
  imageSrc = "/images/balão_rosa_pastel_brilhante.png",
  imageWidth = 887,
  imageHeight = 1774,
  balloonWidth,
  label = "Progresso do carrossel de presentes",
}: BalloonProgressProps) {
  const position = Math.min(1, Math.max(0, Number.isFinite(progress) ? progress : 0));

  return (
    <div
      role="progressbar"
      aria-label={label}
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
          <div className={balloonWidth ? "-translate-x-1/2" : "w-10 -translate-x-1/2 sm:w-12"} style={balloonWidth ? { width: balloonWidth } : undefined}>
            <Image
              src={imageSrc}
              alt=""
              width={imageWidth}
              height={imageHeight}
              sizes={`${balloonWidth ?? 48}px`}
              className={balloonWidth ? "gift-balloon-float h-auto w-full object-contain" : "gift-balloon-float h-20 w-10 object-contain sm:h-24 sm:w-12"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
