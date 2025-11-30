// ABOUTME: About page with professional information and skills
// ABOUTME: Displays career philosophy and development approach

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function About() {
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
          className="max-w-4xl mx-auto"
        >
          <h1 className="font-display text-5xl lg:text-6xl font-bold text-[#2a2a2a] mb-4">
            About
          </h1>
          <h2 className="font-mono text-2xl text-[#71a882] mb-8">
            Building Democratic Social Media
          </h2>
          <p className="font-sans text-lg text-[#666666] leading-relaxed">
            I'm building the alternative to corporate-controlled social media through my public benefit corporation, 
            Verse Communications. After helping invent social media and Twitter, I'm now focused on creating 
            platforms where communities control their own social spaces, users own their data, and technology 
            serves people rather than advertising algorithms.
          </p>
        </motion.div>
      </section>

      {/* Current Mission Section */}
      <section className="px-6 lg:px-12 py-16 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="font-display text-3xl font-bold text-[#2a2a2a] mb-8">
            Why we need new social media
          </h2>
          <div className="space-y-6 text-[#666666] leading-relaxed">
            <p>
              Social media should be a public commons, not corporate property. The platforms we use daily 
              weren't designed for our wellbeing – they were designed to extract our attention and data 
              for advertising revenue. This surveillance capitalism model has fundamentally broken online discourse.
            </p>
            <p>
              Through <strong>Verse Communications</strong>, I'm building a different path forward. Our 
              decentralized social platform <strong>nos.social</strong> runs on the Nostr protocol, 
              giving users true ownership of their accounts, connections, and data. No ads, no algorithmic manipulation, 
              no corporate surveillance.
            </p>
            <p>
              The future of social media is protocol-based, not platform-based. Instead of being locked 
              into corporate silos, users can choose from dozens of interoperable apps while maintaining 
              their identity and connections. This is how we rebuild social media as a tool for 
              community organizing and authentic human connection.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Core Projects Section */}
      <section className="px-6 lg:px-12 py-16 bg-[#f5f1eb]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="font-mono text-sm font-semibold uppercase tracking-wider text-[#71a882] mb-6">
            CURRENT PROJECTS:
          </h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-display text-xl font-bold text-[#2a2a2a] mb-2">nos.social</h4>
              <p className="text-[#666666]">
                Decentralized social media app built on Nostr protocol. User-owned accounts, chronological feeds, 
                no ads or tracking. Interoperable with 50+ other Nostr applications.
              </p>
            </div>
            <div>
              <h4 className="font-display text-xl font-bold text-[#2a2a2a] mb-2">rights.social</h4>
              <p className="text-[#666666]">
                Social Media Bill of Rights establishing five fundamental principles for free, 
                open, and humane social platforms.
              </p>
            </div>
            <div>
              <h4 className="font-display text-xl font-bold text-[#2a2a2a] mb-2">revolution.social</h4>
              <p className="text-[#666666]">
                My podcast exploring how protocol-based digital networks can replace corporate platforms 
                to create a truly democratic digital commons.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Background & Philosophy Section */}
      <section className="px-6 lg:px-12 py-16 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="font-display text-3xl font-bold text-[#2a2a2a] mb-12">
            Background & Philosophy
          </h2>

          <div className="space-y-12">
            <div>
              <h3 className="font-display text-2xl font-bold text-[#2a2a2a] mb-4">
                From Twitter's Origins to Democratic Alternatives
              </h3>
              <div className="space-y-4 text-[#666666]">
                <p>
                  As the first employee and de facto CTO at Twitter (2006), I helped build the platform 
                  that would define modern social media. But I've witnessed firsthand how these platforms 
                  evolved from tools for connection into surveillance machines optimized for engagement 
                  and ad revenue.
                </p>
                <p>
                  Before Twitter, I co-founded Indymedia, an open-source media activist network that 
                  grew to 180+ chapters worldwide. This taught me that decentralized, community-controlled 
                  media is not just possible – it's essential for democratic discourse.
                </p>
                <p>
                  Now I'm applying those lessons to rebuild social media from the ground up. The technology 
                  exists to create platforms where users control their own data, communities set their own 
                  rules, and authentic connection matters more than algorithmic engagement.
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-display text-2xl font-bold text-[#2a2a2a] mb-4">
                Technical Approach
              </h3>
              <div className="space-y-4 text-[#666666]">
                <p>
                  With 25+ years of software development across multiple languages and platforms, 
                  I focus on building systems that serve human needs rather than corporate interests.
                </p>
                <p>
                  My approach prioritizes open protocols over proprietary platforms, user ownership 
                  over corporate control, and community governance over top-down moderation. 
                  These aren't just technical choices – they're political ones that shape how 
                  we relate to each other online.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Vision Section */}
      <section className="px-6 lg:px-12 py-16 bg-[#f5f1eb]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="font-display text-4xl font-bold text-[#2a2a2a] mb-6">
            The future is protocol-based
          </h2>
          <p className="text-lg text-[#666666]">
            Social media should be infrastructure for democracy, not a business model 
            for surveillance. The technology exists to build something better – 
            we just need to choose to build it.
          </p>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="px-6 lg:px-12 py-16 bg-[#2a2a2a] text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="font-display text-4xl font-bold mb-6">
            Join the revolution
          </h2>
          <p className="text-lg mb-8 text-white/80">
            The future of social media is being built right now. Whether you're a developer, 
            community organizer, or someone who believes technology should serve people rather than profits, 
            there's a place for you in this movement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-white text-[#2a2a2a] font-mono text-sm rounded-lg hover:bg-gray-100 transition-colors"
            >
              GET IN TOUCH
            </Link>
            <a
              href="https://nos.social"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 border border-white text-white font-mono text-sm rounded-lg hover:bg-white hover:text-[#2a2a2a] transition-colors"
            >
              TRY NOS.SOCIAL
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default About;