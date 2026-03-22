"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";

export function HeroSection() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToSolution = () => {
    document.querySelector("#solution")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative z-0 min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0a1628] pt-20 pb-16"
    >
      {/* Surgical grid */}
      <div className="absolute inset-0 bg-surgical-grid pointer-events-none" />

      {/* Spotlight glow — like operating-room light */}
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

      <div className="section-container w-full flex flex-col items-center text-center">
        {/* Top label with heartbeat */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2.5 text-sm font-medium text-teal-300/80 tracking-wide border border-teal-500/20 rounded-full px-5 py-2 bg-teal-900/20 backdrop-blur-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inset-0 rounded-full bg-teal-400 animate-pulse-ring" />
              <span className="relative rounded-full h-2.5 w-2.5 bg-teal-400 animate-heartbeat" />
            </span>
            Validated Intramedullary Innovation · TRL 4–5
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.08 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] max-w-4xl mb-6 text-white"
        >
          The modular system for{" "}
          <span className="text-teal-400 glow-text-teal">critical bone defects</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.18 }}
          className="text-base sm:text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mb-10"
        >
          Temporary internal stabilisation without external fixation.
          Two-component intramedullary design with selective HA+Ag antibacterial coating.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.28 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-3 w-full sm:w-auto mb-16"
        >
          <Button
            size="xl"
            onClick={scrollToContact}
            className="bg-teal-500 hover:bg-teal-400 text-white rounded-lg px-10 shadow-[0_0_30px_rgba(14,165,169,0.25)] hover:shadow-[0_0_40px_rgba(14,165,169,0.4)] transition-all group"
          >
            Request Information
            <ArrowRight className="ml-1.5 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button
            size="xl"
            variant="ghost"
            onClick={scrollToSolution}
            className="rounded-lg border border-slate-600 text-slate-300 hover:text-white hover:border-teal-500/50 hover:bg-teal-500/5 px-10"
          >
            See the technology
          </Button>
        </motion.div>

        {/* Hero image with leader-line annotations */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 32 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.35 }}
          className="relative w-full max-w-4xl mx-auto"
        >
          {/* Teal glow orb behind image — pulsing */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[35%] h-[55%] rounded-full bg-teal-500/18 blur-[100px] animate-pulse-glow" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[25%] h-[40%] rounded-full bg-teal-400/10 blur-[80px]" />
          </div>

          <div className="relative flex items-center justify-center py-8 sm:py-12">
            {/* Product image — transparent bg, glow drop-shadow */}
            <img
              src="/citadel-landing/bone-photo.png"
              alt="CITadel — modular intramedullary fixator for critical long-bone defects"
              className="relative z-10 max-h-[520px] object-contain drop-shadow-[0_0_50px_rgba(14,165,169,0.2)] drop-shadow-[0_0_100px_rgba(14,165,169,0.08)]"
            />

            {/* Leader line annotations — LEFT side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              className="absolute left-1 sm:left-[5%] top-[12%] z-20 flex items-center gap-0"
            >
              <div className="text-center pr-1 sm:pr-3">
                <div className="text-[8px] sm:text-[10px] text-teal-400/70 font-medium uppercase tracking-widest">
                  Proximal
                </div>
                <div className="text-[10px] sm:text-sm font-bold text-white leading-tight">
                  Nail Component
                </div>
              </div>
              <div className="hidden sm:block w-12 md:w-20 h-px bg-gradient-to-r from-teal-400/60 to-teal-400/20" />
              <div className="w-1.5 h-1.5 rounded-full bg-teal-400 shadow-[0_0_8px_rgba(14,165,169,0.8)] shrink-0" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.15, duration: 0.6 }}
              className="absolute left-1 sm:left-[5%] top-[42%] z-20 flex items-center gap-0"
            >
              <div className="text-center pr-1 sm:pr-3">
                <div className="text-[8px] sm:text-[10px] text-teal-400/70 font-medium uppercase tracking-widest">
                  Zone
                </div>
                <div className="text-[10px] sm:text-sm font-bold text-white leading-tight">
                  PMMA Spacer
                </div>
              </div>
              <div className="hidden sm:block w-12 md:w-20 h-px bg-gradient-to-r from-teal-400/60 to-teal-400/20" />
              <div className="w-1.5 h-1.5 rounded-full bg-teal-400 shadow-[0_0_8px_rgba(14,165,169,0.8)] shrink-0" />
            </motion.div>

            {/* Leader line annotations — RIGHT side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="absolute right-1 sm:right-[5%] top-[28%] z-20 flex items-center gap-0"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-teal-400 shadow-[0_0_8px_rgba(14,165,169,0.8)] shrink-0" />
              <div className="hidden sm:block w-12 md:w-20 h-px bg-gradient-to-l from-teal-400/60 to-teal-400/20" />
              <div className="pl-1 sm:pl-3">
                <div className="text-[8px] sm:text-[10px] text-teal-400/70 font-medium uppercase tracking-widest">
                  Coating
                </div>
                <div className="text-[10px] sm:text-sm font-bold text-white leading-tight">
                  HA+Ag Selective
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.25, duration: 0.6 }}
              className="absolute right-1 sm:right-[5%] top-[60%] z-20 flex items-center gap-0"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-teal-400 shadow-[0_0_8px_rgba(14,165,169,0.8)] shrink-0" />
              <div className="hidden sm:block w-12 md:w-20 h-px bg-gradient-to-l from-teal-400/60 to-teal-400/20" />
              <div className="pl-1 sm:pl-3">
                <div className="text-[8px] sm:text-[10px] text-teal-400/70 font-medium uppercase tracking-widest">
                  Connection
                </div>
                <div className="text-[10px] sm:text-sm font-bold text-white leading-tight">
                  Modular Coupler
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.35, duration: 0.6 }}
              className="absolute right-1 sm:right-[5%] top-[82%] z-20 flex items-center gap-0"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-teal-400 shadow-[0_0_8px_rgba(14,165,169,0.8)] shrink-0" />
              <div className="hidden sm:block w-12 md:w-20 h-px bg-gradient-to-l from-teal-400/60 to-teal-400/20" />
              <div className="pl-1 sm:pl-3">
                <div className="text-[8px] sm:text-[10px] text-teal-400/70 font-medium uppercase tracking-widest">
                  Distal
                </div>
                <div className="text-[10px] sm:text-sm font-bold text-white leading-tight">
                  Nail Component
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.7 }}
          className="mt-8 sm:mt-12 w-full grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 md:gap-12 max-w-3xl border-t border-slate-700/50 pt-6 sm:pt-10"
        >
          {[
            { value: "TRL 4–5", label: "System maturity" },
            { value: "2", label: "Modular components", isNumber: true },
            { value: "HA+Ag", label: "Antibacterial coating" },
            { value: "0", label: "Migration failures", isNumber: true },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-lg sm:text-2xl md:text-3xl font-bold tracking-tight text-white">
                {stat.isNumber ? (
                  <AnimatedCounter value={Number(stat.value)} />
                ) : (
                  <span className="glow-text-teal">{stat.value}</span>
                )}
              </div>
              <div className="text-[10px] sm:text-xs text-slate-500 mt-1 sm:mt-1.5 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0f172a] to-transparent pointer-events-none" />
    </section>
  );
}
