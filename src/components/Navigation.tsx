"use client";

import { useState, useEffect, useRef } from "react";
import {
  Moon,
  Sun,
  Home,
  Info,
  Layers,
  Lock,
  Smartphone,
  Truck,
  BarChart2,
  CreditCard,
  Mail,
  X,
  MoreHorizontal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";
import Image from "next/image";

const navItems = [
  { name: "Home", href: "#home", icon: Home },
  { name: "About", href: "#about", icon: Info },
  { name: "Features", href: "#features", icon: Layers },
  { name: "Access", href: "#rbac", icon: Lock },
  { name: "Mobile", href: "#mobile", icon: Smartphone },
  { name: "Fleet", href: "#fleet", icon: Truck },
  { name: "Analytics", href: "#analytics", icon: BarChart2 },
  { name: "Pricing", href: "#pricing", icon: CreditCard },
  { name: "Contact", href: "#contact", icon: Mail },
];

export const Navigation = () => {
  const HEADER_OFFSET = 70;
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState<string>("#home");
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const popupRef = useRef<HTMLDivElement | null>(null);

  /* --------------------------------------------- */
  /* SCROLL BEHAVIOR + OBSERVER                    */
  /* --------------------------------------------- */

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((n) => document.querySelector(n.href))
      .filter(Boolean) as Element[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target) {
          const id = `#${visible.target.id}`;
          setActive(id);
          history.replaceState(null, "", id);
        }
      },
      {
        rootMargin: "-50% 0px -45% 0px",
        threshold: [0, 0.3, 0.6, 0.9],
      }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string, smooth = true) => {
    const el = document.querySelector(id) as HTMLElement | null;
    if (!el) return;

    const sectionHeight = el.offsetHeight;
    const viewportHeight = window.innerHeight;
    const elTop = el.getBoundingClientRect().top + window.scrollY;
    const centerOffset = (viewportHeight - sectionHeight) / 2;
    const y = elTop - centerOffset - HEADER_OFFSET;

    window.scrollTo({ top: y, behavior: smooth ? "smooth" : "auto" });
  };

  /* --------------------------------------------- */
  /* CLOSE POPUP                                   */
  /* --------------------------------------------- */

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!isMoreOpen) return;
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        setIsMoreOpen(false);
      }
    };

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMoreOpen(false);
    };

    document.addEventListener("click", onDocClick, { capture: true });
    document.addEventListener("keydown", onKey);

    return () => {
      document.removeEventListener("click", onDocClick, { capture: true });
      document.removeEventListener("keydown", onKey);
    };
  }, [isMoreOpen]);

  const leftPrimary = [navItems[0], navItems[1]];
  const rightPrimary = [navItems[2], navItems[3]];
  const moreItems = navItems.slice(4);

  /* --------------------------------------------- */
  /* RENDER COMPONENT                              */
  /* --------------------------------------------- */

  return (
    <>
      {/* TOP HEADER */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b 
          ${
            isScrolled
              ? "bg-background/90 backdrop-blur-md border-border/40 shadow-[0_8px_30px_rgba(0,0,0,0.05)]"
              : "bg-transparent border-transparent"
          }
        `}
      >
        {/* WIDER CONTAINER (max-w-[1800px]) */}
        <nav className="max-w-[1800px] mx-auto px-6 lg:px-12">
          <div className="flex h-[72px] items-center justify-between">
            {/* LOGO */}
            <button
              onClick={() => scrollToSection("#home")}
              className="flex items-center gap-3 hover:opacity-90 transition-opacity"
            >
              <div className="relative h-12 w-32">
                <Image
                  src="/images/Ramki STAR_Logo.png"
                  alt="STAR Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </button>

            {/* DESKTOP NAV */}
            <div className="hidden lg:flex items-center gap-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-200 
                    ${
                      active === item.href
                        ? "text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-400 after:absolute after:inset-x-3 after:-bottom-1 after:h-[2px] after:bg-gradient-to-r after:from-yellow-400 after:to-amber-400"
                        : "text-muted-foreground hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-yellow-400 hover:to-amber-400"
                    }
                  `}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* ACTIONS */}
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="rounded-full hover:scale-105 transition"
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </Button>

              <Button
                onClick={() => scrollToSection("#contact")}
                className="hidden md:flex h-10 px-6 rounded-xl bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 text-black font-semibold shadow-[0_0_15px_rgba(250,204,21,0.25)] hover:shadow-[0_0_22px_rgba(250,204,21,0.45)] transition-all"
              >
                Request Demo
              </Button>
            </div>
          </div>
        </nav>
      </header>

      {/* MOBILE BOTTOM NAV */}
      <div className="lg:hidden">
        <nav
          aria-label="Bottom Navigation"
          className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[min(92%,720px)] z-50 rounded-2xl bg-card/90 backdrop-blur-md border border-border/40 shadow-xl px-3 py-2"
        >
          <div className="flex items-center justify-between">
            {leftPrimary.map((item) => {
              const Icon = item.icon;
              const isActive = active === item.href;

              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`flex flex-col items-center gap-1 text-[11px] transition-all 
                    ${
                      isActive
                        ? "text-yellow-400 scale-105"
                        : "text-muted-foreground hover:text-yellow-400"
                    }
                  `}
                >
                  <Icon className="h-5 w-5" />
                  {item.name}
                </button>
              );
            })}

            {/* CENTER MORE BUTTON */}
            <div
              className="relative flex items-center justify-center"
              onClick={() => setIsMoreOpen((s) => !s)}
            >
              <button className="relative -mt-16 h-14 w-14 rounded-full bg-gradient-to-r from-yellow-400 to-amber-400 text-black shadow-lg ring-2 ring-card/70 flex items-center justify-center hover:scale-105 transition">
                {isMoreOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <MoreHorizontal className="h-5 w-5" />
                )}
              </button>

              {/* POPUP SEMI CIRCLE */}
              <div
                ref={popupRef}
                className={`absolute bottom-[25px] w-48 h-20 transition-all duration-500 
                  ${
                    isMoreOpen
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-75 pointer-events-none"
                  }
                `}
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  {moreItems.map((mi, i) => {
                    const Icon = mi.icon;
                    const angle =
                      Math.PI + (i / (moreItems.length - 1)) * Math.PI;
                    const r = 90;
                    const x = Math.cos(angle) * r;
                    const y = Math.sin(angle) * r;

                    return (
                      <button
                        key={mi.name}
                        onClick={() => {
                          scrollToSection(mi.href);
                          setIsMoreOpen(false);
                        }}
                        style={{
                          transform: isMoreOpen
                            ? `translate(${x}px, ${y}px)`
                            : "translate(0,0)",
                          transitionDelay: `${i * 0.05}s`,
                        }}
                        className="absolute flex flex-col items-center gap-1 text-xs text-foreground hover:text-yellow-400 transition-all"
                      >
                        <div className="h-10 w-10 rounded-full bg-yellow-400 border shadow-md flex items-center justify-center">
                          <Icon className="h-5 w-5" />
                        </div>
                        {mi.name}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {rightPrimary.map((item) => {
              const Icon = item.icon;
              const isActive = active === item.href;

              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`flex flex-col items-center gap-1 text-[11px] transition-all 
                    ${
                      isActive
                        ? "text-yellow-400 scale-105"
                        : "text-muted-foreground hover:text-yellow-400"
                    }
                  `}
                >
                  <Icon className="h-5 w-5" />
                  {item.name}
                </button>
              );
            })}
          </div>
        </nav>
      </div>

      {/* Spacer to avoid layout shift */}
      <div className="h-[72px]" />
    </>
  );
};

export default Navigation;