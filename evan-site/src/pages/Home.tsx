// ABOUTME: Home page component with hero and main sections
// ABOUTME: Landing page showcasing services, skills, and recent work

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projects/projectsData';
import Organizations from '../components/sections/Organizations';
import ExperienceTimeline from '../components/sections/ExperienceTimeline';
import InstagramFeed from '../components/sections/InstagramFeed';

function Home() {
  return (
    <div className="min-h-screen bg-[#f5f1eb]">
      {/* Hero Section */}
      <section className="px-6 lg:px-12 py-16 lg:py-24">
        {/* @rabble Branding */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="font-display text-8xl lg:text-9xl font-bold text-[#2a2a2a] opacity-10">@rabble</h1>
        </motion.div>

        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-4xl lg:text-5xl font-bold text-[#2a2a2a] mb-4"
          >
            Evan Henshaw-Plath
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-mono text-xl text-[#666666] mb-8"
          >
            Product & Engineering - Innovation to change the world
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-sans text-lg text-[#666666] max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            I am an activist turned technologist, currently focused on building out the commons for
            social media. Creating platforms where equity and sustainability are prioritized, where
            extractive business models do not determine our behavior, is my current passion.
          </motion.p>
        </div>
      </section>

      {/* Feature Boxes Section */}
      <section className="px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 bg-[#e8e4de] rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">{feature.icon}</span>
              </div>
              <h3 className="font-display text-2xl font-bold mb-4 text-[#2a2a2a]">{feature.title}</h3>
              <p className="font-sans text-[#666666] leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Me Section */}
      <section className="px-6 lg:px-12 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl font-bold mb-8 text-[#2a2a2a]">About Me</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <p className="font-sans text-lg text-[#666666] leading-relaxed">
                I am an innovator who takes projects from conception to shipping. I create digital
                products that meet real user needs. I seek transformative uses of technology.
              </p>
              <p className="font-sans text-lg text-[#666666] leading-relaxed">
                Building technology, teams, and companies to create tools which transform society
                is my goal. I seek out projects that build commons, spread equity, and increase
                participation. Let's work together.
              </p>
            </div>
            
            <div className="bg-[#f5f1eb] p-6 rounded-lg">
              <h3 className="font-display text-xl font-bold mb-4 text-[#2a2a2a]">Get in Touch</h3>
              <div className="space-y-3">
                <p className="font-mono text-sm text-[#666666]">
                  📍 Wellington, New Zealand
                </p>
                <p className="font-mono text-sm text-[#666666]">
                  ✉️ evan@henshaw-plath.com
                </p>
                <div className="pt-4 space-y-2">
                  <a href="https://twitter.com/rabble" className="block font-mono text-sm text-[#71a882] hover:underline">
                    Twitter: @rabble
                  </a>
                  <a href="https://linkedin.com/in/rabble" className="block font-mono text-sm text-[#71a882] hover:underline">
                    LinkedIn: @rabble
                  </a>
                  <a href="https://nos.social/rabble" className="block font-mono text-sm text-[#71a882] hover:underline">
                    Nostr: rabble@nos.social
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="px-6 lg:px-12 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="font-display text-3xl font-bold text-[#2a2a2a]">Featured Projects</h2>
            <Link 
              to="/projects" 
              className="font-mono text-sm text-[#71a882] hover:underline"
            >
              View All Projects →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData.slice(0, 6).map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <Link to={`/projects/${project.slug}`}>
                  <div className="aspect-video bg-[#e8e4de]">
                    {/* Project thumbnail placeholder */}
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold mb-2 text-[#2a2a2a]">
                      {project.title}
                    </h3>
                    <p className="font-sans text-sm text-[#666666] line-clamp-2">
                      {project.summary}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-6 lg:px-12 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl font-bold mb-12 text-center text-[#2a2a2a]">What People Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.slice(0, 4).map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-[#f5f1eb] p-8 rounded-lg"
              >
                <p className="font-sans text-[#666666] mb-4 italic">
                  "{testimonial.quote}"
                </p>
                <div className="font-mono text-sm">
                  <p className="font-bold text-[#2a2a2a]">{testimonial.author}</p>
                  <p className="text-[#666666]">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link 
              to="/testimonials" 
              className="font-mono text-sm text-[#71a882] hover:underline"
            >
              Read More Testimonials →
            </Link>
          </div>
        </div>
      </section>

      {/* Organizations Section */}
      <Organizations />

      {/* Experience Timeline */}
      <ExperienceTimeline />

      {/* Instagram Feed */}
      <InstagramFeed />

      {/* CTA Section */}
      <section className="px-6 lg:px-12 py-16 bg-[#2a2a2a] text-white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-display text-3xl font-bold mb-6">Ready to Build Something Amazing?</h2>
          <p className="font-sans text-lg mb-8 text-white/80">
            Let's discuss how I can help bring your vision to life.
          </p>
          <Link 
            to="/contact" 
            className="inline-block px-8 py-4 bg-white text-[#2a2a2a] font-mono text-sm rounded-lg hover:bg-gray-100 transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
}

const features = [
  {
    icon: '📦',
    title: 'Product',
    description: 'I can take a product from ideation, to prototyping, to launch. I create products that delight users and solve real problems.',
  },
  {
    icon: '⚙️',
    title: 'Engineering',
    description: 'Full stack engineer with deep experience in system architecture, security, and scalability. I build things that last.',
  },
  {
    icon: '🚀',
    title: 'Leadership',
    description: 'I build and lead teams that ship. From startups to large organizations, I help teams achieve their full potential.',
  },
];

const testimonials = [
  {
    quote: "Evan is a rare combination of technical excellence and product vision. He understands both the details and the big picture.",
    author: "Roberto Lupi",
    role: "Google SRE"
  },
  {
    quote: "Working with Evan transformed our approach to building social platforms. His vision for decentralized systems is unmatched.",
    author: "Dom Sagolla",
    role: "iOS Dev Camp Founder"
  },
  {
    quote: "Evan's work on Indymedia helped create a new model for independent journalism that continues to influence media today.",
    author: "New York Times",
    role: "Media Review"
  },
  {
    quote: "As part of Twitter's founding team, Evan brought both technical expertise and a vision for what social media could become.",
    author: "Ray McClure",
    role: "Twitter Founding Team"
  },
];

export default Home;