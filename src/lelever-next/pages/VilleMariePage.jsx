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
  FaBuilding,
  FaBroom,
  FaCog,
  FaClock,
  FaComments,
  FaLayerGroup,
  FaKey,
  FaExchangeAlt,
  FaBriefcase,
  FaTag,
  FaCheckCircle,
  FaRoute,
  FaStar,
} from 'react-icons/fa';
import SEOHead from '../seo/SEOHead';
import HeroSection from '../home-page/HeroSection';
import TrustBanner from '../home-page/TrustBanner';
import PageIntro from '../components/PageIntro';
import ContactFormSection from '../home-page/ContactFormSection';
import SubmissionModal from '../home-page/SubmissionModal';
import FinalCTASection from '../home-page/FinalCTASection';
import { RBQ_LICENSE } from '../constants/company';

import heroImg from '../images/L3 Sous services/Photo page -peinture condo/header.jpg';
import condoImg from '../images/L3 Sous services/Photo page -peinture condo/avant apres/IMG_8108.jpg';
import emmenagementImg from '../images/L2 Services principaux/Photo page -peinture-résidentielle/avant après/Peinture résidentielle Montréal, chambre après.jpg';
import appartementImg from '../images/L3 Sous services/Photo page appartement/header.PNG';
import bureauImg from '../images/2-services/Page peinture commerciale/1. réalisations/IMG_6760.PNG';
import miseEnVenteImg from '../images/L2 Services principaux/Photo page -peinture-résidentielle/avant après/Peinture résidentielle Montréal, pièce double après.jpg';

const BREADCRUMB = [
  { label: 'Accueil', to: '/' },
  { label: 'Secteurs', to: '/secteurs' },
  { label: 'Montréal', to: '/secteurs/montreal' },
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
    to: '/peinture-interieure-montreal',
    cta: 'Voir la page',
  },
  {
    title: 'Peinture extérieure à Montréal',
    text: 'Pour les façades, balcons, boiseries extérieures et surfaces exposées au climat montréalais.',
    to: '/peinture-exterieure-montreal',
    cta: 'Voir la page',
  },
  {
    title: 'Peinture résidentielle',
    text: 'Pour un chantier simple à vivre, bien planifié et sans stress dans votre condo, appartement ou propriété urbaine.',
    to: '/services/peinture-residentielle',
    cta: 'Voir la page',
  },
  {
    title: 'Nos réalisations',
    text: 'Pour montrer des projets concrets et appuyer la crédibilité dans un contexte centre-ville.',
    to: '/realisations',
    cta: 'Voir les projets',
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
    answer: 'Oui. Nous intervenons dans les condos, tours résidentielles et autres types d\'unités à Ville-Marie. Ce type de projet demande souvent une bonne coordination avec l\'immeuble, un chantier propre et une attention particulière aux accès et aux espaces communs. Notre approche s\'adapte à ces contraintes pour que les travaux se déroulent de façon simple, efficace et bien encadrée.',
  },
  {
    question: 'Comment gérez-vous les accès, ascenseurs et horaires d\'immeuble au centre-ville\u00A0?',
    answer: 'Les projets au centre-ville demandent souvent une planification plus précise. Nous tenons compte des accès, des ascenseurs, des plages horaires permises, du stationnement et des règles de l\'immeuble avant de commencer les travaux. L\'objectif est de garder le chantier organisé dès le départ afin de limiter les imprévus et de travailler efficacement dans un environnement plus encadré.',
  },
  {
    question: 'Pouvez-vous travailler avant un emménagement, une relocation ou une mise en vente\u00A0?',
    answer: 'Oui. Nous réalisons régulièrement des projets avant un emménagement, une relocation ou une mise en vente. Dans ce contexte, le respect des délais est particulièrement important. Nous planifions donc le chantier avec un échéancier clair afin que les travaux soient complétés au bon moment et que l\'espace soit prêt à être occupé, reloué ou présenté dans les meilleures conditions.',
  },
  {
    question: 'Travaillez-vous aussi dans des bureaux ou espaces commerciaux légers à Ville-Marie\u00A0?',
    answer: 'Oui. Nous pouvons intervenir dans certains bureaux, locaux professionnels et espaces commerciaux légers à Ville-Marie, selon le type de projet. Ce genre d\'intervention demande souvent de la flexibilité, une bonne coordination et un chantier propre afin de limiter les impacts sur les activités en place. Chaque projet est évalué selon ses contraintes et son échéancier.',
  },
  {
    question: 'Combien de temps faut-il pour obtenir une soumission à Ville-Marie\u00A0?',
    answer: 'Nous répondons en moins de 24 heures. Le délai exact dépend du type de projet, des informations fournies et de la période de l\'année. Plus votre demande est claire dès le départ, plus nous pouvons vous transmettre rapidement une soumission précise, adaptée à votre propriété et aux contraintes propres à Ville-Marie.',
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
    telephone: '+15148005155',
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
          subtitle="Des peintres de métier pour vos projets résidentiels et commerciaux légers au coeur de Montréal."
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
            <Text color="white" fontWeight="medium">Ville-Marie</Text>
          </HStack>
        </HeroSection>
        <TrustBanner />
        <PageIntro>
          Condos centre-ville, tours résidentielles, unités locatives, bureaux légers et projets avant emménagement : nous réalisons des chantiers propres, rapides et bien coordonnés dans Ville-Marie.
        </PageIntro>

        {/* ===== SECTION 3 - CHECKMARKS VILLE-MARIE ===== */}
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
                  Une équipe habituée aux réalités d&apos;un chantier centre-ville
                </Heading>
                <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" lineHeight="1.7">
                  À Ville-Marie, la réussite du projet dépend autant de la logistique et de la coordination que de la finition.
                </Text>
                <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" lineHeight="1.7">
                  {"Ville-Marie regroupe la plus forte densité de tours à condos de la région, ce qui change la nature du travail : réserver l'ascenseur de service à l'avance, obtenir l'accord du conseil d'administration de la copropriété pour les travaux touchant les parties communes, respecter les plages horaires imposées par le règlement de l'immeuble et les heures de travail permises au centre-ville. Le défi n'est pas la façade ou la fondation, mais la coordination : on planifie ces étapes administratives avant même de fixer une date de chantier."}
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

        {/* ===== SECTION 4 - CONTEXTES FRÉQUENTS À VILLE-MARIE ===== */}
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
                    <Image
                      src={item.image}
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

        {/* ===== SECTION 5 - SERVICES LES PLUS DEMANDÉS À VILLE-MARIE ===== */}
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
                Questions fréquentes sur nos services de peinture à Ville-Marie
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
