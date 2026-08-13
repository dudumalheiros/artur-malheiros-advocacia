"use client";

import { useEffect, useRef } from "react";

/**
 * Hook that observes elements with the `.reveal` class
 * and adds `.visible` when they enter the viewport.
 *
 * Usage:
 *   const ref = useScrollReveal();
 *   <section ref={ref}> ... <div className="reveal"> ... </div> </section>
 */
export function useScrollReveal<T extends HTMLElement = HTMLElement>(
  threshold = 0.15,
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = el.querySelectorAll(".reveal");
    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // animate only once
          }
        });
      },
      { threshold, rootMargin: "0px 0px -60px 0px" },
    );

    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
