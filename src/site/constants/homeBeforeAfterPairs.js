/**
 * Source unique des paires avant/après de l'accueil (et réalisations).
 * La landing ads garde ses 6 paires via buildLandingPagePairs dans BeforeAfterCarouselSection.
 */
import { AVIS_AVANT_APRES_PAIRS } from './avisAvantApres';
import { avisPhoto } from './avantApresById';

import img7922 from '../images/villes/montreal/avant-apres/IMG_7922.webp';
import img7924 from '../images/home/avant-apres/IMG_7924.webp';
import img7971 from '../images/home/avant-apres/IMG_7971.webp';
import img7974 from '../images/sous-services/appartement/avant-apres/IMG_7974.webp';
import img7975 from '../images/sous-services/appartement/avant-apres/IMG_7975.webp';
import img7985 from '../images/home/avant-apres/IMG_7985.webp';
import img7988 from '../images/services/apres-sinistre/avant-apres/IMG_7988.webp';
import img7990 from '../images/services/apres-sinistre/avant-apres/IMG_7990.webp';
import img7992 from '../images/sous-services/appartement/avant-apres/IMG_7992.webp';
import img7994 from '../images/sous-services/appartement/avant-apres/IMG_7994.webp';
import img7997 from '../images/sous-services/appartement/avant-apres/IMG_7997.webp';
import img7999 from '../images/sous-services/appartement/avant-apres/IMG_7999.webp';
import img6755 from '../images/home/avant-apres/IMG_6755.webp';
import img6757 from '../images/home/avant-apres/IMG_6757.webp';

import img5969 from '../images/home/avant-apres/IMG_5969.webp';
import img5970 from '../images/home/avant-apres/IMG_5970.webp';
import img5973 from '../images/services/teinture/avant-apres/IMG_5973.webp';
import img5974 from '../images/services/teinture/avant-apres/IMG_5974.webp';
import img5975 from '../images/sous-services/armoires/avant-apres/IMG_5975.webp';
import img5976 from '../images/sous-services/armoires/avant-apres/IMG_5976.webp';
import img5977 from '../images/services/pistolet/avant-apres/IMG_5977.webp';
import img5978 from '../images/services/pistolet/avant-apres/IMG_5978.webp';
import img5982 from '../images/sous-services/appartement/avant-apres/IMG_5982.webp';
import img5984 from '../images/sous-services/appartement/avant-apres/IMG_5984.webp';
import imgStaircaseBefore from '../images/sous-services/maison/avant-apres/IMG_7678.webp';
import imgStaircaseAfter from '../images/sous-services/maison/avant-apres/IMG_5873.webp';
import home0855 from '../images/villes/brossard/avant-apres/IMG_0855.webp';
import home0856 from '../images/villes/brossard/avant-apres/IMG_0856.webp';
import home0861 from '../images/villes/laprairie/avant-apres/IMG_0861.webp';
import home0862 from '../images/villes/laprairie/avant-apres/IMG_0862.webp';
import home0842 from '../images/villes/st-lambert/avant-apres/IMG_0842.webp';
import home0843 from '../images/villes/st-lambert/avant-apres/IMG_0843.webp';
import armoiresMileEndAvant from '../images/sous-services/armoires/avant-apres/IMG_8114.webp';
import armoiresMileEndApres from '../images/sous-services/armoires/avant-apres/IMG_8120.webp';

/** IDs avis déjà couverts par CURATED_PAIRS (éviter les doublons). */
export const CURATED_AVIS_IDS = new Set(['0855', '0861', '0842']);

/**
 * Dedupes by image URL: neither before nor after may repeat in the same list.
 */
export function dedupeBeforeAfterPairs(pairs) {
  const seen = new Set();
  const out = [];
  let dropped = 0;
  for (const pair of pairs) {
    if (!pair?.before || !pair?.after) {
      dropped += 1;
      continue;
    }
    if (seen.has(pair.before) || seen.has(pair.after)) {
      dropped += 1;
      continue;
    }
    seen.add(pair.before);
    seen.add(pair.after);
    out.push(pair);
  }
  if (dropped > 0 && typeof console !== 'undefined') {
    console.warn(
      `[BeforeAfter] dropped ${dropped} pair(s) with missing or duplicate images`,
    );
  }
  return out;
}

export const CURATED_PAIRS = [
  [img5969, img5970, { fr: 'Salon - murs plâtre et peinture', en: 'Living room - walls, plaster and paint' }],
  [imgStaircaseBefore, imgStaircaseAfter, { fr: 'Cage d\'escalier - réparation légère et peinture', en: 'Staircase - light repair and painting' }],
  [img5973, img5974, { fr: 'Terrasse en bois - teinture et protection', en: 'Wood deck - stain and protection' }],
  [img5975, img5976, { fr: 'Cuisine - armoires peintes en blanc', en: 'Kitchen - cabinets painted white' }],
  [img5977, img5978, { fr: 'Espace industriel - plafond steel deck et murs peints', en: 'Industrial space - steel deck ceiling and walls painted' }],
  [img5984, img5982, { fr: 'Maison - murs rafraîchis (protection et peinture)', en: 'House - walls refreshed (protection and painting)' }],
  [img7924, img7922, { fr: 'Salon - peinture murale', en: 'Living room - wall painting' }],
  [img7975, img7974, { fr: 'Escalier extérieur - décapage et peinture', en: 'Outdoor staircase - stripping and painting' }],
  [img7990, img7988, { fr: 'Sous-sol - dégâts d\'eau et rafraîchissement', en: 'Basement - water damage and refresh' }],
  [img7992, img7994, { fr: 'Cuisine - réparation et finition', en: 'Kitchen - repair and finish' }],
  [img7999, img7997, { fr: 'Murs et boiseries - finition propre', en: 'Walls and trim - clean finish' }],
  [img7971, img6755, { fr: 'Maison - extérieur rafraîchi', en: 'Home - refreshed exterior' }],
  [img7985, img6757, { fr: 'Espace industriel - préparation et peinture', en: 'Industrial space - prep and painting' }],
  [home0855, home0856, { fr: "Hall d'entrée - murs et boiseries rafraîchis", en: 'Entrance hall - walls and trim refreshed' }],
  [home0861, home0862, { fr: 'Plinthe - réparation et peinture', en: 'Baseboard - repair and paint' }],
  [home0842, home0843, { fr: 'Chambre - papier peint retiré et murs repeints', en: 'Bedroom - wallpaper removed and walls repainted' }],
];

export const EXTRA_FEATURED = [
  [
    armoiresMileEndAvant,
    armoiresMileEndApres,
    {
      fr: 'Cuisine - armoires peintes (Mile-End)',
      en: 'Kitchen - cabinets painted (Mile-End)',
    },
  ],
];

/** Toutes les paires affichées sur l'accueil (34 sans doublon). */
export function buildDefaultImages(isFr) {
  const curated = CURATED_PAIRS.map(([before, after, labels]) => ({
    before,
    after,
    description: isFr ? labels.fr : labels.en,
    labels,
  }));

  const fromAvis = AVIS_AVANT_APRES_PAIRS.filter(
    (pair) => !CURATED_AVIS_IDS.has(pair.before),
  ).map((pair) => ({
    before: avisPhoto(pair.before),
    after: avisPhoto(pair.after),
    description: isFr ? pair.fr : pair.en,
    labels: { fr: pair.fr, en: pair.en },
  }));

  const featured = EXTRA_FEATURED.map(([before, after, labels]) => ({
    before,
    after,
    description: isFr ? labels.fr : labels.en,
    labels,
  }));

  return dedupeBeforeAfterPairs([...curated, ...fromAvis, ...featured]);
}

/** Assets partagés pour buildLandingPagePairs (6 paires landing). */
export const LANDING_PAIR_ASSETS = {
  img7924,
  img7922,
  img7975,
  img7974,
  img7990,
  img7988,
  imgStaircaseBefore,
  imgStaircaseAfter,
  img7999,
  img7997,
  img7971,
  img6755,
};
