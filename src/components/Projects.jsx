import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'ArcNet HUD',
    desc: 'A real-time analytics dashboard with holographic overlays and adaptive theming.',
    tags: ['React', 'WebGL', 'Framer Motion'],
  },
  {
    title: 'StarkLink API',
    desc: 'High-throughput FastAPI service with resilient caching and observability.',
    tags: ['FastAPI', 'Redis', 'OpenAPI'],
  },
  {
    title: 'Quantum UI Kit',
    desc: 'Futuristic component system with accessibility-first primitives.',
    tags: ['Tailwind', 'Radix', 'Design System'],
  },
];

const HoloCard = ({ title, desc, tags }) => (
  <motion.div
    whileHover={{ y: -6 }}
    whileTap={{ scale: 0.98 }}
    className="group relative overflow-hidden rounded-2xl border border-cyan-400/20 bg-white/5 p-6 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)] backdrop-blur-xl"
  >
    <div className="pointer-events-none absolute -inset-1 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" style={{ background: 'conic-gradient(from 180deg at 50% 50%, rgba(0,191,255,0.35), rgba(255,30,30,0.25), rgba(192,192,192,0.3), rgba(0,191,255,0.35))' }} />
    <div className="relative">
      <h4 className="mb-2 text-xl font-semibold text-white">{title}</h4>
      <p className="mb-4 text-sm text-cyan-100/90">{desc}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((t) => (
          <span key={t} className="rounded-full border border-cyan-400/30 bg-[#0C0C18]/60 px-2.5 py-1 text-xs text-cyan-200">
            {t}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  return (
    <section id="missions" className="relative w-full bg-[#0C0C18] py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,30,30,0.12),transparent_40%)]" />
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-3xl font-bold tracking-widest text-[#C0C0C0] md:text-4xl">
            Missions Completed
          </h2>
          <span className="text-xs tracking-widest text-cyan-300/70">CLASSIFIED: LEVEL 7</span>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {projects.map((p) => (
            <HoloCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
