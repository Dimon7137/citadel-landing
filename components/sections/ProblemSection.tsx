"use client";

import { AlertTriangle, Clock, Link2Off, ShieldX } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/shared/AnimatedSection";

const problems = [
  {
    icon: ShieldX,
    title: "High Infection & Mechanical Complication Rates",
    description:
      "Critical long-bone defects after blast injury, infection, or oncologic resection carry persistently high rates of implant failure and deep infection.",
  },
  {
    icon: Link2Off,
    title: "External Fixation Causes Patient Burden",
    description:
      "External fixators cause significant patient discomfort, restrict mobility, and lead to pin-tract infections with prolonged use.",
  },
  {
    icon: AlertTriangle,
    title: "No Internal Solution for Staged Reconstruction",
    description:
      "Internal fixation systems available today are not optimised for temporary stabilisation combined with PMMA spacer support.",
  },
  {
    icon: Clock,
    title: "Long Hospitalisation & High Healthcare Costs",
    description:
      "Current management results in prolonged hospital stays, multiple re-operations, and substantial economic burden.",
  },
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
            title={<>Critical long-bone defects remain a{" "}<span className="text-teal-400">major unmet clinical need</span></>}
            description="Current solutions fail to address the combined challenge of mechanical stability, infection control, and staged reconstruction."
            light
          />
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {problems.map((problem, i) => (
            <StaggerItem key={i}>
              <div className="group relative bg-slate-800/30 backdrop-blur-sm border border-slate-700/40 rounded-xl sm:rounded-2xl p-5 sm:p-7 hover:border-red-500/30 transition-all duration-300 gradient-border-teal h-full">
                <div className="w-9 sm:w-11 h-9 sm:h-11 rounded-lg sm:rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-3 sm:mb-5">
                  <problem.icon className="w-4 sm:w-5 h-4 sm:h-5 text-red-400" />
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-white mb-2 sm:mb-3 leading-snug">{problem.title}</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{problem.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimatedSection delay={0.3} className="mt-14 text-center">
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-slate-800/30 border border-slate-700/40 rounded-full px-4 sm:px-6 py-2.5 sm:py-3">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inset-0 rounded-full bg-teal-400 animate-pulse-ring" />
              <span className="relative rounded-full h-2 w-2 bg-teal-400" />
            </span>
            <span className="text-xs sm:text-sm text-slate-400">
              These limitations prompted the development of CITadel
            </span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
