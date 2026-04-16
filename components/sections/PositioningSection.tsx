"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { useI18n } from "@/lib/i18n";

export function PositioningSection() {
  const { t } = useI18n();

  return (
    <section id="positioning" className="relative z-0 py-14 md:py-20 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate pointer-events-none" />

      <div className="section-container relative z-10">
        <AnimatedSection>
          <p className="text-xs font-semibold text-teal-600 uppercase tracking-widest text-center mb-8">
            {t.positioning.label}
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          {/* Desktop — horizontal */}
          <div className="hidden md:flex items-center justify-center gap-0 max-w-5xl mx-auto">
            {t.positioning.steps.map((step, i) => (
              <div key={i} className="flex items-center">
                <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.15, duration: 0.5 }}
                  className={`relative px-6 lg:px-10 py-4 rounded-full text-center min-w-[170px] lg:min-w-[220px] ${
                    i === 1
                      ? "bg-teal-500 text-white shadow-lg shadow-teal-500/25"
                      : "bg-slate-100 border border-slate-200 text-slate-600"
                  }`}>
                  <span className={`text-sm font-semibold ${i === 1 ? "text-white" : "text-slate-700"}`}>{step}</span>
                </motion.div>
                {i < t.positioning.steps.length - 1 && (
                  <motion.div initial={{ opacity: 0, scaleX: 0 }} whileInView={{ opacity: 1, scaleX: 1 }} viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.15, duration: 0.4 }} className="flex items-center mx-3">
                    <div className="w-10 h-px bg-gradient-to-r from-slate-300 to-teal-400" />
                    <ArrowRight className="w-4 h-4 text-teal-500 -ml-1" />
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile — vertical */}
          <div className="flex md:hidden flex-col items-center gap-0">
            {t.positioning.steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center">
                <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.12, duration: 0.5 }}
                  className={`px-8 py-3.5 rounded-full text-center w-full max-w-[260px] ${
                    i === 1
                      ? "bg-teal-500 text-white shadow-lg shadow-teal-500/25"
                      : "bg-slate-100 border border-slate-200"
                  }`}>
                  <span className={`text-sm font-semibold ${i === 1 ? "text-white" : "text-slate-700"}`}>{step}</span>
                </motion.div>
                {i < t.positioning.steps.length - 1 && (
                  <div className="flex flex-col items-center my-3">
                    <div className="w-px h-5 bg-gradient-to-b from-slate-300 to-teal-400" />
                    <ArrowDown className="w-4 h-4 text-teal-500 -mt-1" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }} className="text-center text-sm text-slate-500 mt-8 max-w-lg mx-auto">
            {t.positioning.caption}
          </motion.p>
        </AnimatedSection>
      </div>
    </section>
  );
}
