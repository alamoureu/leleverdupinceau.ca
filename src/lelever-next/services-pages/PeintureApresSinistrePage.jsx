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
  FaShieldAlt,
  FaBolt,
  FaWater,
  FaEye,
  FaLayerGroup,
  FaHandshake,
  FaHome,
  FaBuilding,
  FaCut,
  FaWind,
  FaClock,
} from 'react-icons/fa';
import SEOHead from '../seo/SEOHead';
import TrustBanner from '../home-page/TrustBanner';
import SubmissionModal from '../home-page/SubmissionModal';
import FinalCTASection from '../home-page/FinalCTASection';
import BeforeAfterCarouselSection from '../home-page/BeforeAfterCarouselSection';
import FAQSection from '../home-page/FAQSection';
import FeatureCardsSection from '../components/FeatureCardsSection';
import InternalLinksSection from '../components/InternalLinksSection';

import sinistreHeroImg from '../images/L2 Services specialise/Photo page -après-sinitre/header.jpg';

import sinistreAvant1 from '../images/L2 Services specialise/Photo page -après-sinitre/photo avant-après/IMG_7988.jpg';
import sinistreApres1 from '../images/L2 Services specialise/Photo page -après-sinitre/photo avant-après/IMG_7990.jpg';
import sinistreAvant2 from '../images/L2 Services specialise/Photo page -après-sinitre/photo avant-après/IMG_7992.jpg';
import sinistreApres2 from '../images/L2 Services specialise/Photo page -après-sinitre/photo avant-après/IMG_7994.jpg';
import ServiceGuaranteeSection from '../home-page/ServiceGuaranteeSection';

const CHECKMARKS = [
  {
    icon: FaBolt,
    title: 'Intervention rapide une fois la source maîtrisée',
    text: 'Quand le dégât est arrêté et les surfaces stabilisées, on peut planifier rapidement la reprise pour éviter que la situation s\'éternise inutilement.',
  },
  {
    icon: FaEye,
    title: 'Blocage des taches et reprise des zones marquées',
    text: 'Taches d\'eau, auréoles, jaunissement, suie légère ou reprises visibles : on adapte l\'apprêt et le système de finition pour éviter que les marques réapparaissent.',
  },
  {
    icon: FaHandshake,
    title: 'Coordination avec les réparations nécessaires',
    text: 'Si un plafond a été ouvert, qu\'un mur a été repris ou qu\'un panneau a été remplacé, on séquence les étapes pour que la finition finale soit propre et cohérente.',
  },
  {
    icon: FaShieldAlt,
    title: 'Travail propre, protégé et rassurant dans un contexte sensible',
    text: 'Après un incident, les lieux sont souvent déjà stressants à gérer. On protège, on communique clairement et on remet le chantier au propre chaque jour.',
  },
  {
    icon: FaClock,
    title: 'Remise en état pièce par pièce lorsque nécessaire',
    text: 'Dans certains contextes, il est plus réaliste d\'avancer par zones afin de redonner rapidement l\'usage d\'une partie de l\'espace.',
  },
  {
    icon: FaLayerGroup,
    title: 'Fini uniforme malgré les reprises locales',
    text: 'Le vrai défi après-sinistre n\'est pas juste de repeindre, c\'est de faire disparaître visuellement la reprise pour retrouver un résultat homogène.',
  },
];

const CONTEXTES = [
  {
    icon: FaWater,
    title: 'Dégât d\'eau au plafond ou sur les murs',
    text: 'Une infiltration, un tuyau, un débordement ou une trace d\'humidité laisse souvent des marques visibles et parfois des matériaux repris localement. On intervient une fois les surfaces sèches et stabilisées pour uniformiser le résultat.',
  },
  {
    icon: FaWind,
    title: 'Fumée légère, odeurs résiduelles et jaunissement',
    text: 'Après un incident mineur ou une accumulation de fumée, certaines surfaces gardent une odeur ou des traces qui traversent la peinture standard. Le bon système d\'apprêt et de finition évite les remontées visuelles.',
  },
  {
    icon: FaCut,
    title: 'Ouverture puis fermeture de murs ou plafonds',
    text: 'Quand des travaux correctifs ont exigé d\'ouvrir une surface, la finition finale doit faire disparaître visuellement la reprise. C\'est là que la coordination entre réparation, préparation et peinture devient essentielle.',
  },
  {
    icon: FaHome,
    title: 'Condo, appartement ou logement à remettre rapidement en état',
    text: 'Après un incident, le vrai enjeu est souvent le délai. On planifie le chantier de façon réaliste pour remettre le logement ou l\'unité dans un état propre, cohérent et prêt à réutiliser.',
  },
  {
    icon: FaBuilding,
    title: 'Bureau, commerce ou espace à présenter rapidement',
    text: 'Dans un contexte commercial léger, on peut séquencer les travaux pour réduire l\'impact sur l\'exploitation tout en redonnant rapidement une apparence professionnelle au lieu.',
  },
];

const FAQS = [
  {
    question: 'Pouvez-vous repeindre après un dégât d\'eau\u00A0?',
    answer: 'Oui, lorsque la source du problème est réglée et que les surfaces sont sèches et stabilisées. Avant de repeindre, il faut s\'assurer que la zone n\'est plus active et que les matériaux repris sont prêts à recevoir la finition.',
  },
  {
    question: 'Est-ce que la peinture suffit pour couvrir une tache d\'eau ou de fumée\u00A0?',
    answer: 'Pas toujours. Une peinture standard seule n\'est souvent pas suffisante. Selon le type de marque, un apprêt bloque-taches ou un système plus adapté peut être nécessaire pour éviter que la trace réapparaisse.',
  },
  {
    question: 'Faites-vous aussi les réparations de plâtre ou de gypse avant de repeindre\u00A0?',
    answer: 'Oui, lorsque la surface a besoin d\'être reprise avant la finition, nous pouvons intégrer la réparation nécessaire dans le bon séquençage du chantier pour obtenir un résultat propre et cohérent.',
  },
  {
    question: 'Combien de temps faut-il attendre avant de repeindre après une infiltration\u00A0?',
    answer: 'Cela dépend de la nature du dommage, de l\'humidité résiduelle et des matériaux touchés. L\'important est de ne pas repeindre trop tôt. Une surface encore humide compromet la tenue et l\'apparence du résultat final. Dans la grande majorité des cas nous changeons le gypse.',
  },
  {
    question: 'Pouvez-vous intervenir rapidement pour remettre un logement ou une pièce en état\u00A0?',
    answer: 'Oui. Lorsqu\'un espace doit redevenir présentable rapidement, nous pouvons prioriser certaines zones et avancer de façon séquencée pour remettre le lieu en service dans un délai réaliste.',
  },
  {
    question: 'Travaillez-vous aussi dans des condos ou des petits espaces commerciaux après un sinistre\u00A0?',
    answer: 'Oui. Nous adaptons le chantier selon les contraintes d\'accès, les règles du bâtiment et le niveau d\'occupation afin de limiter les perturbations et de garder le projet bien coordonné.',
  },
];

const INTERNAL_LINKS = [
  {
    title: 'Préparation de surfaces',
    description: 'Lavage, sablage, calfeutrage et apprêt - la fondation du résultat.',
    to: '/services/preparation-de-surfaces',
  },
  {
    title: 'Réparation de plâtre et gypse',
    description: 'Fissures, trous, joints et remise à niveau du support avant finition.',
    to: '/services/reparation-de-platre-et-gypse',
  },
  {
    title: 'Peinture intérieure',
    description: 'Techniques, finis, couches et surfaces intérieures.',
    to: '/services/peinture-interieure',
  },
  {
    title: 'Peinture résidentielle',
    description: 'Maison, condo, appartement - expérience client et respect de l\'espace.',
    to: '/services/peinture-residentielle',
  },
  {
    title: 'Peinture commerciale',
    description: 'Bureau, restaurant, commerce - hors heures et échéanciers serrés.',
    to: '/services/peinture-commerciale',
  },
  {
    title: 'Pourquoi engager un peintre professionnel\u00A0?',
    description: 'Licence RBQ, assurance, expertise - ce qui fait la différence.',
    to: '/peintre-professionnel',
  },
  {
    title: 'Nos secteurs desservis',
    description: 'Montréal, Laval, Longueuil et la Rive-Sud.',
    to: '/secteurs',
  },
  {
    title: 'Voir nos réalisations',
    description: 'Projets avant/après incluant des remises en état après sinistre.',
    to: '/realisations',
  },
  {
    title: 'Obtenir une soumission',
    description: 'Réponse en moins de 24h, sans engagement.',
    to: '/contact',
  },
];

export default function PeintureApresSinistrePage() {
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
        name: 'Peinture après-sinistre',
        item: 'https://leleverdupinceau.ca/services/peinture-apres-sinistre',
      },
    ],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Peinture après-sinistre à Montréal',
    description:
      'Service de peinture après-sinistre à Montréal pour dégâts d\'eau, fumée légère, plafonds tachés et remise en état après réparations. Intervention structurée, propre et rapide.',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Le Lever du Pinceau',
      url: 'https://leleverdupinceau.ca',
    },
    areaServed: {
      '@type': 'City',
      name: 'Montréal',
    },
    serviceType: 'Peinture après-sinistre',
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
      before: sinistreAvant1,
      after: sinistreApres1,
      description: 'Peinture après sinistre plafond Montréal avant après',
    },
    {
      before: sinistreAvant2,
      after: sinistreApres2,
      description: 'Remise en état après dégât d\'eau - surface repeinte Montréal',
    },
  ];

  return (
    <Fragment>
      <SEOHead
        title="Peinture après-sinistre à Montréal | Dégât d'eau et remise en état | Le Lever du Pinceau"
        description="Peinture après-sinistre à Montréal pour dégâts d'eau, fumée légère, plafonds tachés et remise en état après réparations. Intervention structurée, propre et rapide. Soumission gratuite."
        canonicalPath="/services/peinture-apres-sinistre"
        schemaArray={[breadcrumbSchema, serviceSchema, faqSchema]}
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
            src={sinistreHeroImg}
            alt="Peinture après-sinistre à Montréal - espace remis en état après dégât d'eau"
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
                    Peinture après-sinistre
                  </Text>
                </HStack>

                <Heading as="h1" size="hero" color="white" minW={0}>
                  Peinture après sinistre à Montréal
                </Heading>

                <Text
                  variant="heroSubtitle"
                  color="white"
                  maxW={{ base: '100%', md: '680px', lg: '780px' }}
                >
                  Remise en état après dégât d&apos;eau, fumée ou reprise de travaux.
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

        {/* ===== SECTION 3 - CHECKMARKS REMISE EN ÉTAT ===== */}
        <FeatureCardsSection
          title="Après un dommage, la finition doit être reprise dans le bon ordre"
          subtitle="Diagnostic, préparation ciblée et remise en état pour retrouver un espace propre, stable et présentable"
          items={CHECKMARKS}
          variant="inline"
          sectionBg="white"
        />

        {/* ===== SECTION 4 - CONTEXTES APRÈS-SINISTRE ===== */}
        <FeatureCardsSection
          title="Une approche adaptée au type de dommage et à l'état réel des surfaces"
          subtitle="Ici, on ne parle pas juste de repeindre : on parle de remettre un espace en état après un événement perturbateur"
          items={CONTEXTES}
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
          title="Avant / après : surfaces remises en état après un dommage"
          subtitle="Plafonds tachés, murs marqués et zones reprises - avant et après remise en état à Montréal."
          images={carouselImages}
          sectionPaddingTop={{ base: 16, md: 20, lg: 24 }}
          sectionPaddingBottom={{ base: 6, md: 8 }}
        />

        {/* ===== SECTION 6 - GARANTIE + CTA MID-PAGE ===== */}
        <ServiceGuaranteeSection
          body="Chaque projet de remise en état est suivi jusqu'à ce que le résultat soit propre, uniforme et conforme aux attentes. On ne quitte pas le chantier tant que l'espace n'est pas prêt."
          onCtaClick={onOpen}
        />

        <FAQSection
          title="Questions fréquentes sur la peinture après-sinistre"
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
          title={'Besoin de remettre un espace en état après un dommage\u00A0?'}
          subtitle={'Obtenez votre soumission gratuite en moins de 24h'}
          buttonText={'Obtenir ma soumission gratuite'}
        />

      </Box>

      <SubmissionModal isOpen={isOpen} onClose={onClose} />
    </Fragment>
  );
}
