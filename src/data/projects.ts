import { Project } from '../types/Card.types';

const imagePath = (file: string) => `/Portfolio/assets/images/projects/${file}`;
const zinzoRole = 'Frontend developer at Zinzo';

export const WorkProjects: Project[] = [
  {
    title: 'Sjeng Sports',
    image: imagePath('sjeng_sports.webp'),
    liveUrl: 'https://sjengsports.nl',
    role: zinzoRole,
    stack: ['Shopify', 'Liquid', 'JavaScript', 'CSS', 'Klaviyo', 'Cookiebot'],
    problem:
      'Large catalogue of standalone colour products and a sharp mobile performance drop.',
    highlights: [
      'Migrated 1,500+ variants into Shopify’s native variant hierarchy.',
      'Fixed render-blocking resources and image delivery (srcset widths, WebP, fetchpriority).',
      'Fixed Cookiebot / Google Consent Mode across the NL and DE stores.',
    ],
  },
  {
    title: 'By Mölle',
    image: imagePath('by_molle.webp'),
    liveUrl: 'https://bymolle.com',
    role: zinzoRole,
    stack: ['Shopify', 'Liquid', 'JavaScript', 'CSV data migration'],
    problem:
      'Catalogue modelled as separate products per colour; price calculator apps loading site-wide.',
    highlights: [
      'Restructured the catalogue into Color + Type variant options via CSV export, merge and import.',
      'Scoped a price-calculator app to product pages with a MutationObserver.',
      'Built a custom all-steps-visible calculator layout; fixed variant image and Add to Cart bugs.',
    ],
  },
  {
    title: 'Geschenken van Vroeg',
    image: imagePath('vroeg.webp'),
    liveUrl: 'https://geschenkenvanvroeg.nl/',
    role: zinzoRole,
    stack: ['Shopify', 'Liquid', 'JavaScript', 'Kaching', 'Matrixify'],
    highlights: [
      'Collection sidebar filters, product card redesign, mobile navigation and USP bar.',
      'Age-verification cart feature gating checkout.',
      'Investigated bundle order data structures for picking-list grouping.',
    ],
  },
  {
    title: 'Loints of Holland',
    image: imagePath('LOH.webp'),
    liveUrl: 'https://lointsofholland.com/',
    role: zinzoRole,
    stack: ['Shopify', 'Liquid', 'JavaScript'],
    highlights: [
      'Built this store based on client request',
      'Fixed all their products structure',
    ],
  },
  {
    title: 'Zinzo website',
    image: imagePath('zinzo.webp'),
    liveUrl: 'https://zinzo.com/en',
    role: zinzoRole,
    stack: ['Next.js', 'TypeScript'],
    highlights: ['Redid the whole website with my team'],
  },
  {
    title: 'Amrita Nutrition',
    image: imagePath('amrita.webp'),
    liveUrl: 'https://amritanutrition.com/en',
    role: zinzoRole,
    stack: ['Vite', 'TypeScript'],
    highlights: [
      'Rebuilt all pages',
      'Implemented many features on tier bases',
    ],
  },
];

export const PersonalProjects: Project[] = [
  {
    title: 'John Doe',
    image: imagePath('john_doe.webp'),
    summary: 'Designed using HTML, CSS and JavaScript.',
    repoUrl: 'https://github.com/WasnaaRaafat/JohnDoe',
    liveUrl: 'https://wasnaaraafat.github.io/JohnDoe/index.html',
  },
  {
    title: 'Hotel',
    image: imagePath('hotel.webp'),
    summary: 'Hotel site developed using HTML and CSS.',
    repoUrl: 'https://github.com/WasnaaRaafat/Hotel',
    liveUrl: 'https://wasnaaraafat.github.io/Hotel/',
  },
  {
    title: 'App Lab',
    image: imagePath('app_lab.webp'),
    summary: 'Developed using HTML, CSS and JavaScript.',
    repoUrl: 'https://github.com/WasnaaRaafat/app-lab',
    liveUrl: 'https://wasnaaraafat.github.io/app-lab/',
  },
  {
    title: 'Edge Deger',
    image: imagePath('Edge.webp'),
    summary: 'A site developed using HTML and CSS.',
    repoUrl: 'https://github.com/WasnaaRaafat/EdgeDeger',
    liveUrl: 'https://wasnaaraafat.github.io/EdgeDeger/',
  },
];

export const CoolProjects: Project[] = [
  {
    title: 'GitHub Finder',
    image: imagePath('github_finder.webp'),
    summary:
      'Searches GitHub users via the GitHub API and displays their main info. Built with HTML, CSS and JavaScript.',
    repoUrl: 'https://github.com/WasnaaRaafat/gitHubFinder',
    liveUrl: 'https://wasnaaraafat.github.io/gitHubFinder/',
  },
];
