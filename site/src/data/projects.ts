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
    slug: 'en1',
    device: 'laptop',
    ch: 2,
    name: 'EN1',
    headline: 'A luxury EV brand’s digital platform, built from zero',
    tags: ['Automotive', 'Web + App', 'Design system'],
    years: '2023 – 2026',
    colour: '--w-en1',
    metrics: [
      { value: '5', label: 'products, 0 → 1' },
      { value: '+15%', label: 'team velocity' },
    ],
    receipt: [
      ['TOUCHPOINTS', '5'],
      ['DESIGN SYSTEM', 'NEW'],
      ['TEAM VELOCITY', '+15%'],
      ['PLATFORMS', 'WEB/APP'],
    ],
  },
  {
    slug: 'clink',
    device: 'laptop',
    ch: 3,
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
    ch: 4,
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
    slug: 'qash',
    device: 'phone',
    ch: 5,
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
    slug: 'weave',
    device: 'phone',
    ch: 6,
    name: 'Weave',
    headline: 'Case study coming soon',
    tags: ['TBC'],
    years: '—',
    colour: '--w-weave',
    metrics: [{ value: 'Soon', label: 'in progress' }],
    receipt: [['STATUS', 'PENDING']],
  },
];

// Which projects have a case-study page (src/pages/work/<slug>.astro).
const pages = import.meta.glob('../pages/work/*.astro');
export const hasPage = (slug: string) => Object.keys(pages).some(k => k.endsWith(`/${slug}.astro`));
