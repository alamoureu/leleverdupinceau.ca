import React from 'react';
import { Navigate, useParams } from 'react-router-dom';

/** Anciennes URLs /services/:service/:param2/:param3 (service × sous-service × ville ou × quartier). */
const CITY_TO_SECTEUR = {
  montreal: '/secteurs/montreal',
  laval: '/secteurs/laval',
  longueuil: '/secteurs/longueuil',
  brossard: '/secteurs/rive-sud',
};

export default function LegacyTripleSegmentRedirect() {
  const { serviceSlug, param2 } = useParams();

  if (param2 === 'interieure' || param2 === 'exterieure') {
    return <Navigate to={`/services/${serviceSlug}`} replace />;
  }

  if (CITY_TO_SECTEUR[param2]) {
    return <Navigate to={CITY_TO_SECTEUR[param2]} replace />;
  }

  return <Navigate to="/services" replace />;
}
