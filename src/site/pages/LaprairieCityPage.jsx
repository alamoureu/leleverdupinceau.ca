import React from 'react';
import CitySectorPage from '../city-pages/CitySectorPage';
import { laprairieCityConfig } from '../city-pages/citySectorConfigs';

export default function LaprairieCityPage() {
  return <CitySectorPage config={laprairieCityConfig} />;
}
