export default function FAQ() {
  const faqs = [
    {
      q: "Does this replace my insurance?",
      a: "No. It complements it by reducing incidents and providing safety insights insurers appreciate.",
    },
    {
      q: "Is video recorded?",
      a: "Analysis happens on-device. You control what’s shared. No raw video leaves your car without consent.",
    },
    { q: "Will it work at night?", a: "Yes. Low‑light detection models handle nighttime and highway lighting." },
    { q: "What hardware do I need?", a: "A compatible on‑board camera. Seat vibration module is optional but recommended." },
  ];

  return (
    <section className="relative py-24" aria-label="FAQ">
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white text-center">Frequently asked questions</h2>
        <dl className="mt-10 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[0.03]">
          {faqs.map((f, i) => (
            <div key={i} className="p-6">
              <dt className="text-white/90 font-medium">{f.q}</dt>
              <dd className="mt-2 text-slate-300 text-sm">{f.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
