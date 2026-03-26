"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";

export function StickyCTA() {
  const [visible, setVisible] = useState(false);
  const { t } = useI18n();

  useEffect(() => {
    const hero = document.getElementById("hero");
    const contact = document.getElementById("contact");
    const partnership = document.getElementById("partnership");
    if (!hero || !contact) return;
    let heroVisible = true;
    let contactVisible = false;
    let partnershipVisible = false;
    const update = () => setVisible(!heroVisible && !contactVisible && !partnershipVisible);
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

  return (
    <AnimatePresence>
      {visible && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }} className="fixed bottom-4 inset-x-4 sm:inset-x-auto sm:right-6 sm:bottom-6 z-50">
          <Button size="lg" onClick={scrollToContact}
            className="w-full sm:w-auto bg-teal-500 hover:bg-teal-400 text-white font-semibold shadow-[0_0_30px_rgba(14,165,169,0.3)] hover:shadow-[0_0_40px_rgba(14,165,169,0.5)] transition-all group">
            {t.cta.requestMeeting}
            <ArrowRight className="ml-1.5 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
