// ABOUTME: Video and talks page showcasing presentations
// ABOUTME: Displays YouTube videos and conference talks

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface Talk {
  title: string;
  description: string;
  videoId?: string;
  vimeoId?: string;
  thumbnail?: string;
  conference?: string;
  year?: string;
}

const talks: Talk[] = [
  {
    title: "How to Replace Twitter, Instagram, TikTok & YouTube",
    description: "Discussion about replacing centralized social media platforms with decentralized alternatives. Exploring the technical and social challenges of building better social media systems.",
    videoId: "nzlc3bnaoJI",
  },
  {
    title: "Social Media: Keeping up with Communities",
    description: "Walter Issacson's Trailblazer podcast covered the history of social media and my work from Indymedia through Odeo podcasting and twitter through today.",
    videoId: "I7TXT9H3MVQ",
  },
  {
    title: "Rebel Geeks: Steal from the Capitalists",
    description: "Documentary film by Al Jazeera English about my career and the work I've done to create technology platforms and use technology as a tool for social change.",
    videoId: "9pGZ2epF8ZY",
  },
  {
    title: "Nostr for Normies",
    description: "Keynote from the Nostrasia Conference 2023 in Tokyo. In this talk I go over the need to make Nostr work for a non-technical audience.",
    videoId: "-d_ailKSDs4",
    conference: "Nostrasia",
    year: "2023"
  },
  {
    title: "Salon Discussion with Nathan Schneider - Web3 and Social Networks: Decentralization",
    description: "Nathan and I talk about the future of social media networks after Elon Musk took over Twitter.",
    videoId: "26TzpxB2ZyA",
  },
  {
    title: "Nostrica 2023: History Social Protocols",
    description: "Talk from the Nostrica 2023 conference on the history of decentralized Social Media protocols from the origin of computer networks though today.",
    videoId: "jQUtthPbFbQ",
    conference: "Nostrica",
    year: "2023"
  },
  {
    title: "How Software Remakes the World",
    description: "Looking at how software is created, how it's used, and how it's not just eating the world, but reshaping it based on the the values and power dynamics of it's creators.",
    videoId: "_T0I0PUttwk",
    conference: "ColaborAmerica - Rio de Janeiro",
    year: "2017"
  },
  {
    title: "What Does It Mean to Be a Programmer",
    description: "Using the story of Jonathan Livingston Seagull this talk looks at the what it means to be a professional software developer. The need to look at what we do as an act of creation which has value in the craft itself.",
    videoId: "jh0GFyzL8Wk",
  },
  {
    title: "La Historia Secreto de Twitter (Spanish)",
    description: "Congreso Mentes Brillantes is an annual conference in Madrid focused on important ideas that illuminate the future.",
    vimeoId: "67493002",
  },
  {
    title: "TED-X: The Values Embedded in Technology",
    description: "Technology is not neutral, instead it has values which reflect the institutions which create it. As people use technology they are shaped by it, in a way which is similar to how our interactions are shaped by the buildings and urban environments in which we live.",
    videoId: "4ORPxrqavdY",
  },
  {
    title: "The Culture Embedded in Ruby vs Python",
    description: "Keynote delivered at the Scottish Ruby Conference looking at the cultural roots of Ruby and Python and how different values shaped the design of the core language and libraries.",
    videoId: "hpahOhcsCwc",
  },
  {
    title: "Reimagining the Internet",
    description: "Talking about planetary.social and my work to build a decentralized web. Interview with Ethan Zuckerman formerly of the MIT Media Lab and now at the new Institute for Digital Public Infrastructure.",
    videoId: "OlW5rOtYYwM",
  },
];

function Talks() {
  return (
    <div className="min-h-screen bg-[#f5f1eb]">
      {/* Header */}
      <div className="px-6 lg:px-12 py-8 border-b border-[#e5e1da]">
        <Link to="/" className="text-sm font-mono text-[#666666] hover:text-[#71a882] transition-colors">
          ← Back to homepage
        </Link>
      </div>

      {/* Hero Section */}
      <section className="px-6 lg:px-12 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <h1 className="font-display text-5xl lg:text-6xl font-bold text-[#2a2a2a] mb-8">
            Video & Talks
          </h1>
          <p className="font-sans text-lg text-[#666666] leading-relaxed">
            A collection of presentations, interviews, and talks about technology, 
            social media, decentralization, and building tools for positive change.
          </p>
        </motion.div>
      </section>

      {/* Talks Grid */}
      <section className="px-6 lg:px-12 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {talks.map((talk, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Video Embed */}
              <div className="aspect-video bg-gray-100">
                {talk.videoId ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${talk.videoId}?rel=0`}
                    title={talk.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                ) : talk.vimeoId ? (
                  <iframe
                    src={`https://player.vimeo.com/video/${talk.vimeoId}`}
                    title={talk.title}
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    <span className="text-6xl">🎥</span>
                  </div>
                )}
              </div>

              {/* Talk Info */}
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-[#2a2a2a] mb-3">
                  {talk.title}
                </h3>
                {talk.conference && (
                  <p className="font-mono text-sm text-[#71a882] mb-2">
                    {talk.conference} {talk.year && `• ${talk.year}`}
                  </p>
                )}
                <p className="text-[#666666] text-sm leading-relaxed">
                  {talk.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* More Talks Note */}
      <section className="px-6 lg:px-12 py-16 border-t border-[#e5e1da]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#666666] italic">
            Note: Some talks unintentionally leave out the tremendous work of many people 
            on various projects. These transformations were multi-year processes involving 
            many people and competing priorities.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Talks;