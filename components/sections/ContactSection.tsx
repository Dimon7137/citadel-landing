"use client";

import { useState } from "react";
import { Mail, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { useI18n } from "@/lib/i18n";
import { CONTACT_EMAIL, CONTACT_PHONE } from "@/lib/constants";

export function ContactSection() {
  const { t } = useI18n();
  const [form, setForm] = useState({ name: "", email: "", organisation: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const contactInfo = [
    { icon: Mail, label: t.contact.emailLabel, value: CONTACT_EMAIL },
    { icon: Phone, label: t.contact.phoneLabel, value: CONTACT_PHONE },
  ];

  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "625b2da1-1c03-47aa-aea1-0e47d50b9b18",
          subject: `CITadel enquiry from ${form.name}`,
          from_name: form.name,
          email: form.email,
          organisation: form.organisation,
          message: form.message,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="relative z-0 py-20 md:py-28 bg-[#0f172a] overflow-hidden">
      <div className="absolute inset-0 bg-surgical-grid pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 50% 60% at 10% 50%, rgba(14,165,169,0.06) 0%, transparent 70%)" }} />
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      <div className="section-container relative z-10">
        <AnimatedSection>
          <SectionHeader label={t.contact.label}
            title={<>{t.contact.title}{" "}<span className="text-teal-400">{t.contact.titleHighlight}</span></>}
            description={t.contact.description} light />
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12 max-w-6xl mx-auto">
          <AnimatedSection direction="left" className="lg:col-span-2 space-y-4">
            {contactInfo.map((item, i) => (
              <div key={item.value} className="flex items-center gap-3 bg-slate-800/30 border border-slate-700/40 rounded-lg sm:rounded-xl p-4">
                <div className="w-9 h-9 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center shrink-0">
                  <item.icon className="w-4 h-4 text-teal-400" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-wider font-medium mb-0.5">{item.label}</div>
                  <div className="text-sm font-semibold text-white">{item.value}</div>
                </div>
              </div>
            ))}
          </AnimatedSection>

          <AnimatedSection direction="right" className="lg:col-span-3">
            <div className="bg-slate-800/30 border border-slate-700/40 rounded-xl sm:rounded-2xl p-5 sm:p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{t.contact.successTitle}</h3>
                  <p className="text-sm text-slate-400 max-w-sm">{t.contact.successText}</p>
                  <Button variant="outline" className="mt-6 text-sm border-slate-700 text-slate-300 hover:text-white hover:border-teal-500/50"
                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", organisation: "", message: "" }); }}>
                    {t.cta.sendAnother}
                  </Button>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-white mb-1">{t.contact.formTitle}</h3>
                    <p className="text-sm text-slate-400">{t.contact.formSubtitle}</p>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-medium text-slate-400 uppercase tracking-wider">{t.contact.nameLabel}</label>
                        <Input placeholder={t.contact.namePlaceholder} value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} required
                          className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-600 focus:border-teal-500" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-medium text-slate-400 uppercase tracking-wider">{t.contact.emailFieldLabel}</label>
                        <Input type="email" placeholder={t.contact.emailPlaceholder} value={form.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} required
                          className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-600 focus:border-teal-500" />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-400 uppercase tracking-wider">{t.contact.orgLabel}</label>
                      <Input placeholder={t.contact.orgPlaceholder} value={form.organisation} onChange={(e) => setForm((f) => ({ ...f, organisation: e.target.value }))}
                        className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-600 focus:border-teal-500" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-400 uppercase tracking-wider">{t.contact.messageLabel}</label>
                      <Textarea placeholder={t.contact.messagePlaceholder} rows={5} value={form.message} onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))} required
                        className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-600 focus:border-teal-500" />
                    </div>
                    {error && <p className="text-red-400 text-sm">{error}</p>}
                    <div className="pt-2">
                      <Button type="submit" size="lg" disabled={sending}
                        className="w-full bg-teal-500 hover:bg-teal-400 text-white font-semibold shadow-[0_0_30px_rgba(14,165,169,0.2)] hover:shadow-[0_0_40px_rgba(14,165,169,0.35)] transition-all group disabled:opacity-50 disabled:cursor-not-allowed">
                        {sending ? t.cta.sending : t.cta.requestMeeting}
                        {!sending && <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />}
                      </Button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
