import dynamic from 'next/dynamic';
const PrivacyPolicyPage = dynamic(() => import('@/views/PrivacyPolicyPage').then((m) => m.default), { ssr: false });
import { SITE_URL } from '@/lelever-next/seo/config';

export const metadata = {
  title: 'Politique de confidentialité | Le Lever du Pinceau',
  description: 'Politique de confidentialité de Le Lever du Pinceau.',
  alternates: { canonical: `${SITE_URL}/politiques/confidentialite` },
};

export default function PrivacyRoute() {
  return <PrivacyPolicyPage />;
}
