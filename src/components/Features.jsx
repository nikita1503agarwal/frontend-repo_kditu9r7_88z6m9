import { Shield, Eye, Phone, Vibrate, Brain, AlertTriangle, MapPin, Trophy } from "lucide-react";

export default function Features() {
  return (
    <section id="features" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Why AI_DriverSafety?</h2>
          <p className="mt-3 text-slate-300">Proactive accident prevention before they occur. Personalized recommendations based on the driver’s actual condition and continuous support for safer, more responsible driving.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Real-time detection */}
          <FeatureCard icon={<Eye className="text-cyan-400" size={22} />} title="Real-time detection" points={[
            'Fatigue and drowsiness',
            'Lack of focus / distraction',
            'Phone usage',
          ]} />

          {/* Technologies used */}
          <FeatureCard icon={<Brain className="text-fuchsia-400" size={22} />} title="Technologies used" points={[
            'On-board camera',
            'Intelligent voice assistant',
            'Seat vibrator (physical alert)',
          ]} />

          {/* Smart actions and alerts */}
          <FeatureCard icon={<AlertTriangle className="text-amber-400" size={22} />} title="Smart actions & alerts" points={[
            'Voice assistance and support in case of drowsiness',
            'Seat vibration warning in critical situations',
            'Automatic emergency call and guidance takeover if no response',
          ]} />
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard icon={<Shield size={18} />} label="Accident Reduction" desc="Reduce accidents caused by fatigue, drowsiness, and distraction." />
          <StatCard icon={<MapPin size={18} />} label="Enhanced Protection" desc="Stay safe in sensitive areas: schools, hospitals, crossings." />
          <StatCard icon={<Phone size={18} />} label="Saving Lives" desc="Automatic emergency calls in severe cases." />
          <StatCard icon={<Trophy size={18} />} label="Responsible Driving" desc="Promote safer behavior and lower CO₂ emissions." />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, points }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.05] transition-colors">
      <div className="flex items-center gap-3 text-white">
        <div className="h-9 w-9 grid place-items-center rounded-lg bg-white/5 border border-white/10">
          {icon}
        </div>
        <h3 className="font-semibold">{title}</h3>
      </div>
      <ul className="mt-4 space-y-2 text-sm text-slate-300">
        {points.map((p) => (
          <li key={p} className="flex gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400" />
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function StatCard({ icon, label, desc }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-5 text-slate-200">
      <div className="inline-flex items-center gap-2 text-white font-medium">
        {icon}
        <span>{label}</span>
      </div>
      <p className="mt-2 text-sm text-slate-300/90">{desc}</p>
    </div>
  );
}
