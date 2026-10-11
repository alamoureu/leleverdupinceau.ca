import React, { Fragment } from 'react';
import { Link as RouterLink } from 'react-router-dom';
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
  SimpleGrid,
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
import TrustBanner from '../home-page/TrustBanner';
import PageIntro from '../components/PageIntro';
import SubmissionModal from '../home-page/SubmissionModal';
import FinalCTASection from '../home-page/FinalCTASection';
import BeforeAfterCarouselSection from '../home-page/BeforeAfterCarouselSection';
import FAQSection from '../home-page/FAQSection';
import FeatureCardsSection from '../components/FeatureCardsSection';
import InternalLinksSection from '../components/InternalLinksSection';
import ServiceGuaranteeSection from '../home-page/ServiceGuaranteeSection';

import commercialeHeroImg from '../images/2-services/Page peinture commerciale/1. réalisations/IMG_6760.PNG';

import bureauAvant from '../images/L2 Services principaux/Photo page -peinture-commerciale/Peintre commercial dans le grand Montréal, Le Lever du Pinceau a peint ce bureau commerciale au centre ville de Montréal.jpg';
import bureauApres from '../images/L2 Services principaux/Photo page -peinture-commerciale/Peintre professionnel commercial à Montréal, Le Lever du Pinceau a complété ce bureau commerciale au centre ville.jpg';
import escalierAvant from '../images/L2 Services principaux/Photo page -peinture-commerciale/Peintre professionnel commercial à Montréal, Le Lever du Pinceau a peinturé cette cage d_escalier à Outremont, Montréal.jpg';
import escalierApres from '../images/L2 Services principaux/Photo page -peinture-commerciale/Peintre professionnel à Montréal, Le Lever du Pinceau a peinturé cette cage d_escalier dans le quartier Outremont.jpg';
import localNdgAvant from '../images/L2 Services principaux/Photo page -peinture-commerciale/Peintre Montréal de profession, Le Lever du Pinceau a peinturé ce local commercial dans NDG, Montréal.jpg';
import localNdgApres from '../images/L2 Services principaux/Photo page -peinture-commerciale/Peintre Montréal professionnel, Le Lever du Pinceau a peinturé ce local commercial dans le quartier Notre-dame-de-grâce, Mtl.jpg';
import plafondAvant from '../images/L2 Services principaux/Photo page -peinture-industrielle/Peintre industrielle à Montréal, Le Lever du Pinceau a peinturé au spray ce plafond en steel deck à Montréal.jpg';
import plafondApres from '../images/L2 Services principaux/Photo page -peinture-industrielle/Peintre professionnel Montréal, Le Lever du Pinceau a peinturé au spray ce plafond en steel deck à Montréal.jpg';

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
    text: 'Réfection complète ou rafraîchissement ciblé. Peinture lavable et résistante, couleurs corporatives ou neutres selon vos standards.',
    link: null,
  },
  {
    icon: FaUtensils,
    title: 'Restaurant et espace de restauration',
    text: 'Environnement exigeant : humidité, chaleur, graisses. Produits adaptés, travail réalisé en dehors des heures de service.',
    link: null,
  },
  {
    icon: FaShoppingBag,
    title: 'Commerce de détail et boutique',
    text: 'Mise en valeur de l\'espace de vente, couleurs de marque, finitions nettes. Travaux planifiés pour minimiser la fermeture.',
    link: null,
  },
  {
    icon: FaDoorOpen,
    title: 'Hall d\'entrée et espaces communs',
    text: 'Première impression de votre immeuble ou commerce. Finitions soignées, peintures résistantes au frottement et aux impacts.',
    link: null,
  },
  {
    icon: FaChild,
    title: 'Garderie et établissement scolaire',
    text: 'Peintures sans COV, couleurs adaptées à l\'environnement enfant, respect des normes de santé et de sécurité.',
    link: null,
  },
  {
    icon: FaBuilding,
    title: 'Immeuble à bureaux et copropriété commerciale',
    text: 'Gestion multi-locaux, coordination avec la régie et travaux par phases pour maintenir les opérations en cours.',
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
    { before: escalierAvant, after: escalierApres, description: 'Peinture cage d\'escalier commerciale - Outremont, Montréal' },
    { before: localNdgAvant, after: localNdgApres, description: 'Peinture local commercial - NDG, Montréal' },
    { before: plafondAvant, after: plafondApres, description: 'Plafond steel deck - structure métallique repeinte en blanc' },
  ];

  return (
    <Fragment>
      <SEOHead
        title="Peinture commerciale à Montréal | Bureau, restaurant, commerce | Le Lever du Pinceau"
        description="Service de peinture commerciale à Montréal. Bureau, restaurant, commerce, garderie. Travaux hors heures, respect des délais, finitions durables. Licence RBQ. Soumission gratuite."
        canonicalPath="/services/peinture-commerciale"
        schemaArray={[breadcrumbSchema, faqSchema]}
      />

      <Box w="100%" minW={0} bg="white" overflowX="hidden">

        {/* ===== SECTION 1 - HERO ===== */}
        <Box
          position="relative"
          w="100%"
          minW={0}
          minH={{ base: '320px', sm: '350px', md: 'max(440px, 52vh)', lg: 'max(480px, 55vh)', xl: 'max(580px, 75vh)' }}
          pb={{ base: 10, sm: 12, md: 14, lg: 16 }}
          bgColor="gray.700"
          overflow="visible"
          px={{ base: 0, sm: 3, md: 5, lg: 8, xl: 10 }}
        >
          <Image
            src={commercialeHeroImg}
            alt="Peinture commerciale à Montréal - bureau et espace commercial professionnel"
            position="absolute"
            top={0}
            left={0}
            w="100%"
            h="100%"
            objectFit="cover"
            zIndex={0}
            loading="eager"
            fetchpriority="high"
            decoding="async"
            htmlWidth={1600}
            htmlHeight={1067}
          />
          <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            bg="rgba(0, 0, 0, 0.55)"
            zIndex={1}
          />
          <Container
            maxW="1440px"
            h="100%"
            position="relative"
            zIndex={2}
            px={{ base: 4, sm: 4, md: 6, lg: 8 }}
            minW={0}
          >
            <Stack
              h="100%"
              minW={0}
              pt={{ base: '62px', sm: '62px', md: '120px', lg: '120px', xl: '140px' }}
            >
              <Stack spacing={{ base: 3, sm: 4, md: 5, lg: 6 }} minW={0}>
                <HStack spacing={2} fontSize={{ base: 'sm', md: 'md' }} flexWrap="wrap" layerStyle="clearReviewBadge">
                  <Link
                    as={RouterLink}
                    to="/"
                    color="whiteAlpha.800"
                    _hover={{ color: 'white', textDecoration: 'underline' }}
                  >
                    Accueil
                  </Link>
                  <Text color="whiteAlpha.600">›</Text>
                  <Link
                    as={RouterLink}
                    to="/services"
                    color="whiteAlpha.800"
                    _hover={{ color: 'white', textDecoration: 'underline' }}
                  >
                    Services
                  </Link>
                  <Text color="whiteAlpha.600">›</Text>
                  <Text color="white" fontWeight="medium">
                    Peinture commerciale
                  </Text>
                </HStack>

                <Heading as="h1" size="hero" color="white" minW={0}>
                  Peinture commerciale à Montréal
                </Heading>
                <Text variant="heroSubtitle" color="white" minW={0}>
                  Bureau, restaurant, commerce.
                </Text>

                <Box pt={{ base: 2, md: 3 }}>
                  <Button
                    variant="cta"
                    size={{ base: 'md', md: 'lg' }}
                    rightIcon={<ArrowForwardIcon />}
                    onClick={onOpen}
                    borderRadius="full"
                    px={{ base: 6, md: 8 }}
                    fontWeight="600"
                  >
                    Obtenir ma soumission gratuite
                  </Button>
                </Box>
              </Stack>
            </Stack>
          </Container>
        </Box>
        <TrustBanner />
        <PageIntro>
          Des travaux adaptés aux réalités des entreprises - hors heures, dans les délais et sans perturbation.
        </PageIntro>

        {/* ===== SECTION 3 - CHECKMARKS ===== */}
        <FeatureCardsSection
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

                ))}
              </SimpleGrid>
            </Stack>
          </Container>
        </Box>

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
        />

        <InternalLinksSection
          title="Services connexes"
          links={INTERNAL_LINKS}
          columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
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
