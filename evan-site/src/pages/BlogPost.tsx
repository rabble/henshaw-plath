// ABOUTME: Individual blog post page
// ABOUTME: To be implemented with dynamic content

import { useParams } from 'react-router-dom';

function BlogPost() {
  const { slug } = useParams();
  
  return (
    <div className="px-6 lg:px-12 py-16">
      <h1 className="font-display text-4xl font-bold mb-6">Blog Post: {slug}</h1>
      <p className="font-mono text-lg text-[#666666]">Blog post content coming soon...</p>
    </div>
  );
}

export default BlogPost;