// ABOUTME: Contact page with contact form and information
// ABOUTME: Displays contact methods and location

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Contact() {
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
            Get in Touch
          </h1>
          <p className="font-sans text-lg text-[#666666] leading-relaxed">
            I'm always interested in hearing about new projects and opportunities. 
            Whether you want to collaborate on building something meaningful or just 
            want to chat about technology and social change, feel free to reach out.
          </p>
        </motion.div>
      </section>

      {/* Primary CTAs - What You Want Them To Do */}
      <section className="px-6 lg:px-12 pb-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
          >
            {/* Book Me for Podcast */}
            <a 
              href="mailto:evan@henshaw-plath.com?subject=Podcast%20Guest%20Invitation"
              className="bg-gradient-to-br from-[#71a882] to-[#5a8a6b] text-white p-8 rounded-xl hover:shadow-lg transition-all group"
            >
              <span className="text-3xl mb-4 block">🎙️</span>
              <h3 className="font-display text-2xl font-bold mb-2">Book Me for Your Podcast</h3>
              <p className="text-white/90 mb-4">Let's discuss decentralized social media, tech activism, and building the future</p>
              <span className="font-mono text-sm group-hover:underline">Send Invitation →</span>
            </a>

            {/* Listen to Revolution.social */}
            <a 
              href="https://revolution.social"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border-2 border-[#71a882] p-8 rounded-xl hover:shadow-lg transition-all group"
            >
              <span className="text-3xl mb-4 block">🎧</span>
              <h3 className="font-display text-2xl font-bold mb-2 text-[#2a2a2a]">Listen to Revolution.social</h3>
              <p className="text-[#666666] mb-4">My podcast exploring technology, society, and social change</p>
              <span className="font-mono text-sm text-[#71a882] group-hover:underline">Listen Now →</span>
            </a>

            {/* Collaborate on Projects */}
            <a 
              href="mailto:evan@henshaw-plath.com?subject=Project%20Collaboration"
              className="bg-white border-2 border-[#e5e1da] p-8 rounded-xl hover:shadow-lg hover:border-[#71a882] transition-all group"
            >
              <span className="text-3xl mb-4 block">🤝</span>
              <h3 className="font-display text-2xl font-bold mb-2 text-[#2a2a2a]">Collaborate on Projects</h3>
              <p className="text-[#666666] mb-4">Let's build tools for positive social change together</p>
              <span className="font-mono text-sm text-[#71a882] group-hover:underline">Start Conversation →</span>
            </a>

            {/* Support the Fund */}
            <a 
              href="https://andotherstuff.org"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#2a2a2a] text-white p-8 rounded-xl hover:shadow-lg transition-all group"
            >
              <span className="text-3xl mb-4 block">💰</span>
              <h3 className="font-display text-2xl font-bold mb-2">Support andotherstuff.org</h3>
              <p className="text-white/90 mb-4">Fund supporting decentralized social media projects</p>
              <span className="font-mono text-sm group-hover:underline">Learn More →</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="px-6 lg:px-12 py-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="font-display text-3xl font-bold text-[#2a2a2a] mb-12 text-center">
              Connect With Me
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Location */}
              <div className="text-center">
                <div className="w-16 h-16 bg-[#71a882]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📍</span>
                </div>
                <h3 className="font-mono text-sm font-semibold text-[#2a2a2a] mb-2">Location</h3>
                <p className="text-[#666666]">Pōneke, Aotearoa</p>
                <p className="text-[#666666]">Wellington, New Zealand</p>
              </div>

              {/* Email */}
              <div className="text-center">
                <div className="w-16 h-16 bg-[#71a882]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✉️</span>
                </div>
                <h3 className="font-mono text-sm font-semibold text-[#2a2a2a] mb-2">Email</h3>
                <a href="mailto:evan@henshaw-plath.com" className="text-[#71a882] hover:text-[#5d8d6d] transition-colors">
                  evan@henshaw-plath.com
                </a>
              </div>

              {/* Podcast */}
              <div className="text-center">
                <div className="w-16 h-16 bg-[#71a882]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎙️</span>
                </div>
                <h3 className="font-mono text-sm font-semibold text-[#2a2a2a] mb-2">Podcast</h3>
                <a href="https://revolution.social" target="_blank" rel="noopener noreferrer" className="text-[#71a882] hover:text-[#5d8d6d] transition-colors">
                  revolution.social
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="border-t border-[#e5e1da] pt-8">
              <h3 className="font-mono text-sm font-semibold text-[#2a2a2a] mb-4 text-center">Find Me Online</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="https://rabble.nos.social" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-[#9945FF] text-white rounded-lg hover:bg-[#8835EF] transition-colors">
                  Nostr
                </a>
                <a href="https://twitter.com/rabble" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-[#1DA1F2] text-white rounded-lg hover:bg-[#1991E2] transition-colors">
                  Twitter
                </a>
                <a href="https://bsky.app/profile/rabble.nz" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-[#00A8E8] text-white rounded-lg hover:bg-[#0098D8] transition-colors">
                  Bluesky
                </a>
                <a href="https://github.com/rabble" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-[#333333] text-white rounded-lg hover:bg-[#222222] transition-colors">
                  GitHub
                </a>
                <a href="https://linkedin.com/in/rabble" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-[#0077B5] text-white rounded-lg hover:bg-[#0067A5] transition-colors">
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Contact;