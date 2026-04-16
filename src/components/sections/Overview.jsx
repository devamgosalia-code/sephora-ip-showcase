import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Globe, Smartphone, Store } from 'lucide-react';
import { journeyStages } from '../../data/journey';
import * as Icons from 'lucide-react';

const channels = [
  { name: 'Web', icon: Globe },
  { name: 'iOS App', icon: Smartphone },
  { name: 'Android App', icon: Smartphone },
  { name: 'In-Store', icon: Store },
];

export default function Overview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const allSolutions = journeyStages.flatMap((stage) =>
    stage.solutions.map((s) => ({
      ...s,
      stageColor: stage.color,
      stageName: stage.name,
    }))
  );

  return (
    <section id="overview" className="py-32 lg:py-40 bg-off-white" ref={ref}>
      <div className="max-w-5xl mx-auto px-10 lg:px-16">
        {/* Heading */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight mb-8">
            15 Solutions.
            <br />
            One Platform.
            <br />
            Zero Compromise.
          </h2>
          <p className="text-lg lg:text-xl text-gray-500 max-w-xl mx-auto leading-relaxed">
            Fynd acts as the unified intelligence layer — connecting Sephora's
            channels to the world's best commerce technology.
          </p>
        </motion.div>

        {/* Architecture diagram */}
        <motion.div
          className="max-w-3xl mx-auto mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Channels row */}
          <div className="text-center mb-5">
            <p className="label-caps text-gray-400 mb-5 text-[11px]">Sephora's Channels</p>
            <div className="flex flex-wrap justify-center gap-4">
              {channels.map((ch) => {
                const Icon = ch.icon;
                return (
                  <div
                    key={ch.name}
                    className="flex items-center gap-2.5 px-6 py-3 bg-white rounded-full border border-gray-200 text-sm text-gray-700 shadow-sm font-medium"
                  >
                    <Icon size={16} className="text-gray-400" />
                    {ch.name}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Connector */}
          <div className="flex justify-center my-3">
            <div className="w-px h-10 bg-gradient-to-b from-gray-300 to-purple-400" />
          </div>

          {/* Fynd Platform bar */}
          <div className="bg-gradient-to-r from-fynd-dark via-fynd-primary to-fynd-light rounded-2xl py-8 px-10 text-center shadow-xl shadow-fynd-primary/10">
            <div className="text-white/60 text-[11px] font-semibold tracking-[0.25em] uppercase mb-2">
              Fynd Platform
            </div>
            <div className="text-white text-xl lg:text-2xl font-semibold">
              The Unified Commerce Layer
            </div>
          </div>

          {/* Connector */}
          <div className="flex justify-center my-3">
            <div className="w-px h-10 bg-gradient-to-b from-purple-400 to-gray-300" />
          </div>
        </motion.div>

        {/* Solutions grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="label-caps text-gray-400 mb-6 text-center text-[11px]">15 Integrated Solutions</p>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-5">
            {allSolutions.map((sol) => {
              const Icon = Icons[sol.icon] || Icons.Box;
              return (
                <div
                  key={sol.id}
                  className="flex flex-col items-center gap-3 p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${sol.stageColor}12` }}
                  >
                    <Icon size={20} style={{ color: sol.stageColor }} />
                  </div>
                  <span className="text-xs text-gray-800 text-center font-semibold leading-tight">
                    {sol.name}
                  </span>
                  <span
                    className="text-[10px] font-medium px-2.5 py-1 rounded-full"
                    style={{
                      backgroundColor: `${sol.stageColor}12`,
                      color: sol.stageColor,
                    }}
                  >
                    {sol.stageName}
                  </span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
