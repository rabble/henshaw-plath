// ABOUTME: Organizations component showing companies worked with
// ABOUTME: Displays logos or names of organizations in a grid

import { motion } from 'framer-motion';

interface Organization {
  name: string;
  logo?: string | null;
  displayName?: string;
  subtitle?: string;
  bgColor: string;
  textColor?: string;
  style?: string;
}

const organizations: Organization[] = [
  { 
    name: "Twitter", 
    logo: null,
    displayName: "Twitter",
    bgColor: "#1DA1F2",
    textColor: "white",
    style: "bold"
  },
  { 
    name: "MIT Media Lab", 
    logo: null,
    displayName: "MIT",
    subtitle: "Media Lab",
    bgColor: "#000000",
    textColor: "white",
    style: "split"
  }, 
  { 
    name: "Quantstamp", 
    logo: null,
    displayName: "QUANTSTAMP",
    bgColor: "#0066FF",
    textColor: "white",
    style: "normal"
  },
  { 
    name: "Digital Garage", 
    logo: null,
    displayName: "DG",
    subtitle: "Digital Garage",
    bgColor: "#FF6B00",
    textColor: "white",
    style: "initials"
  },
  { 
    name: "Indymedia", 
    logo: null,
    displayName: "((i))",
    bgColor: "#CC0000",
    textColor: "white",
    style: "special"
  },
  { 
    name: "Planetary", 
    logo: null,
    displayName: "Planetary",
    bgColor: "#7B3FF2",
    textColor: "white",
    style: "normal"
  },
  { 
    name: "nos.social", 
    logo: null,
    displayName: "nos",
    subtitle: ".social",
    bgColor: "#9945FF",
    textColor: "white",
    style: "split"
  },
  { 
    name: "Odeo", 
    logo: null,
    displayName: "odeo",
    bgColor: "#FF3366",
    textColor: "white",
    style: "lowercase"
  },
  { 
    name: "Affinity", 
    logo: null,
    displayName: "Affinity",
    bgColor: "#4CAF50",
    textColor: "white",
    style: "normal"
  },
  { 
    name: "Neo.com", 
    logo: null,
    displayName: "NEO",
    bgColor: "#212121",
    textColor: "#00FF00",
    style: "matrix"
  }
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
              key={org.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 * index }}
              className="flex items-center justify-center"
            >
              <div className="text-center">
                <div 
                  className="w-24 h-24 rounded-lg flex flex-col items-center justify-center mb-3 shadow-sm hover:shadow-md transition-shadow cursor-pointer p-3"
                  style={{ backgroundColor: org.bgColor || '#f5f1eb' }}
                >
                  {org.logo ? (
                    <img
                      src={org.logo}
                      alt={org.name}
                      className="w-full h-full object-contain"
                      loading="lazy"
                      onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                        console.error(`Failed to load logo for ${org.name}`);
                        const target = e.currentTarget;
                        target.style.display = 'none';
                      }}
                    />
                  ) : org.style === 'split' && org.subtitle ? (
                    <div className="text-center">
                      <div 
                        className="font-display text-lg font-bold leading-none"
                        style={{ color: org.textColor }}
                      >
                        {org.displayName}
                      </div>
                      <div 
                        className="font-mono text-xs mt-1"
                        style={{ color: org.textColor, opacity: 0.8 }}
                      >
                        {org.subtitle}
                      </div>
                    </div>
                  ) : org.style === 'initials' && org.subtitle ? (
                    <div className="text-center">
                      <div 
                        className="font-display text-3xl font-bold leading-none"
                        style={{ color: org.textColor }}
                      >
                        {org.displayName}
                      </div>
                    </div>
                  ) : org.style === 'bold' ? (
                    <div 
                      className="font-display text-xl font-bold"
                      style={{ color: org.textColor }}
                    >
                      {org.displayName}
                    </div>
                  ) : org.style === 'lowercase' ? (
                    <div 
                      className="font-display text-2xl font-medium"
                      style={{ color: org.textColor }}
                    >
                      {org.displayName}
                    </div>
                  ) : org.style === 'special' ? (
                    <div 
                      className="font-mono text-3xl font-bold"
                      style={{ color: org.textColor }}
                    >
                      {org.displayName}
                    </div>
                  ) : org.style === 'matrix' ? (
                    <div 
                      className="font-mono text-2xl font-bold tracking-widest"
                      style={{ color: org.textColor }}
                    >
                      {org.displayName}
                    </div>
                  ) : (
                    <div 
                      className="font-display text-base font-semibold"
                      style={{ color: org.textColor }}
                    >
                      {org.displayName}
                    </div>
                  )}
                </div>
                <p className="font-mono text-xs text-[#666666]">{org.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Organizations;