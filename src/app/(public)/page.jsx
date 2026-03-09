import { SITE_URL, DEFAULT_OG_IMAGE, KEYWORDS } from '@/lelever-next/seo/config';
import HomePageClient from './HomePageClient';

export const metadata = {
  title: 'Peinture Montréal | Peintre professionnel résidentiel & commercial – Le Lever du Pinceau',
  description:
    'Entreprise de peinture #1 à Montréal, Laval, Longueuil, Brossard. Peinture intérieure, extérieure, résidentielle et commerciale. Devis gratuit. Équipe RBQ, finition impeccable, centaines de clients satisfaits.',
  keywords: KEYWORDS.fr,
  alternates: { canonical: `${SITE_URL}/` },
  openGraph: {
    url: SITE_URL,
    title: 'Peinture Montréal | Peintre professionnel – Le Lever du Pinceau',
    description: 'Entreprise de peinture #1 à Montréal. Peinture résidentielle, commerciale, intérieure et extérieure. Devis gratuit.',
    images: [{ url: DEFAULT_OG_IMAGE }],
  },
};

export default function HomePage() {
  return <HomePageClient />;
}
