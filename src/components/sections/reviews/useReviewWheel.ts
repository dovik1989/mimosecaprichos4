"use client";

import { useEffect, useRef, type RefObject } from "react";

// Uses the gift carousel's bounded, progressive wheel behavior without changing it.
export function useReviewWheel(viewportRef: RefObject<HTMLDivElement | null>) {
  const stopWheelAnimation = useRef<() => void>(() => {});
  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const desktop = window.matchMedia("(min-width: 1024px)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let target = viewport.scrollLeft;
    let lastTime = 0;
    const stop = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      target = viewport.scrollLeft;
    };
    stopWheelAnimation.current = stop;
    const animate = (time: number) => {
      const elapsed = Math.min(time - lastTime, 64);
      lastTime = time;
      const remaining = target - viewport.scrollLeft;
      if (Math.abs(remaining) <= 1) {
        viewport.scrollLeft = target;
        frame = 0;
        return;
      }
      viewport.scrollLeft += remaining * (1 - Math.exp(-elapsed / 55));
      frame = requestAnimationFrame(animate);
    };
    const onWheel = (event: WheelEvent) => {
      // Preserve browser zoom and native horizontal touchpad gestures.
      if (event.ctrlKey || Math.abs(event.deltaX) >= Math.abs(event.deltaY)) return;
      const range = viewport.scrollWidth - viewport.clientWidth;
      const delta = event.deltaY;
      if (!delta || range <= 1 || (delta > 0 ? viewport.scrollLeft >= range - 1 : viewport.scrollLeft <= 1)) return;
      if (!event.cancelable) return;
      event.preventDefault();
      const unit = event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? viewport.clientWidth : 1;
      // Bound large mouse ticks without amplifying small touchpad deltas.
      const pixels = Math.sign(delta) * Math.min(Math.abs(delta * unit), 100);
      if (!frame || Math.sign(target - viewport.scrollLeft) !== Math.sign(delta)) target = viewport.scrollLeft;
      target = Math.max(0, Math.min(range, target + pixels));
      if (reducedMotion.matches) {
        stop();
        viewport.scrollLeft = Math.max(0, Math.min(range, viewport.scrollLeft + pixels));
      } else if (!frame) {
        lastTime = performance.now();
        frame = requestAnimationFrame(animate);
      }
    };
    const syncDesktop = () => {
      stop();
      viewport.removeEventListener("wheel", onWheel);
      if (desktop.matches) viewport.addEventListener("wheel", onWheel, { passive: false });
    };
    syncDesktop();
    desktop.addEventListener("change", syncDesktop);
    viewport.addEventListener("pointerdown", stop, { passive: true });
    viewport.addEventListener("keydown", stop);
    return () => {
      stop();
      desktop.removeEventListener("change", syncDesktop);
      viewport.removeEventListener("wheel", onWheel);
      viewport.removeEventListener("pointerdown", stop);
      viewport.removeEventListener("keydown", stop);
      stopWheelAnimation.current = () => {};
    };
  }, [viewportRef]);

  return stopWheelAnimation;
}
