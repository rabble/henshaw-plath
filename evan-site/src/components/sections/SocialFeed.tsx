// ABOUTME: Social media feed component that aggregates posts from multiple platforms
// ABOUTME: Displays content from Instagram, Nostr, and Bluesky

import { motion } from 'framer-motion';
import { useSocialFeed } from '../../hooks/useSocialFeed';

function SocialFeed() {
  const { posts, loading, error, debugInfo } = useSocialFeed();
  const isDev = import.meta.env.DEV;

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'instagram':
        return '📷';
      case 'nostr':
        return '⚡';
      case 'bluesky':
        return '🦋';
      default:
        return '📱';
    }
  };

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case 'instagram':
        return 'bg-gradient-to-br from-purple-500 to-pink-500';
      case 'nostr':
        return 'bg-purple-600';
      case 'bluesky':
        return 'bg-blue-500';
      default:
        return 'bg-gray-500';
    }
  };

  const formatTimestamp = (date: Date) => {
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 7) return `${diffInDays}d ago`;
    return date.toLocaleDateString();
  };

  if (loading) {
    return (
      <section className="px-6 lg:px-12 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-[#2a2a2a] mb-8">Follow Along</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-200 rounded-lg aspect-square"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="px-6 lg:px-12 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-[#2a2a2a] mb-8">Follow Along</h2>
          <div className="text-center py-12">
            <p className="text-[#666666] mb-4">{error}</p>
            
            {/* Debug info in development */}
            {isDev && debugInfo.length > 0 && (
              <div className="mt-8 text-left">
                <h3 className="font-mono text-sm font-bold mb-2">Debug Info:</h3>
                <div className="bg-gray-100 p-4 rounded text-xs font-mono max-h-40 overflow-y-auto">
                  {debugInfo.map((info, i) => (
                    <div key={i} className="mb-1">{info}</div>
                  ))}
                </div>
              </div>
            )}
            
            <div className="flex justify-center gap-6 mt-6">
              <a 
                href="https://instagram.com/rabble" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#71a882] hover:underline"
              >
                Follow on Instagram →
              </a>
              <a 
                href="https://rabble.nos.social" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#71a882] hover:underline"
              >
                Follow on Nostr →
              </a>
              <a 
                href="https://bsky.app/profile/rabble.nz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#71a882] hover:underline"
              >
                Follow on Bluesky →
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="px-6 lg:px-12 py-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="font-display text-3xl font-bold text-[#2a2a2a]">Follow Along</h2>
          <div className="flex gap-4">
            <a 
              href="https://instagram.com/rabble" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#666666] hover:text-[#71a882] transition-colors flex items-center gap-1"
            >
              📷 Instagram
            </a>
            <a 
              href="https://rabble.nos.social" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#666666] hover:text-[#71a882] transition-colors flex items-center gap-1"
            >
              ⚡ Nostr
            </a>
            <a 
              href="https://bsky.app/profile/rabble.nz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#666666] hover:text-[#71a882] transition-colors flex items-center gap-1"
            >
              🦋 Bluesky
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <motion.a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative block"
            >
              <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-[#f5f1eb] to-white border border-[#e5e1da] p-6 hover:shadow-lg transition-all duration-300">
                {/* Platform indicator */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`w-8 h-8 rounded-full ${getPlatformColor(post.platform)} flex items-center justify-center text-white text-sm flex-shrink-0`}>
                    {getPlatformIcon(post.platform)}
                  </span>
                  <span className="text-xs text-[#999999] font-mono">
                    {formatTimestamp(post.timestamp)}
                  </span>
                </div>

                {/* Content */}
                <p className="text-sm text-[#666666] line-clamp-4 mb-4 leading-relaxed">
                  {post.content}
                </p>

                {/* Engagement stats */}
                {(post.likes || post.reposts) && (
                  <div className="flex gap-4 text-xs text-[#999999] border-t border-[#e5e1da] pt-3">
                    {post.likes && (
                      <span className="flex items-center gap-1">
                        ❤️ {post.likes}
                      </span>
                    )}
                    {post.reposts && (
                      <span className="flex items-center gap-1">
                        🔁 {post.reposts}
                      </span>
                    )}
                  </div>
                )}

                {/* Hover effect */}
                <div className="absolute inset-0 bg-[#71a882]/0 group-hover:bg-[#71a882]/5 transition-colors duration-300 rounded-lg pointer-events-none"></div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Platform links footer */}
        <div className="mt-12 text-center">
          <p className="text-sm text-[#666666] mb-4">
            Stay connected across platforms for the latest updates
          </p>
          <div className="flex justify-center gap-6">
            <a 
              href="https://instagram.com/rabble" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:shadow-md transition-all text-sm"
            >
              📷 Follow on Instagram
            </a>
            <a 
              href="https://rabble.nos.social" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:shadow-md transition-all text-sm"
            >
              ⚡ Follow on Nostr
            </a>
            <a 
              href="https://bsky.app/profile/rabble.nz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:shadow-md transition-all text-sm"
            >
              🦋 Follow on Bluesky
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SocialFeed;