import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyCTA } from "@/components/shared/StickyCTA";
import { HeroSection } from "@/components/sections/HeroSection";
import { PositioningSection } from "@/components/sections/PositioningSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { UseCasesSection } from "@/components/sections/UseCasesSection";
import { DifferentiationSection } from "@/components/sections/DifferentiationSection";
import { ValidationSection } from "@/components/sections/ValidationSection";
import { PartnershipSection } from "@/components/sections/PartnershipSection";
import { DoctorSection } from "@/components/sections/DoctorSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative" style={{ zIndex: 9999 }}>
        <Header />
      </div>
      <StickyCTA />
      <main className="relative isolate" style={{ zIndex: 1 }}>
        <HeroSection />
        <PositioningSection />
        <ProblemSection />
        <SolutionSection />
        <HowItWorksSection />
        <UseCasesSection />
        <DifferentiationSection />
        <ValidationSection />
        <PartnershipSection />
        <DoctorSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
