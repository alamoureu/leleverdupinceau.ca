import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic';
import { SITE_URL } from '@/lelever-next/seo/config';

const MAIN_SERVICES = {
  'peinture-commerciale': () => import('@/lelever-next/services-pages/PeintureCommercialePage'),
  'peinture-exterieure': () => import('@/lelever-next/services-pages/PeintureExterieurePage'),
  'peinture-residentielle': () => import('@/lelever-next/services-pages/PeintureResidentiellePage'),
  'peinture-interieure': () => import('@/lelever-next/services-pages/PeintureInterieurePage'),
  'peinture-industrielle': () => import('@/lelever-next/services-pages/PeintureIndustriellePage'),
};

export function generateStaticParams() {
  return Object.keys(MAIN_SERVICES).map((serviceSlug) => ({ serviceSlug }));
}

export async function generateMetadata({ params }) {
  const { serviceSlug } = await params;
  if (!MAIN_SERVICES[serviceSlug]) return {};
  const titles = {
    'peinture-commerciale': 'Peinture commerciale Montréal | Le Lever du Pinceau',
    'peinture-exterieure': 'Peinture extérieure Montréal | Le Lever du Pinceau',
    'peinture-residentielle': 'Peinture résidentielle Montréal | Le Lever du Pinceau',
    'peinture-interieure': 'Peinture intérieure Montréal | Le Lever du Pinceau',
    'peinture-industrielle': 'Peinture industrielle Montréal | Le Lever du Pinceau',
  };
  return {
    title: titles[serviceSlug],
    alternates: { canonical: `${SITE_URL}/services/${serviceSlug}` },
  };
}

export default async function MainServicePage({ params }) {
  const { serviceSlug } = await params;
  const loader = MAIN_SERVICES[serviceSlug];
  if (!loader) notFound();
  const Page = dynamic(() => loader().then((m) => m.default), { ssr: false });
  return <Page />;
}
