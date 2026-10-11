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
  FaSync,
  FaThLarge,
  FaShieldAlt,
  FaHome,
  FaStar,
  FaPhone,
  FaKey,
  FaCouch,
  FaTag,
  FaBroom,
  FaBuilding,
} from 'react-icons/fa';
import SEOHead from '../seo/SEOHead';
import TrustBanner from '../home-page/TrustBanner';
import SubmissionModal from '../home-page/SubmissionModal';
import FinalCTASection from '../home-page/FinalCTASection';
import BeforeAfterCarouselSection from '../home-page/BeforeAfterCarouselSection';
import FAQSection from '../home-page/FAQSection';
import FeatureCardsSection from '../components/FeatureCardsSection';
import InternalLinksSection from '../components/InternalLinksSection';

import appartHeroImg from '../images/L3 Sous services/Photo page appartement/header.PNG';
import appartImg6759 from '../images/L3 Sous services/Photo page appartement/Avant après/IMG_6759 2.jpg';
import appartImg7983 from '../images/L3 Sous services/Photo page appartement/Avant après/IMG_7983 2.jpg';
import ServiceGuaranteeSection from '../home-page/ServiceGuaranteeSection';

const PLACEHOLDER_PAIR = { before: null, after: null };

const CHECKMARKS = [
  {
    icon: FaSync,
    title: 'Remise en état rapide entre deux occupants',
    text: 'Quand un logement doit être reloué vite, l\'objectif est de rafraîchir efficacement sans sacrifier la qualité du résultat.',
  },
  {
    icon: FaThLarge,
    title: 'Planification simple dans un espace compact',
    text: 'Dans un appartement, l\'espace de circulation, de stockage et de travail est souvent limité. Le chantier doit rester structuré et propre.',
  },
  {
    icon: FaShieldAlt,
    title: 'Protection des planchers, comptoirs et zones sensibles',
    text: 'Même sur un petit logement, les éclaboussures et traces se remarquent immédiatement. La protection n\'est pas optionnelle.',
  },
  {
    icon: FaHome,
    title: 'Travaux adaptés à un logement occupé ou semi-meublé',
    text: 'Quand tout n\'est pas vide, il faut séquencer les pièces intelligemment pour garder l\'espace le plus fonctionnel possible.',
  },
  {
    icon: FaStar,
    title: 'Impact visuel immédiat avant location ou vente',
    text: 'Un appartement fraîchement peint paraît plus propre, plus lumineux et plus facile à projeter pour un futur locataire ou acheteur.',
  },
  {
    icon: FaPhone,
    title: 'Communication claire avec propriétaire, gestionnaire ou locataire',
    text: 'On garde un plan simple : accès, échéancier, zones à traiter et résultat attendu.',
  },
];

const SITUATIONS = [
  {
    icon: FaKey,
    title: 'Appartement entre deux locataires',
    text: 'C\'est souvent le moment idéal pour intervenir vite, avec un espace plus libre et une priorité claire : remettre le logement propre et attrayant pour la relocation.',
  },
  {
    icon: FaCouch,
    title: 'Appartement encore occupé',
    text: 'Quand le locataire est sur place ou qu\'une partie du logement reste utilisée, le chantier doit être séquencé avec ordre, rapidité et respect de l\'espace.',
  },
  {
    icon: FaTag,
    title: 'Rafraîchissement avant mise en vente',
    text: 'Un appartement fraîchement peint aide à corriger l\'impression d\'usure, uniformiser les murs et augmenter la valeur perçue dès les visites.',
  },
  {
    icon: FaBroom,
    title: 'Logement locatif avec traces d\'usure',
    text: 'Marques, trous, frottements, reprises visibles et zones fatiguées exigent une vraie remise au propre avant peinture pour que le logement reparte sur une base saine.',
  },
  {
    icon: FaBuilding,
    title: 'Petit appartement ou espace très compact',
    text: 'Studio, 3½ ou 4½ : plus l\'espace est restreint, plus la gestion du matériel, des protections et de la circulation doit être maîtrisée.',
  },
];

const FAQS = [
  {
    question: 'Est-ce que vous pouvez peindre un appartement entre deux locataires\u00A0?',
    answer: 'Oui. C\'est souvent l\'un des contextes les plus simples pour intervenir rapidement. Le logement peut être remis au propre efficacement avant relocation, avec un résultat net et un échéancier plus facile à respecter.',
  },
  {
    question: 'Pouvez-vous travailler dans un appartement encore occupé\u00A0?',
    answer: 'Oui, dans la majorité des cas. Nous séquençons les travaux pour limiter l\'impact sur le quotidien et garder l\'espace aussi fonctionnel que possible pendant le chantier.',
  },
  {
    question: 'Est-ce que vous réparez aussi les trous, fissures et marques avant de peindre\u00A0?',
    answer: 'Oui. Un bon résultat passe par une remise en état minimale ou plus complète selon le niveau d\'usure du logement. Les défauts visibles sont corrigés avant l\'application de la finition.',
  },
  {
    question: 'Combien de temps faut-il pour peindre un appartement\u00A0?',
    answer: 'Cela dépend de la superficie, du nombre de pièces, de l\'état des surfaces et du niveau de préparation requis. Une soumission permet d\'établir un échéancier clair dès le départ.',
  },
  {
    question: 'Est-ce que la peinture peut aider à relouer ou vendre plus facilement un appartement\u00A0?',
    answer: 'Oui. Un appartement fraîchement peint paraît généralement plus propre, plus lumineux et mieux entretenu, ce qui améliore la première impression dès la visite.',
  },
];

const INTERNAL_LINKS = [
  {
    title: 'Peinture résidentielle',
    description: 'Page parente - maisons, condos, logements et appartements.',
    to: '/services/peinture-residentielle',
  },
  {
    title: 'Peinture intérieure',
    description: 'Complément technique : surfaces, finis, couches et préparation.',
    to: '/services/peinture-interieure',
  },
  {
    title: 'Réparation de plâtre et gypse',
    description: 'Remise en état des murs avant peinture.',
    to: '/services/reparation-de-platre-et-gypse',
  },
  {
    title: 'Peinture après-sinistre',
    description: 'Remise en état suite à dégât d\'eau, incendie ou moisissures.',
    to: '/services/peinture-apres-sinistre',
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
  {
    title: 'Voir nos réalisations',
    description: 'Avant / après de projets réels pour juger la qualité de finition.',
    to: '/realisations',
  },
  {
    title: 'Peinture intérieure à Montréal',
    description: 'Page locale - intérieur résidentiel et commercial dans la métropole.',
    to: '/peinture-interieure-montreal',
  },
  {
    title: 'Obtenir une soumission',
    description: 'Réponse en moins de 24h, sans engagement.',
    to: '/contact',
  },
];

export default function PeintureAppartementPage() {
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
        name: 'Peinture résidentielle',
        item: 'https://leleverdupinceau.ca/services/peinture-residentielle',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Peinture d\'appartement',
        item: 'https://leleverdupinceau.ca/services/peinture-residentielle/appartement',
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
      ...PLACEHOLDER_PAIR,
      description:
        'Emplacement : paire appartement à photographier (les visuels Plateau étaient déjà sur la page peinture intérieure Montréal).',
    },
    {
      before: appartImg7983,
      after: appartImg6759,
      description: 'Cage d\'escalier - Remise en état, Montréal',
    },
    {
      ...PLACEHOLDER_PAIR,
      description:
        'Troisième emplacement : éviter la même paire que la page après sinistre ou préparation de surfaces.',
    },
  ];

  return (
    <Fragment>
      <SEOHead
        title="Peinture d'appartement à Montréal | Remise en état locative | Le Lever du Pinceau"
        description="Peinture d'appartement à Montréal pour logement occupé, remise en état entre locataires ou rafraîchissement avant vente. Soumission gratuite en 24h."
        canonicalPath="/services/peinture-residentielle/appartement"
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
            src={appartHeroImg}
            alt="Peinture appartement Montréal - intérieur propre et lumineux remis au goût du jour"
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
                  <Link
                    as={RouterLink}
                    to="/services/peinture-residentielle"
                    color="whiteAlpha.800"
                    _hover={{ color: 'white', textDecoration: 'underline' }}
                  >
                    Peinture résidentielle
                  </Link>
                  <Text color="whiteAlpha.600">›</Text>
                  <Text color="white" fontWeight="medium">
                    Appartement
                  </Text>
                </HStack>

                <Heading as="h1" size="hero" color="white" minW={0}>
                  Peinture d&apos;appartement à Montréal
                </Heading>

                <Text
                  variant="heroSubtitle"
                  color="white"
                  maxW={{ base: '100%', md: '680px', lg: '780px' }}
                >
                  Remise au propre rapide pour logement occupé ou mise en location.
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

        {/* ===== SECTION 3 - CHECKMARKS LOGEMENT LOCATIF ===== */}
        <FeatureCardsSection
          title="Une remise au propre pensée pour la réalité d'un appartement"
          subtitle="Quand le délai est serré et que chaque jour compte, l'organisation du chantier devient aussi importante que la finition."
          items={CHECKMARKS}
          variant="inline"
          sectionBg="white"
          sectionPy={{ base: 10, md: 12, lg: 14 }}
        />

        {/* ===== SECTION 4 - SITUATIONS COURANTES ===== */}
        <FeatureCardsSection
          title="Une approche différente selon la situation du logement"
          subtitle="Un appartement occupé, un logement à relouer ou un rafraîchissement avant vente ne se planifient pas de la même façon."
          items={SITUATIONS}
          variant="stacked"
          sectionBg="gray.50"
          columns={{ base: 1, md: 2, lg: 3 }}
        />

        {/* ===== SECTION 5 - AVANT / APRÈS ===== */}
        <BeforeAfterCarouselSection
          isFr={true}
          title="Avant / après de projets en appartement"
          subtitle="Espaces compacts remis au propre, logements lumineux et finitions nettes dans des appartements montréalais."
          images={carouselImages}
          sectionPaddingTop={{ base: 16, md: 20, lg: 24 }}
          sectionPaddingBottom={{ base: 6, md: 8 }}
        />

        {/* ===== SECTION 6 - GARANTIE + CTA MID-PAGE ===== */}
        <ServiceGuaranteeSection
          title="Un appartement bien repeint se loue et se présente beaucoup mieux"
          body="Dans un appartement, la perception visuelle change très vite avec une peinture propre et uniforme. Que l'objectif soit de remettre un logement en état, de le relouer plus facilement, de le vendre ou simplement de l'habiter dans de meilleures conditions, le chantier doit être rapide, propre et bien organisé. Notre approche vise justement à créer ce résultat sans ajouter de friction inutile."
          onCtaClick={onOpen}
        />

        <FAQSection
          title="Questions fréquentes sur la peinture d'appartement"
          faqsOverride={FAQS}
          sectionBg="white"
          sectionPy={{ base: 16, md: 20, lg: 24 }}
          maxW="900px"
        />

        <InternalLinksSection
          title="En savoir plus"
          links={INTERNAL_LINKS}
          columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
        />

        {/* ===== SECTION 9 - CTA FINAL ===== */}
        <FinalCTASection
          title={'Besoin de remettre un appartement au propre rapidement\u00A0?'}
          subtitle="Obtenez votre soumission gratuite en moins de 24h"
          buttonText="Obtenir ma soumission gratuite"
          onSubmissionOpen={onOpen}
        />

      </Box>

      <SubmissionModal isOpen={isOpen} onClose={onClose} />
    </Fragment>
  );
}
