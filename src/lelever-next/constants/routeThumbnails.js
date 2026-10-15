/**
 * One source of truth: route path → card thumbnail (the page hero).
 * Used by InternalLinksSection, ServicesPage, city cards, etc.
 */
import peintureInterieure from '../images/L3 Services X Villes/Photo page -peinture-intérieure-montréal/header.webp';
import peintureExterieure from '../images/2-services/Page peinture extérieure/Photo header/IMG_0989.webp';
import peintureResidentielle from '../images/2-services/Page peinture résidentielle/Photo header/IMG_7844.webp';
import peintureCommerciale from '../images/2-services/Page peinture commerciale/1. réalisations/IMG_6760.webp';
import peintureIndustrielle from '../images/L2 Services principaux/Photo page -peinture-industrielle/Peintre industrielle à Montréal, Le Lever du Pinceau a peinturé au spray ce plafond en steel deck à Montréal.webp';
import teintureExterieure from '../images/L2 Services specialise/Photo page teinture/Header.webp';
import preparationSurfaces from '../images/L2 Services specialise/Photo page -surfaces/header-wrapping.webp';
import reparationPlatre from '../images/L2 Services specialise/Photo page -surfaces/IMG_8099.webp';
import peintureApresSinistre from '../images/L2 Services specialise/Photo page -après-sinitre/header.webp';
import peintureAuPistolet from '../images/L2 Services specialise/Photo page -pistolet/header-spray-le-lever.webp';
import armoiresCuisine from '../images/L3 Sous services/Photo page armoires de cuisine/header-IMG_1429.webp';
import peintureMaison from '../images/L3 Sous services/Photo page -peinture maison/header.webp';
import peintureCondo from '../images/L3 Sous services/Photo page -peinture condo/header.webp';
import peintureAppartement from '../images/L3 Sous services/Photo page appartement/header.webp';
import peintreProfessionnel from '../images/1-page-principale/service hub/Photo header/IMG_6771.webp';
import secteurs from '../images/pillar-pages/secteur-hub/IMG_7894.webp';
import realisations from '../images/3-ville/Montréal/5. réalisations/IMG_5877.webp';

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
