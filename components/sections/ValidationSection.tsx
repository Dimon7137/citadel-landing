"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { useI18n } from "@/lib/i18n";

export function ValidationSection() {
  const { t } = useI18n();

  return (
    <section id="validation" className="relative z-0 py-12 md:py-16 bg-[#0f172a] overflow-hidden">
      <div className="absolute inset-0 bg-surgical-grid pointer-events-none" />

      <div className="section-container relative z-10">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 max-w-5xl mx-auto">
            <p className="text-xs font-semibold text-teal-400 uppercase tracking-widest whitespace-nowrap shrink-0">
              {t.validation.label}
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              {t.validation.badges.map((badge, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ delay: 0.05 + i * 0.08, duration: 0.4 }}
                  className="bg-teal-500/10 border border-teal-500/20 rounded-full px-4 py-2">
                  <span className="text-xs sm:text-sm font-medium text-teal-300">{badge}</span>
                </motion.div>
              ))}
            </div>

            <p className="text-sm text-slate-400 text-center md:text-left shrink">
              {t.validation.description}
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
