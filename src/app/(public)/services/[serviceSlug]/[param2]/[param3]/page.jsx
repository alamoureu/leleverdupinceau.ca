import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic';
import { SITE_URL } from '@/lelever-next/seo/config';
import { getSousServiceVilleData, getAllSousServiceVilleRoutes } from '@/lelever-next/services-pages/sous_service_ville/index';
import { getServiceQuartierSecteurData, getAllServiceQuartierSecteurRoutes } from '@/lelever-next/services-pages/service_quartier/index';

const SousServiceVillePage = dynamic(() => import('@/lelever-next/services-pages/sous_service_ville/SousServiceVillePage').then((m) => m.default), { ssr: false });
const ServiceQuartierSecteurPage = dynamic(() => import('@/lelever-next/services-pages/service_quartier/ServiceQuartierSecteurPage').then((m) => m.default), { ssr: false });

const SUB_SERVICES = ['interieure', 'exterieure'];

export function generateStaticParams() {
  const sousVille = getAllSousServiceVilleRoutes();
  const quartierSecteur = getAllServiceQuartierSecteurRoutes();
  return [...sousVille, ...quartierSecteur].map((r) => ({
    serviceSlug: r.serviceSlug,
    param2: r.subServiceSlug || r.citySlug,
    param3: r.citySlug || r.neighborhoodSlug,
  }));
}

export async function generateMetadata({ params }) {
  const { serviceSlug, param2, param3 } = await params;
  const sous = SUB_SERVICES.includes(param2) ? getSousServiceVilleData(serviceSlug, param2, param3) : null;
  const quartier = !sous ? getServiceQuartierSecteurData(serviceSlug, param2, param3) : null;
  if (!sous && !quartier) return {};
  return { alternates: { canonical: `${SITE_URL}/services/${serviceSlug}/${param2}/${param3}` } };
}

export default async function ServiceParam3Page({ params }) {
  const { serviceSlug, param2, param3 } = await params;
  const isSousService = SUB_SERVICES.includes(param2);
  const sousData = isSousService ? getSousServiceVilleData(serviceSlug, param2, param3) : null;
  const quartierData = !isSousService ? getServiceQuartierSecteurData(serviceSlug, param2, param3) : null;
  if (sousData) return <SousServiceVillePage />;
  if (quartierData) return <ServiceQuartierSecteurPage />;
  notFound();
}
