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
import { LOCAL_BUSINESS_SCHEMA } from '../seo/config';
import HeroSection from '../home-page/HeroSection';
import { TRUST_BANNER_BELOW_PT } from '../home-page/TrustBanner';
import { SECTION_PY, TRUST_BANNER_AIR_SPACE } from '../constants/sectionSpacing';
import SubmissionModal from '../home-page/SubmissionModal';
import FinalCTASection from '../home-page/FinalCTASection';
import BeforeAfterCarouselSection from '../home-page/BeforeAfterCarouselSection';
import FAQSection from '../home-page/FAQSection';
import FeatureCardsSection from '../components/FeatureCardsSection';
import InternalLinksSection from '../components/InternalLinksSection';
import ContactFormSection from '../home-page/ContactFormSection';

import heroImg from '../images/3-ville/Montréal/westmount/header.webp';
import maisonImg from '../images/2-services/Page peinture résidentielle/Photo header/IMG_7844.webp';
import condoImg from '../images/L3 Sous services/Photo page -peinture condo/header.webp';
import miseEnVenteImg from '../images/L2 Services principaux/Photo page -peinture-résidentielle/avant après/Peinture résidentielle Montréal, pièce double après.webp';
import emmenagementImg from '../images/L3 Sous services/Photo page appartement/header.webp';
import commercialImg from '../images/2-services/Page peinture commerciale/1. réalisations/IMG_6760.webp';
import salleEauAvant from '../images/3-ville/Montréal/westmount/avant-apres/IMG_0807.webp';
import salleEauApres from '../images/3-ville/Montréal/westmount/avant-apres/IMG_0808.webp';
import wmAdd1b from '../images/3-ville/brossard/avant-apres/IMG_0826.webp';
import wmAdd1a from '../images/3-ville/brossard/avant-apres/IMG_0827.webp';
import wmAdd2b from "../images/L2 Services principaux/Photo page -peinture-extérieure/+Photo avant après/Peinture extérieure Montréal, porte d'entrée avant.webp";
import wmAdd2a from "../images/L2 Services principaux/Photo page -peinture-extérieure/+Photo avant après/Peinture extérieure Montréal, porte d'entrée après.webp";
import wmAdd3b from '../images/3-ville/brossard/avant-apres/IMG_0846.webp';
import wmAdd3a from '../images/3-ville/brossard/avant-apres/IMG_0847.webp';
import wmAdd4b from '../images/3-ville/brossard/avant-apres/IMG_0855.webp';
import wmAdd4a from '../images/3-ville/brossard/avant-apres/IMG_0856.webp';
import wmAdd5b from '../images/3-ville/laprairie/avant-apres/IMG_0861.webp';
import wmAdd5a from '../images/3-ville/laprairie/avant-apres/IMG_0862.webp';
import wmAdd6b from '../images/L3 Services X Villes/Photo page -peinture-intérieure-montréal/Avant-après/westmount avant.webp';
import wmAdd6a from '../images/L3 Services X Villes/Photo page -peinture-intérieure-montréal/Avant-après/westmount après.webp';
const BEFORE_AFTER = [
  { before: salleEauAvant, after: salleEauApres, description: 'Salle d\'eau - murs repeints, moulures rafraîchies' },

  { before: wmAdd1b, after: wmAdd1a, description: 'Escalier extérieur - peinture' },
  { before: wmAdd2b, after: wmAdd2a, description: "Porte d'entrée - décapage et peinture" },
  { before: wmAdd3b, after: wmAdd3a, description: 'Salon - murs et boiseries' },
  { before: wmAdd4b, after: wmAdd4a, description: 'Pièce intérieure - finition nette' },
  { before: wmAdd5b, after: wmAdd5a, description: 'Plinthe et murs - finition' },
  { before: wmAdd6b, after: wmAdd6a, description: 'Pièce double - Westmount' },
];

const HERO_BREADCRUMB = [
  { label: 'Accueil', to: '/' },
  { label: 'Secteurs', to: '/secteurs' },
  { label: 'Montréal', to: '/secteurs/montreal' },
  { label: 'Westmount' },
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
    to: '/services/peinture-residentielle/maison',
    linkLabel: 'Voir la peinture de maison unifamiliale',
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
    to: '/services/peinture-interieure',
    cta: 'Voir la page',
  },
  {
    title: 'Peinture extérieure',
    text: 'Pour les façades, boiseries extérieures, balcons, escaliers et surfaces exposées au climat montréalais.',
    to: '/services/peinture-exterieure',
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
    question: 'Travaillez-vous sur les grandes maisons de caractère et leurs finitions intérieures\u00A0?',
    answer: 'Oui. À Westmount, plusieurs projets concernent des maisons de caractère avec boiseries, moulures et planchers qu\'il faut protéger autant que peindre. La préparation, le masquage et le choix des finis sont adaptés à ce niveau de détail pour un résultat net sans abîmer ce qui est déjà en place.',
  },
  {
    question: 'Pouvez-vous peindre avant une mise en marché ou une séance photo immobilière\u00A0?',
    answer: 'Oui. C\'est un contexte fréquent à Westmount. Nous planifions le chantier avec un échéancier serré pour que les espaces soient propres, uniformes et prêts pour les photos ou les visites, sans laisser un chantier à moitié terminé le jour J.',
  },
  {
    question: 'Intervenez-vous aussi dans les condos à Westmount\u00A0?',
    answer: 'Oui. En condo, on coordonne accès, protection des parties communes et règles de l\'immeuble. L\'approche reste la même sur la qualité de finition, avec une logistique plus encadrée que dans une maison unifamiliale.',
  },
];

const INTERNAL_LINKS = [
  {
    title: 'Peinture intérieure à Montréal',
    description: 'Intérieur résidentiel et commercial dans la métropole.',
    to: '/services/peinture-interieure',
  },
  {
    title: 'Peinture extérieure à Montréal',
    description: 'Façades, boiseries, balcons et surfaces exposées.',
    to: '/services/peinture-exterieure',
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
    telephone: LOCAL_BUSINESS_SCHEMA.telephone,
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

        <HeroSection
          onSubmissionOpen={onOpen}
          pageContext='Westmount'
          imageBackground={heroImg}
          imageAlt='Peintre à Westmount - intérieur résidentiel haut de gamme'
          overlayBg='rgba(0, 0, 0, 0.45)'
          title='Peintre à Westmount'
          subtitle='Peintres de métier pour projets soignés et exigeants.'
          description='Maisons, condos et espaces raffinés - chantiers discrets.'
          buttonText='Soumission gratuite'
          breadcrumb={HERO_BREADCRUMB}
        />
{/* ===== SECTION 3 - CHECKMARKS WESTMOUNT ===== */}
        <Box pt={TRUST_BANNER_BELOW_PT} pb={0} bg="white">
          <Container maxW="1440px" px={{ base: 4, md: 6 }}>
            <Stack spacing={4} textAlign="center" maxW={{ base: '100%', md: '960px', lg: '1100px' }} mx="auto">
              <Heading
                as="h2"
                fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                fontWeight="bold"
                color="gray.800"
              >
                Une équipe habituée aux projets où chaque détail compte
              </Heading>
              <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" lineHeight="1.7">À Westmount, la qualité perçue du service repose autant sur l'exécution que sur la manière d'entrer et de travailler dans les lieux.</Text>
              <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" lineHeight="1.7">{"Westmount s'étend à flanc du mont Royal et compte de nombreuses résidences centenaires en pierre grise (greystone), avec toitures d'ardoise et solins de cuivre. Une bonne partie du secteur est aussi soumise à des règles municipales de conservation du patrimoine qui peuvent encadrer les changements de couleur extérieure, à vérifier auprès de la Ville avant certains projets de façade. Nos équipes travaillent avec le soin supplémentaire que demandent ces matériaux (pierre, cuivre, boiseries d'époque) plutôt qu'avec les méthodes d'une construction standard."}</Text>
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
              <Stack spacing={4} textAlign="center" maxW={{ base: '100%', md: '960px', lg: '1100px' }} mx="auto">
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
              <Stack spacing={4} textAlign="center" maxW={{ base: '100%', md: '960px', lg: '1100px' }} mx="auto">
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
              <Stack spacing={4} textAlign="center" maxW={{ base: '100%', md: '960px', lg: '1100px' }} mx="auto">
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

        <FAQSection
          title="Questions fréquentes sur nos services de peinture à Westmount"
          faqsOverride={FAQS}
          sectionBg="white"
          sectionPy={{ base: 16, md: 20, lg: 24 }}
          maxW="900px"
          emitSchema={false}
        />

        <InternalLinksSection
          title="Explorer les pages les plus utiles pour votre projet"
          links={INTERNAL_LINKS}
          columns={{ base: 1, sm: 2, md: 3, lg: 3 }}
        />

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
