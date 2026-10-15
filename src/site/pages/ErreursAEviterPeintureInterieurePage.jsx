import React, { useState, useEffect } from 'react';
import BlogPostPage from '../blog-posts/BlogPostPage';
import PageSkeleton from '../../PageSkeleton';

export default function ErreursAEviterPeintureInterieurePage() {
  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    import('../blog-posts/erreursAEviterPeintureInterieureData').then((m) =>
      setBlogData(m.erreursAEviterPeintureInterieureData)
    );
  }, []);

  if (!blogData) return <PageSkeleton />;
  return <BlogPostPage blogData={blogData} />;
}
