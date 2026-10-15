import React from 'react';
import { Navigate, useParams } from 'react-router-dom';

/** Anciennes URLs /services/:service/:param2/:param3 (service × sous-service × ville ou × quartier). */
const CITY_TO_SECTEUR = {
  montreal: '/secteurs/montreal',
  laval: '/secteurs/laval',
  longueuil: '/secteurs/longueuil',
  brossard: '/secteurs/brossard',
};

/** Quartiers qui ont maintenant une page dédiée sous /secteurs/montreal/... */
const NEIGHBORHOOD_TO_SECTEUR = {
  westmount: '/secteurs/montreal/westmount',
  outremont: '/secteurs/montreal/outremont',
  'plateau-mont-royal': '/secteurs/montreal/plateau-mont-royal',
  'ville-marie': '/secteurs/montreal/ville-marie',
};

export default function LegacyTripleSegmentRedirect() {
  const { serviceSlug, param2, param3 } = useParams();

  // /services/:service/:scope/:city → city page (avoids service×city cannibalization)
  if (param3 && CITY_TO_SECTEUR[param3]) {
    return <Navigate to={CITY_TO_SECTEUR[param3]} replace />;
  }

  if (param3 && NEIGHBORHOOD_TO_SECTEUR[param3]) {
    return <Navigate to={NEIGHBORHOOD_TO_SECTEUR[param3]} replace />;
  }

  if (param2 === 'interieure' || param2 === 'exterieure') {
    return <Navigate to={`/services/${serviceSlug}`} replace />;
  }

  if (CITY_TO_SECTEUR[param2]) {
    return <Navigate to={CITY_TO_SECTEUR[param2]} replace />;
  }

  return <Navigate to="/services" replace />;
}
