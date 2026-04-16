"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { useI18n } from "@/lib/i18n";

export function CTASection() {
  const { t } = useI18n();

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="partnership" className="relative z-0 py-20 md:py-28 bg-[#0f172a] overflow-hidden">
      <div className="absolute inset-0 bg-surgical-grid pointer-events-none" />
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      <div className="section-container relative z-10">
        <AnimatedSection>
          <SectionHeader label={t.partnership.label}
            title={<>{t.partnership.title}{" "}<span className="text-teal-400">{t.partnership.titleHighlight}</span></>} light />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
              {t.partnership.description}
            </p>
            <p className="text-sm sm:text-base text-slate-400 mb-8">
              {t.partnership.ctaText}
            </p>
            <Button size="lg" onClick={scrollToContact}
              className="bg-teal-500 hover:bg-teal-400 text-white font-semibold shadow-[0_0_30px_rgba(14,165,169,0.25)] hover:shadow-[0_0_40px_rgba(14,165,169,0.4)] transition-all group">
              {t.cta.requestMeeting}
              <ArrowRight className="ml-1.5 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
