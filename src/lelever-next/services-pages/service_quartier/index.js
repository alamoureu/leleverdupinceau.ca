// Main data file for Service × City × Neighborhood pages
// This file combines all service-specific neighborhood data files
// Follow the same pattern as service_quartier/index.js

import { peintureInterieureSecteursData } from './peintureInterieureSecteursData';
// import { peintureExterieureSecteursData } from './peintureExterieureSecteursData';
// import { peintureCommercialeSecteursData } from './peintureCommercialeSecteursData';
// import { peintureResidentielleSecteursData } from './peintureResidentielleSecteursData';
// import { peintureIndustrielleSecteursData } from './peintureIndustrielleSecteursData';

// Merge all service data into one object
export const allServiceQuartierSecteurData = {
  ...peintureInterieureSecteursData,
  // ...peintureExterieureSecteursData,
  // ...peintureCommercialeSecteursData,
  // ...peintureResidentielleSecteursData,
  // ...peintureIndustrielleSecteursData,
};

// Helper function to get page data
export function getServiceQuartierSecteurData(
  serviceSlug,
  citySlug,
  neighborhoodSlug
) {
  const serviceSlugMap = {
    'new-peinture-interieure': 'peinture-interieure',
    'new-peinture-exterieure': 'peinture-exterieure',
  };
  
  const mappedServiceSlug = serviceSlugMap[serviceSlug] || serviceSlug;
  const service = allServiceQuartierSecteurData[mappedServiceSlug];
  if (!service) return null;

  const city = service?.cities?.[citySlug];
  if (!city) return null;

  const neighborhood = city?.neighborhoods?.[neighborhoodSlug];
  if (!neighborhood) return null;

  return {
    service,
    city,
    neighborhood,
  };
}

// Helper function to get all valid combinations
export function getAllServiceQuartierSecteurRoutes() {
  const routes = [];
  Object.keys(allServiceQuartierSecteurData).forEach((serviceSlug) => {
    const service = allServiceQuartierSecteurData[serviceSlug];
    Object.keys(service.cities).forEach((citySlug) => {
      const city = service.cities[citySlug];
      Object.keys(city.neighborhoods).forEach((neighborhoodSlug) => {
        routes.push({
          serviceSlug,
          citySlug,
          neighborhoodSlug,
          path: `/services/${serviceSlug}/${citySlug}/${neighborhoodSlug}`,
        });
      });
    });
  });
  return routes;
}

