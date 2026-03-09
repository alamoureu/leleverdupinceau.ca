import dynamic from 'next/dynamic';
const SecteursDesservisPage = dynamic(() => import('@/lelever-next/pages/SecteursDesservisPage').then((m) => m.default), { ssr: false });
import { SITE_URL } from '@/lelever-next/seo/config';

export const metadata = {
  title: 'Secteurs desservis | Montréal, Laval, Longueuil, Brossard – Le Lever du Pinceau',
  description: 'Le Lever du Pinceau dessert Montréal, Laval, Longueuil, Brossard et le Grand Montréal. Peinture résidentielle et commerciale.',
  alternates: { canonical: `${SITE_URL}/secteurs-desservis` },
};

export default function SecteursDesservisRoute() {
  return <SecteursDesservisPage />;
}
