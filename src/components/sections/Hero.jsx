import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { chapters } from '../../data/chapters';
import { journeyStages } from '../../data/journey';

// Build a flat list of all 15 IPs, tagged with their chapter accent colour.
const allIPs = journeyStages.flatMap((stage) => {
  const chapter = chapters.find((c) => c.id === stage.id);
  return stage.solutions.map((s) => ({
    id: s.id,
    name: s.name,
    color: chapter.accent,
  }));
});

/**
 * Hero — "How Fynd Powers Sephora"
 * Central emblem with 15 satellites orbiting on two dashed rings.
 */
export default function Hero() {
  const outer = allIPs.slice(0, 9);
  const inner = allIPs.slice(9);

  return (
    <section
      id="top"
      className="relative isolate min-h-screen flex items-center overflow-hidden text-white"
      style={{ backgroundColor: '#0A0612' }}
    >
      <div className="why-aurora" aria-hidden="true" />
      <div className="why-grid" aria-hidden="true" />
      <div className="why-orb why-orb-1" aria-hidden="true" />
      <div className="why-orb why-orb-2" aria-hidden="true" />
      <div className="why-orb why-orb-3" aria-hidden="true" />

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32"
        style={{ background: 'linear-gradient(to top, rgba(10,6,18,1), transparent)' }}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Copy */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] tracking-[0.22em] uppercase font-semibold mb-6"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.12)',
                color: 'rgba(255,255,255,0.85)',
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: '#C8102E', boxShadow: '0 0 10px #C8102E' }}
              />
              A Fynd Case Study
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-heading leading-[1.02] tracking-tight text-[44px] sm:text-[56px] md:text-[64px] lg:text-[72px]"
            >
              How{' '}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    'linear-gradient(90deg, #C8102E 0%, #EC4899 40%, #8B5CF6 70%, #3B82F6 100%)',
                }}
              >
                Fynd
              </span>{' '}
              powers
              <br />
              the entire Sephora
              <br />
              experience.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-8 text-lg md:text-xl leading-relaxed text-white/65 max-w-xl"
            >
              15 integrated solutions. 5 stages of the customer journey. One unified
              intelligence layer connecting web, mobile, and 100+ stores across India.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 flex items-center gap-5"
            >
              <a
                href="#discover"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-[14px] tracking-wide transition-all hover:scale-[1.02]"
                style={{
                  background: 'linear-gradient(135deg, #C8102E 0%, #8B5CF6 100%)',
                  boxShadow:
                    'inset 0 1px 0 rgba(255,255,255,0.2), 0 8px 24px rgba(200, 16, 46, 0.35)',
                }}
              >
                Start the journey
                <ArrowDown className="w-4 h-4" />
              </a>
              <a
                href="#fulfil"
                className="text-[13.5px] text-white/60 hover:text-white/90 transition-colors tracking-wide"
              >
                Jump to Fulfilment →
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-14 flex flex-wrap items-center gap-x-7 gap-y-3 text-[11px] tracking-[0.18em] uppercase font-semibold text-white/45"
            >
              <span className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-white/40" />15 Solutions</span>
              <span className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-white/40" />4 Channels</span>
              <span className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-white/40" />26K Pincodes</span>
              <span className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-white/40" />15M+ Shipments</span>
              <span className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-white/40" />Live</span>
            </motion.div>
          </div>

          {/* Orbit emblem */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="relative flex items-center justify-center"
            >
              <OrbitEmblem outer={outer} inner={inner} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function OrbitEmblem({ outer, inner }) {
  const cx = 320, cy = 320, rOuter = 250, rInner = 160;

  return (
    <svg viewBox="0 0 640 640" className="w-full max-w-[560px] h-auto">
      <defs>
        <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#C8102E" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient id="coreGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.98" />
          <stop offset="100%" stopColor="#C8102E" stopOpacity="0.9" />
        </linearGradient>
        <radialGradient id="coreHalo" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#C8102E" stopOpacity="0.35" />
          <stop offset="70%" stopColor="#8B5CF6" stopOpacity="0.1" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>

      <circle cx={cx} cy={cy} r="200" fill="url(#coreHalo)" />

      <g className="iso-rotate-slow-reverse" style={{ transformOrigin: `${cx}px ${cy}px` }}>
        <circle cx={cx} cy={cy} r={rOuter} fill="none" stroke="url(#ringGrad)" strokeWidth="1" strokeDasharray="2 8" opacity="0.55" />
      </g>
      <g className="iso-rotate-slow" style={{ transformOrigin: `${cx}px ${cy}px` }}>
        <circle cx={cx} cy={cy} r={rInner} fill="none" stroke="url(#ringGrad)" strokeWidth="0.85" strokeDasharray="1 5" opacity="0.7" />
      </g>

      {outer.map((ip, i) => {
        const angle = (i / outer.length) * Math.PI * 2 - Math.PI / 2;
        const x = cx + Math.cos(angle) * rOuter;
        const y = cy + Math.sin(angle) * rOuter;
        return (
          <g key={ip.id} className={i % 2 === 0 ? 'iso-float' : 'iso-float-alt'}>
            <circle cx={x} cy={y} r="18" fill={ip.color} opacity="0.18" />
            <circle cx={x} cy={y} r="10" fill={ip.color} stroke="rgba(255,255,255,0.5)" strokeWidth="0.8" />
            <circle cx={x} cy={y} r="3.5" fill="#FFFFFF" />
          </g>
        );
      })}

      {inner.map((ip, i) => {
        const angle = (i / inner.length) * Math.PI * 2 + Math.PI / 6;
        const x = cx + Math.cos(angle) * rInner;
        const y = cy + Math.sin(angle) * rInner;
        return (
          <g key={ip.id} className={i % 2 === 0 ? 'iso-float-alt' : 'iso-float-slow'}>
            <circle cx={x} cy={y} r="14" fill={ip.color} opacity="0.18" />
            <circle cx={x} cy={y} r="7" fill={ip.color} stroke="rgba(255,255,255,0.5)" strokeWidth="0.7" />
            <circle cx={x} cy={y} r="2.5" fill="#FFFFFF" />
          </g>
        );
      })}

      {/* core diamond */}
      <g className="iso-float">
        <path
          d={`M${cx} ${cy - 52} L${cx + 46} ${cy} L${cx} ${cy + 52} L${cx - 46} ${cy} Z`}
          fill="url(#coreGrad)"
          stroke="rgba(255,255,255,0.5)"
          strokeWidth="1"
        />
        <path
          d={`M${cx} ${cy - 28} L${cx + 25} ${cy} L${cx} ${cy + 28} L${cx - 25} ${cy} Z`}
          fill="none"
          stroke="rgba(255,255,255,0.75)"
          strokeWidth="0.9"
        />
        <line x1={cx} y1={cy - 52} x2={cx} y2={cy + 52} stroke="rgba(255,255,255,0.4)" strokeWidth="0.6" />
        <line x1={cx - 46} y1={cy} x2={cx + 46} y2={cy} stroke="rgba(255,255,255,0.4)" strokeWidth="0.6" />
      </g>

      <text x={cx} y={cy + 100} textAnchor="middle" fontSize="9" fontFamily="monospace" letterSpacing="4" fill="rgba(255,255,255,0.35)">
        15 SOLUTIONS
      </text>
    </svg>
  );
}
