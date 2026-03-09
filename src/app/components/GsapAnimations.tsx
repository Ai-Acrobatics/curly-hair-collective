"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/** Cursor glow that follows mouse across the page */
export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      gsap.to(el, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.6,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      ref={ref}
      className="cursor-glow hidden lg:block"
      style={{ top: 0, left: 0 }}
    />
  );
}

/** GSAP ScrollTrigger-powered section reveals */
export function ScrollRevealProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal each section heading
      gsap.utils.toArray<HTMLElement>("[data-gsap='heading']").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 60, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Staggered card reveals
      gsap.utils
        .toArray<HTMLElement>("[data-gsap='stagger-parent']")
        .forEach((parent) => {
          const cards = parent.querySelectorAll("[data-gsap='stagger-child']");
          gsap.fromTo(
            cards,
            { opacity: 0, y: 50, scale: 0.9 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.7,
              stagger: 0.15,
              ease: "back.out(1.2)",
              scrollTrigger: {
                trigger: parent,
                start: "top 80%",
                toggleActions: "play none none reverse",
              },
            }
          );
        });

      // Parallax floating elements
      gsap.utils
        .toArray<HTMLElement>("[data-gsap='parallax']")
        .forEach((el) => {
          const speed = parseFloat(el.dataset.speed || "0.5");
          gsap.to(el, {
            y: () => -100 * speed,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          });
        });

      // Horizontal text reveal (wipe)
      gsap.utils
        .toArray<HTMLElement>("[data-gsap='text-reveal']")
        .forEach((el) => {
          gsap.fromTo(
            el,
            { clipPath: "inset(0 100% 0 0)" },
            {
              clipPath: "inset(0 0% 0 0)",
              duration: 1.2,
              ease: "power4.inOut",
              scrollTrigger: {
                trigger: el,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            }
          );
        });

      // Scale up images on scroll
      gsap.utils
        .toArray<HTMLElement>("[data-gsap='scale-up']")
        .forEach((el) => {
          gsap.fromTo(
            el,
            { scale: 0.8, opacity: 0, borderRadius: "3rem" },
            {
              scale: 1,
              opacity: 1,
              borderRadius: "1.5rem",
              duration: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: el,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            }
          );
        });

      // Pin the hero text during scroll
      gsap.to("[data-gsap='hero-title']", {
        yPercent: -15,
        opacity: 0.3,
        scale: 0.95,
        ease: "none",
        scrollTrigger: {
          trigger: "[data-gsap='hero-section']",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return <div ref={containerRef}>{children}</div>;
}

/** Magnetic button effect — follows cursor on hover */
export function MagneticButton({
  children,
  className,
  href,
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      gsap.to(el, { x: x * 0.3, y: y * 0.3, duration: 0.4, ease: "power2.out" });
    };

    const onLeave = () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.3)" });
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <a ref={ref} href={href} className={className}>
      {children}
    </a>
  );
}
