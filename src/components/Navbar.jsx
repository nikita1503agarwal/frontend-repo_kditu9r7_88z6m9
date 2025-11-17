import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40 bg-slate-900/60 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-400 to-fuchsia-500 shadow-[0_0_30px_rgba(168,85,247,0.45)]" />
          <span className="font-semibold tracking-tight text-white">AI_DriverSafety</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#why" className="hover:text-white transition-colors">Why</a>
          <a href="#roadmap" className="hover:text-white transition-colors">Roadmap</a>
          <a href="#cta" className="hover:text-white transition-colors">Get started</a>
        </nav>
        <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-white/10 text-white/90"><Menu size={18} /></button>
      </div>
    </header>
  );
}
