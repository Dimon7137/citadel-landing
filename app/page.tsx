import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { AdvantagesSection } from "@/components/sections/AdvantagesSection";
import { PatentSection } from "@/components/sections/PatentSection";
import { DoctorSection } from "@/components/sections/DoctorSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <AdvantagesSection />
      <PatentSection />
      <DoctorSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
