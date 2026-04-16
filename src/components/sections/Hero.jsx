import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: 'easeOut' },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-[#0A0A0A] overflow-hidden px-6">
      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[700px] h-[700px] rounded-full opacity-25 blur-[150px] animate-float-orb"
          style={{
            background: 'radial-gradient(circle, #6C3CE1 0%, transparent 70%)',
            top: '10%',
            left: '25%',
          }}
        />
        <div
          className="absolute w-[500px] h-[500px] rounded-full opacity-15 blur-[130px] animate-float-orb-reverse"
          style={{
            background: 'radial-gradient(circle, #C8102E 0%, transparent 70%)',
            bottom: '15%',
            right: '15%',
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex-1 flex flex-col items-center justify-center py-24">
        <motion.p
          className="label-caps text-gray-500 mb-8 tracking-[0.2em]"
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          A Fynd Case Study
        </motion.p>

        <motion.h1
          className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-[88px] font-bold text-white leading-[1.05] mb-8"
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          Powering the Future
          <br />
          of Beauty Retail
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-12"
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          From the moment a customer searches for the perfect shade to the instant
          it arrives at their door — every touchpoint of Sephora's experience is
          built on Fynd.
        </motion.p>

        <motion.a
          href="#overview"
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-fynd-primary text-white font-medium rounded-full animate-pulse-glow hover:bg-fynd-light transition-colors text-base"
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          Explore the Journey
          <span className="text-lg">↓</span>
        </motion.a>
      </div>

      {/* Bottom proof bar */}
      <motion.div
        className="relative z-10 pb-10 flex items-center justify-center gap-6 text-sm text-gray-500"
        custom={4}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <span>15 Solutions Integrated</span>
        <span className="w-1 h-1 rounded-full bg-gray-600" />
        <span>Omnichannel</span>
        <span className="w-1 h-1 rounded-full bg-gray-600" />
        <span>Live in Production</span>
      </motion.div>
    </section>
  );
}
