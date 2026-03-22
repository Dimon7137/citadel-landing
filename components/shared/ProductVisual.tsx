"use client";

import { motion } from "framer-motion";

export function ProductVisual() {
  return (
    <div className="relative w-full h-full min-h-[480px] flex items-center justify-center">
      {/* Radial background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[280px] h-[420px] rounded-full bg-brand-sky/10 blur-[70px] animate-pulse-glow" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[160px] h-[260px] rounded-full bg-brand-blue/6 blur-[50px]" />
      </div>

      {/* Main SVG composition */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        className="relative w-full max-w-[340px] aspect-[9/16] animate-float"
      >
        <img
          src="/citadel-landing/bone-photo.png"
          alt="Bone photo"
          className="absolute inset-0 w-full h-full object-contain"
        />

        {/* Badge 1: Fully Internal */}
        <motion.div
          initial={{ opacity: 0, x: 16, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5, ease: "easeOut" }}
          className="absolute top-8 right-2 bg-white/95 backdrop-blur-sm border border-brand-blue/15 rounded-xl px-4 py-2.5 shadow-lg"
        >
          <div className="flex items-center gap-2.5">
            <div className="w-2 h-2 rounded-full bg-brand-blue shrink-0" />
            <div>
              <div className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">
                Approach
              </div>
              <div className="text-xs font-bold text-brand-blue whitespace-nowrap">
                Fully Internal
              </div>
            </div>
          </div>
        </motion.div>

        {/* Badge 2: TRL */}
        <motion.div
          initial={{ opacity: 0, x: -16, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 1.0, duration: 0.5, ease: "easeOut" }}
          className="absolute top-[38%] -left-2 bg-white/95 backdrop-blur-sm border border-slate-100 rounded-xl px-4 py-2.5 shadow-lg"
        >
          <div className="flex items-center gap-2.5">
            <div className="w-2 h-2 rounded-full bg-brand-sky shrink-0" />
            <div>
              <div className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">
                Maturity
              </div>
              <div className="text-xs font-bold text-slate-800 whitespace-nowrap font-mono">
                TRL 4–5
              </div>
            </div>
          </div>
        </motion.div>

        {/* Badge 3: HA+Ag */}
        <motion.div
          initial={{ opacity: 0, y: 12, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.5, ease: "easeOut" }}
          className="absolute bottom-20 left-0 bg-white/95 backdrop-blur-sm border border-sky-100 rounded-xl px-4 py-2.5 shadow-lg"
        >
          <div className="flex items-center gap-2.5">
            <div className="w-2 h-2 rounded-full bg-brand-sky shrink-0" />
            <div>
              <div className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">
                Coating
              </div>
              <div className="text-xs font-bold text-slate-700 whitespace-nowrap">
                HA+Ag Selective
              </div>
            </div>
          </div>
        </motion.div>

        {/* Badge 4: PMMA */}
        <motion.div
          initial={{ opacity: 0, x: 16, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 1.4, duration: 0.5, ease: "easeOut" }}
          className="absolute bottom-36 right-2 bg-white/95 backdrop-blur-sm border border-slate-100 rounded-xl px-4 py-2.5 shadow-lg"
        >
          <div className="flex items-center gap-2.5">
            <div className="w-2 h-2 rounded-full bg-slate-400 shrink-0" />
            <div>
              <div className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">
                Compatible
              </div>
              <div className="text-xs font-bold text-slate-700 whitespace-nowrap">
                PMMA Spacer
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
