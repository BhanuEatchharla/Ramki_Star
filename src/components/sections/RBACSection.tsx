"use client";

import { Crown, Building2, Wrench, User } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const roles = [
  {
    icon: Crown,
    title: "Master Admin",
    description:
      "Full system visibility and centralized control across branches and operations.",
    features: [
      "Full System Access",
      "Multi-Branch Control",
      "Advanced Analytics",
      "User Management",
    ],
  },
  {
    icon: Building2,
    title: "Branch Admin",
    description:
      "Manage local operations, routes, and staff with dedicated branch-level tools.",
    features: [
      "Branch Operations",
      "Route Management",
      "Staff Assignment",
      "Local Reports",
    ],
  },
  {
    icon: Wrench,
    title: "Operational Staff",
    description:
      "Access assigned routes, passengers, and incident reports efficiently.",
    features: [
      "Route Details",
      "Passenger List",
      "Incident Reporting",
      "Schedule View",
    ],
  },
  {
    icon: User,
    title: "End Users",
    description:
      "Real-time tracking and notifications for parents, students, or employees.",
    features: [
      "Live Tracking",
      "ETA Notifications",
      "Stop Details",
      "Fee Management",
    ],
  },
];

export const RBACSection = () => {
  return (
    <section
      id="rbac"
      className="relative flex flex-col items-center justify-center min-h-screen py-12 sm:py-14 md:py-16 bg-secondary/30 overflow-hidden"
    >
      {/* Soft Gradient BG */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-secondary/40 pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1500px] mx-auto px-4 sm:px-6 md:px-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-3">
            Smart Access for Every Role
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
            Role-based access control ensures everyone sees exactly what they
            need.
          </p>
        </div>

        {/* Grid */}
        <div
          className="
          grid grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-4 
          gap-5 sm:gap-6 md:gap-8 mb-12
        "
        >
          {roles.map((role, index) => (
            <Card
              key={index}
              className="
                p-5 sm:p-6 rounded-2xl border border-border/40 bg-card/60 backdrop-blur-md 
                transition-all duration-300 
                hover:shadow-[0_8px_30px_rgba(250,204,21,0.15)]
                hover:-translate-y-1
              "
            >
              <div className="flex flex-col h-full">
                {/* Icon */}
                <div
                  className="
                  bg-gradient-to-br from-yellow-400/20 to-amber-500/10 
                  w-14 h-14 sm:w-16 sm:h-16 rounded-xl 
                  flex items-center justify-center mb-4
                "
                >
                  <role.icon className="h-7 w-7 sm:h-8 sm:w-8 text-yellow-400" />
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  {role.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
                  {role.description}
                </p>

                {/* Features */}
                <ul className="space-y-1.5 mt-auto">
                  {role.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-muted-foreground/90"
                    >
                      <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            size="lg"
            className="
              text-base sm:text-lg px-8 py-5 sm:py-6 
              rounded-xl bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 
              text-black font-semibold
              shadow-[0_0_20px_rgba(250,204,21,0.3)]
              hover:shadow-[0_0_25px_rgba(250,204,21,0.5)]
              transition-all hover:scale-[1.03]
            "
          >
            See How RBAC Works
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RBACSection;