import { Eye, MessageCircle, Map, AlarmClock } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: <Eye size={18} className="text-cyan-400" />,
      title: "Detect",
      desc: "On-board camera analyzes eye state, gaze, yawns, and attention in real-time.",
    },
    {
      icon: <MessageCircle size={18} className="text-fuchsia-400" />,
      title: "Assist",
      desc: "Voice assistant offers guidance and recommends a break when fatigue is detected.",
    },
    {
      icon: <AlarmClock size={18} className="text-amber-300" />,
      title: "Alert",
      desc: "Escalates with seat vibration and emergency protocols if no response.",
    },
    {
      icon: <Map size={18} className="text-emerald-300" />,
      title: "Navigate",
      desc: "Risk-aware GPS suggests safer routes and warns about sensitive zones.",
    },
  ];

  return (
    <section className="relative py-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">How it works</h2>
          <p className="mt-3 text-slate-300">From detection to assistance to action—each step is designed to prevent accidents before they happen.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <div className="inline-flex items-center gap-2 text-white">
                <div className="h-9 w-9 grid place-items-center rounded-lg bg-white/5 border border-white/10">{s.icon}</div>
                <span className="font-medium">{s.title}</span>
              </div>
              <p className="mt-3 text-sm text-slate-300">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
