import React, { Fragment } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Flex,
  Link,
  Icon,
  HStack,
  SimpleGrid,
  useDisclosure,
  Image,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import {
  FaHome,
  FaRoute,
  FaShieldAlt,
  FaClock,
  FaStar,
  FaComments,
  FaCouch,
  FaDoorOpen,
  FaTag,
  FaKey,
  FaPaintBrush,
  FaCheckCircle,
  FaLayerGroup,
} from 'react-icons/fa';
import SEOHead from '../seo/SEOHead';
import HeroSection from '../home-page/HeroSection';
import TrustBanner from '../home-page/TrustBanner';
import PageIntro from '../components/PageIntro';
import BeforeAfterCarouselSection from '../home-page/BeforeAfterCarouselSection';
import ContactFormSection from '../home-page/ContactFormSection';
import SubmissionModal from '../home-page/SubmissionModal';
import FinalCTASection from '../home-page/FinalCTASection';
import { RBQ_LICENSE } from '../constants/company';

import heroImg from '../images/L3 Sous services/Photo page appartement/header.PNG';
import condoImg from '../images/L3 Sous services/Photo page -peinture condo/header.jpg';
import appartementImg from '../images/L3 Sous services/Photo page appartement/Avant après/IMG_7983 2.jpg';
import reventeImg from '../images/L2 Services principaux/Photo page -peinture-résidentielle/avant après/Peinture résidentielle Montréal, pièce double après.jpg';
import emmenagementImg from '../images/L2 Services principaux/Photo page -peinture-résidentielle/avant après/Peinture résidentielle Montréal, chambre après.jpg';
import commercialImg from '../images/2-services/Page peinture commerciale/1. réalisations/IMG_6760.PNG';
import porteAvant from "../images/L2 Services principaux/Photo page -peinture-extérieure/+Photo avant après/Peinture extérieure Montréal, porte d'entrée avant.jpg";
import porteApres from "../images/L2 Services principaux/Photo page -peinture-extérieure/+Photo avant après/Peinture extérieure Montréal, porte d'entrée après.jpg";
import chambreAvant from '../images/L3 Quartiers/Avant apres plateau/IMG_0832.jpg';
import chambreApres from '../images/L3 Quartiers/Avant apres plateau/IMG_0833.jpg';
import poutreAvant from '../images/L2 Services principaux/peinture interieure/+avant apres -peinture intérieure/Peinture intérieure Montréal, poutre d_acier avant.jpg';
import poutreApres from '../images/L2 Services principaux/peinture interieure/+avant apres -peinture intérieure/Peinture intérieure Montréal, poutre d_acier après.jpg';
import moulureAvant from '../images/L2 Services principaux/peinture interieure/+avant apres -peinture intérieure/Peinture intérieure Montréal, moulure avant.jpg';
import moulureApres from '../images/L2 Services principaux/peinture interieure/+avant apres -peinture intérieure/Peinture intérieure Montréal, moulure après.jpg';
import clotureAvant from '../images/3-ville/Montréal/avant-apres/IMG_1405.jpg';
import clotureApres from '../images/3-ville/Montréal/avant-apres/IMG_1406.jpg';
import cuisineAvant from '../images/L3 Quartiers/Avant après outremont/IMG_5971 2.jpg';
import cuisineApres from '../images/L3 Quartiers/Avant après outremont/IMG_5972 2.jpg';
import escalierAvant from '../images/L3 Quartiers/Avant apres plateau/IMG_7975 3.jpg';
import escalierApres from '../images/L3 Quartiers/Avant apres plateau/IMG_7974 3.jpg';

const CAROUSEL_IMAGES = [
  { before: porteAvant, after: porteApres, description: 'Porte d\'entrée - décapage et peinture' },
  { before: chambreAvant, after: chambreApres, description: 'Chambre - murs repeints dans un gris doux' },
  { before: poutreAvant, after: poutreApres, description: 'Poutre d\'acier - rouille traitée et peinture' },
  { before: moulureAvant, after: moulureApres, description: 'Peinture de boiseries - Plinthe' },
  { before: clotureAvant, after: clotureApres, description: 'Teinture extérieure - Clôture en bois' },
  { before: cuisineAvant, after: cuisineApres, description: 'Cuisine - murs repeints sous les moulures d\'origine' },
  { before: escalierAvant, after: escalierApres, description: 'Escalier en colimaçon - décapage et peinture' },
];

const BREADCRUMB = [
  { label: 'Accueil', to: '/' },
  { label: 'Secteurs', to: '/secteurs' },
  { label: 'Montréal', to: '/secteurs/montreal' },
];

const CHECKMARKS = [
  {
    icon: FaHome,
    title: 'Habitués aux condos, plex et appartements du quartier',
    text: 'Le Plateau regroupe beaucoup d\'unités occupées, souvent avec circulation restreinte, espaces plus compacts et pièces où chaque détail se remarque rapidement.',
  },
  {
    icon: FaRoute,
    title: 'Logistique simple malgré les contraintes urbaines',
    text: 'Escaliers, stationnement limité, accès par ruelle, étages supérieurs, matériel à transporter : le chantier est organisé dès le départ pour rester fluide.',
  },
  {
    icon: FaShieldAlt,
    title: 'Protection rigoureuse dans des espaces habités',
    text: 'Quand on vit sur place ou qu\'on prépare un logement entre deux occupations, le chantier reste propre, protégé et bien séquencé pour limiter les impacts.',
  },
  {
    icon: FaClock,
    title: 'Échéancier clair pour les projets sensibles',
    text: 'Avant emménagement, avant séance photo, avant location ou entre deux locataires, la rapidité et la clarté du calendrier comptent énormément.',
  },
  {
    icon: FaStar,
    title: 'Finition nette dans des pièces très visibles',
    text: 'Les condos, cuisines ouvertes, couloirs étroits et pièces baignées de lumière du Plateau rendent les défauts plus visibles. La finition doit être propre et cohérente.',
  },
  {
    icon: FaComments,
    title: 'Communication simple du début à la fin',
    text: 'Dans un projet urbain, la coordination évite les surprises. Le client sait quand on arrive, comment on protège les lieux et comment le chantier avance.',
  },
];

const CONTEXTES = [
  {
    icon: FaCouch,
    image: condoImg,
    title: 'Condo occupé au quotidien',
    text: 'Le chantier reste propre, bien séquencé et compatible avec une routine normale dans un espace où chaque pièce compte et où les finitions sont très visibles.',
    to: '/services/peinture-residentielle/condo',
    linkLabel: 'Voir la peinture de condo',
  },
  {
    icon: FaDoorOpen,
    image: appartementImg,
    title: 'Plex ou appartement avec accès restreint',
    text: 'Escaliers, portes étroites, voisinage proche et circulation du matériel demandent une logistique simple et maîtrisée pour éviter les frictions et les délais.',
    to: '/services/peinture-residentielle/appartement',
    linkLabel: 'Voir la peinture d\'appartement',
  },
  {
    icon: FaTag,
    image: reventeImg,
    title: 'Rafraîchissement avant remise en location ou revente',
    text: 'Le Plateau a beaucoup d\'unités où le délai est sensible. L\'objectif est un résultat net dans un échéancier clair, sans improvisation de dernière minute.',
  },
  {
    icon: FaKey,
    image: emmenagementImg,
    title: 'Projet avant emménagement',
    text: 'Quand l\'espace est vide mais que la date d\'installation approche, il faut avancer vite, proprement et sans imprévu pour remettre un logement prêt à habiter.',
  },
  {
    icon: FaPaintBrush,
    image: commercialImg,
    title: 'Bureau créatif ou commerce léger de quartier',
    text: 'Certaines interventions demandent un chantier discret, bien planifié et compatible avec l\'image du lieu - sans perturber l\'ambiance du quartier.',
  },
];

const SERVICES = [
  {
    title: 'Peinture intérieure à Montréal',
    text: 'Pour les condos, plex et appartements du Plateau où la finition, la protection et la logistique urbaine comptent autant que le résultat.',
    to: '/peinture-interieure-montreal',
    cta: 'Voir la page',
  },
  {
    title: 'Peinture extérieure à Montréal',
    text: 'Pour les balcons, escaliers, boiseries extérieures, façades et autres surfaces exposées au climat montréalais.',
    to: '/peinture-exterieure-montreal',
    cta: 'Voir la page',
  },
  {
    title: 'Peinture résidentielle',
    text: 'Pour un chantier simple à vivre, bien coordonné et sans stress dans votre condo, appartement ou maison.',
    to: '/services/peinture-residentielle',
    cta: 'Voir la page',
  },
  {
    title: 'Nos réalisations',
    text: 'Pour montrer des résultats concrets et renforcer la crédibilité dans un contexte très visuel comme le Plateau.',
    to: '/realisations',
    cta: 'Voir les projets',
  },
];

const CREDIBILITE = [
  {
    icon: FaCheckCircle,
    title: 'Propreté et respect des lieux occupés',
    text: 'Dans un espace habité, la propreté du chantier fait partie du service - pas seulement de la finition. Protections complètes, nettoyage quotidien et zones de travail bien délimitées font partie de notre approche sur chaque projet dans le Plateau.',
  },
  {
    icon: FaRoute,
    title: 'Coordination simple malgré les contraintes urbaines',
    text: 'Stationnement limité, escaliers, accès en ruelle, matériel à transporter, voisinage : on anticipe tout ça avant de commencer. Le chantier avance sans friction, et vous n\'avez pas à gérer les imprévus logistiques.',
  },
  {
    icon: FaLayerGroup,
    title: 'Résultat final net dans un espace très visible',
    text: 'Dans les appartements et condos lumineux du Plateau, les finitions se voient de partout. Notre objectif est un résultat propre, cohérent et sans défaut visible - à la hauteur d\'un espace où l\'esthétique compte.',
  },
];

const FAQS = [
  {
    question: 'Mes murs ont des fissures qui reviennent d\'une année à l\'autre, est-ce grave\u00A0?',
    answer: 'Dans le Plateau, ces fissures sont souvent liées au mouvement normal des sols argileux avec le gel et le dégel. Ce n\'est généralement pas dangereux pour la structure, mais ça demande un rebouchage adapté (toile à fissures) plutôt qu\'un simple mastic, pour limiter leur retour d\'une saison à l\'autre.',
  },
  {
    question: 'Est-ce que vous intervenez dans les condos, plex et appartements du Plateau\u00A0?',
    answer: 'Oui. Nous intervenons régulièrement dans les condos, plex et appartements du Plateau-Mont-Royal. Ce type de propriété demande souvent une bonne planification, un chantier propre et une attention particulière à l\'accès, aux voisins et à la protection des lieux. Notre approche s\'adapte au bâtiment pour que le projet se déroule de façon fluide, propre et bien encadrée.',
  },
  {
    question: 'Comment gérez-vous un chantier avec escaliers, accès serrés ou stationnement limité\u00A0?',
    answer: 'Ce genre de contrainte fait partie de la réalité de plusieurs projets dans le Plateau. Nous planifions l\'intervention en fonction de l\'accès, du transport du matériel, du stationnement et de la circulation dans l\'immeuble ou l\'unité. L\'objectif est de garder le chantier organisé dès le départ afin de limiter les imprévus et de travailler efficacement, même dans un contexte urbain plus serré.',
  },
  {
    question: 'Est-ce que vous protégez les planchers, moulures et meubles dans un espace occupé\u00A0?',
    answer: 'Oui, systématiquement. La protection des surfaces fait partie intégrante de notre façon de travailler. Nous protégeons les planchers, moulures, meubles et éléments fixes avant de commencer afin d\'éviter les éclaboussures, traces ou dommages. Cette étape est essentielle pour maintenir un chantier propre et rendre le projet plus simple à vivre dans un espace encore occupé.',
  },
  {
    question: 'Pouvez-vous intervenir avant un emménagement, une revente ou entre deux locataires\u00A0?',
    answer: 'Oui. Nous réalisons régulièrement des projets avant un emménagement, une mise en vente ou entre deux occupations. Dans ce contexte, le respect des délais est particulièrement important. Nous planifions donc le chantier avec un échéancier clair pour que les travaux soient complétés au bon moment et que l\'espace soit prêt à être utilisé, présenté ou reloué rapidement.',
  },
  {
    question: 'Combien de temps faut-il pour obtenir une soumission dans le Plateau Mont-Royal\u00A0?',
    answer: 'Dans la majorité des cas, nous répondons en moins de 24 heures. Le délai exact dépend du type de projet, des informations fournies et de la période de l\'année. Plus votre demande est claire dès le départ, plus nous pouvons vous transmettre rapidement une soumission précise, adaptée à votre propriété et aux contraintes propres au Plateau-Mont-Royal.',
  },
];

const INTERNAL_LINKS = [
  {
    title: 'Peinture intérieure à Montréal',
    description: 'Intérieur résidentiel et commercial dans la métropole.',
    to: '/peinture-interieure-montreal',
  },
  {
    title: 'Peinture extérieure à Montréal',
    description: 'Façades, boiseries, balcons et surfaces exposées.',
    to: '/peinture-exterieure-montreal',
  },
  {
    title: 'Peinture résidentielle',
    description: 'Maisons, condos, appartements - toutes les formules.',
    to: '/services/peinture-residentielle',
  },
  {
    title: 'Nos réalisations',
    description: 'Avant / après de projets réels pour juger la qualité.',
    to: '/realisations',
  },
  {
    title: 'Demander une soumission',
    description: 'Réponse en moins de 24h, sans engagement.',
    to: '/contact',
  },
  {
    title: 'Nos autres secteurs à Montréal',
    description: 'Tous les quartiers et secteurs desservis dans la ville.',
    to: '/secteurs/montreal',
  },
];

export default function PlateauMontRoyalPage() {
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
        name: 'Secteurs',
        item: 'https://leleverdupinceau.ca/secteurs',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Montréal',
        item: 'https://leleverdupinceau.ca/secteurs/montreal',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Plateau Mont-Royal',
        item: 'https://leleverdupinceau.ca/secteurs/montreal/plateau-mont-royal',
      },
    ],
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Le Lever du Pinceau',
    url: 'https://leleverdupinceau.ca',
    telephone: '+15148005155',
    areaServed: [
      { '@type': 'City', name: 'Plateau Mont-Royal' },
      { '@type': 'City', name: 'Montréal' },
    ],
    hasCredential: `RBQ #${RBQ_LICENSE}`,
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

  return (
    <Fragment>
      <SEOHead
        title="Peintre dans le Plateau Mont-Royal | Condos, plex et appartements | Le Lever du Pinceau"
        description="Le Lever du Pinceau réalise des projets de peinture dans le Plateau Mont-Royal pour condos, plex, appartements et commerces légers. Chantier propre, coordination simple et soumission rapide."
        canonicalPath="/secteurs/montreal/plateau-mont-royal"
        schemaArray={[breadcrumbSchema, localBusinessSchema, faqSchema]}
      />

      <Box w="100%" minW={0} bg="white" overflowX="hidden">

        <HeroSection
          onSubmissionOpen={onOpen}
          pageContext="Plateau Mont-Royal"
          imageBackground={heroImg}
          title="Peintre dans le Plateau Mont-Royal"
          subtitle="Des peintres de métier pour les condos, plex et appartements du Plateau."
          buttonText="Obtenir ma soumission gratuite"
        >
          <HStack spacing={3} textStyle="bodyLarge" color="whiteAlpha.900" mb={{ base: 2, md: 4 }} flexWrap="wrap">
            {BREADCRUMB.map((crumb) => (
              <Fragment key={crumb.to}>
                <Link as={RouterLink} to={crumb.to} _hover={{ textDecoration: 'underline', color: 'white' }}>
                  {crumb.label}
                </Link>
                <Text>›</Text>
              </Fragment>
            ))}
            <Text color="white" fontWeight="medium">Plateau Mont-Royal</Text>
          </HStack>
        </HeroSection>
        <TrustBanner />
        <PageIntro>
          Espaces occupés, cages d&apos;escalier, accès serrés, stationnement limité, échéanciers avant emménagement ou remise en location : nous réalisons des projets propres, bien coordonnés et impeccables dans le Plateau.
        </PageIntro>

        <BeforeAfterCarouselSection
          isFr
          title="Nos réalisations dans le Plateau et ailleurs à Montréal"
          subtitle="Des projets réels, avant et après, dans des condos, plex et appartements montréalais."
          images={CAROUSEL_IMAGES}
          sectionPaddingTop={{ base: 16, md: 20, lg: 24 }}
          sectionPaddingBottom={{ base: 16, md: 20, lg: 24 }}
        />

        {/* ===== SECTION 3 - CHECKMARKS PLATEAU ===== */}
        <Box py={{ base: 16, md: 20, lg: 24 }} bg="white">
          <Container maxW="1440px" px={{ base: 4, md: 6 }}>
            <Stack spacing={{ base: 10, md: 14 }}>
              <Stack spacing={4} textAlign="center" maxW="800px" mx="auto">
                <Heading
                  as="h2"
                  fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                  fontWeight="bold"
                  color="gray.800"
                >
                  Une équipe habituée aux chantiers urbains du Plateau
                </Heading>
                <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" lineHeight="1.7">
                  Dans le Plateau Mont-Royal, la qualité perçue du service dépend autant du résultat final que de la façon dont le chantier s&apos;intègre à un espace habité, compact et souvent très visible.
                </Text>
                <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" lineHeight="1.7">
                  {"Le Plateau est connu pour ses sols argileux, qui bougent avec le cycle de gel et de dégel chaque hiver. Ce mouvement, répété année après année, finit par causer des craquelures et des fissures dans les fondations et les murs. Ce n'est pas dangereux pour la maison de garder ces fissures visibles, mais faire appel à une équipe comme Le Lever du Pinceau pour reboucher et repeindre vos murs abîmés reste une excellente idée pour retrouver une finition nette."}
                </Text>
              </Stack>

              <Flex wrap="wrap" justify="center" gap={5}>
                {CHECKMARKS.map((item, i) => (
                  <Box
                    key={i}
                    bg="white"
                    border="1px solid"
                    borderColor="gray.200"
                    borderRadius="xl"
                    p={{ base: 5, md: 6 }}
                    boxShadow="0 2px 12px rgba(0,0,0,0.05)"
                    _hover={{ borderColor: 'brand.500', boxShadow: 'md' }}
                    transition="all 0.2s"
                    w={{ base: '100%', md: 'calc(50% - 10px)', lg: 'calc(33.333% - 14px)' }}
                    maxW={{ lg: '420px' }}
                  >
                    <HStack spacing={4} mb={3} align="center">
                      <Flex
                        w="44px"
                        h="44px"
                        borderRadius="lg"
                        bg="brand.50"
                        align="center"
                        justify="center"
                        flexShrink={0}
                      >
                        <Icon as={item.icon} color="brand.500" boxSize={5} />
                      </Flex>
                      <Text
                        fontWeight="bold"
                        color="gray.800"
                        fontSize={{ base: 'sm', md: 'md' }}
                        lineHeight="1.3"
                      >
                        {item.title}
                      </Text>
                    </HStack>
                    <Text color="gray.600" fontSize={{ base: 'sm', md: 'md' }} lineHeight="1.7">
                      {item.text}
                    </Text>
                  </Box>
                ))}
              </Flex>
            </Stack>
          </Container>
        </Box>

        {/* ===== SECTION 4 - CONTEXTES FRÉQUENTS DANS LE PLATEAU ===== */}
        <Box py={{ base: 16, md: 20, lg: 24 }} bg="gray.50">
          <Container maxW="1440px" px={{ base: 4, md: 6 }}>
            <Stack spacing={{ base: 10, md: 14 }}>
              <Stack spacing={4} textAlign="center" maxW="800px" mx="auto">
                <Heading
                  as="h2"
                  fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                  fontWeight="bold"
                  color="gray.800"
                >
                  Des projets qui demandent une vraie coordination de quartier
                </Heading>
                <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" lineHeight="1.7">
                  Dans le Plateau, le type de bâtiment, l&apos;occupation des lieux et le contexte du projet influencent directement la planification et l&apos;exécution.
                </Text>
              </Stack>

              <Flex wrap="wrap" justify="center" gap={6}>
                {CONTEXTES.map((item) => (
                  <Box
                    key={item.title}
                    bg="white"
                    border="1px solid"
                    borderColor="gray.200"
                    borderRadius="xl"
                    overflow="hidden"
                    boxShadow="sm"
                    _hover={{ borderColor: 'brand.500', boxShadow: 'md', transform: 'translateY(-2px)' }}
                    transition="all 0.2s"
                    w={{ base: '100%', md: 'calc(50% - 12px)', lg: 'calc(33.333% - 16px)' }}
                    display="flex"
                    flexDirection="column"
                  >
                    <Image
                      src={item.image}
                      alt={`${item.title} dans le Plateau Mont-Royal`}
                      w="100%"
                      h={{ base: '180px', md: '200px' }}
                      objectFit="cover"
                      loading="lazy"
                      decoding="async"
                    />
                    <Stack spacing={4} p={{ base: 6, md: 7 }} flex={1}>
                      <HStack spacing={3} align="center">
                        <Flex w="40px" h="40px" borderRadius="lg" bg="brand.50" align="center" justify="center" flexShrink={0}>
                          <Icon as={item.icon} color="brand.500" boxSize={4} />
                        </Flex>
                        <Heading as="h3" fontSize={{ base: 'md', md: 'lg' }} fontWeight="700" color="gray.800" lineHeight="1.3">
                          {item.title}
                        </Heading>
                      </HStack>
                      <Text color="gray.600" fontSize={{ base: 'sm', md: 'md' }} lineHeight="1.7" flex={1}>
                        {item.text}
                      </Text>
                      {item.to && (
                        <Link
                          as={RouterLink}
                          to={item.to}
                          color="brand.500"
                          fontSize="sm"
                          fontWeight="600"
                          display="inline-flex"
                          alignItems="center"
                          gap={1}
                        >
                          {item.linkLabel}
                          <ArrowForwardIcon boxSize={3} />
                        </Link>
                      )}
                    </Stack>
                  </Box>
                ))}
              </Flex>
            </Stack>
          </Container>
        </Box>

        <ContactFormSection sectionPaddingTop={{ base: 12, md: 16 }} sectionPaddingBottom={{ base: 12, md: 16 }} />

        {/* ===== SECTION 5 - SERVICES LES PLUS DEMANDÉS ===== */}
        <Box py={{ base: 16, md: 20, lg: 24 }} bg="white">
          <Container maxW="1440px" px={{ base: 4, md: 6 }}>
            <Stack spacing={{ base: 10, md: 14 }}>
              <Stack spacing={4} textAlign="center" maxW="800px" mx="auto">
                <Heading
                  as="h2"
                  fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                  fontWeight="bold"
                  color="gray.800"
                >
                  Les services les plus demandés dans le Plateau Mont-Royal
                </Heading>
                <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" lineHeight="1.7">
                  Trouvez rapidement le bon service selon votre type d&apos;espace dans le Plateau.
                </Text>
              </Stack>

              <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing={5}>
                {SERVICES.map((service, i) => (
                  <Link key={i} as={RouterLink} to={service.to} _hover={{ textDecoration: 'none' }}>
                    <Box
                      bg="white"
                      border="1px solid"
                      borderColor="gray.200"
                      borderRadius="xl"
                      p={{ base: 6, md: 7 }}
                      h="100%"
                      display="flex"
                      flexDirection="column"
                      _hover={{ borderColor: 'brand.500', transform: 'translateY(-2px)', boxShadow: 'md' }}
                      transition="all 0.2s"
                    >
                      <Stack spacing={4} flex={1} justify="space-between">
                        <Box>
                          <Heading as="h3" fontSize={{ base: 'md', md: 'lg' }} fontWeight="700" color="gray.800" lineHeight="1.3" mb={3}>
                            {service.title}
                          </Heading>
                          <Text color="gray.600" fontSize={{ base: 'sm', md: 'md' }} lineHeight="1.7">
                            {service.text}
                          </Text>
                        </Box>
                        <HStack spacing={1} color="brand.500">
                          <Text fontSize="sm" fontWeight="600">{service.cta}</Text>
                          <ArrowForwardIcon boxSize={3} />
                        </HStack>
                      </Stack>
                    </Box>
                  </Link>
                ))}
              </SimpleGrid>
            </Stack>
          </Container>
        </Box>

        {/* ===== SECTION 6 - PREUVE DE CRÉDIBILITÉ LOCALE ===== */}
        <Box py={{ base: 16, md: 20, lg: 24 }} bg="gray.50">
          <Container maxW="1440px" px={{ base: 4, md: 6 }}>
            <Stack spacing={{ base: 10, md: 14 }}>
              <Stack spacing={4} textAlign="center" maxW="800px" mx="auto">
                <Heading
                  as="h2"
                  fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                  fontWeight="bold"
                  color="gray.800"
                >
                  Une approche cohérente avec les attentes du quartier
                </Heading>
                <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" lineHeight="1.7">
                  Dans le Plateau, chaque chantier se voit - la qualité du résultat et la propreté du processus comptent autant l&apos;un que l&apos;autre.
                </Text>
              </Stack>

              <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
                {CREDIBILITE.map((bloc, i) => (
                  <Box
                    key={i}
                    bg="white"
                    border="1px solid"
                    borderColor="gray.200"
                    borderRadius="xl"
                    p={{ base: 6, md: 8 }}
                    boxShadow="sm"
                    _hover={{ borderColor: 'brand.500', boxShadow: 'md' }}
                    transition="all 0.2s"
                  >
                    <Stack spacing={5}>
                      <Flex w="52px" h="52px" borderRadius="xl" bg="brand.50" align="center" justify="center">
                        <Icon as={bloc.icon} color="brand.500" boxSize={6} />
                      </Flex>
                      <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} fontWeight="700" color="gray.800" lineHeight="1.3">
                        {bloc.title}
                      </Heading>
                      <Text color="gray.600" fontSize={{ base: 'sm', md: 'md' }} lineHeight="1.8">
                        {bloc.text}
                      </Text>
                    </Stack>
                  </Box>
                ))}
              </SimpleGrid>
            </Stack>
          </Container>
        </Box>

        {/* ===== SECTION 7 - FAQ ===== */}
        <Box py={{ base: 16, md: 20, lg: 24 }} bg="white">
          <Container maxW="900px" px={{ base: 4, md: 6 }}>
            <Stack spacing={{ base: 8, md: 12 }}>
              <Heading
                as="h2"
                fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                fontWeight="bold"
                color="gray.800"
                textAlign="center"
              >
                Questions fréquentes sur nos services de peinture dans le Plateau Mont-Royal
              </Heading>

              <Accordion allowMultiple>
                {FAQS.map((faq, i) => (
                  <AccordionItem
                    key={i}
                    border="1px solid"
                    borderColor="gray.200"
                    borderRadius="lg"
                    mb={3}
                    overflow="hidden"
                  >
                    <AccordionButton
                      py={{ base: 4, md: 5 }}
                      px={{ base: 5, md: 6 }}
                      _hover={{ bg: 'gray.50' }}
                      _expanded={{ bg: 'gray.50' }}
                    >
                      <Box flex="1" textAlign="left">
                        <Text fontWeight="600" color="gray.800" fontSize={{ base: 'sm', md: 'md' }} lineHeight="1.4">
                          {faq.question}
                        </Text>
                      </Box>
                      <AccordionIcon color="brand.500" />
                    </AccordionButton>
                    <AccordionPanel pb={{ base: 4, md: 5 }} px={{ base: 5, md: 6 }} pt={0} bg="gray.50">
                      <Text color="gray.600" fontSize={{ base: 'sm', md: 'md' }} lineHeight="1.8">
                        {faq.answer}
                      </Text>
                    </AccordionPanel>
                  </AccordionItem>
                ))}
              </Accordion>
            </Stack>
          </Container>
        </Box>

        {/* ===== SECTION 8 - LIENS INTERNES ===== */}
        <Box py={{ base: 16, md: 20, lg: 24 }} bg="gray.50">
          <Container maxW="1440px" px={{ base: 4, md: 6 }}>
            <Stack spacing={{ base: 8, md: 12 }}>
              <Heading
                as="h2"
                fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                fontWeight="bold"
                color="gray.800"
                textAlign="center"
              >
                Explorer les pages les plus utiles pour votre projet
              </Heading>

              <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 3 }} spacing={4}>
                {INTERNAL_LINKS.map((link, i) => (
                  <Link key={i} as={RouterLink} to={link.to} _hover={{ textDecoration: 'none' }}>
                    <Box
                      bg="white"
                      border="1px solid"
                      borderColor="gray.200"
                      borderRadius="xl"
                      p={5}
                      h="100%"
                      display="flex"
                      flexDirection="column"
                      _hover={{ borderColor: 'brand.500', transform: 'translateY(-2px)', boxShadow: 'md' }}
                      transition="all 0.2s"
                    >
                      <Stack spacing={3} flex={1} justify="space-between">
                        <Text fontWeight="600" color="gray.800" fontSize={{ base: 'sm', md: 'md' }} lineHeight="1.3">
                          {link.title}
                        </Text>
                        <Text color="gray.500" fontSize="sm" lineHeight="1.6">
                          {link.description}
                        </Text>
                        <HStack spacing={1} color="brand.500">
                          <Text fontSize="sm" fontWeight="medium">Voir</Text>
                          <ArrowForwardIcon boxSize={3} />
                        </HStack>
                      </Stack>
                    </Box>
                  </Link>
                ))}
              </SimpleGrid>
            </Stack>
          </Container>
        </Box>

        {/* ===== SECTION 9 - CTA FINAL ===== */}
        <FinalCTASection
          title={'Prêt à confier votre projet à une équipe habituée aux réalités du Plateau\u00A0?'}
          subtitle="Obtenez votre soumission gratuite en moins de 24h."
          buttonText="Obtenir ma soumission gratuite"
          onSubmissionOpen={onOpen}
        />

      </Box>

      <SubmissionModal isOpen={isOpen} onClose={onClose} />
    </Fragment>
  );
}
