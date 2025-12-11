"use client";

import { BarChart3, TrendingUp, PieChart, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const analyticsFeatures = [
  {
    icon: BarChart3,
    title: "Trip Performance Reports",
    description: "Optimize routes and analyze trip efficiency in real time.",
  },
  {
    icon: TrendingUp,
    title: "Fuel Efficiency Analytics",
    description: "Monitor fuel patterns and reduce total expense leakage.",
  },
  {
    icon: PieChart,
    title: "Maintenance & Cost Reports",
    description:
      "Predict maintenance needs, track repair costs, and avoid breakdowns.",
  },
  {
    icon: FileText,
    title: "Incident & Downtime Analysis",
    description:
      "Identify risk patterns and reduce downtime with smart reporting.",
  },
];

export const AnalyticsSection = () => {
  return (
    <section
      id="analytics"
      className="
        relative w-full min-h-screen flex flex-col items-center justify-center
        scroll-mt-[80px] bg-background overflow-hidden
        pt-4 pb-10         /* ↓ reduced top padding */
      "
    >
      {/* Background Soft Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-15%] left-[-10%] w-[380px] h-[380px] bg-gradient-to-br from-yellow-400/25 to-amber-400/10 blur-3xl rounded-full animate-pulse-slow" />
        <div className="absolute bottom-[-12%] right-[-10%] w-[420px] h-[420px] bg-gradient-to-tr from-yellow-400/20 to-amber-500/10 blur-3xl rounded-full animate-pulse-slow" />
      </div>

      {/* Heading – reduced spacing */}
      <div className="text-center mb-4 px-4 max-w-3xl">
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-2">
          Data-Driven Insights
        </h2>
        <p className="text-muted-foreground text-base sm:text-lg md:text-xl">
          Unlock powerful analytics and reporting to make smarter fleet
          decisions.
        </p>
      </div>

      {/* CONTENT WRAPPER */}
      <div className="w-full max-w-[1600px] px-4 sm:px-6 md:px-10 mt-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* LEFT IMAGE + CENTERED BUTTON */}
          <div className="flex flex-col items-center w-full order-2 lg:order-1">
            <div
              className="
                relative w-full max-w-[520px]   /* slightly smaller */
                aspect-[4/3]
                rounded-2xl overflow-hidden
                shadow-[0_0_40px_rgba(250,204,21,0.15)]
              "
            >
              <Image
                src="/images/analytics-dashboard.jpg"
                alt="Analytics dashboard"
                fill
                className="object-cover rounded-2xl transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Center-aligned CTA Button */}
            <div className="flex justify-center w-full">
              <Button
                size="lg"
                className="
                  mt-6 w-full max-w-[350px] text-center
                  px-8 py-5 rounded-xl text-lg font-semibold
                  bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500
                  text-black shadow-[0_0_20px_rgba(250,204,21,0.3)]
                  hover:shadow-[0_0_25px_rgba(250,204,21,0.5)]
                  transition-all hover:scale-[1.03]
                "
              >
                View Sample Reports
              </Button>
            </div>
          </div>

          {/* RIGHT FEATURES LIST */}
          <div className="order-1 lg:order-2 space-y-6">
            {analyticsFeatures.map((feature, index) => (
              <div
                key={index}
                className="
                  flex items-start gap-5 p-5 rounded-2xl
                  border border-border/40 bg-card/50 backdrop-blur-md
                  hover:border-yellow-400/40
                  hover:shadow-[0_4px_25px_rgba(250,204,21,0.15)]
                  transition-all duration-300
                "
              >
                <div className="flex-shrink-0 bg-gradient-to-br from-yellow-400/30 to-amber-500/20 rounded-xl p-3">
                  <feature.icon className="h-7 w-7 text-yellow-400" />
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};