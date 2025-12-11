"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Zap, Shield } from "lucide-react";
import Image from "next/image";

export const HeroSection = () => {
  const HEADER_OFFSET = 70;

  const scrollToSection = (id: string, smooth = true) => {
    const el = document.querySelector(id) as HTMLElement | null;
    if (el) {
      const sectionHeight = el.offsetHeight;
      const viewportHeight = window.innerHeight;

      const topOfSection = el.getBoundingClientRect().top + window.scrollY;
      const centerOffset = (viewportHeight - sectionHeight) / 2;

      window.scrollTo({
        top: topOfSection - centerOffset - HEADER_OFFSET,
        behavior: smooth ? "smooth" : "auto",
      });
    }
  };

  useEffect(() => {
    const el = document.querySelector("#home");
    if (el) {
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET,
        behavior: "auto",
      });
    }
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background scroll-mt-[70px]"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0 animate-fade-in">
        <Image
          src="/images/school-bus-hero.jpg"
          alt="School bus fleet management and tracking system"
          fill
          priority
          className="object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/85 to-background/65 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-2 sm:px-4 md:px-6 lg:px-8 flex flex-col items-center text-center py-4">
        <div className="w-full flex flex-col items-center">
          {/* TITLE */}
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-2 tracking-tight animate-fade-up">
            School Transport Advanced Routing System
          </h1>

          {/* SUBTITLE */}
          <p
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-2 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Live Tracking · Smart Fleet · Total Control
          </p>

          {/* DESCRIPTION */}
          <p
            className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground/90 max-w-4xl mx-auto mb-4 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            A complete, intelligent transportation ecosystem for schools and
            organizations — enabling real-time tracking, fleet optimization, and
            secure access, all in one unified dashboard.
          </p>

          {/* CTA BUTTONS */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6 animate-fade-up w-full sm:w-auto"
            style={{ animationDelay: "0.3s" }}
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("#contact")}
              className="w-full sm:w-auto text-base px-8 py-4 rounded-xl bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 text-black font-semibold shadow-md hover:shadow-lg transition-all hover:scale-[1.02]"
            >
              Request Live Demo
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("#features")}
              className="w-full sm:w-auto text-base px-8 py-4 rounded-xl border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400/10 transition-all hover:scale-[1.02]"
            >
              Explore Features
            </Button>
          </div>

          {/* FEATURE CARDS */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-6xl mx-auto animate-fade-up w-full"
            style={{ animationDelay: "0.4s" }}
          >
            {[
              {
                icon: MapPin,
                title: "Real-Time Tracking",
                desc: "Monitor every bus with GPS precision",
              },
              {
                icon: Zap,
                title: "Fleet Intelligence",
                desc: "AI insights for smarter operations",
              },
              {
                icon: Shield,
                title: "Role-Based Access",
                desc: "Secure and scalable control",
              },
            ].map((f, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl border border-border/40 bg-card/60 backdrop-blur-md px-5 py-6 shadow-sm transition-all duration-300 hover:shadow-[0_4px_20px_rgba(250,204,21,0.15)] hover:-translate-y-1 flex flex-col items-center text-center min-h-[140px]"
              >
                <div className="mb-3 rounded-full bg-gradient-to-br from-yellow-400/30 to-amber-500/10 p-2">
                  <f.icon className="h-7 w-7 text-yellow-400" />
                </div>
                <h3 className="font-semibold text-lg mb-1">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};