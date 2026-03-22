"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Wrench, Activity, FlaskConical, BarChart3 } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/shared/AnimatedSection";

const advantages = [
  { icon: Shield, title: "Internal Stability Without External Fixation", description: "Reliable 3D fixation from within the medullary canal — no external frames, pins, or associated infection risk." },
  { icon: FlaskConical, title: "Selective HA+Ag Antibacterial Coating", description: "Hydroxyapatite-silver coating applied to bone-contact zones delivers local antibacterial effect without systemic exposure." },
  { icon: Wrench, title: "Designed for Staged Reconstruction", description: "Engineered as a temporary implant with modular architecture allowing straightforward removal for definitive reconstruction." },
  { icon: Zap, title: "Early Patient Mobilisation", description: "Bench-validated axial stiffness supports controlled early loading, enabling patients to mobilise sooner after surgery." },
  { icon: Activity, title: "Reduced Infection Pathways", description: "Eliminates percutaneous pin-tract entry points — a primary infection pathway in prolonged external fixation." },
  { icon: BarChart3, title: "Validated Biomechanical Performance", description: "Higher axial stiffness, improved bending resistance, and stable torsional behaviour confirmed by independent testing." },
];

export function AdvantagesSection() {
  return (
    <section id="advantages" className="relative py-20 md:py-28 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate pointer-events-none" />
      <div className="absolute top-0 left-0 w-1/2 h-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 60% at 0% 50%, rgba(14,165,169,0.04) 0%, transparent 70%)" }}
      />

      <div className="section-container relative z-10">
        <AnimatedSection>
          <SectionHeader
            label="Advantages"
            title={<>Why CITadel outperforms{" "}<span className="text-teal-600">current solutions</span></>}
            description="Each advantage addresses a specific failure mode of existing devices in the management of critical long-bone defects."
          />
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((adv, i) => (
            <StaggerItem key={i}>
              <motion.div
                whileHover={{ y: -5, boxShadow: "0 16px 40px -10px rgba(14,165,169,0.12)" }}
                transition={{ duration: 0.22 }}
                className="group bg-white border border-slate-100 rounded-xl sm:rounded-2xl p-5 sm:p-7 hover:border-teal-300/40 transition-all duration-300 h-full"
              >
                <div className="w-9 sm:w-11 h-9 sm:h-11 rounded-lg sm:rounded-xl bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center mb-3 sm:mb-5 shadow-sm group-hover:shadow-[0_0_20px_rgba(14,165,169,0.2)] transition-shadow">
                  <adv.icon className="w-4 sm:w-5 h-4 sm:h-5 text-white" strokeWidth={1.75} />
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-slate-900 mb-1.5 sm:mb-2.5">{adv.title}</h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{adv.description}</p>
                <div className="mt-5 h-px w-0 group-hover:w-full bg-gradient-to-r from-teal-400 to-teal-600 transition-all duration-500 ease-out rounded-full" />
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimatedSection delay={0.35} className="mt-16">
          <div className="bg-[#0f172a] rounded-xl sm:rounded-2xl px-5 sm:px-8 py-6 sm:py-8 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-surgical-grid pointer-events-none opacity-50" />
            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(14,165,169,0.08) 0%, transparent 70%)" }} />
            {[
              { metric: "Higher", sub: "axial stiffness", note: "vs. external fixation" },
              { metric: "Improved", sub: "bending resistance", note: "4-point bending · no failure" },
              { metric: "Stable", sub: "torsional behaviour", note: "No catastrophic deformation" },
            ].map((item, i) => (
              <div key={i} className="relative text-center z-10">
                <div className="text-lg sm:text-xl font-bold text-white glow-text-teal">{item.metric}</div>
                <div className="text-xs sm:text-sm font-medium text-teal-400 mb-0.5 sm:mb-1">{item.sub}</div>
                <div className="text-[10px] sm:text-xs text-slate-500">{item.note}</div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
