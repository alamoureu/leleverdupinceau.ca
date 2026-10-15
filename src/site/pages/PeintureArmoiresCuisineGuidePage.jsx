import React, { useState, useEffect } from 'react';
import BlogPostPage from '../blog-posts/BlogPostPage';
import PageSkeleton from '../../PageSkeleton';

export default function PeintureArmoiresCuisineGuidePage() {
  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    import('../blog-posts/peintureArmoiresCuisineGuideData').then((m) =>
      setBlogData(m.peintureArmoiresCuisineGuideData)
    );
  }, []);

  if (!blogData) return <PageSkeleton />;
  return <BlogPostPage blogData={blogData} />;
}
