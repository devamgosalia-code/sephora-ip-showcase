export const beautyPassData = {
  tiers: [
    {
      name: 'Free',
      badge: 'FREE',
      spend: '₹0',
      color: '#9CA3AF',
      perks: [
        'Birthday 2x points',
        'Beauty Pass Sales access',
        '1 point per ₹70 spent',
        '+50 points on registration',
      ],
    },
    {
      name: 'Gold',
      badge: '✦ GOLD',
      spend: '₹30,000 / year',
      color: '#B8962E',
      highlighted: true,
      perks: [
        'All Free benefits',
        'Birthday Gift',
        'Birthday Brow Service',
        'Welcome Gift',
        'Complimentary Custom Makeover',
        'Beauty Pass Sale Early Access',
        'Retention Gift',
      ],
    },
    {
      name: 'Platinum',
      badge: '♛ PLATINUM',
      spend: '₹1,00,000 / year',
      color: '#8B5CF6',
      perks: [
        'All Gold benefits',
        'Exclusive Events Access',
        'Tier Upgrade Gift',
        'Priority experiences',
      ],
    },
  ],
  howItWorks: [
    { step: 1, title: 'Sign Up Free', desc: 'Register with your mobile number' },
    { step: 2, title: 'Earn Points', desc: '1 point for every ₹70 spent' },
    { step: 3, title: 'Get Rewarded', desc: 'Redeem via Rewards Boutique' },
    { step: 4, title: 'Upgrade Tiers', desc: 'Spend more, unlock more benefits' },
  ],
  channels: ['Website', 'iOS App', 'Android App', 'In-Store'],
  watchItems: [
    { label: 'Avg Order Value', value: '-1.4%' },
    { label: 'Avg Selling Price', value: '-1.6%' },
    { label: 'Discount Spend', value: '+13%' },
    { label: 'Items Cancelled', value: '+18.4%' },
  ],
};
