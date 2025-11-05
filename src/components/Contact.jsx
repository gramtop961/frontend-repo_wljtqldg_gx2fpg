import React from 'react';
import { Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative w-full bg-[#0C0C18] py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,191,255,0.12),transparent_55%)]" />
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="mb-8 text-center text-3xl font-bold tracking-widest text-[#C0C0C0] md:text-4xl">
          Join the Initiative
        </h2>
        <div className="relative overflow-hidden rounded-2xl border border-cyan-400/20 bg-[#0C0C18]/70 p-6 shadow-[0_0_35px_rgba(0,191,255,0.15)] backdrop-blur-xl">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),transparent)]" />
          <div className="relative grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="md:col-span-2">
              <p className="mb-4 text-cyan-100/90">
                Establish a secure channel with S.H.I.E.L.D. Command. Transmit your message and we’ll respond with mission details.
              </p>
              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <input type="text" placeholder="Codename" className="w-full rounded-lg border border-cyan-400/20 bg-white/5 px-4 py-2 text-cyan-100 placeholder-cyan-300/50 outline-none focus:border-cyan-300/60" />
                <input type="email" placeholder="Encrypted Email" className="w-full rounded-lg border border-cyan-400/20 bg-white/5 px-4 py-2 text-cyan-100 placeholder-cyan-300/50 outline-none focus:border-cyan-300/60" />
                <textarea rows="4" placeholder="Mission Brief" className="w-full resize-none rounded-lg border border-cyan-400/20 bg-white/5 px-4 py-2 text-cyan-100 placeholder-cyan-300/50 outline-none focus:border-cyan-300/60" />
                <div className="flex gap-4">
                  <a
                    href="mailto:hello@example.com?subject=Initiative%20Contact"
                    className="inline-flex items-center gap-2 rounded-lg border border-cyan-400/30 bg-[#0C0C18]/70 px-5 py-2 text-cyan-100 transition hover:-translate-y-0.5 hover:border-cyan-300/60 hover:shadow-[0_0_20px_rgba(0,191,255,0.35)]"
                  >
                    <Mail className="h-5 w-5 text-[#00BFFF]" />
                    Send Secure Ping
                  </a>
                </div>
              </form>
            </div>
            <div className="rounded-xl border border-cyan-400/20 bg-white/5 p-4">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-xs tracking-widest text-cyan-300/80">S.H.I.E.L.D. TERMINAL</span>
                <span className="text-xs text-[#FF1E1E]">• LIVE</span>
              </div>
              <div className="h-40 overflow-auto rounded-lg bg-black/40 p-3 font-mono text-xs text-cyan-200">
                &gt; INIT SEQUENCE... OK\n
                &gt; ROUTING THROUGH QUINJET... OK\n
                &gt; ENCRYPTION PROTOCOL ARC-7... ACTIVE\n
                &gt; READY FOR TRANSMISSION
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
