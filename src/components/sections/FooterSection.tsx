"use client";

import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";
import { Moon, Sun, ChevronUp } from "lucide-react";
import Image from "next/image";

const footerLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Features", href: "#features" },
  { name: "Access", href: "#rbac" },
  { name: "Mobile", href: "#mobile" },
  { name: "Fleet", href: "#fleet" },
  { name: "Analytics", href: "#analytics" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" },
];

export const FooterSection = () => {
  const { theme, toggleTheme } = useTheme();

  const scrollToSection = (id: string) => {
    const el = document.querySelector(id) as HTMLElement | null;
    if (!el) return;

    const sectionHeight = el.offsetHeight;
    const viewportHeight = window.innerHeight;
    const elTop = el.getBoundingClientRect().top + window.scrollY;

    const centerOffset = (viewportHeight - sectionHeight) / 2;
    const y = elTop - centerOffset - 70;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full bg-background border-t border-border/40 text-muted-foreground pt-8 pb-6">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* TOP SECTION */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
          {/* LEFT — LOGO + DESCRIPTION + CONTACT DETAILS */}
          <div className="flex flex-col items-start w-full lg:w-1/3">
            {/* Bigger Logo */}
            <div className="relative w-24 h-24 mb-4">
              <Image
                src="/images/Ramki STAR_Logo.png"
                alt="Ramki STAR Logo"
                fill
                className="object-contain"
              />
            </div>

            {/* Description */}
            <p className="max-w-sm text-sm leading-relaxed">
              Delivering modern, scalable, and smart digital solutions since
              2018.
            </p>

            {/* CONTACT DETAILS moved here */}
            <p className="mt-4 text-sm leading-relaxed">
              📞 +91 99590 45474 <br />
              ✉️ info@ramkigroup.com <br />
              🌐 www.ramkitechnologies.com
            </p>

            {/* Brochure Button */}
            <a
              href="#"
              className="mt-5 inline-block text-sm font-medium text-black 
              bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 
              px-6 py-3 rounded-xl shadow-[0_0_15px_rgba(250,204,21,0.3)]
              hover:shadow-[0_0_20px_rgba(250,204,21,0.5)] 
              transition-all hover:scale-[1.03]"
            >
              Download Our Brochure
            </a>
          </div>

          {/* RIGHT — LINKS + POLICIES + OFFICE */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 w-full lg:w-2/3 text-sm">
            {/* NAV LINKS */}
            <div>
              <h4 className="font-semibold mb-3 bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">
                Links
              </h4>

              <ul className="space-y-1">
                {footerLinks.map((item) => (
                  <li key={item.name}>
                    <button
                      onClick={() => scrollToSection(item.href)}
                      className="hover:text-yellow-400 transition-colors"
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* POLICIES */}
            <div>
              <h4 className="font-semibold mb-3 bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">
                Policies
              </h4>
              <ul className="space-y-1">
                {[
                  "Return Policy",
                  "Privacy Policy",
                  "Warranty",
                  "Shipping Policy",
                ].map((policy) => (
                  <li key={policy}>
                    <a
                      href="#"
                      className="hover:text-yellow-400 transition-colors"
                    >
                      {policy}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* UPDATED ADDRESS — HOURS REMOVED */}
            <div>
              <h4 className="font-semibold mb-3 bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">
                Office
              </h4>

              <p className="text-sm leading-relaxed">
                <strong>Manjeera Trinity Corporate</strong> <br />
                Business Center – Hyderabad, Telangana <br />
                eSeva Ln, KPHB Phase 3, Kukatpally <br />
                <strong>500072</strong> <br />
                <br />
                <strong>12th Floor – Geekspace</strong> <br />
                Ramki Technologies Pvt Ltd
              </p>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-8 border-t border-border/30" />

        {/* BOTTOM BAR */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm gap-4">
          <p>
            © {new Date().getFullYear()} Ramki Technologies Pvt. Ltd. All Rights
            Reserved.
          </p>

          {/* Theme Toggle */}
          <Button
            onClick={toggleTheme}
            className="bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 text-black px-5 py-2 rounded-lg shadow-md hover:scale-[1.03] transition-all"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4 mr-2" />
            ) : (
              <Moon className="h-4 w-4 mr-2" />
            )}
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
          </Button>

          {/* Back to Top */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => scrollToSection("#home")}
            className="flex items-center gap-2 hover:text-yellow-400"
          >
            Back to top
            <ChevronUp className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </footer>
  );
};