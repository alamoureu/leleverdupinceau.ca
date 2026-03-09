import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic';
import { SITE_URL } from '@/lelever-next/seo/config';

const CITY_PAGES = {
  brossard: () => import('@/lelever-next/pages/BrossardCityPage'),
  montreal: () => import('@/lelever-next/pages/MontrealCityPage'),
  laval: () => import('@/lelever-next/pages/LavalCityPage'),
  longueuil: () => import('@/lelever-next/pages/LongueuilCityPage'),
};

const CITY_META = {
  brossard: { title: 'Peinture Brossard | Le Lever du Pinceau', description: 'Peinture résidentielle et commerciale à Brossard.' },
  montreal: { title: 'Peinture Montréal | Le Lever du Pinceau', description: 'Peinture résidentielle et commerciale à Montréal.' },
  laval: { title: 'Peinture Laval | Le Lever du Pinceau', description: 'Peinture résidentielle et commerciale à Laval.' },
  longueuil: { title: 'Peinture Longueuil | Le Lever du Pinceau', description: 'Peinture résidentielle et commerciale à Longueuil.' },
};

export function generateStaticParams() {
  return [{ city: 'brossard' }, { city: 'montreal' }, { city: 'laval' }, { city: 'longueuil' }];
}

export async function generateMetadata({ params }) {
  const { city } = await params;
  const meta = CITY_META[city];
  if (!meta) return {};
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: `${SITE_URL}/secteurs-desservis/${city}` },
  };
}

export default async function CityPage({ params }) {
  const { city } = await params;
  const loader = CITY_PAGES[city];
  if (!loader) notFound();
  const Page = dynamic(() => loader().then((m) => m.default), { ssr: false });
  return <Page />;
}
