import { useEffect, useRef, useState } from "react";

/**
 * Reveals an element when it scrolls into view.
 * Returns a ref to attach and a boolean for visibility.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options?: IntersectionObserverInit
) {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px", ...options }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [options]);

  return { ref, isVisible };
}

/**
 * Reveals children with staggered delays.
 */
export function useStaggeredReveal(count: number, baseDelay = 90) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisibleCount(count);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // stagger reveal
            for (let i = 0; i < count; i++) {
              window.setTimeout(() => {
                setVisibleCount((c) => Math.max(c, i + 1));
              }, i * baseDelay);
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [count, baseDelay]);

  return { ref, visibleCount };
}

