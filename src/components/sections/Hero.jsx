import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowDown,
  Search,
  TrendingUp,
  Sparkles,
  Star,
  Globe,
  Tag,
  Package,
  Truck,
  Link as LinkIcon,
  Heart,
  BarChart2,
} from 'lucide-react';
import { chapters } from '../../data/chapters';
import { journeyStages } from '../../data/journey';

// Icon map — one icon per IP.
// Brand products (GlamAR, Boltic, Pixelbin, Kaily) show their actual logos;
// the rest use lucide glyphs tinted with the chapter accent.
const ipIconMap = {
  'vertex-ai':    { Icon: Search,      stroke: 1.8 },
  'smart-sell':   { Icon: TrendingUp,  stroke: 1.8 },
  'dynamic-yield':{ Icon: Sparkles,    stroke: 1.8 },
  glamar:         { img: '/assets/brands/glamar.png',   brand: true },
  bazaarvoice:    { Icon: Star,        stroke: 1.8 },
  commerce:       { Icon: Globe,       stroke: 1.8 },
  'promo-tagging':{ Icon: Tag,         stroke: 1.8 },
  oms:            { Icon: Package,     stroke: 1.8 },
  logistics:      { Icon: Truck,       stroke: 1.8 },
  konnect:        { Icon: LinkIcon,    stroke: 1.8 },
  boltic:         { img: '/assets/brands/boltic.png',   brand: true },
  pixelbin:       { img: '/assets/brands/pixelbin.png', brand: true },
  'fynd-engage':  { Icon: Heart,       stroke: 1.8 },
  kaily:          { img: '/assets/brands/kaily.png',    brand: true },
  ucp:            { Icon: BarChart2,   stroke: 1.8 },
};

// Build a flat list of all 15 IPs, tagged with chapter accent + anchor target.
const allIPs = journeyStages.flatMap((stage) => {
  const chapter = chapters.find((c) => c.id === stage.id);
  return stage.solutions.map((s) => ({
    id: s.id,
    name: s.name,
    color: chapter.accent,
    chapterId: stage.id,        // 'discover' | 'experience' | 'purchase' | 'fulfil' | 'retain'
  }));
});

export default function Hero() {
  // 9 outer + 6 inner = 15 satellites
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
              className="mt-10"
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
            </motion.div>
          </div>

          {/* Orbit emblem */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="relative flex flex-col items-center justify-center"
            >
              {/* "15 · SOLUTIONS" label pinned ABOVE the emblem so chips never cover it */}
              <div
                className="mb-3 inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] tracking-[0.4em] font-semibold"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  color: 'rgba(255,255,255,0.75)',
                  fontFamily: 'monospace',
                }}
              >
                <span
                  className="w-1 h-1 rounded-full"
                  style={{ background: '#8B5CF6', boxShadow: '0 0 6px #8B5CF6' }}
                />
                15 · SOLUTIONS
              </div>
              <OrbitEmblem outer={outer} inner={inner} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────
   Orbit emblem — Sephora centre + 15 3D icon chips on 2 rings
   HTML/SVG hybrid: dashed rings as SVG, chips as absolutely
   positioned divs (so we can use lucide icons + the external
   GlamAR logo cleanly).
   ───────────────────────────────────────────────────── */
function OrbitEmblem({ outer, inner }) {
  const size = 560;               // full emblem box (px)
  const rOuter = 0.44 * size;     // ~246
  const rInner = 0.28 * size;     // ~157

  return (
    <div
      className="relative"
      style={{ width: size, height: size, maxWidth: '100%' }}
    >
      {/* ambient halo */}
      <div
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(200,16,46,0.28) 0%, rgba(139,92,246,0.10) 45%, transparent 70%)',
        }}
      />

      {/* SVG rings */}
      <svg
        viewBox={`0 0 ${size} ${size}`}
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="heroRingGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%"   stopColor="#C8102E" stopOpacity="0.9" />
            <stop offset="50%"  stopColor="#8B5CF6" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.7" />
          </linearGradient>
        </defs>
        {/* outer ring — CCW */}
        <g className="iso-rotate-slow-reverse" style={{ transformOrigin: `${size / 2}px ${size / 2}px` }}>
          <circle
            cx={size / 2} cy={size / 2} r={rOuter}
            fill="none" stroke="url(#heroRingGrad)"
            strokeWidth="1" strokeDasharray="2 8" opacity="0.5"
          />
        </g>
        {/* inner ring — CW */}
        <g className="iso-rotate-slow" style={{ transformOrigin: `${size / 2}px ${size / 2}px` }}>
          <circle
            cx={size / 2} cy={size / 2} r={rInner}
            fill="none" stroke="url(#heroRingGrad)"
            strokeWidth="0.85" strokeDasharray="1 5" opacity="0.65"
          />
        </g>
      </svg>

      {/* Satellites */}
      {outer.map((ip, i) => {
        const angle = (i / outer.length) * Math.PI * 2 - Math.PI / 2;
        const x = size / 2 + Math.cos(angle) * rOuter;
        const y = size / 2 + Math.sin(angle) * rOuter;
        return <SatelliteChip key={ip.id} ip={ip} x={x} y={y} sizePx={52} floatIdx={i} />;
      })}

      {inner.map((ip, i) => {
        const angle = (i / inner.length) * Math.PI * 2 + Math.PI / 6;
        const x = size / 2 + Math.cos(angle) * rInner;
        const y = size / 2 + Math.sin(angle) * rInner;
        return <SatelliteChip key={ip.id} ip={ip} x={x} y={y} sizePx={44} floatIdx={i + 100} />;
      })}

      {/* Sephora centre — flame + wordmark, no container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none"
        style={{ width: 200, height: 170 }}
      >
        {/* soft ambient glow only — no box */}
        <div
          aria-hidden="true"
          className="absolute inset-0 rounded-full"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(255,255,255,0.10) 0%, rgba(200,16,46,0.10) 35%, transparent 70%)',
            filter: 'blur(6px)',
          }}
        />
        {/* Pre-processed PNG: white mark on a fully transparent background,
            extracted from the user's uploaded flame+wordmark asset. */}
        <img
          src="/assets/sephora-brand.png"
          alt="Sephora"
          className="relative z-10 w-full h-full object-contain"
          draggable={false}
          style={{ filter: 'drop-shadow(0 6px 30px rgba(0,0,0,0.5))' }}
        />
      </motion.div>

    </div>
  );
}

function SatelliteChip({ ip, x, y, sizePx, floatIdx }) {
  const mapping = ipIconMap[ip.id];
  const floatClass =
    floatIdx % 3 === 0 ? 'iso-float' : floatIdx % 3 === 1 ? 'iso-float-alt' : 'iso-float-slow';
  const [hovered, setHovered] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    const el = document.getElementById(ip.chapterId);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Boltic's official PNG has a solid black background; screen-blending drops
  // the black pixels to transparent on our dark canvas.
  const brandImgStyle = ip.id === 'boltic'
    ? { mixBlendMode: 'screen' }
    : undefined;

  return (
    <a
      href={`#${ip.chapterId}`}
      onClick={handleClick}
      aria-label={`Jump to ${ip.name}`}
      className="absolute flex items-center justify-center group cursor-pointer focus:outline-none"
      style={{
        left: x,
        top: y,
        width: sizePx,
        height: sizePx,
        transform: 'translate(-50%, -50%)',
        zIndex: hovered ? 30 : 10,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* outer glow ring */}
      <span
        className="absolute inset-0 rounded-xl pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle, ${ip.color}55 0%, transparent 70%)`,
          opacity: hovered ? 1 : 0.55,
        }}
      />

      <div
        className={`relative flex items-center justify-center rounded-xl ${floatClass}`}
        style={{
          width: '100%',
          height: '100%',
          background:
            'linear-gradient(145deg, rgba(255,255,255,0.10), rgba(255,255,255,0.02))',
          border: `1px solid ${hovered ? ip.color : ip.color + '50'}`,
          boxShadow: `
            inset 0 1px 0 rgba(255,255,255,0.18),
            inset 1px 0 0 rgba(255,255,255,0.08),
            0 4px 10px rgba(0,0,0,0.45),
            0 8px 24px rgba(0,0,0,0.35),
            0 0 ${hovered ? '28px' : '18px'} ${ip.color}${hovered ? '66' : '33'}
          `,
          backdropFilter: 'blur(6px)',
          transition: 'border-color .25s, box-shadow .25s, transform .25s',
          transform: hovered ? 'scale(1.12)' : 'scale(1)',
        }}
      >
        {mapping?.img ? (
          <img
            src={mapping.img}
            alt={ip.name}
            className="w-[62%] h-[62%] object-contain"
            draggable={false}
            style={
              mapping.brand
                ? brandImgStyle                         // keep brand colours (+ boltic screen-blend)
                : { filter: 'invert(1) brightness(1.5)' }
            }
          />
        ) : mapping?.Icon ? (
          <mapping.Icon
            style={{
              width: sizePx * 0.42,
              height: sizePx * 0.42,
              color: '#FFFFFF',
              filter: `drop-shadow(0 0 6px ${ip.color})`,
            }}
            strokeWidth={mapping.stroke}
          />
        ) : null}
      </div>

      {/* Hover tooltip — solution name */}
      <div
        className="absolute pointer-events-none whitespace-nowrap"
        style={{
          left: '50%',
          top: `calc(100% + 8px)`,
          transform: `translateX(-50%) translateY(${hovered ? '0' : '-4px'})`,
          opacity: hovered ? 1 : 0,
          transition: 'opacity .2s, transform .2s',
          zIndex: 40,
        }}
      >
        <div
          className="px-2.5 py-1 rounded-md text-[11px] font-semibold tracking-wide text-white"
          style={{
            background: 'rgba(10,6,18,0.92)',
            border: `1px solid ${ip.color}80`,
            boxShadow: `0 6px 18px rgba(0,0,0,0.5), 0 0 14px ${ip.color}55`,
            backdropFilter: 'blur(6px)',
          }}
        >
          {ip.name}
        </div>
      </div>
    </a>
  );
}
