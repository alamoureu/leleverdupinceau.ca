import stlpLogo from '../images/stlp/logo.webp';
import stlpHero from '../images/stlp/hero.webp';
import stlpControl1 from '../images/stlp/control-1.webp?responsive=card';
import stlpControl2 from '../images/stlp/control-2.webp?responsive=card';
import stlpControl3 from '../images/stlp/control-3.webp?responsive=card';
import stlpMethod1 from '../images/stlp/method-1.webp?responsive=method';
import stlpMethod2 from '../images/stlp/method-2.webp?responsive=method';
import stlpMethod3 from '../images/stlp/method-3.webp?responsive=method';
import stlpMethod4 from '../images/stlp/method-4.webp?responsive=method';

export const STLP_LOGO = stlpLogo;
export const STLP_HERO = stlpHero;

export const STLP_CONTROL_IMAGES = [stlpControl1, stlpControl2, stlpControl3];

/** Crop focus for control cards - fills the card bg without letterbox gaps. */
export const STLP_CONTROL_IMAGE_POSITIONS = ['50% 55%', '50% 50%', '50% 45%'];

export const STLP_METHOD_IMAGES = [
  stlpMethod1,
  stlpMethod2,
  stlpMethod3,
  stlpMethod4,
];
