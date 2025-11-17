export default function Roadmap() {
  const phases = [
    { title: 'Phase 1', points: ['AI development (eye detection, behavior analysis, focus monitoring)'] },
    { title: 'Phase 2', points: ['Simulation of hardware components (camera, seat vibrator) and software architecture design'] },
    { title: 'Phase 3', points: ['Integration of GPS and voice assistant'] },
    { title: 'Phase 4', points: ['Prototype testing on real roads'] },
  ];

  return (
    <section id="roadmap" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(236,72,153,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Product roadmap</h2>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {phases.map((p) => (
            <div key={p.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-white font-medium">{p.title}</h3>
              <ul className="mt-3 text-sm text-slate-300 space-y-2">
                {p.points.map((pt) => (
                  <li key={pt} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
