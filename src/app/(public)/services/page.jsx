import dynamic from 'next/dynamic';
const ServicesPage = dynamic(() => import('@/lelever-next/pages/ServicesPage').then((m) => m.default), { ssr: false });
import { SITE_URL } from '@/lelever-next/seo/config';

export const metadata = {
  title: 'Services de peinture | Montréal – Le Lever du Pinceau',
  description: 'Peinture résidentielle, commerciale, intérieure, extérieure et industrielle à Montréal, Laval, Longueuil, Brossard.',
  alternates: { canonical: `${SITE_URL}/services` },
};

export default function ServicesRoute() {
  return <ServicesPage />;
}
