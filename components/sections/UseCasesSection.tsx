"use client";

import { motion } from "framer-motion";
import { ShieldAlert, Zap, Scissors } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/shared/AnimatedSection";
import { useI18n } from "@/lib/i18n";

const icons = [ShieldAlert, Zap, Scissors];

export function UseCasesSection() {
  const { t } = useI18n();

  return (
    <section id="use-cases" className="relative z-0 py-20 md:py-28 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate pointer-events-none" />
      <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 70% at 100% 40%, rgba(14,165,169,0.05) 0%, transparent 70%)" }} />

      <div className="section-container relative z-10">
        <AnimatedSection>
          <SectionHeader label={t.useCases.label}
            title={<>{t.useCases.title}{" "}<span className="text-teal-600">{t.useCases.titleHighlight}</span></>} />
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {t.useCases.items.map((uc, i) => {
            const Icon = icons[i];
            return (
              <StaggerItem key={uc.title}>
                <motion.div whileHover={{ y: -4, boxShadow: "0 20px 40px -12px rgba(14,165,169,0.12)" }} transition={{ duration: 0.2 }}
                  className="group bg-white border border-slate-100 rounded-xl sm:rounded-2xl p-6 shadow-sm hover:border-teal-300/40 transition-all duration-300 h-full">
                  <div className="w-11 h-11 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 text-teal-600" />
                  </div>
                  <h3 className="text-sm sm:text-base font-semibold text-slate-900 mb-2">{uc.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{uc.description}</p>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
