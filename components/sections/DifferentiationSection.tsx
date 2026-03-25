"use client";

import { motion } from "framer-motion";
import { X, Check, TrendingDown, Activity, Clock, HeartPulse } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

const currentSolutions = [
  "External fixation dependency",
  "Lack of spacer-compatible systems",
  "Limited internal options for defects",
];

const citadelAdvantages = [
  "Internal temporary stabilisation",
  "Designed for spacer-based workflows",
  "Defect-focused construct logic",
];

const clinicalImpact = [
  { icon: Clock, text: "Reduced hospital stay" },
  { icon: HeartPulse, text: "Faster patient recovery" },
  { icon: Activity, text: "Improved stability vs external fixation" },
  { icon: TrendingDown, text: "Fewer complications and revisions" },
];

export function DifferentiationSection() {
  return (
    <section id="differentiation" className="relative z-0 py-20 md:py-28 bg-[#0f172a] overflow-hidden">
      <div className="absolute inset-0 bg-surgical-grid pointer-events-none" />
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      <div className="section-container relative z-10">
        <AnimatedSection>
          <SectionHeader
            label="Differentiation"
            title={<>Why CITadel is{" "}<span className="text-teal-400">different</span></>}
            light
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <AnimatedSection direction="left">
            <div className="bg-slate-800/30 border border-slate-700/40 rounded-xl sm:rounded-2xl p-6 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                  <X className="w-4 h-4 text-red-400" />
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-white">Current solutions</h3>
              </div>
              <ul className="space-y-4">
                {currentSolutions.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0 mt-0.5">
                      <X className="w-3 h-3 text-red-400" />
                    </div>
                    <span className="text-sm text-slate-400">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <div className="bg-teal-500/5 border border-teal-500/20 rounded-xl sm:rounded-2xl p-6 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center">
                  <Check className="w-4 h-4 text-teal-400" />
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-white">CITadel</h3>
              </div>
              <ul className="space-y-4">
                {citadelAdvantages.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-teal-500/10 border border-teal-500/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-teal-400" />
                    </div>
                    <span className="text-sm text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>

        {/* Clinical & Economic Impact */}
        <AnimatedSection delay={0.3} className="mt-12">
          <div className="bg-teal-500/5 border border-teal-500/20 rounded-xl sm:rounded-2xl px-5 sm:px-8 py-6 max-w-4xl mx-auto">
            <h4 className="text-xs font-semibold text-teal-400 uppercase tracking-widest mb-5 text-center">Clinical & Economic Impact</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {clinicalImpact.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
                  className="flex items-center gap-2.5"
                >
                  <item.icon className="w-4 h-4 text-teal-400 shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-300">{item.text}</span>
                </motion.div>
              ))}
            </div>
            <p className="text-center text-sm font-semibold text-white mt-5">
              Positioned as a cost-saving treatment protocol
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
