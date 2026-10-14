import React, { Fragment } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Button,
  Link,
  HStack,
  Image,
  useDisclosure,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import {
  FaClock,
  FaShieldAlt,
  FaCalendarAlt,
  FaFileAlt,
  FaBriefcase,
  FaTools,
  FaBuilding,
  FaUtensils,
  FaShoppingBag,
  FaDoorOpen,
  FaChild,
} from 'react-icons/fa';
import SEOHead from '../seo/SEOHead';
import HeroSection from '../home-page/HeroSection';
import { TRUST_BANNER_BELOW_PT } from '../home-page/TrustBanner';
import SubmissionModal from '../home-page/SubmissionModal';
import FinalCTASection from '../home-page/FinalCTASection';
import BeforeAfterCarouselSection from '../home-page/BeforeAfterCarouselSection';
import FAQSection from '../home-page/FAQSection';
import FeatureCardsSection from '../components/FeatureCardsSection';
import InternalLinksSection from '../components/InternalLinksSection';
import ServiceGuaranteeSection from '../home-page/ServiceGuaranteeSection';
import { servicePageSchema } from '../components/ServicePageSections';

import commercialeHeroImg from '../images/2-services/Page peinture commerciale/1. réalisations/IMG_6760.webp';

import bureauAvant from '../images/L2 Services principaux/Photo page -peinture-commerciale/Peintre commercial dans le grand Montréal, Le Lever du Pinceau a peint ce bureau commerciale au centre ville de Montréal.webp';
import bureauApres from '../images/L2 Services principaux/Photo page -peinture-commerciale/Peintre professionnel commercial à Montréal, Le Lever du Pinceau a complété ce bureau commerciale au centre ville.webp';
import localNdgAvant from '../images/L2 Services principaux/Photo page -peinture-commerciale/Peintre Montréal de profession, Le Lever du Pinceau a peinturé ce local commercial dans NDG, Montréal.webp';
import localNdgApres from '../images/L2 Services principaux/Photo page -peinture-commerciale/Peintre Montréal professionnel, Le Lever du Pinceau a peinturé ce local commercial dans le quartier Notre-dame-de-grâce, Mtl.webp';
import steelDeckAvant from '../images/L2 Services principaux/Photo page -peinture-industrielle/Peintre industrielle à Montréal, Le Lever du Pinceau a peinturé au spray ce plafond en steel deck à Montréal.webp';
import steelDeckApres from '../images/L2 Services principaux/Photo page -peinture-industrielle/Peintre professionnel Montréal, Le Lever du Pinceau a peinturé au spray ce plafond en steel deck à Montréal.webp';

const HERO_BREADCRUMB = [
  { label: 'Accueil', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Peinture commerciale' },
];

const CHECKMARKS = [
  {
    icon: FaClock,
    title: 'Travaux hors heures d\'affaires',
    text: 'Soir, nuit, fin de semaine. Nous adaptons notre horaire au vôtre pour que vos opérations ne soient jamais interrompues.',
  },
  {
    icon: FaCalendarAlt,
    title: 'Respect strict de l\'échéancier',
    text: 'En commercial, les délais sont non négociables. Un chantier qui traîne coûte de l\'argent. Nous livrons selon le calendrier convenu.',
  },
  {
    icon: FaShieldAlt,
    title: 'Protection du matériel et des stocks',
    text: 'Mobilier, équipements, inventaire et surfaces sont protégés avec les bons matériaux. Aucune trace, aucun dommage.',
  },
  {
    icon: FaFileAlt,
    title: 'Soumission détaillée pour vos dossiers',
    text: 'Devis précis, documentation complète et factures conformes pour vos besoins administratifs ou de gestion immobilière.',
  },
  {
    icon: FaBriefcase,
    title: 'Présentation professionnelle sur place',
    text: 'Nos équipes arrivent préparées, en uniforme et avec le matériel complet. L\'image de notre chantier respecte l\'image de votre commerce.',
  },
  {
    icon: FaTools,
    title: 'Finitions adaptées aux espaces commerciaux',
    text: 'Peintures lavables, résistantes à l\'usure, anti-marquage. Les espaces commerciaux subissent plus d\'usure que les espaces résidentiels.',
  },
];

const SPECIALITES = [
  {
    icon: FaBriefcase,
    title: 'Bureau et espace de travail',
    text: 'Réfection complète ou rafraîchissement ciblé. Peinture lavable et résistante, couleurs corporatives ou neutres selon vos standards. Travaux souvent planifiés le soir ou la fin de semaine pour ne pas freiner les équipes en place.',
    link: null,
  },
  {
    icon: FaUtensils,
    title: 'Restaurant et espace de restauration',
    text: 'Environnement exigeant : humidité, chaleur, graisses. Produits adaptés, travail réalisé en dehors des heures de service, avec protection du matériel de cuisine et un chantier prêt pour la réouverture.',
    link: null,
  },
  {
    icon: FaShoppingBag,
    title: 'Commerce de détail et boutique',
    text: 'Mise en valeur de l\'espace de vente, couleurs de marque, finitions nettes. Travaux planifiés pour minimiser la fermeture et permettre une réouverture propre dès que possible.',
    link: null,
  },
  {
    icon: FaDoorOpen,
    title: 'Hall d\'entrée et espaces communs',
    text: 'Première impression de votre immeuble ou commerce. Finitions soignées, peintures résistantes au frottement et aux impacts, avec un chantier discret pour les usagers.',
    link: null,
  },
  {
    icon: FaChild,
    title: 'Garderie et établissement scolaire',
    text: 'Peintures sans COV, couleurs adaptées à l\'environnement enfant, respect des normes de santé et de sécurité, et calendrier calé sur les périodes de fermeture.',
    link: null,
  },
  {
    icon: FaBuilding,
    title: 'Immeuble à bureaux et copropriété commerciale',
    text: 'Gestion multi-locaux, coordination avec la régie et travaux par phases pour maintenir les opérations en cours sans bloquer les locataires.',
    link: null,
  },
];

const FAQS = [
  {
    question: 'Pouvez-vous travailler le soir ou la fin de semaine pour éviter de perturber nos opérations\u00A0?',
    answer: 'Oui. Nous travaillons selon vos contraintes d\'exploitation. Les travaux peuvent être réalisés en soirée, la nuit ou pendant les fins de semaine pour que votre commerce ne soit jamais fermé à cause d\'un chantier.',
  },
  {
    question: 'Fournissez-vous une documentation pour nos dossiers ou pour la gestion immobilière\u00A0?',
    answer: 'Oui. Nous fournissons une soumission détaillée, un rapport de travaux complété et des factures conformes à vos besoins. Si vous devez transmettre les informations à un gestionnaire ou à votre propriétaire, nous vous outillons pour ça.',
  },
  {
    question: 'Quelles peintures utilisez-vous pour les espaces commerciaux\u00A0?',
    answer: 'Nous privilégions des peintures lavables et résistantes à l\'usure pour les espaces commerciaux. Selon l\'usage du local, nous recommandons des finis semi-brillants ou satinés qui facilitent l\'entretien et résistent mieux aux frottements et aux impacts.',
  },
  {
    question: 'Intervenez-vous aussi dans les immeubles à logements ou les copropriétés mixtes\u00A0?',
    answer: 'Oui. Nous gérons aussi la peinture des espaces communs, halls d\'entrée, corridors et stationnements dans les immeubles résidentiels ou à usage mixte. La coordination avec les gestionnaires fait partie de notre approche.',
  },
];

const INTERNAL_LINKS = [
  {
    title: 'Peinture industrielle',
    description: 'Entrepôt, usine, stationnement - époxy et revêtements résistants.',
    to: '/services/peinture-industrielle',
  },
  {
    title: 'Peinture résidentielle',
    description: 'Maisons, condos et appartements - chantier propre et horaires flexibles.',
    to: '/services/peinture-residentielle',
  },
  {
    title: 'Peinture au pistolet',
    description: 'Application airless pour grands espaces commerciaux.',
    to: '/services/peinture-au-pistolet',
  },
  {
    title: 'Préparation de surfaces',
    description: 'Sablage, rebouchage, calfeutrage et apprêt avant peinture.',
    to: '/services/preparation-de-surfaces',
  },
  {
    title: 'Pourquoi choisir un peintre professionnel\u00A0?',
    description: 'Licence RBQ, assurance, expertise - ce qui fait la différence.',
    to: '/peintre-professionnel',
  },
  {
    title: 'Nos secteurs desservis',
    description: 'Montréal, Laval, Longueuil et la Rive-Sud.',
    to: '/secteurs',
  },
];

export default function PeintureCommercialePage() {
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
        name: 'Peinture commerciale',
        item: 'https://leleverdupinceau.ca/services/peinture-commerciale',
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
    { before: bureauAvant, after: bureauApres, description: 'Peinture bureau commercial - centre-ville Montréal' },
    
    { before: localNdgAvant, after: localNdgApres, description: 'Peinture local commercial - NDG, Montréal' },
    { before: steelDeckAvant, after: steelDeckApres, description: 'Plafond steel deck peint au pistolet - commercial' },
];

  return (
    <Fragment>
      <SEOHead
        title="Peinture commerciale à Montréal | Bureau, restaurant, commerce | Le Lever du Pinceau"
        description="Service de peinture commerciale à Montréal. Bureau, restaurant, commerce, garderie. Travaux hors heures, respect des délais, finitions durables. Licence RBQ. Soumission gratuite."
        canonicalPath="/services/peinture-commerciale"
        schemaArray={[
          breadcrumbSchema,
          faqSchema,
          servicePageSchema({
            name: 'Peinture commerciale à Montréal',
            path: '/services/peinture-commerciale',
            description:
              'Service de peinture commerciale à Montréal. Bureau, restaurant, commerce, garderie. Travaux hors heures, respect des délais, finitions durables. Licence RBQ.',
            serviceType: 'Peinture commerciale',
          }),
        ]}
      />

      <Box w="100%" minW={0} bg="white" overflowX="hidden">

        <HeroSection
          onSubmissionOpen={onOpen}
          pageContext='Peinture commerciale'
          imageBackground={commercialeHeroImg}
          imageAlt='Peinture commerciale à Montréal - bureau et espace commercial professionnel'
          overlayBg='rgba(0, 0, 0, 0.55)'
          title='Peinture commerciale à Montréal'
          subtitle='Bureau, restaurant, commerce.'
          description='Travaux hors heures, délais respectés, sans perturbation.'
          buttonText='Obtenir ma soumission gratuite'
          breadcrumb={HERO_BREADCRUMB}
        />
{/* ===== SECTION 3 - CHECKMARKS ===== */}
        <FeatureCardsSection
          sectionPaddingTop={TRUST_BANNER_BELOW_PT}
          title="Ce que signifie travailler en milieu commercial"
          subtitle="Un chantier commercial se gère différemment - délais serrés, contraintes d'exploitation et exigences de présentation"
          items={CHECKMARKS}
          variant="inline"
          sectionBg="white"
        />

        {/* ===== SECTION 4 - SPÉCIALITÉS ===== */}
        <FeatureCardsSection
          title="Nos spécialités en peinture commerciale"
          subtitle="Chaque type d'espace commercial a ses exigences propres"
          items={SPECIALITES}
          variant="stacked"
          sectionBg="gray.50"
          columns={{ base: 1, sm: 2, md: 3 }}
        />


        {/* ===== SECTION 5 - AVANT / APRÈS ===== */}
        <BeforeAfterCarouselSection
          isFr={true}
          title="Exemples de projets commerciaux réalisés"
          subtitle="Bureaux, commerces et espaces de travail - des chantiers menés selon vos contraintes d'exploitation."
          images={carouselImages}
          sectionPaddingTop={{ base: 16, md: 20, lg: 24 }}
          sectionPaddingBottom={{ base: 6, md: 8 }}
        />

        {/* ===== SECTION 6 - GARANTIE + CTA MID-PAGE ===== */}
        <ServiceGuaranteeSection
          body="En commercial, un chantier raté coûte plus qu'une deuxième couche de peinture. Nous assumons la qualité de notre travail et nous revenons corriger sans frais si le résultat n'est pas à la hauteur."
          onCtaClick={onOpen}
        />

        <FAQSection
          title="Questions fréquentes sur la peinture commerciale"
          faqsOverride={FAQS}
          sectionBg="white"
          sectionPy={{ base: 16, md: 20, lg: 24 }}
          maxW="900px"
          emitSchema={false}
        />

        <InternalLinksSection
          title="Services connexes"
          links={INTERNAL_LINKS}
          columns={{ base: 1, sm: 2, md: 3, lg: 3 }}
        />

        <FinalCTASection
          onSubmissionOpen={onOpen}
          title={'Prêt à planifier votre projet commercial\u00A0?'}
          subtitle={'Soumission gratuite en moins de 24h'}
          buttonText={'Obtenir ma soumission gratuite'}
        />

      </Box>

      <SubmissionModal isOpen={isOpen} onClose={onClose} />
    </Fragment>
  );
}
