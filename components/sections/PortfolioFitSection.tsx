"use client";

import { Bone, ShieldAlert, Wrench, ArrowUpRight, Layers, Zap, Scissors } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/shared/AnimatedSection";
import { useI18n } from "@/lib/i18n";

const fitsIcons = [Bone, ShieldAlert, Wrench];
const extendsIcons = [ArrowUpRight, Layers];
const marketIcons = [ShieldAlert, Bone, Zap, Scissors];

export function PortfolioFitSection() {
  const { t } = useI18n();

  const columns = [
    {
      label: t.portfolioFit.fitsLabel,
      items: t.portfolioFit.fitsItems,
      icons: fitsIcons,
    },
    {
      label: t.portfolioFit.extendsLabel,
      items: t.portfolioFit.extendsItems,
      icons: extendsIcons,
    },
    {
      label: t.marketRelevance.label,
      items: t.marketRelevance.items,
      icons: marketIcons,
    },
  ];

  return (
    <section id="portfolio-fit" className="relative z-0 py-20 md:py-28 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate pointer-events-none" />

      <div className="section-container relative z-10">
        <AnimatedSection>
          <SectionHeader label={t.portfolioFit.label}
            title={<>{t.portfolioFit.title}{" "}<span className="text-teal-600">{t.portfolioFit.titleHighlight}</span></>} />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {columns.map((col, colIndex) => (
            <AnimatedSection key={colIndex} delay={colIndex * 0.1}>
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 h-full">
                <p className="text-xs font-semibold text-teal-600 uppercase tracking-widest mb-6">
                  {col.label}
                </p>
                <StaggerContainer className="space-y-3">
                  {col.items.map((item, i) => {
                    const Icon = col.icons[i];
                    return (
                      <StaggerItem key={i}>
                        <div className="flex items-center gap-3 bg-white border border-slate-200 rounded-xl px-4 py-3 hover:border-teal-300 transition-colors">
                          <div className="w-8 h-8 rounded-lg bg-teal-50 border border-teal-200 flex items-center justify-center shrink-0">
                            <Icon className="w-4 h-4 text-teal-600" />
                          </div>
                          <span className="text-sm font-medium text-slate-700">{item}</span>
                        </div>
                      </StaggerItem>
                    );
                  })}
                </StaggerContainer>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4} className="mt-8">
          <div className="bg-teal-50 border border-teal-200 rounded-xl px-6 py-4 max-w-3xl mx-auto text-center">
            <p className="text-sm text-slate-600">{t.marketRelevance.text}</p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
