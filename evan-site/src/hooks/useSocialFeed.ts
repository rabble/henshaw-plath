// ABOUTME: Custom hook for fetching social media posts with minimal caching
// ABOUTME: Handles live API calls to Nostr and Bluesky with optimized storage usage

import { useState, useEffect } from 'react';
import NDK, { NDKEvent, type NDKFilter } from '@nostr-dev-kit/ndk';

export interface SocialPost {
  id: string;
  platform: 'instagram' | 'nostr' | 'bluesky';
  content?: string;
  imageUrl?: string;
  link: string;
  timestamp: Date;
  likes?: number;
  reposts?: number;
}

export function useSocialFeed() {
  const [posts, setPosts] = useState<SocialPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [debugInfo, setDebugInfo] = useState<string[]>([]);

  useEffect(() => {
    fetchSocialPosts();
  }, []);

  const addDebug = (message: string) => {
    console.log(`[SocialFeed] ${message}`);
    setDebugInfo(prev => [...prev, `${new Date().toISOString()}: ${message}`]);
  };

  const fetchSocialPosts = async () => {
    try {
      setLoading(true);
      setError(null);
      setDebugInfo([]);
      addDebug('Starting to fetch social posts...');
      
      // Fetch posts from different platforms
      addDebug('Calling APIs...');
      const [nostrResult, blueskyResult] = await Promise.allSettled([
        fetchNostrPosts(),
        fetchBlueskyPosts()
      ]);

      const allPosts: SocialPost[] = [];

      // Add Nostr posts if successful
      if (nostrResult.status === 'fulfilled') {
        addDebug(`Nostr: Successfully fetched ${nostrResult.value.length} posts`);
        allPosts.push(...nostrResult.value);
      } else {
        addDebug(`Nostr: Failed - ${nostrResult.reason}`);
        console.error('Failed to fetch Nostr posts:', nostrResult.reason);
      }

      // Add Bluesky posts if successful
      if (blueskyResult.status === 'fulfilled') {
        addDebug(`Bluesky: Successfully fetched ${blueskyResult.value.length} posts`);
        allPosts.push(...blueskyResult.value);
      } else {
        addDebug(`Bluesky: Failed - ${blueskyResult.reason}`);
        console.error('Failed to fetch Bluesky posts:', blueskyResult.reason);
      }

      // Sort all posts by timestamp (newest first)
      allPosts.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());

      // Take the most recent 10 posts
      const finalPosts = allPosts.slice(0, 10);
      addDebug(`Final result: ${finalPosts.length} posts to display`);
      setPosts(finalPosts);
      
      // If no posts were fetched, show empty state - NO FAKE CONTENT!
      if (finalPosts.length === 0) {
        addDebug('No posts available - showing error state');
        setError('No recent posts available from social platforms');
      }
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : 'Unknown error';
      addDebug(`Fatal error: ${errorMsg}`);
      console.error('Error fetching social posts:', err);
      setError('Unable to load social posts');
    } finally {
      setLoading(false);
      addDebug('Finished loading');
    }
  };

  return { posts, loading, error, refetch: fetchSocialPosts, debugInfo };
}

// Live API functions with minimal caching

export async function fetchNostrPosts(): Promise<SocialPost[]> {
  try {
    // Initialize NDK with minimal caching configuration
    const ndk = new NDK({
      explicitRelayUrls: [
        'wss://relay.damus.io',
        'wss://nos.lol',
        'wss://relay.snort.social'
      ],
      // Disable persistent caching to prevent storage bloat
      enableOutboxModel: false,
      // Use in-memory cache only, no IndexedDB
      cacheAdapter: undefined
    });

    // Set a short timeout for connection
    const connectionTimeout = new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Connection timeout')), 3000)
    );

    // Connect to relays with timeout
    await Promise.race([
      ndk.connect(),
      connectionTimeout
    ]);

    // Your npub converted to hex format
    const pubkey = 'c1fc7771f5fa418fd3e83f5c1c4c69925138e6c8fca9d2e4b2e08a2c5b89dd93';

    // Create filter for your recent posts only
    const filter: NDKFilter = {
      authors: [pubkey],
      kinds: [1], // Text notes
      limit: 10, // Reduce from 20 to 10 for less data
      since: Math.floor(Date.now() / 1000) - (7 * 24 * 60 * 60) // Only last 7 days
    };

    // Fetch events with short timeout
    const fetchTimeout = new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Fetch timeout')), 5000)
    );

    const events = await Promise.race([
      ndk.fetchEvents(filter),
      fetchTimeout
    ]) as Set<NDKEvent>;
    
    const eventsArray = Array.from(events);

    // Sort by created_at descending (newest first)
    eventsArray.sort((a, b) => (b.created_at || 0) - (a.created_at || 0));

    // Convert to SocialPost format
    const posts: SocialPost[] = eventsArray.slice(0, 5).map((event: NDKEvent) => {
      const noteId = event.id;
      return {
        id: event.id,
        platform: 'nostr' as const,
        content: event.content || '',
        link: `https://rabble.nos.social/note/${noteId}`,
        timestamp: new Date((event.created_at || 0) * 1000),
        // Nostr doesn't have centralized like/repost counts - these would require separate queries
        // Removing fake numbers to be honest about the data
        likes: undefined,
        reposts: undefined
      };
    });

    // Explicitly disconnect to clean up resources
    for (const relay of ndk.pool?.relays.values() || []) {
      relay.disconnect();
    }

    return posts;
  } catch (err) {
    console.error('Error fetching Nostr posts:', err);
    return [];
  }
}

export async function fetchBlueskyPosts(): Promise<SocialPost[]> {
  try {
    // Bluesky AT Protocol API
    const handle = 'rabble.nz';
    const response = await fetch(
      `https://public.api.bsky.app/xrpc/app.bsky.feed.getAuthorFeed?actor=${handle}&limit=5`,
      {
        headers: {
          'Accept': 'application/json',
        },
        // Add timeout to prevent hanging
        signal: AbortSignal.timeout(5000)
      }
    );
    
    if (!response.ok) {
      throw new Error(`Bluesky API error: ${response.status}`);
    }
    
    const data = await response.json();
    
    return data.feed.slice(0, 5).map((item: any) => {
      return {
        id: item.post.cid,
        platform: 'bluesky' as const,
        content: item.post.record.text || '',
        link: `https://bsky.app/profile/${handle}/post/${item.post.uri.split('/').pop()}`,
        timestamp: new Date(item.post.record.createdAt),
        // Use actual engagement numbers from Bluesky API
        likes: item.post.likeCount,
        reposts: item.post.repostCount
      };
    });
  } catch (err) {
    console.error('Error fetching Bluesky posts:', err);
    return [];
  }
}

