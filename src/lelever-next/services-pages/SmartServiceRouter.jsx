import React from 'react';
import { useParams } from 'react-router-dom';
import SousServiceVillePage from './sous_service_ville/SousServiceVillePage';
import ServiceQuartierSecteurPage from './service_quartier/ServiceQuartierSecteurPage';

/**
 * Smart router that determines whether a 3-segment route should go to:
 * - SousServiceVillePage (Service × SubService × City) e.g., /peinture-commerciale/interieure/montreal OR /new-peinture-residentielle/exterieure/brossard
 * - ServiceQuartierSecteurPage (Service × City × Neighborhood) e.g., /new-peinture-interieure/montreal/ahuntsic
 *
 * Logic: Check if param2 is a sub-service (interieure/exterieure) or a city
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
