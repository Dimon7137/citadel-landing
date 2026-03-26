"use client";

import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { useI18n } from "@/lib/i18n";

export function DoctorSection() {
  const { t } = useI18n();

  return (
    <section id="doctor" className="relative z-0 py-20 md:py-28 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate pointer-events-none" />

      <div className="section-container relative z-10">
        <AnimatedSection>
          <SectionHeader label={t.doctor.label}
            title={<>{t.doctor.title}{" "}<span className="text-brand-blue">{t.doctor.titleHighlight}</span></>} />
        </AnimatedSection>

        <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-10 md:gap-14 max-w-4xl mx-auto">
          <AnimatedSection direction="left">
            <div className="relative w-[240px] sm:w-[280px] md:w-[320px] h-[280px] sm:h-[320px] md:h-[380px] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50 via-slate-100 to-sky-50 border border-slate-100 shadow-lg shrink-0">
              <img src="/citadel-landing/doctor-photo.png" alt={t.doctor.imageAlt} className="w-full h-full object-cover" />
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">{t.doctor.name}</h3>
              <p className="text-brand-sky font-medium text-base mb-5">{t.doctor.role}</p>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">{t.doctor.bio}</p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
