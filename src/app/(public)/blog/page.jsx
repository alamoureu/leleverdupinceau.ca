import dynamic from 'next/dynamic';
const BlogPage = dynamic(() => import('@/lelever-next/pages/BlogPage').then((m) => m.default), { ssr: false });
import { SITE_URL } from '@/lelever-next/seo/config';

export const metadata = {
  title: 'Blog | Peinture Montréal – Le Lever du Pinceau',
  description: 'Conseils et articles sur la peinture résidentielle et commerciale à Montréal.',
  alternates: { canonical: `${SITE_URL}/blog` },
};

export default function BlogRoute() {
  return <BlogPage />;
}
