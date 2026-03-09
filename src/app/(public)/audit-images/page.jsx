import dynamic from 'next/dynamic';
const AuditImagesPage = dynamic(() => import('@/lelever-next/pages/AuditImagesPage').then((m) => m.default), { ssr: false });
import { SITE_URL } from '@/lelever-next/seo/config';

export const metadata = {
  title: 'Audit images | Le Lever du Pinceau',
  description: 'Audit des images – Le Lever du Pinceau.',
  alternates: { canonical: `${SITE_URL}/audit-images` },
};

export default function AuditImagesRoute() {
  return <AuditImagesPage />;
}
