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

// TODO: drop the latest CV PDF into public/assets/cv/ under this name.
export const cvFileName = 'Wasnaa_Al-Rubaye_CV.pdf';
export const cvPath = `/Portfolio/assets/cv/${cvFileName}`;
