import React from 'react';
import { Shield, Cpu } from 'lucide-react';

const SkillBar = ({ label, value, color = '#00BFFF' }) => (
  <div className="mb-4">
    <div className="mb-2 flex items-center justify-between">
      <span className="text-sm tracking-wider text-cyan-100">{label}</span>
      <span className="text-xs text-cyan-300/80">{value}%</span>
    </div>
    <div className="h-2 w-full rounded-full bg-white/10">
      <div
        className="h-2 rounded-full shadow-[0_0_20px_rgba(0,191,255,0.6)]"
        style={{ width: `${value}%`, backgroundColor: color }}
      />
    </div>
  </div>
);

const AboutAndSkills = () => {
  return (
    <section id="origin" className="relative w-full bg-[#0C0C18] py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,191,255,0.15),transparent_40%)]" />
      <div className="mx-auto max-w-6xl px-6">
        {/* Origin Story */}
        <div className="mb-16 grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div className="relative">
            <h2 className="mb-4 text-3xl font-bold tracking-widest text-[#C0C0C0] md:text-4xl">
              Origin Story
            </h2>
            <p className="text-cyan-100/90">
              By day, a developer. By night, an architect of futuristic interfaces. I wield JavaScript, Python, and cloud systems like enhanced abilities—combining design insight with battle-tested engineering to deliver cinematic experiences. My suit is made of React, FastAPI, and MongoDB—powered by a core of curiosity and relentless iteration.
            </p>
            <div className="mt-6 flex items-center gap-4 text-cyan-200/90">
              <Shield className="h-6 w-6 text-[#FF1E1E]" />
              <span>Defense Protocols: accessibility, testing, performance budgets</span>
            </div>
            <div className="mt-2 flex items-center gap-4 text-cyan-200/90">
              <Cpu className="h-6 w-6 text-[#00BFFF]" />
              <span>Core Systems: component-driven UIs, APIs, real-time data</span>
            </div>
          </div>

          {/* Abilities & Gear */}
          <div className="relative rounded-2xl border border-cyan-400/20 bg-white/5 p-6 backdrop-blur-xl">
            <h3 className="mb-4 text-xl font-semibold tracking-widest text-cyan-200">
              Abilities & Gear
            </h3>
            <SkillBar label="React & Vite" value={92} />
            <SkillBar label="FastAPI & Python" value={88} color="#C0C0C0" />
            <SkillBar label="Tailwind CSS" value={90} color="#00BFFF" />
            <SkillBar label="MongoDB" value={82} color="#33E1A1" />
            <SkillBar label="Framer Motion" value={75} color="#FF1E1E" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAndSkills;
