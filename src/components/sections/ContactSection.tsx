"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabase-client";


export const ContactSection = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    demoDate: "",
    modules: [] as string[],
    message: "",
  });

  const modules = [
    "Real-Time Tracking",
    "Fleet Management",
    "Mobile Apps",
    "Analytics & Reports",
    "Role-Based Access",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  /* 1️⃣ Save to Supabase */
  const { error } = await supabase
    .from("ramki_star")
    .insert({
      name: formData.name,
      organization: formData.organization,
      email: formData.email,
      phone: formData.phone,
      demo_date: formData.demoDate || null,
      modules: formData.modules,
      message: formData.message,
    });

  if (error) {
    console.error(error);
    alert("Failed to submit form");
    return;
  }

  /* 2️⃣ Trigger Email API */
  await fetch("/api/contact-mail", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  alert("Demo request submitted successfully!");

  setFormData({
    name: "",
    organization: "",
    email: "",
    phone: "",
    demoDate: "",
    modules: [],
    message: "",
  });
};

  const handleModuleToggle = (module: string) => {
    setFormData((prev) => ({
      ...prev,
      modules: prev.modules.includes(module)
        ? prev.modules.filter((m) => m !== module)
        : [...prev.modules, module],
    }));
  };

  return (
    <section
      id="contact"
      className="
        relative w-full min-h-screen
        flex flex-col items-center justify-center
        scroll-mt-[80px]
        bg-background overflow-hidden
        pt-4 pb-10
      "
    >
      {/* Soft Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/10 via-background to-background" />
      <div className="absolute top-1/3 left-[-10%] w-[250px] h-[250px] blur-3xl rounded-full bg-[hsl(var(--golden-accent)/0.25)]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[300px] h-[300px] blur-3xl rounded-full bg-[hsl(var(--golden-accent)/0.15)]" />

      {/* HEADER – Updated Theme Colors + No Extra Padding */}
      <div className="text-center px-4 max-w-3xl mb-4">
        <h2
          className="
            text-3xl sm:text-4xl md:text-5xl font-bold leading-tight 
            bg-clip-text text-transparent
            bg-gradient-to-r from-[hsl(var(--golden-accent))] via-[hsl(var(--golden-accent)/0.8)] to-[hsl(var(--golden-accent))]
          "
        >
          Book a Live Demo
        </h2>

        <p className="text-muted-foreground text-base sm:text-lg md:text-xl mt-1">
          Experience next-gen fleet automation with live insights.
        </p>
      </div>

      {/* MAIN CONTENT */}
      <div className="w-full max-w-[1600px] px-4 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* LEFT INFO CARDS */}
          <div className="space-y-6">
            {[
              {
                icon: Mail,
                title: "Email Us",
                desc: "info@ramkitech.com",
                href: "mailto:info@ramkitech.com",
              },
              {
                icon: Phone,
                title: "Call Us",
                desc: "+91 98765 43210",
                href: "tel:+919876543210",
              },
              {
                icon: MapPin,
                title: "Visit Us",
                desc: "Ramki Technologies Pvt. Ltd., Bangalore, Karnataka, India",
              },
            ].map((item, i) => (
              <Card
                key={i}
                className="
                  p-6 backdrop-blur-md border border-border/40 bg-card/50
                  hover:-translate-y-1 transition-all
                  hover:shadow-[0_8px_30px_hsl(var(--golden-accent)/0.2)]
                "
              >
                <item.icon className="h-8 w-8 text-[hsl(var(--golden-accent))] mb-3" />
                <h3 className="font-semibold text-lg mb-1">{item.title}</h3>

                {item.href ? (
                  <a
                    href={item.href}
                    className="text-primary hover:text-[hsl(var(--golden-accent))] transition"
                  >
                    {item.desc}
                  </a>
                ) : (
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                )}
              </Card>
            ))}
          </div>

          {/* CONTACT FORM */}
          <Card className="lg:col-span-2 p-6 sm:p-8 md:p-10 bg-card/60 border border-border/40 backdrop-blur-md shadow-md">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* NAME & ORG */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputGroup
                  label="Name *"
                  value={formData.name}
                  onChange={(v) => setFormData({ ...formData, name: v })}
                />
                <InputGroup
                  label="Organization *"
                  value={formData.organization}
                  onChange={(v) =>
                    setFormData({ ...formData, organization: v })
                  }
                />
              </div>

              {/* EMAIL & PHONE */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputGroup
                  type="email"
                  label="Email *"
                  value={formData.email}
                  onChange={(v) => setFormData({ ...formData, email: v })}
                />
                <InputGroup
                  type="tel"
                  label="Phone *"
                  value={formData.phone}
                  onChange={(v) => setFormData({ ...formData, phone: v })}
                />
              </div>

              {/* DATE & MODULES */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Date */}
                <InputGroup
                  type="date"
                  label="Preferred Demo Date"
                  value={formData.demoDate}
                  onChange={(v) => setFormData({ ...formData, demoDate: v })}
                />

                {/* Modules */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Interested Modules
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {modules.map((module) => (
                      <label
                        key={module}
                        className="flex items-center gap-2 text-sm cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={formData.modules.includes(module)}
                          onChange={() => handleModuleToggle(module)}
                          className="w-4 h-4 text-[hsl(var(--golden-accent))] border-gray-300 rounded focus:ring-[hsl(var(--golden-accent))]"
                        />
                        {module}
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  rows={4}
                  placeholder="Tell us about your requirements..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>

              {/* BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button className="flex-1 py-5 rounded-xl text-black font-semibold bg-gradient-to-r from-[hsl(var(--golden-accent))] via-[hsl(var(--golden-accent)/0.8)] to-[hsl(var(--golden-accent))] shadow-[0_0_20px_hsl(var(--golden-accent)/0.3)] hover:shadow-[0_0_25px_hsl(var(--golden-accent)/0.5)] hover:scale-[1.03] transition">
                  Request Demo
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 py-5 rounded-xl border-2 border-[hsl(var(--golden-accent))] text-[hsl(var(--golden-accent))] hover:bg-[hsl(var(--golden-accent)/0.1)] hover:scale-[1.02] transition"
                >
                  Contact Sales
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

// 🔹 Small utility for re-usable labeled input groups
const InputGroup = ({
  label,
  value,
  type = "text",
  onChange,
}: {
  label: string;
  value: string;
  type?: string;
  onChange: (v: string) => void;
}) => (
  <div>
    <label className="block text-sm font-medium mb-2">{label}</label>
    <Input
      value={value}
      type={type}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);