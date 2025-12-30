// Main data file that merges all sous-service × ville data
// This file combines all sous-service-specific data files

import { peintureCommercialeExterieureData } from './peintureCommercialeExterieureData';
import { peintureCommercialeInterieureData } from './peintureCommercialeInterieureData';
import { peintureResidentielleExterieureData } from './peintureResidentielleExterieureData';
import { peintureResidentielleInterieureData } from './peintureResidentielleInterieureData';

// Helper to get service data (handles both with and without "new-" prefix)
function getServiceData(serviceSlug) {
  const dataKey = serviceSlug.startsWith('new-')
    ? serviceSlug
    : `new-${serviceSlug}`;

  if (dataKey === 'new-peinture-commerciale') {
    return {
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
    };
  }

  if (dataKey === 'new-peinture-residentielle') {
    return {
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
    };
  }

  return null;
}

// Merge all sous-service data into one object
// Support both formats: with and without "new-" prefix
export const allSousServiceVilleData = {
  'new-peinture-commerciale': getServiceData('new-peinture-commerciale'),
  'peinture-commerciale': getServiceData('peinture-commerciale'),
  'new-peinture-residentielle': getServiceData('new-peinture-residentielle'),
  'peinture-residentielle': getServiceData('peinture-residentielle'),
};

// Helper function to get page data
export function getSousServiceVilleData(serviceSlug, subServiceSlug, citySlug) {
  // Handle both formats: with and without "new-" prefix
  // URLs use: peinture-commerciale, peinture-residentielle
  // Data uses: new-peinture-commerciale, new-peinture-residentielle
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
        serviceSlug === 'peinture-commerciale' ||
        serviceSlug === 'new-peinture-commerciale'
          ? 'Peinture commerciale'
          : 'Peinture résidentielle',
      en:
        serviceSlug === 'peinture-commerciale' ||
        serviceSlug === 'new-peinture-commerciale'
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
