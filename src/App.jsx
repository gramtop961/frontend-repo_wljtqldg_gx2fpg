import React from 'react';
import Hero from './components/Hero';
import AboutAndSkills from './components/AboutAndSkills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#0C0C18] text-white">
      {/* Cinematic background lines */}
      <div className="pointer-events-none fixed inset-0 opacity-50">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="g" x1="0" x2="1">
              <stop offset="0%" stopColor="rgba(0,191,255,0.15)" />
              <stop offset="100%" stopColor="rgba(255,30,30,0.15)" />
            </linearGradient>
          </defs>
          {Array.from({ length: 20 }).map((_, i) => (
            <line
              key={i}
              x1={(i + 1) * 5 + '%'}
              y1="0"
              x2={(i + 1) * 5 + '%'}
              y2="100%"
              stroke="url(#g)"
              strokeWidth="0.5"
            />
          ))}
        </svg>
      </div>

      {/* Floating particles */}
      <div className="pointer-events-none fixed inset-0">
        {Array.from({ length: 30 }).map((_, i) => (
          <span
            key={i}
            className="absolute h-1 w-1 animate-float rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 3 === 0 ? '#00BFFF' : i % 3 === 1 ? '#C0C0C0' : '#FF1E1E',
              boxShadow: '0 0 10px rgba(0,191,255,0.6)'
            }}
          />
        ))}
      </div>

      <Hero />
      <AboutAndSkills />
      <Projects />
      <Contact />

      <footer className="relative border-t border-cyan-400/10 bg-[#0C0C18] py-8 text-center text-xs text-cyan-300/70">
        Built with a futuristic, heroic vibe. © {new Date().getFullYear()}
      </footer>
    </div>
  );
}

export default App;
