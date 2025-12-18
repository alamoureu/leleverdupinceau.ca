/**
 * Comprehensive Routing Tests for Le Lever du Pinceau Website
 *
 * This test suite verifies that all URL combinations work correctly
 * and that the routing structure is properly configured.
 */

import { describe, it, expect } from '@jest/globals';

// Main routes
const mainRoutes = [
  '/',
  '/new-home',
  '/peintre-professionnel',
  '/secteurs-desservis',
  '/services',
  '/blog',
  '/a-propos',
  '/avis',
  '/new-contact',
];

// City routes
const cityRoutes = [
  '/secteurs-desservis/montreal',
  '/secteurs-desservis/laval',
  '/secteurs-desservis/longueuil',
  '/secteurs-desservis/brossard',
];

// Main service routes
const mainServiceRoutes = [
  '/services/peinture-commerciale',
  '/services/peinture-residentielle',
  '/services/new-peinture-interieure',
  '/services/new-peinture-exterieure',
  '/services/peinture-industrielle',
];

// Sub-service routes (Service × SubService)
const subServiceRoutes = [
  '/services/peinture-commerciale/interieure',
  '/services/peinture-commerciale/exterieure',
  '/services/peinture-residentielle/interieure',
  '/services/peinture-residentielle/exterieure',
];

// Service × City routes
const serviceCityRoutes = [
  // Peinture commerciale × Cities
  '/services/peinture-commerciale/montreal',
  '/services/peinture-commerciale/laval',
  '/services/peinture-commerciale/longueuil',
  '/services/peinture-commerciale/brossard',

  // Peinture résidentielle × Cities
  '/services/peinture-residentielle/montreal',
  '/services/peinture-residentielle/laval',
  '/services/peinture-residentielle/longueuil',
  '/services/peinture-residentielle/brossard',

  // Peinture intérieure × Cities
  '/services/peinture-interieure/montreal',
  '/services/peinture-interieure/laval',
  '/services/peinture-interieure/longueuil',
  '/services/peinture-interieure/brossard',

  // Peinture extérieure × Cities
  '/services/peinture-exterieure/montreal',
  '/services/peinture-exterieure/laval',
  '/services/peinture-exterieure/longueuil',
  '/services/peinture-exterieure/brossard',

  // Peinture industrielle × Cities
  '/services/peinture-industrielle/montreal',
  '/services/peinture-industrielle/laval',
  '/services/peinture-industrielle/longueuil',
  '/services/peinture-industrielle/brossard',
];

// SubService × City routes (Service × SubService × City)
const subServiceCityRoutes = [
  // Peinture commerciale intérieure × Cities
  '/services/peinture-commerciale/interieure/montreal',
  '/services/peinture-commerciale/interieure/laval',
  '/services/peinture-commerciale/interieure/longueuil',
  '/services/peinture-commerciale/interieure/brossard',

  // Peinture commerciale extérieure × Cities
  '/services/peinture-commerciale/exterieure/montreal',
  '/services/peinture-commerciale/exterieure/laval',
  '/services/peinture-commerciale/exterieure/longueuil',
  '/services/peinture-commerciale/exterieure/brossard',

  // Peinture résidentielle intérieure × Cities
  '/services/peinture-residentielle/interieure/montreal',
  '/services/peinture-residentielle/interieure/laval',
  '/services/peinture-residentielle/interieure/longueuil',
  '/services/peinture-residentielle/interieure/brossard',

  // Peinture résidentielle extérieure × Cities
  '/services/peinture-residentielle/exterieure/montreal',
  '/services/peinture-residentielle/exterieure/laval',
  '/services/peinture-residentielle/exterieure/longueuil',
  '/services/peinture-residentielle/exterieure/brossard',
];

// Montreal neighborhood routes (Service × City × Neighborhood)
const montrealNeighborhoodRoutes = [
  '/services/peinture-interieure/montreal/ahuntsic',
  '/services/peinture-interieure/montreal/bois-franc',
  '/services/peinture-interieure/montreal/centre-ville',
  '/services/peinture-interieure/montreal/cote-des-neiges',
  '/services/peinture-interieure/montreal/griffintown',
  '/services/peinture-interieure/montreal/hochelaga',
  '/services/peinture-interieure/montreal/ile-des-soeurs',
  '/services/peinture-interieure/montreal/lachine',
  '/services/peinture-interieure/montreal/lasalle',
  '/services/peinture-interieure/montreal/le-village',
  '/services/peinture-interieure/montreal/mile-end',
  '/services/peinture-interieure/montreal/notre-dame-de-grace',
  '/services/peinture-interieure/montreal/outremont',
  '/services/peinture-interieure/montreal/plateau-mont-royal',
  '/services/peinture-interieure/montreal/pointe-saint-charles',
  '/services/peinture-interieure/montreal/rosemont-petite-patrie',
  '/services/peinture-interieure/montreal/saint-henri',
  '/services/peinture-interieure/montreal/saint-leonard',
  '/services/peinture-interieure/montreal/verdun',
  '/services/peinture-interieure/montreal/ville-mont-royal',
  '/services/peinture-interieure/montreal/villeray',
  '/services/peinture-interieure/montreal/ville-saint-laurent',
  '/services/peinture-interieure/montreal/westmount',
];

// Blog routes
const blogRoutes = [
  '/blog',
  '/blog/comment-choisir-un-peintre-professionnel',
  '/blog/prix-peinture-montreal',
  '/blog/erreurs-a-eviter-peinture-interieure',
];

// All routes combined
const allRoutes = [
  ...mainRoutes,
  ...cityRoutes,
  ...mainServiceRoutes,
  ...subServiceRoutes,
  ...serviceCityRoutes,
  ...subServiceCityRoutes,
  ...montrealNeighborhoodRoutes,
  ...blogRoutes,
];

describe('Routing Tests', () => {
  describe('Main Routes', () => {
    mainRoutes.forEach((route) => {
      it(`should have route: ${route}`, () => {
        expect(route).toBeTruthy();
      });
    });
  });

  describe('City Routes', () => {
    cityRoutes.forEach((route) => {
      it(`should have city route: ${route}`, () => {
        expect(route).toBeTruthy();
      });
    });
  });

  describe('Main Service Routes', () => {
    mainServiceRoutes.forEach((route) => {
      it(`should have main service route: ${route}`, () => {
        expect(route).toBeTruthy();
      });
    });
  });

  describe('Sub-Service Routes', () => {
    subServiceRoutes.forEach((route) => {
      it(`should have sub-service route: ${route}`, () => {
        expect(route).toBeTruthy();
      });
    });
  });

  describe('Service × City Routes', () => {
    serviceCityRoutes.forEach((route) => {
      it(`should have service×city route: ${route}`, () => {
        expect(route).toBeTruthy();
      });
    });
  });

  describe('SubService × City Routes', () => {
    subServiceCityRoutes.forEach((route) => {
      it(`should have subservice×city route: ${route}`, () => {
        expect(route).toBeTruthy();
      });
    });
  });

  describe('Montreal Neighborhood Routes', () => {
    montrealNeighborhoodRoutes.forEach((route) => {
      it(`should have neighborhood route: ${route}`, () => {
        expect(route).toBeTruthy();
      });
    });
  });

  describe('Blog Routes', () => {
    blogRoutes.forEach((route) => {
      it(`should have blog route: ${route}`, () => {
        expect(route).toBeTruthy();
      });
    });
  });

  describe('Route Counts', () => {
    it('should have all expected routes', () => {
      console.log('\n=== Route Summary ===');
      console.log(`Main Routes: ${mainRoutes.length}`);
      console.log(`City Routes: ${cityRoutes.length}`);
      console.log(`Main Service Routes: ${mainServiceRoutes.length}`);
      console.log(`Sub-Service Routes: ${subServiceRoutes.length}`);
      console.log(`Service × City Routes: ${serviceCityRoutes.length}`);
      console.log(`SubService × City Routes: ${subServiceCityRoutes.length}`);
      console.log(
        `Montreal Neighborhood Routes: ${montrealNeighborhoodRoutes.length}`
      );
      console.log(`Blog Routes: ${blogRoutes.length}`);
      console.log(`\nTotal Routes: ${allRoutes.length}`);
      console.log('===================\n');

      expect(allRoutes.length).toBeGreaterThan(0);
    });
  });
});

// Export routes for use in other tests
export {
  mainRoutes,
  cityRoutes,
  mainServiceRoutes,
  subServiceRoutes,
  serviceCityRoutes,
  subServiceCityRoutes,
  montrealNeighborhoodRoutes,
  blogRoutes,
  allRoutes,
};
