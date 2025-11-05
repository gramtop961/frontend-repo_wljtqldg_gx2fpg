import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

const Hero = () => {
  const handleClick = () => {
    const el = document.getElementById('origin');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#0C0C18] text-white">
      {/* Arc Reactor Glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="relative h-[70vmin] w-[70vmin] rounded-full">
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(0,191,255,0.35)_0%,rgba(12,12,24,0)_60%)] blur-2xl" />
          <div className="absolute inset-8 rounded-full border border-cyan-300/30" />
          <div className="absolute inset-0 animate-spin-slow">
            <div className="absolute inset-0 rounded-full border-2 border-cyan-400/20" />
          </div>
        </div>
      </div>

      {/* Spline Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Cinematic gradient overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0C0C18]/40 via-transparent to-[#0C0C18]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,191,255,0.15),transparent_60%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">
        <h1 className="mb-4 bg-gradient-to-r from-[#00BFFF] via-[#C0C0C0] to-[#FF1E1E] bg-clip-text text-5xl font-extrabold text-transparent sm:text-6xl md:text-7xl">
          AVENGERS-INSPIRED PORTFOLIO
        </h1>
        <p className="mx-auto max-w-2xl text-cyan-200/90">
          Futuristic interface. Cinematic energy. A heroic showcase of missions, abilities, and identity.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={handleClick}
            className="group inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-[#0C0C18]/70 px-6 py-3 text-cyan-100 backdrop-blur-md transition hover:-translate-y-0.5 hover:border-cyan-300/60 hover:shadow-[0_0_25px_rgba(0,191,255,0.4)]"
          >
            <Rocket className="h-5 w-5 text-[#00BFFF] transition group-hover:scale-110" />
            <span className="tracking-wider">Enter Mission</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
