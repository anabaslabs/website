"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export interface SectionConfig {
  id: string;
  hash: string;
}

export function useHashScroll(sections: SectionConfig[]) {
  const [activeHash, setActiveHash] = useState<string>(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      return window.location.hash;
    }
    return sections[0]?.hash ?? "";
  });
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const activeHashRef = useRef(activeHash);

  useEffect(() => {
    activeHashRef.current = activeHash;
  }, [activeHash]);

  const scrollToHash = useCallback(
    (hash: string, updateUrl = true) => {
      const section = sections.find((s) => s.hash === hash);

      if (!section) return;

      const element = document.getElementById(section.id);

      if (element) {
        isScrollingRef.current = true;

        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }

        setActiveHash(hash);

        if (updateUrl) {
          window.history.pushState(null, "", hash || "/");
        }

        element.scrollIntoView({ behavior: "smooth" });

        scrollTimeoutRef.current = setTimeout(() => {
          isScrollingRef.current = false;
        }, 1000);
      }
    },
    [sections]
  );

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const timer = setTimeout(() => {
        scrollToHash(hash, false);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [scrollToHash]);

  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash;
      scrollToHash(hash || sections[0]?.hash || "", false);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [scrollToHash, sections]);

  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "-40% 0px -55% 0px",
      threshold: 0,
    };

    const handleIntersect: IntersectionObserverCallback = (entries) => {
      if (isScrollingRef.current) return;

      const visibleEntries = entries.filter((entry) => entry.isIntersecting);

      if (visibleEntries.length > 0) {
        const viewportCenter = window.innerHeight / 2;

        let closestEntry = visibleEntries[0];
        let closestDistance = Infinity;

        for (const entry of visibleEntries) {
          const rect = entry.target.getBoundingClientRect();
          const sectionCenter = rect.top + rect.height / 2;
          const distance = Math.abs(sectionCenter - viewportCenter);

          if (distance < closestDistance) {
            closestDistance = distance;
            closestEntry = entry;
          }
        }

        const section = sections.find((s) => s.id === closestEntry.target.id);
        if (section && section.hash !== activeHashRef.current) {
          setActiveHash(section.hash);

          const newUrl = section.hash || "/";
          window.history.replaceState(null, "", newUrl);
        }
      }
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [sections]);

  return {
    activeHash,
    scrollToHash,
  };
}
