import { chapters } from '../../data/chapters';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5" style={{ backgroundColor: '#080411' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          {/* Brand column */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-4 mb-4">
              <img src="/assets/fynd-logo.svg" alt="Fynd" className="h-9" />
              <span className="text-white/20 text-lg">&times;</span>
              <img
                src="/assets/sephora-mark.svg"
                alt="Sephora"
                className="h-7 object-contain opacity-85"
              />
            </div>
            <p className="text-sm text-white/55 leading-relaxed max-w-md">
              How Fynd powers Sephora India — 15 integrated solutions across
              discovery, experience, purchase, fulfilment, and retention.
            </p>
            <div className="mt-6 flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase font-semibold text-white/40">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
              Live in Production
            </div>
          </div>

          {/* Chapter links */}
          <div className="md:col-span-4">
            <p className="text-[11px] tracking-[0.22em] uppercase font-semibold text-white/45 mb-5">
              Chapters
            </p>
            <div className="grid grid-cols-2 gap-y-2.5 gap-x-4">
              {chapters.map((c) => (
                <a
                  key={c.id}
                  href={`#${c.id}`}
                  className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: c.accent, boxShadow: `0 0 6px ${c.accent}` }}
                  />
                  {c.name}
                </a>
              ))}
              <a href="#impact" className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_6px_rgba(251,191,36,0.8)]" />
                Impact
              </a>
            </div>
          </div>

          {/* Legal */}
          <div className="md:col-span-3 md:text-right">
            <p className="text-[11px] tracking-[0.22em] uppercase font-semibold text-white/45 mb-5">
              Case Study
            </p>
            <p className="text-sm text-white/55">&copy; 2026 Shopsense Retail Technologies</p>
            <p className="text-sm text-white/40 mt-1">Fynd × Sephora India</p>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5">
          <p className="text-[11px] text-white/30 text-center leading-relaxed max-w-2xl mx-auto">
            This is an internal case study presentation. All metrics referenced are
            from Sephora India's live production environment, powered by the Fynd
            platform.
          </p>
        </div>
      </div>
    </footer>
  );
}
