"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { useI18n } from "@/lib/i18n";

const stepNumbers = ["01", "02", "03"];

export function ValidationSection() {
  const { t } = useI18n();

  return (
    <section id="validation" className="relative z-0 py-16 md:py-20 bg-[#0f172a] overflow-hidden">
      <div className="absolute inset-0 bg-surgical-grid pointer-events-none" />

      <div className="section-container relative z-10">
        <AnimatedSection>
          <p className="text-xs font-semibold text-teal-400 uppercase tracking-widest text-center mb-10">
            {t.validation.label}
          </p>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          {/* Timeline connector */}
          <div className="relative">
            <div className="hidden sm:block absolute top-[28px] left-[15%] right-[15%] h-px">
              <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                className="w-full h-full bg-gradient-to-r from-teal-500/50 via-teal-400/30 to-teal-500/50 origin-left" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8">
              {t.validation.badges.map((badge, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.12, duration: 0.5 }}
                  className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-[#0f172a] border-2 border-teal-500/40 flex items-center justify-center mb-4 relative z-10">
                    <span className="text-sm font-bold text-teal-400 font-mono">{stepNumbers[i]}</span>
                  </div>
                  <div className="bg-slate-800/40 border border-slate-700/50 rounded-xl px-4 py-4 w-full hover:border-teal-500/30 transition-colors">
                    <span className="text-sm font-medium text-slate-200 leading-snug">{badge}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <AnimatedSection delay={0.4}>
            <p className="text-sm text-slate-400 text-center max-w-2xl mx-auto">
              {t.validation.description}
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
