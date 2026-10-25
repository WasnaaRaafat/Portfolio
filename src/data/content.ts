// Personal details shown across the site. Edit here rather than in components.

export const fullName = 'Wasnaa Al-Rubaye';
export const location = 'Based in Birmingham, UK';

export const contact = {
  email: 'wasnaa.alroubaie@gmail.com',
  phoneDisplay: '07497216608',
  phoneHref: 'tel:+447497216608',
  linkedin: 'https://www.linkedin.com/in/wasnaa/',
  github: 'https://github.com/WasnaaRaafat',
};

export const hero = {
  greeting: "I'm Wasnaa, a",
  role: 'Software Engineer',
  tagline: 'MSc Computer Science · 3 years building production e-commerce',
  intro:
    "I've spent 3 years at Zinzo, a Dutch e-commerce agency, building and optimising Shopify stores for multiple international clients: performance tuning, large catalogue migrations, third-party integrations and custom storefront features. I'm now studying for an MSc in Computer Science at Birmingham City University and expanding into broader software engineering with Python and TypeScript.",
  stats: [
    { value: '3+', label: ['Years of', 'professional experience'] },
    { value: '5+', label: ['Client stores', 'built and optimised'] },
  ],
  callToAction: 'Open to software engineering roles',
};

export const experience = [
  {
    role: 'Frontend Developer',
    company: 'Zinzo',
    companyNote: 'Dutch e-commerce agency',
    period: 'Dec 2023 – Sep 2026',
    highlights: [
      'Led a product migration for Sjeng Sports, restructuring 1,500+ variants from standalone products into Shopify’s native variant hierarchy (published as a Zinzo case study).',
      'Diagnosed a major mobile PageSpeed drop and fixed render-blocking resources; delivered WebP conversion, fetchpriority hints, third-party script reduction and a section-scoped CSS delivery strategy.',
      'Built custom storefront features across 5+ client stores: cart upsell system, age-verification checkout gate, filtering, mega-menu and mobile navigation, multi-language variant pickers.',
      'Integrated and debugged third-party platforms (Klaviyo, Cookiebot / Google Consent Mode, Judge.me, Discount Ninja, bundle apps), including root-causing a Consent Mode failure across two regional storefronts.',
      'Analysed an A/B test dataset for statistical significance to inform a client’s bundle pricing decision.',
      'Earlier: React and Vue.js project work, including the Next.js + TypeScript redesign of the Zinzo website.',
    ],
  },
];

export const education = [
  {
    degree: 'MSc Computer Science',
    institution: 'Birmingham City University',
    period: '2026 – 2027',
    note: 'In progress',
  },
  {
    degree: 'BSc Information Technology (Networks)',
    institution: 'University of Babylon',
    period: '2015 – 2019',
    note: 'First Class',
  },
];

export const cvFileName = 'Wasnaa_Al-Rubaye_CV.pdf';
export const cvPath = `/Portfolio/assets/cv/${cvFileName}`;
