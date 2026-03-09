import dynamic from 'next/dynamic';
const AboutPage = dynamic(() => import('@/lelever-next/pages/AboutPage').then((m) => m.default), { ssr: false });
import { SITE_URL } from '@/lelever-next/seo/config';

export const metadata = {
  title: 'À propos | Le Lever du Pinceau – Peintres Montréal',
  description: 'Découvrez Le Lever du Pinceau, équipe de peintres professionnels à Montréal. Peinture résidentielle, commerciale, intérieure et extérieure.',
  alternates: { canonical: `${SITE_URL}/a-propos` },
};

export default function AboutRoute() {
  return <AboutPage />;
}
