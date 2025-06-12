// ABOUTME: Podcasts page displaying Evan's podcast appearances  
// ABOUTME: Simple list of podcasts where Evan has been host or guest

import { motion } from 'framer-motion';
import { podcastAppearances } from '../data/podcasts/podcastData';

function Podcasts() {
  return (
    <div className="min-h-screen bg-[#f5f1eb]">
      <div className="px-6 lg:px-12 py-16">
        <div className="max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl lg:text-5xl font-bold text-[#2a2a2a] mb-8"
          >
            Podcasts
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-sans text-lg text-[#666666] leading-relaxed mb-12"
          >
            Here are the podcasts I host or have appeared on as a guest, discussing technology, 
            social change, and building a better digital future.
          </motion.p>

          <div className="space-y-6">
            {podcastAppearances.map((appearance, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (index + 2) }}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-[#2a2a2a] mb-2">
                      {appearance.title}
                    </h3>
                    <p className="font-mono text-sm text-[#71a882] mb-2">
                      {appearance.podcastName} • {appearance.role}
                    </p>
                  </div>
                  <span className="font-mono text-sm text-[#666666]">
                    {appearance.date}
                  </span>
                </div>
                
                <p className="font-sans text-[#666666] leading-relaxed mb-4">
                  {appearance.description}
                </p>
                
                <a
                  href={appearance.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center font-mono text-sm text-[#71a882] hover:underline"
                >
                  Listen →
                </a>
              </motion.div>
            ))}
          </div>

          {podcastAppearances.length === 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-12 text-center"
            >
              <p className="font-sans text-[#666666] italic">
                More podcast appearances coming soon...
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Podcasts;