"use client";
import { useEffect, useState } from "react";

export function useActiveSection(ids: readonly string[], enabled = true): string | null {
  const [active, setActive] = useState<string | null>(enabled ? ids[0] ?? null : null);
  useEffect(() => {
    if (!enabled) return;
    const els = ids.map((i) => document.getElementById(i)).filter((e): e is HTMLElement => !!e);
    const io = new IntersectionObserver((es) => {
      const top = es.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (top) setActive(top.target.id);
    }, { rootMargin: "-96px 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] });
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, [ids, enabled]);
  return enabled ? active : null;
}
