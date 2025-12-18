// Data for Peinture Intérieure × City × Neighborhood pages
// This file imports individual neighborhood data files and combines them

import { ahuntsicData } from './neighborhoods/ahuntsicData';
import { boisFrancData } from './neighborhoods/boisFrancData';
import { centreVilleData } from './neighborhoods/centreVilleData';
import { coteDesNeigesData } from './neighborhoods/coteDesNeigesData';
import { griffintownData } from './neighborhoods/griffintownData';
import { hochelagaData } from './neighborhoods/hochelagaData';
import { ileDesSoeursData } from './neighborhoods/ileDesSoeursData';
import { lachineData } from './neighborhoods/lachineData';
import { lasalleData } from './neighborhoods/lasalleData';
import { leVillageData } from './neighborhoods/leVillageData';
import { mileEndData } from './neighborhoods/mileEndData';
import { notreDameDeGraceData } from './neighborhoods/notreDameDeGraceData';
import { outremontData } from './neighborhoods/outremontData';
import { plateauMontRoyalData } from './neighborhoods/plateauMontRoyalData';
import { pointeSaintCharlesData } from './neighborhoods/pointeSaintCharlesData';
import { rosemontPetitePatrieData } from './neighborhoods/rosemontPetitePatrieData';
import { saintHenriData } from './neighborhoods/saintHenriData';
import { saintLeonardData } from './neighborhoods/saintLeonardData';
import { verdunData } from './neighborhoods/verdunData';
import { villeMontRoyalData } from './neighborhoods/villeMontRoyalData';
import { villeSaintLaurentData } from './neighborhoods/villeSaintLaurentData';
import { villerayData } from './neighborhoods/villerayData';
import { westmountData } from './neighborhoods/westmountData';

export const peintureInterieureSecteursData = {
  'new-peinture-interieure': {
    name: {
      fr: 'Peinture intérieure',
      en: 'Interior Painting',
    },
    cities: {
      montreal: {
        name: {
          fr: 'Montréal',
          en: 'Montreal',
        },
        neighborhoods: {
          ahuntsic: ahuntsicData,
          'bois-franc': boisFrancData,
          'centre-ville': centreVilleData,
          'cote-des-neiges': coteDesNeigesData,
          griffintown: griffintownData,
          hochelaga: hochelagaData,
          'ile-des-soeurs': ileDesSoeursData,
          lachine: lachineData,
          lasalle: lasalleData,
          'le-village': leVillageData,
          'mile-end': mileEndData,
          'notre-dame-de-grace': notreDameDeGraceData,
          outremont: outremontData,
          'plateau-mont-royal': plateauMontRoyalData,
          'pointe-saint-charles': pointeSaintCharlesData,
          'rosemont-petite-patrie': rosemontPetitePatrieData,
          'saint-henri': saintHenriData,
          'saint-leonard': saintLeonardData,
          verdun: verdunData,
          'ville-mont-royal': villeMontRoyalData,
          'ville-saint-laurent': villeSaintLaurentData,
          villeray: villerayData,
          westmount: westmountData,
        },
      },
    },
  },
};
