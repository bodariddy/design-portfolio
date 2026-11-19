// Build date, shown as “Updated …”. Changes automatically on every deploy.
export const updated = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'Africa/Lagos' });

export const site = {
  name: 'Tosin Lasisi',
  email: 'thosynlasisi@gmail.com',
  linkedin: 'https://www.linkedin.com/in/tosin-ridwan-lasisi/',
  cv: '/Tosin_Lasisi_CV.pdf',
};

// [year, company, role, headline metric]
export const experience: [string, string, string, string][] = [
  ['2023 — now', 'Roqqu', 'Senior Product Designer', '+22% activation'],
  ['2023 — 2026', 'EN1', 'Senior Product Designer · Contract', '7 products, 0 → 1'],
  ['2022 — 2023', 'Glover', 'Senior Product Designer', '+30% revenue'],
  ['2021 — 2023', 'Clink', 'Co-founder & Product Designer · Contract', '+20% conversion'],
  ['2021 — 2022', 'STEMuli · US', 'Product Designer · Contract', '+25% retention'],
  ['2019 — 2023', 'Sterling Bank · Edubanc', 'Product Designer', '₦45M+ processed'],
];

// While true, <Draft> review notes are visible on the site. Set to false before launch.
export const DRAFT = true;

// Testimonials. Replace placeholders with real quotes; set placeholder: false when filled.
export const testimonials = [
  { quote: 'Quote coming soon: one or two sentences about working with Tosin on Roqqu’s trading or onboarding flows.', name: 'Name', role: 'Product Manager', company: 'Roqqu', placeholder: true },
  { quote: 'Quote coming soon: how Tosin worked with engineering, from handoff to launch.', name: 'Name', role: 'Engineering Lead', company: 'Roqqu', placeholder: true },
  { quote: 'Quote coming soon: the impact of the EN1 platform and design system.', name: 'Name', role: 'Founder / Stakeholder', company: 'EN1', placeholder: true },
];
