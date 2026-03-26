"use client";

import { motion } from "framer-motion";
import { Cpu, Shield, Layers, Activity } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/shared/AnimatedSection";
import { useI18n } from "@/lib/i18n";

const icons = [Cpu, Shield, Layers, Activity];

export function SolutionSection() {
  const { t } = useI18n();

  return (
    <section id="solution" className="relative z-0 py-20 md:py-28 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate pointer-events-none" />
      <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 70% at 100% 40%, rgba(14,165,169,0.05) 0%, transparent 70%)" }} />

      <div className="section-container relative z-10">
        <AnimatedSection>
          <SectionHeader label={t.solution.label}
            title={<>{t.solution.title}{" "}<span className="text-teal-600">{t.solution.titleHighlight}</span></>} />
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {t.solution.features.map((feature, i) => {
              const Icon = icons[i];
              return (
                <StaggerItem key={i}>
                  <motion.div whileHover={{ y: -4, boxShadow: "0 20px 40px -12px rgba(14,165,169,0.12)" }} transition={{ duration: 0.2 }}
                    className="group bg-white border border-slate-100 rounded-xl p-5 shadow-sm hover:border-teal-300/40 transition-all duration-300 h-full">
                    <div className="w-10 h-10 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5 text-teal-600" />
                    </div>
                    <h3 className="text-sm font-semibold text-slate-900 mb-1.5">{feature.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">{feature.description}</p>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          <AnimatedSection direction="right">
            <div className="relative flex items-center justify-center">
              <img src="/citadel-landing/section4-nobg.png" alt={t.solution.imageAlt}
                className="max-h-[500px] object-contain drop-shadow-[0_0_40px_rgba(14,165,169,0.15)]" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
