import {
  residentielleCondoData,
  residentielleAppartementData,
  interieureArmoiresData,
} from './hubL3MinimalData';

/** Fallback data pour L3 encore servis par SousServicePage (pages dédiées ont priorité dans App.jsx). */
export const allSousServiceData = {
  'peinture-residentielle': {
    condo: residentielleCondoData,
    appartement: residentielleAppartementData,
  },
  'peinture-interieure': {
    'armoires-de-cuisine': interieureArmoiresData,
  },
};

export function getSousServiceData(serviceSlug, subServiceSlug) {
  const service = allSousServiceData[serviceSlug];
  if (!service) return null;
  return service[subServiceSlug] || null;
}

export function getAllSousServiceRoutes() {
  const routes = [];
  Object.keys(allSousServiceData).forEach((serviceSlug) => {
    Object.keys(allSousServiceData[serviceSlug]).forEach((subServiceSlug) => {
      routes.push({
        serviceSlug,
        subServiceSlug,
        path: `/services/${serviceSlug}/${subServiceSlug}`,
      });
    });
  });
  return routes;
}
