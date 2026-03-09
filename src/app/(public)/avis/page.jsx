import dynamic from 'next/dynamic';
const AvisPage = dynamic(() => import('@/lelever-next/pages/AvisPage').then((m) => m.default), { ssr: false });
import { SITE_URL } from '@/lelever-next/seo/config';

export const metadata = {
  title: 'Avis clients | Le Lever du Pinceau – Peinture Montréal',
  description: 'Témoignages et avis clients de Le Lever du Pinceau. Peinture résidentielle et commerciale à Montréal.',
  alternates: { canonical: `${SITE_URL}/avis` },
};

export default function AvisRoute() {
  return <AvisPage />;
}
