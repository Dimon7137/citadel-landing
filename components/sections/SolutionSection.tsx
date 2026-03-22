"use client";

import { motion } from "framer-motion";
import { Cpu, Shield, Layers, Activity } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/shared/AnimatedSection";

const features = [
  { icon: Cpu, title: "Modular Two-Component Design", description: "Two interlocking nail segments connected by a central modular coupler, bridging critical defects internally." },
  { icon: Shield, title: "Internal Stability Without External Fixation", description: "Superior axial stiffness and bending resistance from within the medullary canal — no external hardware." },
  { icon: Layers, title: "PMMA Spacer Compatible", description: "Designed to work alongside antibiotic-loaded PMMA spacers, supporting infection management and staged reconstruction." },
  { icon: Activity, title: "Early Controlled Loading", description: "Biomechanical performance allows controlled axial loading shortly after surgery, enabling early patient mobilisation." },
];

export function SolutionSection() {
  return (
    <section id="solution" className="relative z-0 py-20 md:py-28 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate pointer-events-none" />
      <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 70% at 100% 40%, rgba(14,165,169,0.05) 0%, transparent 70%)" }}
      />

      <div className="section-container relative z-10">
        <AnimatedSection>
          <SectionHeader
            label="The Solution"
            title={<>CITadel: a new approach to{" "}<span className="text-teal-600">temporary internal stabilisation</span></>}
            description="A modular intramedullary system engineered for the specific demands of critical long-bone defects."
          />
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="mb-16">
          <div className="relative max-w-3xl mx-auto bg-gradient-to-br from-teal-50 to-cyan-50/50 border border-teal-200/60 rounded-xl sm:rounded-2xl p-5 sm:p-8 text-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="bg-white border border-teal-200 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-[10px] sm:text-xs font-semibold text-teal-600 tracking-wide shadow-sm">
                Core Concept
              </div>
            </div>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base mt-4 sm:mt-2">
              CITadel provides <strong className="text-slate-800">internal mechanical stability</strong> while avoiding external fixation.
              It is <strong className="text-slate-800">fully compatible with PMMA spacer support</strong> and staged reconstruction strategies.
            </p>
          </div>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, i) => (
            <StaggerItem key={i}>
              <motion.div
                whileHover={{ y: -4, boxShadow: "0 20px 40px -12px rgba(14,165,169,0.12)" }}
                transition={{ duration: 0.2 }}
                className="group bg-white border border-slate-100 rounded-xl sm:rounded-2xl p-5 sm:p-7 shadow-sm hover:border-teal-300/40 transition-all duration-300 h-full"
              >
                <div className="flex items-start gap-3 sm:gap-5">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-lg sm:rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center shrink-0">
                    <feature.icon className="w-4 sm:w-5 h-4 sm:h-5 text-teal-600" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1.5 sm:mb-2.5">
                      <div className="w-0.5 sm:w-1 h-4 sm:h-5 bg-teal-400 rounded-full" />
                      <h3 className="text-sm sm:text-base font-semibold text-slate-900">{feature.title}</h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
