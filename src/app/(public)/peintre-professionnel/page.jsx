import dynamic from 'next/dynamic';
const PeintreProfessionnelPage = dynamic(() => import('@/lelever-next/pages/PeintreProfessionnelPage').then((m) => m.default), { ssr: false });
import { SITE_URL } from '@/lelever-next/seo/config';

export const metadata = {
  title: 'Peintres professionnels Montréal | Le Lever du Pinceau',
  description: 'Peintres professionnels certifiés RBQ à Montréal. Peinture résidentielle, commerciale. Devis gratuit.',
  alternates: { canonical: `${SITE_URL}/peintre-professionnel` },
};

export default function PeintreProfessionnelRoute() {
  return <PeintreProfessionnelPage />;
}
