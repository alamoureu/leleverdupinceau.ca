import { FaArrowRight as ArrowForwardIcon, FaBuilding, FaBroom, FaCog, FaClock, FaComments, FaLayerGroup, FaKey, FaExchangeAlt, FaBriefcase, FaTag, FaCheckCircle, FaRoute, FaStar } from 'react-icons/fa';
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
} from '@chakra-ui/react';
import SEOHead from '../seo/SEOHead';
import { LOCAL_BUSINESS_SCHEMA } from '../seo/config';
import HeroSection from '../home-page/HeroSection';
import { TRUST_BANNER_BELOW_PT } from '../home-page/TrustBanner';
import { SECTION_PY, TRUST_BANNER_AIR_SPACE } from '../constants/sectionSpacing';
import FAQSection from '../home-page/FAQSection';
import FeatureCardsSection from '../components/FeatureCardsSection';
import ResourcesSection from '../home-page/ResourcesSection';
import ContactFormSection from '../home-page/ContactFormSection';
import SubmissionModal from '../home-page/SubmissionModal';
import FinalCTASection from '../home-page/FinalCTASection';
import { RBQ_LICENSE } from '../constants/company';

import heroImg from '../images/villes/montreal/ville-marie/header.webp';
import realisationsImg from '../images/villes/montreal/realisations/IMG_5877.webp';
import emmenagementImg from '../images/sous-services/appartement/avant-apres/IMG_0845.webp';
import miseEnVenteImg from '../images/sous-services/appartement/avant-apres/IMG_5982.webp';
import blogPrix from '../images/blog/prix-projet-montreal.webp';
import blogChoisirPeintre from '../images/home/method-1.webp';
import blogErreurs from '../images/blog/erreurs-eviter-peindre.webp';
import blogArmoires from '../images/blog/blog-armoires-cuisine.webp';
import blogComparatif from '../images/blog/blog-comparatif-peinture.webp';
import { thumbnailForRoute } from '../constants/routeThumbnails';
import ResponsiveImage from '../components/ResponsiveImage';

const interieureImg = thumbnailForRoute('/services/peinture-interieure');
const exterieureImg = thumbnailForRoute('/services/peinture-exterieure');
const residentielleImg = thumbnailForRoute('/services/peinture-residentielle');
const condoImg = thumbnailForRoute('/services/peinture-residentielle/condo');
const appartementImg = thumbnailForRoute('/services/peinture-residentielle/appartement');
const bureauImg = thumbnailForRoute('/services/peinture-commerciale');

const BREADCRUMB = [
  { label: 'Accueil', to: '/' },
  { label: 'Secteurs', to: '/secteurs' },
  { label: 'Montréal', to: '/secteurs/montreal' },
  { label: 'Ville-Marie' },
];

const CHECKMARKS = [
  {
    icon: FaBuilding,
    title: 'Habitués aux condos, tours et immeubles occupés',
    text: 'Accès, interphone, ascenseur, circulation du matériel et gestion des espaces communs sont intégrés dès le départ pour éviter les frictions.',
  },
  {
    icon: FaBroom,
    title: 'Chantier propre dans des espaces compacts',
    text: 'Quand chaque pièce compte, la séquence des travaux, les protections et le nettoyage quotidien deviennent essentiels pour garder l\'espace fonctionnel.',
  },
  {
    icon: FaCog,
    title: 'Coordination simple avec les contraintes d\'immeuble',
    text: 'Règlements de copropriété, plages horaires, monte-charges, réservations d\'ascenseur ou zones de livraison sont pris en compte dès la planification.',
  },
  {
    icon: FaClock,
    title: 'Échéancier clair pour les projets pressés',
    text: 'Avant prise de possession, avant location, entre deux occupants, avant photos ou avant ouverture d\'un espace professionnel - les délais sont tenus.',
  },
  {
    icon: FaComments,
    title: 'Communication rassurante et structurée',
    text: 'En contexte urbain rapide, le client veut savoir comment le chantier va se dérouler sans avoir à le superviser ou à relancer l\'équipe.',
  },
  {
    icon: FaLayerGroup,
    title: 'Approche adaptée aux projets mixtes du centre-ville',
    text: 'Condos, bureaux légers, commerces de proximité ou espaces de travail demandent une exécution disciplinée avec une logistique bien planifiée.',
  },
];

const CONTEXTES = [
  {
    icon: FaBuilding,
    image: condoImg,
    title: 'Condo dans une tour ou un immeuble en copropriété',
    text: 'Accès, ascenseur, stationnement, circulation du matériel et voisinage imposent une organisation plus stricte. Tout est anticipé avant le début des travaux.',
    to: '/services/peinture-residentielle/condo',
    linkLabel: 'Voir la peinture de condo',
  },
  {
    icon: FaKey,
    image: emmenagementImg,
    title: 'Unité avant emménagement ou prise de possession',
    text: 'Fenêtre de temps limitée, chantier accéléré et objectif simple : remettre un espace propre, net et prêt à être habité dans les délais prévus.',
  },
  {
    icon: FaExchangeAlt,
    image: appartementImg,
    title: 'Appartement ou logement entre deux occupations',
    text: 'Remise à niveau rapide, protections efficaces, plan de match clair pour réduire le temps vacant et remettre l\'espace en marché rapidement.',
    to: '/services/peinture-residentielle/appartement',
    linkLabel: 'Voir la peinture d\'appartement',
  },
  {
    icon: FaBriefcase,
    image: bureauImg,
    title: 'Bureau léger ou espace professionnel au centre-ville',
    text: 'Intervention propre, bien séquencée, avec horaires adaptés et impact minimal sur les opérations en cours ou les voisins de l\'immeuble.',
    to: '/services/peinture-commerciale',
    linkLabel: 'Voir la peinture commerciale',
  },
  {
    icon: FaTag,
    image: miseEnVenteImg,
    title: 'Projet avant vente ou mise en marché',
    text: 'Rafraîchir l\'espace pour le rendre plus lumineux, plus cohérent et plus facile à projeter dès les premières visites ou photos de mise en marché.',
  },
];

const SERVICES = [
  {
    title: 'Peinture intérieure à Montréal',
    text: 'Pour les condos, unités occupées et projets centre-ville où la logistique, la propreté et la finition intérieure sont prioritaires.',
    to: '/services/peinture-interieure',
    cta: 'Voir la page',
    image: interieureImg,
  },
  {
    title: 'Peinture extérieure à Montréal',
    text: 'Pour les façades, balcons, boiseries extérieures et surfaces exposées au climat montréalais.',
    to: '/services/peinture-exterieure',
    cta: 'Voir la page',
    image: exterieureImg,
  },
  {
    title: 'Peinture résidentielle',
    text: 'Pour un chantier simple à vivre, bien planifié et sans stress dans votre condo, appartement ou propriété urbaine.',
    to: '/services/peinture-residentielle',
    cta: 'Voir la page',
    image: residentielleImg,
  },
  {
    title: 'Nos réalisations',
    text: 'Pour montrer des projets concrets et appuyer la crédibilité dans un contexte centre-ville.',
    to: '/realisations',
    cta: 'Voir les projets',
    image: realisationsImg,
  },
];

const CREDIBILITE = [
  {
    icon: FaRoute,
    title: 'Gestion simple des accès et des contraintes d\'immeuble',
    text: 'Interphone, ascenseur, zones de livraison, plages horaires et règles de copropriété - tout est planifié à l\'avance. Vous n\'avez pas à gérer les va-et-vient ni à coordonner les accès le jour J. On s\'en occupe proprement.',
  },
  {
    icon: FaCheckCircle,
    title: 'Chantier propre et discret dans des espaces occupés',
    text: 'En contexte urbain dense, la propreté n\'est pas un bonus - c\'est une exigence de base. Protections complètes, déplacements ordonnés et nettoyage quotidien font partie de notre façon de travailler dans chaque projet centre-ville.',
  },
  {
    icon: FaStar,
    title: 'Résultat net dans des délais compatibles avec la réalité centre-ville',
    text: 'Que le projet soit avant une prise de possession, une location ou une mise en marché, l\'objectif est de livrer un espace propre, bien fini et prêt à être utilisé dans les délais prévus. Sans improvisation de dernière minute.',
  },
];

const FAQS = [
  {
    question: 'Mon syndicat de copropriété doit approuver les travaux, est-ce que vous vous en occupez\u00A0?',
    answer: 'Nous préparons la documentation nécessaire (description des travaux, assurances, horaires) pour faciliter l\'approbation par votre conseil d\'administration, et nous coordonnons directement avec la gestion de l\'immeuble pour la réservation de l\'ascenseur de service et le respect du règlement de l\'immeuble.',
  },
  {
    question: 'Est-ce que vous intervenez dans les condos et tours résidentielles de Ville-Marie\u00A0?',
    answer: 'Oui. En tour ou en condo au centre-ville, la coordination avec l\'immeuble, la protection des espaces communs et le respect des accès font partie du projet autant que la peinture elle-même.',
  },
  {
    question: 'Comment gérez-vous les accès, ascenseurs et horaires d\'immeuble au centre-ville\u00A0?',
    answer: 'On planifie avant le premier coup de pinceau : réservation d\'ascenseur de service, plages horaires permises, stationnement et circulation du matériel. L\'objectif est d\'éviter les imprévus dans un environnement plus encadré qu\'une maison de quartier.',
  },
  {
    question: 'Travaillez-vous aussi dans des bureaux ou espaces commerciaux légers à Ville-Marie\u00A0?',
    answer: 'Oui, selon le type de local. Au centre-ville, on privilégie souvent des horaires hors heures ou une séquence par zones pour limiter l\'impact sur les opérations en place.',
  },
];

const BLOG_ARTICLES = [
  {
    title: "Prix d'un projet de peinture à Montréal",
    href: '/blog/prix-peinture-montreal',
    image: blogPrix,
  },
  {
    title: 'Comment choisir un peintre professionnel',
    href: '/blog/comment-choisir-un-peintre-professionnel',
    image: blogChoisirPeintre,
  },
  {
    title: 'Erreurs à éviter avant de peindre',
    href: '/blog/erreurs-a-eviter-peinture-interieure',
    image: blogErreurs,
  },
  {
    title: 'Peindre ses armoires de cuisine, guide complet 2026',
    href: '/blog/peinture-armoires-cuisine-guide',
    image: blogArmoires,
  },
  {
    title: 'Bétonel vs Benjamin Moore : quelle peinture choisir ?',
    href: '/blog/betonel-vs-benjamin-moore',
    image: blogComparatif,
  },
];

export default function VilleMariePage() {
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
        name: 'Ville-Marie',
        item: 'https://leleverdupinceau.ca/secteurs/montreal/ville-marie',
      },
    ],
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Le Lever du Pinceau',
    url: 'https://leleverdupinceau.ca',
    telephone: LOCAL_BUSINESS_SCHEMA.telephone,
    areaServed: [
      { '@type': 'City', name: 'Ville-Marie' },
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
        title="Peintre à Ville-Marie | Condos et projets centre-ville | Le Lever du Pinceau"
        description="Le Lever du Pinceau réalise des projets de peinture à Ville-Marie dans les condos, tours résidentielles et espaces urbains occupés. Chantier propre, coordination claire, soumission gratuite."
        canonicalPath="/secteurs/montreal/ville-marie"
        schemaArray={[breadcrumbSchema, localBusinessSchema, faqSchema]}
      />

      <Box w="100%" minW={0} bg="white" overflowX="hidden">

        <HeroSection
          onSubmissionOpen={onOpen}
          pageContext="Ville-Marie"
          imageBackground={heroImg}
          title="Peintre à Ville-Marie"
          subtitle="Peintres de métier pour vos projets au centre-ville."
          description="Condos, tours et projets avant emménagement."
          buttonText="Obtenir ma soumission gratuite"
          breadcrumb={BREADCRUMB}
        />
        {/* ===== SECTION 3 - CHECKMARKS VILLE-MARIE ===== */}
        <Box pt={TRUST_BANNER_BELOW_PT} pb={0} bg="white">
          <Container maxW="1440px" px={{ base: 4, md: 6 }}>
            <Stack spacing={4} textAlign="center" maxW={{ base: '100%', md: '960px', lg: '1100px' }} mx="auto">
              <Heading
                as="h2"
                fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                fontWeight="bold"
                color="gray.800"
              >
                Une équipe habituée aux réalités d'un chantier centre-ville
              </Heading>
              <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" lineHeight="1.7">À Ville-Marie, la réussite du projet dépend autant de la logistique et de la coordination que de la finition.</Text>
              <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" lineHeight="1.7">{"Ville-Marie regroupe la plus forte densité de tours à condos de la région, ce qui change la nature du travail : réserver l'ascenseur de service à l'avance, obtenir l'accord du conseil d'administration de la copropriété pour les travaux touchant les parties communes, respecter les plages horaires imposées par le règlement de l'immeuble et les heures de travail permises au centre-ville. Le défi n'est pas la façade ou la fondation, mais la coordination : on planifie ces étapes administratives avant même de fixer une date de chantier."}</Text>
            </Stack>
          </Container>
        </Box>
        <FeatureCardsSection
          items={CHECKMARKS}
          variant="inline"
          sectionBg="white"
          sectionPaddingTop={TRUST_BANNER_AIR_SPACE}
          sectionPaddingBottom={SECTION_PY}
        />

        {/* ===== SECTION 4 - CONTEXTES FRÉQUENTS À VILLE-MARIE ===== */}
        <Box py={{ base: 16, md: 20, lg: 24 }} bg="gray.50">
          <Container maxW="1440px" px={{ base: 4, md: 6 }}>
            <Stack spacing={{ base: 10, md: 14 }}>
              <Stack spacing={4} textAlign="center" maxW={{ base: '100%', md: '960px', lg: '1100px' }} mx="auto">
                <Heading
                  as="h2"
                  fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                  fontWeight="bold"
                  color="gray.800"
                >
                  Des projets qui demandent une vraie coordination urbaine
                </Heading>
                <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" lineHeight="1.7">
                  Un condo en tour, une unité locative au centre-ville ou un bureau léger ne se gèrent pas de la même manière.
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
                    <ResponsiveImage
                      image={item.image}
                          sizes="(min-width: 48em) 380px, 85vw"
                      alt={`${item.title} à Ville-Marie`}
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
                          <Icon as={ArrowForwardIcon} boxSize={3} />
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

        {/* ===== SECTION 5 - SERVICES LES PLUS DEMANDÉS À VILLE-MARIE ===== */}
        <Box py={{ base: 16, md: 20, lg: 24 }} bg="white">
          <Container maxW="1440px" px={{ base: 4, md: 6 }}>
            <Stack spacing={{ base: 10, md: 14 }}>
              <Stack spacing={4} textAlign="center" maxW={{ base: '100%', md: '960px', lg: '1100px' }} mx="auto">
                <Heading
                  as="h2"
                  fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                  fontWeight="bold"
                  color="gray.800"
                >
                  Les services les plus demandés dans Ville-Marie
                </Heading>
                <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" lineHeight="1.7">
                  Trouvez rapidement le bon service selon votre type de projet au centre-ville.
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
                      overflow="hidden"
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
                      <ResponsiveImage
                        image={service.image}
                          sizes="(min-width: 48em) 380px, 85vw"
                        alt={`${service.title} - Ville-Marie`}
                        w="100%"
                        h="180px"
                        objectFit="cover"
                        loading="lazy"
                        decoding="async"
                      />
                      <Stack spacing={4} flex={1} justify="space-between" p={{ base: 6, md: 7 }}>
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
                          <Icon as={ArrowForwardIcon} boxSize={3} />
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
              <Stack spacing={4} textAlign="center" maxW={{ base: '100%', md: '960px', lg: '1100px' }} mx="auto">
                <Heading
                  as="h2"
                  fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                  fontWeight="bold"
                  color="gray.800"
                >
                  Une approche cohérente avec les attentes du centre-ville
                </Heading>
                <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" lineHeight="1.7">
                  Ce n&apos;est pas seulement un projet de peinture - c&apos;est une intervention dans un environnement urbain dense où tout se voit et où la coordination compte.
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

        <FAQSection
          title="Questions fréquentes sur nos services de peinture à Ville-Marie"
          faqsOverride={FAQS}
          sectionBg="white"
          sectionPy={{ base: 16, md: 20, lg: 24 }}
          maxW="900px"
         emitSchema={false} />

        <ResourcesSection
          title="Conseils avant votre projet de peinture à Ville-Marie"
          articles={BLOG_ARTICLES}
          hideButton
          sectionBg="gray.50"
        />

        {/* ===== SECTION 9 - CTA FINAL ===== */}
        <FinalCTASection
          title={'Prêt à confier votre projet à une équipe habituée au centre-ville\u00A0?'}
          subtitle="Obtenez votre soumission gratuite en moins de 24h."
          buttonText="Obtenir ma soumission gratuite"
          onSubmissionOpen={onOpen}
        />

      </Box>

      <SubmissionModal isOpen={isOpen} onClose={onClose} />
    </Fragment>
  );
}
