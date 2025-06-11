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
    imageUrl: "https://via.placeholder.com/600x400",
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
    imageUrl: "https://via.placeholder.com/600x400",
    fullDescription: "A peer-to-peer social network that operates without servers, giving users complete control over their social media experience."
  },
  {
    slug: "odeo",
    title: "Odeo",
    category: ["Startup"],
    summary: "Pioneered podcasting and pivoted to become Twitter",
    client: "Odeo Inc",
    releaseDate: "2005",
    externalLink: "https://twitter.com",
    imageUrl: "https://via.placeholder.com/600x400",
    fullDescription: "Started as a podcasting platform, Odeo pivoted to create Twitter, one of the world's most influential social media platforms."
  },
  {
    slug: "indymedia",
    title: "Indymedia",
    category: ["Civic Tech"],
    summary: "Grassroots media activist network for independent journalism",
    releaseDate: "1999",
    externalLink: "https://indymedia.org",
    imageUrl: "https://via.placeholder.com/600x400",
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