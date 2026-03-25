"use client";

import { useState } from "react";
import { Send, Mail, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

const contactInfo = [
  { icon: Mail, label: "Email", value: "meredian18@gmail.com" },
  { icon: Phone, label: "Phone", value: "+380 66 766 7094" },
];

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", organisation: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `CITadel enquiry from ${form.name}`;
    const body = `Name: ${form.name}\nEmail: ${form.email}\nOrganisation: ${form.organisation}\n\n${form.message}`;
    window.location.href = `mailto:meredian18@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative z-0 py-20 md:py-28 bg-[#0f172a] overflow-hidden">
      <div className="absolute inset-0 bg-surgical-grid pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 50% 60% at 10% 50%, rgba(14,165,169,0.06) 0%, transparent 70%)" }} />
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      <div className="section-container relative z-10">
        <AnimatedSection>
          <SectionHeader
            label="Contact"
            title={<>Contact and{" "}<span className="text-teal-400">inquiries</span></>}
            description="CITadel is open for collaboration with industry partners, clinical centres, and strategic stakeholders."
            light
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12">
          <AnimatedSection direction="left" className="lg:col-span-2 space-y-4">
            {contactInfo.map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-slate-800/30 border border-slate-700/40 rounded-lg sm:rounded-xl p-4">
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
                  <h3 className="text-lg font-semibold text-white mb-2">Message sent</h3>
                  <p className="text-sm text-slate-400 max-w-sm">We will get back to you within one business day.</p>
                  <Button variant="outline" className="mt-6 text-sm border-slate-700 text-slate-300 hover:text-white hover:border-teal-500/50"
                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", organisation: "", message: "" }); }}>
                    Send another message
                  </Button>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-white mb-1">Send us a message</h3>
                    <p className="text-sm text-slate-400">Describe your interest — we respond within one business day</p>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-medium text-slate-400 uppercase tracking-wider">Name *</label>
                        <Input placeholder="Your name" value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} required
                          className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-600 focus:border-teal-500" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-medium text-slate-400 uppercase tracking-wider">Email *</label>
                        <Input type="email" placeholder="email@organisation.com" value={form.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} required
                          className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-600 focus:border-teal-500" />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-400 uppercase tracking-wider">Organisation</label>
                      <Input placeholder="Company, hospital, university..." value={form.organisation} onChange={(e) => setForm((f) => ({ ...f, organisation: e.target.value }))}
                        className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-600 focus:border-teal-500" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-400 uppercase tracking-wider">Message *</label>
                      <Textarea placeholder="Describe your interest..." rows={5} value={form.message} onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))} required
                        className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-600 focus:border-teal-500" />
                    </div>
                    <div className="pt-2">
                      <Button type="submit" size="lg" disabled={sending}
                        className="w-full bg-teal-500 hover:bg-teal-400 text-white font-semibold shadow-[0_0_30px_rgba(14,165,169,0.2)] hover:shadow-[0_0_40px_rgba(14,165,169,0.35)] transition-all group disabled:opacity-50 disabled:cursor-not-allowed">
                        {sending ? "Sending..." : "Request Meeting"}
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
