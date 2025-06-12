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
          className="max-w-4xl"
        >
          <h1 className="font-display text-5xl lg:text-6xl font-bold text-[#2a2a2a] mb-4">
            About
          </h1>
          <h2 className="font-mono text-2xl text-[#71a882] mb-8">
            Product & Engineering Leadership
          </h2>
          <p className="font-sans text-lg text-[#666666] leading-relaxed">
            Decades of experience looking at the world we've got, analyzing where we should take it, 
            and creating teams to make that dream a reality. From helping invent social media, 
            podcasting, and twitter to thinking about what digital tools we need to build going forward.
          </p>
        </motion.div>
      </section>

      {/* From Problem to Market Fit Section */}
      <section className="px-6 lg:px-12 py-16 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="font-display text-3xl font-bold text-[#2a2a2a] mb-8">
            From problem to market fit
          </h2>
          <div className="space-y-6 text-[#666666] leading-relaxed">
            <p>
              Creating software is a collective act, driven by coordination, the consensus of a common vision. 
              The myth making of heroes that it is Jobs, Musk, Dorsey who've driven the creation of something new. 
              But that's only a small part of the story. Leadership matters, it brings people together, 
              it gives a narrative to make sense of the project.
            </p>
            <p>
              What really creates good software is the work of the team. Just enough coordination to stay in touch, 
              in coordination, in collaboration, but not so much that it takes away from the work of each person on the project.
            </p>
            <p>
              Successful software development is dependent on the team building something which works technically, 
              but as important it needs to solve a real problem users have.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Lean and Agile Section */}
      <section className="px-6 lg:px-12 py-16 bg-[#f5f1eb]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="font-mono text-sm font-semibold uppercase tracking-wider text-[#71a882] mb-6">
            LEAN AND AGILE:
          </h3>
          <ul className="space-y-3 text-[#666666]">
            <li className="flex items-start">
              <span className="text-[#71a882] mr-3">•</span>
              Software development is as much about learning and discovery as delivery
            </li>
            <li className="flex items-start">
              <span className="text-[#71a882] mr-3">•</span>
              Code to validate or invalidate a hypothesis
            </li>
            <li className="flex items-start">
              <span className="text-[#71a882] mr-3">•</span>
              Launch quickly, collect data, learn, adapt
            </li>
            <li className="flex items-start">
              <span className="text-[#71a882] mr-3">•</span>
              Light agile planning with a cadence of coordination rituals
            </li>
          </ul>
          <p className="mt-8 text-[#666666] italic">
            It's about getting the team on to the same page while encouraging passion and people 
            driving to build to solve real user needs.
          </p>
        </motion.div>
      </section>

      {/* Professional Skills Section */}
      <section className="px-6 lg:px-12 py-16 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="font-display text-3xl font-bold text-[#2a2a2a] mb-12">
            Professional Skills
          </h2>

          <div className="space-y-12">
            <div>
              <h3 className="font-display text-2xl font-bold text-[#2a2a2a] mb-4">
                Software Development
              </h3>
              <div className="space-y-4 text-[#666666]">
                <p>
                  The social part of software development is as important as the technical. 
                  Bringing a team together under a common purpose, with meaning and an understanding 
                  of where we're going.
                </p>
                <p>
                  Building good software is a process of managed evolution. Large complicated systems 
                  evolve like life, out of small changes and adaptations. Projects with lots of upfront 
                  planning fail because it's not possible to have a perfect picture of where things are 
                  and where they should go.
                </p>
                <p>
                  Software is social, it's a human, living system, so we need to build it as people use it. 
                  Collecting quantitative and qualitative feedback from users. Talking to them and watching 
                  what they do instead of what they say is the way to build effective software that solves 
                  real user problems.
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-display text-2xl font-bold text-[#2a2a2a] mb-4">
                Languages
              </h3>
              <p className="text-[#666666] mb-4">
                As a professional software developer for 25 years I've got experience in perl, python, 
                java, ruby, shell, sql, javascript, lisp, swift, and a bunch of other languages.
              </p>
              <p className="text-[#666666] italic">
                Being a professional developer is not about what you know, but how you're able to learn, 
                constructing context out of complicated systems.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Never Stop Learning Section */}
      <section className="px-6 lg:px-12 py-16 bg-[#f5f1eb]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="font-display text-4xl font-bold text-[#2a2a2a] mb-6">
            Never stop learning!
          </h2>
          <p className="text-lg text-[#666666]">
            The question is not what should we be building. The question is what are the 
            fundamental problems that our users face.
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
            Let's create something great!
          </h2>
          <p className="text-lg mb-8 text-white/80">
            I love to tackle hard problems and work with people committed to building a better world. 
            Software is eating the world, but we get to design that software, shape its affordances, 
            use that power to shape the future. What should we build together?
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-white text-[#2a2a2a] font-mono text-sm rounded-lg hover:bg-gray-100 transition-colors"
          >
            GET IN TOUCH
          </Link>
        </motion.div>
      </section>
    </div>
  );
}

export default About;