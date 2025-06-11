// ABOUTME: Experience timeline component showing career history
// ABOUTME: Displays work experience in chronological order

import { motion } from 'framer-motion';
import { experienceData } from '../../data/experienceData';

function ExperienceTimeline() {
  return (
    <section className="px-6 lg:px-12 py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-3xl font-bold mb-12 text-[#2a2a2a]">
          Experience
        </h2>
        
        <div className="space-y-8">
          {experienceData.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="relative pl-8 border-l-2 border-[#e8e4de]"
            >
              <div className="absolute -left-2 top-0 w-4 h-4 bg-[#71a882] rounded-full" />
              
              <div className="mb-2">
                <h3 className="font-display text-xl font-bold text-[#2a2a2a]">
                  {experience.title}
                </h3>
                <p className="font-mono text-sm text-[#71a882]">
                  {experience.company}
                </p>
                <p className="font-mono text-xs text-[#666666]">
                  {experience.startDate} - {experience.endDate} • {experience.location}
                </p>
              </div>
              
              <p className="font-sans text-[#666666] mb-3">
                {experience.description}
              </p>
              
              {experience.achievements && (
                <ul className="space-y-1">
                  {experience.achievements.map((achievement, i) => (
                    <li key={i} className="font-sans text-sm text-[#666666] flex items-start">
                      <span className="text-[#71a882] mr-2">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperienceTimeline;