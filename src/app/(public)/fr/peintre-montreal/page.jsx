import dynamic from 'next/dynamic';
import { SITE_URL } from '@/lelever-next/seo/config';

const LandingPageV2 = dynamic(
  () => import('@/views/LandingPageV2').then((m) => m.default),
  { ssr: false }
);

export const metadata = {
  title: 'Peintre Montréal | Le Lever du Pinceau',
  description: 'Peintre professionnel à Montréal.',
  robots: { index: false, follow: false },
  alternates: { canonical: `${SITE_URL}/fr/peintre-montreal` },
};

export default function FrPeintreMontrealPage() {
  return <LandingPageV2 lang="fr" indexable={false} />;
}
