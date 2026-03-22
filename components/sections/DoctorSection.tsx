"use client";

import { motion } from "framer-motion";
import { GraduationCap, Stethoscope, Lightbulb, Microscope } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const credentials = [
  {
    icon: GraduationCap,
    label: "Academic title",
    value: "PhD · Associate Professor",
  },
  {
    icon: Stethoscope,
    label: "Specialisation",
    value: "Orthopaedic Traumatology & Reconstructive Surgery",
  },
  {
    icon: Lightbulb,
    label: "Clinical focus",
    value: "Complex bone defects · 3D titanium implants · Blast injuries",
  },
  {
    icon: Microscope,
    label: "Research",
    value: "Combat trauma · Infection management · Personal protection",
  },
];

export function DoctorSection() {
  return (
    <section
      id="doctor"
      className="relative z-0 py-20 md:py-28 bg-white overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 90% 50%, rgba(14,165,233,0.05) 0%, transparent 70%)",
        }}
      />
      <div className="absolute inset-0 bg-grid-slate pointer-events-none" />

      <div className="section-container relative z-10">
        <AnimatedSection>
          <SectionHeader
            label="About the Developer"
            title={
              <>
                The surgeon behind{" "}
                <span className="text-brand-blue">CITadel</span>
              </>
            }
            description="CITadel was developed by a practising orthopaedic traumatologist who encountered the limitations of existing solutions in the operating theatre — and set out to engineer a better one."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Left: Avatar */}
          <AnimatedSection direction="left" className="lg:col-span-2">
            <div className="relative flex justify-center lg:justify-start">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] sm:w-[280px] h-[200px] sm:h-[280px] rounded-full border border-brand-sky/15" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] sm:w-[320px] h-[240px] sm:h-[320px] rounded-full border border-brand-blue/8" />

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative w-[180px] sm:w-[240px] h-[180px] sm:h-[240px] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50 via-slate-100 to-sky-50 border border-slate-100 shadow-lg"
              >
                <img
                  src="/citadel-landing/doctor-photo.png"
                  alt="Dr. Maksym Baida"
                  className="w-full h-full object-cover"
                />

                <div className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 border border-slate-100">
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider">Institution</div>
                  <div className="text-xs font-semibold text-brand-blue leading-tight">
                    Bogomolets National Medical University
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="absolute -top-2 sm:top-0 right-0 sm:right-8 lg:right-0 bg-white border border-brand-blue/15 rounded-lg sm:rounded-xl px-2 sm:px-3 py-1.5 sm:py-2 shadow-md"
              >
                <div className="text-[10px] text-slate-400 uppercase tracking-wider">Experience</div>
                <div className="text-sm font-bold text-slate-900">15+ years</div>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Right: Bio */}
          <AnimatedSection direction="right" className="lg:col-span-3">
            <div className="space-y-6">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <Badge variant="sky" className="text-xs">Lead Inventor</Badge>
                  <Badge variant="slate" className="text-xs">PhD</Badge>
                  <Badge variant="slate" className="text-xs">Associate Professor</Badge>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-1">
                  Maksym Baida
                </h3>
                <p className="text-brand-sky font-medium text-sm">
                  Orthopaedic Traumatologist · Bogomolets National Medical University, Kyiv
                </p>
              </div>

              <div className="text-slate-600 leading-relaxed text-sm md:text-base">
                <p>
                  Over 15 years of clinical practice in traumatology and
                  reconstructive orthopaedics, specialising in limb
                  reconstruction for complex bone defects — including those
                  caused by blast injuries, high-energy trauma, and oncologic
                  resection.
                </p>

                <Accordion type="single" collapsible className="mt-2">
                  <AccordionItem value="bio-more" className="border-b-0">
                    <AccordionTrigger className="py-3 text-sm text-teal-600 hover:text-teal-700 font-medium justify-start gap-2">
                      Read more
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4 text-slate-600">
                        <p>
                          Associate Professor in the Department of Surgery,
                          Anaesthesiology and Intensive Care at the Institute of
                          Postgraduate Education, Bogomolets National Medical
                          University, Kyiv, Ukraine. Active researcher in blast injury
                          biomechanics and the development of individual antibacterial
                          spacers and 3D-printed titanium constructs for complex
                          reconstructive cases.
                        </p>
                        <p>
                          CITadel was born from a direct clinical problem: the absence
                          of a reliable internal stabilisation option for patients who
                          needed a PMMA spacer and staged reconstruction but could not
                          tolerate prolonged external fixation.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              {/* Credentials grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {credentials.map((cred, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
                    className="flex items-start gap-2 sm:gap-3 bg-slate-50 border border-slate-100 rounded-lg sm:rounded-xl p-3 sm:p-4"
                  >
                    <div className="w-7 sm:w-8 h-7 sm:h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                      <cred.icon className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-brand-blue" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-[9px] sm:text-[10px] text-slate-400 uppercase tracking-wider font-medium mb-0.5">
                        {cred.label}
                      </div>
                      <div className="text-[11px] sm:text-xs font-semibold text-slate-700 break-words">
                        {cred.value}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Quote */}
              <div className="border-l-2 border-brand-sky pl-4 sm:pl-5 py-1">
                <p className="text-slate-500 text-xs sm:text-sm italic leading-relaxed">
                  &ldquo;The idea for CITadel came directly from the operating
                  theatre — from patients who needed a spacer, couldn&apos;t
                  tolerate an external fixator, and had no good internal option.
                  We built the system that should have existed already.&rdquo;
                </p>
                <p className="text-xs text-slate-400 mt-2 font-medium">
                  — Maksym Baida, PhD
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
