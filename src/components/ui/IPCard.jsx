import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { ArrowUpRight } from 'lucide-react';

const statusStyles = {
  live:         { dot: '#10B981', label: 'Live',          ring: 'rgba(16, 185, 129, 0.4)' },
  'in-progress':{ dot: '#F59E0B', label: 'In Progress',   ring: 'rgba(245, 158, 11, 0.4)' },
  poc:          { dot: '#06B6D4', label: 'PoC',           ring: 'rgba(6, 182, 212, 0.4)' },
  partial:      { dot: '#8B5CF6', label: 'Partially Live',ring: 'rgba(139, 92, 246, 0.4)' },
};

const typeStyles = {
  'fynd-product':   { label: 'Fynd',       color: '#C084FC' },
  'fynd-extension': { label: 'Fynd Ext.',  color: '#A78BFA' },
  '3rd-party':      { label: 'Partner',    color: '#60A5FA' },
};

export default function IPCard({ ip, accent, index = 0, onHover, onLeave, highlighted }) {
  const Icon = Icons[ip.icon] || Icons.Sparkles;
  const status = statusStyles[ip.status] || statusStyles.live;
  const type = typeStyles[ip.type] || typeStyles['fynd-product'];

  const clickable = !!ip.link;
  const Wrapper = clickable ? motion.a : motion.div;
  const wrapperProps = clickable
    ? { href: ip.link, target: '_blank', rel: 'noopener noreferrer' }
    : {};

  // Primary stat (first metric or fallback)
  const primaryStat = ip.metrics?.[0]?.value || ip.metric?.split(' ')[0] || null;
  const primaryLabel = ip.metrics?.[0]?.label || null;

  return (
    <Wrapper
      {...wrapperProps}
      onMouseEnter={() => onHover?.(ip.id)}
      onMouseLeave={() => onLeave?.()}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className={`premium-card-3d group ${clickable ? 'cursor-pointer' : ''} ${highlighted ? 'is-highlighted' : ''} block`}
      style={{
        '--ip-accent': accent,
        boxShadow: highlighted
          ? `inset 0 1px 0 rgba(255,255,255,0.16), inset 1px 0 0 rgba(255,255,255,0.08), 0 8px 16px rgba(0,0,0,0.4), 0 20px 40px rgba(0,0,0,0.5), 0 0 80px ${accent}33`
          : undefined,
        borderColor: highlighted ? 'rgba(255,255,255,0.2)' : undefined,
        transform: highlighted ? 'translateY(-4px)' : undefined,
      }}
    >
      {/* Top row — icon chip + status + optional external link */}
      <div className="flex items-start justify-between mb-5">
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
          style={{
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.1)',
            boxShadow: `inset 0 1px 0 rgba(255,255,255,0.08), 0 0 20px ${accent}33`,
          }}
        >
          <Icon className="w-5 h-5 text-white/90" strokeWidth={1.75} />
        </div>

        <div className="flex items-center gap-2.5">
          {/* Status pulse */}
          <div className="flex items-center gap-1.5">
            <span
              className="relative w-1.5 h-1.5 rounded-full"
              style={{ background: status.dot, boxShadow: `0 0 8px ${status.dot}` }}
            />
            <span className="text-[10px] tracking-[0.14em] uppercase font-semibold text-white/55">
              {status.label}
            </span>
          </div>

          {clickable && (
            <ArrowUpRight className="w-3.5 h-3.5 text-white/30 group-hover:text-white/80 transition-colors" />
          )}
        </div>
      </div>

      {/* Title + provider badge */}
      <div className="mb-3">
        <h3 className="font-heading text-[22px] leading-tight text-white/96 mb-1">
          {ip.name}
        </h3>
        <div className="flex items-center gap-2">
          <span
            className="text-[10px] tracking-[0.14em] uppercase font-semibold"
            style={{ color: type.color }}
          >
            {type.label}
          </span>
          <span className="text-white/25">·</span>
          <span className="text-[11px] text-white/50">{ip.role}</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-[13.5px] leading-relaxed text-white/60 mb-5 line-clamp-3">
        {ip.description}
      </p>

      {/* Stat row */}
      {primaryStat && (
        <div className="flex items-baseline gap-2 mb-4">
          <span
            className="font-heading text-2xl bg-clip-text text-transparent"
            style={{ backgroundImage: `linear-gradient(135deg, #FFFFFF 0%, ${accent} 100%)` }}
          >
            {primaryStat}
          </span>
          {primaryLabel && (
            <span className="text-[11px] text-white/50 font-medium">{primaryLabel}</span>
          )}
          {!primaryLabel && ip.metric && (
            <span className="text-[11px] text-white/50 font-medium line-clamp-1">
              {ip.metric.replace(primaryStat, '').trim() || ip.metric}
            </span>
          )}
        </div>
      )}

      {/* Feature chips (first 3) */}
      {ip.features?.length > 0 && (
        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/8">
          {ip.features.slice(0, 3).map((f) => (
            <span
              key={f}
              className="text-[10.5px] px-2 py-1 rounded-md text-white/55"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              {f.length > 36 ? f.slice(0, 34) + '…' : f}
            </span>
          ))}
        </div>
      )}
    </Wrapper>
  );
}
