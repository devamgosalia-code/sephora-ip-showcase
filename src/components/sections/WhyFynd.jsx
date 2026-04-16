import { motion } from 'framer-motion';
import {
  Shield,
  Layers,
  Sparkles,
  Globe2,
  Zap,
  HeartHandshake,
} from 'lucide-react';

const pillars = [
  {
    icon: Layers,
    stat: '15',
    unit: 'Solutions',
    title: 'One Unified Platform',
    body: 'Vertex AI Search, Dynamic Yield, GlamAR, BazaarVoice, Fynd OMS, Logistics, Engage and more — all orchestrated by a single intelligence layer.',
    accent: 'from-[#C8102E] to-[#8B5CF6]',
    glow: 'rgba(200, 16, 46, 0.22)',
  },
  {
    icon: Globe2,
    stat: '4',
    unit: 'Channels',
    title: 'True Omnichannel',
    body: 'Web, iOS, Android, and In-Store — one customer, one cart, one loyalty wallet. Every touchpoint synced in real-time.',
    accent: 'from-[#8B5CF6] to-[#3B82F6]',
    glow: 'rgba(139, 92, 246, 0.22)',
  },
  {
    icon: Sparkles,
    stat: 'AI',
    unit: 'Native',
    title: 'Intelligence Built-In',
    body: 'Google-grade search, Mastercard-backed personalisation, and AI-powered try-on — enterprise intelligence without the integration pain.',
    accent: 'from-[#3B82F6] to-[#06B6D4]',
    glow: 'rgba(59, 130, 246, 0.22)',
  },
  {
    icon: Zap,
    stat: '15M+',
    unit: 'Shipments',
    title: 'Proven at India Scale',
    body: '26K+ pincodes, 100+ delivery partners, 30% faster delivery, 50% lower RTO — infrastructure battle-tested across Sephora\u2019s full catalogue.',
    accent: 'from-[#F59E0B] to-[#C8102E]',
    glow: 'rgba(245, 158, 11, 0.22)',
  },
  {
    icon: Shield,
    stat: '99.9%',
    unit: 'Uptime',
    title: 'Enterprise Grade',
    body: 'SOC 2 posture, PCI-aligned payments, data localised in India, with dedicated CSM and sub-hour critical-incident SLA.',
    accent: 'from-[#10B981] to-[#3B82F6]',
    glow: 'rgba(16, 185, 129, 0.22)',
  },
  {
    icon: HeartHandshake,
    stat: '42.5%',
    unit: 'Repeat Rate',
    title: 'Loyalty That Lasts',
    body: 'Beauty Pass powered by Fynd Engage — India\u2019s most rewarding beauty programme, driving +12.6% gross sales and deeper customer affinity.',
    accent: 'from-[#EC4899] to-[#8B5CF6]',
    glow: 'rgba(236, 72, 153, 0.22)',
  },
];

function IsometricMark() {
  // A refined, abstract Fynd × Sephora emblem: a rotating ring around a floating diamond,
  // with orbiting satellites representing the 15 solutions and 4 channels.
  return (
    <svg
      viewBox="0 0 520 340"
      className="w-full max-w-[520px] h-auto"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#C8102E" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient id="diamondGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#C8102E" stopOpacity="0.85" />
        </linearGradient>
        <radialGradient id="haloGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#C8102E" stopOpacity="0.28" />
          <stop offset="70%" stopColor="#8B5CF6" stopOpacity="0.08" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2" />
        </filter>
      </defs>

      {/* ambient halo */}
      <circle cx="260" cy="170" r="150" fill="url(#haloGrad)" />

      {/* outer rotating ring (dashed, counter-clockwise) */}
      <g className="iso-rotate-slow-reverse" style={{ transformOrigin: '260px 170px' }}>
        <circle
          cx="260"
          cy="170"
          r="130"
          fill="none"
          stroke="url(#ringGrad)"
          strokeWidth="1.25"
          strokeDasharray="2 8"
          opacity="0.55"
        />
      </g>

      {/* inner rotating ring (dashed, clockwise) */}
      <g className="iso-rotate-slow" style={{ transformOrigin: '260px 170px' }}>
        <circle
          cx="260"
          cy="170"
          r="95"
          fill="none"
          stroke="url(#ringGrad)"
          strokeWidth="1"
          strokeDasharray="1 6"
          opacity="0.75"
        />
      </g>

      {/* orbit satellites — channels */}
      <g className="iso-float-slow">
        <circle cx="260" cy="40" r="5" fill="#C8102E" />
        <circle cx="260" cy="40" r="10" fill="#C8102E" opacity="0.2" />
      </g>
      <g className="iso-float-alt">
        <circle cx="390" cy="170" r="5" fill="#8B5CF6" />
        <circle cx="390" cy="170" r="10" fill="#8B5CF6" opacity="0.2" />
      </g>
      <g className="iso-float">
        <circle cx="260" cy="300" r="5" fill="#3B82F6" />
        <circle cx="260" cy="300" r="10" fill="#3B82F6" opacity="0.2" />
      </g>
      <g className="iso-float-alt">
        <circle cx="130" cy="170" r="5" fill="#F59E0B" />
        <circle cx="130" cy="170" r="10" fill="#F59E0B" opacity="0.2" />
      </g>

      {/* diagonal satellites */}
      <g className="iso-float">
        <circle cx="352" cy="78" r="3.5" fill="#EC4899" opacity="0.9" />
      </g>
      <g className="iso-float-slow">
        <circle cx="168" cy="78" r="3.5" fill="#10B981" opacity="0.9" />
      </g>
      <g className="iso-float-alt">
        <circle cx="352" cy="262" r="3.5" fill="#06B6D4" opacity="0.9" />
      </g>
      <g className="iso-float">
        <circle cx="168" cy="262" r="3.5" fill="#B8962E" opacity="0.9" />
      </g>

      {/* central emblem — floating diamond cluster */}
      <g className="iso-float-alt" style={{ transformOrigin: '260px 170px' }}>
        {/* back diamond shadow */}
        <g filter="url(#soft)" opacity="0.35">
          <path
            d="M260 118 L308 170 L260 222 L212 170 Z"
            fill="#000"
          />
        </g>
        {/* main diamond */}
        <path
          d="M260 120 L306 170 L260 220 L214 170 Z"
          fill="url(#diamondGrad)"
          stroke="rgba(255,255,255,0.5)"
          strokeWidth="1"
        />
        {/* inner facet */}
        <path
          d="M260 142 L288 170 L260 198 L232 170 Z"
          fill="none"
          stroke="rgba(255,255,255,0.7)"
          strokeWidth="0.8"
        />
        <line x1="260" y1="120" x2="260" y2="220" stroke="rgba(255,255,255,0.35)" strokeWidth="0.6" />
        <line x1="214" y1="170" x2="306" y2="170" stroke="rgba(255,255,255,0.35)" strokeWidth="0.6" />
      </g>

      {/* corner accent dots */}
      <circle cx="80"  cy="60"  r="2" fill="#C8102E" opacity="0.5" />
      <circle cx="440" cy="60"  r="2" fill="#8B5CF6" opacity="0.5" />
      <circle cx="80"  cy="280" r="2" fill="#3B82F6" opacity="0.5" />
      <circle cx="440" cy="280" r="2" fill="#F59E0B" opacity="0.5" />
    </svg>
  );
}

export default function WhyFynd() {
  return (
    <section
      id="why-fynd"
      className="relative isolate overflow-hidden text-white"
      style={{ backgroundColor: '#0A0612' }}
    >
      {/* background layers */}
      <div className="why-aurora" aria-hidden="true" />
      <div className="why-grid" aria-hidden="true" />
      <div className="why-orb why-orb-1" aria-hidden="true" />
      <div className="why-orb why-orb-2" aria-hidden="true" />
      <div className="why-orb why-orb-3" aria-hidden="true" />

      {/* top + bottom fade to blend with adjacent sections */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-32"
        style={{ background: 'linear-gradient(to bottom, rgba(10,6,18,1), transparent)' }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32"
        style={{ background: 'linear-gradient(to top, rgba(10,6,18,1), transparent)' }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 md:py-32">
        {/* Eyebrow + headline */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] tracking-[0.2em] uppercase font-semibold"
            style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.12)',
              color: 'rgba(255,255,255,0.85)',
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: '#C8102E', boxShadow: '0 0 10px #C8102E' }}
            />
            Why Fynd × Sephora
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight"
          >
            Built for beauty retail
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  'linear-gradient(90deg, #C8102E 0%, #EC4899 35%, #8B5CF6 65%, #3B82F6 100%)',
              }}
            >
              at India scale.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-base md:text-lg leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.65)' }}
          >
            Six reasons Sephora trusts Fynd to power every touchpoint —
            from the first search to lifelong loyalty.
          </motion.p>
        </div>

        {/* Isometric centerpiece */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center mb-16 md:mb-20"
        >
          <IsometricMark />
        </motion.div>

        {/* 6 Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="premium-card-3d group"
              >
                {/* Top row: icon + stat */}
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{
                      background: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      boxShadow: `inset 0 1px 0 rgba(255,255,255,0.08), 0 0 20px ${p.glow}`,
                    }}
                  >
                    <Icon
                      className="w-5 h-5"
                      style={{ color: 'rgba(255,255,255,0.92)' }}
                      strokeWidth={1.75}
                    />
                  </div>
                  <div className="text-right">
                    <div
                      className={`font-heading text-3xl md:text-4xl leading-none bg-clip-text text-transparent bg-gradient-to-br ${p.accent}`}
                    >
                      {p.stat}
                    </div>
                    <div
                      className="text-[10px] mt-1 tracking-[0.18em] uppercase font-semibold"
                      style={{ color: 'rgba(255,255,255,0.45)' }}
                    >
                      {p.unit}
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3
                  className="font-heading text-xl md:text-[22px] leading-snug mb-2.5"
                  style={{ color: 'rgba(255,255,255,0.96)' }}
                >
                  {p.title}
                </h3>

                {/* Body */}
                <p
                  className="text-[14px] leading-relaxed"
                  style={{ color: 'rgba(255,255,255,0.60)' }}
                >
                  {p.body}
                </p>

                {/* Bottom accent bar */}
                <div className="mt-6 h-px w-full" style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.12), transparent)' }} />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom trust line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 md:mt-20 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[12px] tracking-[0.15em] uppercase font-semibold"
          style={{ color: 'rgba(255,255,255,0.45)' }}
        >
          <span className="flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-white/40" /> Omnichannel
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-white/40" /> AI-Native
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-white/40" /> India-First
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-white/40" /> Enterprise-Grade
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-white/40" /> Composable
          </span>
        </motion.div>
      </div>
    </section>
  );
}
