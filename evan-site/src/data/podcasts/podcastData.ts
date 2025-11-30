// ABOUTME: Simple data structure for podcast appearances
// ABOUTME: Lists podcasts where Evan has been a guest or host

export interface PodcastAppearance {
  title: string;
  podcastName: string;
  date: string;
  description: string;
  url: string;
  role: 'host' | 'guest';
  duration?: string;
  hosts?: string[];
  audioUrl?: string;
  imageUrl?: string;
}

// Rabble's own podcast - featured prominently
export const myPodcast: PodcastAppearance = {
  title: 'Revolution.social',
  podcastName: 'Revolution.social',
  date: 'Ongoing',
  description: 'My own podcast exploring technology, society, and social change. Deep conversations about building a better future through technology and collective action.',
  url: 'https://revolution.social',
  role: 'host'
};

// Podcast appearances on other shows
export const podcastAppearances: PodcastAppearance[] = [
  {
    title: "Social Media: Keeping Up with Communities",
    podcastName: "Trailblazers with Walter Isaacson",
    date: "November 30, 2022",
    description: "Since the 1970s, people have been using digital tech to share information and connect with others. As times changed and more people gained access to computers and the internet, social networking technology changed too.",
    url: "https://open.spotify.com/episode/4BChQUjwRgVKTxZuLOx0Sd?si=Tg-bJerkQH-9PWWZC97uoQ",
    role: "guest",
    duration: "30 minutes",
    hosts: ["Walter Isaacson"],
    imageUrl: "https://i.scdn.co/image/ab67656300005f1fa4464d92c37b7e871027f294"
  },
  {
    title: "What if social media were under our control?",
    podcastName: "Looks Like New",
    date: "January 23, 2025",
    description: "Political discourse around social media has become increasingly significant... These innovators prioritize community building, safety features, and governance structures in their designs.",
    url: "https://lookslikenew.net/podcast/what-if-social-media-were-under-our-control/",
    role: "guest",
    duration: "59:15",
    imageUrl: "https://lookslikenew.net/wp-content/uploads/2025/01/Jan-Ep.jpg"
  },
  {
    title: "Decentralized Social Media",
    podcastName: "Denizen",
    date: "December 6, 2022",
    description: "This episode explores the major issues with centralized social media, such as the concentration of power among a few major corporations and the incentives for these companies to capture ever more user attention.",
    url: "https://denizen-3f96b4c7.simplecast.com/episodes/decentralized-social-media-tNpewf8A",
    role: "guest",
    duration: "64 minutes",
    hosts: ["Jenny Stefanotti"]
  },
  {
    title: "Tactics for a cooperative digital commons w/ Evan Henshaw-Plath",
    podcastName: "Half Past Capitalism",
    date: "June 20, 2021",
    description: "Evan Henshaw-Plath was one of the key organizers of the Indymedia network, employee #1 at Twitter, and started two worker co-ops and a bunch of other companies. He has worked at Fortune 500 monoliths and in anarchist collectives.",
    url: "https://creators.spotify.com/pod/profile/halfpastcapitalism/episodes/Tactics-for-a-cooperative-digital-commons-w-Evan-Henshaw-Plath-e1345b0",
    role: "guest",
    duration: "70 minutes",
    hosts: ["Dru Oja Jay"],
    imageUrl: "https://s3-us-west-2.amazonaws.com/anchor-generated-image-bank/production/podcast_uploaded_episode400/11955149/11955149-1624193810514-8966f30b27aee.jpg"
  },
  {
    title: "Building Participatory Media with Evan Henshaw-Plath (aka Rabble)",
    podcastName: "Decentered Media Podcast",
    date: "June 9, 2025",
    description: "A conversation exploring digital communication platforms, focusing on Evan Henshaw-Plath's experiences with early activist media, Twitter's development, and current work on decentralized social media platforms.",
    url: "https://decentered.co.uk/building-participatory-media-with-evan-henshaw-plath-aka-rabble/",
    role: "guest",
    hosts: ["Rob Watson"],
    imageUrl: "https://decentered.co.uk/wp-content/uploads/2025/06/Decentered-Media-Podcast-006-Wordpress-001-2025-06-09.jpg"
  },
  {
    title: "Hacking social media down to size",
    podcastName: "Mediawatch",
    date: "October 9, 2022",
    description: "The world's richest person put US$44 billion to make Twitter his personal property. Social media pioneer Evan Henshaw-Plath - who co-founded Twitter's forerunner Odeo - is now here in New Zealand trying to break down the big social platforms.",
    url: "https://www.rnz.co.nz/national/programmes/mediawatch/audio/2018861879/hacking-social-media-down-to-size",
    role: "guest",
    hosts: ["Colin Peacock"],
    imageUrl: "https://media.rnztools.nz/rnz/image/upload/s--KvqhkWkI--/ar_16:10,c_fill,f_auto,g_auto,q_auto,w_1050/v1651710058/4LSQJI8_image_crop_142470?_a=BACCd2AD"
  },
  {
    title: "The Future of Social Media: Decentralization, Free Speech, and Nostr (Ep 177)",
    podcastName: "Future Tech and Foresight",
    date: "May 27, 2024",
    description: "We explore how AI literacy, regulation, and compliance are evolving alongside the rapid adoption of AI technologies in business—and why understanding legal frameworks is becoming mission-critical.",
    url: "https://creators.spotify.com/pod/profile/futuretechandforesight/episodes/The-Future-of-Social-Media-Decentralization--Free-Speech--and-Nostr--Ep-177-e2umskv",
    role: "guest",
    duration: "65 minutes",
    hosts: ["Marc Verbenkov"]
  },
  {
    title: "Meet Twitter's Co-Creator; Rabble! The man that hired Jack Dorsey!",
    podcastName: "Fail Wisdom Podcast: Turn Startup Failures into Success",
    date: "March 15, 2024",
    description: "Interview with Twitter's co-creator discussing his role in hiring Jack Dorsey and the early days of Twitter.",
    url: "https://creators.spotify.com/pod/profile/startupfailwisdom/episodes/Meet-Twitters-Co-Creator-Rabble--The-man-that-hired-Jack-Dorsey-e2g29s2",
    role: "guest"
  },
  {
    title: "TPB59 - Nostr: The Everything App of Freedom with Ben Arc & Rabble",
    podcastName: "The Progressive Bitcoiner",
    date: "October 31, 2023",
    description: "The history of social change shows us that it's not fear that leads to better situations. It's Hope. Discusses social media, Nostr protocol, Bitcoin, and how technology can reinvent social platforms.",
    url: "https://progressivebitcoiner.substack.com/p/tpb59-nostr-the-everything-app-of-3d5",
    role: "guest",
    duration: "1:45:48",
    hosts: ["Margot Paez"],
    imageUrl: "https://substack-post-media.s3.amazonaws.com/public/images/8ab2a051-272b-4901-9d09-f8aa4c8a3aa9_1080x1080.png"
  },
  {
    title: "How did open social media platforms originate?",
    podcastName: "Looks Like New",
    date: "June 22, 2023",
    description: "In the aftermath of a chaotic Twitter takeover, many people have moved away from centralized social media platforms to a new set of social platforms that are open-source, decentralized, and user-centered—like Bluesky, Mastodon, and Nostr.",
    url: "https://lookslikenew.net/podcast/looks-like-new-how-did-open-social-media-platforms-originate/",
    role: "guest",
    duration: "59:02",
    imageUrl: "https://lookslikenew.net/wp-content/uploads/2023/11/LooksLikeNew-5.png"
  },
  {
    title: "Rabble (Evan Henshaw-Plath)",
    podcastName: "Thank God for Nostr",
    date: "May 16, 2024",
    description: "Evan 'Rabble' Henshaw-Plath joins the Thank God for Nostr podcast to discuss his experiences as a founding engineer of Twitter, his journey into decentralized social media, and the development of open protocols like Nostr.",
    url: "https://thank-god-for-nostr.simplecast.com/episodes/rabble-UD9Zzh6d",
    role: "guest",
    duration: "1:17:10",
    hosts: ["Walker", "Deezy"]
  },
  {
    title: "The Rabble Episode",
    podcastName: "Nostrovia - The Original Nostr Podcast",
    date: "March 13, 2023",
    description: "This week we have a discussion with @rabble, who played a significant role in the creation of Twitter and some even say was Jack's boss.",
    url: "https://creators.spotify.com/pod/profile/nostrovia/episodes/The-Rabble-Episode-e20bdbh",
    role: "guest",
    duration: "2:22:46",
    hosts: ["gsovereignty", "bitkarrot"],
    imageUrl: "https://s3-us-west-2.amazonaws.com/anchor-generated-image-bank/production/podcast_uploaded_nologo/36291377/36291377-1673187803171-0342291390228.jpg"
  },
  {
    title: "Nostr, Bitcoin, and the Fight for Digital Free Speech with Rabble",
    podcastName: "What is Money?",
    date: "February 7, 2025",
    description: "Evan 'Rabble' Henshaw-Plath joins the show to explore the founding of Twitter, how Nostr challenges censorship and preserves freedom of speech, and the overlap between decentralized technologies and social impact.",
    url: "https://whatismoneypodcast.com/episodes/rabble-AF7uDjMP",
    role: "guest",
    duration: "1:11:31",
    hosts: ["Robert Breedlove"]
  },
  {
    title: "Rabble (Evan Henshaw-Plath) on using the decentralised web to support social movements and helping create Twitter",
    podcastName: "Seeds",
    date: "September 1, 2024",
    description: "Ever wondered about the origins of Twitter and the role of social media in movements? I got the chance to sit down with Rabble (Evan Henshaw-Plath) who was there at the start as the first employee of the company that created Twitter.",
    url: "https://sites.libsyn.com/106044/rabble-evan-henshaw-plath-on-using-the-decentralised-web-to-support-social-movements-and-helping-create-twitter",
    role: "guest",
    hosts: ["Steven Moe"],
    imageUrl: "https://assets.libsyn.com/secure/show/106044/IMG_033d0.jpg"
  },
  {
    title: "Twitter co-founder Rabble talks Nostr and other stuff",
    podcastName: "The World Crypto Network Podcast",
    date: "April 18, 2023",
    description: "Twitter co-founder discusses Nostr protocol and other developments in decentralized social media.",
    url: "https://www.spreaker.com/episode/twitter-co-founder-rabble-talks-nostr-and-other-stuff--53447256",
    role: "guest",
    duration: "1:32:47",
    imageUrl: "https://d3wo5wojvuv7l.cloudfront.net/t_square_limited_480/images.spreaker.com/original/282bc83696183bad805542a602dcf370.jpg"
  },
  {
    title: "Rabble Rousing",
    podcastName: "Intelligent Machines",
    date: "October 26, 2022",
    description: "Inside Planetary and Scuttlebutt, Mr. Beast, Shutterstock AI imagery, Chief TWiT",
    url: "https://twit.tv/shows/intelligent-machines/episodes/687",
    role: "guest",
    duration: "2:49:33",
    hosts: ["Leo Laporte", "Jeff Jarvis"],
    imageUrl: "https://elroy.twit.tv/sites/default/files/images/episodes/2022/10/840001/hero/twig0687_thumbnail.jpg"
  },
  {
    title: "Ep 294 AI and Society with Evan Henshaw Plath",
    podcastName: "RevolutionZ",
    date: "August 4, 2024",
    description: "We talk about AI and society, first describing where we are now and how we got here, and then likely impacts on various sectors, from software development to music, and video generation.",
    url: "https://www.buzzsprout.com/330161/episodes/15487381-ep-294-ai-and-society-with-evan-henshaw-plath",
    role: "guest"
  },
  {
    title: "Ep 286 Evan Henshaw Plath on Social Media, Digital Identities, and People's Platforms",
    podcastName: "RevolutionZ",
    date: "June 9, 2024",
    description: "Evan Henshaw Plath replays the history, logic, and implications of social media from its root democratic and participatory intentions to its corporatization and erosion of privacy and meaningful engagement.",
    url: "https://www.buzzsprout.com/330161/episodes/15219343-ep-286-evan-henshaw-plath-on-social-media-digital-identities-and-people-s-platforms",
    role: "guest"
  }
];

// Legacy export for backward compatibility
export const allPodcastAppearances: PodcastAppearance[] = [myPodcast, ...podcastAppearances];