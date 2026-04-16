import { useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useRef } from 'react';
import { journeyStages } from '../../data/journey';
import SolutionCard from '../ui/SolutionCard';
import * as Icons from 'lucide-react';

export default function Journey() {
  const [activeStage, setActiveStage] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const stage = journeyStages[activeStage];

  return (
    <section id="journey" className="py-32 lg:py-40 bg-[#0A0A0A]" ref={ref}>
      <div className="max-w-7xl mx-auto px-10 lg:px-16">
        {/* Section header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="label-caps text-gray-500 mb-5 tracking-[0.2em] text-[11px]">The Customer Journey</p>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-6">
            5 Stages. 15 Solutions.
          </h2>
          <p className="text-lg text-gray-400 max-w-lg mx-auto leading-relaxed">
            Follow the customer from first search to lifelong loyalty.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Stage navigation sidebar */}
          <div className="lg:w-64 shrink-0">
            <div className="lg:sticky lg:top-28 flex lg:flex-col gap-2.5 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 -mx-2 px-2">
              {journeyStages.map((s, i) => {
                const Icon = Icons[s.icon] || Icons.Circle;
                const isActive = activeStage === i;
                return (
                  <button
                    key={s.id}
                    onClick={() => setActiveStage(i)}
                    className={`relative flex items-center gap-4 px-6 py-5 rounded-2xl whitespace-nowrap transition-all duration-300 text-left shrink-0 ${
                      isActive
                        ? 'bg-white/[0.08] border border-white/15'
                        : 'hover:bg-white/[0.04] border border-transparent'
                    }`}
                    style={isActive ? { boxShadow: `0 4px 30px ${s.color}12` } : {}}
                  >
                    {isActive && (
                      <motion.div
                        className="absolute left-0 top-4 bottom-4 w-[3px] rounded-r-full"
                        style={{ backgroundColor: s.color }}
                        layoutId="stageBar"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors"
                      style={{
                        backgroundColor: isActive ? `${s.color}20` : 'rgba(255,255,255,0.05)',
                      }}
                    >
                      <Icon
                        size={20}
                        style={{ color: isActive ? s.color : '#6B7280' }}
                      />
                    </div>
                    <div>
                      <div
                        className="text-[15px] font-semibold transition-colors"
                        style={{ color: isActive ? s.color : '#9CA3AF' }}
                      >
                        {s.name}
                      </div>
                      <div className="text-xs text-gray-600 mt-1">Stage {s.number}</div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Stage content */}
          <div className="flex-1 min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={stage.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
              >
                {/* Stage header */}
                <div className="mb-12">
                  <div className="flex items-center gap-5 mb-6">
                    <span
                      className="text-6xl lg:text-7xl font-bold opacity-15 font-heading"
                      style={{ color: stage.color }}
                    >
                      {stage.number}
                    </span>
                    <div
                      className="h-px flex-1"
                      style={{ backgroundColor: `${stage.color}25` }}
                    />
                  </div>
                  <h3 className="font-heading text-3xl lg:text-4xl font-semibold text-white mb-5 leading-snug">
                    {stage.headline}
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
                    {stage.description}
                  </p>
                </div>

                {/* Solutions grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {stage.solutions.map((solution) => (
                    <SolutionCard
                      key={solution.id}
                      solution={solution}
                      stageColor={stage.color}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
