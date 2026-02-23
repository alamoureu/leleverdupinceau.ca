import React, { useState, useEffect } from 'react';
import BlogPostPage from '../blog-posts/BlogPostPage';
import PageSkeleton from '../../PageSkeleton';

export default function CommentChoisirPeintreProfessionnelPage() {
  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    import('../blog-posts/commentChoisirPeintreProfessionnelData').then((m) =>
      setBlogData(m.commentChoisirPeintreProfessionnelData)
    );
  }, []);

  if (!blogData) return <PageSkeleton />;
  return <BlogPostPage blogData={blogData} />;
}
