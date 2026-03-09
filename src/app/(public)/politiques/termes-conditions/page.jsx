import dynamic from 'next/dynamic';
const ThermOfUsePage = dynamic(() => import('@/views/ThermOfUse').then((m) => m.default), { ssr: false });
import { SITE_URL } from '@/lelever-next/seo/config';

export const metadata = {
  title: 'Mentions légales et termes | Le Lever du Pinceau',
  description: 'Mentions légales et conditions d\'utilisation – Le Lever du Pinceau.',
  alternates: { canonical: `${SITE_URL}/politiques/termes-conditions` },
};

export default function TermsRoute() {
  return <ThermOfUsePage />;
}
