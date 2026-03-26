"use client";

import { motion } from "framer-motion";
import { FileKey, GitBranch, Building2, TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/shared/AnimatedSection";
import { useI18n } from "@/lib/i18n";

const icons = [FileKey, GitBranch, Building2, TrendingUp];

export function PartnershipSection() {
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

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {t.partnership.items.map((p, i) => {
            const Icon = icons[i];
            return (
              <StaggerItem key={i}>
                <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}
                  className="bg-slate-800/30 border border-slate-700/40 rounded-xl sm:rounded-2xl p-5 hover:border-teal-500/30 transition-all duration-300 h-full">
                  <div className="w-10 h-10 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-teal-400" />
                  </div>
                  <h3 className="text-sm sm:text-base font-semibold text-white mb-1.5">{p.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{p.description}</p>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <AnimatedSection delay={0.3} className="mt-12">
          <div className="bg-teal-500/5 border border-teal-500/20 rounded-xl sm:rounded-2xl px-5 sm:px-8 py-6 text-center max-w-2xl mx-auto">
            <p className="text-slate-300 text-sm sm:text-base mb-5">{t.partnership.ctaText}</p>
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
