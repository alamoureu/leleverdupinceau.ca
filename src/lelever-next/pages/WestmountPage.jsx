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
  FaShieldAlt,
  FaComments,
  FaMapMarkedAlt,
  FaStar,
  FaClock,
  FaBuilding,
  FaTag,
  FaKey,
  FaBriefcase,
  FaCheckCircle,
} from 'react-icons/fa';
import SEOHead from '../seo/SEOHead';
import TrustBanner from '../home-page/TrustBanner';
import PageIntro from '../components/PageIntro';
import SubmissionModal from '../home-page/SubmissionModal';
import FinalCTASection from '../home-page/FinalCTASection';
import BeforeAfterCarouselSection from '../home-page/BeforeAfterCarouselSection';
import ContactFormSection from '../home-page/ContactFormSection';

import heroImg from '../images/neighborhood_placeholder.jpg';
import maisonImg from '../images/2-services/Page peinture résidentielle/Photo header/Paint Cut-in Louis.jpeg';
import condoImg from '../images/L3 Sous services/Photo page -peinture condo/header.jpg';
import miseEnVenteImg from '../images/L2 Services principaux/Photo page -peinture-résidentielle/avant après/Peinture résidentielle Montréal, pièce double après.jpg';
import emmenagementImg from '../images/L3 Sous services/Photo page appartement/header.PNG';
import commercialImg from '../images/2-services/Page peinture commerciale/1. réalisations/IMG_6760.PNG';
import salleEauAvant from '../images/3-ville/Montréal/westmount/avant-apres/IMG_0807.jpg';
import salleEauApres from '../images/3-ville/Montréal/westmount/avant-apres/IMG_0808.jpg';
import salleMangerAvant from '../images/3-ville/Montréal/westmount/avant-apres/IMG_0826.jpg';
import salleMangerApres from '../images/3-ville/Montréal/westmount/avant-apres/IMG_0827.jpg';
import porteAvant from '../images/3-ville/Montréal/westmount/avant-apres/IMG_0828.jpg';
import porteApres from '../images/3-ville/Montréal/westmount/avant-apres/IMG_0829.jpg';
import chambreAvant from '../images/3-ville/Montréal/westmount/avant-apres/IMG_0846.jpg';
import chambreApres from '../images/3-ville/Montréal/westmount/avant-apres/IMG_0847.jpg';
import hallAvant from '../images/3-ville/Montréal/westmount/avant-apres/IMG_0855.jpg';
import hallApres from '../images/3-ville/Montréal/westmount/avant-apres/IMG_0856.jpg';
import plintheAvant from '../images/3-ville/Montréal/westmount/avant-apres/IMG_0861.jpg';
import plintheApres from '../images/3-ville/Montréal/westmount/avant-apres/IMG_0862.jpg';
import salonAvant from '../images/3-ville/Montréal/westmount/avant-apres/IMG_5984.jpg';
import salonApres from '../images/3-ville/Montréal/westmount/avant-apres/IMG_5982.jpg';

const BEFORE_AFTER = [
  { before: salleEauAvant, after: salleEauApres, description: 'Salle d\'eau - murs repeints, moulures rafraîchies' },
  { before: salleMangerAvant, after: salleMangerApres, description: 'Salle à manger - murs, lambris et plafond à caissons' },
  { before: porteAvant, after: porteApres, description: 'Porte d\'entrée - décapage et laque lustrée' },
  { before: chambreAvant, after: chambreApres, description: 'Chambre - murs et plinthes repeints en blanc' },
  { before: hallAvant, after: hallApres, description: 'Hall d\'entrée - murs, lambris et boiseries' },
  { before: plintheAvant, after: plintheApres, description: 'Plinthes - réparation et finition nette' },
  { before: salonAvant, after: salonApres, description: 'Salon en baie - murs, moulures et fenêtres' },
];

const CHECKMARKS = [
  {
    icon: FaHome,
    title: 'Chantier discret dans un espace occupé',
    text: 'Le projet doit s\'intégrer proprement au rythme de vie de la maison ou du condo. Travaux séquencés, bruits réduits et respect quotidien des lieux.',
  },
  {
    icon: FaShieldAlt,
    title: 'Protection rigoureuse des lieux et des finis existants',
    text: 'Moulures, planchers, escaliers, mobilier et éléments haut de gamme demandent une protection exemplaire avant même que le pinceau touche un mur.',
  },
  {
    icon: FaComments,
    title: 'Communication claire et rassurante',
    text: 'Dans un projet de ce niveau, le client veut savoir exactement comment le chantier se déroulera, sans avoir à superviser ni relancer.',
  },
  {
    icon: FaMapMarkedAlt,
    title: 'Planification adaptée aux accès et contraintes de propriété',
    text: 'Stationnement, circulation du matériel, ascenseur, voisinage et séquence des travaux sont intégrés à l\'avance pour éviter les frictions.',
  },
  {
    icon: FaStar,
    title: 'Finition soignée, nette et cohérente avec le niveau des lieux',
    text: 'Le résultat final doit être à la hauteur de l\'environnement. À Westmount, chaque détail de finition est visible et compte.',
  },
  {
    icon: FaClock,
    title: 'Respect du temps du client et des échéanciers sensibles',
    text: 'Avant réception, avant emménagement, avant mise en marché ou entre deux occupations - l\'échéancier est tenu avec rigueur.',
  },
];

const CONTEXTES = [
  {
    icon: FaHome,
    image: maisonImg,
    title: 'Maison occupée avec standards élevés',
    text: 'Protection totale des surfaces existantes, propreté quotidienne, zones de travail bien séquencées et communication rassurante à chaque étape du chantier.',
    to: '/services/peinture-residentielle',
    linkLabel: 'Voir la peinture de maison',
  },
  {
    icon: FaBuilding,
    image: condoImg,
    title: 'Condo raffiné ou unité haut de gamme',
    text: 'Accès, ascenseur, circulation du matériel, voisinage et gestion discrète du chantier : tout est planifié pour minimiser les irritants en copropriété.',
    to: '/services/peinture-residentielle/condo',
    linkLabel: 'Voir la peinture de condo',
  },
  {
    icon: FaTag,
    image: miseEnVenteImg,
    title: 'Rafraîchissement avant mise en vente',
    text: 'Délais clairs, finition nette et propre, projet qui valorise immédiatement l\'espace. Un résultat visible en quelques jours pour maximiser la présentation.',
  },
  {
    icon: FaKey,
    image: emmenagementImg,
    title: 'Mise à niveau avant emménagement',
    text: 'Travaux coordonnés avant l\'installation du mobilier et de la routine familiale. C\'est souvent le meilleur moment pour intervenir efficacement.',
    to: '/services/peinture-residentielle/appartement',
    linkLabel: 'Voir la peinture d\'appartement',
  },
  {
    icon: FaBriefcase,
    image: commercialImg,
    title: 'Intervention commerciale légère ou bureau professionnel',
    text: 'Horaires encadrés, chantier propre et image soignée. Le chantier ne doit pas déranger les activités professionnelles en cours.',
    to: '/services/peinture-commerciale',
    linkLabel: 'Voir la peinture commerciale',
  },
];

const SERVICES = [
  {
    title: 'Peinture intérieure',
    text: 'Pour les pièces occupées, condos et intérieurs où la finition, la protection et la coordination comptent autant que le résultat.',
    to: '/peinture-interieure-montreal',
    cta: 'Voir la page',
  },
  {
    title: 'Peinture extérieure',
    text: 'Pour les façades, boiseries extérieures, balcons, escaliers et surfaces exposées au climat montréalais.',
    to: '/peinture-exterieure-montreal',
    cta: 'Voir la page',
  },
  {
    title: 'Peinture résidentielle',
    text: 'Pour un chantier simple à vivre, bien coordonné et sans stress dans votre maison, condo ou appartement.',
    to: '/services/peinture-residentielle',
    cta: 'Voir la page',
  },
  {
    title: 'Nos réalisations',
    text: 'Pour voir des résultats concrets et appuyer la crédibilité dans un contexte premium - projets réels, avant et après.',
    to: '/realisations',
    cta: 'Voir les projets',
  },
];

const CREDIBILITE = [
  {
    icon: FaCheckCircle,
    title: 'Propreté et respect des lieux',
    text: 'Chaque chantier commence par une protection complète des surfaces, planchers, moulures et mobilier. Le nettoyage quotidien fait partie du travail, pas une option. Les lieux sont remis dans leur état d\'origine à la fin de chaque journée.',
  },
  {
    icon: FaComments,
    title: 'Coordination simple du projet',
    text: 'Du premier contact à la remise des clés, la communication est claire et proactive. Vous savez ce qui se passe, quand et pourquoi. Pas de surprises, pas de relances nécessaires. Le projet avance tel qu\'il a été présenté.',
  },
  {
    icon: FaStar,
    title: 'Résultat final à la hauteur des lieux',
    text: 'L\'objectif n\'est pas seulement de terminer le projet - c\'est de livrer un résultat dont vous serez fier. Finitions nettes, arêtes droites, surfaces uniformes et cohérentes avec le standard de l\'espace.',
  },
];

const FAQS = [
  {
    question: 'Ma maison est soumise au patrimoine à Westmount, est-ce que je peux changer la couleur extérieure\u00A0?',
    answer: 'Certains changements de couleur ou de revêtement peuvent devoir être approuvés par la Ville selon le statut patrimonial de votre propriété. Nous pouvons vous aider à préparer votre projet, mais la vérification auprès de la Ville de Westmount reste une étape à faire de votre côté avant de procéder.',
  },
  {
    question: 'Est-ce que vous intervenez dans les maisons et condos à Westmount\u00A0?',
    answer: 'Oui. Nous intervenons autant dans les maisons que dans les condos à Westmount. Chaque type de propriété a ses particularités, que ce soit l\'accès, la protection des lieux, la coordination avec la copropriété ou le respect d\'un échéancier précis. Notre approche s\'adapte au bâtiment pour offrir un chantier propre, bien encadré et simple à gérer pour le client.',
  },
  {
    question: 'Comment se déroule un chantier dans un espace encore occupé\u00A0?',
    answer: 'Un chantier dans un espace occupé demande surtout de la méthode, de la discrétion et une bonne coordination. Nous planifions les travaux de façon à limiter les impacts sur votre quotidien, en avançant par zones lorsque nécessaire et en gardant les lieux propres tout au long du projet. L\'objectif est que le chantier reste organisé, prévisible et le moins dérangeant possible.',
  },
  {
    question: 'Est-ce que vous protégez les planchers, moulures et mobilier avant de peindre\u00A0?',
    answer: 'Oui, systématiquement. La protection des surfaces fait partie intégrante de notre façon de travailler. Nous protégeons les planchers, les moulures, les meubles et les éléments fixes avant de commencer, afin d\'éviter les éclaboussures, traces ou dommages. Cette étape est essentielle pour assurer un chantier propre et un résultat à la hauteur des attentes.',
  },
  {
    question: 'Pouvez-vous travailler avant un emménagement ou une mise en vente\u00A0?',
    answer: 'Oui. Nous réalisons régulièrement des projets avant un emménagement, une mise en marché ou une prise de photos pour la vente. Dans ce contexte, le respect des délais est particulièrement important. Nous planifions donc le projet avec un échéancier clair afin que les travaux soient terminés au bon moment et que l\'espace soit prêt à être utilisé ou présenté.',
  },
  {
    question: 'Combien de temps faut-il pour obtenir une soumission à Westmount\u00A0?',
    answer: 'Dans la majorité des cas, nous répondons en moins de 24 heures. Le délai exact dépend du type de projet, des informations reçues et de la période de l\'année. Plus votre demande est précise dès le départ, plus nous pouvons vous donner une soumission claire, rapide et adaptée à votre propriété à Westmount.',
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
    title: 'Nos autres secteurs à Montréal',
    description: 'Tous les quartiers et secteurs desservis dans la ville.',
    to: '/secteurs/montreal',
  },
];

export default function WestmountPage() {
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
        name: 'Westmount',
        item: 'https://leleverdupinceau.ca/secteurs/montreal/westmount',
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
      { '@type': 'City', name: 'Westmount' },
      { '@type': 'City', name: 'Montréal' },
    ],
    hasCredential: 'RBQ #5864-1481-01',
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
        title="Peintre à Westmount | Résidentiel et commercial léger | Le Lever du Pinceau"
        description="Le Lever du Pinceau réalise des projets de peinture à Westmount dans les maisons, condos et espaces raffinés. Chantier propre, coordination soignée, soumission gratuite."
        canonicalPath="/secteurs/montreal/westmount"
        schemaArray={[breadcrumbSchema, localBusinessSchema, faqSchema]}
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
            src={heroImg}
            alt="Peintre à Westmount - intérieur résidentiel haut de gamme"
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
            bg="rgba(0, 0, 0, 0.45)"
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
                <HStack spacing={2} fontSize={{ base: 'sm', md: 'md' }} flexWrap="wrap">
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
                    to="/secteurs"
                    color="whiteAlpha.800"
                    _hover={{ color: 'white', textDecoration: 'underline' }}
                  >
                    Secteurs
                  </Link>
                  <Text color="whiteAlpha.600">›</Text>
                  <Link
                    as={RouterLink}
                    to="/secteurs/montreal"
                    color="whiteAlpha.800"
                    _hover={{ color: 'white', textDecoration: 'underline' }}
                  >
                    Montréal
                  </Link>
                  <Text color="whiteAlpha.600">›</Text>
                  <Text color="white" fontWeight="medium">
                    Westmount
                  </Text>
                </HStack>

                <Heading
                  as="h1"
                  fontSize={{ base: '2xl', sm: '3xl', md: '4xl', lg: '5xl', xl: '6xl' }}
                  fontWeight="700"
                  color="white"
                  lineHeight="1.05"
                  minW={0}
                >
                  Peintre à Westmount
                </Heading>

                <Text
                  fontSize={{ base: 'sm', md: 'lg', lg: 'xl', xl: '2xl' }}
                  color="white"
                  fontWeight="300"
                  maxW={{ base: '100%', md: '680px', lg: '780px' }}
                  lineHeight="1.5"
                >
                  Une équipe de peintres de métier pour vos projets résidentiels et commerciaux légers à Westmount.
                </Text>

                <Flex gap={3} wrap="wrap" pt={{ base: 2, md: 3 }}>
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
                  <Button
                    variant="ctaOutlineLight"
                    as={RouterLink}
                    to="/realisations"
                    size={{ base: 'md', md: 'lg' }}
                    rightIcon={<ArrowForwardIcon />}
                    borderRadius="full"
                    px={{ base: 6, md: 8 }}
                    fontWeight="600"
                  >
                    Voir nos réalisations
                  </Button>
                </Flex>
              </Stack>
            </Stack>
          </Container>
        </Box>
        <TrustBanner />
        <PageIntro>
          Maisons haut de gamme, condos occupés, espaces raffinés : nous réalisons des projets propres, discrets et bien coordonnés dans le secteur de Westmount.
        </PageIntro>

        {/* ===== SECTION 3 - CHECKMARKS WESTMOUNT ===== */}
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
                  Une équipe habituée aux projets où chaque détail compte
                </Heading>
                <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" lineHeight="1.7">
                  À Westmount, la qualité perçue du service repose autant sur l&apos;exécution que sur la manière d&apos;entrer et de travailler dans les lieux.
                </Text>
                <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" lineHeight="1.7">
                  {"Westmount s'étend à flanc du mont Royal et compte de nombreuses résidences centenaires en pierre grise (greystone), avec toitures d'ardoise et solins de cuivre. Une bonne partie du secteur est aussi soumise à des règles municipales de conservation du patrimoine qui peuvent encadrer les changements de couleur extérieure, à vérifier auprès de la Ville avant certains projets de façade. Nos équipes travaillent avec le soin supplémentaire que demandent ces matériaux (pierre, cuivre, boiseries d'époque) plutôt qu'avec les méthodes d'une construction standard."}
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

        <BeforeAfterCarouselSection
          isFr
          title="Nos réalisations à Westmount"
          subtitle="Des projets réels, avant et après, dans des maisons et condos du secteur."
          images={BEFORE_AFTER}
          sectionPaddingTop={{ base: 16, md: 20, lg: 24 }}
          sectionPaddingBottom={{ base: 16, md: 20, lg: 24 }}
        />

        {/* ===== SECTION 4 - CONTEXTES FRÉQUENTS À WESTMOUNT ===== */}
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
                  Des projets qui demandent plus qu&apos;une simple exécution
                </Heading>
                <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" lineHeight="1.7">
                  À Westmount, le contexte du chantier influence directement l&apos;organisation, la préparation et la qualité perçue du service.
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
                      alt={`${item.title} à Westmount`}
                      w="100%"
                      h={{ base: '180px', md: '200px' }}
                      objectFit="cover"
                      loading="lazy"
                      decoding="async"
                    />
                    <Stack spacing={4} p={{ base: 6, md: 7 }} flex={1}>
                      <HStack spacing={3} align="center">
                        <Flex
                          w="40px"
                          h="40px"
                          borderRadius="lg"
                          bg="brand.50"
                          align="center"
                          justify="center"
                          flexShrink={0}
                        >
                          <Icon as={item.icon} color="brand.500" boxSize={4} />
                        </Flex>
                        <Heading
                          as="h3"
                          fontSize={{ base: 'md', md: 'lg' }}
                          fontWeight="700"
                          color="gray.800"
                          lineHeight="1.3"
                        >
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

        {/* ===== SECTION 5 - SERVICES LES PLUS DEMANDÉS À WESTMOUNT ===== */}
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
                  Les services les plus demandés dans le secteur
                </Heading>
                <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" lineHeight="1.7">
                  Trouvez rapidement le bon service selon votre projet à Westmount.
                </Text>
              </Stack>

              <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing={5}>
                {SERVICES.map((service, i) => (
                  <Link
                    key={i}
                    as={RouterLink}
                    to={service.to}
                    _hover={{ textDecoration: 'none' }}
                  >
                    <Box
                      bg="white"
                      border="1px solid"
                      borderColor="gray.200"
                      borderRadius="xl"
                      p={{ base: 6, md: 7 }}
                      h="100%"
                      display="flex"
                      flexDirection="column"
                      _hover={{
                        borderColor: 'brand.500',
                        transform: 'translateY(-2px)',
                        boxShadow: 'md',
                      }}
                      transition="all 0.2s"
                    >
                      <Stack spacing={4} flex={1} justify="space-between">
                        <Box>
                          <Heading
                            as="h3"
                            fontSize={{ base: 'md', md: 'lg' }}
                            fontWeight="700"
                            color="gray.800"
                            lineHeight="1.3"
                            mb={3}
                          >
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
                  Une approche cohérente avec les attentes du secteur
                </Heading>
                <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" lineHeight="1.7">
                  La crédibilité ne se proclame pas. Elle se construit chantier après chantier, détail après détail.
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
                      <Flex
                        w="52px"
                        h="52px"
                        borderRadius="xl"
                        bg="brand.50"
                        align="center"
                        justify="center"
                      >
                        <Icon as={bloc.icon} color="brand.500" boxSize={6} />
                      </Flex>
                      <Heading
                        as="h3"
                        fontSize={{ base: 'lg', md: 'xl' }}
                        fontWeight="700"
                        color="gray.800"
                        lineHeight="1.3"
                      >
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
                Questions fréquentes sur nos services de peinture à Westmount
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
                        <Text
                          fontWeight="600"
                          color="gray.800"
                          fontSize={{ base: 'sm', md: 'md' }}
                          lineHeight="1.4"
                        >
                          {faq.question}
                        </Text>
                      </Box>
                      <AccordionIcon color="brand.500" />
                    </AccordionButton>
                    <AccordionPanel
                      pb={{ base: 4, md: 5 }}
                      px={{ base: 5, md: 6 }}
                      pt={0}
                      bg="gray.50"
                    >
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
                  <Link
                    key={i}
                    as={RouterLink}
                    to={link.to}
                    _hover={{ textDecoration: 'none' }}
                  >
                    <Box
                      bg="white"
                      border="1px solid"
                      borderColor="gray.200"
                      borderRadius="xl"
                      p={5}
                      h="100%"
                      display="flex"
                      flexDirection="column"
                      _hover={{
                        borderColor: 'brand.500',
                        transform: 'translateY(-2px)',
                        boxShadow: 'md',
                      }}
                      transition="all 0.2s"
                    >
                      <Stack spacing={3} flex={1} justify="space-between">
                        <Text
                          fontWeight="600"
                          color="gray.800"
                          fontSize={{ base: 'sm', md: 'md' }}
                          lineHeight="1.3"
                        >
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
          title={'Prêt à confier votre projet à une équipe habituée aux chantiers soignés\u00A0?'}
          subtitle="Obtenez votre soumission gratuite en moins de 24h."
          buttonText="Obtenir ma soumission gratuite"
          onSubmissionOpen={onOpen}
        />

      </Box>

      <SubmissionModal isOpen={isOpen} onClose={onClose} />
    </Fragment>
  );
}
