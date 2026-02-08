import { peintureCommercialeExterieureData } from './peintureCommercialeExterieureData';
import { peintureCommercialeInterieureData } from './peintureCommercialeInterieureData';
import { peintureResidentielleExterieureData } from './peintureResidentielleExterieureData';
import { peintureResidentielleInterieureData } from './peintureResidentielleInterieureData';

function getServiceData(serviceSlug) {
  if (serviceSlug === 'peinture-commerciale') {
    return {
      name: {
        fr: 'Peinture commerciale',
        en: 'Commercial painting',
      },
      subServices: {
        ...peintureCommercialeExterieureData['peinture-commerciale'].subServices,
        ...peintureCommercialeInterieureData['peinture-commerciale'].subServices,
      },
    };
  }

  if (serviceSlug === 'peinture-residentielle') {
    return {
      name: {
        fr: 'Peinture résidentielle',
        en: 'Residential painting',
      },
      subServices: {
        ...peintureResidentielleExterieureData['peinture-residentielle']
          .subServices,
        ...peintureResidentielleInterieureData['peinture-residentielle']
          .subServices,
      },
    };
  }

  return null;
}

export const allSousServiceVilleData = {
  'peinture-commerciale': getServiceData('peinture-commerciale'),
  'peinture-residentielle': getServiceData('peinture-residentielle'),
};

export function getSousServiceVilleData(serviceSlug, subServiceSlug, citySlug) {
  const service = allSousServiceVilleData[serviceSlug];
  if (!service) return null;

  const subService = service.subServices?.[subServiceSlug];
  if (!subService) return null;

  const city = subService.cities?.[citySlug];
  if (!city) return null;

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
