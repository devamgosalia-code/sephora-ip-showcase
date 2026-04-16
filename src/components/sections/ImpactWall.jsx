import { motion } from 'framer-motion';
import { impactMetrics } from '../../data/metrics';

const categories = [
  { key: 'beautyPass', label: 'Beauty Pass Impact',    color: '#8B5CF6' },
  { key: 'fulfilment', label: 'Fulfilment Performance',color: '#F59E0B' },
  { key: 'beautyTech', label: 'Beauty Tech',           color: '#EC4899' },
  { key: 'platform',   label: 'Platform Performance',  color: '#3B82F6' },
];

export default function ImpactWall() {
  return (
    <section
      id="impact"
      className="relative isolate overflow-hidden text-white"
      style={{ backgroundColor: '#0A0612' }}
    >
      <div className="why-aurora" aria-hidden="true" />
      <div className="why-grid" aria-hidden="true" />
      <div
        className="why-orb why-orb-1"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(circle, rgba(245, 158, 11, 0.22) 0%, rgba(139, 92, 246, 0.10) 40%, transparent 70%)',
        }}
      />
      <div className="why-orb why-orb-2" aria-hidden="true" />
      <div className="why-orb why-orb-3" aria-hidden="true" />

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
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10.5px] tracking-[0.22em] uppercase font-semibold"
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(245, 158, 11, 0.3)',
              color: '#F59E0B',
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: '#F59E0B', boxShadow: '0 0 10px #F59E0B' }}
            />
            Proof · The Impact
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight"
          >
            The numbers,{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  'linear-gradient(90deg, #F59E0B 0%, #EC4899 50%, #8B5CF6 100%)',
              }}
            >
              live from production.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-base md:text-lg leading-relaxed text-white/65"
          >
            Every number below is a real, measured outcome from Sephora India —
            powered by the 15 Fynd IPs in this case study.
          </motion.p>
        </div>

        {/* Categories */}
        <div className="space-y-14 md:space-y-16">
          {categories.map((cat, catIdx) => {
            const metrics = impactMetrics[cat.key];
            if (!metrics?.length) return null;
            return (
              <motion.div
                key={cat.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: catIdx * 0.05 }}
              >
                {/* Category divider */}
                <div className="flex items-center gap-4 mb-6">
                  <span
                    className="w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ background: cat.color, boxShadow: `0 0 10px ${cat.color}` }}
                  />
                  <h3 className="text-[11px] font-semibold text-white/60 uppercase tracking-[0.22em]">
                    {cat.label}
                  </h3>
                  <div
                    className="h-px flex-1"
                    style={{ background: `linear-gradient(to right, ${cat.color}50, transparent)` }}
                  />
                </div>

                {/* Metric grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {metrics.map((m, i) => (
                    <MetricTile key={i} metric={m} accent={cat.color} index={i} />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function MetricTile({ metric, accent, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
      className="relative premium-card-3d"
      style={{ padding: '22px 20px' }}
    >
      {/* left accent bar */}
      <div
        className="absolute left-0 top-5 bottom-5 w-[3px] rounded-full"
        style={{
          background: accent,
          boxShadow: `0 0 12px ${accent}`,
        }}
      />
      <div className="pl-3">
        <div
          className="font-heading text-[34px] md:text-[40px] leading-none tracking-tight bg-clip-text text-transparent"
          style={{
            backgroundImage: `linear-gradient(135deg, #FFFFFF 0%, ${accent} 140%)`,
          }}
        >
          {metric.value}
        </div>
        <div className="mt-2 text-[12.5px] text-white/60 leading-snug">
          {metric.label}
        </div>
      </div>
    </motion.div>
  );
}
