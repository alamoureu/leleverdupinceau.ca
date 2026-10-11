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
  FaIndustry,
  FaShieldAlt,
  FaTools,
  FaFlask,
  FaHardHat,
  FaLayerGroup,
  FaWarehouse,
  FaWrench,
  FaMapMarkedAlt,
  FaSprayCan,
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

import industrielleImg1 from '../images/L2 Services principaux/Photo page -peinture-industrielle/Peintre Montréal, Le Lever du Pinceau a peint ce plafond en steel deck en mur à Montréal est.jpg';
import industrielleImg2 from '../images/L2 Services principaux/Photo page -peinture-industrielle/Peintre industrielle à Montréal, Le Lever du Pinceau a peinturé au spray ce plafond en steel deck à Montréal.jpg';
import industrielleImg3 from '../images/L2 Services principaux/Photo page -peinture-industrielle/Peintre Montréal, Le Lever du Pinceau a peinturé au spray l_extérieure de cette usine sur la rive nord de Montréal.jpg';
import industrielleImg4 from '../images/L2 Services principaux/Photo page -peinture-industrielle/Peintre industrielle dans le grand Montréal, Le Lever du Pinceau a peinturé au spray l_extérieure de cette usine à Laval.jpg';
import industrielleImg5 from '../images/L2 Services principaux/Photo page -peinture-industrielle/Peintre professionnel Montréal, Le Lever du Pinceau a peinturé au spray ce plafond en steel deck à Montréal.jpg';
import industrielleImg6 from '../images/L2 Services principaux/Photo page -peinture-industrielle/Peintre professionnel sur l_île de Montréal, Le Lever du Pinceau a peinturé au spray ce plafond en steel deck en mur à Montréal.jpg';
import ServiceGuaranteeSection from '../home-page/ServiceGuaranteeSection';

const CHECKMARKS = [
  {
    icon: FaIndustry,
    title: 'Revêtements adaptés aux conditions industrielles',
    text: 'Époxy, uréthane, peinture résistante aux produits chimiques, aux chocs et à l\'usure intensive. Pas les mêmes produits qu\'en résidentiel.',
  },
  {
    icon: FaHardHat,
    title: 'Application au pistolet airless',
    text: 'Pour couvrir de grandes surfaces rapidement et uniformément - plafonds steel deck, structures métalliques, murs de béton.',
  },
  {
    icon: FaShieldAlt,
    title: 'Sécurité et conformité sur le chantier industriel',
    text: 'Équipements de protection, ventilation, gestion des produits chimiques. Nos équipes sont formées pour travailler en environnement industriel.',
  },
  {
    icon: FaTools,
    title: 'Préparation des surfaces métalliques',
    text: 'Sablage, traitement antirouille, apprêt d\'adhérence. Une surface métallique mal préparée ne retient pas la peinture.',
  },
  {
    icon: FaLayerGroup,
    title: 'Systèmes multicouches pour la durabilité',
    text: 'Fond de teinte, couche intermédiaire et finition : les applications industrielles demandent des systèmes de peinture complets.',
  },
  {
    icon: FaFlask,
    title: 'Produits conformes aux normes',
    text: 'Peintures à faible teneur en COV disponibles, conformité aux normes environnementales et de santé au travail selon les exigences du site.',
  },
];

const SPECIALITES = [
  {
    icon: FaWarehouse,
    title: 'Entrepôt et usine',
    text: 'Murs, plafonds steel deck et colonnes. Application au pistolet pour couvrir rapidement de grandes surfaces avec un fini uniforme.',
    link: null,
  },
  {
    icon: FaLayerGroup,
    title: 'Plancher époxy',
    text: 'Revêtement époxy pour planchers industriels - résistance aux impacts, aux produits chimiques et à l\'usure du trafic lourd.',
    link: null,
  },
  {
    icon: FaWrench,
    title: 'Structures métalliques',
    text: 'Poutrelles, charpentes, équipements et surfaces métalliques. Traitement antirouille, apprêt et finition adaptés.',
    link: null,
  },
  {
    icon: FaMapMarkedAlt,
    title: 'Marquage au sol',
    text: 'Lignes de circulation, zones de sécurité, allées de chariot élévateur. Peinture ou époxy selon les exigences du site.',
    link: null,
  },
  {
    icon: FaSprayCan,
    title: 'Extérieur d\'usine et de bâtiment industriel',
    text: 'Revêtements extérieurs résistants aux intempéries et aux conditions climatiques du Québec pour les bâtiments industriels.',
    link: null,
  },
  {
    icon: FaIndustry,
    title: 'Stationnement et garage',
    text: 'Plancher en béton, murs et colonnes de stationnement. Revêtements résistants à l\'usure et aux produits pétroliers.',
    link: null,
  },
];

const FAQS = [
  {
    question: 'Quelle est la différence entre une peinture industrielle et une peinture commerciale\u00A0?',
    answer: 'Les peintures industrielles sont formulées pour résister à des conditions plus exigeantes : produits chimiques, chaleur, usure mécanique intense, exposition prolongée aux intempéries. Elles utilisent souvent des systèmes multicouches (époxy, uréthane) et demandent une préparation de surface plus poussée.',
  },
  {
    question: 'Pouvez-vous peindre des plafonds steel deck très hauts\u00A0?',
    answer: 'Oui. Nous disposons de l\'équipement nécessaire pour les grandes hauteurs : échafaudages, plateformes élévatrices et pistolets airless à long portée. La planification de l\'accès fait partie de notre soumission.',
  },
  {
    question: 'Est-ce que vous faites du marquage au sol dans les entrepôts\u00A0?',
    answer: 'Oui. Nous réalisons le traçage et le marquage au sol selon vos plans : lignes de sécurité, zones de circulation, emplacements de stockage. Nous utilisons des peintures durables ou de l\'époxy selon les contraintes du plancher et du trafic.',
  },
  {
    question: 'Combien de temps faut-il pour le séchage d\'un plancher époxy\u00A0?',
    answer: 'Le temps de séchage varie selon le système époxy utilisé, la température ambiante et le taux d\'humidité. En général, le retour à la marche se fait en 24 à 48 heures, et le retour au trafic lourd après 5 à 7 jours. Ces délais sont intégrés à la planification du chantier.',
  },
];

const INTERNAL_LINKS = [
  {
    title: 'Peinture commerciale',
    description: 'Bureau, restaurant, commerce - travaux hors heures et délais serrés.',
    to: '/services/peinture-commerciale',
  },
  {
    title: 'Peinture au pistolet',
    description: 'Application airless pour grands espaces industriels et commerciaux.',
    to: '/services/peinture-au-pistolet',
  },
  {
    title: 'Préparation de surfaces',
    description: 'Sablage, décapage et apprêt - fondation du travail industriel.',
    to: '/services/preparation-de-surfaces',
  },
  {
    title: 'Pourquoi choisir un peintre professionnel\u00A0?',
    description: 'Licence RBQ, assurance, expertise - ce qui fait la différence.',
    to: '/peintre-professionnel',
  },
];

export default function PeintureIndustriellePage() {
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
        name: 'Peinture industrielle',
        item: 'https://leleverdupinceau.ca/services/peinture-industrielle',
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
      before: industrielleImg1,
      after: industrielleImg6,
      description: 'Peinture murs et plancher - entrepôt Montréal Est',
    },
    {
      before: industrielleImg3,
      after: industrielleImg4,
      description: 'Peinture extérieure usine au pistolet - Rive-Nord de Montréal',
    },
    {
      before: industrielleImg2,
      after: industrielleImg5,
      description: 'Peinture plafond steel deck airless - Montréal',
    },
  ];

  return (
    <Fragment>
      <SEOHead
        title="Peinture industrielle à Montréal | Entrepôt, usine, stationnement | Le Lever du Pinceau"
        description="Service de peinture industrielle à Montréal. Entrepôt, usine, plancher époxy, structures métalliques, marquage au sol. Application au pistolet airless. Licence RBQ. Soumission gratuite."
        canonicalPath="/services/peinture-industrielle"
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
            src={industrielleImg2}
            alt="Peinture industrielle à Montréal - plafond steel deck au pistolet airless"
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
            bg="rgba(0, 0, 0, 0.60)"
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
                    Peinture industrielle
                  </Text>
                </HStack>

                <Heading as="h1" size="hero" color="white" minW={0}>
                  Peinture industrielle à Montréal
                </Heading>
                <Text variant="heroSubtitle" color="white" minW={0}>
                  Entrepôt, usine, stationnement.
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
          Revêtements spécialisés, application au pistolet et produits conçus pour les exigences industrielles.
        </PageIntro>

        {/* ===== SECTION 3 - CHECKMARKS ===== */}
        <FeatureCardsSection
          title="Ce qui distingue notre approche industrielle"
          subtitle="La peinture industrielle n'est pas de la peinture résidentielle appliquée dans une usine - c'est une spécialité à part entière"
          items={CHECKMARKS}
          variant="inline"
          sectionBg="white"
        />

        {/* ===== SECTION 4 - SPÉCIALITÉS ===== */}
        <FeatureCardsSection
          title="Nos spécialités en peinture industrielle"
          subtitle="Des revêtements adaptés aux surfaces et aux contraintes de chaque environnement industriel"
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
          title="Exemples de projets industriels réalisés"
          subtitle="Plafonds steel deck, usines et entrepôts - des travaux réalisés avec le bon équipement et les bons produits."
          images={carouselImages}
          sectionPaddingTop={{ base: 16, md: 20, lg: 24 }}
          sectionPaddingBottom={{ base: 6, md: 8 }}
        />

        {/* ===== SECTION 6 - GARANTIE + CTA MID-PAGE ===== */}
        <ServiceGuaranteeSection
          body="En industriel, un revêtement qui écaille ou un plancher qui s'use prématurément coûte cher à refaire. Nous utilisons les bons produits, au bon endroit, avec la bonne préparation pour que le résultat dure."
          onCtaClick={onOpen}
        />

        <FAQSection
          title="Questions fréquentes sur la peinture industrielle"
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
          title={'Prêt à planifier votre projet industriel\u00A0?'}
          subtitle={'Soumission gratuite en moins de 24h'}
          buttonText={'Obtenir ma soumission gratuite'}
        />

      </Box>

      <SubmissionModal isOpen={isOpen} onClose={onClose} />
    </Fragment>
  );
}
