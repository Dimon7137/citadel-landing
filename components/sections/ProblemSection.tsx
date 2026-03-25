"use client";

import { ShieldX, Link2Off, AlertTriangle, Clock } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/shared/AnimatedSection";

const problems = [
  { icon: ShieldX, title: "No dedicated internal solution for staged defect management" },
  { icon: Link2Off, title: "External fixation increases complications and patient burden" },
  { icon: AlertTriangle, title: "Standard implants are not designed for spacer-supported constructs" },
  { icon: Clock, title: "Reconstruction pathways remain mechanically suboptimal" },
];

export function ProblemSection() {
  return (
    <section id="problem" className="relative z-0 py-20 md:py-28 bg-[#0f172a] overflow-hidden">
      <div className="absolute inset-0 bg-surgical-grid pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 50% at 80% 50%, rgba(14,165,169,0.06) 0%, transparent 70%)" }}
      />
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      <div className="section-container relative z-10">
        <AnimatedSection>
          <SectionHeader
            label="The Problem"
            title={<>Current limitations in managing{" "}<span className="text-teal-400">critical bone defects</span></>}
            light
          />
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {problems.map((problem, i) => (
            <StaggerItem key={i}>
              <div className="group relative bg-slate-800/30 backdrop-blur-sm border border-slate-700/40 rounded-xl sm:rounded-2xl p-5 sm:p-6 hover:border-red-500/30 transition-all duration-300 h-full flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0">
                  <problem.icon className="w-5 h-5 text-red-400" />
                </div>
                <p className="text-sm sm:text-base font-medium text-slate-300 leading-snug">{problem.title}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
