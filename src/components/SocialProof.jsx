export default function SocialProof() {
  const logos = [
    { name: 'SafeRoads', text: 'SafeRoads' },
    { name: 'UrbanAI Lab', text: 'UrbanAI' },
    { name: 'FleetIQ', text: 'FleetIQ' },
    { name: 'DriveCare', text: 'DriveCare' },
    { name: 'Nova Insurance', text: 'Nova' },
    { name: 'TransitX', text: 'TransitX' },
  ];

  return (
    <section aria-label="Trusted by" className="relative py-14">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(148,163,184,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm uppercase tracking-widest text-slate-400">Trusted by safety-first teams</p>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {logos.map((l) => (
            <div key={l.name} className="h-10 flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-300/80 hover:text-white transition-colors">
              <span className="text-sm font-medium tracking-wide">{l.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
