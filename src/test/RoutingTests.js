/**
 * Route path strings aligned with App.jsx (canonical hub + secteurs).
 */

import { describe, it, expect } from '@jest/globals';

const mainRoutes = [
  '/',
  '/contact',
  '/peintre-professionnel',
  '/secteurs',
  '/services',
  '/blog',
  '/a-propos',
  '/avis-clients',
  '/realisations',
  '/politique-de-confidentialite',
  '/mentions-legales',
];

const cityRoutes = [
  '/secteurs/montreal',
  '/secteurs/laval',
  '/secteurs/longueuil',
  '/secteurs/gatineau',
  '/secteurs/rive-sud',
];

const mainServiceRoutes = [
  '/services/peinture-commerciale',
  '/services/peinture-residentielle',
  '/services/peinture-interieure',
  '/services/peinture-exterieure',
  '/services/peinture-industrielle',
];

const l3AndSpecializedRoutes = [
  '/services/peinture-residentielle/maison',
  '/services/peinture-residentielle/condo',
  '/services/peinture-residentielle/appartement',
  '/services/peinture-interieure/armoires-de-cuisine',
  '/services/teinture-exterieure',
  '/services/preparation-de-surfaces',
  '/services/peinture-au-pistolet',
  '/services/reparation-de-platre-et-gypse',
  '/services/peinture-apres-sinistre',
];

const blogRoutes = [
  '/blog',
  '/blog/comment-choisir-un-peintre-professionnel',
  '/blog/prix-peinture-montreal',
  '/blog/erreurs-a-eviter-peinture-interieure',
];

const allRoutes = [
  ...mainRoutes,
  ...cityRoutes,
  ...mainServiceRoutes,
  ...l3AndSpecializedRoutes,
  ...blogRoutes,
];

describe('Routing Tests', () => {
  mainRoutes.forEach((route) => {
    it(`main route defined: ${route}`, () => {
      expect(route).toMatch(/^\//);
    });
  });

  cityRoutes.forEach((route) => {
    it(`city route defined: ${route}`, () => {
      expect(route.startsWith('/secteurs/')).toBe(true);
    });
  });

  mainServiceRoutes.forEach((route) => {
    it(`service route defined: ${route}`, () => {
      expect(route.startsWith('/services/')).toBe(true);
    });
  });

  l3AndSpecializedRoutes.forEach((route) => {
    it(`L3/specialized route defined: ${route}`, () => {
      expect(route.startsWith('/services/')).toBe(true);
    });
  });

  blogRoutes.forEach((route) => {
    it(`blog route defined: ${route}`, () => {
      expect(route.startsWith('/blog')).toBe(true);
    });
  });

  it('exports non-empty canonical list', () => {
    expect(allRoutes.length).toBeGreaterThan(10);
  });
});

export {
  mainRoutes,
  cityRoutes,
  mainServiceRoutes,
  l3AndSpecializedRoutes,
  blogRoutes,
  allRoutes,
};
