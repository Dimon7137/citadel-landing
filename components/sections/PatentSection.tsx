"use client";

import { FileText, BookOpen, Rocket } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const validationCards = [
  { icon: FileText, title: "Development Status", description: "TRL 4–5 validated through bench-level biomechanical and fatigue testing.", items: [{ label: "System maturity", value: "TRL 4–5" }, { label: "Biomechanical testing", value: "Completed" }, { label: "Fatigue testing", value: "Completed" }, { label: "Clinical application", value: "Early cases" }] },
  { icon: BookOpen, title: "Publications & Research", description: "Peer-reviewed poster at an international orthopaedic conference.", items: [{ label: "Lead author", value: "M. Baida, PhD" }, { label: "Institution", value: "Bogomolets NMU" }, { label: "Format", value: "Conference poster" }, { label: "Full paper", value: "In preparation" }] },
  { icon: Rocket, title: "EIC Accelerator Pathway", description: "Targeting CE/MDR compliance, scale-up, and structured pilot deployment.", items: [{ label: "Programme", value: "EIC Accelerator" }, { label: "Next milestone", value: "TRL 6" }, { label: "Regulatory target", value: "CE / MDR" }, { label: "Collaboration", value: "Open" }] },
];

export function PatentSection() {
  return (
    <section id="patent" className="relative z-0 py-20 md:py-28 bg-[#0f172a] overflow-hidden">
      <div className="absolute inset-0 bg-surgical-grid pointer-events-none" />
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      <div className="section-container relative z-10">
        <AnimatedSection>
          <SectionHeader label="Research & Validation" title={<>Bench-validated and{" "}<span className="text-teal-400">EIC-ready</span></>} description="A validated system with published mechanical data, early clinical experience, and a clear pathway to market entry." light />
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="mb-12">
          <div className="relative bg-gradient-to-br from-teal-500/15 to-cyan-500/5 rounded-xl sm:rounded-2xl p-5 sm:p-8 md:p-10 overflow-hidden border border-teal-500/20">
            <div className="absolute inset-0 bg-surgical-grid opacity-30 pointer-events-none" />
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
              <div>
                <Badge className="bg-teal-500/15 text-teal-400 border-teal-500/25 text-[10px] sm:text-xs mb-3 sm:mb-4">Published Research</Badge>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
                  Temporary Stabilization of Critical Bone Defects Using a Modular Intramedullary Fixator with HA+Ag Coating
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Bench validation and early clinical experience demonstrating superior mechanical performance in all tested parameters.
                </p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {["Higher axial stiffness", "Improved bending resistance", "Stable torsion", "No migration"].map((tag) => (
                    <span key={tag} className="text-[10px] sm:text-xs font-medium bg-teal-500/10 text-teal-300 border border-teal-500/20 rounded-full px-2 sm:px-3 py-0.5 sm:py-1">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="flex justify-center md:justify-end">
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/40 rounded-xl sm:rounded-2xl p-5 sm:p-7 min-w-[200px] sm:min-w-[220px]">
                  <div className="text-xs font-medium text-slate-500 uppercase tracking-widest mb-4">Research Team</div>
                  <div className="space-y-3">
                    {[{ name: "Maksym Baida", role: "Lead author, PhD" }, { name: "Rostyslav Zilnyk", role: "Co-author" }, { name: "Vladislav Povkh", role: "Co-author" }, { name: "Serhii Derkach", role: "Co-author" }].map((a) => (
                      <div key={a.name} className="flex items-center gap-2.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-teal-400 shadow-[0_0_6px_rgba(14,165,169,0.6)]" />
                        <div>
                          <div className="text-sm font-semibold text-white">{a.name}</div>
                          <div className="text-xs text-slate-400">{a.role}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-slate-700/40">
                    <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">Institution</div>
                    <div className="text-xs text-white font-medium">Bogomolets National Medical University</div>
                    <div className="text-xs text-slate-400">Kyiv, Ukraine</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            {validationCards.map((card, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b border-slate-700/40">
                <AccordionTrigger className="py-5 hover:text-teal-400 gap-3 text-left">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center shrink-0">
                      <card.icon className="w-4 h-4 text-teal-400" />
                    </div>
                    <div>
                      <span className="text-sm sm:text-base font-semibold text-white">{card.title}</span>
                      <p className="text-xs text-slate-400 font-normal mt-0.5">{card.description}</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pl-12 space-y-2.5">
                    {card.items.map((item) => (
                      <div key={item.label} className="flex items-center justify-between text-[10px] sm:text-xs">
                        <span className="text-slate-500">{item.label}</span>
                        <span className="font-medium text-slate-300">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedSection>
      </div>
    </section>
  );
}
