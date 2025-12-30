import { peintureInterieureSecteursData } from './peintureInterieureSecteursData';

// Merge all service data into one object
export const allServiceQuartierSecteurData = {
  ...peintureInterieureSecteursData,
};

// Helper function to get page data
export function getServiceQuartierSecteurData(
  serviceSlug,
  citySlug,
  neighborhoodSlug
) {
  const service = allServiceQuartierSecteurData[serviceSlug];
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
