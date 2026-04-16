const links = [
  { label: 'Overview', href: '#overview' },
  { label: 'Journey', href: '#journey' },
  { label: 'Beauty Pass', href: '#beautypass' },
];

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/[0.05]">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start mb-14">
          <div>
            <div className="flex items-center gap-4 mb-3">
              <img src="/assets/fynd-logo.svg" alt="Fynd" className="h-9" />
              <span className="text-white/15 text-lg">&times;</span>
              <img
                src="/assets/sephora-logo.jpg"
                alt="Sephora"
                className="h-9 object-contain mix-blend-screen opacity-60"
              />
            </div>
            <p className="text-gray-600 text-sm">Invented in India</p>
          </div>

          <div className="flex flex-wrap gap-8 md:justify-center">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-gray-500 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="md:text-right">
            <p className="text-sm text-gray-600">&copy; 2026 Shopsense Retail Technologies</p>
          </div>
        </div>

        <div className="pt-10 border-t border-white/[0.04]">
          <p className="text-[11px] text-gray-700 text-center max-w-2xl mx-auto leading-relaxed">
            This is a case study presentation. All metrics referenced are based on
            Sephora India's Beauty Pass programme performance data.
          </p>
        </div>
      </div>
    </footer>
  );
}
