"use client";

import { useState } from "react";
import {
  Building,
  Users,
  MapPin,
  Clock,
  Bus,
  UserCheck,
  Bell,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Building,
    title: "Organization & Branch Management",
    description:
      "Multi-location support with hierarchical structure and centralized control.",
    details:
      "Manage multi-branch operations from a unified dashboard. Assign admins, configure locations, and enforce security policies with centralized reporting.",
  },
  {
    icon: Users,
    title: "User & Role Management",
    description:
      "Granular access control with custom roles and secure permissions.",
    details:
      "Create custom roles like Admin, Staff, Driver, or Parent. Includes 2FA, fine-grained permissions, and detailed audit logs.",
  },
  {
    icon: MapPin,
    title: "Route & Geofence Setup",
    description: "Google Maps-based route planning and geofencing alerts.",
    details:
      "Plan routes visually, create geofences, and receive alerts for deviations, delays, or route issues.",
  },
  {
    icon: Clock,
    title: "Trip Timing & Scheduling",
    description: "Automated scheduling with real-time update notifications.",
    details:
      "Create recurring schedules with predictive timing. Instant alerts for delays and operational changes.",
  },
  {
    icon: Bus,
    title: "Bus & Vehicle Database",
    description: "Keep complete vehicle profiles and maintenance history.",
    details:
      "Track registrations, insurance, repairs, and maintenance logs. Auto-reminders for renewals.",
  },
  {
    icon: UserCheck,
    title: "Passenger Management",
    description: "Passenger records with route mapping and attendance.",
    details:
      "Track student/passenger profiles, routes, attendance, and parent communication.",
  },
  {
    icon: Bell,
    title: "Live ETA & Notifications",
    description: "Smart real-time alerts for all users.",
    details:
      "Real-time GPS tracking combined with predictive ETA alerts for parents, drivers, and admins.",
  },
];

export const FeaturesSection = () => {
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null);

  return (
    <section
      id="features"
      className="relative flex flex-col items-center justify-center min-h-screen py-10 sm:py-14 bg-secondary/20"
    >
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 leading-tight">
            Core System Features
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
            Everything you need to power a modern transportation ecosystem
          </p>
        </div>

        {/* GRID */}
        <div
          className="
          grid grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-4 
          gap-5 sm:gap-6 md:gap-8
        "
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isOpen = selectedFeature === index;

            return (
              <Card
                key={index}
                className={`
                  relative rounded-2xl border border-border/40 bg-card/70 backdrop-blur-md
                  transition-all duration-300 ease-out
                  p-5 sm:p-6 min-h-[180px]
                  ${
                    isOpen
                      ? "col-span-1 lg:col-span-2 shadow-xl"
                      : "hover:-translate-y-1"
                  }
                `}
              >
                <div className="flex flex-col h-full">
                  {/* Icon */}
                  <div
                    className="mb-3 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center 
                    rounded-xl bg-gradient-to-br from-yellow-400/20 to-amber-500/10"
                  >
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-yellow-400" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 transition-colors">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
                    {feature.description}
                  </p>

                  {/* Button */}
                  <Button
                    size="sm"
                    onClick={() => setSelectedFeature(isOpen ? null : index)}
                    className="mt-auto px-4 py-2 text-sm rounded-lg bg-gradient-to-r 
                      from-yellow-400 via-amber-400 to-yellow-500 text-black border-none hover:scale-[1.03] transition"
                  >
                    {isOpen ? "Close" : "Learn More →"}
                  </Button>

                  {/* SMOOTH EXPAND SECTION */}
                  <div
                    className={`
                      grid transition-all duration-300 overflow-hidden
                      ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100 mt-4"
                          : "grid-rows-[0fr] opacity-0 mt-0"
                      }
                    `}
                  >
                    <div className="overflow-hidden border-t border-border/30 pt-3">
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {feature.details}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;