import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Globe, Smartphone, Store } from 'lucide-react';
import { beautyPassData } from '../../data/beautypass';
import AnimatedCounter from '../ui/AnimatedCounter';

const channelIcons = [Globe, Smartphone, Smartphone, Store];

const impactMetrics = [
  { value: '+12.6%', label: 'Gross Sales' },
  { value: '+8.8%', label: 'Total Orders' },
  { value: '-13.7%', label: 'Items Returned' },
  { value: '42.5%', label: 'Repeat Customer Rate' },
  { value: '+4.7%', label: 'Items Per Order' },
  { value: '+1pp', label: 'Gross Margin' },
];

export default function BeautyPass() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="beautypass" className="py-32 lg:py-40 bg-[#0A0A0A] relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950/20 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-10 lg:px-16">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="label-caps text-fynd-light mb-5 tracking-[0.2em] text-[11px]">Flagship Programme</p>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-6">
            Sephora Beauty Pass
          </h2>
          <p className="text-lg text-gray-400 max-w-lg mx-auto leading-relaxed mb-10">
            India's most rewarding beauty loyalty programme, powered by Fynd Engage
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {beautyPassData.channels.map((ch, i) => {
              const Icon = channelIcons[i];
              return (
                <div
                  key={ch}
                  className="flex items-center gap-2.5 px-5 py-2.5 bg-white/[0.05] border border-white/[0.08] rounded-full text-sm text-gray-300 font-medium"
                >
                  <Icon size={14} className="text-gray-500" />
                  {ch}
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Impact metrics */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {impactMetrics.map((m, i) => (
            <div key={i} className="text-center py-10 px-6 bg-white/[0.04] border border-white/[0.06] rounded-2xl">
              <AnimatedCounter
                value={m.value}
                delay={i * 0.1}
                className="block text-4xl lg:text-5xl font-bold text-white mb-3"
              />
              <span className="text-sm text-gray-500">{m.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
