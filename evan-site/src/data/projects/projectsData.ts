// ABOUTME: Project data for the portfolio
// ABOUTME: Contains all project information and helper functions

export interface Project {
  slug: string;
  title: string;
  category: string[];
  summary: string;
  client?: string;
  releaseDate?: string;
  externalLink?: string;
  imageUrl: string;
  fullDescription: string;
}

export const projectsData: Project[] = [
  {
    slug: "nos-social",
    title: "nos.social",
    category: ["Startup"],
    summary: "Decentralized social networking platform built on Nostr protocol",
    releaseDate: "2023",
    externalLink: "https://nos.social",
    imageUrl: "/images/projects/nos-social.png",
    fullDescription: "A decentralized social media platform that puts users in control of their data and social connections."
  },
  {
    slug: "planetary",
    title: "Planetary",
    category: ["Civic Tech", "Startup"],
    summary: "Decentralized social media app for meaningful connections",
    client: "Planetary.social",
    releaseDate: "2020",
    externalLink: "https://planetary.social",
    imageUrl: "/images/projects/nos-social.png",
    fullDescription: "A peer-to-peer social network that operates without servers, giving users complete control over their social media experience."
  },
  {
    slug: "quantstamp",
    title: "Quantstamp",
    category: ["Startup"],
    summary: "Blockchain security company providing smart contract auditing",
    client: "Quantstamp Inc",
    releaseDate: "2017",
    externalLink: "https://quantstamp.com",
    imageUrl: "/images/projects/nos-social.png",
    fullDescription: "Led engineering efforts at Quantstamp, building security infrastructure for blockchain applications and smart contracts."
  },
  {
    slug: "affinity",
    title: "Affinity",
    category: ["Startup"],
    summary: "Relationship intelligence platform for dealmakers",
    client: "Affinity Inc",
    releaseDate: "2018",
    externalLink: "https://affinity.co",
    imageUrl: "/images/projects/nos-social.png",
    fullDescription: "Contributed to building a relationship intelligence CRM that uses AI to help dealmakers find and manage relationships."
  },
  {
    slug: "neo",
    title: "Digital Garage's Neo.com",
    category: ["Startup"],
    summary: "Japanese fintech and venture development platform",
    client: "Digital Garage",
    releaseDate: "2016",
    externalLink: "https://neo.com",
    imageUrl: "/images/projects/nos-social.png",
    fullDescription: "Served as CTO helping to build innovative fintech solutions and venture development in the Japanese market."
  },
  {
    slug: "odeo",
    title: "Odeo",
    category: ["Startup"],
    summary: "Pioneered podcasting and pivoted to become Twitter",
    client: "Odeo Inc",
    releaseDate: "2005",
    externalLink: "https://twitter.com",
    imageUrl: "/images/projects/nos-social.png",
    fullDescription: "Started as a podcasting platform, Odeo pivoted to create Twitter, one of the world's most influential social media platforms."
  },
  {
    slug: "indymedia",
    title: "Indymedia",
    category: ["Civic Tech"],
    summary: "Grassroots media activist network for independent journalism",
    releaseDate: "1999",
    externalLink: "https://indymedia.org",
    imageUrl: "/images/projects/nos-social.png",
    fullDescription: "A global network of independent media organizations and journalists offering grassroots, non-corporate coverage."
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projectsData.find(project => project.slug === slug);
}

export function getProjectsByCategory(category: string): Project[] {
  return projectsData.filter(project => project.category.includes(category));
}

export function getAllCategories(): string[] {
  const categories = new Set<string>();
  projectsData.forEach(project => {
    project.category.forEach(cat => categories.add(cat));
  });
  return Array.from(categories).sort();
}