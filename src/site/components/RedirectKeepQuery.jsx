import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { updateLandingPageOnRedirect } from '../../utils/erpWebsiteWebhook';

/** Like <Navigate replace>, but keeps ?query (fbclid, gclid, utm_*) and #hash. */
export default function RedirectKeepQuery({ to }) {
  const { search, hash } = useLocation();
  const target = `${to}${search}${hash}`;

  if (typeof window !== 'undefined') {
    updateLandingPageOnRedirect(
      window.location.href,
      `${window.location.origin}${target}`
    );
  }

  return <Navigate to={target} replace />;
}
