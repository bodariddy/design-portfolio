// Single source of truth for featured work. Order = homepage order.
export type Project = {
  slug: string;
  ch: number;
  name: string;
  headline: string;
  tags: string[];
  years: string;
  colour: string; // CSS var name of its colour world
  device: 'phone' | 'laptop';
  featured?: boolean; // false = shown under 'Other projects', not in the grid or terminal
  metrics: { value: string; label: string }[];
  receipt: [string, string][]; // printed on the POS receipt
};

export const projects: Project[] = [
  {
    slug: 'roqqu',
    device: 'phone',
    ch: 1,
    name: 'Roqqu',
    headline: 'Making crypto feel safe enough to trade',
    tags: ['Crypto', 'Mobile'],
    years: '2023 – now',
    colour: '--w-roqqu',
    metrics: [
      { value: '+22%', label: 'onboarding → first trade' },
      { value: '+18%', label: 'trade completion' },
    ],
    receipt: [
      ['ONBOARDING TIME', '-45%'],
      ['FIRST TRADE', '+22%'],
      ['TRADE COMPLETION', '+18%'],
      ['QASH TXNS / YR1', '101,045'],
    ],
  },
  {
    slug: 'qash',
    device: 'phone',
    ch: 2,
    name: 'Qash',
    headline: 'Send, spend and save in dollars: one app for money across borders',
    tags: ['Fintech', 'Payments', 'Cards'],
    years: '2024 – now',
    colour: '--w-qash',
    metrics: [
      { value: '101k', label: 'transactions, year one' },
      { value: '150+', label: 'countries' },
    ],
    receipt: [
      ['TXNS / YR1', '101,045'],
      ['COUNTRIES', '150+'],
      ['CURRENCIES', 'NGN USD GBP'],
      ['DOLLAR CARD', '30 SEC'],
    ],
  },
  {
    slug: 'en1',
    device: 'laptop',
    ch: 3,
    name: 'EN1',
    headline: 'A luxury EV brand’s digital platform, built from zero',
    tags: ['Automotive', 'Web + App', 'Design system'],
    years: '2023 – 2026',
    colour: '--w-en1',
    metrics: [
      { value: '7', label: 'products, 0 → 1' },
      { value: '+15%', label: 'team velocity' },
    ],
    receipt: [
      ['PRODUCTS', '7'],
      ['DESIGN SYSTEM', 'NEW'],
      ['TEAM VELOCITY', '+15%'],
      ['PLATFORMS', 'WEB/APP'],
    ],
  },
  {
    slug: 'clink',
    device: 'laptop',
    ch: 4,
    name: 'Clink',
    headline: 'Co-founding a payment-link tool: ₦2M+ volume, and what fraud taught me',
    tags: ['Fintech', 'Founder'],
    years: '2021 – 2023',
    colour: '--w-clink',
    metrics: [
      { value: '+20%', label: 'conversion' },
      { value: '−35%', label: 'onboarding time' },
    ],
    receipt: [
      ['CONVERSION', '+20%'],
      ['ONBOARDING', '-35%'],
      ['ACTIVE LINKS', '150+'],
      ['VOLUME', '₦2M+'],
    ],
  },
  {
    slug: 'glover-lite',
    device: 'phone',
    ch: 5,
    name: 'Glover Lite',
    headline: 'Cutting drop-off 30% by removing KYC from the front door',
    tags: ['Fintech', 'Mobile + Web', 'A/B tested'],
    years: '2022 – 2023',
    colour: '--w-glover',
    metrics: [
      { value: '−30%', label: 'user drop-off' },
      { value: '3', label: 'A/B-tested dashboards' },
    ],
    receipt: [
      ['DROP-OFF', '-30%'],
      ['KYC AT SIGN-UP', 'NONE'],
      ['SERVICES', '7'],
      ['A/B VARIANTS', '3'],
    ],
  },
  {
    slug: 'weave',
    device: 'phone',
    ch: 6,
    name: 'Weave',
    headline: 'A shared account for groups: money the whole group can see',
    tags: ['Fintech', 'Group payments', 'Mobile'],
    years: '2025 – now',
    colour: '--w-weave',
    metrics: [
      { value: '2 of 3', label: 'signatory approvals' },
      { value: '4', label: 'collection types' },
    ],
    receipt: [
      ['PURSE', 'SHARED'],
      ['APPROVALS', '2 OF 3'],
      ['VISIBILITY', '100%'],
    ],
  },
  {
    slug: 'edubanc',
    device: 'laptop',
    featured: false,
    ch: 7,
    name: 'Edubanc',
    headline: 'School-fee loans, teacher training and school banking for Sterling Bank',
    tags: ['EdTech', 'Banking', 'Web + Mobile + Admin'],
    years: '2019 – 2023',
    colour: '--w-edubanc',
    metrics: [
      { value: '₦45M+', label: 'loan volume' },
      { value: '1,000+', label: 'schools onboarded' },
    ],
    receipt: [['LOANS', '₦45M+'], ['SCHOOLS', '1,000+'], ['USERS', '4,000+']],
  },
  {
    slug: 'stemuli',
    device: 'laptop',
    featured: false,
    ch: 8,
    name: 'STEMuli',
    headline: 'Virtual mentorships and work-based learning for US students',
    tags: ['EdTech', 'US · Remote', 'Web'],
    years: '2021 – 2022',
    colour: '--w-stemuli',
    metrics: [
      { value: '+25%', label: 'retention' },
      { value: '4', label: 'user types designed for' },
    ],
    receipt: [['RETENTION', '+25%'], ['USER TYPES', '4']],
  },
];
export const featured = projects.filter(p => p.featured !== false);
export const others = projects.filter(p => p.featured === false);

// Which projects have a case-study page (src/pages/work/<slug>.astro).
const pages = import.meta.glob('../pages/work/*.astro');
export const hasPage = (slug: string) => Object.keys(pages).some(k => k.endsWith(`/${slug}.astro`));
