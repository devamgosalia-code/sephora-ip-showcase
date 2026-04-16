import { motion } from 'framer-motion';

export default function GlassCard({ children, className = '', ...props }) {
  return (
    <motion.div
      className={`bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
