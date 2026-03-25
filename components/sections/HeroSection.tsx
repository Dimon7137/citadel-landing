"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative z-0 min-h-screen flex items-center overflow-hidden bg-[#0a1628] pt-20 pb-16"
    >
      {/* Surgical grid */}
      <div className="absolute inset-0 bg-surgical-grid pointer-events-none" />

      {/* Spotlight glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 45% at 50% 55%, rgba(14,165,169,0.12) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 35% 30% at 50% 60%, rgba(255,255,255,0.03) 0%, transparent 50%)",
        }}
      />

      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      <div className="section-container w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* LEFT: Text */}
          <div className="text-left">
            {/* Positioning line */}
            <motion.p
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xs sm:text-sm text-teal-300/70 font-medium tracking-wide mb-5"
            >
              A new category between external fixation and definitive reconstruction
            </motion.p>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.08 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-6xl font-bold tracking-tight leading-[1.1] mb-6 text-white"
            >
              Temporary Internal Stabilisation for{" "}
              <span className="text-teal-400 glow-text-teal">Critical Long-Bone Defects</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.18 }}
              className="text-base sm:text-lg text-slate-400 leading-relaxed mb-8 max-w-xl"
            >
              A modular intramedullary system designed for staged reconstruction,
              PMMA spacer support, and infection-conscious temporary fixation.
            </motion.p>

            {/* Badges */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {["TRL 4–5", "Bench validated", "PMMA compatible", "Modular system"].map((badge) => (
                <span
                  key={badge}
                  className="text-xs font-medium text-teal-300/80 border border-teal-500/20 rounded-full px-3.5 py-1.5 bg-teal-900/20"
                >
                  {badge}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.32 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Button
                size="xl"
                onClick={scrollToContact}
                className="bg-teal-500 hover:bg-teal-400 text-white rounded-lg px-8 shadow-[0_0_30px_rgba(14,165,169,0.25)] hover:shadow-[0_0_40px_rgba(14,165,169,0.4)] transition-all group"
              >
                Request Meeting
                <ArrowRight className="ml-1.5 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="xl"
                variant="ghost"
                disabled
                className="rounded-lg border border-slate-600 text-slate-400 px-8 cursor-not-allowed opacity-60"
                title="Coming soon"
              >
                <Download className="mr-1.5 w-4 h-4" />
                Download Teaser (PDF)
              </Button>
            </motion.div>
          </div>

          {/* RIGHT: Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 32 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
            className="relative flex items-center justify-center order-first lg:order-last"
          >
            {/* Glow orb */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[60%] h-[60%] rounded-full bg-teal-500/15 blur-[100px] animate-pulse-glow" />
            </div>

            <img
              src="/citadel-landing/bone-photo.png"
              alt="CITadel — modular intramedullary fixator for critical long-bone defects"
              className="relative z-10 max-h-[500px] lg:max-h-[580px] object-contain drop-shadow-[0_0_50px_rgba(14,165,169,0.2)]"
            />
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0f172a] to-transparent pointer-events-none" />
    </section>
  );
}
