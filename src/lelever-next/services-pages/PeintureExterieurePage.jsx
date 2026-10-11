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
  FaBrush,
  FaCloudRain,
  FaSearch,
  FaTools,
  FaShieldAlt,
  FaLayerGroup,
  FaHome,
  FaSwimmingPool,
  FaBorderAll,
  FaCar,
  FaBuilding,
  FaWindowMaximize,
  FaTh,
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

import exterieureHeroImg from '../images/2-services/Page peinture extérieure/Photo header/IMG_0989.JPG';

import avantApresTerrasseApres from '../images/L2 Services principaux/Photo page -peinture-extérieure/+Photo avant après/Peintre Montréal, Le Lever du Pinceau a teint cette terasse sur la rive-sud de Montréal.jpg';
import avantApresTerrasseAvant from '../images/L2 Services principaux/Photo page -peinture-extérieure/+Photo avant après/Peintre extérieur dans le grand Montréal, Le Lever du Pinceau a teint cette terasse sur la rive-sud de Montréal.jpg';
import avantApresEscalier1 from '../images/L2 Services principaux/Photo page -peinture-extérieure/+Photo avant après/Peintre Montréal, Le Lever du Pinceau a peint cette escalier en fer forgé dans le sud ouest à Montréal.jpg';
import avantApresEscalier2 from '../images/L2 Services principaux/Photo page -peinture-extérieure/+Photo avant après/Peintre extérieur dans le grand Montréal, Le Lever du Pinceau a peint cette escalier en fer forgé dans le sud ouest àMontréal.jpg';
import avantApresCorniche1 from '../images/L2 Services principaux/Photo page -peinture-extérieure/+Photo avant après/Peintre Montréal, Le Lever du Pinceau a peint cette cornciche dans Ville-Mont-Royal, Montréal.jpg';
import avantApresCorniche2 from '../images/L2 Services principaux/Photo page -peinture-extérieure/+Photo avant après/Peintre extérieur dans le grand Montréal, Le Lever du Pinceau a peint cette cornciche dans Ville-Mont-Royal, Montréal.jpg';
import avantApresEscalierBalconAvant from '../images/L2 Services principaux/Photo page -peinture-extérieure/+Photo avant après/Peinture extérieure Montréal, escalier de balcon avant.jpg';
import avantApresEscalierBalconApres from '../images/L2 Services principaux/Photo page -peinture-extérieure/+Photo avant après/Peinture extérieure Montréal, escalier de balcon après.jpg';
import avantApresPorteAvant from "../images/L2 Services principaux/Photo page -peinture-extérieure/+Photo avant après/Peinture extérieure Montréal, porte d'entrée avant.jpg";
import avantApresPorteApres from "../images/L2 Services principaux/Photo page -peinture-extérieure/+Photo avant après/Peinture extérieure Montréal, porte d'entrée après.jpg";
import avantApresRevetementAvant from '../images/L2 Services principaux/Photo page -peinture-extérieure/+Photo avant après/Peinture extérieure Montréal, revêtement maison avant.jpg';
import avantApresRevetementApres from '../images/L2 Services principaux/Photo page -peinture-extérieure/+Photo avant après/Peinture extérieure Montréal, revêtement maison après.jpg';
import ServiceGuaranteeSection from '../home-page/ServiceGuaranteeSection';

const CHECKMARKS = [
  {
    icon: FaBrush,
    title: 'Préparation adaptée aux conditions extérieures',
    text: 'Nettoyage haute pression, sablage, décapage, rebouchage et calfeutrage selon le type de matériau et son état avant peinture.',
  },
  {
    icon: FaCloudRain,
    title: 'Produits conçus pour le climat québécois',
    text: 'Cycles de gel-dégel, UV intenses, humidité saisonnière : les produits extérieurs doivent résister à des conditions que les peintures intérieures ne subissent pas.',
  },
  {
    icon: FaSearch,
    title: 'Inspection avant application',
    text: 'Vérification de l\'état du substrat, des joints, de la fixation et de la présence d\'humidité emprisonnée avant toute application.',
  },
  {
    icon: FaTools,
    title: 'Application selon la surface',
    text: 'Rouleau, pinceau ou pistolet airless selon le type de surface. La méthode d\'application influe directement sur la durabilité et l\'adhérence.',
  },
  {
    icon: FaShieldAlt,
    title: 'Protection du chantier et des surfaces voisines',
    text: 'Masquage, toiles et protection des surfaces adjacentes. Nettoyage complet à la fin de chaque journée de travail.',
  },
  {
    icon: FaLayerGroup,
    title: 'Respect des conditions météorologiques',
    text: 'Température minimale, humidité relative et prévisions de pluie sont vérifiées avant chaque application pour garantir l\'adhérence du produit.',
  },
];

const SPECIALITES = [
  {
    icon: FaHome,
    title: 'Revêtement extérieur',
    text: 'Bois, aluminium, vinyle ou maçonnerie : chaque matériau exige un produit et une technique adaptés pour assurer l\'adhérence et la longévité.',
    link: null,
  },
  {
    icon: FaSwimmingPool,
    title: 'Balcon et patio',
    text: 'Surfaces exposées à l\'usure fréquente, à l\'eau et aux UV. Peinture ou teinture selon le matériau, avec protection renforcée.',
    link: null,
  },
  {
    icon: FaBorderAll,
    title: 'Clôture en bois',
    text: 'Teinture ou peinture adaptée au bois exposé. Protection contre le grisaillement, les UV et l\'humidité.',
    link: null,
  },
  {
    icon: FaCar,
    title: 'Porte de garage',
    text: 'Surface très visible et exposée. Préparation soignée du métal ou du bois, apprêt adhérant et peinture résistante aux intempéries.',
    link: null,
  },
  {
    icon: FaBuilding,
    title: 'Fondation',
    text: 'Peinture hydrofuge spécialisée pour béton ou blocs. Application en conditions optimales pour limiter l\'infiltration d\'humidité.',
    link: null,
  },
  {
    icon: FaWindowMaximize,
    title: 'Fenêtres et cadrages',
    text: 'Boiseries extérieures, dormants et cadrages en bois ou aluminium. Découpes nettes, fini durable et protection contre les éléments.',
    link: null,
  },
  {
    icon: FaTh,
    title: 'Brique et maçonnerie',
    text: 'Teinture ou peinture spécialisée pour brique. Application délicate qui demande un produit respirant pour éviter le cloquage.',
    link: null,
  },
  {
    icon: FaTools,
    title: 'Fer forgé et métal',
    text: 'Sablage, traitement antirouille, apprêt métal et peinture adaptée. Pour rampes, escaliers et garde-corps extérieurs.',
    link: null,
  },
];

const FAQS = [
  {
    question: 'Quelle saison est la meilleure pour peindre l\'extérieur\u00A0?',
    answer: 'Les conditions idéales se trouvent généralement au printemps et à l\'automne, avec des températures entre 10 et 30°C et un taux d\'humidité raisonnable. L\'été peut convenir si la chaleur n\'est pas trop intense. Il faut éviter d\'appliquer de la peinture sous la pluie ou lorsque des précipitations sont prévues dans les 24 heures.',
  },
  {
    question: 'Est-ce que vous travaillez sur les maisons en brique\u00A0?',
    answer: 'Oui. La peinture ou la teinture sur brique demande des produits spécialisés qui permettent au matériau de respirer. Une brique mal peinte peut retenir l\'humidité et causer des problèmes à long terme. Nous évaluons l\'état de la brique avant de recommander une approche.',
  },
  {
    question: 'Combien de temps dure une peinture extérieure au Québec\u00A0?',
    answer: 'Avec une bonne préparation et des produits de qualité, une peinture extérieure peut tenir entre 5 et 10 ans selon les conditions d\'exposition. Les surfaces orientées au sud (plus de soleil direct) demandent souvent un entretien plus fréquent.',
  },
  {
    question: 'Comment préparez-vous les surfaces avant la peinture extérieure\u00A0?',
    answer: 'La préparation varie selon le matériau : nettoyage haute pression, sablage, décapage de l\'ancienne peinture écaillée, rebouchage des fissures, calfeutrage des joints et application d\'un apprêt adapté. Cette étape est souvent plus longue que l\'application elle-même, et elle détermine la durabilité du résultat.',
  },
];

const INTERNAL_LINKS = [
  {
    title: 'Peinture intérieure',
    description: 'Murs, plafonds, boiseries et armoires - techniques et produits.',
    to: '/services/peinture-interieure',
  },
  {
    title: 'Teinture extérieure',
    description: 'Patio, clôture et revêtement bois - pénétration et protection.',
    to: '/services/teinture-exterieure',
  },
  {
    title: 'Peinture résidentielle',
    description: 'Service complet pour maisons, condos et appartements.',
    to: '/services/peinture-residentielle',
  },
  {
    title: 'Préparation de surfaces',
    description: 'Sablage, décapage, calfeutrage et apprêt avant peinture.',
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

export default function PeintureExterieurePage() {
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
        name: 'Peinture extérieure',
        item: 'https://leleverdupinceau.ca/services/peinture-exterieure',
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
      before: avantApresTerrasseAvant,
      after: avantApresTerrasseApres,
      description: 'Teinture terrasse bois - Rive-Sud de Montréal',
    },
    {
      before: avantApresEscalier1,
      after: avantApresEscalier2,
      description: 'Peinture escalier fer forgé - Sud-Ouest, Montréal',
    },
    {
      before: avantApresCorniche1,
      after: avantApresCorniche2,
      description: 'Peinture corniche - Ville Mont-Royal, Montréal',
    },
    {
      before: avantApresEscalierBalconAvant,
      after: avantApresEscalierBalconApres,
      description: 'Peinture escalier de balcon - marches et rampes',
    },
    {
      before: avantApresPorteAvant,
      after: avantApresPorteApres,
      description: "Peinture porte d'entrée - décapage et fini lustré",
    },
    {
      before: avantApresRevetementAvant,
      after: avantApresRevetementApres,
      description: 'Peinture revêtement extérieur - maison complète',
    },
  ];

  return (
    <Fragment>
      <SEOHead
        title="Peinture extérieure à Montréal | Revêtement, balcon, clôture | Le Lever du Pinceau"
        description="Service de peinture extérieure professionnelle à Montréal. Revêtement, balcon, clôture, porte de garage, fondation. Produits adaptés au climat québécois. Licence RBQ. Soumission gratuite."
        canonicalPath="/services/peinture-exterieure"
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
            src={exterieureHeroImg}
            alt="Peinture extérieure à Montréal - revêtement, balcon et clôture"
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
            bg="rgba(0, 0, 0, 0.50)"
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
                    Peinture extérieure
                  </Text>
                </HStack>

                <Heading as="h1" size="hero" color="white" minW={0}>
                  Peinture extérieure à Montréal
                </Heading>
                <Text variant="heroSubtitle" color="white" minW={0}>
                  Revêtement, balcon, clôture, corniche.
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
          Protéger et embellir l&apos;extérieur de votre propriété avec les bons produits et les bonnes techniques.
        </PageIntro>

        {/* ===== SECTION 3 - CHECKMARKS TECHNIQUES ===== */}
        <FeatureCardsSection
          title="Ce qui distingue notre peinture extérieure"
          subtitle="La durabilité d'une peinture extérieure dépend autant de la préparation que du produit appliqué"
          items={CHECKMARKS}
          variant="inline"
          sectionBg="white"
        />

        {/* ===== SECTION 4 - SPÉCIALITÉS ===== */}
        <FeatureCardsSection
          title="Nos spécialités en peinture extérieure"
          subtitle="Chaque surface extérieure demande une approche spécifique"
          items={SPECIALITES}
          variant="stacked"
          sectionBg="gray.50"
          columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
        />

                ))}
              </SimpleGrid>
            </Stack>
          </Container>
        </Box>

        {/* ===== SECTION 5 - AVANT / APRÈS ===== */}
        <BeforeAfterCarouselSection
          isFr={true}
          title="Résultats de nos projets de peinture extérieure"
          subtitle="Terrasses, escaliers, corniches, portes et revêtements - avant et après nos interventions."
          images={carouselImages}
          sectionPaddingTop={{ base: 16, md: 20, lg: 24 }}
          sectionPaddingBottom={{ base: 6, md: 8 }}
        />

        {/* ===== SECTION 6 - GARANTIE + CTA MID-PAGE ===== */}
        <ServiceGuaranteeSection
          body="Un projet extérieur bien réalisé, c'est une protection durable pour votre propriété. Nous travaillons avec les bons produits, aux bonnes conditions, et nous assumons le résultat."
          onCtaClick={onOpen}
        />

        <FAQSection
          title="Questions fréquentes sur la peinture extérieure"
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
          title={'Prêt à redonner de l\'éclat à votre extérieur\u00A0?'}
          subtitle={'Soumission gratuite en moins de 24h'}
          buttonText={'Obtenir ma soumission gratuite'}
        />

      </Box>

      <SubmissionModal isOpen={isOpen} onClose={onClose} />
    </Fragment>
  );
}
