"use client";

import { Check } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/shared/AnimatedSection";
import { useI18n } from "@/lib/i18n";

export function WhatChangesSection() {
  const { t } = useI18n();

  return (
    <section id="what-changes" className="relative z-0 py-20 md:py-28 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate pointer-events-none" />

      <div className="section-container relative z-10">
        <AnimatedSection>
          <SectionHeader label={t.whatChanges.label}
            title={<>{t.whatChanges.title}{" "}<span className="text-teal-600">{t.whatChanges.titleHighlight}</span></>} />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <p className="text-xs font-semibold text-teal-600 uppercase tracking-widest text-center mb-8">
            {t.whatChanges.subtitle}
          </p>
        </AnimatedSection>

        <StaggerContainer className="max-w-2xl mx-auto space-y-4">
          {t.whatChanges.items.map((item, i) => (
            <StaggerItem key={i}>
              <div className="flex items-start gap-4 bg-teal-50 border border-teal-200 rounded-xl px-5 py-4">
                <div className="w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-white" />
                </div>
                <span className="text-sm sm:text-base text-slate-700 leading-snug">{item}</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
