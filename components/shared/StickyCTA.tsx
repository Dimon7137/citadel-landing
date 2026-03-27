"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";

export function StickyCTA() {
  const [ctaVisible, setCtaVisible] = useState(false);
  const [scrolledDown, setScrolledDown] = useState(false);
  const { t } = useI18n();

  useEffect(() => {
    const hero = document.getElementById("hero");
    const contact = document.getElementById("contact");
    const partnership = document.getElementById("partnership");
    if (!hero || !contact) return;
    let heroVisible = true;
    let contactVisible = false;
    let partnershipVisible = false;
    const update = () => {
      setScrolledDown(!heroVisible);
      setCtaVisible(!heroVisible && !contactVisible && !partnershipVisible);
    };
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target.id === "hero") heroVisible = entry.isIntersecting;
          if (entry.target.id === "contact") contactVisible = entry.isIntersecting;
          if (entry.target.id === "partnership") partnershipVisible = entry.isIntersecting;
        });
        update();
      },
      { threshold: 0.1 }
    );
    observer.observe(hero);
    observer.observe(contact);
    if (partnership) observer.observe(partnership);
    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-4 inset-x-4 sm:inset-x-auto sm:right-6 sm:bottom-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {ctaVisible && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}>
            <Button size="lg" onClick={scrollToContact}
              className="w-full sm:w-auto bg-teal-500 hover:bg-teal-400 text-white font-semibold shadow-[0_0_30px_rgba(14,165,169,0.3)] hover:shadow-[0_0_40px_rgba(14,165,169,0.5)] transition-all group">
              {t.cta.requestMeeting}
              <ArrowRight className="ml-1.5 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {scrolledDown && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.25 }}
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="w-10 h-10 rounded-full bg-slate-800/80 border border-slate-600/50 text-slate-400 hover:text-teal-400 hover:border-teal-500/40 hover:bg-slate-700/80 backdrop-blur-sm flex items-center justify-center transition-all shadow-lg"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
