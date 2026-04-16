import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function PitchClose() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="pitch" className="relative py-36 lg:py-48 bg-[#0A0A0A] overflow-hidden" ref={ref}>
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute w-[1000px] h-[1000px] rounded-full opacity-15 blur-[200px]"
          style={{
            background: 'radial-gradient(circle, #6C3CE1 0%, transparent 70%)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-10 lg:px-16 text-center">
        <motion.p
          className="label-caps text-gray-500 mb-10 tracking-[0.2em] text-[11px]"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Trusted by Sephora. Built for You.
        </motion.p>

        <motion.h2
          className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-12 leading-[1.1]"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          If We Can Power Sephora,
          <br />
          We Can Power You.
        </motion.h2>

        <motion.p
          className="text-gray-400 text-lg leading-relaxed mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Sephora India runs on Fynd. Every search, every recommendation, every
          try-on, every order, every delivery, every loyalty point — powered by
          one unified platform. We didn't just build features. We built an
          end-to-end commerce experience for one of the world's most demanding
          beauty brands.
        </motion.p>

        <motion.p
          className="text-white font-semibold text-xl mb-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Your brand deserves the same.
        </motion.p>

        <motion.div
          className="w-20 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mx-auto mb-10"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
        />

        <motion.div
          className="flex items-center justify-center gap-8 text-sm text-gray-500 mb-14"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <span>15 Solutions</span>
          <span className="w-1 h-1 rounded-full bg-gray-600" />
          <span>Omnichannel</span>
          <span className="w-1 h-1 rounded-full bg-gray-600" />
          <span>Live in Production</span>
        </motion.div>

      </div>
    </section>
  );
}
