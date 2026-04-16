import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import AnimatedCounter from './AnimatedCounter';

const categoryColors = {
  'Beauty Pass': '#8B5CF6',
  'Fulfilment': '#F59E0B',
  'Beauty Tech': '#EC4899',
  'Platform': '#3B82F6',
};

export default function MetricCard({ metric, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const color = categoryColors[metric.category] || '#6C3CE1';

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="bg-white/[0.04] border border-white/[0.06] rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300"
    >
      <div className="flex items-stretch">
        {/* Color accent bar */}
        <div
          className="w-1 shrink-0 rounded-r-full my-4"
          style={{ backgroundColor: color }}
        />
        <div className="py-7 px-6 flex-1 min-w-0">
          <AnimatedCounter
            value={metric.value}
            delay={index * 0.05}
            className="block text-2xl lg:text-3xl font-bold text-white mb-1.5 truncate"
          />
          <span className="text-xs text-gray-500">{metric.label}</span>
        </div>
      </div>
    </motion.div>
  );
}
