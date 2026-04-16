// Five isometric dioramas — one per chapter.
// Each scene highlights the IPs that power that part of the journey.
// Hover an IP card (passed as highlightedId) -> that part of the scene illuminates.

import React from 'react';

// shared defs + helpers
const Defs = () => (
  <defs>
    <linearGradient id="skin" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.12" />
      <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.02" />
    </linearGradient>
    <linearGradient id="blue" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stopColor="#3B82F6" />
      <stop offset="100%" stopColor="#06B6D4" />
    </linearGradient>
    <linearGradient id="pink" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stopColor="#EC4899" />
      <stop offset="100%" stopColor="#8B5CF6" />
    </linearGradient>
    <linearGradient id="green" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stopColor="#10B981" />
      <stop offset="100%" stopColor="#06B6D4" />
    </linearGradient>
    <linearGradient id="amber" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stopColor="#F59E0B" />
      <stop offset="100%" stopColor="#EF4444" />
    </linearGradient>
    <linearGradient id="violet" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stopColor="#8B5CF6" />
      <stop offset="100%" stopColor="#EC4899" />
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.25" />
      <stop offset="70%" stopColor="#FFFFFF" stopOpacity="0.04" />
      <stop offset="100%" stopColor="transparent" />
    </radialGradient>
  </defs>
);

// Floor grid + ambient halo
const Stage = ({ color = '#3B82F6' }) => (
  <>
    {/* ambient halo */}
    <ellipse cx="300" cy="220" rx="260" ry="120" fill="url(#glow)" opacity="0.6" />
    {/* floor grid — faux isometric */}
    <g opacity="0.18">
      {Array.from({ length: 10 }).map((_, i) => (
        <line
          key={`h${i}`}
          x1={100 + i * 20}
          y1={260 + i * 6}
          x2={500 - i * 20}
          y2={260 + i * 6}
          stroke={color}
          strokeWidth="0.5"
        />
      ))}
      {Array.from({ length: 10 }).map((_, i) => (
        <line
          key={`v${i}`}
          x1={100 + i * 40}
          y1={266}
          x2={200 + i * 40}
          y2={320}
          stroke={color}
          strokeWidth="0.5"
        />
      ))}
    </g>
  </>
);

const highlightProps = (active) => ({
  style: {
    filter: active ? 'drop-shadow(0 0 12px currentColor)' : 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))',
    opacity: active ? 1 : 0.92,
    transition: 'filter 0.4s, opacity 0.4s',
  },
});

/* ─────────────────────────────────────────────────────
   CHAPTER 01 — DISCOVER
   A floating shelf of products with:
   - Vertex AI Search beams (down rays + magnifier)
   - Smart Sell Metrics ranking arrows
   - Dynamic Yield personalisation orbit
   ───────────────────────────────────────────────────── */
export function DiscoverScene({ highlightedId }) {
  const on = (id) => highlightedId === id;
  return (
    <svg viewBox="0 0 600 440" className="w-full h-auto">
      <Defs />
      <Stage color="#3B82F6" />

      {/* Vertex AI Search — beams + magnifier overhead */}
      <g className="iso-float-slow" color="#60A5FA" {...highlightProps(on('vertex-ai'))}>
        <line x1="200" y1="30" x2="200" y2="180" stroke="#60A5FA" strokeWidth="1" strokeDasharray="2 4" opacity="0.6" />
        <line x1="300" y1="20" x2="300" y2="170" stroke="#60A5FA" strokeWidth="1" strokeDasharray="2 4" opacity="0.7" />
        <line x1="400" y1="30" x2="400" y2="180" stroke="#60A5FA" strokeWidth="1" strokeDasharray="2 4" opacity="0.6" />
        <circle cx="300" cy="40" r="18" fill="none" stroke="url(#blue)" strokeWidth="2" />
        <line x1="313" y1="53" x2="322" y2="62" stroke="url(#blue)" strokeWidth="2.5" strokeLinecap="round" />
        <text x="300" y="44" textAnchor="middle" fontSize="8" fontFamily="monospace" fill="#93C5FD" fontWeight="600">Q</text>
      </g>

      {/* the shelf */}
      <g>
        {/* shelf base — isometric */}
        <path d="M130 300 L470 300 L500 320 L160 320 Z" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.12)" strokeWidth="0.6" />
        <path d="M470 300 L500 320 L500 340 L470 320 Z" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />

        {/* 6 products on the shelf */}
        {[
          { x: 170, ranked: 1 },
          { x: 220, ranked: 2 },
          { x: 270, ranked: 3 },
          { x: 320, ranked: 4 },
          { x: 370, ranked: 5 },
          { x: 420, ranked: 6 },
        ].map((p, i) => {
          const isTop = p.ranked <= 3 && on('smart-sell');
          return (
            <g key={i} className={i % 2 === 0 ? 'iso-float' : 'iso-float-alt'}>
              {/* bottle body */}
              <rect
                x={p.x - 14}
                y={240}
                width="28"
                height="60"
                rx="4"
                fill={isTop ? 'url(#blue)' : 'url(#skin)'}
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="0.6"
                style={{ transition: 'fill 0.4s' }}
              />
              {/* cap */}
              <rect x={p.x - 8} y={230} width="16" height="14" rx="2" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.25)" strokeWidth="0.5" />
              {/* label */}
              <rect x={p.x - 11} y={258} width="22" height="14" rx="1" fill="rgba(0,0,0,0.25)" />

              {/* rank badge — Smart Sell Metrics */}
              {on('smart-sell') && p.ranked <= 3 && (
                <g>
                  <circle cx={p.x} cy={224} r="8" fill="#60A5FA" />
                  <text x={p.x} y={228} textAnchor="middle" fontSize="9" fontWeight="700" fill="#0A0612">{p.ranked}</text>
                </g>
              )}
            </g>
          );
        })}
      </g>

      {/* Smart Sell Metrics — ranking arrows */}
      <g color="#60A5FA" {...highlightProps(on('smart-sell'))}>
        <path d="M520 280 L520 200" stroke="#60A5FA" strokeWidth="1.5" opacity="0.7" />
        <path d="M515 210 L520 200 L525 210" fill="none" stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <text x="540" y="240" fontSize="9" fontFamily="monospace" fontWeight="600" fill="#93C5FD" opacity="0.85">RANK</text>
      </g>

      {/* Dynamic Yield — personalisation orbit */}
      <g color="#C084FC" {...highlightProps(on('dynamic-yield'))}>
        <g className="iso-rotate-slow" style={{ transformOrigin: '300px 260px' }}>
          <circle cx="300" cy="260" r="165" fill="none" stroke="url(#pink)" strokeWidth="1" strokeDasharray="1 6" opacity={on('dynamic-yield') ? 0.9 : 0.4} />
          <circle cx="465" cy="260" r="4" fill="#C084FC" />
          <circle cx="135" cy="260" r="4" fill="#EC4899" />
        </g>
        {/* user silhouette */}
        <g className="iso-float-alt">
          <circle cx="80" cy="220" r="8" fill="rgba(236, 72, 153, 0.8)" />
          <path d="M68 252 Q80 232 92 252 L92 270 L68 270 Z" fill="rgba(236, 72, 153, 0.8)" />
        </g>
      </g>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────
   CHAPTER 02 — EXPERIENCE
   A phone with an AR mirror overlay + floating review stars
   - GlamAR: AR face mesh overlay
   - BazaarVoice: orbiting review stars and quote bubbles
   ───────────────────────────────────────────────────── */
export function ExperienceScene({ highlightedId }) {
  const on = (id) => highlightedId === id;
  return (
    <svg viewBox="0 0 600 440" className="w-full h-auto">
      <Defs />
      <Stage color="#EC4899" />

      {/* the phone */}
      <g className="iso-float">
        {/* phone frame */}
        <rect x="240" y="90" width="120" height="230" rx="16" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.25)" strokeWidth="1.2" />
        <rect x="250" y="105" width="100" height="200" rx="8" fill="rgba(0,0,0,0.6)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />

        {/* GlamAR face overlay */}
        <g color="#F9A8D4" {...highlightProps(on('glamar'))}>
          <circle cx="300" cy="175" r="24" fill="rgba(255,255,255,0.06)" stroke="url(#pink)" strokeWidth="1.2" strokeDasharray="2 3" />
          {/* face mesh dots */}
          {[
            [292, 170], [308, 170], [296, 180], [304, 180],
            [288, 175], [312, 175], [300, 165], [300, 190],
          ].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="1.2" fill="#F9A8D4" opacity={on('glamar') ? 1 : 0.6} />
          ))}
          {/* lip shade swatch */}
          <ellipse cx="300" cy="185" rx="4" ry="1.5" fill="url(#pink)" />

          {/* shade bar */}
          <g>
            <rect x="258" y="225" width="84" height="10" rx="2" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
            {['#FECACA', '#F9A8D4', '#EC4899', '#BE185D', '#831843'].map((c, i) => (
              <circle key={i} cx={266 + i * 17} cy={230} r="3.5" fill={c} stroke={i === 2 ? '#FFFFFF' : 'transparent'} strokeWidth="1" />
            ))}
          </g>

          {/* CTA button */}
          <rect x="260" y="275" width="80" height="18" rx="9" fill="url(#pink)" opacity={on('glamar') ? 1 : 0.85} />
          <text x="300" y="287" textAnchor="middle" fontSize="8" fontWeight="600" fill="#FFFFFF">Try On</text>
        </g>
      </g>

      {/* BazaarVoice — orbiting stars + quote */}
      <g color="#FBBF24" {...highlightProps(on('bazaarvoice'))}>
        <g className="iso-rotate-slow" style={{ transformOrigin: '300px 200px' }}>
          {[0, 72, 144, 216, 288].map((deg, i) => {
            const r = 150;
            const rad = (deg * Math.PI) / 180;
            const x = 300 + Math.cos(rad) * r;
            const y = 200 + Math.sin(rad) * r * 0.55; // flatten for iso
            return (
              <g key={i} transform={`translate(${x} ${y})`}>
                <path
                  d="M0 -6 L1.8 -1.8 L6 -1.8 L2.6 1 L3.8 6 L0 3 L-3.8 6 L-2.6 1 L-6 -1.8 L-1.8 -1.8 Z"
                  fill="#FBBF24"
                  opacity={on('bazaarvoice') ? 1 : 0.7}
                />
              </g>
            );
          })}
        </g>

        {/* floating review card */}
        <g className="iso-float-slow" transform="translate(430 140)">
          <rect x="0" y="0" width="110" height="52" rx="8" fill="rgba(251, 191, 36, 0.08)" stroke="rgba(251, 191, 36, 0.3)" strokeWidth="0.6" />
          <g transform="translate(10 10)">
            {[0, 1, 2, 3, 4].map((i) => (
              <path
                key={i}
                d={`M${i * 10} 0 L${i * 10 + 1.5} 3.5 L${i * 10 + 5} 3.5 L${i * 10 + 2.2} 5.5 L${i * 10 + 3.3} 9 L${i * 10} 7 L${i * 10 - 3.3} 9 L${i * 10 - 2.2} 5.5 L${i * 10 - 5} 3.5 L${i * 10 - 1.5} 3.5 Z`}
                fill="#FBBF24"
                transform={`translate(5 0)`}
              />
            ))}
          </g>
          <text x="10" y="32" fontSize="7" fill="rgba(255,255,255,0.8)">"Exact match to my</text>
          <text x="10" y="42" fontSize="7" fill="rgba(255,255,255,0.8)">skin tone — loved it."</text>
        </g>
      </g>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────
   CHAPTER 03 — PURCHASE
   Isometric shopping bag with product tags + coupon stickers
   - Fynd Commerce: storefront + cart structure
   - Automated Promo Tagging: auto-applying coupon stickers
   ───────────────────────────────────────────────────── */
export function PurchaseScene({ highlightedId }) {
  const on = (id) => highlightedId === id;
  return (
    <svg viewBox="0 0 600 440" className="w-full h-auto">
      <Defs />
      <Stage color="#10B981" />

      {/* Fynd Commerce — isometric shopping bag */}
      <g color="#6EE7B7" {...highlightProps(on('commerce'))}>
        <g className="iso-float">
          {/* bag body — isometric */}
          <path d="M220 180 L380 180 L400 340 L200 340 Z" fill="url(#green)" opacity={on('commerce') ? 0.8 : 0.55} stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
          <path d="M380 180 L400 180 L420 340 L400 340 Z" fill="url(#green)" opacity="0.4" stroke="rgba(255,255,255,0.2)" strokeWidth="0.7" />

          {/* bag handles */}
          <path d="M245 180 Q245 150 275 150 Q300 150 300 180" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2" />
          <path d="M320 180 Q320 150 350 150 Q375 150 375 180" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2" />

          {/* product cards inside bag */}
          <rect x="235" y="225" width="62" height="85" rx="4" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" />
          <rect x="305" y="230" width="62" height="85" rx="4" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" />

          {/* logo mark on bag */}
          <circle cx="300" cy="260" r="3" fill="rgba(255,255,255,0.9)" opacity="0.6" />
        </g>
      </g>

      {/* Automated Promo Tagging — falling/floating coupons */}
      <g color="#10B981" {...highlightProps(on('promo-tagging'))}>
        {[
          { x: 130, y: 130, deg: -12, txt: '20% OFF', fill: 'url(#green)' },
          { x: 450, y: 100, deg: 10, txt: 'BOGO', fill: 'url(#green)' },
          { x: 470, y: 220, deg: -6, txt: 'SET DEAL', fill: 'url(#green)' },
          { x: 110, y: 230, deg: 14, txt: 'NEW USER', fill: 'url(#green)' },
        ].map((c, i) => (
          <g key={i} className={i % 2 === 0 ? 'iso-float' : 'iso-float-alt'} transform={`translate(${c.x} ${c.y}) rotate(${c.deg})`}>
            <rect x="-30" y="-10" width="60" height="20" rx="3" fill={c.fill} opacity={on('promo-tagging') ? 1 : 0.8} />
            {/* ticket notch */}
            <circle cx="-30" cy="0" r="3" fill="#0A0612" />
            <circle cx="30" cy="0" r="3" fill="#0A0612" />
            <text x="0" y="4" textAnchor="middle" fontSize="8" fontWeight="700" fill="#0A0612">{c.txt}</text>
          </g>
        ))}

        {/* auto-apply spark lines */}
        {on('promo-tagging') && (
          <g opacity="0.7">
            <line x1="145" y1="135" x2="220" y2="200" stroke="#6EE7B7" strokeWidth="1" strokeDasharray="2 3" />
            <line x1="440" y1="110" x2="380" y2="195" stroke="#6EE7B7" strokeWidth="1" strokeDasharray="2 3" />
          </g>
        )}
      </g>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────
   CHAPTER 04 — FULFIL (the centrepiece diorama)
   Isometric warehouse: racks, conveyor, truck, CDN globe
   - Fynd OMS: central routing hub
   - Fynd Logistics: truck + India map pins
   - Fynd Konnect: warehouse + ERP cables
   - Boltic: workflow nodes
   - Pixelbin: CDN edge nodes
   ───────────────────────────────────────────────────── */
export function FulfilScene({ highlightedId }) {
  const on = (id) => highlightedId === id;
  return (
    <svg viewBox="0 0 600 480" className="w-full h-auto">
      <Defs />
      <Stage color="#F59E0B" />

      {/* Fynd Konnect — warehouse shelves (back-left) */}
      <g color="#FCD34D" {...highlightProps(on('konnect'))}>
        <g className="iso-float-slow">
          {/* shelving unit */}
          <path d="M70 180 L170 180 L190 200 L90 200 Z" fill="rgba(252, 211, 77, 0.1)" stroke="rgba(252, 211, 77, 0.4)" strokeWidth="0.8" />
          <path d="M170 180 L190 200 L190 260 L170 240 Z" fill="rgba(252, 211, 77, 0.06)" stroke="rgba(252, 211, 77, 0.3)" strokeWidth="0.7" />
          <path d="M90 200 L190 200 L190 260 L90 260 Z" fill="rgba(252, 211, 77, 0.08)" stroke="rgba(252, 211, 77, 0.35)" strokeWidth="0.7" />

          {/* boxes on shelf */}
          {[0, 1, 2].map((i) => (
            <rect key={i} x={100 + i * 28} y="210" width="22" height="16" fill={on('konnect') ? 'url(#amber)' : 'rgba(252, 211, 77, 0.35)'} stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" />
          ))}
          {[0, 1, 2].map((i) => (
            <rect key={i} x={100 + i * 28} y="232" width="22" height="16" fill={on('konnect') ? 'url(#amber)' : 'rgba(252, 211, 77, 0.25)'} stroke="rgba(255,255,255,0.25)" strokeWidth="0.5" />
          ))}
        </g>
        <text x="130" y="285" textAnchor="middle" fontSize="9" fontFamily="monospace" fill="#FCD34D" opacity="0.8" fontWeight="600">WAREHOUSE</text>
      </g>

      {/* Fynd OMS — central routing hub */}
      <g color="#F59E0B" {...highlightProps(on('oms'))}>
        <g className="iso-float" style={{ transformOrigin: '300px 200px' }}>
          {/* hub cube — isometric */}
          <path d="M280 170 L320 170 L340 190 L300 190 Z" fill="url(#amber)" opacity={on('oms') ? 1 : 0.85} />
          <path d="M320 170 L340 190 L340 230 L320 210 Z" fill="url(#amber)" opacity="0.7" />
          <path d="M280 170 L280 210 L300 230 L300 190 Z" fill="url(#amber)" opacity="0.55" />
          <text x="310" y="195" textAnchor="middle" fontSize="9" fontWeight="700" fill="#0A0612">OMS</text>

          {/* pulsing ring */}
          <circle cx="310" cy="200" r={on('oms') ? 55 : 42} fill="none" stroke="#F59E0B" strokeWidth="1" strokeDasharray="2 4" opacity={on('oms') ? 0.8 : 0.4} />
        </g>
      </g>

      {/* Fynd Logistics — truck + pin trail */}
      <g color="#EF4444" {...highlightProps(on('logistics'))}>
        <g className="iso-float-alt">
          {/* truck */}
          <path d="M380 240 L470 240 L490 260 L400 260 Z" fill="rgba(239, 68, 68, 0.85)" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" />
          <path d="M470 240 L490 260 L490 290 L470 270 Z" fill="rgba(239, 68, 68, 0.6)" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
          <path d="M380 240 L400 260 L400 290 L380 270 Z" fill="rgba(239, 68, 68, 0.5)" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
          {/* cab */}
          <path d="M440 230 L470 230 L480 240 L450 240 Z" fill="rgba(239, 68, 68, 0.9)" />
          {/* wheels */}
          <circle cx="410" cy="295" r="6" fill="#0A0612" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
          <circle cx="470" cy="295" r="6" fill="#0A0612" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
        </g>

        {/* pin trail */}
        {on('logistics') && [
          { x: 210, y: 330 }, { x: 270, y: 350 }, { x: 330, y: 370 }, { x: 390, y: 355 },
        ].map((p, i) => (
          <g key={i} className="iso-float-slow">
            <circle cx={p.x} cy={p.y} r="4" fill="#EF4444" />
            <circle cx={p.x} cy={p.y} r="8" fill="#EF4444" opacity="0.25" />
          </g>
        ))}
      </g>

      {/* Boltic — workflow graph */}
      <g color="#8B5CF6" {...highlightProps(on('boltic'))}>
        <g className="iso-float-slow" transform="translate(70 340)">
          {[
            { x: 0, y: 0 }, { x: 30, y: -10 }, { x: 60, y: 0 }, { x: 90, y: -10 }, { x: 120, y: 0 },
          ].map((n, i, arr) => (
            <g key={i}>
              {i < arr.length - 1 && (
                <line x1={n.x} y1={n.y} x2={arr[i + 1].x} y2={arr[i + 1].y} stroke="#A78BFA" strokeWidth="1" strokeDasharray="1 3" opacity={on('boltic') ? 0.8 : 0.4} />
              )}
              <circle cx={n.x} cy={n.y} r="4" fill={on('boltic') ? '#8B5CF6' : 'rgba(139, 92, 246, 0.5)'} />
            </g>
          ))}
          <text x="60" y="22" textAnchor="middle" fontSize="7" fontFamily="monospace" fill="#A78BFA" opacity="0.8" fontWeight="600">WORKFLOWS</text>
        </g>
      </g>

      {/* Pixelbin — CDN edge globe */}
      <g color="#06B6D4" {...highlightProps(on('pixelbin'))}>
        <g className="iso-float" transform="translate(510 130)">
          <circle cx="0" cy="0" r="22" fill="rgba(6, 182, 212, 0.15)" stroke="url(#blue)" strokeWidth="1.2" />
          {/* globe meridians */}
          <ellipse cx="0" cy="0" rx="22" ry="8" fill="none" stroke="rgba(6, 182, 212, 0.5)" strokeWidth="0.7" />
          <ellipse cx="0" cy="0" rx="8" ry="22" fill="none" stroke="rgba(6, 182, 212, 0.5)" strokeWidth="0.7" />
          {/* edge nodes */}
          {[0, 60, 120, 180, 240, 300].map((deg) => {
            const rad = (deg * Math.PI) / 180;
            return (
              <circle
                key={deg}
                cx={Math.cos(rad) * 22}
                cy={Math.sin(rad) * 22}
                r="2"
                fill="#22D3EE"
                opacity={on('pixelbin') ? 1 : 0.7}
              />
            );
          })}
          <text x="0" y="44" textAnchor="middle" fontSize="7" fontFamily="monospace" fill="#67E8F9" opacity="0.85" fontWeight="600">CDN</text>
        </g>
      </g>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────
   CHAPTER 05 — RETAIN
   Isometric loyalty lounge
   - Fynd Engage: Beauty Pass card centerpiece
   - Kaily: chat bubbles
   - UCP: NPS gauge
   ───────────────────────────────────────────────────── */
export function RetainScene({ highlightedId }) {
  const on = (id) => highlightedId === id;
  return (
    <svg viewBox="0 0 600 440" className="w-full h-auto">
      <Defs />
      <Stage color="#8B5CF6" />

      {/* Fynd Engage — Beauty Pass card (center hero) */}
      <g color="#C084FC" {...highlightProps(on('fynd-engage'))}>
        <g className="iso-float" style={{ transformOrigin: '300px 210px' }}>
          {/* card back */}
          <g transform="translate(300 210) rotate(-8)">
            <rect x="-85" y="-52" width="170" height="104" rx="10" fill="url(#violet)" opacity={on('fynd-engage') ? 1 : 0.85} />
            {/* glossy highlight */}
            <rect x="-85" y="-52" width="170" height="28" rx="10" fill="rgba(255,255,255,0.12)" />
            {/* chip */}
            <rect x="-68" y="-18" width="20" height="16" rx="2" fill="rgba(255,255,255,0.35)" stroke="rgba(255,255,255,0.5)" strokeWidth="0.5" />
            {/* sephora mark */}
            <text x="-68" y="-34" fontSize="8" fontFamily="serif" letterSpacing="2" fill="#FFFFFF" opacity="0.95" fontWeight="500">SEPHORA</text>
            {/* tier label */}
            <text x="68" y="-34" fontSize="7" fontFamily="monospace" textAnchor="end" fill="#FFFFFF" opacity="0.8" fontWeight="600">PLATINUM</text>
            {/* card number */}
            <text x="-68" y="15" fontSize="9" fontFamily="monospace" fill="#FFFFFF" opacity="0.9" letterSpacing="2">•••• 4825</text>
            {/* cardholder */}
            <text x="-68" y="40" fontSize="6" fontFamily="monospace" fill="rgba(255,255,255,0.6)" letterSpacing="1">BEAUTY PASS</text>
            {/* crown */}
            <path d="M 56 30 L 60 22 L 64 28 L 68 20 L 72 28 L 76 22 L 80 30 Z" fill="rgba(255,255,255,0.9)" />
          </g>

          {/* points orbiting */}
          <g className="iso-rotate-slow" style={{ transformOrigin: '300px 210px' }}>
            <circle cx="410" cy="210" r="4" fill="#F9A8D4" />
            <circle cx="190" cy="210" r="4" fill="#C084FC" />
          </g>
        </g>
      </g>

      {/* Kaily — chat bubbles */}
      <g color="#06B6D4" {...highlightProps(on('kaily'))}>
        <g className="iso-float-alt" transform="translate(80 100)">
          <rect x="0" y="0" width="90" height="36" rx="10" fill="rgba(6, 182, 212, 0.12)" stroke="rgba(6, 182, 212, 0.4)" strokeWidth="0.6" />
          <rect x="5" y="40" width="14" height="6" transform="skewX(-20)" fill="rgba(6, 182, 212, 0.4)" />
          <text x="10" y="15" fontSize="7" fill="rgba(255,255,255,0.85)">Where's my order?</text>
          <text x="10" y="27" fontSize="6" fontFamily="monospace" fill="rgba(6, 182, 212, 0.8)">— 2s ago</text>
        </g>

        <g className="iso-float" transform="translate(440 340)">
          <rect x="0" y="0" width="110" height="40" rx="10" fill="rgba(6, 182, 212, 0.15)" stroke="rgba(6, 182, 212, 0.5)" strokeWidth="0.6" />
          <text x="8" y="15" fontSize="7" fill="rgba(255,255,255,0.9)" fontWeight="600">Kaily · AI</text>
          <text x="8" y="27" fontSize="6.5" fill="rgba(255,255,255,0.75)">Out for delivery —</text>
          <text x="8" y="35" fontSize="6.5" fill="rgba(255,255,255,0.75)">arriving by 6pm.</text>
        </g>
      </g>

      {/* UCP — NPS gauge */}
      <g color="#F472B6" {...highlightProps(on('ucp'))}>
        <g className="iso-float-slow" transform="translate(490 120)">
          {/* arc */}
          <path d="M -32 0 A 32 32 0 0 1 32 0" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="5" strokeLinecap="round" />
          <path
            d="M -32 0 A 32 32 0 0 1 32 0"
            fill="none"
            stroke="url(#violet)"
            strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray="100"
            strokeDashoffset={on('ucp') ? '12' : '30'}
            style={{ transition: 'stroke-dashoffset 0.6s' }}
          />
          <text x="0" y="-2" textAnchor="middle" fontSize="16" fontWeight="700" fill="#FFFFFF">72</text>
          <text x="0" y="16" textAnchor="middle" fontSize="6" fontFamily="monospace" fill="rgba(255,255,255,0.6)" letterSpacing="1">NPS</text>
        </g>
      </g>
    </svg>
  );
}
