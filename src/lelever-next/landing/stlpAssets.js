import stlpLogo from '../images/stlp/logo.png';
import stlpHero from '../images/stlp/hero.png';
import stlpControl1 from '../images/stlp/control-1.png';
import stlpControl2 from '../images/stlp/control-2.png';
import stlpControl3 from '../images/stlp/control-3.png';
import stlpMethod1 from '../images/stlp/method-1.jpg';
import stlpMethod2 from '../images/stlp/method-2.jpg';
import stlpMethod3 from '../images/stlp/method-3.jpg';
import stlpMethod4 from '../images/stlp/method-4.jpg';

import img7922 from '../images/Avant après landing Page/Copie de IMG_7922.jpg';
import img7924 from '../images/Avant après landing Page/Copie de IMG_7924.jpg';
import img7971 from '../images/Avant après landing Page/Copie de IMG_7971.jpg';
import img7974 from '../images/Avant après landing Page/Copie de IMG_7974.jpg';
import img7975 from '../images/Avant après landing Page/Copie de IMG_7975.jpg';
import img7985 from '../images/Avant après landing Page/Copie de IMG_7985.jpg';
import img7988 from '../images/Avant après landing Page/Copie de IMG_7988.jpg';
import img7990 from '../images/Avant après landing Page/Copie de IMG_7990.jpg';
import img7992 from '../images/Avant après landing Page/Copie de IMG_7992.jpg';
import img7994 from '../images/Avant après landing Page/Copie de IMG_7994.jpg';
import img7997 from '../images/Avant après landing Page/Copie de IMG_7997 2.jpg';
import img7999 from '../images/Avant après landing Page/Copie de IMG_7999 2.jpg';
import img6755 from '../images/Avant après landing Page/Copie de IMG_6755.jpg';
import img6757 from '../images/Avant après landing Page/Copie de IMG_6757.jpg';

import img5969 from '../images/before_after/IMG_5969.jpg';
import img5970 from '../images/before_after/IMG_5970.jpg';
import img5973 from '../images/before_after/IMG_5973.jpg';
import img5974 from '../images/before_after/IMG_5974.jpg';
import img5975 from '../images/before_after/IMG_5975.jpg';
import img5976 from '../images/before_after/IMG_5976.jpg';
import img5977 from '../images/before_after/IMG_5977.jpg';
import img5978 from '../images/before_after/IMG_5978.jpg';
import img5982 from '../images/before_after/IMG_5982.jpg';
import img5984 from '../images/before_after/IMG_5984.jpg';
import imgStaircaseBefore from '../images/IMG_7678.PNG';
import imgStaircaseAfter from '../images/IMG_5873.PNG';

export const STLP_LOGO = stlpLogo;
export const STLP_HERO = stlpHero;

export const STLP_CONTROL_IMAGES = [stlpControl1, stlpControl2, stlpControl3];

/** Crop focus for control cards — fills the card bg without letterbox gaps. */
export const STLP_CONTROL_IMAGE_POSITIONS = [
  '50% 55%',
  '50% 50%',
  '50% 45%',
];

export const STLP_METHOD_IMAGES = [
  stlpMethod1,
  stlpMethod2,
  stlpMethod3,
  stlpMethod4,
];

/** Full before/after set for the STLP landing (same pool as the Montreal landing carousel). */
export const STLP_BEFORE_AFTER_PAIRS = [
  [img5969, img5970],
  [imgStaircaseBefore, imgStaircaseAfter],
  [img5973, img5974],
  [img5975, img5976],
  [img5977, img5978],
  [img5984, img5982],
  [img7924, img7922],
  [img7975, img7974],
  [img7990, img7988],
  [img7992, img7994],
  [img7999, img7997],
  [img7971, img6755],
  [img7985, img6757],
];

export const STLP_BEFORE_AFTER_DESCRIPTIONS = {
  fr: [
    'Salon – murs plâtre et peinture',
    'Cage d’escalier – réparation légère et peinture',
    'Terrasse en bois – teinture et protection',
    'Cuisine – armoires peintes en blanc',
    'Espace industriel – plafond steel deck et murs peints',
    'Maison – murs rafraîchis (protection et peinture)',
    'Salon – peinture murale (avant / après)',
    'Escalier extérieur – décapage et peinture',
    'Sous-sol – dégâts d’eau et rafraîchissement',
    'Cuisine – réparation et finition',
    'Murs et boiseries – finition propre',
    'Maison – extérieur rafraîchi',
    'Espace industriel – préparation et peinture',
  ],
  en: [
    'Living room – walls, plaster and paint',
    'Staircase – light repair and painting',
    'Wood deck – stain and protection',
    'Kitchen – cabinets painted white',
    'Industrial space – steel deck ceiling and walls painted',
    'House – walls refreshed (protection and painting)',
    'Living room – wall painting (before / after)',
    'Outdoor staircase – stripping and painting',
    'Basement – water damage and refresh',
    'Kitchen – repair and finish',
    'Walls and trim – clean finish',
    'Home – refreshed exterior',
    'Industrial space – prep and painting',
  ],
};

export const STLP_LANDING_PATHS = [
  '/fr/stlp-peinture-inc',
  '/en/stlp-peinture-inc',
];
