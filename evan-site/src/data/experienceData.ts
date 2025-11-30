// ABOUTME: Experience timeline data for career history
// ABOUTME: Contains work experience and achievements

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
  achievements?: string[];
}

export const experienceData: Experience[] = [
  {
    id: "divine",
    title: "Founder & Creator",
    company: "diVine",
    location: "Remote",
    startDate: "2024",
    endDate: "Present",
    current: true,
    description: "Reviving Vine as a decentralized short-form video platform built on Nostr, with a focus on human-made content and creator ownership",
    achievements: [
      "Restored 150,000-200,000 Vine videos from internet archives",
      "Built on Nostr protocol for decentralized, censorship-resistant infrastructure",
      "Implemented anti-AI verification using Guardian Project technology",
      "Funded by Jack Dorsey's nonprofit 'and Other Stuff'",
      "Enables creators to reclaim ownership of their original Vine content"
    ]
  },
  {
    id: "verse",
    title: "CEO & Founder",
    company: "Verse Public Benefit Corp",
    location: "Remote",
    startDate: "2018",
    endDate: "April 2025",
    current: false,
    description: "Led the development of decentralized social media platforms including Planetary and nos.social",
    achievements: [
      "Built and launched Planetary, a peer-to-peer social network",
      "Developed nos.social on the Nostr protocol",
      "Raised funding and built a team focused on user-owned social media"
    ]
  },
  {
    id: "quantstamp",
    title: "VP Engineering",
    company: "Quantstamp",
    location: "San Francisco, CA",
    startDate: "2017",
    endDate: "2018",
    current: false,
    description: "Led engineering team building blockchain security infrastructure",
    achievements: [
      "Scaled engineering team from 5 to 20+ engineers",
      "Architected smart contract auditing platform",
      "Established security best practices for blockchain development"
    ]
  },
  {
    id: "mit",
    title: "Research Affiliate",
    company: "MIT Media Lab",
    location: "Cambridge, MA",
    startDate: "2016",
    endDate: "2018",
    current: false,
    description: "Researched decentralized systems and social computing",
    achievements: [
      "Collaborated on research into peer-to-peer networks",
      "Explored applications of blockchain for social good",
      "Mentored students on decentralized technology projects"
    ]
  },
  {
    id: "neo",
    title: "CTO",
    company: "Digital Garage - Neo",
    location: "Tokyo, Japan",
    startDate: "2015",
    endDate: "2017",
    current: false,
    description: "Led technology strategy for Japanese fintech ventures",
    achievements: [
      "Built engineering team in Tokyo",
      "Launched multiple fintech products",
      "Established partnerships with Japanese financial institutions"
    ]
  },
  {
    id: "twitter",
    title: "Founding Team / Software Engineer",
    company: "Twitter (via Odeo)",
    location: "San Francisco, CA",
    startDate: "2005",
    endDate: "2007",
    current: false,
    description: "Part of the founding team that created Twitter from Odeo's pivot",
    achievements: [
      "Built core features of early Twitter platform",
      "Helped pivot from podcasting to microblogging",
      "Scaled system to handle rapid user growth"
    ]
  },
  {
    id: "indymedia",
    title: "Instigator & Technologist",
    company: "Indymedia",
    location: "Global",
    startDate: "1999",
    endDate: "2004",
    current: false,
    description: "Co-founded and built technology for independent media network",
    achievements: [
      "Created open publishing platform used by millions",
      "Built global network of 200+ local media centers",
      "Pioneered citizen journalism and participatory media"
    ]
  }
];

export function getCurrentExperience(): Experience[] {
  return experienceData.filter(exp => exp.current);
}

export function getPastExperience(): Experience[] {
  return experienceData.filter(exp => !exp.current);
}