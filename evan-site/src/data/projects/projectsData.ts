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
  additionalDetails?: React.ReactNode;
}

export const projectsData: Project[] = [
  {
    slug: "nos-social",
    title: "nos.social",
    category: ["Startup"],
    summary: "Decentralized social networking platform built on Nostr protocol",
    releaseDate: "May 10, 2024",
    externalLink: "https://nos.social",
    imageUrl: "/images/projects/nos-social.png",
    fullDescription: `nos.social is a decentralized social media client built on the Nostr protocol. It represents a new approach to social networking where users truly own their data and identity.

The project emerged from a fundamental belief that social media should be a public good, not controlled by corporations. By building on Nostr (Notes and Other Stuff Transmitted by Relays), nos.social provides users with censorship resistance, data portability, and true ownership of their social graph.

Our philosophy is simple: Protocols Over Platforms. Instead of building another walled garden, we're contributing to an open ecosystem where multiple clients can interoperate, where users can choose their experience, and where innovation happens at the edges rather than being controlled by a central authority.

The technical architecture is revolutionary yet elegant. There are no central servers to fail or be censored. Users hold their own cryptographic keys, which serve as their identity across the entire network. Content is distributed across multiple relays, ensuring resilience and availability.

nos.social is completely open source, inviting developers worldwide to contribute, fork, and build upon our work. This isn't just about building a product – it's about creating a movement towards a more open, decentralized internet where users are citizens, not products.`
  },
  {
    slug: "nobinarie",
    title: "nobinarie.com",
    category: ["Civic Tech", "Startup"],
    summary: "Inclusive social platform celebrating trans and non-binary voices",
    releaseDate: "2024",
    externalLink: "https://nobinarie.com",
    imageUrl: "/images/projects/nobinarie.png",
    fullDescription: `nobinarie.com represents a groundbreaking approach to creating safe, inclusive online spaces for trans, non-binary, and gender-diverse communities. In an era where mainstream social platforms often fail to protect or properly serve LGBTQ+ users, nobinarie emerged as a dedicated platform built from the ground up with inclusivity, safety, and authentic expression at its core.

The project was born from recognizing that existing social networks weren't designed with gender diversity in mind. From binary gender fields to inadequate moderation policies, trans and non-binary users faced constant friction and often harassment. nobinarie reimagined social networking through a lens of radical inclusivity.

Every technical and design decision prioritized user safety and authentic self-expression. The platform features comprehensive pronoun support, flexible gender expression options, and nuanced privacy controls that allow users to share different aspects of their identity with different audiences. The moderation system was built with deep understanding of the specific challenges faced by gender-diverse communities.

Beyond just creating a safe space, nobinarie fostered genuine community building. The platform includes features for finding support, sharing resources, celebrating milestones in gender journeys, and connecting with others who share similar experiences. It became a hub for mutual aid, activism, and joy within the trans and non-binary community.

The technical architecture emphasizes user privacy and data sovereignty. Strong encryption, minimal data collection, and transparent policies ensure that users can express themselves authentically without fear of their data being weaponized against them. The platform operates on principles of consent and user control.

nobinarie's impact extends beyond its immediate user base. By demonstrating that inclusive design isn't just possible but essential, the platform influenced how other tech companies approach gender diversity. It proved that when marginalized communities are centered in the design process, the resulting products serve everyone better.

The project stands as a testament to the power of technology to create positive social change when it's guided by values of inclusion, safety, and community empowerment.`
  },
  {
    slug: "planetary",
    title: "Planetary",
    category: ["Civic Tech", "Startup"],
    summary: "Decentralized social media app for meaningful connections",
    client: "Planetary.social",
    releaseDate: "October 2020",
    externalLink: "https://planetary.social",
    imageUrl: "/images/projects/planetary.jpg",
    fullDescription: `Planetary was a pioneering decentralized social media platform built on the Secure Scuttlebutt (SSB) protocol. Launched in October 2020 with funding from Bloomberg Beta, it represented one of the first serious attempts to create a user-friendly interface for peer-to-peer social networking.

The core innovation of Planetary was making decentralized technology accessible to everyday users. While the underlying SSB protocol was complex, we created an intuitive iOS app that felt familiar to anyone who had used social media, while providing revolutionary features like offline-first functionality and cryptographically verified identity.

Unlike traditional social networks, Planetary operated without servers. Each user's device stored their own data and synced directly with friends' devices. This meant users could post, like, and comment even without internet access, with changes syncing when reconnected. It was social media that worked on planes, in remote areas, or during internet outages.

The project addressed fundamental problems with centralized social media: surveillance capitalism, censorship, and platform lock-in. Users owned their data, could export it at any time, and weren't subject to algorithmic manipulation or advertising.

Planetary's influence extended far beyond its direct impact. The lessons learned and code developed helped inspire subsequent protocols like Bluesky, Farcaster, and Nostr. We proved that decentralized social media could be beautiful, functional, and user-friendly – paving the way for the current wave of innovation in this space.`
  },
  {
    slug: "quantstamp",
    title: "Quantstamp",
    category: ["Startup"],
    summary: "Blockchain security company protecting digital assets",
    client: "Quantstamp Inc",
    releaseDate: "2018",
    externalLink: "https://quantstamp.com",
    imageUrl: "/images/projects/quantstamp.jpeg",
    fullDescription: `Quantstamp emerged from Y Combinator's Winter 2018 batch with a mission to "secure the decentralized internet." As VP of Engineering, I was responsible for building the engineering team and driving the rapid development of our security audit platform.

The company addressed a critical need in the blockchain ecosystem: security. With billions of dollars flowing through smart contracts, a single bug could lead to catastrophic losses. Quantstamp developed automated and manual auditing tools to identify vulnerabilities before they could be exploited.

During my tenure, we protected over $8 billion in digital asset risk and worked with more than 170 startups, foundations, and enterprises. Our client list included major blockchain projects and traditional enterprises entering the space.

The technical challenges were immense. We built sophisticated static analysis tools, developed new methodologies for smart contract verification, and created processes that could scale with the explosive growth of DeFi. The work required deep expertise in formal verification, security analysis, and blockchain technology.

Beyond the technology, Quantstamp played a crucial role in legitimizing the blockchain industry. By providing professional security services, we helped projects gain the confidence of users and investors, contributing to the maturation of the entire ecosystem.`
  },
  {
    slug: "affinity",
    title: "Affinity",
    category: ["Civic Tech"],
    summary: "Grassroots community organizing platform",
    releaseDate: "August 3, 2020",
    externalLink: "https://affinity.works",
    imageUrl: "/images/projects/affinity.png",
    fullDescription: `In the aftermath of the Trump election in 2016, there was a wave of new grassroots organizing to stop Trump's policy agenda from being implemented and to create the grassroots electoral infrastructure to win back congress and the presidency. Affinity.works was started to address real needs grassroots organizers were having: how to mobilize and coordinate volunteer networks.

The platform emerged from direct collaboration with organizers on the ground. We discovered that existing tools were either too expensive, too complex, or designed for top-down organizing rather than distributed grassroots movements. Affinity was built to fill this gap.

As an open-source platform, Affinity democratized access to organizing tools. Groups that couldn't afford expensive CRM systems could now manage volunteers, coordinate events, and track their impact. The platform was designed to be simple enough for volunteer organizers to use without extensive training.

The technical architecture reflected our values: distributed, resilient, and community-owned. We used modern web technologies to create a responsive, accessible platform that worked on any device. The API-first design allowed groups to integrate Affinity with their existing tools and workflows.

Affinity's impact extended beyond the technology. By providing professional-grade tools to grassroots organizations, we helped level the playing field between well-funded campaigns and community organizers. The platform facilitated coordination between groups, amplifying their collective impact and helping build the infrastructure for long-term political change.`
  },
  {
    slug: "neo",
    title: "Digital Garage's Neo",
    category: ["Startup"],
    summary: "Lean and agile development consultancy",
    client: "Digital Garage",
    releaseDate: "2012-2015",
    externalLink: "https://venturebeat.com/2015/06/30/pivotal-acquires-neo-for-agile-development/",
    imageUrl: "/images/projects/neo.jpeg",
    fullDescription: `As founding CTO of Neo, Digital Garage's lean and agile product consultancy, I built and led a global innovation powerhouse that transformed how large organizations approach digital product development.

Starting from zero, we grew to over 100 developers and designers across 7 offices in 4 countries, generating $15M in annual revenue. Our client roster included Fortune 500 companies, government agencies, and ambitious startups – from Fidelity and GE to ICANN and the Government of Singapore.

Neo pioneered the application of lean startup methodologies to enterprise environments. We didn't just build products; we transformed how our clients thought about innovation. Our teams embedded with client organizations, teaching them to validate ideas quickly, iterate based on user feedback, and build products that actually solved real problems.

The company culture was intentionally radical. We created flat hierarchies, encouraged experimentation, and built processes that balanced creative freedom with reliable delivery. This approach attracted top talent from around the world and created an environment where innovation thrived.

Managing the integration of half a dozen acquisitions while maintaining our culture and quality was one of my greatest challenges and achievements. Each acquisition brought new capabilities and perspectives, strengthening our ability to serve clients across industries and geographies.

Neo's success caught the attention of Pivotal, who acquired the company in 2016. The acquisition validated our approach and spread our methodologies to an even larger audience, influencing how thousands of developers and organizations approach product development.`
  },
  {
    slug: "indymedia",
    title: "Indymedia",
    category: ["Civic Tech"],
    summary: "Grassroots media activist network for independent journalism",
    releaseDate: "1999",
    externalLink: "https://indymedia.org",
    imageUrl: "/images/projects/indymedia.jpeg",
    fullDescription: `Indymedia began in 1999 during the WTO protests in Seattle, born from a simple but radical idea: "Don't hate the media, become the media." As one of the co-founders and core technologists, I helped build what would become a global network of independent media centers.

The project emerged from the recognition that mainstream media wasn't telling the full story of the global justice movement. We created an open publishing platform that allowed anyone to upload text, photos, audio, and video – revolutionary at a time when publishing online required technical expertise.

Within months, Indymedia spread virally across the globe. From Seattle, it expanded to cover protests and movements in Washington DC, Prague, Genoa, and beyond. At its peak, the network included over 180 local chapters in 60 countries, publishing in more than 30 languages.

The technical infrastructure we built was as radical as the content. We pioneered distributed, volunteer-run servers that could withstand government censorship and corporate attacks. The open-source content management system we developed influenced a generation of online publishing tools.

But Indymedia was more than technology – it was a movement. We trained thousands of activists to be media makers, democratizing journalism and challenging corporate media monopolies. The network covered stories ignored by mainstream outlets: police brutality, corporate malfeasance, grassroots organizing, and voices from the Global South.

The principles we established – open publishing, consensus-based decision making, and radical transparency – influenced everything from Wikipedia to contemporary citizen journalism. Indymedia proved that another media was possible, laying the groundwork for today's understanding that media democracy is essential to political democracy.`
  },
  {
    slug: "odeo",
    title: "Odeo",
    category: ["Startup"],
    summary: "Pioneered podcasting and pivoted to become Twitter",
    client: "Odeo Inc",
    releaseDate: "2005",
    externalLink: "https://en.wikipedia.org/wiki/Odeo",
    imageUrl: "/images/projects/odeo.png",
    fullDescription: `Odeo holds a unique place in internet history as the company that pioneered podcasting infrastructure and, through a dramatic pivot, gave birth to Twitter. As the lead engineer and first employee, I was there from the very beginning of this remarkable journey.

Founded in 2004 in San Francisco, Odeo set out to democratize audio broadcasting. We built tools that made creating and distributing podcasts as easy as blogging. This was revolutionary at a time when producing internet audio required expensive equipment and technical expertise.

Our team included future tech luminaries: Ev Williams (who had previously founded Blogger), Biz Stone, Jack Dorsey, and others who would go on to shape the internet. We created a culture of experimentation and rapid iteration that would later become the hallmark of Twitter.

When Apple announced podcast support in iTunes, it became clear our business model was threatened. Instead of giving up, we held hackathons to explore new ideas. During one of these sessions, Jack Dorsey presented his idea for a "status" service – what would become Twitter.

The pivot from Odeo to Twitter wasn't just a business decision; it was a complete reimagining of how people could communicate online. We took the real-time, broadcasting elements of podcasting and applied them to text, creating the micro-blogging phenomenon.

I helped hire Jack Dorsey and worked closely with him to build the initial Twitter prototype. The early technical decisions we made – the 140-character limit, the follower model, the emphasis on real-time updates – shaped how billions of people would eventually communicate.

The story of Odeo is a testament to the power of adaptability and innovation. What started as a podcasting company became one of the most influential communication platforms in history, fundamentally changing how news breaks, how movements organize, and how people connect across the globe.`
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