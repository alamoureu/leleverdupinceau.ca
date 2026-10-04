import headerBrossard from '../images/3-ville/brossard/+Header/IMG_6784.PNG';
import headerRiveSud from '../images/3-ville/rive-sud/header (1).JPEG';
import rsImg5973 from '../images/3-ville/rive-sud/avant-apres/IMG_5973 6.jpg';
import rsImg5974 from '../images/3-ville/rive-sud/avant-apres/IMG_5974 6.jpg';
import rsImg7974 from '../images/3-ville/rive-sud/avant-apres/IMG_7974 4.jpg';
import rsImg7975 from '../images/3-ville/rive-sud/avant-apres/IMG_7975 4.jpg';
import rsImg7988 from '../images/3-ville/rive-sud/avant-apres/IMG_7988 5.jpg';
import rsImg7990 from '../images/3-ville/rive-sud/avant-apres/IMG_7990 5.jpg';
import rsImg7992 from '../images/3-ville/rive-sud/avant-apres/IMG_7992 7.jpg';
import rsImg7994 from '../images/3-ville/rive-sud/avant-apres/IMG_7994 7.jpg';

const sharedWhyUsCards = [
  {
    number: '01',
    title: { fr: 'Organisation claire', en: 'Clear organization' },
    description: {
      fr: 'Soumission détaillée, plan de match, échéancier précis et séquence des travaux communiquée avant le début du chantier.',
      en: 'Detailed quote, game plan, precise schedule and work sequence communicated before the start of the job.',
    },
  },
  {
    number: '02',
    title: { fr: 'Chantier propre', en: 'Clean job site' },
    description: {
      fr: 'Protections en place, respect des lieux, nettoyage quotidien du chantier. Votre espace reste habitable pendant les travaux.',
      en: 'Protections in place, respect for the space, daily site cleanup. Your home stays livable during the work.',
    },
  },
  {
    number: '03',
    title: { fr: 'Résultat durable', en: 'Lasting result' },
    description: {
      fr: 'Préparation sérieuse des surfaces, produits adaptés à chaque contexte, finition nette et uniforme de la première à la dernière couche.',
      en: 'Thorough surface preparation, products adapted to each context, clean and uniform finish from first to last coat.',
    },
  },
];

const sharedContexts = [
  {
    number: '01',
    title: { fr: 'Maison unifamiliale occupée', en: 'Occupied single-family home' },
    description: {
      fr: 'Projet à planifier pièce par pièce, avec protections, rythme de chantier clair et souci du quotidien familial.',
      en: 'Project to plan room by room, with protections, clear site rhythm and attention to daily family life.',
    },
  },
  {
    number: '02',
    title: { fr: 'Condo ou unité en copropriété', en: 'Condo or co-ownership unit' },
    description: {
      fr: "Accès, circulation, espaces communs et propreté prennent plus d'importance dans les immeubles récents ou les copropriétés.",
      en: 'Access, circulation, common areas and cleanliness take on more importance in recent buildings or co-ownerships.',
    },
  },
  {
    number: '03',
    title: { fr: 'Rafraîchissement avant vente', en: 'Pre-sale refresh' },
    description: {
      fr: 'Une peinture propre et neutre aide à présenter une propriété plus lumineuse, plus soignée et plus facile à projeter pour un acheteur.',
      en: 'Clean, neutral paint helps present a brighter, more polished property that buyers can more easily envision.',
    },
  },
  {
    number: '04',
    title: { fr: 'Projet avant emménagement', en: 'Pre-move-in project' },
    description: {
      fr: 'Le meilleur moment pour peindre vite et efficacement, sans contourner le mobilier ni compliquer la logistique.',
      en: 'The best time to paint quickly and efficiently, without working around furniture or complicating logistics.',
    },
  },
  {
    number: '05',
    title: { fr: 'Remise à niveau entre deux occupants', en: 'Turnover between occupants' },
    description: {
      fr: 'Appartement, logement ou unité en transition : il faut aller vite, proprement et avec un scope bien cadré.',
      en: 'Apartment, unit or rental in transition: we move fast, cleanly and with a well-defined scope.',
    },
  },
];

const riveSudBeforeAfter = [
  {
    before: rsImg5973,
    after: rsImg5974,
    description: {
      fr: 'Peinture intérieure - Maison sur la Rive-Sud',
      en: 'Interior painting - Home on the South Shore',
    },
  },
  {
    before: rsImg7992,
    after: rsImg7994,
    description: {
      fr: 'Rafraîchissement complet - Condo récent',
      en: 'Full refresh - Recent condo',
    },
  },
  {
    before: rsImg7990,
    after: rsImg7988,
    description: {
      fr: 'Peinture résidentielle - Propriété familiale',
      en: 'Residential painting - Family property',
    },
  },
  {
    before: rsImg7975,
    after: rsImg7974,
    description: {
      fr: 'Mise à niveau avant vente - Rive-Sud',
      en: 'Pre-sale update - South Shore',
    },
  },
];

function baseInternalLinks(cityLabelFr, cityLabelEn) {
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
    { label: { fr: 'Obtenir une soumission', en: 'Get a quote' }, to: '/contact' },
    {
      label: { fr: 'Peintre à Longueuil', en: 'Painter in Longueuil' },
      to: '/secteurs/longueuil',
    },
    { label: { fr: 'Voir nos réalisations', en: 'View our projects' }, to: '/realisations' },
    {
      label: { fr: `Maison unifamiliale à ${cityLabelFr}`, en: `Single-family home in ${cityLabelEn}` },
      to: '/services/peinture-residentielle/maison',
    },
  ];
}

function cityFaqs(cityFr, cityEn) {
  return [
    {
      question: {
        fr: `Est-ce que vous vous déplacez partout à ${cityFr}?`,
        en: `Do you travel throughout ${cityEn}?`,
      },
      answer: {
        fr: `Oui. Nous desservons ${cityFr} et les secteurs voisins de la Rive-Sud selon le type de projet. Lors de la soumission, nous confirmons rapidement la disponibilité et l'échéancier.`,
        en: `Yes. We serve ${cityEn} and nearby South Shore areas depending on the project. When quoting, we quickly confirm availability and scheduling.`,
      },
    },
    {
      question: {
        fr: 'Faites-vous des projets dans des maisons occupées?',
        en: 'Do you work in occupied homes?',
      },
      answer: {
        fr: `Oui. Une grande partie de nos projets à ${cityFr} se font dans des maisons ou condos habités. Nous planifions les protections, la séquence des pièces et le nettoyage pour limiter les impacts au quotidien.`,
        en: `Yes. A large portion of our ${cityEn} projects take place in occupied homes or condos. We plan protections, room sequencing and cleanup to minimize daily disruptions.`,
      },
    },
    {
      question: {
        fr: `Combien de temps faut-il pour peindre une propriété à ${cityFr}?`,
        en: `How long does it take to paint a property in ${cityEn}?`,
      },
      answer: {
        fr: "Cela dépend de la taille, de l'état des surfaces et du niveau de préparation. Une soumission détaillée permet d'établir un échéancier clair et réaliste avant le début des travaux.",
        en: 'It depends on the size of the project, the condition of the surfaces and the level of preparation required. A detailed quote establishes a clear and realistic schedule before work begins.',
      },
    },
    {
      question: {
        fr: `Peut-on obtenir une soumission rapidement à ${cityFr}?`,
        en: `Can we get a quote quickly in ${cityEn}?`,
      },
      answer: {
        fr: 'Oui. Dans la majorité des cas, nous répondons en moins de 24 heures avec une estimation adaptée à votre projet.',
        en: 'Yes. In most cases, we respond within 24 hours with an estimate tailored to your project.',
      },
    },
  ];
}

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
    fr: 'Des peintres de métier pour vos projets résidentiels et commerciaux partout à Brossard.',
    en: 'Professional painters for your residential and commercial projects throughout Brossard.',
  },
  heroBody: {
    fr: 'Maisons familiales, condos, commerces et secteurs alphabétiques : nous livrons des chantiers propres, rapides et bien coordonnés à Brossard.',
    en: 'Family homes, condos, businesses and alphabetical sectors: we deliver clean, fast and well-coordinated jobs in Brossard.',
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
    fr: "À Brossard, la réussite d'un chantier dépend autant de la planification que de la finition.",
    en: 'In Brossard, the success of a job depends as much on planning as on the finish.',
  },
  checkmarks: [
    {
      fr: 'Habitués aux maisons, condos et projets de transition - À Brossard, beaucoup de projets concernent des propriétés occupées, des condos récents ou des rafraîchissements avant vente.',
      en: 'Experienced with homes, condos and transition projects - In Brossard, many projects involve occupied properties, recent condos or pre-sale refreshes.',
    },
    {
      fr: 'Logistique simple et bien planifiée - Stationnement, accès et séquence des pièces organisés pour garder le chantier fluide.',
      en: 'Simple, well-planned logistics - Parking, access and room sequencing organized to keep the site running smoothly.',
    },
    {
      fr: 'Produits adaptés au climat québécois - UV, humidité et variations de température pris en compte pour l’intérieur comme pour l’extérieur.',
      en: 'Products suited to Quebec climate - UV, humidity and temperature swings considered for interior and exterior work.',
    },
    {
      fr: 'Protection complète des espaces habités - Protections et nettoyage quotidien pour limiter l’impact sur votre quotidien.',
      en: 'Full protection of occupied spaces - Protections and daily cleanup to limit impact on daily life.',
    },
    {
      fr: 'Connaissance des secteurs de Brossard - Secteurs alphabétiques, Quartier DIX30 et zones résidentielles : l’approche s’adapte.',
      en: 'Knowledge of Brossard sectors - Alphabetical sectors, DIX30 area and residential zones: the approach adapts.',
    },
  ],
  contextsTitle: {
    fr: 'Des projets différents selon le type de propriété à Brossard',
    en: 'Different projects depending on the type of property in Brossard',
  },
  contextsSubtitle: {
    fr: 'Une maison familiale, un condo ou une propriété à remettre au propre avant une transition ne se gèrent pas de la même manière.',
    en: 'A family home, a condo or a property to refresh before a transition are not managed the same way.',
  },
  contexts: sharedContexts,
  beforeAfterTitle: {
    fr: 'Avant / après de projets à Brossard et sur la Rive-Sud',
    en: 'Before / after of projects in Brossard and on the South Shore',
  },
  beforeAfterSubtitle: {
    fr: 'Quelques exemples de transformations propres et bien exécutées dans la région.',
    en: 'A few examples of clean and well-executed transformations in the area.',
  },
  beforeAfterPairs: riveSudBeforeAfter,
  whyUsTitle: {
    fr: 'Une exécution fiable, propre et bien encadrée',
    en: 'Reliable, clean and well-managed execution',
  },
  whyUsSubtitle: {
    fr: "Ce que les clients veulent à Brossard, ce n'est pas seulement un beau résultat : c'est un chantier bien géré du début à la fin.",
    en: "What clients in Brossard want is not just a beautiful result: it's a job site well managed from start to finish.",
  },
  whyUsCards: sharedWhyUsCards,
  sectorsTitle: {
    fr: 'Nous desservons Brossard et ses principaux secteurs',
    en: 'We serve Brossard and its main sectors',
  },
  sectorsSubtitle: {
    fr: 'Une présence locale crédible se construit aussi par la précision territoriale.',
    en: 'A credible local presence is also built on territorial precision.',
  },
  sectors: ['Secteurs A à T', 'Quartier DIX30', 'Zones résidentielles'],
  sectorsNote: {
    fr: "Nous intervenons aussi dans les zones commerciales et industrielles de Brossard selon le type de projet et l'échéancier.",
    en: 'We also work in commercial and industrial zones of Brossard depending on the project and timeline.',
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
    ...cityFaqs('Brossard', 'Brossard'),
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
    fr: "Cette page est conçue pour vous orienter vers l'information la plus utile pour votre projet.",
    en: 'This page is designed to guide you to the most useful information for your project.',
  },
  internalLinks: baseInternalLinks('Brossard', 'Brossard'),
  seoTitle: {
    fr: 'Peintre à Brossard | Résidentiel et commercial | Le Lever du Pinceau',
    en: 'Painter in Brossard | Residential and commercial | Le Lever du Pinceau',
  },
  seoDescription: {
    fr: 'Le Lever du Pinceau offre des services de peinture à Brossard pour maisons, condos et commerces. Soumission gratuite, chantier propre, peintres de métier.',
    en: 'Le Lever du Pinceau offers painting services in Brossard for homes, condos and businesses. Free quote, clean job site, professional painters.',
  },
  areaServed: ['Quartier DIX30'],
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
    fr: 'Des peintres de métier pour vos projets résidentiels et commerciaux à Saint-Lambert.',
    en: 'Professional painters for your residential and commercial projects in Saint-Lambert.',
  },
  heroBody: {
    fr: 'Maisons de caractère, plex et propriétés familiales : nous réalisons des projets propres, soignés et bien planifiés à Saint-Lambert.',
    en: 'Character homes, plexes and family properties: we deliver clean, careful and well-planned projects in Saint-Lambert.',
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
    fr: "À Saint-Lambert, la réussite d'un chantier dépend autant de la préparation que de la finition.",
    en: 'In Saint-Lambert, the success of a job depends as much on preparation as on the finish.',
  },
  checkmarks: [
    {
      fr: 'Habitués aux maisons et propriétés de caractère - Beaucoup de projets à Saint-Lambert demandent une finition soignée et une protection méticuleuse.',
      en: 'Experienced with character homes and properties - Many Saint-Lambert projects need a careful finish and meticulous protection.',
    },
    {
      fr: 'Logistique adaptée aux rues résidentielles - Accès, stationnement et circulation du matériel planifiés pour limiter le dérangement.',
      en: 'Logistics suited to residential streets - Access, parking and material flow planned to limit disruption.',
    },
    {
      fr: 'Échéancier clair pour familles et transitions - Avant vente, avant emménagement ou pendant un horaire familial serré.',
      en: 'Clear schedule for families and transitions - Before listing, before move-in or during a tight family schedule.',
    },
    {
      fr: 'Protection complète des espaces habités - Protections et nettoyage quotidien pour garder la maison utilisable.',
      en: 'Full protection of occupied spaces - Protections and daily cleanup so the home stays usable.',
    },
    {
      fr: 'Présence locale sur la Rive-Sud - Saint-Lambert, Longueuil, Brossard et environs : une équipe habituée au secteur.',
      en: 'Local South Shore presence - Saint-Lambert, Longueuil, Brossard and nearby: a team used to the area.',
    },
  ],
  contextsTitle: {
    fr: 'Des projets différents selon le type de propriété à Saint-Lambert',
    en: 'Different projects depending on the type of property in Saint-Lambert',
  },
  contextsSubtitle: {
    fr: 'Une maison familiale, un plex ou une propriété à rafraîchir avant une transition ne se gèrent pas de la même manière.',
    en: 'A family home, a plex or a property to refresh before a transition are not managed the same way.',
  },
  contexts: sharedContexts,
  beforeAfterTitle: {
    fr: 'Avant / après de projets à Saint-Lambert et sur la Rive-Sud',
    en: 'Before / after of projects in Saint-Lambert and on the South Shore',
  },
  beforeAfterSubtitle: {
    fr: 'Quelques exemples de transformations propres et bien exécutées dans la région.',
    en: 'A few examples of clean and well-executed transformations in the area.',
  },
  beforeAfterPairs: riveSudBeforeAfter,
  whyUsTitle: {
    fr: 'Une exécution fiable, propre et bien encadrée',
    en: 'Reliable, clean and well-managed execution',
  },
  whyUsSubtitle: {
    fr: "Ce que les clients veulent à Saint-Lambert, ce n'est pas seulement un beau résultat : c'est un chantier bien géré du début à la fin.",
    en: "What clients in Saint-Lambert want is not just a beautiful result: it's a job site well managed from start to finish.",
  },
  whyUsCards: sharedWhyUsCards,
  sectorsTitle: {
    fr: 'Nous desservons Saint-Lambert et les secteurs voisins',
    en: 'We serve Saint-Lambert and nearby areas',
  },
  sectorsSubtitle: {
    fr: 'Une présence locale crédible se construit aussi par la précision territoriale.',
    en: 'A credible local presence is also built on territorial precision.',
  },
  sectors: ['Centre-ville', 'Secteurs résidentiels', 'Rive-Sud voisine'],
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
    ...cityFaqs('Saint-Lambert', 'Saint-Lambert'),
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
    fr: "Cette page est conçue pour vous orienter vers l'information la plus utile pour votre projet.",
    en: 'This page is designed to guide you to the most useful information for your project.',
  },
  internalLinks: baseInternalLinks('Saint-Lambert', 'Saint-Lambert'),
  seoTitle: {
    fr: 'Peintre à Saint-Lambert | Résidentiel et commercial | Le Lever du Pinceau',
    en: 'Painter in Saint-Lambert | Residential and commercial | Le Lever du Pinceau',
  },
  seoDescription: {
    fr: 'Le Lever du Pinceau offre des services de peinture à Saint-Lambert pour maisons, plex et commerces. Soumission gratuite, chantier propre, peintres de métier.',
    en: 'Le Lever du Pinceau offers painting services in Saint-Lambert for homes, plexes and businesses. Free quote, clean job site, professional painters.',
  },
  areaServed: [],
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
    fr: 'Des peintres de métier pour vos projets résidentiels et commerciaux à La Prairie.',
    en: 'Professional painters for your residential and commercial projects in La Prairie.',
  },
  heroBody: {
    fr: 'Maisons unifamiliales, condos et espaces commerciaux : nous livrons des projets propres, rapides et bien coordonnés à La Prairie.',
    en: 'Single-family homes, condos and commercial spaces: we deliver clean, fast and well-coordinated projects in La Prairie.',
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
    fr: "À La Prairie, la réussite d'un chantier dépend autant de la planification que de la finition.",
    en: 'In La Prairie, the success of a job depends as much on planning as on the finish.',
  },
  checkmarks: [
    {
      fr: 'Habitués aux maisons unifamiliales et projets familiaux - Une grande partie des projets à La Prairie concerne des propriétés occupées ou des remises à niveau.',
      en: 'Experienced with single-family homes and family projects - Many La Prairie jobs involve occupied properties or refreshes.',
    },
    {
      fr: 'Logistique simple et bien planifiée - Accès, stationnement et séquence des pièces organisés pour un chantier fluide.',
      en: 'Simple, well-planned logistics - Access, parking and room sequencing organized for a smooth job.',
    },
    {
      fr: 'Échéancier clair pour les moments sensibles - Avant vente, avant emménagement ou entre deux occupations.',
      en: 'Clear schedule for sensitive moments - Before listing, before move-in or between occupants.',
    },
    {
      fr: 'Protection complète des espaces habités - Protections et nettoyage quotidien pour limiter les impacts au quotidien.',
      en: 'Full protection of occupied spaces - Protections and daily cleanup to limit day-to-day impact.',
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
    fr: 'Une maison familiale, un condo ou une propriété à remettre au propre avant une transition ne se gèrent pas de la même manière.',
    en: 'A family home, a condo or a property to refresh before a transition are not managed the same way.',
  },
  contexts: sharedContexts,
  beforeAfterTitle: {
    fr: 'Avant / après de projets à La Prairie et sur la Rive-Sud',
    en: 'Before / after of projects in La Prairie and on the South Shore',
  },
  beforeAfterSubtitle: {
    fr: 'Quelques exemples de transformations propres et bien exécutées dans la région.',
    en: 'A few examples of clean and well-executed transformations in the area.',
  },
  beforeAfterPairs: riveSudBeforeAfter,
  whyUsTitle: {
    fr: 'Une exécution fiable, propre et bien encadrée',
    en: 'Reliable, clean and well-managed execution',
  },
  whyUsSubtitle: {
    fr: "Ce que les clients veulent à La Prairie, ce n'est pas seulement un beau résultat : c'est un chantier bien géré du début à la fin.",
    en: "What clients in La Prairie want is not just a beautiful result: it's a job site well managed from start to finish.",
  },
  whyUsCards: sharedWhyUsCards,
  sectorsTitle: {
    fr: 'Nous desservons La Prairie et les secteurs voisins',
    en: 'We serve La Prairie and nearby areas',
  },
  sectorsSubtitle: {
    fr: 'Une présence locale crédible se construit aussi par la précision territoriale.',
    en: 'A credible local presence is also built on territorial precision.',
  },
  sectors: ['Secteurs résidentiels', 'Nouveaux développements', 'Rive-Sud voisine'],
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
    ...cityFaqs('La Prairie', 'La Prairie'),
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
    fr: "Cette page est conçue pour vous orienter vers l'information la plus utile pour votre projet.",
    en: 'This page is designed to guide you to the most useful information for your project.',
  },
  internalLinks: baseInternalLinks('La Prairie', 'La Prairie'),
  seoTitle: {
    fr: 'Peintre à La Prairie | Résidentiel et commercial | Le Lever du Pinceau',
    en: 'Painter in La Prairie | Residential and commercial | Le Lever du Pinceau',
  },
  seoDescription: {
    fr: 'Le Lever du Pinceau offre des services de peinture à La Prairie pour maisons, condos et commerces. Soumission gratuite, chantier propre, peintres de métier.',
    en: 'Le Lever du Pinceau offers painting services in La Prairie for homes, condos and businesses. Free quote, clean job site, professional painters.',
  },
  areaServed: [],
};
