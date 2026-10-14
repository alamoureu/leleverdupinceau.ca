import headerBrossard from '../images/3-ville/brossard/+Header/IMG_1414.webp';
import headerRiveSud from '../images/3-ville/rive-sud/header (1).webp';

import brossard0822 from '../images/3-ville/brossard/avant-apres/IMG_0822.webp';
import brossard0823 from '../images/3-ville/brossard/avant-apres/IMG_0823.webp';
import brossard0826 from '../images/3-ville/brossard/avant-apres/IMG_0826.webp';
import brossard0827 from '../images/3-ville/brossard/avant-apres/IMG_0827.webp';
import brossard0832 from '../images/3-ville/brossard/avant-apres/IMG_0832.webp';
import brossard0833 from '../images/3-ville/brossard/avant-apres/IMG_0833.webp';
import brossard0838 from '../images/3-ville/brossard/avant-apres/IMG_0838.webp';
import brossard0839 from '../images/3-ville/brossard/avant-apres/IMG_0839.webp';

import stLambert0836 from '../images/3-ville/st-lambert/avant-apres/IMG_0836.webp';
import stLambert0837 from '../images/3-ville/st-lambert/avant-apres/IMG_0837.webp';
import stLambert0842 from '../images/3-ville/st-lambert/avant-apres/IMG_0842.webp';
import stLambert0843 from '../images/3-ville/st-lambert/avant-apres/IMG_0843.webp';
import stLambert0859 from '../images/3-ville/st-lambert/avant-apres/IMG_0859.webp';
import stLambert0860 from '../images/3-ville/st-lambert/avant-apres/IMG_0860.webp';
import stLambert0846 from '../images/3-ville/brossard/avant-apres/IMG_0846.webp';
import stLambert0847 from '../images/3-ville/brossard/avant-apres/IMG_0847.webp';
import stLambert0855 from '../images/3-ville/brossard/avant-apres/IMG_0855.webp';
import stLambert0856 from '../images/3-ville/brossard/avant-apres/IMG_0856.webp';
import stLambert5975 from '../images/3-ville/laval/avant-apres/IMG_5975 4.webp';
import stLambert5976 from '../images/3-ville/laval/avant-apres/IMG_5976 5.webp';
import stLambert6031 from '../images/3-ville/longueuil/avant-apres/IMG_6031 4.webp';
import stLambert8108 from '../images/3-ville/longueuil/avant-apres/IMG_8108 4.webp';
import laprairie0818 from '../images/3-ville/Montréal/avant-apres/IMG_0818.webp';
import laprairie0819 from '../images/3-ville/Montréal/avant-apres/IMG_0819.webp';

import laprairie0852 from '../images/3-ville/laprairie/avant-apres/IMG_0852.webp';
import laprairie0853 from '../images/3-ville/laprairie/avant-apres/IMG_0853.webp';
import laprairie0861 from '../images/3-ville/laprairie/avant-apres/IMG_0861.webp';
import laprairie0862 from '../images/3-ville/laprairie/avant-apres/IMG_0862.webp';

import interieureHeroImg from '../images/2-services/Page peinture intérieure/Photo header/Rolling_Door.webp';
import exterieureHeroImg from '../images/2-services/Page peinture extérieure/Photo header/IMG_0989.webp';
import residentielleHeroImg from '../images/2-services/Page peinture résidentielle/Photo header/IMG_7844.webp';
import commercialeHeroImg from '../images/2-services/Page peinture commerciale/1. réalisations/IMG_6760.webp';
import platreHeroImg from '../images/L2 Services specialise/Photo page -plâtre/header _plaster.webp';

function baseInternalLinks(cityLabelFr, cityLabelEn, siblingLinks = []) {
  return [
    {
      label: { fr: 'Peinture résidentielle', en: 'Residential painting' },
      to: '/services/peinture-residentielle',
    },
    {
      label: { fr: 'Peinture intérieure', en: 'Interior painting' },
      to: '/services/peinture-interieure',
    },
    {
      label: { fr: 'Peinture extérieure', en: 'Exterior painting' },
      to: '/services/peinture-exterieure',
    },
    {
      label: { fr: 'Peinture commerciale', en: 'Commercial painting' },
      to: '/services/peinture-commerciale',
    },
    {
      label: { fr: 'Réparation de plâtre et gypse', en: 'Plaster and drywall repair' },
      to: '/services/reparation-de-platre-et-gypse',
    },
    { label: { fr: 'Voir nos réalisations', en: 'View our projects' }, to: '/realisations' },
    {
      label: { fr: `Maison unifamiliale à ${cityLabelFr}`, en: `Single-family home in ${cityLabelEn}` },
      to: '/services/peinture-residentielle/maison',
    },
    ...siblingLinks,
  ];
}

const sharedServiceImages = {
  interior: interieureHeroImg,
  exterior: exterieureHeroImg,
  residential: residentielleHeroImg,
  commercial: commercialeHeroImg,
  plaster: platreHeroImg,
};

export const brossardCityConfig = {
  cityName: 'Brossard',
  slug: 'brossard',
  headerImage: headerBrossard,
  headerAlt: {
    fr: 'Peintre professionnel à Brossard - Le Lever du Pinceau',
    en: 'Professional painter in Brossard - Le Lever du Pinceau',
  },
  heroTitle: { fr: 'Peintre à Brossard', en: 'Painter in Brossard' },
  heroLead: {
    fr: 'Maisons récentes, condos et chantiers bien planifiés près du REM.',
    en: 'Recent homes, condos and well-planned jobs near the REM.',
  },
  heroBody: {
    fr: 'Fissures de tassement, surfaces neuves et logistique familiale : on s\'adapte au tissu bâti de Brossard.',
    en: 'Settlement cracks, new surfaces and family logistics: we adapt to Brossard\'s building stock.',
  },
  localInsight: {
    fr: "Brossard est l'une des villes qui a le plus grossi sur la Rive-Sud ces quinze dernières années, portée par le corridor du REM : une grande partie des maisons et des condos ont moins de quinze ans. Une construction neuve continue de « travailler » pendant ses premières années : le bois sèche et la structure se tasse légèrement, ce qui cause de petites fissures de tassement aux coins de portes, de fenêtres et aux joints de gypse. Ce n'est pas un défaut de construction, mais ça demande un rebouchage adapté (toile à fissures aux points de tension) plutôt qu'un simple calfeutrage, sans quoi la fissure revient en un an.",
    en: 'Brossard is one of the fastest-growing cities on the South Shore over the past fifteen years, driven by the REM corridor: a large share of its homes and condos are less than fifteen years old. A new build keeps "settling" during its first years: the wood dries and the structure settles slightly, causing small settlement cracks at door and window corners and along drywall joints. It is not a construction defect, but it calls for proper patching (crack tape at stress points) rather than simple caulking, or the crack comes back within a year.',
  },
  checkmarksTitle: {
    fr: 'Une équipe habituée aux réalités des projets à Brossard',
    en: 'A team familiar with the realities of projects in Brossard',
  },
  checkmarksIntro: {
    fr: "À Brossard, la réussite d'un chantier dépend autant de la planification que de la finition : constructions récentes, condos et maisons familiales demandent une séquence claire.",
    en: 'In Brossard, the success of a job depends as much on planning as on the finish: recent builds, condos and family homes need a clear sequence.',
  },
  checkmarks: [
    {
      fr: 'Habitués aux maisons et condos récents - À Brossard, beaucoup de projets concernent des propriétés de moins de quinze ans, avec gypse neuf, boiseries standards et parfois encore des fissures de tassement à traiter avant peindre.',
      en: 'Experienced with recent homes and condos - In Brossard, many projects involve properties under fifteen years old, with new drywall, standard trim and sometimes settlement cracks still to treat before painting.',
    },
    {
      fr: 'Logistique simple en secteur résidentiel - Stationnement, accès et séquence des pièces organisés pour garder le chantier fluide, surtout dans les secteurs alphabétiques et près du DIX30.',
      en: 'Simple logistics in residential areas - Parking, access and room sequencing organized to keep the site running smoothly, especially in the alphabetical sectors and near DIX30.',
    },
    {
      fr: 'Préparation adaptée aux constructions neuves - Toile à fissures aux points de tension, apprêt au besoin et produits pensés pour un mur qui peut encore bouger légèrement.',
      en: 'Prep suited to new construction - Crack tape at stress points, primer when needed and products chosen for a wall that may still move slightly.',
    },
    {
      fr: 'Protection complète des espaces habités - Protections et nettoyage quotidien pour limiter l\'impact sur le quotidien familial pendant les travaux.',
      en: 'Full protection of occupied spaces - Protections and daily cleanup to limit impact on family life during the work.',
    },
    {
      fr: 'Présence locale sur la Rive-Sud - Brossard, Longueuil, Saint-Lambert et La Prairie : une équipe habituée aux délais et aux accès du secteur.',
      en: 'Local South Shore presence - Brossard, Longueuil, Saint-Lambert and La Prairie: a team used to the area\'s timelines and access.',
    },
  ],
  contextsTitle: {
    fr: 'Des projets différents selon le type de propriété à Brossard',
    en: 'Different projects depending on the type of property in Brossard',
  },
  contextsSubtitle: {
    fr: 'Maison récente, condo près du REM ou rafraîchissement avant vente : chaque contexte change la préparation et le rythme du chantier.',
    en: 'Recent home, condo near the REM or pre-sale refresh: each context changes prep and the pace of the job.',
  },
  contexts: [
    {
      number: '01',
      title: { fr: 'Maison récente avec fissures de tassement', en: 'Recent home with settlement cracks' },
      description: {
        fr: 'Aux coins de portes et fenêtres, un simple mastic ne suffit souvent pas. On rebouche avec toile à fissures aux points qui bougent, puis on peint pour un résultat qui tient.',
        en: 'At door and window corners, filler alone is often not enough. We patch with crack tape at points that move, then paint for a finish that lasts.',
      },
    },
    {
      number: '02',
      title: { fr: 'Condo ou unité près du corridor REM', en: 'Condo or unit near the REM corridor' },
      description: {
        fr: 'Accès, stationnement, espaces communs et propreté prennent plus d\'importance dans les immeubles récents. On planifie la logistique avant d\'ouvrir les pots.',
        en: 'Access, parking, common areas and cleanliness matter more in recent buildings. We plan logistics before opening the cans.',
      },
    },
    {
      number: '03',
      title: { fr: 'Maison familiale occupée', en: 'Occupied family home' },
      description: {
        fr: 'Projet à planifier pièce par pièce, avec protections, rythme clair et souci du quotidien. Beaucoup de chantiers à Brossard se font pendant que la famille reste sur place.',
        en: 'Project planned room by room, with protections, a clear rhythm and attention to daily life. Many Brossard jobs happen while the family stays home.',
      },
    },
    {
      number: '04',
      title: { fr: 'Rafraîchissement avant vente', en: 'Pre-sale refresh' },
      description: {
        fr: 'Une peinture propre et neutre aide à présenter une propriété plus lumineuse. Échéancier serré, scope cadré et finition uniforme pour maximiser l\'impact à la visite.',
        en: 'Clean, neutral paint helps present a brighter property. Tight schedule, defined scope and even finish to maximize impact at showings.',
      },
    },
    {
      number: '05',
      title: { fr: 'Terrasse, escalier ou boiserie extérieure', en: 'Deck, stairs or exterior woodwork' },
      description: {
        fr: 'UV, humidité et cycles gel-dégel de la Rive-Sud usent vite les surfaces exposées. Préparation, produit adapté et finition soignée pour un extérieur qui tient la saison.',
        en: 'UV, humidity and South Shore freeze-thaw cycles wear exposed surfaces quickly. Prep, the right product and a careful finish so the exterior lasts the season.',
      },
    },
  ],
  serviceCardsTitle: {
    fr: 'Les services de peinture les plus demandés à Brossard',
    en: 'The most requested painting services in Brossard',
  },
  serviceCardsSubtitle: {
    fr: 'Intérieur, extérieur ou commercial près du REM et du DIX30 : choisissez le service adapté à votre projet à Brossard.',
    en: 'Interior, exterior or commercial near the REM and DIX30: pick the service that fits your Brossard project.',
  },
  serviceCards: [
    {
      title: { fr: 'Peinture intérieure à Brossard', en: 'Interior painting in Brossard' },
      description: {
        fr: 'Murs, plafonds et boiseries dans maisons et condos récents : préparation des fissures, finition nette, chantier propre.',
        en: 'Walls, ceilings and trim in recent homes and condos: crack prep, clean finish, tidy job site.',
      },
      to: '/services/peinture-interieure',
      image: sharedServiceImages.interior,
    },
    {
      title: { fr: 'Peinture extérieure à Brossard', en: 'Exterior painting in Brossard' },
      description: {
        fr: 'Façades, terrasses, escaliers et boiseries adaptés au climat de la Rive-Sud et aux maisons des secteurs résidentiels.',
        en: 'Facades, decks, stairs and woodwork suited to South Shore weather and residential-sector homes.',
      },
      to: '/services/peinture-exterieure',
      image: sharedServiceImages.exterior,
    },
    {
      title: { fr: 'Peinture résidentielle', en: 'Residential painting' },
      description: {
        fr: 'Service complet pour maisons unifamiliales et unités : de la soumission à la livraison finale.',
        en: 'Full service for single-family homes and units: from quote to final delivery.',
      },
      to: '/services/peinture-residentielle',
      image: sharedServiceImages.residential,
    },
    {
      title: { fr: 'Peinture commerciale', en: 'Commercial painting' },
      description: {
        fr: 'Commerces, bureaux et espaces près du DIX30 : exécution rapide, propre et adaptée aux contraintes d\'exploitation.',
        en: 'Shops, offices and spaces near DIX30: fast, clean execution adapted to operating constraints.',
      },
      to: '/services/peinture-commerciale',
      image: sharedServiceImages.commercial,
    },
  ],
  beforeAfterTitle: {
    fr: 'Avant / après de projets à Brossard',
    en: 'Before / after of projects in Brossard',
  },
  beforeAfterSubtitle: {
    fr: 'Quelques transformations réalisées à Brossard et sur la Rive-Sud voisine.',
    en: 'A few transformations completed in Brossard and on the nearby South Shore.',
  },
  beforeAfterPairs: [
    {
      before: brossard0822,
      after: brossard0823,
      description: {
        fr: 'Teinture et peinture d\'escalier extérieur - Brossard',
        en: 'Exterior stair stain and paint - Brossard',
      },
    },
    {
      before: brossard0826,
      after: brossard0827,
      description: {
        fr: 'Changement de couleur - Salle à manger',
        en: 'Color change - Dining room',
      },
    },
    {
      before: brossard0832,
      after: brossard0833,
      description: {
        fr: 'Rafraîchissement intérieur - Chambre',
        en: 'Interior refresh - Bedroom',
      },
    },
    {
      before: brossard0838,
      after: brossard0839,
      description: {
        fr: 'Teinture de terrasse - Maison à Brossard',
        en: 'Deck staining - Home in Brossard',
      },
    },
  ],
  whyUsTitle: {
    fr: 'Ce qui fait la différence sur un chantier à Brossard',
    en: 'What makes the difference on a Brossard job',
  },
  whyUsSubtitle: {
    fr: 'Sur des maisons et condos souvent récents, la préparation des fissures de tassement et une logistique claire valent autant que la couleur finale.',
    en: 'On often-recent homes and condos, settlement-crack prep and clear logistics matter as much as the final color.',
  },
  whyUsCards: [
    {
      number: '01',
      title: { fr: 'Préparation des fissures de tassement', en: 'Settlement crack preparation' },
      description: {
        fr: 'Toile à fissures aux points de tension avant de peindre, pour que les lignes aux coins de portes et fenêtres ne reviennent pas en un an.',
        en: 'Crack tape at stress points before painting, so lines at door and window corners do not come back within a year.',
      },
    },
    {
      number: '02',
      title: { fr: 'Logistique adaptée aux secteurs récents', en: 'Logistics suited to recent sectors' },
      description: {
        fr: 'Accès, stationnement et espaces communs planifiés dès le départ, surtout près du REM, du DIX30 et dans les secteurs alphabétiques.',
        en: 'Access, parking and common areas planned from the start, especially near the REM, DIX30 and in the alphabetical sectors.',
      },
    },
    {
      number: '03',
      title: { fr: 'Fini durable sur bâti neuf', en: 'Durable finish on new builds' },
      description: {
        fr: 'Produits et séquence pensés pour un mur qui peut encore bouger légèrement pendant les premières années de la construction.',
        en: 'Products and sequencing chosen for a wall that may still move slightly during the first years of the build.',
      },
    },
  ],

  sectorsTitle: {
    fr: 'Nous desservons Brossard et ses principaux secteurs',
    en: 'We serve Brossard and its main sectors',
  },
  sectorsSubtitle: {
    fr: 'Secteurs alphabétiques, zones près du REM et pôles commerciaux : on se déplace partout dans la ville.',
    en: 'Alphabetical sectors, areas near the REM and commercial hubs: we work throughout the city.',
  },
  sectors: [
    'Secteurs A à T',
    'Quartier DIX30',
    'Secteur N et O (près du REM)',
    'Zones résidentielles familiales',
    'Secteurs commerciaux',
  ],
  sectorsNote: {
    fr: "Nous intervenons aussi à Longueuil, Saint-Lambert et La Prairie selon le type de projet et l'échéancier.",
    en: 'We also work in Longueuil, Saint-Lambert and La Prairie depending on the project and timeline.',
  },
  faqs: [
    {
      question: {
        fr: "Ma maison a été construite il y a moins de 5 ans et j'ai déjà des petites fissures, est-ce normal?",
        en: 'My house was built less than 5 years ago and I already have small cracks, is that normal?',
      },
      answer: {
        fr: "Oui, c'est très fréquent dans les constructions récentes comme celles qu'on voit à Brossard : la structure et les matériaux continuent de s'ajuster pendant les premières années. Ce n'est généralement pas structurel, mais il faut reboucher avec une toile à fissures aux points qui bougent, pas seulement du mastic, pour que la réparation tienne.",
        en: 'Yes, it is very common in recent construction like what we see in Brossard: the structure and materials keep adjusting during the first years. It is generally not structural, but the cracks need to be patched with crack tape at the points that move, not just filler, for the repair to last.',
      },
    },
    {
      question: {
        fr: 'Les fissures de tassement reviennent-elles aussi dans les condos récents près du REM?',
        en: 'Do settlement cracks also come back in recent condos near the REM?',
      },
      answer: {
        fr: "Oui. Une grande part des condos et maisons de Brossard a moins de quinze ans : le bois sèche et la structure se tasse encore aux coins de portes, de fenêtres et aux joints de gypse. Un simple calfeutrage ne suffit pas; on pose une toile à fissures aux points de tension avant de peindre, sinon la ligne revient en moins d'un an.",
        en: 'Yes. A large share of Brossard condos and homes are under fifteen years old: wood is still drying and the structure still settles at door and window corners and drywall joints. Simple caulking is not enough; we apply crack tape at stress points before painting, or the line comes back within a year.',
      },
    },
    {
      question: {
        fr: 'Intervenez-vous près du Quartier DIX30 et dans tous les secteurs alphabétiques?',
        en: 'Do you work near Quartier DIX30 and in all alphabetical sectors?',
      },
      answer: {
        fr: "Oui. Nous desservons l'ensemble de Brossard, y compris les secteurs alphabétiques et les zones commerciales comme le DIX30, selon le type de projet et la disponibilité.",
        en: 'Yes. We serve all of Brossard, including the alphabetical sectors and commercial areas like DIX30, depending on the project type and availability.',
      },
    },
  ],
  faqTitle: {
    fr: 'Questions fréquentes sur nos services de peinture à Brossard',
    en: 'Frequently asked questions about our painting services in Brossard',
  },
  internalLinksTitle: {
    fr: 'Explorez les services les plus demandés à Brossard',
    en: 'Explore the most requested services in Brossard',
  },
  internalLinksSubtitle: {
    fr: 'Maison récente, condo près du REM ou commerce au DIX30 : allez directement au service ou au secteur voisin utile.',
    en: 'Recent home, condo near the REM or shop at DIX30: go straight to the useful service or neighboring sector.',
  },
  internalLinks: baseInternalLinks('Brossard', 'Brossard', [
    { label: { fr: 'Peintre à Longueuil', en: 'Painter in Longueuil' }, to: '/secteurs/longueuil' },
    { label: { fr: 'Peintre à Saint-Lambert', en: 'Painter in Saint-Lambert' }, to: '/secteurs/st-lambert' },
    { label: { fr: 'Peintre à La Prairie', en: 'Painter in La Prairie' }, to: '/secteurs/laprairie' },
  ]),
  seoTitle: {
    fr: 'Peintre à Brossard | Résidentiel et commercial | Le Lever du Pinceau',
    en: 'Painter in Brossard | Residential and commercial | Le Lever du Pinceau',
  },
  seoDescription: {
    fr: 'Peintre à Brossard pour maisons et condos récents près du REM : fissures de tassement, intérieur, extérieur et commerces au DIX30. Soumission gratuite.',
    en: 'Painter in Brossard for recent homes and condos near the REM: settlement cracks, interior, exterior and DIX30 shops. Free quote.',
  },
  finalCtaSubtitle: {
    fr: 'Maison récente, condo près du REM ou commerce au DIX30 : décrivez votre projet et on confirme rapidement la bonne approche.',
    en: 'Recent home, condo near the REM or shop at DIX30: describe your project and we quickly confirm the right approach.',
  },
  areaServed: ['Quartier DIX30', 'Secteurs alphabétiques'],
};

export const stLambertCityConfig = {
  cityName: 'Saint-Lambert',
  slug: 'st-lambert',
  headerImage: headerRiveSud,
  headerAlt: {
    fr: 'Peintre professionnel à Saint-Lambert - Le Lever du Pinceau',
    en: 'Professional painter in Saint-Lambert - Le Lever du Pinceau',
  },
  heroTitle: { fr: 'Peintre à Saint-Lambert', en: 'Painter in Saint-Lambert' },
  heroLead: {
    fr: 'Maisons de caractère, plex et boiseries anciennes traités avec soin.',
    en: 'Character homes, plexes and old woodwork handled with care.',
  },
  heroBody: {
    fr: 'Préparation sécuritaire, finition soignée et chantier discret dans un tissu résidentiel établi.',
    en: 'Safe prep, careful finish and a discreet job site in an established residential fabric.',
  },
  localInsight: {
    fr: "Saint-Lambert est l'une des plus vieilles municipalités de la Rive-Sud, avec un noyau de maisons de caractère du début du 20e siècle. Les boiseries et revêtements de bois d'origine ont souvent reçu plusieurs couches de peinture au fil des décennies, et les couches les plus anciennes datent d'avant les normes actuelles sur la peinture au plomb. On ne devine pas ça à l'œil : nos équipes suivent des méthodes de ponçage et de retrait sécuritaires sur ce type de boiserie ancienne plutôt que de sabler à sec comme sur un revêtement récent.",
    en: "Saint-Lambert is one of the oldest municipalities on the South Shore, with a core of character homes from the early 20th century. Original woodwork and wood siding have often received several coats of paint over the decades, and the oldest layers predate current lead paint standards. You can't tell by looking: our teams follow safe sanding and removal methods on this type of old woodwork rather than dry sanding as on recent siding.",
  },
  checkmarksTitle: {
    fr: 'Une équipe habituée aux réalités des projets à Saint-Lambert',
    en: 'A team familiar with the realities of projects in Saint-Lambert',
  },
  checkmarksIntro: {
    fr: "À Saint-Lambert, la réussite d'un chantier dépend autant de la préparation que de la finition : maisons anciennes, boiseries et rues résidentielles calmes demandent une approche plus méticuleuse.",
    en: 'In Saint-Lambert, the success of a job depends as much on preparation as on the finish: older homes, woodwork and quiet residential streets need a more meticulous approach.',
  },
  checkmarks: [
    {
      fr: 'Habitués aux maisons et propriétés de caractère - Beaucoup de projets à Saint-Lambert demandent une finition soignée, une protection méticuleuse et le respect des boiseries d\'époque.',
      en: 'Experienced with character homes and properties - Many Saint-Lambert projects need a careful finish, meticulous protection and respect for period woodwork.',
    },
    {
      fr: 'Préparation adaptée aux couches anciennes - Sur les boiseries d\'avant 1960, ponçage humide et confinement de la poussière plutôt qu\'un sablage à sec comme sur un revêtement récent.',
      en: 'Prep suited to older paint layers - On pre-1960 woodwork, wet sanding and dust containment rather than dry sanding as on recent siding.',
    },
    {
      fr: 'Logistique adaptée aux rues résidentielles - Accès, stationnement et circulation du matériel planifiés pour limiter le dérangement dans un quartier établi.',
      en: 'Logistics suited to residential streets - Access, parking and material flow planned to limit disruption in an established neighborhood.',
    },
    {
      fr: 'Échéancier clair pour familles et transitions - Avant vente, avant emménagement ou pendant un horaire familial serré.',
      en: 'Clear schedule for families and transitions - Before listing, before move-in or during a tight family schedule.',
    },
    {
      fr: 'Présence locale sur la Rive-Sud - Saint-Lambert, Longueuil, Brossard et La Prairie : une équipe habituée au secteur.',
      en: 'Local South Shore presence - Saint-Lambert, Longueuil, Brossard and La Prairie: a team used to the area.',
    },
  ],
  contextsTitle: {
    fr: 'Des projets différents selon le type de propriété à Saint-Lambert',
    en: 'Different projects depending on the type of property in Saint-Lambert',
  },
  contextsSubtitle: {
    fr: 'Maison de caractère, plex ou rafraîchissement avant vente : le type de bâtiment change la préparation et le rythme.',
    en: 'Character home, plex or pre-sale refresh: the building type changes prep and pace.',
  },
  contexts: [
    {
      number: '01',
      title: { fr: 'Maison de caractère à rafraîchir', en: 'Character home to refresh' },
      description: {
        fr: "Pièces d'apparat, escaliers et boiseries remis en valeur sans perdre les détails qui font le charme de la maison.",
        en: 'Formal rooms, staircases and trim brought back to life without losing the details that give the house its charm.',
      },
      to: '/services/peinture-residentielle/maison',
      linkLabel: { fr: 'Voir la peinture de maison', en: 'See house painting' },
    },
    {
      number: '02',
      title: { fr: 'Condo ou unité en copropriété', en: 'Condo or co-ownership unit' },
      description: {
        fr: "Règlements du syndicat, réservation de l'ascenseur et protection des aires communes planifiés avant le début des travaux.",
        en: 'Condo board rules, elevator booking and protection of common areas planned before the work begins.',
      },
      to: '/services/peinture-residentielle/condo',
      linkLabel: { fr: 'Voir la peinture de condo', en: 'See condo painting' },
    },
    {
      number: '03',
      title: { fr: 'Plex ou logement en transition', en: 'Plex or unit in transition' },
      description: {
        fr: 'Entre deux occupants ou avant une mise en location : scope cadré, chantier rapide et propreté pour remettre le logement au propre.',
        en: 'Between occupants or before renting out: defined scope, fast job and cleanliness to refresh the unit.',
      },
    },
    {
      number: '04',
      title: { fr: 'Réparation autour des fenêtres et boiseries', en: 'Repair around windows and trim' },
      description: {
        fr: 'Écaillage, humidité ou usure sur les cadres : on prépare, on rebouche et on peint pour un contour net qui tient.',
        en: 'Peeling, moisture or wear on frames: we prep, patch and paint for a clean surround that lasts.',
      },
    },
    {
      number: '05',
      title: { fr: 'Projet avant vente ou emménagement', en: 'Pre-sale or pre-move-in project' },
      description: {
        fr: 'Échéancier clair, finition neutre et chantier discret dans un quartier où le voisinage et la présentation comptent.',
        en: 'Clear schedule, neutral finish and a discreet job site in a neighborhood where presentation and neighbors matter.',
      },
    },
  ],
  serviceCardsTitle: {
    fr: 'Les services de peinture les plus demandés à Saint-Lambert',
    en: 'The most requested painting services in Saint-Lambert',
  },
  serviceCardsSubtitle: {
    fr: 'Boiseries anciennes, plex ou maison de caractère : le bon service selon le bâti de Saint-Lambert.',
    en: 'Old woodwork, plex or character home: the right service for Saint-Lambert building stock.',
  },
  serviceCards: [
    {
      title: { fr: 'Peinture intérieure à Saint-Lambert', en: 'Interior painting in Saint-Lambert' },
      description: {
        fr: 'Murs, plafonds et boiseries dans maisons de caractère et plex : préparation soignée, finition nette.',
        en: 'Walls, ceilings and trim in character homes and plexes: careful prep, clean finish.',
      },
      to: '/services/peinture-interieure',
      image: sharedServiceImages.interior,
    },
    {
      title: { fr: 'Peinture extérieure à Saint-Lambert', en: 'Exterior painting in Saint-Lambert' },
      description: {
        fr: 'Façades et boiseries anciennes avec méthodes de préparation adaptées aux couches existantes.',
        en: 'Facades and older woodwork with prep methods suited to existing paint layers.',
      },
      to: '/services/peinture-exterieure',
      image: sharedServiceImages.exterior,
    },
    {
      title: { fr: 'Réparation de plâtre et gypse', en: 'Plaster and drywall repair' },
      description: {
        fr: 'Fissures, écaillage et remises à niveau avant peinture, fréquents dans le bâti plus ancien.',
        en: 'Cracks, peeling and surface updates before painting, common in older building stock.',
      },
      to: '/services/reparation-de-platre-et-gypse',
      image: sharedServiceImages.plaster,
    },
    {
      title: { fr: 'Peinture résidentielle', en: 'Residential painting' },
      description: {
        fr: 'Service complet pour maisons, plex et unités : de la soumission à la livraison finale.',
        en: 'Full service for homes, plexes and units: from quote to final delivery.',
      },
      to: '/services/peinture-residentielle',
      image: sharedServiceImages.residential,
    },
  ],
  beforeAfterTitle: {
    fr: 'Avant / après de projets à Saint-Lambert',
    en: 'Before / after of projects in Saint-Lambert',
  },
  beforeAfterSubtitle: {
    fr: 'Quelques transformations réalisées à Saint-Lambert et sur la Rive-Sud voisine.',
    en: 'A few transformations completed in Saint-Lambert and on the nearby South Shore.',
  },
  beforeAfterPairs: [
    {
      before: stLambert0842,
      after: stLambert0843,
      description: {
        fr: 'Retrait de papier peint et peinture - Chambre',
        en: 'Wallpaper removal and painting - Bedroom',
      },
    },
    {
      before: stLambert0859,
      after: stLambert0860,
      description: {
        fr: "Réparation et peinture autour d'une fenêtre",
        en: 'Repair and painting around a window',
      },
    },
    {
      before: stLambert0836,
      after: stLambert0837,
      description: {
        fr: 'Cadrage de fenêtre - plâtre et peinture',
        en: 'Window frame - plaster and paint',
      },
    },
    {
      before: stLambert0846,
      after: stLambert0847,
      description: {
        fr: 'Salon - murs et boiseries rafraîchis',
        en: 'Living room - walls and trim refreshed',
      },
    },
    {
      before: stLambert0855,
      after: stLambert0856,
      description: {
        fr: 'Pièce intérieure - finition nette',
        en: 'Interior room - clean finish',
      },
    },
    {
      before: stLambert5975,
      after: stLambert5976,
      description: {
        fr: 'Armoires de cuisine transformées',
        en: 'Kitchen cabinets transformed',
      },
    },
    {
      before: stLambert6031,
      after: stLambert8108,
      description: {
        fr: 'Couloir - plâtre réparé et murs repeints',
        en: 'Hallway - plaster repaired and walls repainted',
      },
    },
  ],
  whyUsTitle: {
    fr: 'Ce qui fait la différence sur un chantier à Saint-Lambert',
    en: 'What makes the difference on a Saint-Lambert job',
  },
  whyUsSubtitle: {
    fr: 'Sur des maisons de caractère et des boiseries anciennes, la méthode de préparation compte autant que la couleur choisie.',
    en: 'On character homes and old woodwork, the prep method matters as much as the color chosen.',
  },
  whyUsCards: [
    {
      number: '01',
      title: { fr: 'Préparation sécuritaire des boiseries', en: 'Safe woodwork preparation' },
      description: {
        fr: 'Sur les couches anciennes d\'avant 1960, ponçage humide et confinement de la poussière plutôt qu\'un sablage à sec comme sur un revêtement récent.',
        en: 'On pre-1960 layers, wet sanding and dust containment rather than dry sanding as on recent siding.',
      },
    },
    {
      number: '02',
      title: { fr: 'Respect du bâti de caractère', en: 'Respect for character building stock' },
      description: {
        fr: 'Plusieurs couches sur boiseries d\'origine, papier peint encore en place, finitions soignées : on évalue avant de tout décaper ou tout repeindre.',
        en: 'Multiple coats on original woodwork, wallpaper still in place, careful finishes: we assess before stripping or repainting everything.',
      },
    },
    {
      number: '03',
      title: { fr: 'Chantier discret en rue résidentielle', en: 'Discreet job on a residential street' },
      description: {
        fr: 'Accès, stationnement et protection des lieux planifiés pour limiter le dérangement dans un quartier établi.',
        en: 'Access, parking and site protection planned to limit disruption in an established neighborhood.',
      },
    },
  ],


  control: {
    title: {
      fr: 'Une exécution fiable, propre et bien encadrée',
      en: 'Reliable, clean and well-managed execution',
    },
    subtitle: {
      fr: 'Trois engagements qui guident chaque chantier dans les maisons de caractère de Saint-Lambert.',
      en: "Three commitments that guide every job in Saint-Lambert's character homes.",
    },
    cards: [
      {
        title: { fr: 'Organisation claire', en: 'Clear organization' },
        subtitle: { fr: 'un plan avant le premier coup de pinceau', en: 'a plan before the first brushstroke' },
        description: {
          fr: 'Ordre des pièces, échéancier écrit et personne-ressource : vous savez qui vient, quand, et ce qui sera fait dans votre maison.',
          en: 'Room order, written schedule and a single contact: you know who is coming, when, and what will be done in your home.',
        },
      },
      {
        title: { fr: 'Chantier propre', en: 'Clean job site' },
        subtitle: { fr: 'même avec les vieilles couches', en: 'even with old paint layers' },
        description: {
          fr: 'Ponçage humide, confinement de la poussière et nettoyage chaque soir, essentiels quand les boiseries portent des décennies de peinture.',
          en: 'Wet sanding, dust containment and cleanup every evening, essential when the woodwork carries decades of paint.',
        },
      },
      {
        title: { fr: 'Résultat durable', en: 'Lasting result' },
        subtitle: { fr: 'plâtre et boiseries bien préparés', en: 'well-prepared plaster and trim' },
        description: {
          fr: 'Plâtre réparé avec des matériaux compatibles et boiseries apprêtées correctement : la finition tient des années, sans fissures qui reviennent.',
          en: 'Plaster repaired with compatible materials and trim properly primed: the finish lasts for years, with no returning cracks.',
        },
      },
    ],
  },
  sectorsTitle: {
    fr: 'Nous desservons Saint-Lambert et les secteurs voisins',
    en: 'We serve Saint-Lambert and nearby areas',
  },
  sectorsSubtitle: {
    fr: 'Centre-ville, secteurs résidentiels établis et villes voisines de la Rive-Sud.',
    en: 'Downtown, established residential areas and neighboring South Shore cities.',
  },
  sectors: [],
  sectorsNote: {
    fr: "Nous intervenons aussi à Longueuil, Brossard et La Prairie selon le type de projet et l'échéancier.",
    en: 'We also work in Longueuil, Brossard and La Prairie depending on the project and timeline.',
  },
  faqs: [
    {
      question: {
        fr: "Ma maison date d'avant 1960, y a-t-il des précautions particulières avant de repeindre les boiseries?",
        en: 'My house was built before 1960, are there special precautions before repainting the woodwork?',
      },
      answer: {
        fr: "Oui. Les couches de peinture les plus anciennes sur ce type de propriété peuvent contenir du plomb. Nous évaluons l'état des couches existantes et ajustons la méthode de préparation (ponçage humide, confinement de la poussière) plutôt que d'appliquer la même technique que sur une construction récente.",
        en: 'Yes. The oldest layers of paint on this type of property may contain lead. We assess the condition of the existing layers and adjust the preparation method (wet sanding, dust containment) rather than using the same technique as on a recent build.',
      },
    },
    {
      question: {
        fr: "Mes boiseries d'origine ont plusieurs couches de peinture, faut-il tout décaper?",
        en: 'My original woodwork has several coats of paint, does everything need to be stripped?',
      },
      answer: {
        fr: "Pas toujours. À Saint-Lambert, beaucoup de boiseries du début du 20e siècle ont accumulé des couches décennies après décennies. On évalue l'adhérence, l'épaisseur et l'état du bois : parfois un sablage ciblé et un apprêt suffisent; parfois un retrait plus complet est nécessaire pour un fini durable et net.",
        en: 'Not always. In Saint-Lambert, a lot of early-20th-century woodwork has built up coats over decades. We assess adhesion, thickness and wood condition: sometimes targeted sanding and primer are enough; sometimes a fuller removal is needed for a durable, clean finish.',
      },
    },
    {
      question: {
        fr: 'Pouvez-vous retirer le papier peint avant de peindre à Saint-Lambert?',
        en: 'Can you remove wallpaper before painting in Saint-Lambert?',
      },
      answer: {
        fr: 'Oui. Dans plusieurs maisons de Saint-Lambert, le papier peint est encore en place. Nous le retirons, préparons les surfaces et peignons pour une finition uniforme.',
        en: 'Yes. In many Saint-Lambert homes, wallpaper is still in place. We remove it, prep the surfaces and paint for an even finish.',
      },
    },
  ],
  faqTitle: {
    fr: 'Questions fréquentes sur nos services de peinture à Saint-Lambert',
    en: 'Frequently asked questions about our painting services in Saint-Lambert',
  },
  internalLinksTitle: {
    fr: 'Explorez les services les plus demandés à Saint-Lambert',
    en: 'Explore the most requested services in Saint-Lambert',
  },
  internalLinksSubtitle: {
    fr: 'Boiseries d\'époque, réparation de plâtre ou page ville voisine : trouvez le détail utile pour Saint-Lambert.',
    en: 'Period woodwork, plaster repair or a neighboring city page: find the useful detail for Saint-Lambert.',
  },
  internalLinks: baseInternalLinks('Saint-Lambert', 'Saint-Lambert', [
    { label: { fr: 'Peintre à Longueuil', en: 'Painter in Longueuil' }, to: '/secteurs/longueuil' },
    { label: { fr: 'Peintre à Brossard', en: 'Painter in Brossard' }, to: '/secteurs/brossard' },
    { label: { fr: 'Peintre à La Prairie', en: 'Painter in La Prairie' }, to: '/secteurs/laprairie' },
  ]),
  seoTitle: {
    fr: 'Peintre à Saint-Lambert | Résidentiel et commercial | Le Lever du Pinceau',
    en: 'Painter in Saint-Lambert | Residential and commercial | Le Lever du Pinceau',
  },
  seoDescription: {
    fr: 'Peintre à Saint-Lambert pour maisons de caractère et boiseries anciennes : préparation sécuritaire, intérieur, extérieur et plex. Soumission gratuite.',
    en: 'Painter in Saint-Lambert for character homes and old woodwork: safe prep, interior, exterior and plexes. Free quote.',
  },
  finalCtaSubtitle: {
    fr: 'Maison de caractère, boiseries anciennes ou plex à Saint-Lambert : on évalue la préparation avant de peindre.',
    en: 'Character home, old woodwork or plex in Saint-Lambert: we assess prep before painting.',
  },
  areaServed: ['Saint-Lambert', 'Rive-Sud'],
};

export const laprairieCityConfig = {
  cityName: 'La Prairie',
  slug: 'laprairie',
  headerImage: headerRiveSud,
  headerAlt: {
    fr: 'Peintre professionnel à La Prairie - Le Lever du Pinceau',
    en: 'Professional painter in La Prairie - Le Lever du Pinceau',
  },
  heroTitle: { fr: 'Peintre à La Prairie', en: 'Painter in La Prairie' },
  heroLead: {
    fr: 'Du Vieux-La Prairie en pierre aux quartiers résidentiels plus récents.',
    en: 'From stone Old La Prairie to newer residential neighborhoods.',
  },
  heroBody: {
    fr: 'Produits et méthodes adaptés au type de façade et au rythme familial du chantier.',
    en: 'Products and methods adapted to the facade type and the family pace of the job.',
  },
  localInsight: {
    fr: "Le Vieux-La Prairie, fondé en 1667, est l'un des plus anciens noyaux bâtis du Québec, avec des façades en pierre des champs et en maçonnerie ancienne qui côtoient des quartiers résidentiels beaucoup plus récents. La pierre et la maçonnerie ancienne « respirent » différemment d'un revêtement moderne : un revêtement acrylique standard, trop étanche, piège l'humidité dans le mur et accélère l'effritement. Sur ces façades, on privilégie des produits minéraux ou respirants plutôt que la peinture extérieure standard qu'on utilise sur une maison plus récente.",
    en: 'Old La Prairie, founded in 1667, is one of the oldest built-up cores in Quebec, with fieldstone and old masonry facades alongside much newer residential neighborhoods. Stone and old masonry "breathe" differently from modern siding: a standard acrylic coating, too airtight, traps moisture in the wall and speeds up crumbling. On these facades, we favor mineral or breathable products rather than the standard exterior paint used on a newer house.',
  },
  checkmarksTitle: {
    fr: 'Une équipe habituée aux réalités des projets à La Prairie',
    en: 'A team familiar with the realities of projects in La Prairie',
  },
  checkmarksIntro: {
    fr: "À La Prairie, la réussite d'un chantier dépend autant du type de bâti que de la finition : pierre ancienne et maisons récentes ne se traitent pas de la même façon.",
    en: 'In La Prairie, the success of a job depends as much on the building type as on the finish: old stone and newer homes are not treated the same way.',
  },
  checkmarks: [
    {
      fr: 'Habitués aux maisons unifamiliales et projets familiaux - Une grande partie des projets à La Prairie concerne des propriétés occupées, des remises à niveau ou des transitions avant vente.',
      en: 'Experienced with single-family homes and family projects - Many La Prairie jobs involve occupied properties, refreshes or pre-sale transitions.',
    },
    {
      fr: 'Produits adaptés au Vieux-La Prairie - Sur pierre et maçonnerie ancienne, revêtements respirants plutôt qu\'un acrylique standard trop étanche.',
      en: 'Products suited to Old La Prairie - On stone and old masonry, breathable coatings rather than a standard acrylic that is too airtight.',
    },
    {
      fr: 'Logistique simple dans les nouveaux développements - Accès, stationnement et séquence des pièces organisés pour un chantier fluide en secteur résidentiel.',
      en: 'Simple logistics in newer developments - Access, parking and room sequencing organized for a smooth job in residential areas.',
    },
    {
      fr: 'Échéancier clair pour les moments sensibles - Avant vente, avant emménagement ou entre deux occupations.',
      en: 'Clear schedule for sensitive moments - Before listing, before move-in or between occupants.',
    },
    {
      fr: 'Présence locale sur la Rive-Sud - La Prairie, Brossard, Saint-Lambert et Longueuil : une équipe habituée au secteur.',
      en: 'Local South Shore presence - La Prairie, Brossard, Saint-Lambert and Longueuil: a team used to the area.',
    },
  ],
  contextsTitle: {
    fr: 'Des projets différents selon le type de propriété à La Prairie',
    en: 'Different projects depending on the type of property in La Prairie',
  },
  contextsSubtitle: {
    fr: 'Façade en pierre du Vieux-La Prairie, maison récente ou remise à neuf intérieure : chaque contexte change les produits et la séquence.',
    en: 'Old La Prairie stone facade, newer home or interior refresh: each context changes products and sequencing.',
  },
  contexts: [
    {
      number: '01',
      title: { fr: 'Façade en pierre ou maçonnerie ancienne', en: 'Stone facade or old masonry' },
      description: {
        fr: 'Dans le Vieux-La Prairie, la façade doit rester respirante. On privilégie des revêtements adaptés plutôt qu\'un acrylique standard qui piège l\'humidité.',
        en: 'In Old La Prairie, the facade must stay breathable. We favor suitable coatings rather than a standard acrylic that traps moisture.',
      },
    },
    {
      number: '02',
      title: { fr: 'Maison dans un développement plus récent', en: 'Home in a newer development' },
      description: {
        fr: 'Surfaces plus standards, planning famille et protections : le chantier se gère comme un projet résidentiel classique, avec échéancier clair.',
        en: 'More standard surfaces, family planning and protections: the job is managed like a classic residential project, with a clear schedule.',
      },
    },
    {
      number: '03',
      title: { fr: 'Rafraîchissement intérieur avant vente', en: 'Interior refresh before sale' },
      description: {
        fr: 'Papier peint daté, boiseries usées ou couleurs trop marquées : on modernise avec une palette neutre et une finition uniforme pour les visites.',
        en: 'Dated wallpaper, worn trim or strong colors: we modernize with a neutral palette and even finish for showings.',
      },
    },
    {
      number: '04',
      title: { fr: 'Boiseries et plinthes à remettre au propre', en: 'Trim and baseboards to refresh' },
      description: {
        fr: 'Rayures, écaillage et usure du quotidien. Préparation, sous-couche au besoin et finition nette pour un détail qui change toute la pièce.',
        en: 'Scratches, peeling and everyday wear. Prep, primer when needed and a clean finish for a detail that changes the whole room.',
      },
    },
    {
      number: '05',
      title: { fr: 'Projet avant emménagement', en: 'Pre-move-in project' },
      description: {
        fr: 'Le meilleur moment pour peindre vite et efficacement, sans contourner le mobilier ni compliquer la logistique familiale.',
        en: 'The best time to paint quickly and efficiently, without working around furniture or complicating family logistics.',
      },
    },
  ],
  serviceCardsTitle: {
    fr: 'Les services de peinture les plus demandés à La Prairie',
    en: 'The most requested painting services in La Prairie',
  },
  serviceCardsSubtitle: {
    fr: 'Pierre du Vieux-La Prairie ou maison plus récente : le service et le produit adaptés à votre façade.',
    en: 'Old La Prairie stone or a newer home: the service and product suited to your facade.',
  },
  serviceCards: [
    {
      title: { fr: 'Peinture intérieure à La Prairie', en: 'Interior painting in La Prairie' },
      description: {
        fr: 'Murs, plafonds et boiseries dans maisons familiales : préparation soignée, finition nette, chantier propre.',
        en: 'Walls, ceilings and trim in family homes: careful prep, clean finish, tidy job site.',
      },
      to: '/services/peinture-interieure',
      image: sharedServiceImages.interior,
    },
    {
      title: { fr: 'Peinture extérieure à La Prairie', en: 'Exterior painting in La Prairie' },
      description: {
        fr: 'Façades récentes ou maçonnerie ancienne du Vieux-La Prairie : produit et méthode adaptés au support.',
        en: 'Newer facades or Old La Prairie masonry: product and method adapted to the surface.',
      },
      to: '/services/peinture-exterieure',
      image: sharedServiceImages.exterior,
    },
    {
      title: { fr: 'Peinture résidentielle', en: 'Residential painting' },
      description: {
        fr: 'Service complet pour maisons unifamiliales : de la soumission à la livraison finale.',
        en: 'Full service for single-family homes: from quote to final delivery.',
      },
      to: '/services/peinture-residentielle',
      image: sharedServiceImages.residential,
    },
    {
      title: { fr: 'Peinture commerciale', en: 'Commercial painting' },
      description: {
        fr: 'Commerces et espaces professionnels : exécution rapide, propre et adaptée aux contraintes d\'exploitation.',
        en: 'Shops and professional spaces: fast, clean execution adapted to operating constraints.',
      },
      to: '/services/peinture-commerciale',
      image: sharedServiceImages.commercial,
    },
  ],
  beforeAfterTitle: {
    fr: 'Avant / après de projets à La Prairie',
    en: 'Before / after of projects in La Prairie',
  },
  beforeAfterSubtitle: {
    fr: 'Quelques transformations réalisées à La Prairie et sur la Rive-Sud voisine.',
    en: 'A few transformations completed in La Prairie and on the nearby South Shore.',
  },
  beforeAfterPairs: [
    {
      before: laprairie0852,
      after: laprairie0853,
      description: {
        fr: 'Retrait de papier peint et peinture - Chambre',
        en: 'Wallpaper removal and painting - Bedroom',
      },
    },
    {
      before: laprairie0861,
      after: laprairie0862,
      description: {
        fr: 'Remise à neuf de plinthes - Intérieur résidentiel',
        en: 'Baseboard refresh - Residential interior',
      },
    },
     {
      before: laprairie0818,
      after: laprairie0819,
      description: {
        fr: 'Réparation de plâtre et peinture',
        en: 'Plaster repair and painting',
      },
    },
  ],
  whyUsTitle: {
    fr: 'Ce qui fait la différence sur un chantier à La Prairie',
    en: 'What makes the difference on a La Prairie job',
  },
  whyUsSubtitle: {
    fr: 'Entre le Vieux-La Prairie en pierre et les quartiers plus récents, le bon produit et la bonne méthode changent tout.',
    en: 'Between stone Old La Prairie and newer neighborhoods, the right product and method change everything.',
  },
  whyUsCards: [
    {
      number: '01',
      title: { fr: 'Revêtements respirants sur pierre', en: 'Breathable coatings on stone' },
      description: {
        fr: 'Sur maçonnerie ancienne, produits minéraux ou respirants plutôt qu\'un acrylique trop étanche qui piège l\'humidité.',
        en: 'On old masonry, mineral or breathable products rather than an acrylic coating that is too airtight and traps moisture.',
      },
    },
    {
      number: '02',
      title: { fr: 'Deux approches selon le quartier', en: 'Two approaches by neighborhood' },
      description: {
        fr: 'Vieux-La Prairie et nouveaux développements ne se peignent pas de la même façon : on choisit la méthode selon le support, pas selon un processus unique.',
        en: 'Old La Prairie and newer developments are not painted the same way: we choose the method by substrate, not a one-size process.',
      },
    },
    {
      number: '03',
      title: { fr: 'Chantier adapté au rythme familial', en: 'Job paced for family life' },
      description: {
        fr: 'Beaucoup de projets concernent des maisons occupées : protections, séquence claire et nettoyage quotidien pour garder l\'espace utilisable.',
        en: 'Many projects involve occupied homes: protections, a clear sequence and daily cleanup so the space stays usable.',
      },
    },
  ],

  sectorsTitle: {
    fr: 'Nous desservons La Prairie et les secteurs voisins',
    en: 'We serve La Prairie and nearby areas',
  },
  sectorsSubtitle: {
    fr: 'Vieux-La Prairie, secteurs résidentiels et nouveaux développements.',
    en: 'Old La Prairie, residential areas and newer developments.',
  },
  sectors: [
    'Vieux-La Prairie',
    'Secteurs résidentiels',
    'Nouveaux développements',
    'Proche Brossard',
    'Rive-Sud voisine',
  ],
  sectorsNote: {
    fr: "Nous intervenons aussi à Brossard, Saint-Lambert et Longueuil selon le type de projet et l'échéancier.",
    en: 'We also work in Brossard, Saint-Lambert and Longueuil depending on the project and timeline.',
  },
  faqs: [
    {
      question: {
        fr: 'Ma propriété est en pierre dans le Vieux-La Prairie, utilisez-vous le même produit que sur une maison récente?',
        en: 'My property is stone in Old La Prairie, do you use the same product as on a recent house?',
      },
      answer: {
        fr: "Non. La pierre et la maçonnerie ancienne doivent rester respirantes pour évacuer l'humidité naturellement. Nous utilisons des revêtements adaptés à ce type de surface plutôt qu'un acrylique standard, qui finirait par emprisonner l'humidité et endommager la maçonnerie.",
        en: 'No. Stone and old masonry must stay breathable to let moisture escape naturally. We use coatings suited to this type of surface rather than a standard acrylic, which would eventually trap moisture and damage the masonry.',
      },
    },
    {
      question: {
        fr: "Peut-on peindre de la pierre des champs sans accélérer l'effritement?",
        en: 'Can fieldstone be painted without speeding up crumbling?',
      },
      answer: {
        fr: "Seulement avec un système respirant. Un acrylique trop étanche piège l'humidité dans le mur et accélère l'effritement. Sur les façades du Vieux-La Prairie, on privilégie des produits minéraux ou respirants et on refuse une peinture extérieure standard quand le support ne s'y prête pas.",
        en: 'Only with a breathable system. An acrylic coating that is too airtight traps moisture in the wall and speeds up crumbling. On Old La Prairie facades, we favor mineral or breathable products and skip standard exterior paint when the substrate is not suited to it.',
      },
    },
    {
      question: {
        fr: 'Travaillez-vous aussi dans les nouveaux développements de La Prairie?',
        en: 'Do you also work in newer developments in La Prairie?',
      },
      answer: {
        fr: "Oui. La Prairie mélange un noyau historique en pierre et des quartiers plus récents. Sur une construction neuve, on peut utiliser une peinture extérieure classique après la bonne préparation; sur la maçonnerie ancienne, le choix de produit et la gestion de l'humidité dictent toute l'approche.",
        en: 'Yes. La Prairie mixes a historic stone core with newer neighborhoods. On a new build, classic exterior paint can work after proper prep; on old masonry, product choice and moisture management drive the whole approach.',
      },
    },
  ],
  faqTitle: {
    fr: 'Questions fréquentes sur nos services de peinture à La Prairie',
    en: 'Frequently asked questions about our painting services in La Prairie',
  },
  internalLinksTitle: {
    fr: 'Explorez les services les plus demandés à La Prairie',
    en: 'Explore the most requested services in La Prairie',
  },
  internalLinksSubtitle: {
    fr: 'Façade en pierre, maison récente ou secteur voisin de la Rive-Sud : allez au détail utile pour La Prairie.',
    en: 'Stone facade, newer home or neighboring South Shore sector: go to the useful detail for La Prairie.',
  },
  internalLinks: baseInternalLinks('La Prairie', 'La Prairie', [
    { label: { fr: 'Peintre à Brossard', en: 'Painter in Brossard' }, to: '/secteurs/brossard' },
    { label: { fr: 'Peintre à Saint-Lambert', en: 'Painter in Saint-Lambert' }, to: '/secteurs/st-lambert' },
    { label: { fr: 'Peintre à Longueuil', en: 'Painter in Longueuil' }, to: '/secteurs/longueuil' },
  ]),
  seoTitle: {
    fr: 'Peintre à La Prairie | Résidentiel et commercial | Le Lever du Pinceau',
    en: 'Painter in La Prairie | Residential and commercial | Le Lever du Pinceau',
  },
  seoDescription: {
    fr: 'Peintre à La Prairie pour le Vieux en pierre et les quartiers récents : revêtements respirants, intérieur, extérieur et maisons familiales. Soumission gratuite.',
    en: 'Painter in La Prairie for stone Old Town and newer neighborhoods: breathable coatings, interior, exterior and family homes. Free quote.',
  },
  finalCtaSubtitle: {
    fr: 'Pierre du Vieux-La Prairie ou maison plus récente : décrivez le support et on propose la bonne méthode.',
    en: 'Old La Prairie stone or a newer home: describe the surface and we propose the right method.',
  },
  areaServed: ['Vieux-La Prairie'],
};
