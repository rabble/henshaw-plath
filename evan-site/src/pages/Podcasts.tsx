// ABOUTME: Podcasts page featuring Revolution.social prominently 
// ABOUTME: Shows Rabble's own podcast above guest appearances

import { motion } from 'framer-motion';
import { podcastAppearances } from '../data/podcasts/podcastData';

function Podcasts() {
  return (
    <div className="min-h-screen bg-[#f5f1eb]">
      <div className="px-6 lg:px-12 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Revolution.social - THE MAIN EVENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-20"
          >
            <div className="bg-gradient-to-br from-[#71a882] to-[#5a8a6b] rounded-2xl p-12 text-white relative overflow-hidden">
              <div className="relative z-10">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="font-display text-5xl lg:text-7xl font-bold mb-6"
                >
                  Revolution.social
                </motion.h1>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center gap-4 mb-8"
                >
                  <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full font-mono text-sm">
                    🎙️ Host: Rabble
                  </span>
                  <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full font-mono text-sm">
                    📡 Ongoing
                  </span>
                </motion.div>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="font-sans text-xl leading-relaxed mb-8 text-white/90 max-w-4xl"
                >
                  My own podcast exploring technology, society, and social change. Deep conversations about 
                  building a better future through technology and collective action.
                </motion.p>
                
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  href="https://revolution.social"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-[#71a882] px-8 py-4 rounded-lg font-mono font-semibold hover:bg-white/90 transition-all transform hover:scale-105"
                >
                  🚀 Listen to Revolution.social
                </motion.a>
              </div>
              
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
            </div>
          </motion.div>

          {/* Podcast Appearances Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#2a2a2a] mb-4">
              Podcast Appearances
            </h2>
            <p className="font-sans text-lg text-[#666666] leading-relaxed mb-12">
              Conversations I've had on other podcasts about decentralized tech, social movements, and digital futures.
            </p>

            <div className="space-y-6">
              {podcastAppearances.map((appearance, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * (index + 7) }}
                  className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex gap-4">
                    {/* Podcast Image */}
                    {appearance.imageUrl && (
                      <div className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden bg-gray-100">
                        <img 
                          src={appearance.imageUrl} 
                          alt={appearance.podcastName}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      </div>
                    )}
                    
                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="font-display text-xl font-semibold text-[#2a2a2a] mb-2">
                            {appearance.title}
                          </h3>
                          <p className="font-mono text-sm text-[#71a882] mb-2">
                            {appearance.podcastName}
                            {appearance.duration && ` • ${appearance.duration}`}
                          </p>
                        </div>
                        <span className="font-mono text-sm text-[#666666]">
                          {appearance.date}
                        </span>
                      </div>
                      
                      <p className="font-sans text-[#666666] leading-relaxed mb-4 line-clamp-3">
                        {appearance.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <a
                          href={appearance.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center font-mono text-sm text-[#71a882] hover:underline"
                        >
                          Listen →
                        </a>
                        {appearance.hosts && appearance.hosts.length > 0 && (
                          <span className="text-xs text-[#999999] font-mono">
                            Host{appearance.hosts.length > 1 ? 's' : ''}: {appearance.hosts.join(', ')}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Podcasts;