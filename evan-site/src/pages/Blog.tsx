// ABOUTME: Blog listing page with filterable blog posts
// ABOUTME: Displays all blog posts from blogData

import { useState } from 'react';
import { motion } from 'framer-motion';
import BlogCard from '../components/cards/BlogCard';
import { getAllCategories, getAllTags, getSortedPosts } from '../data/blog/blogData';

function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedTag, setSelectedTag] = useState<string>('All');
  
  const categories = ['All', ...getAllCategories()];
  const tags = ['All', ...getAllTags()];

  let filteredPosts = getSortedPosts();
  
  if (selectedCategory !== 'All') {
    filteredPosts = filteredPosts.filter(post => post.category === selectedCategory);
  }
  
  if (selectedTag !== 'All') {
    filteredPosts = filteredPosts.filter(post => post.tags.includes(selectedTag));
  }

  return (
    <div className="min-h-screen px-6 lg:px-12 py-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h1 className="font-display text-4xl lg:text-5xl font-bold mb-6">Blog</h1>
        <p className="font-mono text-lg text-[#666666] max-w-2xl">
          Thoughts on technology, product development, and building things that matter.
        </p>
      </motion.div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-12 space-y-6"
      >
        {/* Category Filter */}
        <div>
          <h3 className="font-mono text-sm font-semibold mb-3 uppercase tracking-wider">Categories</h3>
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
        </div>

        {/* Tag Filter */}
        <div>
          <h3 className="font-mono text-sm font-semibold mb-3 uppercase tracking-wider">Tags</h3>
          <div className="flex flex-wrap gap-3">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3 py-1 rounded-full font-mono text-xs transition-colors ${
                  selectedTag === tag
                    ? 'bg-[#ef7c54] text-white'
                    : 'bg-[#e1e3d9] hover:bg-[#d9dbd0]'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Blog Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filteredPosts.map((post, index) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 * index }}
          >
            <BlogCard
              slug={post.slug}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              category={post.category}
              image={post.imageUrl}
              tags={post.tags}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Blog;