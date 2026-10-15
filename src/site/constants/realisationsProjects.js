import { AVIS_AVANT_APRES_PAIRS } from './avisAvantApres';
import { avisPhoto } from './avantApresById';

import monImg7924 from '../images/services-villes/peinture-interieure-montreal/avant-apres/Griffintown avant.webp';
import monImg7922 from '../images/villes/montreal/avant-apres/IMG_7922.webp';
import monImg7999 from '../images/sous-services/appartement/avant-apres/IMG_7999.webp';
import monImg7997 from '../images/sous-services/appartement/avant-apres/IMG_7997.webp';
import monImg7678 from '../images/sous-services/maison/avant-apres/IMG_7678.webp';
import monImg5873 from '../images/sous-services/maison/avant-apres/IMG_5873.webp';
import longImg7990 from '../images/services/apres-sinistre/avant-apres/IMG_7990.webp';
import longImg7988 from '../images/services/apres-sinistre/avant-apres/IMG_7988.webp';
import lavalImg7992 from '../images/sous-services/appartement/avant-apres/IMG_7992.webp';
import lavalImg7994 from '../images/sous-services/appartement/avant-apres/IMG_7994.webp';
import riveSudImg7975 from '../images/sous-services/appartement/avant-apres/IMG_7975.webp';
import riveSudImg7974 from '../images/sous-services/appartement/avant-apres/IMG_7974.webp';
import lavalImg5975 from '../images/sous-services/armoires/avant-apres/IMG_5975.webp';
import lavalImg5976 from '../images/sous-services/armoires/avant-apres/IMG_5976.webp';
import armoiresMileEndAvant from '../images/sous-services/armoires/avant-apres/IMG_8114.webp';
import armoiresMileEndApres from '../images/sous-services/armoires/avant-apres/IMG_8120.webp';

const SERVICE_META = {
  interieur: {
    serviceType: { fr: 'Intérieur', en: 'Interior' },
    serviceLink: '/services/peinture-interieure',
    serviceLinkLabel: { fr: 'Peinture intérieure', en: 'Interior painting' },
    tags: ['Intérieur', 'Résidentiel'],
  },
  exterieur: {
    serviceType: { fr: 'Extérieur', en: 'Exterior' },
    serviceLink: '/services/peinture-exterieure',
    serviceLinkLabel: { fr: 'Peinture extérieure', en: 'Exterior painting' },
    tags: ['Extérieur', 'Résidentiel'],
  },
  teinture: {
    serviceType: { fr: 'Extérieur', en: 'Exterior' },
    serviceLink: '/services/teinture-exterieure',
    serviceLinkLabel: { fr: 'Teinture extérieure', en: 'Exterior staining' },
    tags: ['Extérieur', 'Résidentiel'],
  },
};

function avisProjects(isFr) {
  return AVIS_AVANT_APRES_PAIRS.map((pair) => {
    const meta = SERVICE_META[pair.service];
    const title = isFr ? pair.fr : pair.en;
    const district = isFr ? 'Grand Montréal' : 'Greater Montreal';
    return {
      id: `avis-${pair.before}`,
      title,
      district,
      serviceType: isFr ? meta.serviceType.fr : meta.serviceType.en,
      projectType: isFr ? 'Résidentiel' : 'Residential',
      propertyType: isFr ? pair.propertyFr : pair.propertyEn,
      context: isFr
        ? `Projet résidentiel dans le Grand Montréal. Préparation soignée des surfaces, protection des zones adjacentes et finition adaptée au type de support.`
        : 'Residential project in Greater Montreal. Careful surface prep, protection of adjacent areas and a finish suited to the substrate.',
      result: isFr
        ? 'Transformation visible, finition propre et chantier remis en ordre à la livraison.'
        : 'Visible transformation, clean finish and a tidy site at handover.',
      serviceLink: meta.serviceLink,
      serviceLinkLabel: isFr ? meta.serviceLinkLabel.fr : meta.serviceLinkLabel.en,
      sectorLink: '/secteurs',
      sectorLinkLabel: isFr ? 'Nos secteurs desservis' : 'Our service areas',
      beforeImg: avisPhoto(pair.before),
      afterImg: avisPhoto(pair.after),
      beforeAlt: isFr ? `Avant - ${pair.fr}` : `Before - ${pair.en}`,
      afterAlt: isFr ? `Après - ${pair.fr}` : `After - ${pair.en}`,
      tags: meta.tags,
    };
  });
}

function featuredProjects(isFr) {
  return [
    {
      id: 'griffintown-condo',
      title: isFr
        ? "Peinture d'un condo nouvellement acheté à Griffintown"
        : 'Painting a newly purchased condo in Griffintown',
      district: isFr ? 'Griffintown, Montréal' : 'Griffintown, Montreal',
      serviceType: isFr ? 'Intérieur' : 'Interior',
      projectType: isFr ? 'Résidentiel' : 'Residential',
      propertyType: 'Condo',
      context: isFr
        ? 'Condo occupé avant emménagement complet. Projet réalisé par zones pour limiter les impacts sur les résidents. Accès par ascenseur, protection des planchers et boiseries.'
        : 'Condo occupied before full move-in. Project carried out in zones to limit impact. Elevator access, floor and trim protection.',
      result: isFr
        ? 'Finition nette sur murs et plafonds, couleurs choisies avec le client, chantier propre et délais respectés.'
        : 'Clean finish on walls and ceilings, colors chosen with the client, tidy job site and deadlines met.',
      serviceLink: '/services/peinture-interieure',
      serviceLinkLabel: isFr ? 'Peinture intérieure à Montréal' : 'Interior painting in Montreal',
      sectorLink: '/secteurs/montreal',
      sectorLinkLabel: isFr ? 'Nos services à Montréal' : 'Our services in Montreal',
      beforeImg: monImg7924,
      afterImg: monImg7922,
      beforeAlt: isFr
        ? 'Avant - Peinture intérieure condo Griffintown Montréal'
        : 'Before - Interior painting condo Griffintown Montreal',
      afterAlt: isFr
        ? 'Après - Peinture intérieure condo Griffintown Montréal'
        : 'After - Interior painting condo Griffintown Montreal',
      tags: ['Intérieur', 'Résidentiel', 'Condo'],
    },
    {
      id: 'plateau-appartement',
      title: isFr
        ? 'Rafraîchissement complet - Appartement au Plateau'
        : 'Full refresh - Apartment on the Plateau',
      district: isFr ? 'Plateau Mont-Royal, Montréal' : 'Plateau Mont-Royal, Montreal',
      serviceType: isFr ? 'Intérieur' : 'Interior',
      projectType: isFr ? 'Résidentiel' : 'Residential',
      propertyType: isFr ? 'Appartement' : 'Apartment',
      context: isFr
        ? "Appartement entre deux locataires. Remise à neuf avant relocation, accent sur la luminosité et la propreté des surfaces. Travaux coordonnés avec le propriétaire de l'immeuble."
        : 'Apartment between two tenants. Refreshed before re-leasing, focus on brightness and surface cleanliness. Work coordinated with building owner.',
      result: isFr
        ? 'Murs et plafonds rafraîchis, pièce transformée, prête pour les nouveaux locataires dans les délais convenus.'
        : 'Walls and ceilings refreshed, room transformed, ready for new tenants within agreed deadlines.',
      serviceLink: '/services/peinture-interieure',
      serviceLinkLabel: isFr ? 'Peinture intérieure' : 'Interior painting',
      sectorLink: '/secteurs/montreal',
      sectorLinkLabel: isFr ? 'Nos services à Montréal' : 'Our services in Montreal',
      beforeImg: monImg7999,
      afterImg: monImg7997,
      beforeAlt: isFr
        ? 'Avant - Peinture intérieure appartement Plateau Mont-Royal Montréal'
        : 'Before - Interior painting apartment Plateau Mont-Royal Montreal',
      afterAlt: isFr
        ? 'Après - Peinture intérieure appartement Plateau Mont-Royal Montréal'
        : 'After - Interior painting apartment Plateau Mont-Royal Montreal',
      tags: ['Intérieur', 'Résidentiel', 'Appartement'],
    },
    {
      id: 'westmount-escalier',
      title: isFr
        ? "Réparation et peinture d'une cage d'escalier après travaux au deuxième étage"
        : 'Repairing and painting a staircase after second-floor renovations',
      district: isFr ? 'Westmount, Montréal' : 'Westmount, Montreal',
      serviceType: isFr ? 'Intérieur' : 'Interior',
      projectType: isFr ? 'Résidentiel' : 'Residential',
      propertyType: isFr ? 'Maison' : 'House',
      context: isFr
        ? "Cage d'escalier avec surfaces endommagées et murs anciens. Circulation continue pendant les travaux. Réparation des trous de clous et préparation soignée avant la peinture d'une teinte plus pâle."
        : 'Staircase with damaged surfaces and older walls. Ongoing traffic during the work. Nail holes repaired and careful prep before painting in a lighter shade.',
      result: isFr
        ? "Surfaces réparées et uniformisées, finition propre sur toute la hauteur de la cage d'escalier."
        : 'Repaired and uniform surfaces, clean finish throughout the full height of the staircase.',
      serviceLink: '/services/peinture-residentielle',
      serviceLinkLabel: isFr ? 'Peinture résidentielle' : 'Residential painting',
      sectorLink: '/secteurs/montreal/westmount',
      sectorLinkLabel: isFr ? 'Nos services à Westmount' : 'Our services in Westmount',
      beforeImg: monImg7678,
      afterImg: monImg5873,
      beforeAlt: isFr
        ? "Avant - Réparation et peinture cage d'escalier maison Westmount"
        : 'Before - Repair and painting house staircase Westmount',
      afterAlt: isFr
        ? "Après - Réparation et peinture cage d'escalier maison Westmount"
        : 'After - Repair and painting house staircase Westmount',
      tags: ['Intérieur', 'Résidentiel', 'Maison'],
    },
    {
      id: 'laval-maison',
      title: isFr
        ? 'Peinture intérieure - Maison à Chomedey, Laval'
        : 'Interior painting - House in Chomedey, Laval',
      district: isFr ? 'Chomedey, Laval' : 'Chomedey, Laval',
      serviceType: isFr ? 'Intérieur' : 'Interior',
      projectType: isFr ? 'Résidentiel' : 'Residential',
      propertyType: isFr ? 'Maison' : 'House',
      context: isFr
        ? 'Maison unifamiliale à Laval, projet réalisé avant un déménagement. Préparation des surfaces, réparations mineures et peinture complète des pièces principales.'
        : 'Single-family home in Laval, project completed before a move. Surface preparation, minor repairs and full painting of main rooms.',
      result: isFr
        ? 'Pièces transformées, couleurs fraîches et uniformes, chantier propre livré dans les délais prévus.'
        : 'Rooms transformed, fresh and uniform colors, clean job site delivered on schedule.',
      serviceLink: '/services/peinture-residentielle',
      serviceLinkLabel: isFr ? 'Peinture résidentielle' : 'Residential painting',
      sectorLink: '/secteurs/laval',
      sectorLinkLabel: isFr ? 'Nos services à Laval' : 'Our services in Laval',
      beforeImg: lavalImg7992,
      afterImg: lavalImg7994,
      beforeAlt: isFr
        ? 'Avant - Peinture intérieure maison Chomedey Laval'
        : 'Before - Interior painting house Chomedey Laval',
      afterAlt: isFr
        ? 'Après - Peinture intérieure maison Chomedey Laval'
        : 'After - Interior painting house Chomedey Laval',
      tags: ['Intérieur', 'Résidentiel', 'Maison'],
    },
    {
      id: 'longueuil-maison',
      title: isFr
        ? 'Peinture résidentielle - Maison à Greenfield Park, Longueuil'
        : 'Residential painting - House in Greenfield Park, Longueuil',
      district: isFr ? 'Greenfield Park, Longueuil' : 'Greenfield Park, Longueuil',
      serviceType: isFr ? 'Intérieur' : 'Interior',
      projectType: isFr ? 'Résidentiel' : 'Residential',
      propertyType: isFr ? 'Maison' : 'House',
      context: isFr
        ? 'Maison à Greenfield Park, travaux réalisés pièce par pièce pendant que le propriétaire est sur place. Séquence planifiée pour limiter les impacts sur la vie quotidienne.'
        : 'House in Greenfield Park, work completed room by room while the owner was on site. Planned sequence to minimize impact on daily life.',
      result: isFr
        ? 'Intérieur entièrement rafraîchi, finition nette et propre, délais respectés sans perturbation du quotidien.'
        : 'Interior fully refreshed, clean finish, deadlines met without disrupting daily life.',
      serviceLink: '/services/peinture-residentielle',
      serviceLinkLabel: isFr ? 'Peinture résidentielle' : 'Residential painting',
      sectorLink: '/secteurs/longueuil',
      sectorLinkLabel: isFr ? 'Nos services à Longueuil' : 'Our services in Longueuil',
      beforeImg: longImg7990,
      afterImg: longImg7988,
      beforeAlt: isFr
        ? 'Avant - Peinture résidentielle maison Greenfield Park Longueuil'
        : 'Before - Residential painting house Greenfield Park Longueuil',
      afterAlt: isFr
        ? 'Après - Peinture résidentielle maison Greenfield Park Longueuil'
        : 'After - Residential painting house Greenfield Park Longueuil',
      tags: ['Intérieur', 'Résidentiel', 'Maison'],
    },
    {
      id: 'laval-armoires',
      title: isFr
        ? "Préparation et peinture d'armoires de cuisine en bois pour un look plus moderne"
        : 'Prepping and painting wood kitchen cabinets for a more modern look',
      district: 'Laval',
      serviceType: isFr ? 'Intérieur' : 'Interior',
      projectType: isFr ? 'Résidentiel' : 'Residential',
      propertyType: isFr ? 'Armoires de cuisine' : 'Kitchen cabinets',
      context: isFr
        ? "Nos clients avaient leurs armoires en bois massif depuis plus de 20 ans et souhaitaient leur donner un nouveau look sans payer pour de nouveaux caissons. Dégraissage, sablage, apprêt, puis application au pistolet d'un produit conçu pour les portes d'armoires."
        : 'Our clients had owned their solid wood cabinets for more than 20 years and wanted a new look without paying for new boxes. Degreasing, sanding, primer, then spray application of a product made specifically for cabinet doors.',
      result: isFr
        ? 'Un fini lisse, uniforme et durable, avec une apparence au goût du jour.'
        : 'A smooth, uniform and durable finish with an up-to-date look.',
      serviceLink: '/services/peinture-interieure/armoires-de-cuisine',
      serviceLinkLabel: isFr ? "Peinture d'armoires de cuisine" : 'Kitchen cabinet painting',
      sectorLink: '/secteurs/laval',
      sectorLinkLabel: isFr ? 'Nos services à Laval' : 'Our services in Laval',
      beforeImg: lavalImg5975,
      afterImg: lavalImg5976,
      beforeAlt: isFr
        ? 'Avant - Armoires de cuisine en bois massif, maison à Laval'
        : 'Before - Solid wood kitchen cabinets, house in Laval',
      afterAlt: isFr
        ? 'Après - Armoires de cuisine peintes en blanc au pistolet, maison à Laval'
        : 'After - Kitchen cabinets spray-painted white, house in Laval',
      tags: ['Intérieur', 'Résidentiel', 'Armoires de cuisine'],
    },
    {
      id: 'mile-end-armoires',
      title: isFr
        ? "Peinture d'armoires de cuisine - Mile-End, Montréal"
        : 'Kitchen cabinet painting - Mile-End, Montreal',
      district: isFr ? 'Mile-End, Montréal' : 'Mile-End, Montreal',
      serviceType: isFr ? 'Intérieur' : 'Interior',
      projectType: isFr ? 'Résidentiel' : 'Residential',
      propertyType: isFr ? 'Cuisine' : 'Kitchen',
      context: isFr
        ? "Cuisine ouverte avec armoires en bois chaud. Préparation complète des portes et façades, puis peinture au pistolet pour un fini uniforme sur l'îlot et les caissons périphériques."
        : 'Open kitchen with warm wood cabinets. Full prep of doors and faces, then spray painting for a uniform finish on the island and perimeter cabinets.',
      result: isFr
        ? "Armoires transformées en gris anthracite, contraste net avec le comptoir blanc et le dosseret de pierre."
        : 'Cabinets transformed to charcoal grey, clean contrast with the white countertop and stone backsplash.',
      serviceLink: '/services/peinture-interieure/armoires-de-cuisine',
      serviceLinkLabel: isFr ? "Peinture d'armoires de cuisine" : 'Kitchen cabinet painting',
      sectorLink: '/secteurs/montreal',
      sectorLinkLabel: isFr ? 'Nos services à Montréal' : 'Our services in Montreal',
      beforeImg: armoiresMileEndAvant,
      afterImg: armoiresMileEndApres,
      beforeAlt: isFr
        ? "Avant - Peinture d'armoires de cuisine Mile-End Montréal"
        : 'Before - Kitchen cabinet painting Mile-End Montreal',
      afterAlt: isFr
        ? "Après - Peinture d'armoires de cuisine gris anthracite Mile-End Montréal"
        : 'After - Charcoal kitchen cabinet painting Mile-End Montreal',
      tags: ['Intérieur', 'Résidentiel', 'Cuisine'],
    },
    {
      id: 'rive-sud-escalier',
      title: isFr
        ? 'Escalier spiral extérieur - Dérouillage et peinture'
        : 'Exterior spiral staircase - Rust removal and painting',
      district: isFr ? 'Rive-Sud' : 'South Shore',
      serviceType: isFr ? 'Extérieur' : 'Exterior',
      projectType: isFr ? 'Résidentiel' : 'Residential',
      propertyType: isFr ? 'Maison' : 'House',
      context: isFr
        ? 'Escalier en fer forgé rouillé, peinture écaillée sur toute la structure. Préparation antirouille, protection des surfaces adjacentes et peinture adaptée au métal extérieur.'
        : 'Rusted wrought-iron staircase with peeling paint throughout. Anti-rust prep, protection of adjacent surfaces and paint suited to exterior metal.',
      result: isFr
        ? 'Structure noire uniforme, sans rouille apparente, finition propre contrastant avec la brique.'
        : 'Uniform black structure, no visible rust, clean finish contrasting with the brick.',
      serviceLink: '/services/peinture-exterieure',
      serviceLinkLabel: isFr ? 'Peinture extérieure' : 'Exterior painting',
      sectorLink: '/secteurs',
      sectorLinkLabel: isFr ? 'Nos secteurs desservis' : 'Our service areas',
      beforeImg: riveSudImg7975,
      afterImg: riveSudImg7974,
      beforeAlt: isFr
        ? 'Avant - Escalier spiral rouillé peinture extérieure Rive-Sud'
        : 'Before - Rusted spiral staircase exterior painting South Shore',
      afterAlt: isFr
        ? 'Après - Escalier spiral noir peint Rive-Sud'
        : 'After - Black painted spiral staircase South Shore',
      tags: ['Extérieur', 'Résidentiel', 'Maison'],
    },
  ];
}

/** 28 projets : 8 dossiers documentés + 20 paires avis (sans doublons de scène). */
export function getRealisationsProjects(isFr) {
  return [...featuredProjects(isFr), ...avisProjects(isFr)];
}
