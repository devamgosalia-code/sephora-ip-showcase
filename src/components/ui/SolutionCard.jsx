import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as Icons from 'lucide-react';

const statusConfig = {
  live: { color: 'bg-emerald-400', label: 'Live' },
  'in-progress': { color: 'bg-amber-400', label: 'In Progress' },
  poc: { color: 'bg-blue-400', label: 'PoC' },
  partial: { color: 'bg-yellow-400', label: 'Partially Live' },
};

const typeConfig = {
  'fynd-product': { bg: 'bg-purple-500/15', text: 'text-purple-400' },
  'fynd-extension': { bg: 'bg-indigo-500/15', text: 'text-indigo-400' },
  '3rd-party': { bg: 'bg-gray-500/15', text: 'text-gray-400' },
};

export default function SolutionCard({ solution, stageColor }) {
  const [expanded, setExpanded] = useState(false);
  const IconComponent = Icons[solution.icon] || Icons.Box;
  const status = statusConfig[solution.status];
  const type = typeConfig[solution.type];

  const handleClick = () => {
    if (solution.link) {
      window.open(solution.link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <motion.div
      className={`relative bg-white/[0.04] border border-white/[0.08] rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 group ${
        solution.link ? 'cursor-pointer' : 'cursor-default'
      }`}
      onClick={handleClick}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      whileHover={{ boxShadow: `0 12px 48px ${stageColor}15` }}
    >
      {solution.flagship && (
        <div className="absolute -top-3.5 right-6 px-4 py-1.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-[10px] font-bold text-white tracking-wider uppercase shadow-lg">
          Flagship
        </div>
      )}

      {/* Header row */}
      <div className="flex items-start gap-5 mb-5">
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
          style={{ backgroundColor: `${stageColor}15` }}
        >
          <IconComponent size={24} style={{ color: stageColor }} />
        </div>
        <div className="flex-1 min-w-0 pt-1">
          <div className="flex items-center gap-2.5 mb-2.5 flex-wrap">
            <span className={`text-[11px] font-medium px-3 py-1 rounded-full ${type.bg} ${type.text}`}>
              {solution.provider}
            </span>
            <span className="flex items-center gap-1.5 text-[11px] text-gray-500">
              <span className={`w-1.5 h-1.5 rounded-full ${status.color}`} />
              {status.label}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <h4 className="text-white font-semibold text-xl leading-tight">{solution.name}</h4>
            {solution.link && (
              <Icons.ExternalLink size={14} className="text-gray-600 group-hover:text-gray-400 transition-colors shrink-0" />
            )}
          </div>
          <p className="text-gray-500 text-sm mt-1.5">{solution.role}</p>
        </div>
      </div>

      {/* Metric display */}
      {solution.metrics ? (
        <div className="flex flex-wrap gap-3">
          {solution.metrics.map((m, i) => (
            <div key={i} className="bg-white/[0.06] rounded-xl px-5 py-4 flex-1 min-w-[90px]">
              <div className="text-xl font-bold text-white mb-0.5">{m.value}</div>
              <div className="text-[11px] text-gray-500">{m.label}</div>
            </div>
          ))}
        </div>
      ) : solution.metric ? (
        <div className="text-sm text-gray-400 flex items-center gap-3 bg-white/[0.04] rounded-xl px-5 py-4">
          <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: stageColor }} />
          {solution.metric}
        </div>
      ) : null}

      {/* Expanded content on hover */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="mt-6 pt-6 border-t border-white/[0.06]">
              <p className="text-gray-500 text-sm mb-5 leading-relaxed">{solution.description}</p>
              <ul className="space-y-2.5 mb-5">
                {solution.features.map((f, i) => (
                  <li key={i} className="text-sm text-gray-400 flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: stageColor }} />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="text-xs text-gray-500 bg-white/[0.04] rounded-xl px-5 py-4 border border-white/[0.05]">
                <span className="text-gray-400 font-semibold">Fynd's role:</span>{' '}
                {solution.fyndRole}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
