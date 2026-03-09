import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic';
import { SITE_URL } from '@/lelever-next/seo/config';

const BLOG_POSTS = {
  'comment-choisir-un-peintre-professionnel': () => import('@/lelever-next/pages/CommentChoisirPeintreProfessionnelPage'),
  'prix-peinture-montreal': () => import('@/lelever-next/pages/PrixPeintureMontrealPage'),
  'erreurs-a-eviter-peinture-interieure': () => import('@/lelever-next/pages/ErreursAEviterPeintureInterieurePage'),
};

export function generateStaticParams() {
  return Object.keys(BLOG_POSTS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  if (!BLOG_POSTS[slug]) return {};
  return { alternates: { canonical: `${SITE_URL}/blog/${slug}` } };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const loader = BLOG_POSTS[slug];
  if (!loader) notFound();
  const Page = dynamic(() => loader().then((m) => m.default), { ssr: false });
  return <Page />;
}
