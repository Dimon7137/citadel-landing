"use client";

import { Separator } from "@/components/ui/separator";
import { useI18n } from "@/lib/i18n";
import { NAV_KEYS, CONTACT_EMAIL, CONTACT_PHONE } from "@/lib/constants";

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="bg-[#080e1a] text-slate-400 relative overflow-hidden">
      <div className="absolute inset-0 bg-surgical-grid pointer-events-none opacity-40" />
      <div className="section-container py-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-teal-500 flex items-center justify-center shadow-sm shadow-teal-500/30">
                <svg width="16" height="16" viewBox="0 0 44 44" fill="none">
                  <text x="22" y="30" textAnchor="middle" fontFamily="system-ui,sans-serif" fontWeight="800" fontSize="26" fill="white">CT</text>
                </svg>
              </div>
              <div>
                <div className="text-sm font-bold text-white">{t.brand.name}</div>
                <div className="text-[10px] text-slate-600 uppercase tracking-wider">{t.brand.tagline}</div>
              </div>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed max-w-xs">{t.footer.description}</p>
            <div className="mt-5 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-teal-400 shadow-[0_0_8px_rgba(14,165,169,0.5)]" />
              <span className="text-xs text-slate-600 font-medium">{t.footer.statusBadge}</span>
            </div>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-600 mb-5">{t.footer.navTitle}</h4>
            <ul className="space-y-3">
              {NAV_KEYS.map((link) => (
                <li key={link.href}><a href={link.href} className="text-sm text-slate-500 hover:text-teal-400 transition-colors">{t.nav[link.key]}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-600 mb-5">{t.footer.contactTitle}</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><span className="text-slate-600 text-xs uppercase tracking-wider block mb-0.5">{t.contact.emailLabel}</span>{CONTACT_EMAIL}</li>
              <li><span className="text-slate-600 text-xs uppercase tracking-wider block mb-0.5">{t.contact.phoneLabel}</span>{CONTACT_PHONE}</li>
              <li><span className="text-slate-600 text-xs uppercase tracking-wider block mb-0.5">{t.footer.collaborationLabel}</span>{t.footer.collaborationValue}</li>
            </ul>
          </div>
        </div>
        <Separator className="my-10 bg-slate-800" />
        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-2 sm:gap-4 text-center sm:text-left">
          <p className="text-[10px] sm:text-xs text-slate-700">&copy; {new Date().getFullYear()} {t.footer.copyright}</p>
          <p className="text-[10px] sm:text-xs text-slate-700">{t.footer.institution}</p>
        </div>
      </div>
    </footer>
  );
}
