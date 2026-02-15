"use client";

import { useEffect, useRef, useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";
import { gsap } from "gsap";
import Image from "next/image";

const NUM_BLOCKS = 20;

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const overlayRef = useRef<HTMLDivElement>(null);
  const logoOverlayRef = useRef<HTMLDivElement>(null);
  const blocksRef = useRef<HTMLDivElement[]>([]);
  const isTransitioning = useRef(false);
  const revealTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const revealPage = useCallback(() => {
    if (revealTimeoutRef.current) clearTimeout(revealTimeoutRef.current);

    gsap.set(blocksRef.current, { scaleX: 1, transformOrigin: "right" });
    gsap.to(blocksRef.current, {
      scaleX: 0,
      duration: 0.4,
      stagger: 0.02,
      ease: "power2.out",
      transformOrigin: "right",
      onComplete: () => {
        isTransitioning.current = false;
        if (overlayRef.current) overlayRef.current.style.pointerEvents = "none";
        if (logoOverlayRef.current) logoOverlayRef.current.style.pointerEvents = "none";
      },
    });

    revealTimeoutRef.current = setTimeout(() => {
      if (blocksRef.current.length > 0) {
        const first = blocksRef.current[0];
        if (first && Number(gsap.getProperty(first, "scaleX")) > 0) {
          gsap.to(blocksRef.current, {
            scaleX: 0,
            duration: 0.2,
            ease: "power2.out",
            transformOrigin: "right",
            onComplete: () => {
              isTransitioning.current = false;
              if (overlayRef.current) overlayRef.current.style.pointerEvents = "none";
              if (logoOverlayRef.current) logoOverlayRef.current.style.pointerEvents = "none";
            },
          });
        }
      }
    }, 1000);
  }, []);

  const coverPage = useCallback(
    (url: string) => {
      if (overlayRef.current) overlayRef.current.style.pointerEvents = "auto";
      if (logoOverlayRef.current) logoOverlayRef.current.style.pointerEvents = "auto";

      const tl = gsap.timeline({
        onComplete: () => router.push(url),
      });

      tl.to(blocksRef.current, {
        scaleX: 1,
        duration: 0.4,
        stagger: 0.02,
        ease: "power2.out",
        transformOrigin: "left",
      })
        .set(logoOverlayRef.current, { opacity: 1 }, "-=0.2")
        .to(logoOverlayRef.current, {
          opacity: 0,
          duration: 0.3,
          delay: 0.6,
          ease: "power2.out",
        });
    },
    [router]
  );

  const handleRouteChange = useCallback(
    (url: string) => {
      if (isTransitioning.current) return;
      isTransitioning.current = true;
      coverPage(url);
    },
    [coverPage]
  );

  const onAnchorClick = useCallback(
    (e: MouseEvent) => {
      if (isTransitioning.current) {
        e.preventDefault();
        return;
      }
      const target = e.currentTarget as HTMLAnchorElement;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0 || target.target === "_blank") return;

      // Skip external links, hash links, and mailto/tel links
      const href = target.getAttribute("href") || "";
      if (href.startsWith("http") || href.startsWith("mailto") || href.startsWith("tel") || href === "#") return;

      e.preventDefault();
      const url = new URL(target.href).pathname;
      if (url !== pathname) handleRouteChange(url);
    },
    [pathname, handleRouteChange]
  );

  useEffect(() => {
    if (!overlayRef.current) return;
    overlayRef.current.innerHTML = "";
    blocksRef.current = [];

    for (let i = 0; i < NUM_BLOCKS; i++) {
      const block = document.createElement("div");
      block.className = "transition-block";
      overlayRef.current.appendChild(block);
      blocksRef.current.push(block);
    }

    gsap.set(blocksRef.current, { scaleX: 0, transformOrigin: "left" });
    revealPage();

    // Match internal links: those starting with "/" or with the basePath
    const links = document.querySelectorAll('a[href^="/"], a[href^="./"]');
    links.forEach((link) => {
      const href = link.getAttribute("href") || "";
      // Skip external, hash-only, mailto, tel links
      if (href.startsWith("http") || href === "#" || href.startsWith("mailto") || href.startsWith("tel")) return;
      link.addEventListener("click", onAnchorClick as EventListener);
    });

    return () => {
      links.forEach((link) => link.removeEventListener("click", onAnchorClick as EventListener));
      if (revealTimeoutRef.current) clearTimeout(revealTimeoutRef.current);
    };
  }, [pathname, onAnchorClick, revealPage]);

  return (
    <>
      <div ref={overlayRef} className="transition-overlay" />
      <div ref={logoOverlayRef} className="logo-overlay">
        <div className="logo-overlay-container">
          <div className="relative w-20 h-20 rounded-full overflow-hidden mb-4">
            <Image
              src="/satyarup-logo.jpeg"
              alt="Satyarup Law Firm"
              fill
              className="object-cover"
              sizes="80px"
            />
          </div>
          <span className="text-2xl font-bold text-white tracking-wider font-display">
            SATYARUP
          </span>
          <span className="text-xs text-warm-gold uppercase tracking-[0.3em] mt-1">
            Law Firm
          </span>
        </div>
      </div>
      {children}
    </>
  );
}
