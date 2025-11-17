import { Sparkles, Navigation, Activity } from "lucide-react";

export default function Why() {
  return (
    <section id="why" className="relative py-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Why AI_DriverSafety is revolutionary?</h2>
            <ul className="mt-6 space-y-4 text-slate-300">
              <li className="flex gap-3">
                <Sparkles className="mt-1 text-fuchsia-400" size={18} />
                <span>Predictive AI for proactive risk prevention</span>
              </li>
              <li className="flex gap-3">
                <Activity className="mt-1 text-cyan-400" size={18} />
                <span>More than alerts: a true driving assistant designed to save lives</span>
              </li>
              <li className="flex gap-3">
                <Navigation className="mt-1 text-emerald-400" size={18} />
                <span>Advanced integration: driver monitoring + behavioral analysis + intelligent GPS</span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="text-white font-semibold">Intelligent Driver Analysis</h3>
            <ul className="mt-3 text-sm text-slate-300 space-y-2">
              <li>• Eye recognition (open/closed)</li>
              <li>• Yawn detection</li>
              <li>• Analysis of gaze and attention</li>
              <li>• Real-time interpretation of vigilance level</li>
            </ul>
            <div className="mt-6 grid sm:grid-cols-2 gap-6">
              <div>
                <h4 className="text-white/90 font-medium">Driver Monitoring</h4>
                <p className="text-slate-300 text-sm mt-1">Detection of fatigue, drowsiness, and distraction. Real-time facial and movement analysis.</p>
              </div>
              <div>
                <h4 className="text-white/90 font-medium">Intelligent Voice Assistant</h4>
                <p className="text-slate-300 text-sm mt-1">Personalized recommendations, danger alerts, and automatic calls to authorities in severe emergencies.</p>
              </div>
            </div>
            <div className="mt-6">
              <h4 className="text-white/90 font-medium">Alerts and Road Environment Awareness</h4>
              <p className="text-slate-300 text-sm mt-1">Notifications for sensitive zones like schools, hospitals, pedestrian crossings, and risk anticipation.</p>
            </div>
            <div className="mt-6">
              <h4 className="text-white/90 font-medium">Reward System</h4>
              <p className="text-slate-300 text-sm mt-1">Insurance reductions based on driver behavior and safer habits.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
