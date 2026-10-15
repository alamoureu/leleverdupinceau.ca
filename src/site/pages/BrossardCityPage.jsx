import React from 'react';
import CitySectorPage from '../city-pages/CitySectorPage';
import { brossardCityConfig } from '../city-pages/citySectorConfigs';

export default function BrossardCityPage() {
  return <CitySectorPage config={brossardCityConfig} />;
}
