"use client";

import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

export function DoctorSection() {
  return (
    <section
      id="doctor"
      className="relative z-0 py-20 md:py-28 bg-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-slate pointer-events-none" />

      <div className="section-container relative z-10">
        <AnimatedSection>
          <SectionHeader
            label="About"
            title={<>About the{" "}<span className="text-brand-blue">inventor</span></>}
          />
        </AnimatedSection>

        <div className="flex flex-col sm:flex-row items-center gap-8 max-w-2xl mx-auto">
          <AnimatedSection direction="left">
            <div className="relative w-[160px] sm:w-[200px] h-[160px] sm:h-[200px] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50 via-slate-100 to-sky-50 border border-slate-100 shadow-lg shrink-0">
              <img
                src="/citadel-landing/doctor-photo.png"
                alt="Dr. Maksym Baida"
                className="w-full h-full object-cover"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-1">
                Maksym Baida, PhD
              </h3>
              <p className="text-brand-sky font-medium text-sm mb-4">
                Orthopaedic Trauma Surgeon · Developer of CITadel
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Over 15 years of clinical practice in traumatology and reconstructive
                orthopaedics. Associate Professor at Bogomolets National Medical University, Kyiv.
                CITadel was born from a direct clinical need — the absence of a reliable internal
                stabilisation option for patients requiring staged reconstruction.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
