"use client";

import { useEffect } from 'react';

import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { RBACSection } from '@/components/sections/RBACSection';
import { MobileAppsSection } from '@/components/sections/MobileAppsSection';
import { FleetSection } from '@/components/sections/FleetSection';
import { AnalyticsSection } from '@/components/sections/AnalyticsSection';
import { PricingSection } from '@/components/sections/PricingSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { FooterSection } from '@/components/sections/FooterSection';

const Page = () => {
  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    
      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <HeroSection />
          <AboutSection />
          <FeaturesSection />
          <RBACSection />
          <MobileAppsSection />
          <FleetSection />
          <AnalyticsSection />
          <PricingSection />
          <ContactSection />
        </main>
        <FooterSection />
      </div>

  );
};

export default Page;
