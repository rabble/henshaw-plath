// ABOUTME: Blog post data for the website
// ABOUTME: Contains all blog posts and helper functions

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  tags: string[];
  date: string;
  excerpt: string;
  imageUrl: string;
  content: string;
}

export const blogData: BlogPost[] = [
  {
    slug: "building-decentralized-future",
    title: "Building a Decentralized Future",
    category: "Technology",
    tags: ["Decentralization", "Web3", "Innovation"],
    date: "2024-01-15",
    excerpt: "Exploring how decentralized technologies are reshaping the internet and empowering users.",
    imageUrl: "https://via.placeholder.com/800x400",
    content: "Full blog post content here..."
  },
  {
    slug: "lessons-from-startup-journey",
    title: "Lessons from My Startup Journey",
    category: "Entrepreneurship",
    tags: ["Startup", "Leadership", "Growth"],
    date: "2024-01-10",
    excerpt: "Key insights and lessons learned from building and scaling multiple startups.",
    imageUrl: "https://via.placeholder.com/800x400",
    content: "Full blog post content here..."
  },
  {
    slug: "civic-tech-social-change",
    title: "How Civic Tech Drives Social Change",
    category: "Civic Tech",
    tags: ["Social Impact", "Technology", "Community"],
    date: "2024-01-05",
    excerpt: "The role of technology in empowering communities and driving positive social change.",
    imageUrl: "https://via.placeholder.com/800x400",
    content: "Full blog post content here..."
  }
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogData.find(post => post.slug === slug);
}

export function getPostsByCategory(category: string): BlogPost[] {
  return blogData.filter(post => post.category === category);
}

export function getPostsByTag(tag: string): BlogPost[] {
  return blogData.filter(post => post.tags.includes(tag));
}

export function getAllCategories(): string[] {
  const categories = new Set<string>();
  blogData.forEach(post => categories.add(post.category));
  return Array.from(categories).sort();
}

export function getAllTags(): string[] {
  const tags = new Set<string>();
  blogData.forEach(post => {
    post.tags.forEach(tag => tags.add(tag));
  });
  return Array.from(tags).sort();
}

export function getSortedPosts(): BlogPost[] {
  return [...blogData].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}