// Narrative framing for each chapter — tight, enterprise, declarative.
// Shared by the Hero, Navbar rail, and individual Chapter sections.
// IP details come from src/data/journey.js (re-used as-is).

export const chapters = [
  {
    id: 'discover',
    number: '01',
    name: 'Discover',
    accent: '#3B82F6',          // blue
    accentSoft: 'rgba(59, 130, 246, 0.22)',
    gradient: 'linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)',
    eyebrow: 'Chapter 01 · Discover',
    headline: 'Every search gets the right answer.',
    lede: '20,000+ SKUs. Tens of thousands of queries a day. Fynd makes Sephora\u2019s catalogue feel like a single, intelligent conversation — ranked, personalised, and sub-100ms.',
    ipCount: 3,
  },
  {
    id: 'experience',
    number: '02',
    name: 'Experience',
    accent: '#EC4899',          // pink
    accentSoft: 'rgba(236, 72, 153, 0.22)',
    gradient: 'linear-gradient(135deg, #EC4899 0%, #8B5CF6 100%)',
    eyebrow: 'Chapter 02 · Experience',
    headline: 'Beauty you can try before you buy.',
    lede: 'Shade-matching on a screen used to be guesswork. Fynd\u2019s AR and global UGC infrastructure close the gap between online curiosity and in-store confidence.',
    ipCount: 2,
  },
  {
    id: 'purchase',
    number: '03',
    name: 'Purchase',
    accent: '#10B981',          // emerald
    accentSoft: 'rgba(16, 185, 129, 0.22)',
    gradient: 'linear-gradient(135deg, #10B981 0%, #06B6D4 100%)',
    eyebrow: 'Chapter 03 · Purchase',
    headline: 'Zero friction. Zero tagging. Every promo.',
    lede: 'The storefront powering Sephora across web, iOS, and Android — with a promotion engine that scales hundreds of brand offers without a single manual tag.',
    ipCount: 2,
  },
  {
    id: 'fulfil',
    number: '04',
    name: 'Fulfil',
    accent: '#F59E0B',          // amber
    accentSoft: 'rgba(245, 158, 11, 0.22)',
    gradient: 'linear-gradient(135deg, #F59E0B 0%, #EF4444 100%)',
    eyebrow: 'Chapter 04 · Fulfil',
    headline: 'The warehouse, the road, and the 26,000 pincodes.',
    lede: 'Five IPs working in lockstep: orders routed in milliseconds, 100+ carriers orchestrated, warehouses synced in real-time, workflows automated, images served off a global edge.',
    ipCount: 5,
  },
  {
    id: 'retain',
    number: '05',
    name: 'Retain',
    accent: '#8B5CF6',          // violet
    accentSoft: 'rgba(139, 92, 246, 0.22)',
    gradient: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)',
    eyebrow: 'Chapter 05 · Retain',
    headline: 'The first purchase is just the beginning.',
    lede: 'Beauty Pass loyalty. 24/7 AI support. Unified NPS across every touchpoint. A retention stack built to turn one order into a ten-year relationship.',
    ipCount: 3,
  },
];

export const chapterById = Object.fromEntries(chapters.map((c) => [c.id, c]));
