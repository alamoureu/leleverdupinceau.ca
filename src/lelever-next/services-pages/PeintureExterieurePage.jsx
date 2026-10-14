import React, { Fragment } from 'react';
import { Box, useDisclosure } from '@chakra-ui/react';
import {
  FaCalendarAlt,
  FaTools,
  FaPaintBrush,
  FaTruck,
  FaShieldAlt,
  FaStar,
  FaHome,
  FaBuilding,
  FaTag,
  FaCouch,
  FaBrush,
  FaCloudRain,
  FaSearch,
  FaLayerGroup,
  FaSwimmingPool,
  FaBorderAll,
  FaCar,
  FaWindowMaximize,
  FaTh,
} from 'react-icons/fa';
import SEOHead from '../seo/SEOHead';
import HeroSection from '../home-page/HeroSection';
import { TRUST_BANNER_BELOW_PT } from '../home-page/TrustBanner';
import FAQSection from '../home-page/FAQSection';
import FeatureCardsSection from '../components/FeatureCardsSection';
import InternalLinksSection from '../components/InternalLinksSection';
import SubmissionModal from '../home-page/SubmissionModal';
import FinalCTASection from '../home-page/FinalCTASection';
import BeforeAfterCarouselSection from '../home-page/BeforeAfterCarouselSection';
import ServiceGuaranteeSection from '../home-page/ServiceGuaranteeSection';
import {
  SpecialitesSection,
  serviceBreadcrumbSchema,
  servicePageSchema,
  faqPageSchema,
} from '../components/ServicePageSections';

import heroImg from '../images/2-services/Page peinture extérieure/Photo header/IMG_0989.webp';
import plateauAvant from '../images/L3 Services X Villes/Photo page -peinture-extérieure-montréal/avant après/plateau avant.webp';
import plateauApres from '../images/L3 Services X Villes/Photo page -peinture-extérieure-montréal/avant après/plateau après.webp';
import escalierVerdunAvant from '../images/L3 Services X Villes/Photo page -peinture-extérieure-montréal/avant après/verdun avant.webp';
import escalierVerdunApres from '../images/L3 Services X Villes/Photo page -peinture-extérieure-montréal/avant après/verdun après.webp';
import terrasseAvant from '../images/L2 Services principaux/Photo page -peinture-extérieure/+Photo avant après/Peintre extérieur dans le grand Montréal, Le Lever du Pinceau a teint cette terasse sur la rive-sud de Montréal.webp';
import terrasseApres from '../images/L2 Services principaux/Photo page -peinture-extérieure/+Photo avant après/Peintre Montréal, Le Lever du Pinceau a teint cette terasse sur la rive-sud de Montréal.webp';
import cornicheAvant from '../images/L2 Services principaux/Photo page -peinture-extérieure/+Photo avant après/Peintre Montréal, Le Lever du Pinceau a peint cette cornciche dans Ville-Mont-Royal, Montréal.webp';
import cornicheApres from '../images/L2 Services principaux/Photo page -peinture-extérieure/+Photo avant après/Peintre extérieur dans le grand Montréal, Le Lever du Pinceau a peint cette cornciche dans Ville-Mont-Royal, Montréal.webp';
import escalierBalconAvant from '../images/L2 Services principaux/Photo page -peinture-extérieure/+Photo avant après/Peinture extérieure Montréal, escalier de balcon avant.webp';
import escalierBalconApres from '../images/L2 Services principaux/Photo page -peinture-extérieure/+Photo avant après/Peinture extérieure Montréal, escalier de balcon après.webp';
import porteAvant from "../images/L2 Services principaux/Photo page -peinture-extérieure/+Photo avant après/Peinture extérieure Montréal, porte d'entrée avant.webp";
import porteApres from "../images/L2 Services principaux/Photo page -peinture-extérieure/+Photo avant après/Peinture extérieure Montréal, porte d'entrée après.webp";
import revetementAvant from '../images/L2 Services principaux/Photo page -peinture-extérieure/+Photo avant après/Peinture extérieure Montréal, revêtement maison avant.webp';
import revetementApres from '../images/L2 Services principaux/Photo page -peinture-extérieure/+Photo avant après/Peinture extérieure Montréal, revêtement maison après.webp';

const CHECKMARKS_LOCAUX = [
  {
    icon: FaCalendarAlt,
    title: 'Saison extérieure courte et bien planifiée',
    text: 'À Montréal, la fenêtre utile est limitée. Le bon séquençage des travaux compte autant que l\'application elle-même.',
  },
  {
    icon: FaTools,
    title: 'Préparation adaptée au gel, au dégel et à l\'humidité',
    text: 'Les surfaces extérieures souffrent des variations de température, des infiltrations et de l\'usure. Rien ne tient sans une base solide.',
  },
  {
    icon: FaPaintBrush,
    title: 'Approche différente selon la façade et le matériau',
    text: 'Brique peinte, métal, bois, béton, escalier ou corniche : chaque surface demande une méthode précise.',
  },
  {
    icon: FaTruck,
    title: 'Gestion propre des accès et des zones serrées',
    text: 'Cour étroite, stationnement limité, voisinage rapproché, circulation sur trottoir : le chantier doit rester maîtrisé.',
  },
  {
    icon: FaShieldAlt,
    title: 'Protection du paysagement, des fenêtres et des zones de passage',
    text: 'Les projections, poussières et éclats doivent être contrôlés pour garder un chantier net.',
  },
  {
    icon: FaStar,
    title: 'Finition visible et valorisante',
    text: 'À l\'extérieur, chaque détail se voit immédiatement. L\'objectif est autant la durabilité que l\'impact visuel en façade.',
  },
];

const CONTEXTES = [
  {
    icon: FaHome,
    title: 'Triplex, plex et escaliers extérieurs métalliques',
    text: 'Montréal est rempli d\'escaliers, garde-corps et structures visibles qui demandent une préparation rigoureuse, une protection propre et une finition durable.',
  },
  {
    icon: FaBuilding,
    title: 'Façades de brique, corniches et éléments architecturaux',
    text: 'Plusieurs bâtiments ont des détails de façade très exposés. Le chantier doit protéger l\'allure du bâtiment tout en assurant une tenue réelle dans le temps.',
  },
  {
    icon: FaHome,
    title: 'Maisons unifamiliales avec revêtement et cadrages',
    text: 'Le revêtement, les soffites, les cadrages et les portes doivent être harmonisés sans transformer le chantier en projet interminable.',
  },
  {
    icon: FaCouch,
    title: 'Balcons, galeries et zones de passage',
    text: 'Ces surfaces sont fortement sollicitées et très visibles. L\'adhérence, la préparation et le choix du bon fini sont décisifs.',
  },
  {
    icon: FaTag,
    title: 'Travaux avant vente ou rafraîchissement extérieur',
    text: 'Une façade ou un escalier extérieur bien repeint améliore immédiatement l\'impression générale de la propriété et la perception d\'entretien.',
  },
];

const CHECKMARKS_TECHNIQUES = [
  {
    icon: FaBrush,
    title: 'Préparation adaptée aux conditions extérieures',
    text: 'Nettoyage haute pression, sablage, décapage, rebouchage et calfeutrage selon le type de matériau et son état avant peinture.',
  },
  {
    icon: FaCloudRain,
    title: 'Produits conçus pour le climat québécois',
    text: 'Cycles de gel-dégel, UV intenses, humidité saisonnière : les produits extérieurs doivent résister à des conditions que les peintures intérieures ne subissent pas.',
  },
  {
    icon: FaSearch,
    title: 'Inspection avant application',
    text: 'Vérification de l\'état du substrat, des joints, de la fixation et de la présence d\'humidité emprisonnée avant toute application.',
  },
  {
    icon: FaTools,
    title: 'Application selon la surface',
    text: 'Rouleau, pinceau ou pistolet airless selon le type de surface. La méthode d\'application influe directement sur la durabilité et l\'adhérence.',
  },
  {
    icon: FaShieldAlt,
    title: 'Protection du chantier et des surfaces voisines',
    text: 'Masquage, toiles et protection des surfaces adjacentes. Nettoyage complet à la fin de chaque journée de travail.',
  },
  {
    icon: FaLayerGroup,
    title: 'Respect des conditions météorologiques',
    text: 'Température minimale, humidité relative et prévisions de pluie sont vérifiées avant chaque application pour garantir l\'adhérence du produit.',
  },
];

const SPECIALITES = [
  {
    icon: FaHome,
    title: 'Revêtement extérieur',
    text: 'Bois, aluminium, vinyle ou maçonnerie : chaque matériau exige un produit et une technique adaptés pour assurer l\'adhérence et la longévité.',
  },
  {
    icon: FaSwimmingPool,
    title: 'Balcon et patio',
    text: 'Surfaces exposées à l\'usure fréquente, à l\'eau et aux UV. Peinture ou teinture selon le matériau, avec protection renforcée.',
  },
  {
    icon: FaBorderAll,
    title: 'Clôture en bois',
    text: 'Teinture ou peinture adaptée au bois exposé. Protection contre le grisaillement, les UV et l\'humidité.',
  },
  {
    icon: FaCar,
    title: 'Porte de garage',
    text: 'Surface très visible et exposée. Préparation soignée du métal ou du bois, apprêt adhérant et peinture résistante aux intempéries.',
  },
  {
    icon: FaBuilding,
    title: 'Fondation',
    text: 'Peinture hydrofuge spécialisée pour béton ou blocs. Application en conditions optimales pour limiter l\'infiltration d\'humidité.',
  },
  {
    icon: FaWindowMaximize,
    title: 'Fenêtres et cadrages',
    text: 'Boiseries extérieures, dormants et cadrages en bois ou aluminium. Découpes nettes, fini durable et protection contre les éléments.',
  },
  {
    icon: FaTh,
    title: 'Brique et maçonnerie',
    text: 'Teinture ou peinture spécialisée pour brique. Application délicate qui demande un produit respirant pour éviter le cloquage.',
  },
  {
    icon: FaTools,
    title: 'Fer forgé et métal',
    text: 'Sablage, traitement antirouille, apprêt métal et peinture adaptée. Pour rampes, escaliers et garde-corps extérieurs.',
  },
];

const FAQS = [
  {
    question: 'Quelle est la meilleure période pour faire de la peinture extérieure à Montréal\u00A0?',
    answer: 'En général, la meilleure période se situe entre le printemps avancé et le début de l\'automne, quand la température, l\'humidité et les précipitations permettent une bonne adhérence et un bon séchage.',
  },
  {
    question: 'Peignez-vous les escaliers extérieurs, garde-corps et balcons à Montréal\u00A0?',
    answer: 'Oui. Ce sont des projets fréquents. Ces surfaces demandent souvent une préparation plus poussée, surtout lorsqu\'elles sont très exposées ou fortement sollicitées.',
  },
  {
    question: 'Intervenez-vous sur des triplex, plex et façades montréalaises plus anciennes\u00A0?',
    answer: 'Oui. Nous adaptons la planification et la méthode selon le bâtiment, l\'accès, la hauteur, les matériaux et le niveau d\'usure visible sur la façade.',
  },
  {
    question: 'Comment gérez-vous les accès, les zones étroites et le voisinage rapproché\u00A0?',
    answer: 'Ces éléments font partie intégrante de la planification. L\'objectif est de garder un chantier propre, sécuritaire et fluide même dans des contextes urbains serrés.',
  },
  {
    question: 'Faites-vous aussi la teinture extérieure ou seulement la peinture\u00A0?',
    answer: 'Nous faisons les deux, selon la surface et le résultat recherché. La teinture extérieure a aussi sa propre page dédiée lorsqu\'il s\'agit surtout de bois, patios, clôtures ou pergolas.',
  },
  {
    question: 'Quelle saison est la meilleure pour peindre l\'extérieur\u00A0?',
    answer: 'Les conditions idéales se trouvent généralement au printemps et à l\'automne, avec des températures entre 10 et 30°C et un taux d\'humidité raisonnable. L\'été peut convenir si la chaleur n\'est pas trop intense. Il faut éviter d\'appliquer de la peinture sous la pluie ou lorsque des précipitations sont prévues dans les 24 heures.',
  },
  {
    question: 'Est-ce que vous travaillez sur les maisons en brique\u00A0?',
    answer: 'Oui. La peinture ou la teinture sur brique demande des produits spécialisés qui permettent au matériau de respirer. Une brique mal peinte peut retenir l\'humidité et causer des problèmes à long terme. Nous évaluons l\'état de la brique avant de recommander une approche.',
  },
  {
    question: 'Combien de temps dure une peinture extérieure au Québec\u00A0?',
    answer: 'Avec une bonne préparation et des produits de qualité, une peinture extérieure peut tenir entre 5 et 10 ans selon les conditions d\'exposition. Les surfaces orientées au sud (plus de soleil direct) demandent souvent un entretien plus fréquent.',
  },
  {
    question: 'Comment préparez-vous les surfaces avant la peinture extérieure\u00A0?',
    answer: 'La préparation varie selon le matériau : nettoyage haute pression, sablage, décapage de l\'ancienne peinture écaillée, rebouchage des fissures, calfeutrage des joints et application d\'un apprêt adapté. Cette étape est souvent plus longue que l\'application elle-même, et elle détermine la durabilité du résultat.',
  },
];

const INTERNAL_LINKS = [
  {
    title: 'Peinture intérieure',
    description: 'Murs, plafonds, boiseries et armoires - techniques et produits.',
    to: '/services/peinture-interieure',
  },
  {
    title: 'Teinture extérieure',
    description: 'Protection du bois, patios, clôtures, pergolas et surfaces en bois.',
    to: '/services/teinture-exterieure',
  },
  {
    title: 'Préparation de surfaces',
    description: 'Décapage, sablage, calfeutrage et remise en état avant peinture.',
    to: '/services/preparation-de-surfaces',
  },
  {
    title: 'Peinture résidentielle',
    description: 'Maisons, condos et logements - l\'ensemble de nos services résidentiels.',
    to: '/services/peinture-residentielle',
  },
  {
    title: 'Pourquoi choisir un peintre professionnel\u00A0?',
    description: 'Licence RBQ, assurance, expertise - ce qui fait la différence.',
    to: '/peintre-professionnel',
  },
  {
    title: 'Nos secteurs desservis à Montréal',
    description: 'Plateau, Ville-Marie, Outremont, Westmount et Grand Montréal.',
    to: '/secteurs/montreal',
  },
  {
    title: 'Nos réalisations',
    description: 'Avant / après de projets réels pour juger la finition extérieure.',
    to: '/realisations',
  },
];

const carouselImages = [
  { before: plateauAvant, after: plateauApres, description: 'Clôture en bois - Plateau Mont-Royal' },
  { before: escalierVerdunAvant, after: escalierVerdunApres, description: 'Peinture escalier fer forgé - Verdun' },
  { before: terrasseAvant, after: terrasseApres, description: 'Teinture terrasse bois - Rive-Sud de Montréal' },
  { before: cornicheAvant, after: cornicheApres, description: 'Peinture corniche - Ville Mont-Royal, Montréal' },
  { before: escalierBalconAvant, after: escalierBalconApres, description: 'Peinture escalier de balcon - marches et rampes' },
  { before: porteAvant, after: porteApres, description: 'Peinture porte d\'entrée - décapage et fini lustré' },
  { before: revetementAvant, after: revetementApres, description: 'Peinture revêtement extérieur - maison complète' },

];

export default function PeintureExterieurePage() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Fragment>
      <SEOHead
        title="Peinture extérieure à Montréal | Façades et balcons | Le Lever du Pinceau"
        description="Peinture extérieure à Montréal : façades, balcons, escaliers, revêtements et corniches. Produits adaptés au climat québécois, licence RBQ, soumission gratuite."
        canonicalPath="/services/peinture-exterieure"
        schemaArray={[
          serviceBreadcrumbSchema('Peinture extérieure', '/services/peinture-exterieure'),
          faqPageSchema(FAQS),
          servicePageSchema({
            name: 'Peinture extérieure à Montréal',
            path: '/services/peinture-exterieure',
            description:
              'Service de peinture extérieure à Montréal pour façades, balcons, escaliers, revêtements et corniches. Équipe RBQ, chantier propre et soumission gratuite.',
            serviceType: 'Peinture extérieure',
          }),
        ]}
      />

      <Box w="100%" minW={0} bg="white" overflowX="hidden">
        <HeroSection
          onSubmissionOpen={onOpen}
          pageContext="Peinture extérieure"
          imageBackground={heroImg}
          imageAlt="Peinture extérieure à Montréal - peintre du Lever du Pinceau qui prépare une corniche"
          overlayBg="rgba(0, 0, 0, 0.50)"
          title="Peinture extérieure à Montréal"
          subtitle="Façades, balcons, escaliers, corniches et revêtements"
          description="Des surfaces peintes pour résister au climat montréalais."
          buttonText="Obtenir ma soumission gratuite"
          breadcrumb={[
            { label: 'Accueil', to: '/' },
            { label: 'Services', to: '/services' },
            { label: 'Peinture extérieure' },
          ]}
        />

        <FeatureCardsSection
          sectionPaddingTop={TRUST_BANNER_BELOW_PT}
          title="Une exécution pensée pour l'extérieur à Montréal"
          subtitle="Le climat, les matériaux et les contraintes urbaines changent complètement la manière de planifier un chantier extérieur."
          items={CHECKMARKS_LOCAUX}
          variant="inline"
        />

        <FeatureCardsSection
          title="Une approche différente selon le type de bâtiment à Montréal"
          subtitle="Un triplex à escaliers métalliques, une façade à Ville Mont-Royal ou une maison de rangée ne se peignent pas de la même façon."
          items={CONTEXTES}
          variant="stacked"
          sectionBg="gray.50"
          columns={{ base: 1, sm: 2, md: 3 }}
        />

        <BeforeAfterCarouselSection
          isFr={true}
          title="Avant / après de projets extérieurs à Montréal"
          subtitle="Des réalisations qui montrent la qualité du fini et la diversité des contextes urbains."
          images={carouselImages}
          sectionPaddingTop={{ base: 16, md: 20, lg: 24 }}
          sectionPaddingBottom={{ base: 6, md: 8 }}
        />

        <ServiceGuaranteeSection
          body="Un projet extérieur bien réalisé, c'est une protection durable pour votre propriété. Nous travaillons avec les bons produits, aux bonnes conditions, et nous assumons le résultat."
          onCtaClick={onOpen}
          note="Réponse généralement en moins de 24h"
        />

        <FeatureCardsSection
          title="Ce qui distingue notre peinture extérieure à Montréal"
          subtitle="La durabilité d'une peinture extérieure dépend autant de la préparation que du produit appliqué"
          items={CHECKMARKS_TECHNIQUES}
          variant="inline"
        />

        <SpecialitesSection
          title="Nos spécialités en peinture extérieure"
          subtitle="Chaque surface extérieure demande une approche spécifique"
          items={SPECIALITES}
        />

        <FAQSection title="Questions fréquentes sur la peinture extérieure à Montréal" faqsOverride={FAQS} emitSchema={false} />

        <InternalLinksSection title="Services connexes" links={INTERNAL_LINKS} />

        <FinalCTASection
          title={'Prêt à rafraîchir votre extérieur à Montréal\u00A0?'}
          subtitle="Obtenez une soumission gratuite pour votre projet de peinture extérieure à Montréal"
          buttonText="Obtenir ma soumission gratuite"
          onSubmissionOpen={onOpen}
        />
      </Box>

      <SubmissionModal isOpen={isOpen} onClose={onClose} />
    </Fragment>
  );
}
