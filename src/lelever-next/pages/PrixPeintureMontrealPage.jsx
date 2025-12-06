import React from 'react';
import BlogPostPage from '../blog-posts/BlogPostPage';
import { prixPeintureMontrealData } from '../blog-posts/prixPeintureMontrealData';

export default function PrixPeintureMontrealPage() {
  return <BlogPostPage blogData={prixPeintureMontrealData} />;
}

