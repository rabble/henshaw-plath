// ABOUTME: Projects listing page with filterable project grid
// ABOUTME: Displays all projects from projectsData

import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/cards/ProjectCard';
import { projectsData, getAllCategories } from '../data/projects/projectsData';

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const categories = ['All', ...getAllCategories()];

  const filteredProjects = selectedCategory === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category.includes(selectedCategory));

  return (
    <div className="min-h-screen px-6 lg:px-12 py-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h1 className="font-display text-4xl lg:text-5xl font-bold mb-6">Projects</h1>
        <p className="font-mono text-lg text-[#666666] max-w-2xl">
          A collection of projects that showcase my experience building products that matter.
          From civic tech initiatives to startup ventures, each project represents a step toward positive change.
        </p>
      </motion.div>

      {/* Category Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-12"
      >
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full font-mono text-sm transition-colors ${
                selectedCategory === category
                  ? 'bg-[#71a882] text-white'
                  : 'bg-[#e1e3d9] hover:bg-[#d9dbd0]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 * index }}
          >
            <ProjectCard
              slug={project.slug}
              title={project.title}
              category={project.category.join(', ')}
              image={project.imageUrl}
              description={project.summary}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Projects;