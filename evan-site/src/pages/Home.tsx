// ABOUTME: Home page component with hero and main sections
// ABOUTME: Landing page showcasing services, skills, and recent work

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="px-6 lg:px-12 py-16 lg:py-24">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6"
        >
          Evan Henshaw-Plath<br/>
          Product & Engineering<br/>
          Innovation to change the world.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-mono text-lg text-[#666666] max-w-2xl mb-8"
        >
          I build products that matter. With over 20 years of experience in technology leadership, 
          I help teams create innovative solutions that drive social and technological progress.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link 
            to="/contact" 
            className="inline-block px-8 py-4 bg-[#71a882] text-white font-mono text-sm rounded-lg hover:bg-[#5d8d6d] transition-colors"
          >
            Let's Work Together
          </Link>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="px-6 lg:px-12 py-16 bg-white/50 backdrop-blur-sm">
        <h2 className="font-display text-3xl font-bold mb-12">What I Do</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group"
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-[#71a882]/10 rounded-full flex items-center justify-center group-hover:bg-[#71a882]/20 transition-colors">
                  <span className="text-3xl">{service.icon}</span>
                </div>
              </div>
              <h3 className="font-display text-xl font-bold mb-3">{service.title}</h3>
              <p className="font-mono text-sm text-[#666666]">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-6 lg:px-12 py-16">
        <h2 className="font-display text-3xl font-bold mb-12">Skills & Expertise</h2>
        
        <div className="space-y-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <div className="flex justify-between mb-2">
                <span className="font-mono text-sm font-medium">{skill.name}</span>
                <span className="font-mono text-sm text-[#666666]">{skill.percentage}%</span>
              </div>
              <div className="h-2 bg-[#e1e3d9] rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.percentage}%` }}
                  transition={{ duration: 1, delay: 0.5 + 0.1 * index }}
                  className="h-full bg-[#71a882]"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 lg:px-12 py-16 bg-[#151515] text-white">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold mb-6">Ready to Build Something Amazing?</h2>
          <p className="font-mono text-lg mb-8 text-white/80">
            Let's discuss how I can help bring your vision to life.
          </p>
          <Link 
            to="/contact" 
            className="inline-block px-8 py-4 bg-white text-[#151515] font-mono text-sm rounded-lg hover:bg-gray-100 transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
}

const services = [
  {
    icon: '🚀',
    title: 'Product Strategy',
    description: 'Transform ideas into successful products with strategic planning and execution.',
  },
  {
    icon: '⚡',
    title: 'Technical Leadership',
    description: 'Lead engineering teams to build scalable, innovative solutions.',
  },
  {
    icon: '🌟',
    title: 'Innovation Consulting',
    description: 'Drive organizational change through technology and creative problem-solving.',
  },
];

const skills = [
  { name: 'Product Management', percentage: 95 },
  { name: 'Full-Stack Development', percentage: 90 },
  { name: 'Team Leadership', percentage: 92 },
  { name: 'System Architecture', percentage: 88 },
  { name: 'Strategic Planning', percentage: 85 },
];

export default Home;