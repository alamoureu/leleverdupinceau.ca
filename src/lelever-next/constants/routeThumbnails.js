/**
 * One source of truth: route path → card thumbnail (usually the page hero).
 * Used by InternalLinksSection so pages keep { title, description, to } only.
 */
import peintureInterieure from '../images/2-services/Page peinture intérieure/Photo header/Rolling_Door.jpeg';
import peintureExterieure from '../images/2-services/Page peinture extérieure/Photo header/IMG_0989.JPG';
import peintureResidentielle from '../images/2-services/Page peinture résidentielle/Photo header/IMG_7844.jpg';
import peintureCommerciale from '../images/2-services/Page peinture commerciale/1. réalisations/IMG_6760.PNG';
import peintureIndustrielle from '../images/L2 Services principaux/Photo page -peinture-industrielle/Peintre industrielle à Montréal, Le Lever du Pinceau a peinturé au spray ce plafond en steel deck à Montréal.jpg';
import teintureExterieure from '../images/L2 Services specialise/Photo page teinture/Header.PNG';
import preparationSurfaces from '../images/L2 Services specialise/Photo page -surfaces/header-wrapping.JPEG';
import reparationPlatre from '../images/L2 Services specialise/Photo page -surfaces/IMG_8099.jpg';
import peintureApresSinistre from '../images/L2 Services specialise/Photo page -après-sinitre/header.jpg';
import peintureAuPistolet from '../images/L2 Services specialise/Photo page -pistolet/header-spray-le-lever.png';
import armoiresCuisine from '../images/L3 Sous services/Photo page armoires de cuisine/header-IMG_1429.jpg';
import peintureCondo from '../images/L3 Sous services/Photo page -peinture condo/header.jpg';
import peintureAppartement from '../images/L3 Sous services/Photo page appartement/header.PNG';
// Distinct from condo header.jpg (old MTL intérieur header was a byte copy) and from
// réalisations IMG_5877 (same Griffintown loft scene as Griffintown après).
import peintureInterieureMontreal from '../images/L3 Services X Villes/Photo page -peinture-intérieure-montréal/Avant-après/plateau après.jpg';
import peintreProfessionnel from '../images/1-page-principale/service hub/Photo header/IMG_6771.PNG';
import secteurs from '../images/pillar-pages/secteur-hub/IMG_7894.jpg';
import realisations from '../images/3-ville/Montréal/5. réalisations/IMG_5877.JPG';

export const ROUTE_THUMBNAIL_BY_PATH = {
  '/services/peinture-interieure': peintureInterieure,
  '/services/peinture-exterieure': peintureExterieure,
  '/services/peinture-residentielle': peintureResidentielle,
  '/services/peinture-residentielle/maison': peintureResidentielle,
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
  '/secteurs/montreal': peintureInterieureMontreal,
  '/realisations': realisations,
};

export function thumbnailForRoute(path) {
  return ROUTE_THUMBNAIL_BY_PATH[path] || null;
}
