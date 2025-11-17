export default function CTA() {
  return (
    <section id="cta" className="relative py-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-400/15 via-fuchsia-500/10 to-transparent p-10 overflow-hidden">
          <div className="absolute -inset-24 bg-[conic-gradient(at_top_left,rgba(34,211,238,0.15),rgba(217,70,239,0.12),transparent_30%)] blur-3xl" />
          <div className="relative grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">Prevent accidents before they happen</h3>
              <p className="mt-3 text-slate-200 max-w-prose">Join early access to get personalized recommendations, real-time alerts, and intelligent assistance for safer, more responsible driving.</p>
            </div>
            <form className="relative flex flex-col sm:flex-row gap-3">
              <input type="email" required placeholder="Enter your email" className="h-12 w-full rounded-xl bg-white/5 border border-white/10 px-4 text-slate-200 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" />
              <button className="h-12 whitespace-nowrap rounded-xl bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-slate-900 font-semibold px-6">Get early access</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
