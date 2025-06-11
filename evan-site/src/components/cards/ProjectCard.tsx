// ABOUTME: Project card component for displaying project previews
// ABOUTME: Used in project grids with hover effects

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  slug: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

function ProjectCard({ slug, title, category, image, description }: ProjectCardProps) {
  return (
    <Link to={`/projects/${slug}`}>
      <motion.article
        whileHover={{ y: -5 }}
        className="group cursor-pointer"
      >
        <div className="relative overflow-hidden rounded-lg mb-4 bg-gray-100">
          <div className="aspect-[4/3] relative">
            <img
              src={image}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
          </div>
        </div>
        
        <div className="space-y-2">
          <p className="font-mono text-xs text-[#71a882] uppercase tracking-wider">
            {category}
          </p>
          <h3 className="font-display text-xl font-bold group-hover:text-[#71a882] transition-colors">
            {title}
          </h3>
          <p className="font-mono text-sm text-[#666666] line-clamp-2">
            {description}
          </p>
        </div>
      </motion.article>
    </Link>
  );
}

export default ProjectCard;