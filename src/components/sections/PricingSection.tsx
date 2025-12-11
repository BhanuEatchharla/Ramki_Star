"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const plans = [
  {
    name: "Basic",
    price: "₹4,999",
    period: "/month",
    description: "Perfect for small schools and institutions",
    features: [
      "Up to 10 buses",
      "Real-time tracking",
      "Basic notifications",
      "Mobile apps (Driver & User)",
      "Route management",
      "Email support",
    ],
  },
  {
    name: "Professional",
    price: "₹9,999",
    period: "/month",
    description: "Ideal for medium-sized organizations",
    features: [
      "Up to 50 buses",
      "All Basic features",
      "Fleet management modules",
      "Advanced analytics",
      "Custom reports",
      "Priority support",
      "API access",
      "Multi-branch support",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "Quote",
    description: "For large corporations with complex needs",
    features: [
      "Unlimited buses",
      "All Professional features",
      "Dedicated account manager",
      "24/7 premium support",
      "Custom integrations",
      "On-premise deployment option",
      "SLA guarantee",
      "Training & onboarding",
    ],
  },
];

export const PricingSection = () => {
  return (
    <section
      id="pricing"
      className="
        relative w-full 
        min-h-screen flex flex-col items-center justify-center 
        pt-10 pb-14 
        scroll-mt-[80px]
        bg-gradient-to-b from-background via-background/95 to-background
      "
    >
      {/* Section Header */}
      <div className="text-center mb-4 px-4 w-full">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Simple, Scalable, Transparent
        </h2>

        <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto mt-1">
          Choose the plan that fits your organization — with no hidden fees.
        </p>
      </div>

      {/* FULL WIDTH GRID */}
      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-16 mt-4">
        <div
          className="
            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
            gap-8 md:gap-10 w-full
          "
        >
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`
                relative flex flex-col justify-between
                rounded-2xl border border-border/50 bg-card/60 backdrop-blur-md
                p-6 sm:p-8 transition-all duration-300 
                hover:-translate-y-2 hover:shadow-[0_8px_35px_rgba(250,204,21,0.15)]
                w-full
                ${
                  plan.popular
                    ? "border-yellow-400/60 shadow-[0_0_20px_rgba(250,204,21,0.25)]"
                    : ""
                }
              `}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-yellow-400 to-amber-500 text-black text-xs sm:text-sm font-semibold px-4 py-1 rounded-full shadow-md">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground ml-1">
                    {plan.period}
                  </span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 text-sm sm:text-base">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="h-5 w-5 text-yellow-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                className="
                  w-full py-5 text-base font-semibold rounded-xl
                  bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500
                  text-black shadow-[0_0_20px_rgba(250,204,21,0.3)]
                  hover:shadow-[0_0_25px_rgba(250,204,21,0.5)]
                  transition-all hover:scale-[1.03]
                "
              >
                {plan.name === "Enterprise"
                  ? "Contact Sales"
                  : "Start Free Trial"}
              </Button>
            </Card>
          ))}
        </div>
      </div>

      {/* Footer Text */}
      <div className="text-center  px-4">
        <p className="text-xs sm:text-sm text-muted-foreground">
          All plans include 14-day free trial • No credit card required • Cancel
          anytime
        </p>
      </div>
    </section>
  );
};