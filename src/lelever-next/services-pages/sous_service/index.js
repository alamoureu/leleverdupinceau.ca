// Main data file for sous-service pages (not sous-service × ville)
// This file combines all sous-service data files

import { peintureCommercialeExterieureData } from './peintureCommercialeExterieureData';
import { peintureCommercialeInterieureData } from './peintureCommercialeInterieureData';
import { peintureResidentielleExterieureData } from './peintureResidentielleExterieureData';
import { peintureResidentielleInterieureData } from './peintureResidentielleInterieureData';

// Merge all sous-service data into one object
export const allSousServiceData = {
  'peinture-commerciale': {
    exterieure: peintureCommercialeExterieureData,
    interieure: peintureCommercialeInterieureData,
  },
  'peinture-residentielle': {
    exterieure: peintureResidentielleExterieureData,
    interieure: peintureResidentielleInterieureData,
  },
};

// Helper function to get page data
export function getSousServiceData(serviceSlug, subServiceSlug) {
  const service = allSousServiceData[serviceSlug];
  if (!service) return null;

  const subService = service[subServiceSlug];
  if (!subService) return null;

  return subService;
}

// Helper function to get all valid combinations
export function getAllSousServiceRoutes() {
  const routes = [];
  Object.keys(allSousServiceData).forEach((serviceSlug) => {
    const service = allSousServiceData[serviceSlug];
    Object.keys(service).forEach((subServiceSlug) => {
      routes.push({
        serviceSlug,
        subServiceSlug,
        path: `/services/${serviceSlug}/${subServiceSlug}`,
      });
    });
  });
  return routes;
}
