// Main data file that merges all service data
// All 5 main services have service × ville pages (5 services × 4 cities = 20 routes)

import { peintureInterieureData } from './peintureInterieureData';
import { peintureCommercialeData } from './peintureCommercialeData';
import { peintureResidentielleData } from './peintureResidentielleData';
import { peintureExterieureData } from './peintureExterieureData';
import { peintureIndustrielleData } from './peintureIndustrielleData';

// Merge all service data into one object
export const allServiceQuartierData = {
  ...peintureInterieureData,
  ...peintureCommercialeData,
  ...peintureResidentielleData,
  ...peintureExterieureData,
  ...peintureIndustrielleData,
};

// Helper function to get page data
export function getServiceQuartierData(serviceSlug, citySlug) {
  if (!serviceSlug || !citySlug) {
    return null;
  }

  // Direct lookup - URLs match data keys exactly
  const service = allServiceQuartierData[serviceSlug];
  if (!service || !service.cities) {
    return null;
  }

  const city = service.cities[citySlug];
  if (!city) {
    return null;
  }

  return {
    service,
    city,
  };
}

// Helper function to get all valid combinations
export function getAllServiceQuartierRoutes() {
  const routes = [];
  Object.keys(allServiceQuartierData).forEach((serviceSlug) => {
    const service = allServiceQuartierData[serviceSlug];
    Object.keys(service.cities).forEach((citySlug) => {
      routes.push({
        serviceSlug,
        citySlug,
        path: `/services/${serviceSlug}/${citySlug}`,
      });
    });
  });
  return routes;
}
