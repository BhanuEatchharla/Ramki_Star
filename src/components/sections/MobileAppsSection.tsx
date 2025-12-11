"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BusFront, UserCheck } from "lucide-react";

export const MobileAppsSection = () => {
  const apps = [
    {
      title: "Operational Staff App",
      icon: BusFront,
      image: "/images/mobile-apps.jpg",
      points: [
        "View assigned bus and route details",
        "Access personal schedules & duties",
        "Report incidents with GPS & images",
        "Works offline in low-signal areas",
      ],
      btn: "Download Driver App",
    },
    {
      title: "End-User App",
      icon: UserCheck,
      image: "/images/mobile-apps.jpg",
      points: [
        "Track buses in real-time with live map",
        "Get ETA notifications instantly",
        "View stop & route insights",
        "Pay fees and request changes easily",
      ],
      btn: "Download Parent App",
    },
  ];

  return (
    <section
      id="mobile"
      className="
        relative flex flex-col items-center justify-center 
        min-h-screen scroll-mt-[80px]
        py-12 sm:py-14 md:py-16
        bg-background overflow-hidden
      "
    >
      {/* Header */}
      <div className="text-center mb-8 sm:mb-10 px-4 max-w-3xl">
        <h2
          className="
          text-3xl sm:text-4xl md:text-5xl font-bold 
          bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent
        "
        >
          Mobile Apps for Every Role
        </h2>

        <p className="text-sm sm:text-base md:text-lg text-muted-foreground mt-2">
          Clean, centered layout — responsive for all screen sizes.
        </p>
      </div>

      {/* Grid Wrapper — ensures perfect vertical centering */}
      <div className="w-full max-w-7xl mx-auto flex-grow flex items-center px-4 sm:px-6 md:px-10">
        <div
          className="
          grid grid-cols-1 lg:grid-cols-2 
          gap-8 sm:gap-10 md:gap-12 
          w-full
        "
        >
          {apps.map((app, i) => {
            const Icon = app.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                whileHover={{ scale: 1.02, rotateX: 3, rotateY: -3 }}
                className="
                  relative w-full min-h-[360px] rounded-3xl overflow-hidden
                  shadow-lg group border border-border/40
                  bg-gradient-to-br from-white/5 to-white/10
                  transition-all duration-700
                  flex flex-col
                "
              >
                {/* Animated Gradient Border */}
                <div
                  className="
                    absolute inset-0 rounded-3xl p-[2px]
                    bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-400
                    opacity-20 group-hover:opacity-60
                    blur-[3px] transition-opacity duration-700
                  "
                />

                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={app.image}
                    fill
                    alt={app.title}
                    className="
                      object-cover brightness-[0.55]
                      group-hover:scale-110 transition-all duration-[1200ms]
                    "
                  />
                  <div
                    className="
                      absolute inset-0 bg-gradient-to-b
                      from-black/10 via-black/25 to-black/65
                      backdrop-blur-sm
                    "
                  />
                </div>

                {/* Content */}
                <div className="relative z-10 p-6 sm:p-7 md:p-8 flex flex-col text-white">
                  {/* Icon + Title */}
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className="
                      w-12 h-12 sm:w-14 sm:h-14 rounded-xl
                      bg-white/20 backdrop-blur-md border border-white/10
                      flex items-center justify-center
                    "
                    >
                      <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-yellow-300" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold">
                      {app.title}
                    </h3>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2.5 mb-6 text-white/90">
                    {app.points.map((p, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * j }}
                        className="flex items-start text-sm sm:text-base"
                      >
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mt-1.5 mr-3" />
                        {p}
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    size="lg"
                    className="
                      mt-auto w-full rounded-xl bg-gradient-to-r 
                      from-yellow-400 via-amber-400 to-yellow-500 
                      text-black font-semibold
                      shadow-[0_0_18px_rgba(250,204,21,0.5)]
                      hover:shadow-[0_0_28px_rgba(250,204,21,0.7)]
                      transition-all group-hover:scale-[1.05]
                    "
                  >
                    <Download className="mr-2 h-4 w-4" />
                    {app.btn}
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};