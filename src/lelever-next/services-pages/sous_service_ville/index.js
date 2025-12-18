// Main data file that merges all sous-service × ville data
// This file combines all sous-service-specific data files

import { peintureCommercialeExterieureData } from './peintureCommercialeExterieureData';
import { peintureCommercialeInterieureData } from './peintureCommercialeInterieureData';
import { peintureResidentielleExterieureData } from './peintureResidentielleExterieureData';
import { peintureResidentielleInterieureData } from './peintureResidentielleInterieureData';

// Merge all sous-service data into one object
export const allSousServiceVilleData = {
  'new-peinture-commerciale': {
    name: {
      fr: 'Peinture commerciale',
      en: 'Commercial painting',
    },
    subServices: {
      ...peintureCommercialeExterieureData['new-peinture-commerciale']
        .subServices,
      ...peintureCommercialeInterieureData['new-peinture-commerciale']
        .subServices,
    },
  },
  'new-peinture-residentielle': {
    name: {
      fr: 'Peinture résidentielle',
      en: 'Residential painting',
    },
    subServices: {
      ...peintureResidentielleExterieureData['new-peinture-residentielle']
        .subServices,
      ...peintureResidentielleInterieureData['new-peinture-residentielle']
        .subServices,
    },
  },
};

// Helper function to get page data
export function getSousServiceVilleData(serviceSlug, subServiceSlug, citySlug) {
  const service = allSousServiceVilleData[serviceSlug];
  if (!service) {
    return null;
  }

  const subService = service.subServices?.[subServiceSlug];
  if (!subService) {
    return null;
  }

  const city = subService.cities?.[citySlug];
  if (!city) {
    return null;
  }

  // Ensure service has name property
  const serviceWithName = {
    ...service,
    name: service.name || {
      fr:
        serviceSlug === 'peinture-commerciale'
          ? 'Peinture commerciale'
          : 'Peinture résidentielle',
      en:
        serviceSlug === 'peinture-commerciale'
          ? 'Commercial painting'
          : 'Residential painting',
    },
  };

  return {
    service: serviceWithName,
    subService,
    city,
  };
}

// Helper function to get all valid combinations
export function getAllSousServiceVilleRoutes() {
  const routes = [];
  Object.keys(allSousServiceVilleData).forEach((serviceSlug) => {
    const service = allSousServiceVilleData[serviceSlug];
    if (service.subServices) {
      Object.keys(service.subServices).forEach((subServiceSlug) => {
        const subService = service.subServices[subServiceSlug];
        if (subService.cities) {
          Object.keys(subService.cities).forEach((citySlug) => {
            routes.push({
              serviceSlug,
              subServiceSlug,
              citySlug,
              path: `/services/${serviceSlug}/${subServiceSlug}/${citySlug}`,
            });
          });
        }
      });
    }
  });
  return routes;
}
