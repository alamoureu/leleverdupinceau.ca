import React, { Fragment } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Button,
  Flex,
  Link,
  Icon,
  HStack,
  Image,
  useDisclosure,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import {
  FaIndustry,
  FaShieldAlt,
  FaTools,
  FaFlask,
  FaHardHat,
  FaLayerGroup,
  FaWarehouse,
  FaWrench,
  FaMapMarkedAlt,
  FaSprayCan,
} from 'react-icons/fa';
import SEOHead from '../seo/SEOHead';
import { servicePageSchema } from '../components/ServicePageSections';
import HeroSection from '../home-page/HeroSection';
import { TRUST_BANNER_BELOW_PT } from '../home-page/TrustBanner';
import SubmissionModal from '../home-page/SubmissionModal';
import FinalCTASection from '../home-page/FinalCTASection';
import BeforeAfterCarouselSection from '../home-page/BeforeAfterCarouselSection';
import FAQSection from '../home-page/FAQSection';
import FeatureCardsSection from '../components/FeatureCardsSection';
import InternalLinksSection from '../components/InternalLinksSection';

import industrielleImg1 from '../images/L2 Services principaux/Photo page -peinture-industrielle/Peintre Montréal, Le Lever du Pinceau a peint ce plafond en steel deck en mur à Montréal est.webp';
import industrielleImg2 from '../images/L2 Services principaux/Photo page -peinture-industrielle/Peintre industrielle à Montréal, Le Lever du Pinceau a peinturé au spray ce plafond en steel deck à Montréal.webp';
import industrielleImg3 from '../images/L2 Services principaux/Photo page -peinture-industrielle/Peintre Montréal, Le Lever du Pinceau a peinturé au spray l_extérieure de cette usine sur la rive nord de Montréal.webp';
import industrielleImg4 from '../images/L2 Services principaux/Photo page -peinture-industrielle/Peintre industrielle dans le grand Montréal, Le Lever du Pinceau a peinturé au spray l_extérieure de cette usine à Laval.webp';
import industrielleImg6 from '../images/L2 Services principaux/Photo page -peinture-industrielle/Peintre professionnel sur l_île de Montréal, Le Lever du Pinceau a peinturé au spray ce plafond en steel deck en mur à Montréal.webp';
import ServiceGuaranteeSection from '../home-page/ServiceGuaranteeSection';

const HERO_BREADCRUMB = [
  { label: 'Accueil', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Peinture industrielle' },
];

const CHECKMARKS = [
  {
    icon: FaIndustry,
    title: 'Revêtements adaptés aux conditions industrielles',
    text: 'Époxy, uréthane, peinture résistante aux produits chimiques, aux chocs et à l\'usure intensive. Pas les mêmes produits qu\'en résidentiel.',
  },
  {
    icon: FaHardHat,
    title: 'Application au pistolet airless',
    text: 'Pour couvrir de grandes surfaces rapidement et uniformément - plafonds steel deck, structures métalliques, murs de béton.',
  },
  {
    icon: FaShieldAlt,
    title: 'Sécurité et conformité sur le chantier industriel',
    text: 'Équipements de protection, ventilation, gestion des produits chimiques. Nos équipes sont formées pour travailler en environnement industriel.',
  },
  {
    icon: FaTools,
    title: 'Préparation des surfaces métalliques',
    text: 'Sablage, traitement antirouille, apprêt d\'adhérence. Une surface métallique mal préparée ne retient pas la peinture.',
  },
  {
    icon: FaLayerGroup,
    title: 'Systèmes multicouches pour la durabilité',
    text: 'Fond de teinte, couche intermédiaire et finition : les applications industrielles demandent des systèmes de peinture complets.',
  },
  {
    icon: FaFlask,
    title: 'Produits conformes aux normes',
    text: 'Peintures à faible teneur en COV disponibles, conformité aux normes environnementales et de santé au travail selon les exigences du site.',
  },
];

const SPECIALITES = [
  {
    icon: FaWarehouse,
    title: 'Entrepôt et usine',
    text: 'Murs, plafonds steel deck et colonnes. Application au pistolet pour couvrir rapidement de grandes surfaces avec un fini uniforme, en planifiant l\'accès et la sécurité du site.',
    link: null,
  },
  {
    icon: FaLayerGroup,
    title: 'Plancher époxy',
    text: 'Revêtement époxy pour planchers industriels - résistance aux impacts, aux produits chimiques et à l\'usure du trafic lourd, avec délais de remise en service intégrés au calendrier.',
    link: null,
  },
  {
    icon: FaWrench,
    title: 'Structures métalliques',
    text: 'Poutrelles, charpentes, équipements et surfaces métalliques. Traitement antirouille, apprêt et finition adaptés pour une adhérence durable en milieu exigeant.',
    link: null,
  },
  {
    icon: FaMapMarkedAlt,
    title: 'Marquage au sol',
    text: 'Lignes de circulation, zones de sécurité, allées de chariot élévateur. Peinture ou époxy selon les exigences du site et le type de trafic prévu.',
    link: null,
  },
  {
    icon: FaSprayCan,
    title: 'Extérieur d\'usine et de bâtiment industriel',
    text: 'Revêtements extérieurs résistants aux intempéries et aux cycles gel-dégel du Québec pour les bâtiments industriels et les façades exposées.',
    link: null,
  },
  {
    icon: FaIndustry,
    title: 'Stationnement et garage',
    text: 'Plancher en béton, murs et colonnes de stationnement. Revêtements résistants à l\'usure, aux sels et aux produits pétroliers, avec phasage pour limiter la fermeture.',
    link: null,
  },
];

const FAQS = [
  {
    question: 'Quelle est la différence entre une peinture industrielle et une peinture commerciale\u00A0?',
    answer: 'Les peintures industrielles sont formulées pour résister à des conditions plus exigeantes : produits chimiques, chaleur, usure mécanique intense, exposition prolongée aux intempéries. Elles utilisent souvent des systèmes multicouches (époxy, uréthane) et demandent une préparation de surface plus poussée.',
  },
  {
    question: 'Pouvez-vous peindre des plafonds steel deck très hauts\u00A0?',
    answer: 'Oui. Nous disposons de l\'équipement nécessaire pour les grandes hauteurs : échafaudages, plateformes élévatrices et pistolets airless à long portée. La planification de l\'accès fait partie de notre soumission.',
  },
  {
    question: 'Est-ce que vous faites du marquage au sol dans les entrepôts\u00A0?',
    answer: 'Oui. Nous réalisons le traçage et le marquage au sol selon vos plans : lignes de sécurité, zones de circulation, emplacements de stockage. Nous utilisons des peintures durables ou de l\'époxy selon les contraintes du plancher et du trafic.',
  },
  {
    question: 'Combien de temps faut-il pour le séchage d\'un plancher époxy\u00A0?',
    answer: 'Le temps de séchage varie selon le système époxy utilisé, la température ambiante et le taux d\'humidité. En général, le retour à la marche se fait en 24 à 48 heures, et le retour au trafic lourd après 5 à 7 jours. Ces délais sont intégrés à la planification du chantier.',
  },
];

const INTERNAL_LINKS = [
  {
    title: 'Peinture commerciale',
    description: 'Bureau, restaurant, commerce - travaux hors heures et délais serrés.',
    to: '/services/peinture-commerciale',
  },
  {
    title: 'Peinture au pistolet',
    description: 'Application airless pour grands espaces industriels et commerciaux.',
    to: '/services/peinture-au-pistolet',
  },
  {
    title: 'Préparation de surfaces',
    description: 'Sablage, décapage et apprêt - fondation du travail industriel.',
    to: '/services/preparation-de-surfaces',
  },
  {
    title: 'Pourquoi choisir un peintre professionnel\u00A0?',
    description: 'Licence RBQ, assurance, expertise - ce qui fait la différence.',
    to: '/peintre-professionnel',
  },
];

export default function PeintureIndustriellePage() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Accueil',
        item: 'https://leleverdupinceau.ca/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Services',
        item: 'https://leleverdupinceau.ca/services',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Peinture industrielle',
        item: 'https://leleverdupinceau.ca/services/peinture-industrielle',
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const carouselImages = [
    {
      before: industrielleImg1,
      after: industrielleImg6,
      description: 'Peinture murs et plancher - entrepôt Montréal Est',
    },
    {
      before: industrielleImg3,
      after: industrielleImg4,
      description: 'Peinture extérieure usine au pistolet - Rive-Nord de Montréal',
    },
];

  return (
    <Fragment>
      <SEOHead
        title="Peinture industrielle à Montréal | Le Lever du Pinceau"
        description="Service de peinture industrielle à Montréal. Entrepôt, usine, plancher époxy, structures métalliques, marquage au sol. Application au pistolet airless. Licence RBQ. Soumission gratuite."
        canonicalPath="/services/peinture-industrielle"
        schemaArray={[
          breadcrumbSchema,
          faqSchema,
          servicePageSchema({
            name: 'Peinture industrielle à Montréal',
            path: '/services/peinture-industrielle',
            description:
              'Service de peinture industrielle à Montréal. Entrepôt, usine, plancher époxy, structures métalliques, marquage au sol. Application au pistolet airless. Licence RBQ.',
            serviceType: 'Peinture industrielle',
          }),
        ]}
      />

      <Box w="100%" minW={0} bg="white" overflowX="hidden">

        <HeroSection
          onSubmissionOpen={onOpen}
          pageContext='Peinture industrielle'
          imageBackground={industrielleImg2}
          imageAlt='Peinture industrielle à Montréal - plafond steel deck au pistolet airless'
          overlayBg='rgba(0, 0, 0, 0.60)'
          title='Peinture industrielle à Montréal'
          subtitle='Entrepôt, usine, stationnement.'
          description='Revêtements spécialisés et application au pistolet airless.'
          buttonText='Obtenir ma soumission gratuite'
          breadcrumb={HERO_BREADCRUMB}
        />
{/* ===== SECTION 3 - CHECKMARKS ===== */}
        <FeatureCardsSection
          sectionPaddingTop={TRUST_BANNER_BELOW_PT}
          title="Ce qui distingue notre approche industrielle"
          subtitle="La peinture industrielle n'est pas de la peinture résidentielle appliquée dans une usine - c'est une spécialité à part entière"
          items={CHECKMARKS}
          variant="inline"
          sectionBg="white"
        />

        {/* ===== SECTION 4 - SPÉCIALITÉS ===== */}
        <FeatureCardsSection
          title="Nos spécialités en peinture industrielle"
          subtitle="Des revêtements adaptés aux surfaces et aux contraintes de chaque environnement industriel"
          items={SPECIALITES}
          variant="stacked"
          sectionBg="gray.50"
          columns={{ base: 1, sm: 2, md: 3 }}
        />


        {/* ===== SECTION 5 - AVANT / APRÈS ===== */}
        <BeforeAfterCarouselSection
          isFr={true}
          title="Exemples de projets industriels réalisés"
          subtitle="Plafonds steel deck, usines et entrepôts - des travaux réalisés avec le bon équipement et les bons produits."
          images={carouselImages}
          sectionPaddingTop={{ base: 16, md: 20, lg: 24 }}
          sectionPaddingBottom={{ base: 6, md: 8 }}
        />

        {/* ===== SECTION 6 - GARANTIE + CTA MID-PAGE ===== */}
        <ServiceGuaranteeSection
          body="En industriel, un revêtement qui écaille ou un plancher qui s'use prématurément coûte cher à refaire. Nous utilisons les bons produits, au bon endroit, avec la bonne préparation pour que le résultat dure."
          onCtaClick={onOpen}
        />

        <FAQSection
          title="Questions fréquentes sur la peinture industrielle"
          faqsOverride={FAQS}
          sectionBg="white"
          sectionPy={{ base: 16, md: 20, lg: 24 }}
          maxW="900px"
          emitSchema={false}
        />

        <InternalLinksSection
          title="Services connexes"
          links={INTERNAL_LINKS}
          columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
        />

        <FinalCTASection
          onSubmissionOpen={onOpen}
          title={'Prêt à planifier votre projet industriel\u00A0?'}
          subtitle={'Soumission gratuite en moins de 24h'}
          buttonText={'Obtenir ma soumission gratuite'}
        />

      </Box>

      <SubmissionModal isOpen={isOpen} onClose={onClose} />
    </Fragment>
  );
}
