import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { impactMetrics } from '../../data/metrics';
import MetricCard from '../ui/MetricCard';

const categories = [
  { key: 'beautyPass', label: 'Beauty Pass Impact', color: '#8B5CF6' },
  { key: 'fulfilment', label: 'Fulfilment Performance', color: '#F59E0B' },
  { key: 'beautyTech', label: 'Beauty Tech', color: '#EC4899' },
  { key: 'platform', label: 'Platform Performance', color: '#3B82F6' },
];

export default function ImpactWall() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="impact" className="py-32 lg:py-40 bg-gray-950" ref={ref}>
      <div className="max-w-6xl mx-auto px-10 lg:px-16">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-6">
            The Numbers Don't Lie
          </h2>
          <p className="text-lg text-gray-400">
            Real results. Real Sephora. Real proof.
          </p>
        </motion.div>

        <div className="space-y-16">
          {categories.map((cat) => {
            const metrics = impactMetrics[cat.key];
            if (!metrics) return null;

            return (
              <div key={cat.key}>
                <div className="flex items-center gap-4 mb-8">
                  <div
                    className="w-3 h-3 rounded-full shrink-0"
                    style={{ backgroundColor: cat.color }}
                  />
                  <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-[0.2em]">
                    {cat.label}
                  </h3>
                  <div className="h-px flex-1 bg-white/[0.06]" />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                  {metrics.map((metric, i) => (
                    <MetricCard key={i} metric={metric} index={i} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
