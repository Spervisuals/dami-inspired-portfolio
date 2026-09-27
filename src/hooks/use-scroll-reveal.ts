import { useEffect } from "react";

/**
 * Reveals any element marked with [data-reveal] as it scrolls into view.
 * The hidden state only applies once `data-reveal-ready` is set on <html>
 * (so server-rendered markup is always readable without JavaScript), and is
 * skipped entirely when the visitor prefers reduced motion.
 */
export function useScrollReveal() {
  useEffect(() => {
    const root = document.documentElement;
    const targets = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (targets.length === 0) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || typeof IntersectionObserver === "undefined") {
      targets.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    root.setAttribute("data-reveal-ready", "");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" },
    );

    targets.forEach((element) => observer.observe(element));

    // Safety net: never leave content hidden if the observer is unavailable.
    const fallback = window.setTimeout(() => {
      targets.forEach((element) => element.classList.add("is-visible"));
    }, 2000);

    return () => {
      window.clearTimeout(fallback);
      observer.disconnect();
      root.removeAttribute("data-reveal-ready");
    };
  }, []);
}
