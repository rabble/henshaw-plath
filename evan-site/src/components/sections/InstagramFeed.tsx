// ABOUTME: Instagram feed component showing recent posts
// ABOUTME: Displays a grid of Instagram posts (placeholder implementation)

import { motion } from 'framer-motion';

// Placeholder data - in production, this would come from Instagram API
const instagramPosts = [
  { id: 1, imageUrl: "https://via.placeholder.com/300x300", caption: "Recent post" },
  { id: 2, imageUrl: "https://via.placeholder.com/300x300", caption: "Recent post" },
  { id: 3, imageUrl: "https://via.placeholder.com/300x300", caption: "Recent post" },
  { id: 4, imageUrl: "https://via.placeholder.com/300x300", caption: "Recent post" },
  { id: 5, imageUrl: "https://via.placeholder.com/300x300", caption: "Recent post" },
  { id: 6, imageUrl: "https://via.placeholder.com/300x300", caption: "Recent post" },
];

function InstagramFeed() {
  return (
    <section className="px-6 lg:px-12 py-16 bg-[#f5f1eb]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="font-display text-3xl font-bold mb-4 text-[#2a2a2a]">
            Follow Along
          </h2>
          <a 
            href="https://instagram.com/rabble" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-mono text-sm text-[#71a882] hover:underline"
          >
            @rabble on Instagram
          </a>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.05 * index }}
              className="aspect-square bg-[#e8e4de] rounded-lg overflow-hidden hover:opacity-90 transition-opacity cursor-pointer"
            >
              <div className="w-full h-full flex items-center justify-center">
                <span className="font-mono text-xs text-[#666666]">IG</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default InstagramFeed;