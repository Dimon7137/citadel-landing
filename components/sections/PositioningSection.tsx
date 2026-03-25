"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

const steps = [
  { label: "External Fixation", highlight: false },
  { label: "CITadel (TIS)", highlight: true },
  { label: "Definitive Reconstruction", highlight: false },
];

export function PositioningSection() {
  return (
    <section id="positioning" className="relative z-0 py-20 md:py-28 bg-[#0f172a] overflow-hidden">
      <div className="absolute inset-0 bg-surgical-grid pointer-events-none" />
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      <div className="section-container relative z-10">
        <AnimatedSection>
          <SectionHeader
            label="Where CITadel Fits"
            title={<>Where CITadel fits in the{" "}<span className="text-teal-400">treatment pathway</span></>}
            light
          />
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          {/* Desktop: horizontal */}
          <div className="hidden md:flex items-center justify-center gap-0 max-w-4xl mx-auto">
            {steps.map((step, i) => (
              <div key={step.label} className="flex items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
                  className={`relative px-8 py-5 rounded-2xl text-center min-w-[200px] ${
                    step.highlight
                      ? "bg-teal-500/10 border-2 border-teal-500/40 shadow-[0_0_30px_rgba(14,165,169,0.15)]"
                      : "bg-slate-800/30 border border-slate-700/40"
                  }`}
                >
                  <span className={`text-sm font-semibold ${step.highlight ? "text-teal-400" : "text-slate-400"}`}>
                    {step.label}
                  </span>
                </motion.div>
                {i < steps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.15, duration: 0.4 }}
                    className="flex items-center mx-2"
                  >
                    <div className="w-12 h-px bg-gradient-to-r from-slate-600 to-teal-500/50" />
                    <ArrowRight className="w-4 h-4 text-teal-400/60 -ml-1" />
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile: vertical */}
          <div className="flex md:hidden flex-col items-center gap-0">
            {steps.map((step, i) => (
              <div key={step.label} className="flex flex-col items-center">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.12, duration: 0.5 }}
                  className={`px-8 py-4 rounded-xl text-center w-full max-w-[280px] ${
                    step.highlight
                      ? "bg-teal-500/10 border-2 border-teal-500/40 shadow-[0_0_20px_rgba(14,165,169,0.15)]"
                      : "bg-slate-800/30 border border-slate-700/40"
                  }`}
                >
                  <span className={`text-sm font-semibold ${step.highlight ? "text-teal-400" : "text-slate-400"}`}>
                    {step.label}
                  </span>
                </motion.div>
                {i < steps.length - 1 && (
                  <div className="flex flex-col items-center my-2">
                    <div className="w-px h-6 bg-gradient-to-b from-slate-600 to-teal-500/50" />
                    <ArrowDown className="w-4 h-4 text-teal-400/60 -mt-1" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-center text-sm text-slate-400 mt-10 max-w-lg mx-auto"
          >
            Designed for temporary internal stabilisation in staged limb reconstruction.
          </motion.p>
        </AnimatedSection>
      </div>
    </section>
  );
}
