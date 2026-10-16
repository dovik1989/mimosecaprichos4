"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { Star, Package, Heart, MapPin } from "lucide-react";
import { Reveal } from "@/components/animation";

export function TrustBar() {
  return (
    <div className="bg-white border-y border-[#F5E6EC] py-5 sm:py-6 shadow-xs overflow-hidden">
      <Container>
        <Reveal direction="up" distance={20} duration={0.8}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[#F8E7EE]">
          {/* 1. Google 5,0 */}
          <div className="flex items-center gap-3.5 pt-3 sm:pt-0 sm:px-4 first:pt-0 first:px-0">
            <div className="w-10 h-10 rounded-full bg-[#FFF0F5] border border-[#FADCE8] flex items-center justify-center text-brand-pink shrink-0">
              <Star className="w-5 h-5 fill-brand-pink text-brand-pink" />
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="font-serif text-lg font-bold text-brand-dark">5,0</span>
                <div className="flex text-amber-400 text-xs">
                  {"★★★★★"}
                </div>
              </div>
              <p className="text-xs text-brand-muted font-medium">no Google</p>
            </div>
          </div>

          {/* 2. +27 mil entregas */}
          <div className="flex items-center gap-3.5 pt-3 sm:pt-0 sm:px-4">
            <div className="w-10 h-10 rounded-full bg-[#FFF0F5] border border-[#FADCE8] flex items-center justify-center text-brand-pink shrink-0">
              <Package className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-brand-dark leading-tight">
                Mais de 27 mil
              </p>
              <p className="text-[11px] sm:text-xs text-brand-muted leading-tight">
                entregas realizadas <br className="hidden sm:inline" />
                <span className="text-[10px] text-brand-muted/70">(desde do instagram)</span>
              </p>
            </div>
          </div>

          {/* 3. Feito com carinho */}
          <div className="flex items-center gap-3.5 pt-3 sm:pt-0 sm:px-4">
            <div className="w-10 h-10 rounded-full bg-[#FFF0F5] border border-[#FADCE8] flex items-center justify-center text-brand-pink shrink-0">
              <Heart className="w-5 h-5 text-brand-pink fill-brand-pink" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-brand-dark leading-tight">
                Feito com
              </p>
              <p className="text-xs text-brand-muted font-medium">carinho</p>
            </div>
          </div>

          {/* 4. Loja física em Valinhos */}
          <div className="flex items-center gap-3.5 pt-3 sm:pt-0 sm:px-4">
            <div className="w-10 h-10 rounded-full bg-[#FFF0F5] border border-[#FADCE8] flex items-center justify-center text-brand-pink shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-brand-dark leading-tight">
                Loja física
              </p>
              <p className="text-xs text-brand-muted font-medium">em Valinhos</p>
            </div>
          </div>
        </div>
      </Reveal>
    </Container>
    </div>
  );
}

