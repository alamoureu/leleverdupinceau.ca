/**
 * One source of truth: route path → card thumbnail (the page hero).
 * Used by InternalLinksSection, ServicesPage, city cards, etc.
 */
import peintureInterieure from '../images/villes/montreal/ville-marie/header.webp';
import peintureExterieure from '../images/services/exterieure/header/IMG_0989.webp';
import peintureResidentielle from '../images/landing/secteur-hub/IMG_7900.webp';
import peintureCommerciale from '../images/services/commerciale/realisations/IMG_6760.webp';
import peintureIndustrielle from '../images/services/industrielle/Peintre industrielle à Montréal, Le Lever du Pinceau a peinturé au spray ce plafond en steel deck à Montréal.webp';
import teintureExterieure from '../images/services/teinture/header.webp';
import preparationSurfaces from '../images/villes/rive-sud/header.webp';
import reparationPlatre from '../images/services/surfaces/IMG_8099.webp';
import peintureApresSinistre from '../images/services/apres-sinistre/header.webp';
import peintureAuPistolet from '../images/services/pistolet/header-spray-le-lever.webp';
import armoiresCuisine from '../images/sous-services/armoires/header-IMG_1429.webp';
import peintureMaison from '../images/sous-services/maison/header.webp';
import peintureCondo from '../images/villes/montreal/ville-marie/header.webp';
import peintureAppartement from '../images/sous-services/appartement/header.webp';
import peintreProfessionnel from '../images/services/hub/IMG_6771.webp';
import secteurs from '../images/landing/secteur-hub/IMG_7894.webp';
import realisations from '../images/villes/montreal/realisations/IMG_5877.webp';

export const ROUTE_THUMBNAIL_BY_PATH = {
  '/services/peinture-interieure': peintureInterieure,
  '/services/peinture-exterieure': peintureExterieure,
  '/services/peinture-residentielle': peintureResidentielle,
  '/services/peinture-residentielle/maison': peintureMaison,
  '/services/peinture-residentielle/condo': peintureCondo,
  '/services/peinture-residentielle/appartement': peintureAppartement,
  '/services/peinture-commerciale': peintureCommerciale,
  '/services/peinture-industrielle': peintureIndustrielle,
  '/services/teinture-exterieure': teintureExterieure,
  '/services/preparation-de-surfaces': preparationSurfaces,
  '/services/reparation-de-platre-et-gypse': reparationPlatre,
  '/services/peinture-apres-sinistre': peintureApresSinistre,
  '/services/peinture-au-pistolet': peintureAuPistolet,
  '/services/peinture-interieure/armoires-de-cuisine': armoiresCuisine,
  '/peintre-professionnel': peintreProfessionnel,
  '/secteurs': secteurs,
  '/secteurs/montreal': peintureInterieure,
  '/realisations': realisations,
};

export function thumbnailForRoute(path) {
  return ROUTE_THUMBNAIL_BY_PATH[path] || null;
}
