import React from 'react';
import { useParams } from 'react-router-dom';
import SousServiceVillePage from './sous_service_ville/SousServiceVillePage';
import ServiceQuartierSecteurPage from './service_quartier/ServiceQuartierSecteurPage';

/**
 * Routes 3-segment /services/:serviceSlug/:param2/:param3 to:
 * - SousServiceVillePage when param2 is interieure|exterieure (e.g. /peinture-commerciale/interieure/montreal)
 * - ServiceQuartierSecteurPage otherwise (e.g. /peinture-interieure/montreal/ahuntsic)
 */
export default function SmartServiceRouter() {
  const { param2 } = useParams();

  // Sub-services are: interieure, exterieure
  // If param2 is one of these, it's a Service × SubService × City route
  const subServices = ['interieure', 'exterieure'];
  const isSousServiceRoute = subServices.includes(param2);

  if (isSousServiceRoute) {
    return <SousServiceVillePage />;
  } else {
    return <ServiceQuartierSecteurPage />;
  }
}
