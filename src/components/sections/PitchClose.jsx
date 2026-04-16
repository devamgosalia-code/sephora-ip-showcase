import { motion } from 'framer-motion';

export default function PitchClose() {
  return (
    <section
      id="pitch"
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
            'radial-gradient(circle, rgba(200, 16, 46, 0.24) 0%, rgba(200, 16, 46, 0.12) 40%, transparent 70%)',
        }}
      />
      <div
        className="why-orb why-orb-2"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(circle, rgba(139, 92, 246, 0.22) 0%, rgba(139, 92, 246, 0.10) 40%, transparent 70%)',
        }}
      />
      <div className="why-orb why-orb-3" aria-hidden="true" />

      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-24"
        style={{ background: 'linear-gradient(to bottom, rgba(10,6,18,1), transparent)' }}
        aria-hidden="true"
      />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 py-32 md:py-44 text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10.5px] tracking-[0.22em] uppercase font-semibold"
          style={{
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.15)',
            color: 'rgba(255,255,255,0.85)',
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: '#C8102E', boxShadow: '0 0 10px #C8102E' }}
          />
          The Close
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-8 font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight"
        >
          If we can power{' '}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                'linear-gradient(90deg, #C8102E 0%, #EC4899 40%, #8B5CF6 70%, #3B82F6 100%)',
            }}
          >
            Sephora
          </span>,
          <br />
          we can power you.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-8 text-base md:text-lg leading-relaxed text-white/65 max-w-2xl mx-auto"
        >
          Every search. Every try-on. Every order. Every delivery. Every loyalty
          point. One platform, 15 solutions, already live at one of the most
          demanding beauty brands in the world.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[11px] tracking-[0.18em] uppercase font-semibold text-white/45"
        >
          <span className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-white/40" />15 Solutions</span>
          <span className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-white/40" />Omnichannel</span>
          <span className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-white/40" />AI-Native</span>
          <span className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-white/40" />India-First</span>
          <span className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-white/40" />Live in Production</span>
        </motion.div>
      </div>
    </section>
  );
}
