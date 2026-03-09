import dynamic from 'next/dynamic';
const ContactPage = dynamic(() => import('@/lelever-next/pages/ContactPage').then((m) => m.default), { ssr: false });
import { SITE_URL } from '@/lelever-next/seo/config';

export const metadata = {
  title: 'Contact | Peinture Montréal – Le Lever du Pinceau',
  description: 'Contactez Le Lever du Pinceau pour un devis gratuit. Peinture résidentielle et commerciale à Montréal, Laval, Longueuil, Brossard.',
  alternates: { canonical: `${SITE_URL}/contact` },
};

export default function ContactRoute() {
  return <ContactPage />;
}
