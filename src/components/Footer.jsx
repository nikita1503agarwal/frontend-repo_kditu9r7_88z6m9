import { Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const links = [
    { label: "Twitter", icon: <Twitter size={16} />, href: "#" },
    { label: "LinkedIn", icon: <Linkedin size={16} />, href: "#" },
    { label: "Contact", icon: <Mail size={16} />, href: "#" },
  ];

  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-400 to-fuchsia-500" />
            <span className="font-semibold tracking-tight text-white">AI_DriverSafety</span>
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            {links.map((l) => (
              <a key={l.label} href={l.href} className="inline-flex items-center gap-2 hover:text-white">
                {l.icon}
                <span className="text-sm">{l.label}</span>
              </a>
            ))}
          </div>
          <p className="text-xs text-slate-400">© {new Date().getFullYear()} AI_DriverSafety. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
