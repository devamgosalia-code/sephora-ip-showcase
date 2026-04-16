import { useState } from 'react';
import { motion } from 'framer-motion';
import IPCard from '../ui/IPCard';

/**
 * Generic chapter section.
 * Props:
 *   chapter: from data/chapters.js
 *   stage:   matching stage from data/journey.js (for the IPs list)
 *   Scene:   isometric diorama component
 *   reverse: diorama on the right (default) vs left
 */
export default function Chapter({ chapter, stage, Scene, reverse = false }) {
  const [highlightedId, setHighlightedId] = useState(null);
  const ips = stage.solutions;

  return (
    <section
      id={chapter.id}
      className="relative isolate overflow-hidden text-white"
      style={{ backgroundColor: '#0A0612' }}
    >
      {/* chapter-specific background layers */}
      <div className="why-aurora" aria-hidden="true" />
      <div className="why-grid" aria-hidden="true" />
      <div
        className="why-orb why-orb-1"
        aria-hidden="true"
        style={{
          background: `radial-gradient(circle, ${chapter.accent}38 0%, ${chapter.accent}18 40%, transparent 70%)`,
        }}
      />
      <div className="why-orb why-orb-2" aria-hidden="true" />
      <div className="why-orb why-orb-3" aria-hidden="true" />

      {/* soft top/bottom fades for seamless chapter transitions */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-24"
        style={{ background: 'linear-gradient(to bottom, rgba(10,6,18,1), transparent)' }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24"
        style={{ background: 'linear-gradient(to top, rgba(10,6,18,1), transparent)' }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 md:py-32">
        {/* Header: headline + diorama */}
        <div className={`grid lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-16 md:mb-20 ${reverse ? 'lg:[&>div:first-child]:order-2' : ''}`}>
          {/* Copy column */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10.5px] tracking-[0.22em] uppercase font-semibold mb-6"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: `1px solid ${chapter.accent}30`,
                color: chapter.accent,
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: chapter.accent, boxShadow: `0 0 10px ${chapter.accent}` }}
              />
              {chapter.eyebrow}
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="font-heading text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tight mb-6"
            >
              {chapter.headline}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="text-base md:text-lg leading-relaxed text-white/65 max-w-xl"
            >
              {chapter.lede}
            </motion.p>

            {/* IP count strip */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex items-center gap-4 text-[11px] tracking-[0.18em] uppercase font-semibold text-white/45"
            >
              <span>
                <span style={{ color: chapter.accent }}>{chapter.ipCount}</span> Fynd {chapter.ipCount === 1 ? 'IP' : 'IPs'}
              </span>
              <span className="w-px h-3 bg-white/15" />
              <span>Hover to illuminate</span>
            </motion.div>
          </div>

          {/* Diorama column */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-3xl p-4 md:p-6"
              style={{
                background: 'linear-gradient(145deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))',
                border: '1px solid rgba(255,255,255,0.08)',
                boxShadow: `inset 0 1px 0 rgba(255,255,255,0.06), 0 20px 50px rgba(0,0,0,0.5), 0 0 80px ${chapter.accent}14`,
              }}
            >
              <Scene highlightedId={highlightedId} />
            </motion.div>
          </div>
        </div>

        {/* IP cards grid */}
        <div
          className={`grid gap-5 md:gap-6 ${
            ips.length >= 4
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
              : ips.length === 3
              ? 'grid-cols-1 md:grid-cols-3'
              : 'grid-cols-1 md:grid-cols-2'
          }`}
        >
          {ips.map((ip, i) => (
            <IPCard
              key={ip.id}
              ip={ip}
              accent={chapter.accent}
              index={i}
              highlighted={highlightedId === ip.id}
              onHover={setHighlightedId}
              onLeave={() => setHighlightedId(null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
