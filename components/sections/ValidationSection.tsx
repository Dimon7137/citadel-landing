"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

const badges = [
  "TRL 4–5",
  "Bench testing completed",
  "Early clinical application",
  "Prototype validated",
];

export function ValidationSection() {
  return (
    <section id="validation" className="relative z-0 py-20 md:py-28 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate pointer-events-none" />

      <div className="section-container relative z-10">
        <AnimatedSection>
          <SectionHeader
            label="Validation"
            title={<>Development and{" "}<span className="text-teal-600">validation status</span></>}
          />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {badges.map((badge, i) => (
              <motion.span
                key={badge}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
                className="text-xs sm:text-sm font-medium bg-teal-50 text-teal-700 border border-teal-200 rounded-full px-4 py-1.5"
              >
                {badge}
              </motion.span>
            ))}
          </div>

          <p className="text-center text-sm sm:text-base text-slate-500 leading-relaxed max-w-2xl mx-auto">
            CITadel has undergone biomechanical testing and early clinical use.
            Further development and pilot implementation are planned with industrial partners.
          </p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-center text-sm font-semibold text-teal-600 mt-6"
          >
            Current TRL: 4–5 → Target: TRL 6 (clinical pilot)
          </motion.p>
        </AnimatedSection>
      </div>
    </section>
  );
}
