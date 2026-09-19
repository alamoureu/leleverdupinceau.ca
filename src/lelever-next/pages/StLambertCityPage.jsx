import React from 'react';
import CitySectorPage from '../city-pages/CitySectorPage';
import { stLambertCityConfig } from '../city-pages/citySectorConfigs';

export default function StLambertCityPage() {
  return <CitySectorPage config={stLambertCityConfig} />;
}
