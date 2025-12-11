"use client";

import { useState, useEffect } from "react";
import { Activity, Fuel, Wrench, CircleDot, AlertTriangle } from "lucide-react";

const fleetModules = [
  {
    id: "vhd",
    icon: Activity,
    title: "Vehicle Health",
    description:
      "Monitor odometer, trip performance, engine health & vehicle issues instantly.",
    details:
      "Live odometer sync • Engine diagnostics • Critical fault alerts • Route utilization insights • Trip efficiency scoring",
  },
  {
    id: "fuel",
    icon: Fuel,
    title: "Fuel Management",
    description:
      "Track refuels, mileage, detect abnormalities & reduce fuel expenses.",
    details:
      "Fuel theft detection • Mileage analytics • Refill validation • Cost insights • Driver fuel behavior tracking",
  },
  {
    id: "service",
    icon: Wrench,
    title: "Maintenance",
    description:
      "Service reminders, logs, cost tracking & predictive maintenance alerts.",
    details:
      "Next-service prediction • Service cost logs • Garage/vendor records • Breakdown prevention alerts",
  },
  {
    id: "tyre",
    icon: CircleDot,
    title: "Tyre Management",
    description:
      "Track tyre wear, repairs, replacements & optimize lifecycle cost.",
    details:
      "Tyre lifecycle tracking • Rotation schedule • Puncture logs • Cost-per-km tyre analytics",
  },
  {
    id: "incident",
    icon: AlertTriangle,
    title: "Incident Reports",
    description: "Drivers submit incidents with GPS, photos & timestamps.",
    details:
      "Immediate GPS tagging • Driver notes • Photo/video attachments • Severity scoring • Resolution workflow",
  },
];

export const FleetSection = () => {
  const [active, setActive] = useState<string | null>(null);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const update = () => setIsDesktop(window.innerWidth >= 1024);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const toggle = (id: string | null) =>
    setActive((prev) => (prev === id ? null : id));

  return (
    <section
      id="fleet"
      className="
        relative w-full min-h-screen flex flex-col items-center 
        justify-start pt-10 pb-6 scroll-mt-[70px]
        bg-background
      "
    >
      {/* Header */}
      <div className="text-center mb-6 px-4">
        <h2
          className="
            text-4xl sm:text-5xl font-bold tracking-tight 
            bg-clip-text text-transparent 
            bg-gradient-to-r from-yellow-500 to-amber-400
            leading-[1.2]
          "
        >
          Fleet Intelligence
        </h2>

        <p className="text-muted-foreground text-lg ">
          Smart Modules • Click to Explore
        </p>
      </div>

      <div className="w-full max-w-[1700px] px-4">
        {/* TOP ROW — 3 CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center mb-5">
          {fleetModules.slice(0, 3).map((m) => (
            <FlipCard
              key={m.id}
              module={m}
              active={active}
              toggle={toggle}
              isDesktop={isDesktop}
            />
          ))}
        </div>

        {/* BOTTOM ROW — 2 CARDS */}
        <div className="flex flex-col sm:flex-row justify-center gap-10">
          {fleetModules.slice(3, 5).map((m) => (
            <FlipCard
              key={m.id}
              module={m}
              active={active}
              toggle={toggle}
              isDesktop={isDesktop}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------------------- FLIP CARD ---------------------- */

function FlipCard({
  module,
  active,
  toggle,
  isDesktop,
}: {
  module: any;
  active: string | null;
  toggle: (id: string | null) => void;
  isDesktop: boolean;
}) {
  const Icon = module.icon;
  const isOpen = active === module.id;

  return (
    <div
      onClick={() => !isDesktop && toggle(module.id)}
      onMouseEnter={() => isDesktop && toggle(module.id)}
      onMouseLeave={() => isDesktop && toggle(null)}
      className="
        perspective cursor-pointer
        w-[360px] sm:w-[400px] md:w-[450px]
        h-[220px] sm:h-[240px]
      "
    >
      <div
        className={`
          relative w-full h-full rounded-2xl 
          transition-transform duration-700
          ${isOpen ? "rotate-y-180" : ""}
        `}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* FRONT */}
        <div
          className="
            absolute inset-0 rounded-2xl backface-hidden 
            flex flex-col items-center justify-center 
            border border-[hsl(var(--border))]
            shadow-md 
            transition-all
          "
          style={{
            background:
              "linear-gradient(135deg, hsl(var(--background)) 0%, hsl(var(--golden-accent)/0.2) 100%)",
          }}
        >
          <div
            className="
              p-3 rounded-xl border border-[hsl(var(--golden-accent)/0.3)]
              bg-[hsl(var(--golden-accent)/0.1)]
              mb-2
            "
          >
            <Icon className="h-9 w-9 text-[hsl(var(--golden-accent))]" />
          </div>
          <h3 className="text-lg font-semibold text-foreground">
            {module.title}
          </h3>
        </div>

        {/* BACK */}
        <div
          className="
            absolute inset-0 rounded-2xl p-5 
            backface-hidden rotate-y-180 
            flex flex-col
            border border-[hsl(var(--golden-accent)/0.4)]
          "
          style={{
            background:
              "linear-gradient(145deg, hsl(var(--background)) 0%, hsl(var(--golden-accent)/0.18) 100%)",
          }}
        >
          <Icon className="h-6 w-6 text-[hsl(var(--golden-accent))] mb-2" />

          <p className="text-sm text-muted-foreground leading-relaxed">
            {module.description}
          </p>

          {module.details && (
            <p className="text-sm text-muted-foreground leading-relaxed mt-2">
              {module.details}
            </p>
          )}
        </div>
      </div>

      <style jsx>{`
        .perspective {
          perspective: 1600px;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
      `}</style>
    </div>
  );
}