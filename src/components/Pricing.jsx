export default function Pricing() {
  const tiers = [
    {
      name: "Starter",
      price: "$9",
      per: "/mo",
      desc: "Solo drivers who want smarter alerts",
      features: ["Real-time fatigue & distraction detection", "Voice assistant", "Sensitive zone alerts"],
      highlight: false,
    },
    {
      name: "Pro",
      price: "$29",
      per: "/mo",
      desc: "Daily commuters & rideshare pros",
      features: ["Everything in Starter", "Seat vibration integration", "Advanced risk-aware GPS", "Priority support"],
      highlight: true,
    },
    {
      name: "Fleet",
      price: "Custom",
      per: "",
      desc: "Fleet safety & compliance",
      features: ["Driver dashboards", "Incident analytics", "API & integrations", "Dedicated success manager"],
      highlight: false,
    },
  ];

  return (
    <section className="relative py-24" aria-label="Pricing">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Pricing</h2>
        <p className="mt-3 text-slate-300 max-w-prose">Simple plans that scale with your needs. Start free, upgrade when you’re ready.</p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div key={t.name} className={`rounded-2xl border border-white/10 p-6 bg-white/[0.03] ${t.highlight ? 'ring-2 ring-cyan-400/50' : ''}`}>
              <div className="flex items-baseline gap-2">
                <h3 className="text-white font-semibold">{t.name}</h3>
              </div>
              <div className="mt-3 flex items-end gap-1 text-white">
                <span className="text-3xl font-semibold">{t.price}</span>
                <span className="text-slate-400">{t.per}</span>
              </div>
              <p className="mt-2 text-sm text-slate-300">{t.desc}</p>
              <ul className="mt-5 space-y-2 text-sm text-slate-300">
                {t.features.map((f) => (
                  <li key={f} className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400" /><span>{f}</span></li>
                ))}
              </ul>
              <button className="mt-6 w-full h-11 rounded-xl bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-slate-900 font-semibold">Get started</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
