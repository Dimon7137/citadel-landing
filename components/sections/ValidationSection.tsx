"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { useI18n } from "@/lib/i18n";

export function ValidationSection() {
  const { t } = useI18n();

  return (
    <section id="validation" className="relative z-0 py-20 md:py-28 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate pointer-events-none" />

      <div className="section-container relative z-10">
        <AnimatedSection>
          <SectionHeader label={t.validation.label}
            title={<>{t.validation.title}{" "}<span className="text-teal-600">{t.validation.titleHighlight}</span></>} />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-6xl mx-auto mb-8">
            {t.validation.badges.map((badge, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
                className="flex items-center justify-center text-center bg-teal-50 border border-teal-200 rounded-xl px-3 py-3">
                <span className="text-[11px] sm:text-xs font-semibold text-teal-700 leading-tight">{badge}</span>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-sm sm:text-base text-slate-500 leading-relaxed max-w-3xl mx-auto">{t.validation.description}</p>

          <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }} className="text-center text-sm font-semibold text-teal-600 mt-6">
            {t.validation.trlNote}
          </motion.p>
        </AnimatedSection>
      </div>
    </section>
  );
}
