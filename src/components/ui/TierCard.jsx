import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function TierCard({ tier, index }) {
  const isHighlighted = tier.highlighted;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className={`relative rounded-2xl border transition-transform duration-300 ${
        isHighlighted
          ? 'bg-gradient-to-b from-yellow-900/20 to-black/40 border-sephora-gold/50 md:scale-105 z-10 shadow-xl shadow-sephora-gold/10 p-8 pt-14'
          : 'bg-white/[0.04] border-white/[0.08] p-8 pt-10'
      }`}
    >
      {isHighlighted && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-5 py-1.5 bg-sephora-gold rounded-full text-[10px] font-bold text-black tracking-wider uppercase shadow-lg whitespace-nowrap">
          Most Popular
        </div>
      )}

      <div className="text-center mb-8">
        <div
          className="text-2xl font-bold mb-2"
          style={{ color: tier.color }}
        >
          {tier.badge}
        </div>
        <div className="text-sm text-gray-500">Spend {tier.spend}</div>
      </div>

      <ul className="space-y-4">
        {tier.perks.map((perk, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-gray-300 leading-relaxed">
            <Check size={15} className="mt-0.5 shrink-0" style={{ color: tier.color }} />
            {perk}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
