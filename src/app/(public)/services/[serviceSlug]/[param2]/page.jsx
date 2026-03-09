import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic';
import { SITE_URL } from '@/lelever-next/seo/config';
import { getSousServiceData, getAllSousServiceRoutes } from '@/lelever-next/services-pages/sous_service/index';
import { getServiceQuartierData, getAllServiceQuartierRoutes } from '@/lelever-next/services-pages/service_ville/index';

const SousServicePage = dynamic(() => import('@/lelever-next/services-pages/sous_service/SousServicePage').then((m) => m.default), { ssr: false });
const ServiceQuartierPage = dynamic(() => import('@/lelever-next/services-pages/service_ville/ServiceQuartierPage').then((m) => m.default), { ssr: false });

export function generateStaticParams() {
  const sous = getAllSousServiceRoutes();
  const quartier = getAllServiceQuartierRoutes();
  return [...sous, ...quartier].map((r) => ({
    serviceSlug: r.serviceSlug,
    param2: r.subServiceSlug || r.citySlug,
  }));
}

export async function generateMetadata({ params }) {
  const { serviceSlug, param2 } = await params;
  const sous = getSousServiceData(serviceSlug, param2);
  const quartier = getServiceQuartierData(serviceSlug, param2);
  const data = sous || quartier;
  if (!data) return {};
  return { alternates: { canonical: `${SITE_URL}/services/${serviceSlug}/${param2}` } };
}

export default async function ServiceParam2Page({ params }) {
  const { serviceSlug, param2 } = await params;
  const sousData = getSousServiceData(serviceSlug, param2);
  const quartierData = getServiceQuartierData(serviceSlug, param2);
  if (sousData) return <SousServicePage />;
  if (quartierData) return <ServiceQuartierPage />;
  notFound();
}
