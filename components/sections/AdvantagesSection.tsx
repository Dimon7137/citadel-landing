"use client";

import { Shield, Zap, Wrench, Activity, FlaskConical, BarChart3 } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

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
    <section id="advantages" className="relative z-0 py-20 md:py-28 bg-white overflow-hidden">
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

        <AnimatedSection delay={0.1}>
          <Accordion type="single" collapsible defaultValue="item-0" className="max-w-3xl mx-auto">
            {advantages.map((adv, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b border-slate-200/60">
                <AccordionTrigger className="py-5 hover:text-teal-600 gap-3 text-left">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center shrink-0 shadow-sm">
                      <adv.icon className="w-4 h-4 text-white" strokeWidth={1.75} />
                    </div>
                    <span className="text-sm sm:text-base font-semibold text-slate-900">{adv.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed pl-12">{adv.description}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedSection>

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
