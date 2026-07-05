import stlpLogo from '../images/stlp/logo.png';
import stlpHero from '../images/stlp/hero.png';
import stlpControl1 from '../images/stlp/control-1.png';
import stlpControl2 from '../images/stlp/control-2.png';
import stlpControl3 from '../images/stlp/control-3.png';
import stlpMethod1 from '../images/stlp/method-1.jpg';
import stlpMethod2 from '../images/stlp/method-2.jpg';
import stlpMethod3 from '../images/stlp/method-3.jpg';
import stlpMethod4 from '../images/stlp/method-4.jpg';

import img5969 from '../images/before_after/IMG_5969.jpg';
import img5970 from '../images/before_after/IMG_5970.jpg';
import imgStaircaseBefore from '../images/IMG_7678.PNG';
import imgStaircaseAfter from '../images/IMG_5873.PNG';
import img5973 from '../images/before_after/IMG_5973.jpg';
import img5974 from '../images/before_after/IMG_5974.jpg';

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

/** First three before/after pairs shown on the STLP landing mockup. */
export const STLP_BEFORE_AFTER_PAIRS = [
  [img5969, img5970],
  [imgStaircaseBefore, imgStaircaseAfter],
  [img5973, img5974],
];

export const STLP_BEFORE_AFTER_DESCRIPTIONS = {
  fr: [
    'Salon – murs plâtre et peinture',
    'Cage d’escalier – réparation légère et peinture',
    'Terrasse en bois – teinture et protection',
  ],
  en: [
    'Living room – walls, plaster and paint',
    'Staircase – light repair and painting',
    'Wood deck – stain and protection',
  ],
};

export const STLP_LANDING_PATHS = ['/fr/stlp', '/en/stlp'];
