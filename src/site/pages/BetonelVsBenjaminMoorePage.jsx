import React, { useState, useEffect } from 'react';
import BlogPostPage from '../blog-posts/BlogPostPage';
import PageSkeleton from '../../PageSkeleton';

export default function BetonelVsBenjaminMoorePage() {
  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    import('../blog-posts/betonelVsBenjaminMooreData').then((m) =>
      setBlogData(m.betonelVsBenjaminMooreData)
    );
  }, []);

  if (!blogData) return <PageSkeleton />;
  return <BlogPostPage blogData={blogData} />;
}
