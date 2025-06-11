// ABOUTME: Organizations component showing companies worked with
// ABOUTME: Displays logos or names of organizations in a grid

import { motion } from 'framer-motion';

const organizations = [
  "Twitter",
  "MIT Media Lab", 
  "Quantstamp",
  "Digital Garage",
  "Indymedia",
  "Planetary",
  "nos.social",
  "Odeo",
  "Affinity",
  "Neo.com"
];

function Organizations() {
  return (
    <section className="px-6 lg:px-12 py-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-3xl font-bold mb-12 text-center text-[#2a2a2a]">
          Organizations I've Worked With
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {organizations.map((org, index) => (
            <motion.div
              key={org}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 * index }}
              className="flex items-center justify-center"
            >
              <div className="text-center">
                <div className="w-24 h-24 bg-[#f5f1eb] rounded-lg flex items-center justify-center mb-3">
                  <span className="font-mono text-sm text-[#666666]">
                    {org.slice(0, 2).toUpperCase()}
                  </span>
                </div>
                <p className="font-mono text-xs text-[#666666]">{org}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Organizations;