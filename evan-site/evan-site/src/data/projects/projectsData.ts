// ABOUTME: Project data extracted from example-site HTML files
// ABOUTME: Contains structured information about all projects including metadata and descriptions

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
    slug: "affinity",
    title: "Affinity",
    category: ["Civic Tech"],
    summary: "Affinity is an open source platform for grassroots community organizing.",
    client: "",
    releaseDate: "Aug 3, 2020",
    externalLink: "https://affinty.works",
    imageUrl: "https://assets-global.website-files.com/5fb11c2fc947575c84b548e2/5fb3052e7f6bd944d0b047c9_Screen%20Shot%202020-11-16%20at%208.02.25%20PM.png",
    fullDescription: `In the aftermath of the Trump election in 2016 there was a wave of new grassroots organizing to stop Trump's policy agenda from being implemented and to create the grassroots electoral infrastructure to win back congress and the presidency. Affinity.works was started to address real needs grassroots organizers were having, how to mobilize and coordinate volunteer networks.

You could do this with a headline or slogan (such as VW's "Drivers Wanted" campaign), color or layout (Target's new colorful, simple ads are a testimony to this) or illustration (such as the Red Bull characters or Zoloft's depressed ball and his ladybug friend). All good advertising copy is comprised of the same basic elements.`
  },
  {
    slug: "causes",
    title: "Causes",
    category: ["Civic Tech"],
    summary: "Causes.com: Democratizing Social Impact Through Transparent Fundraising",
    client: "",
    releaseDate: "May 11, 2024",
    externalLink: "https://causes.com",
    imageUrl: "https://assets-global.website-files.com/5fb11c2fc947575c84b548e2/66414015230eb85b8162030c_Causes_globe_logo.png",
    fullDescription: `The resurgence of Causes.com is poised to transform online fundraising and empower donors with transparent, democratic control over their contributions. Building on a legacy of activism and engagement, Causes is merging traditional digital advocacy with a cutting-edge platform for social change.

**A Well-Established Brand with Untapped Potential**

Causes.com is a recognized brand with significant reach and influence. With a daily email audience of 100,000, 500,000 active users, and a vast database of 190 million supporter profiles, Causes has the potential to revolutionize the way individuals contribute to social causes.

**The New Causes Model: Empowering Donors**

Causes' innovative model combines the strengths of Avaaz, Open Collective, and democratic budgeting to create a unique platform for fundraising and activism. By enabling donors to participate in a democratic decision-making process, Causes ensures that contributions are allocated to projects and organizations that align with their values.

The platform leverages the power of targeted messaging and donation bundling to maximize impact. Through regular, timely emails and social media campaigns, Causes keeps supporters informed and engaged on topical issues. Donations are then grouped into supporter-directed Cause Funds, allowing individuals to collectively fund projects that resonate with them.

**A Team of Experts**

Causes has assembled a team with a diverse range of expertise, including:

- **Oscar Soria:** Renowned for his campaign leadership at Avaaz, where he helped grow the organization to 70 million members and $40 million in annual revenue.
- **Rabble (Evan Henshaw-Plath):** A pioneer in social media technology and co-founder of several influential platforms.
- **Joshua Vial:** An expert in AI and language model technologies, bringing cutting-edge tools to enhance Causes' capabilities.

**Addressing a Critical Need**

The current fundraising model for individual donations is often inefficient, with many potential supporters failing to convert into donors. Causes' multi-issue targeted emails effectively address this issue by keeping supporters engaged and directing donations to focused Cause Funds.

**Leveraging Technology for Impact**

Causes will harness the power of its extensive user database and social media presence to raise awareness and adoption of the Nostr social media protocol. This decentralized protocol allows for direct donations from campaign posts, providing a new avenue for fundraising and engagement.

Additionally, Causes will develop a donation and crowdfunding platform, shifting the focus from lead generation to managing donations and fundraising efforts for impactful causes.

**A Sustainable Business Model**

Causes has three primary sources of monetization:

1. **Donation Platform:** Causes will collect a tip of 4%-9% on donations made through the platform.
2. **Database Monetization:** Providing non-profits and political campaigns with access to targeted segments of the Causes user list.
3. **Existing Services:** Continuing to offer existing services like list rental and cross-promotions.

**A Vision for the Future**

With a strong team, a proven business model, and a vast network of supporters, Causes is poised to become a leading platform for social change. By empowering donors and democratizing the fundraising process, Causes will enable individuals to have a direct and meaningful impact on the issues they care about most.`
  },
  {
    slug: "indymedia",
    title: "Indymedia",
    category: ["Civic Tech"],
    summary: "Grassroots media Activist network",
    client: "",
    releaseDate: "",
    externalLink: "https://indymedia.org/",
    imageUrl: "https://assets-global.website-files.com/5fb11c2fc947575c84b548e2/5fcc0bedfdca3e397ca9e871_Screen%20Shot%202020-12-05%20at%207.37.36%20PM.jpg",
    fullDescription: `Indymedia is a global media activist network founded during the 1999 WTO protests in Seattle. Indymedia grew to be a network of hundreds of media collectives around the world operating in 60 countries and over 30 languages.

Indymedia was based on the idea that people engaging in social change should be able to express their own voice instead of relying on professional journalists. With indymedia everybody was an activist, and we created tools to give people their own voice.

From the WTO protests I was deeply involved in both the tech collective and general organizing of the network. At the`
  },
  {
    slug: "neo",
    title: "Digital Garage's Neo.com",
    category: ["Startup", "Civic Tech"],
    summary: "Neo was Digital Garage's lean and agile new product discovery, design, and development agency.",
    client: "",
    releaseDate: "Jul 30, 2020",
    externalLink: "https://venturebeat.com/2016/02/18/pivotal-buys-another-software-development-agency-neo/",
    imageUrl: "https://assets-global.website-files.com/5fb11c2fc947575c84b548e2/5fcbffd27f8de65e7ff0297d_dg.jpeg",
    fullDescription: `Digital Garage partnered with Eric Ries to start a lean product consultancy and professional services business. I joined as founding CTO and managed the integration of half a dozen acquisitions to form a single global company that did work for companies an governments around the world.`
  },
  {
    slug: "nos-social",
    title: "nos.social",
    category: [],
    summary: "Nos: A New Frontier in Social Networking",
    client: "",
    releaseDate: "May 10, 2024",
    externalLink: "https://nos.social",
    imageUrl: "https://assets-global.website-files.com/5fb11c2fc947575c84b548e2/664135e1eb5ed88df3528392_nos_hero_image.png",
    fullDescription: `In the ever-evolving landscape of social media, a fresh contender has emerged, poised to redefine how we connect and communicate online. Nos, a client app built upon the Nostr protocol, offers a radical departure from the centralized platforms that have dominated the digital sphere.

Nostr: Protocols Over Platforms, Reviving the Dream of Web 2.0

At the heart of this paradigm shift lies Nostr, an open-source protocol that enables a decentralized social network. Unlike traditional social media platforms, where a single corporation controls the data and algorithms, Nostr operates as a public commons. This means that users are not beholden to a single app or service, but can choose from various compatible clients and servers, each offering unique features and experiences.

The advantages of this decentralized approach are manifold. Firstly, it mitigates the risks of censorship and de-platforming, as there is no central authority to dictate what content is allowed. Secondly, it empowers users with ownership and control over their data, allowing them to seamlessly migrate their accounts between clients. Thirdly, it fosters a vibrant ecosystem of innovation, as developers are free to build diverse clients and services without being constrained by a single platform's policies.

In this sense, Nostr is reviving the dream of an open app platform that we glimpsed in the early days of Web 2.0. A vast array of Nostr apps are emerging, catering to diverse interests and use cases. There are apps for blogging, music streaming, wikis, and much more. This blossoming ecosystem demonstrates the power of Nostr to unlock creativity and innovation, providing a fertile ground for new forms of social interaction.

Nos: The Human Network

Nos, as a client app built on the Nostr protocol, exemplifies the potential of this decentralized model. Designed with a focus on simplicity and user-friendliness, Nos prioritizes authentic human connection over algorithmic manipulation. Users can follow their interests, connect with friends, and discover new communities, all without being bombarded by ads or subjected to opaque algorithms.

Moreover, Nos is committed to ethical and sustainable development practices. The app is open-source, meaning that its code is transparent and accessible to anyone, fostering trust and collaboration. Additionally, Nos strives to minimize its environmental impact by prioritizing efficiency and minimizing data usage.

The Future of Social Networking

The emergence of Nostr and Nos represents a turning point in the evolution of social media. By prioritizing user empowerment, decentralization, and ethical development, this new paradigm offers a refreshing alternative to the corporate-controlled platforms that have dominated the online landscape.

While still in its early stages, Nos and the Nostr protocol hold immense potential to reshape the way we interact online. As more users and developers embrace this decentralized model, we can expect to see a flourishing ecosystem of innovative clients and services, each contributing to a more diverse, inclusive, and user-centric social network.

Join the Movement

If you're ready to explore a new frontier in social networking, I invite you to join me on Nos. Together, we can shape the future of online interaction and build a more human-centered digital world.`
  },
  {
    slug: "odeo",
    title: "Odeo",
    category: ["Startup"],
    summary: "Odeo pioneered podcasting on the internet, then pivoted to become twitter.",
    client: "",
    releaseDate: "",
    externalLink: "https://en.wikipedia.org/wiki/Odeo",
    imageUrl: "https://assets-global.website-files.com/5fb11c2fc947575c84b548e2/5fcc09268b4a22b51a43ff97_odeo-2005.png",
    fullDescription: `Odeo is most famous for being the company which created twitter. I was at Odeo from the very start in 2004, working out of cafe's in San Francisco.`
  },
  {
    slug: "planetary",
    title: "Planetary",
    category: ["Civic Tech", "Startup"],
    summary: "Decentralized Social Media startup building an app to put uers in control.",
    client: "",
    releaseDate: "Oct 15, 2020",
    externalLink: "https://planetary.social/",
    imageUrl: "https://assets-global.website-files.com/5fb11c2fc947575c84b548e2/5fcbfb72fdca3e26a0a9a72a_planetary_640_screenshots.jpg",
    fullDescription: `Planetary is a decentralized social media app which puts users in control. I discovered the emerging secure scuttlebutt technology and created a business, raised money from investors lead by Bloomberg Beta, and lead the team to build the product from idea to launch.`
  },
  {
    slug: "quantstamp",
    title: "Quantstamp",
    category: ["Startup"],
    summary: "VP of Engineering taking Quantstamp from a whitepaper through launching a blockchain testnet by demo day",
    client: "",
    releaseDate: "Sep 25, 2020",
    externalLink: "https://quantstamp.com",
    imageUrl: "https://assets-global.website-files.com/5fb11c2fc947575c84b548e2/5fb19629b3236f842b343a58_quantstamp.jpg",
    fullDescription: `Quantstamp is a winter 2018 YCombinator company with a mission to secure the decentralized internet, and has protected over $8B in digital asset risk from hackers. More than 170 startups, foundations and enterprises work with Quantstamp to keep their innovative products safe.

Quantstamp ran a successful ICO 2017 to build a protocol for smart contract verification and security audits using SAT solvers. As the ICO closed the team was accepted in to the prestigious YC startup accelerator. The team needed to move quickly to take the whitepaper and translate in to running code.

Quantstamp brought me in as VP of Engineering to take the company's idea to a working product in three months. We had a deeply technical product to build from scratch and a very tight timeline.

To get the product launched I hired out a team of professional engineers and designers to compliment the PhD's on the team and blockchain hackers. I pulled in a team to support their expertise and we released a fully functioning product by YC demo day on the web and ethereum.`
  }
];

// Export helper functions for filtering and searching
export const getProjectBySlug = (slug: string): Project | undefined => {
  return projectsData.find(project => project.slug === slug);
};

export const getProjectsByCategory = (category: string): Project[] => {
  return projectsData.filter(project => project.category.includes(category));
};

export const getAllCategories = (): string[] => {
  const categories = new Set<string>();
  projectsData.forEach(project => {
    project.category.forEach(cat => categories.add(cat));
  });
  return Array.from(categories).sort();
};