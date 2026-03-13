import { useEffect, useRef, useState, type RefObject } from 'react';

type IntersectionReturn<T extends HTMLElement | SVGElement> = {
  ref: RefObject<T | null>;
  isVisible: boolean;
};

export default function useIntersection<T extends HTMLElement | SVGElement>(
  options: IntersectionObserverInit = {},
): IntersectionReturn<T> {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting === true) observer.unobserve(element);
      });
    }, options);

    if (element) {
      observer.observe(element);
    }
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [options]);
  return { ref, isVisible };
}
