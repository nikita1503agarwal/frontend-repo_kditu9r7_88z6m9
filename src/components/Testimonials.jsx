import { Star } from "lucide-react";

export default function Testimonials() {
  const items = [
    {
      quote:
        "Night shifts used to terrify me. The assistant caught my micro-sleeps and told me to pull over—probably saved my life.",
      author: "Lina, paramedic",
    },
    {
      quote:
        "We rolled this out to our delivery vans. Fewer incidents, calmer drivers, and insurance loved the data.",
      author: "Tom, fleet manager",
    },
    {
      quote:
        "It’s like having a co‑pilot who never blinks. Alerts feel smart, not annoying.",
      author: "Nadia, rideshare driver",
    },
  ];

  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(236,72,153,0.07),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">What drivers say</h2>
            <p className="mt-3 text-slate-300">Human stories behind safer roads.</p>
          </div>
          <div className="flex items-center gap-1 text-amber-300">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={16} fill="currentColor" />
            ))}
            <span className="ml-2 text-sm text-slate-300">4.9/5 average rating</span>
          </div>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <figure key={i} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <blockquote className="text-slate-200">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-slate-400">— {t.author}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
