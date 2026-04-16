import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyCTA } from "@/components/shared/StickyCTA";
import { HeroSection } from "@/components/sections/HeroSection";
import { GapSection } from "@/components/sections/GapSection";
import { LimitationsSection } from "@/components/sections/LimitationsSection";
import { SystemSection } from "@/components/sections/SystemSection";
import { CorePrincipleSection } from "@/components/sections/CorePrincipleSection";
import { WhatChangesSection } from "@/components/sections/WhatChangesSection";
import { PortfolioFitSection } from "@/components/sections/PortfolioFitSection";
import { MarketRelevanceSection } from "@/components/sections/MarketRelevanceSection";
import { ValidationSection } from "@/components/sections/ValidationSection";
import { CTASection } from "@/components/sections/CTASection";
import { DoctorSection } from "@/components/sections/DoctorSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="bg-[#0a1628]" style={{ minHeight: "100dvh" }}>
      <Header />
      <StickyCTA />
      <main className="isolate">
        <HeroSection />
        <GapSection />
        <LimitationsSection />
        <SystemSection />
        <CorePrincipleSection />
        <WhatChangesSection />
        <PortfolioFitSection />
        <MarketRelevanceSection />
        <ValidationSection />
        <CTASection />
        <DoctorSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
