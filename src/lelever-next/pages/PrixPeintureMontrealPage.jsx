'use client';

import React, { useState, useEffect } from 'react';
import BlogPostPage from '../blog-posts/BlogPostPage';
import PageSkeleton from '../../PageSkeleton';

export default function PrixPeintureMontrealPage() {
  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    import('../blog-posts/prixPeintureMontrealData').then((m) =>
      setBlogData(m.prixPeintureMontrealData)
    );
  }, []);

  if (!blogData) return <PageSkeleton />;
  return <BlogPostPage blogData={blogData} />;
}
