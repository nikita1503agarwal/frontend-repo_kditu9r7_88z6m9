import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden">
      {/* 3D scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/sbnqZNZdJSLK7U2A/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/60 to-slate-950 pointer-events-none" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 w-full">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200 mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" /> Live safety insights
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
            For safer and more peaceful driving
          </h1>
          <p className="mt-5 text-slate-300 text-base sm:text-lg max-w-prose">
            Globally, 10% to 20% of road accidents are linked to fatigue, drowsiness, and other human factors. Sensitive areas such as schools, hospitals, and pedestrian crossings significantly increase the risk of severe accidents.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#cta" className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-slate-900 font-semibold px-5 py-3">
              Get Started
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-lg border border-white/15 text-white px-5 py-3">
              Explore Features
            </a>
          </div>
        </div>

        <div className="hidden lg:block" />
      </div>
    </section>
  );
}
