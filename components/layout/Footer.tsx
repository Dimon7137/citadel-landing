import { Separator } from "@/components/ui/separator";

const navLinks = [
  { label: "Technology", href: "#solution" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Advantages", href: "#advantages" },
  { label: "Research", href: "#patent" },
  { label: "About", href: "#doctor" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="bg-[#080e1a] text-slate-400 relative overflow-hidden">
      <div className="absolute inset-0 bg-surgical-grid pointer-events-none opacity-40" />
      <div className="section-container py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-teal-500 flex items-center justify-center shadow-sm shadow-teal-500/30">
                <svg width="16" height="16" viewBox="0 0 44 44" fill="none">
                  <text x="22" y="30" textAnchor="middle" fontFamily="system-ui,sans-serif" fontWeight="800" fontSize="26" fill="white">CT</text>
                </svg>
              </div>
              <div>
                <div className="text-sm font-bold text-white">CITadel</div>
                <div className="text-[10px] text-slate-600 uppercase tracking-wider">Intramedullary System</div>
              </div>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed max-w-xs">Modular intramedullary fixator with selective HA+Ag coating for temporary internal stabilisation of critical long-bone defects.</p>
            <div className="mt-5 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-teal-400 shadow-[0_0_8px_rgba(14,165,169,0.5)]" />
              <span className="text-xs text-slate-600 font-medium">TRL 4–5 · Bench Validated · EIC Accelerator</span>
            </div>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-600 mb-5">Navigation</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}><a href={link.href} className="text-sm text-slate-500 hover:text-teal-400 transition-colors">{link.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-600 mb-5">Contact</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><span className="text-slate-600 text-xs uppercase tracking-wider block mb-0.5">Email</span>m.baida@nmu.ua</li>
              <li><span className="text-slate-600 text-xs uppercase tracking-wider block mb-0.5">Institution</span>Bogomolets National Medical University, Kyiv</li>
              <li><span className="text-slate-600 text-xs uppercase tracking-wider block mb-0.5">Collaboration</span>Partnership · Licensing · Research</li>
            </ul>
          </div>
        </div>
        <Separator className="my-10 bg-slate-800" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-700">&copy; {new Date().getFullYear()} CITadel · Maksym Baida, PhD. All rights reserved.</p>
          <p className="text-xs text-slate-700">Bogomolets National Medical University · Kyiv, Ukraine</p>
        </div>
      </div>
    </footer>
  );
}
