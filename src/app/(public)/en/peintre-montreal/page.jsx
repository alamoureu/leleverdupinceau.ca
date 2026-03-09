import dynamic from 'next/dynamic';
import { SITE_URL } from '@/lelever-next/seo/config';

const LandingPageV2 = dynamic(
  () => import('@/views/LandingPageV2').then((m) => m.default),
  { ssr: false }
);

export const metadata = {
  title: 'Painter Montreal | Le Lever du Pinceau',
  description: 'Professional painter in Montreal.',
  robots: { index: false, follow: false },
  alternates: { canonical: `${SITE_URL}/en/peintre-montreal` },
};

export default function EnPeintreMontrealPage() {
  return <LandingPageV2 lang="en" indexable={false} />;
}
