"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { useI18n } from "@/lib/i18n";

export function HowItWorksSection() {
  const { t } = useI18n();
  const numbers = ["01", "02", "03", "04"];

  return (
    <section id="how-it-works" className="relative z-0 py-20 md:py-28 bg-[#0f172a] overflow-hidden">
      <div className="absolute inset-0 bg-surgical-grid pointer-events-none" />
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      <div className="section-container relative z-10">
        <AnimatedSection>
          <SectionHeader label={t.howItWorks.label}
            title={<>{t.howItWorks.title}{" "}<span className="text-teal-400">{t.howItWorks.titleHighlight}</span></>} light />
        </AnimatedSection>

        <div className="relative">
          <div className="hidden lg:block absolute top-[36px] left-[10%] right-[10%] h-px">
            <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
              className="w-full h-full bg-gradient-to-r from-teal-500/60 via-teal-400/40 to-teal-500/60 origin-left" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5 max-w-6xl mx-auto">
            {t.howItWorks.steps.map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: 0.15 + i * 0.12, duration: 0.5 }} className="relative group flex flex-col">
                <div className="flex justify-center mb-8 lg:mb-10 shrink-0">
                  <div className="relative">
                    <div className="w-[56px] sm:w-[72px] h-[56px] sm:h-[72px] rounded-full bg-[#0f172a] border-2 border-teal-500/40 flex items-center justify-center group-hover:border-teal-400 transition-colors">
                      <span className="text-lg sm:text-xl font-bold text-teal-400 font-mono glow-text-teal">{numbers[i]}</span>
                    </div>
                    <div className="absolute inset-0 rounded-full border border-teal-400/30 scale-100 group-hover:scale-[1.3] group-hover:opacity-0 opacity-0 group-hover:animate-pulse-ring transition-all" />
                  </div>
                </div>
                <div className="bg-slate-800/30 border border-slate-700/40 rounded-xl sm:rounded-2xl p-4 sm:p-5 text-center hover:border-teal-500/30 transition-all duration-300 flex-1">
                  <span className="inline-block text-[9px] sm:text-[10px] font-semibold text-teal-400 uppercase tracking-widest bg-teal-500/10 border border-teal-500/20 rounded-full px-2 sm:px-3 py-1 mb-2 sm:mb-3">
                    {step.detail}
                  </span>
                  <h3 className="text-sm sm:text-base font-semibold text-white mb-1.5 sm:mb-2">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <AnimatedSection delay={0.5} className="mt-12 sm:mt-24">
          <div className="relative bg-teal-500/5 border border-teal-500/20 rounded-xl sm:rounded-2xl px-4 sm:px-8 py-4 sm:py-6 text-center">
            <p className="text-slate-300 text-sm sm:text-base">{t.howItWorks.footerNote}</p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
