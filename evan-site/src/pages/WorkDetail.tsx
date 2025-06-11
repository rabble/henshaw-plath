// ABOUTME: Individual work detail page
// ABOUTME: To be implemented with dynamic content

import { useParams } from 'react-router-dom';

function WorkDetail() {
  const { slug } = useParams();
  
  return (
    <div className="px-6 lg:px-12 py-16">
      <h1 className="font-display text-4xl font-bold mb-6">Work: {slug}</h1>
      <p className="font-mono text-lg text-[#666666]">Work details coming soon...</p>
    </div>
  );
}

export default WorkDetail;