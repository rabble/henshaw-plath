// ABOUTME: Blog card component for displaying blog post previews
// ABOUTME: Used in blog listings with hover effects

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  tags: string[];
}

function BlogCard({ slug, title, excerpt, date, category, image, tags }: BlogCardProps) {
  return (
    <Link to={`/blog/${slug}`}>
      <motion.article
        whileHover={{ y: -5 }}
        className="group cursor-pointer bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
      >
        <div className="relative overflow-hidden">
          <div className="aspect-[16/9] relative">
            <img
              src={image}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </div>
        
        <div className="p-6 space-y-3">
          <div className="flex items-center justify-between">
            <p className="font-mono text-xs text-[#71a882] uppercase tracking-wider">
              {category}
            </p>
            <time className="font-mono text-xs text-[#666666]">
              {new Date(date).toLocaleDateString('en-US', { 
                month: 'short', 
                day: 'numeric', 
                year: 'numeric' 
              })}
            </time>
          </div>
          
          <h3 className="font-display text-xl font-bold group-hover:text-[#71a882] transition-colors line-clamp-2">
            {title}
          </h3>
          
          <p className="font-mono text-sm text-[#666666] line-clamp-3">
            {excerpt}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="inline-block px-2 py-1 bg-[#e1e3d9] text-xs font-mono rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.article>
    </Link>
  );
}

export default BlogCard;