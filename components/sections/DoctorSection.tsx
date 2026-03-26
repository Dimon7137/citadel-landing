"use client";

import { motion } from "framer-motion";
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

        <AnimatedSection delay={0.1}>
          <div className="bg-white border border-slate-200 rounded-3xl shadow-xl shadow-slate-200/50 overflow-hidden max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row">
              {/* Photo */}
              <div className="md:w-2/5 relative">
                <img src="/citadel-landing/doctor-photo.png" alt={t.doctor.imageAlt}
                  className="w-full h-full object-cover min-h-[300px] md:min-h-[420px]" />
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/30 to-transparent md:hidden" />
              </div>
              {/* Content */}
              <div className="md:w-3/5 p-8 md:p-10 lg:p-12 flex flex-col justify-center">
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1">{t.doctor.name}</h3>
                <p className="text-brand-sky font-semibold text-sm uppercase tracking-wider mb-6">{t.doctor.role}</p>

                <p className="text-base text-slate-600 leading-relaxed mb-8">{t.doctor.bio}</p>

                {/* Stats badges */}
                <div className="grid grid-cols-3 gap-3">
                  {t.doctor.stats.map((stat, i) => (
                    <motion.div key={stat.value} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }} transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
                      className={`border rounded-xl px-4 py-3 text-center ${i === 2 ? "bg-teal-50 border-teal-200" : "bg-slate-50 border-slate-200"}`}>
                      <div className={`text-xl font-bold ${i === 2 ? "text-teal-700" : "text-slate-900"}`}>{stat.value}</div>
                      <div className={`text-[11px] uppercase tracking-wider font-medium ${i === 2 ? "text-teal-600" : "text-slate-500"}`}>{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
            {/* Bottom accent bar */}
            <div className="h-1.5 bg-gradient-to-r from-brand-blue via-teal-500 to-brand-sky" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
