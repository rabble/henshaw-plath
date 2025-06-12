// ABOUTME: Individual project detail page with full content
// ABOUTME: Displays comprehensive project information

import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getProjectBySlug } from '../data/projects/projectsData';

function ProjectDetail() {
  const { slug } = useParams();
  const project = slug ? getProjectBySlug(slug) : null;

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div className="min-h-screen bg-[#f5f1eb]">
      {/* Header */}
      <div className="px-6 lg:px-12 py-8 border-b border-[#e5e1da]">
        <Link to="/projects" className="text-sm font-mono text-[#666666] hover:text-[#71a882] transition-colors">
          ← Back to projects
        </Link>
      </div>

      {/* Hero Section */}
      <section className="px-6 lg:px-12 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Project Title and Meta */}
          <div className="mb-8">
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-[#2a2a2a] mb-4">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-4 text-sm font-mono text-[#666666]">
              {project.releaseDate && (
                <span>Released: {project.releaseDate}</span>
              )}
              {project.client && (
                <span>Client: {project.client}</span>
              )}
              {project.category.map((cat) => (
                <span key={cat} className="px-3 py-1 bg-[#71a882]/10 text-[#71a882] rounded-full">
                  {cat}
                </span>
              ))}
            </div>
          </div>

          {/* External Link */}
          {project.externalLink && (
            <a
              href={project.externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#71a882] text-white font-mono text-sm rounded-lg hover:bg-[#5d8d6d] transition-colors mb-12"
            >
              Visit Project
              <span>→</span>
            </a>
          )}

          {/* Project Image */}
          <div className="mb-12">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Project Content */}
          <div className="prose prose-lg max-w-none">
            <div className="space-y-6 text-[#666666] leading-relaxed">
              {project.fullDescription.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-base lg:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Additional Details Section */}
      {project.additionalDetails && (
        <section className="px-6 lg:px-12 py-16 bg-white border-t border-[#e5e1da]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-display text-3xl font-bold text-[#2a2a2a] mb-8">
              Project Details
            </h2>
            {project.additionalDetails}
          </motion.div>
        </section>
      )}

      {/* Related Projects */}
      <section className="px-6 lg:px-12 py-16 border-t border-[#e5e1da]">
        <div className="max-w-4xl mx-auto">
          <h3 className="font-display text-2xl font-bold text-[#2a2a2a] mb-6">
            More Projects
          </h3>
          <div className="flex gap-4">
            <Link
              to="/projects"
              className="text-[#71a882] hover:text-[#5d8d6d] font-mono text-sm transition-colors"
            >
              View All Projects →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProjectDetail;