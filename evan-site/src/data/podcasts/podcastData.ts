// ABOUTME: Simple data structure for podcast appearances
// ABOUTME: Lists podcasts where Evan has been a guest or host

export interface PodcastAppearance {
  title: string;
  podcastName: string;
  date: string;
  description: string;
  url: string;
  role: 'host' | 'guest';
}

export const podcastAppearances: PodcastAppearance[] = [
  {
    title: 'Revolution.social',
    podcastName: 'Revolution.social',
    date: 'Ongoing',
    description: 'My podcast exploring technology, society, and social change.',
    url: 'https://revolution.social',
    role: 'host'
  },
  // Add more podcast appearances here
];