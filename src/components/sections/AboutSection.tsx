"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Building2,
  GraduationCap,
  Users,
  Cpu,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import Image from "next/image";

export const AboutSection = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Prevent body scroll + close popup on scroll
  useEffect(() => {
    if (isPopupOpen) {
      document.body.style.overflow = "hidden";

      const closeOnScroll = () => setIsPopupOpen(false);
      window.addEventListener("scroll", closeOnScroll);

      return () => window.removeEventListener("scroll", closeOnScroll);
    } else {
      document.body.style.overflow = "";
    }
  }, [isPopupOpen]);

  return (
    <section
      id="about"
      className="relative w-full h-screen overflow-hidden py-8 sm:py-10 md:py-12 bg-gradient-to-b 
      from-background via-secondary/20 to-background"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,230,0,0.15),transparent_60%),radial-gradient(ellipse_at_bottom_left,rgba(255,230,0,0.1),transparent_70%)] pointer-events-none" />

      <div className="w-full max-w-[1600px] mx-auto px-3 sm:px-5 lg:px-10">
        {/* Heading */}
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 bg-clip-text 
          text-transparent bg-gradient-to-r from-yellow-500 to-amber-400 leading-tight"
          >
            Smart Transportation Management for Every Organization
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            The Integrated Bus Management System by{" "}
            <span className="text-foreground font-semibold">
              Ramki Technologies Pvt. Ltd.
            </span>{" "}
            simplifies and secures transportation logistics — providing total
            visibility of buses, routes, drivers, and passengers.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {[
            {
              icon: Building2,
              title: "Enterprises",
              text: "Manage employee transportation efficiently with real-time tracking and route optimization.",
            },
            {
              icon: GraduationCap,
              title: "Educational Institutions",
              text: "Ensure student safety with live GPS updates, parent notifications, and automated attendance.",
            },
            {
              icon: Users,
              title: "Organizations",
              text: "Improve operations, cut costs, and enhance passenger experience through intelligent scheduling.",
            },
          ].map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-border/40 
              bg-gradient-to-br from-background/70 via-secondary/10 to-background/50 
              backdrop-blur-md px-6 py-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg min-h-[160px]"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 
              bg-gradient-to-br from-yellow-400/10 to-amber-500/10"
              />

              <div className="relative flex flex-col items-start">
                <div className="bg-yellow-500/15 w-14 h-14 rounded-xl flex items-center justify-center mb-3">
                  <Icon className="h-7 w-7 text-yellow-500" />
                </div>

                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  {title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button
            size="lg"
            onClick={() => setIsPopupOpen(true)}
            className="relative overflow-hidden px-8 py-5 rounded-xl font-semibold text-base text-white 
            shadow-md transition-all hover:scale-105 group"
            style={{
              background:
                "linear-gradient(90deg, #facc15 0%, #fbbf24 50%, #f59e0b 100%)",
            }}
          >
            <span className="relative z-10">View Technical Overview</span>

            <span className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.6)_50%,rgba(255,255,255,0)_100%)] animate-shimmer bg-[length:200%_100%]" />
          </Button>
        </div>
      </div>

      {/* Popup Modal */}
      {isPopupOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setIsPopupOpen(false)}
          />

          <div className="relative z-10 w-full max-w-2xl bg-white dark:bg-[#0b1220] rounded-2xl shadow-2xl border border-border/40 overflow-hidden animate-in fade-in-50 slide-in-from-bottom-4">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-border/40">
              <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-amber-400">
                Technical Overview
              </h3>

              <button
                onClick={() => setIsPopupOpen(false)}
                className="p-2 hover:bg-secondary/40 rounded-lg transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Content */}
            <div className="max-h-[70vh] overflow-y-auto p-6 space-y-6">
              <div className="flex gap-4 items-start">
                <div className="h-12 w-12 rounded-xl bg-yellow-400/15 flex items-center justify-center">
                  <Cpu className="h-6 w-6 text-yellow-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">
                    Advanced Architecture
                  </h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Built on a microservices-based architecture, ensuring
                    scalability and secure API integration.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="h-12 w-12 rounded-xl bg-yellow-400/15 flex items-center justify-center">
                  <ShieldCheck className="h-6 w-6 text-yellow-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">
                    Security & Compliance
                  </h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Includes RBAC, encrypted communication, and audit logging
                    for enterprise-grade protection.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="h-12 w-12 rounded-xl bg-yellow-400/15 flex items-center justify-center">
                  <Smartphone className="h-6 w-6 text-yellow-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Mobile Integration</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Fully responsive mobile app with live GPS, push
                    notifications, and analytics dashboard.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutSection;