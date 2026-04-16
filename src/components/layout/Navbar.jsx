import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { chapters } from '../../data/chapters';

const navLinks = [
  ...chapters.map((c) => ({ label: c.name, href: `#${c.id}`, accent: c.accent })),
  { label: 'Impact', href: '#impact', accent: '#F59E0B' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      // detect active chapter
      const viewportMid = window.innerHeight / 3;
      const sections = navLinks
        .map((l) => document.querySelector(l.href))
        .filter(Boolean);
      let current = null;
      for (const s of sections) {
        const rect = s.getBoundingClientRect();
        if (rect.top <= viewportMid && rect.bottom > viewportMid) {
          current = s.id;
          break;
        }
      }
      setActiveId(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0A0612]/85 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/30'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-[68px] flex items-center justify-between">
        {/* Logos */}
        <a href="#top" className="flex items-center gap-4 shrink-0">
          <img src="/assets/fynd-logo.svg" alt="Fynd" className="h-9" />
          <span className="text-white/25 text-lg font-light select-none">&times;</span>
          <img
            src="/assets/sephora-mark.svg"
            alt="Sephora"
            className="h-7 object-contain"
          />
        </a>

        {/* Desktop chapter rail */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const id = link.href.slice(1);
            const isActive = activeId === id;
            return (
              <a
                key={link.href}
                href={link.href}
                className="relative px-3.5 py-2 text-[13px] font-medium tracking-wide transition-colors duration-200"
                style={{ color: isActive ? '#FFFFFF' : 'rgba(255,255,255,0.55)' }}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-3.5 right-3.5 -bottom-0.5 h-[2px] rounded-full"
                    style={{
                      background: link.accent,
                      boxShadow: `0 0 10px ${link.accent}`,
                    }}
                    transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-[#0A0612]/95 backdrop-blur-xl border-t border-white/5 px-6 py-5 space-y-1"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="flex items-center gap-3 py-2.5 text-white/80 hover:text-white text-[15px]"
              onClick={() => setMenuOpen(false)}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: link.accent }}
              />
              {link.label}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}
