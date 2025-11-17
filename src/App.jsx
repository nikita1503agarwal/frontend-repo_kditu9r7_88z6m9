import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Why from './components/Why';
import Roadmap from './components/Roadmap';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-fuchsia-400/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Why />
        <Roadmap />
        <CTA />
      </main>
      <footer className="border-t border-white/10 py-8 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} AI_DriverSafety. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
