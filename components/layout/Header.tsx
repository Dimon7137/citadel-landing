"use client";

import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useI18n } from "@/lib/i18n";
import { LanguageSwitcher } from "@/components/shared/LanguageSwitcher";
import { NAV_KEYS } from "@/lib/constants";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { t } = useI18n();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 150);
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-[999] transition-[background-color,border-color,box-shadow] duration-300 transform-gpu before:absolute before:left-0 before:right-0 before:bottom-full before:h-[env(safe-area-inset-top,100px)] before:bg-[#0a1628]",
        scrolled
          ? "bg-[#0a1628] border-b border-slate-700/40 shadow-lg shadow-black/20"
          : "bg-[#0a1628]"
      )}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-18">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 group"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <div className="w-8 h-8 rounded-lg bg-teal-500 flex items-center justify-center shadow-sm shadow-teal-500/30 group-hover:shadow-teal-500/50 transition-shadow">
              <svg width="16" height="16" viewBox="0 0 44 44" fill="none">
                <text x="22" y="30" textAnchor="middle" fontFamily="system-ui,sans-serif" fontWeight="800" fontSize="26" fill="white">CT</text>
              </svg>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-sm font-bold text-white tracking-tight">
                {t.brand.name}
              </span>
              <span className="text-[10px] text-slate-500 font-medium tracking-wider uppercase">
                {t.brand.tagline}
              </span>
            </div>
          </a>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {NAV_KEYS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-2.5 py-2 text-[13px] font-medium text-slate-400 rounded-md hover:text-teal-400 hover:bg-teal-500/5 transition-all duration-200 whitespace-nowrap"
              >
                {t.nav[link.key]}
              </a>
            ))}
          </nav>

          {/* Desktop CTA + Language */}
          <div className="hidden lg:flex items-center gap-2">
            <LanguageSwitcher />
            <Button
              size="sm"
              onClick={() => handleNavClick("#contact")}
              className="bg-teal-500 hover:bg-teal-400 text-white shadow-sm shadow-teal-500/20 text-sm px-5"
            >
              {t.cta.requestMeeting}
            </Button>
          </div>

          {/* Mobile: language + menu */}
          <div className="flex lg:hidden items-center gap-1">
            <LanguageSwitcher />
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-slate-400 hover:text-white hover:bg-white/10 min-h-[44px] min-w-[44px]"
                  aria-label="Open menu"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[340px] p-0 bg-[#0f172a] border-slate-700">
                <SheetTitle className="sr-only">Navigation menu</SheetTitle>
                <div className="flex flex-col h-full">
                  <a
                    href="#"
                    onClick={(e) => { e.preventDefault(); setOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                    className="flex items-center gap-2.5 p-6 border-b border-slate-700/50 cursor-pointer"
                  >
                    <div className="w-8 h-8 rounded-lg bg-teal-500 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <line x1="12" y1="2" x2="12" y2="22" />
                        <circle cx="12" cy="8" r="2.5" fill="currentColor" stroke="none" />
                        <circle cx="12" cy="16" r="2.5" fill="currentColor" stroke="none" />
                        <line x1="8" y1="11.5" x2="16" y2="11.5" strokeWidth="1.5" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">{t.brand.name}</div>
                      <div className="text-[10px] text-slate-500 uppercase tracking-wider">{t.brand.tagline}</div>
                    </div>
                  </a>
                  <nav className="flex flex-col gap-1 p-4 flex-1">
                    {NAV_KEYS.map((link) => (
                      <a key={link.href} href={link.href}
                        onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                        className="flex items-center px-4 py-3 text-sm font-medium text-slate-300 rounded-lg hover:text-teal-400 hover:bg-teal-500/5 transition-colors"
                      >
                        {t.nav[link.key]}
                      </a>
                    ))}
                  </nav>
                  <div className="p-4 border-t border-slate-700/50">
                    <Button className="w-full bg-teal-500 hover:bg-teal-400 text-white" onClick={() => handleNavClick("#contact")}>
                      {t.cta.requestMeeting}
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
