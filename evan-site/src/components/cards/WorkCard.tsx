// ABOUTME: Work card component for portfolio items
// ABOUTME: Used in work grids with overlay effects

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface WorkCardProps {
  slug: string;
  title: string;
  category: string;
  image: string;
  year: string;
}

function WorkCard({ slug, title, category, image, year }: WorkCardProps) {
  return (
    <Link to={`/works/${slug}`}>
      <motion.article
        whileHover={{ y: -5 }}
        className="group cursor-pointer"
      >
        <div className="relative overflow-hidden rounded-lg bg-gray-100">
          <div className="aspect-square relative">
            <img
              src={image}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            
            {/* Overlay with details */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="font-mono text-xs uppercase tracking-wider mb-2">
                  {category} • {year}
                </p>
                <h3 className="font-display text-2xl font-bold">
                  {title}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </motion.article>
    </Link>
  );
}

export default WorkCard;