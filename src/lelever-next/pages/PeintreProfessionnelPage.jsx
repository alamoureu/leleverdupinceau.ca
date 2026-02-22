import React, { Fragment, useContext } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Link,
  Button,
  Icon,
  HStack,
  Flex,
  Grid,
  useDisclosure,
  Image,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import appContext from '../../AppProvider';
import SEOHead from '../seo/SEOHead';
import SectorsSection from '../home-page/SectorsSection';
import ResourcesSection from '../home-page/ResourcesSection';
import SubmissionModal from '../home-page/SubmissionModal';
import ServiceCard from '../home-page/ServiceCard';
import BeforeAfter from '../components/BeforeAfter';
import ProcessStepsSection from '../components/ProcessStepsSection';
import TrustBanner from '../home-page/TrustBanner';
import peintreProResidentielle from '../images/1-page-principale/peintre pro/Peinture résidentielle/IMG_6763.PNG';
import peintreProCommerciale from '../images/1-page-principale/peintre pro/Peinture commerciale/IMG_6751.PNG';
import peintreProInterieure from '../images/1-page-principale/peintre pro/Peinture intérieure/IMG_6764.PNG';
import peintreProExterieure from '../images/1-page-principale/peintre pro/Peinture extérieure/IMG_6753.PNG';
import peintreProIndustrielle from '../images/1-page-principale/peintre pro/Peinture industrielle/IMG_6752.PNG';
import peintreProPhotoHeader from '../images/1-page-principale/service hub/Photo header/IMG_6771.PNG';

export default function PeintreProfessionnelPage() {
  const { currentLang } = useContext(appContext);
  const isFr = currentLang === 'fr';
  const { isOpen, onOpen, onClose } = useDisclosure();

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: isFr ? 'Accueil' : 'Home',
        item: 'https://leleverdupinceau.ca/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: isFr ? 'Peintres professionnels' : 'Professional Painters',
        item: 'https://leleverdupinceau.ca/peintre-professionnel',
      },
    ],
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Le Lever du Pinceau',
    description: isFr
      ? 'Peintres professionnels à Montréal spécialisés en peinture résidentielle, commerciale, intérieure et extérieure dans tout le Grand Montréal'
      : 'Professional painters in Montreal specialized in residential, commercial, interior and exterior painting throughout Greater Montreal',
    url: 'https://leleverdupinceau.ca/peintre-professionnel',
    telephone: '+14388680772',
    email: 'leleverdupinceau@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '2175 Rue Saint-Patrick',
      addressLocality: 'Montréal',
      addressRegion: 'QC',
      postalCode: 'H3K 1B4',
      addressCountry: 'CA',
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Montréal',
      },
      {
        '@type': 'City',
        name: 'Laval',
      },
      {
        '@type': 'City',
        name: 'Longueuil',
      },
      {
        '@type': 'City',
        name: 'Brossard',
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: isFr
          ? 'Quel est le délai pour obtenir une soumission ?'
          : 'What is the turnaround time for a quote?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: isFr
            ? "Nous répondons généralement sous 24 heures. Après avoir pris connaissance de votre projet, nous planifions une visite sur place pour évaluer les surfaces, la préparation nécessaire et établir une soumission détaillée et transparente. Notre équipe est réactive et s'adapte à vos disponibilités pour accélérer le processus."
            : 'We generally respond within 24 hours. After learning about your project, we schedule an on-site visit to assess surfaces, necessary preparation, and establish a detailed and transparent quote. Our team is responsive and adapts to your schedule to speed up the process.',
        },
      },
      {
        '@type': 'Question',
        name: isFr
          ? 'Combien coûte un peintre professionnel à Montréal ?'
          : 'How much does a professional painter cost in Montreal?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: isFr
            ? "Le coût dépend de plusieurs facteurs : la superficie à peindre, le type de surface (plafond, mur, boiserie), l'état des surfaces (nécessite-t-il du plâtrage ou du sablage), le nombre de couches requises et le type de peinture choisi. En moyenne, pour un projet résidentiel standard, comptez entre 1 et 3 $ par pied carré. Pour obtenir une estimation précise adaptée à votre projet, consultez notre article sur les prix de la peinture à Montréal."
            : 'The cost depends on several factors: the area to be painted, the type of surface (ceiling, wall, woodwork), the condition of surfaces (does it require plastering or sanding), the number of coats required, and the type of paint chosen. On average, for a standard residential project, expect between $1 and $3 per square foot. For an accurate estimate tailored to your project, see our article on painting prices in Montreal.',
        },
      },
      {
        '@type': 'Question',
        name: isFr
          ? 'Est-ce que vous protégez les surfaces avant de peindre ?'
          : 'Do you protect surfaces before painting?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: isFr
            ? 'Oui, absolument. La protection fait partie intégrante de notre processus professionnel. Nous couvrons systématiquement les planchers avec des toiles protectrices, protégeons tous les meubles et objets, masquons les cadres de portes et fenêtres, et utilisons du ruban de masquage de qualité professionnelle pour garantir des lignes nettes. Nous nettoyons également entièrement après chaque journée de travail pour vous laisser un espace propre et protégé.'
            : 'Yes, absolutely. Protection is an integral part of our professional process. We systematically cover floors with protective cloths, protect all furniture and objects, mask door and window frames, and use professional-quality masking tape to ensure clean lines. We also thoroughly clean up after each workday to leave you with a clean and protected space.',
        },
      },
      {
        '@type': 'Question',
        name: isFr
          ? 'Travaillez-vous sur des projets commerciaux ?'
          : 'Do you work on commercial projects?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: isFr
            ? "Oui, nous sommes spécialisés dans les projets commerciaux et comprenons les exigences spécifiques des entreprises. Nous intervenons dans les bureaux, commerces de détail, restaurants, cliniques médicales, cabinets professionnels, écoles privées, halls d'immeubles et espaces de coworking. Nous offrons des horaires flexibles (soirs et fins de semaine) pour minimiser l'impact sur vos opérations, respectons les normes de sécurité commerciales et coordonnons efficacement avec les gestionnaires d'immeubles."
            : 'Yes, we specialize in commercial projects and understand the specific requirements of businesses. We work in offices, retail stores, restaurants, medical clinics, professional offices, private schools, building halls, and coworking spaces. We offer flexible schedules (evenings and weekends) to minimize impact on your operations, comply with commercial safety standards, and coordinate effectively with building managers.',
        },
      },
      {
        '@type': 'Question',
        name: isFr
          ? "Quelle est la durée typique d'un projet de peinture ?"
          : 'What is the typical duration of a painting project?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: isFr
            ? "La durée varie selon l'ampleur du projet. Pour une pièce standard (chambre ou salon), comptez 1 à 2 jours. Un appartement complet (3-4 pièces) prend généralement 3 à 5 jours. Une maison complète peut nécessiter 1 à 2 semaines selon la superficie. Les projets commerciaux sont planifiés selon vos contraintes opérationnelles. Nous vous fournirons un échéancier précis lors de la soumission."
            : 'Duration varies depending on project scope. For a standard room (bedroom or living room), expect 1 to 2 days. A complete apartment (3-4 rooms) generally takes 3 to 5 days. A complete house may require 1 to 2 weeks depending on size. Commercial projects are scheduled according to your operational constraints. We will provide you with a precise timeline when quoting.',
        },
      },
      {
        '@type': 'Question',
        name: isFr
          ? 'Utilisez-vous des peintures écologiques et sans odeur ?'
          : 'Do you use eco-friendly and odorless paints?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: isFr
            ? "Oui, nous proposons une gamme complète de peintures écologiques à faible émission de COV (composés organiques volatils). Ces produits sont idéaux pour les chambres d'enfants, les personnes sensibles aux odeurs, et les espaces commerciaux qui doivent rester opérationnels. Nous travaillons avec des marques réputées comme Bétonel Dulux, en utilisant notamment les gammes VIP, Diamond et Lifemaster, reconnues pour leur durabilité, leur excellente couvrance et leurs faibles émissions de COV. Nous vous conseillerons sur le meilleur choix selon votre projet et votre budget."
            : "Yes, we offer a complete range of eco-friendly low-VOC (volatile organic compounds) paints. These products are ideal for children's rooms, people sensitive to odors, and commercial spaces that need to remain operational. We work with reputable brands such as Bétonel Dulux, using in particular the VIP, Diamond and Lifemaster ranges, known for their durability, excellent coverage and low VOC emissions. We will advise you on the best choice based on your project and budget.",
        },
      },
    ],
  };

  const whyChooseProfessional = [
    isFr
      ? 'Une préparation adéquate des surfaces'
      : 'Adequate surface preparation',
    isFr
      ? 'Une application uniforme et durable'
      : 'Uniform and durable application',
    isFr
      ? 'Des produits adaptés (intérieur, extérieur, industriel)'
      : 'Appropriate products (interior, exterior, industrial)',
    isFr
      ? 'Un chantier propre, sécurisé et organisé'
      : 'A clean, secure and organized worksite',
    isFr
      ? 'Une finition soignée sans reprises'
      : 'A careful finish without touch-ups',
  ];

  const processSteps = [
    {
      title: isFr
        ? 'Évaluation rapide et estimation gratuite'
        : 'Quick evaluation and free quote',
      description: isFr
        ? 'Inspection du projet + recommandation des produits appropriés.'
        : 'Project inspection + recommendation of appropriate products.',
    },
    {
      title: isFr
        ? 'Préparation complète des surfaces'
        : 'Complete surface preparation',
      description: isFr
        ? 'Réparation, nettoyage, ponçage, calfeutrage, protection des zones.'
        : 'Repair, cleaning, sanding, caulking, area protection.',
    },
    {
      title: isFr ? 'Application professionnelle' : 'Professional application',
      description: isFr
        ? 'Méthodes précises, produits de qualité et finition uniforme.'
        : 'Precise methods, quality products and uniform finish.',
    },
    {
      title: isFr ? 'Inspection finale' : 'Final inspection',
      description: isFr
        ? 'Nous livrons un résultat impeccable et validé avec vous.'
        : 'We deliver an impeccable result validated with you.',
    },
  ];

  const serviceImages = [
    peintreProResidentielle,
    peintreProCommerciale,
    peintreProInterieure,
    peintreProExterieure,
    peintreProIndustrielle,
  ];

  const services = [
    {
      image: serviceImages[0],
      title: isFr ? 'Peinture résidentielle' : 'Residential painting',
      description: isFr
        ? 'Maisons, condos, logements, multi-étages.'
        : 'Houses, condos, dwellings, multi-story buildings.',
      link: '/services/peinture-residentielle',
    },
    {
      image: serviceImages[1],
      title: isFr ? 'Peinture commerciale' : 'Commercial painting',
      description: isFr
        ? 'Bureaux, commerces, restaurants, immeubles.'
        : 'Offices, businesses, restaurants, buildings.',
      link: '/services/peinture-commerciale',
    },
    {
      image: serviceImages[2],
      title: isFr ? 'Peinture intérieure' : 'Interior painting',
      description: isFr
        ? 'Murs, plafonds, portes, escaliers.'
        : 'Walls, ceilings, doors, stairs.',
      link: '/services/peinture-interieure',
    },
    {
      image: serviceImages[3],
      title: isFr ? 'Peinture extérieure' : 'Exterior painting',
      description: isFr
        ? 'Revêtements, clôtures, bois, brique, aluminium.'
        : 'Coatings, fences, wood, brick, aluminum.',
      link: '/services/peinture-exterieure',
    },
    {
      image: serviceImages[4],
      title: isFr ? 'Peinture industrielle' : 'Industrial painting',
      description: isFr
        ? 'Entrepôts, usines, bâtiments spécialisés.'
        : 'Warehouses, factories, specialized buildings.',
      link: '/services/peinture-industrielle',
    },
  ];

  const faqs = [
    {
      question: isFr
        ? 'Quel est le délai pour obtenir une soumission ?'
        : 'What is the turnaround time for a quote?',
      answer: isFr
        ? "Nous répondons généralement sous 24 heures. Après avoir pris connaissance de votre projet, nous planifions une visite sur place pour évaluer les surfaces, la préparation nécessaire et établir une soumission détaillée et transparente. Notre équipe est réactive et s'adapte à vos disponibilités pour accélérer le processus."
        : 'We generally respond within 24 hours. After learning about your project, we schedule an on-site visit to assess surfaces, necessary preparation, and establish a detailed and transparent quote. Our team is responsive and adapts to your schedule to speed up the process.',
    },
    {
      question: isFr
        ? 'Combien coûte un peintre professionnel à Montréal ?'
        : 'How much does a professional painter cost in Montreal?',
      answer: isFr
        ? "Le coût dépend de plusieurs facteurs : la superficie à peindre, le type de surface (plafond, mur, boiserie), l'état des surfaces (nécessite-t-il du plâtrage ou du sablage), le nombre de couches requises et le type de peinture choisi. En moyenne, pour un projet résidentiel standard, comptez entre 1 et 3 $ par pied carré. Pour obtenir une estimation précise adaptée à votre projet,"
        : 'The cost depends on several factors: the area to be painted, the type of surface (ceiling, wall, woodwork), the condition of surfaces (does it require plastering or sanding), the number of coats required, and the type of paint chosen. On average, for a standard residential project, expect between $1 and $3 per square foot. For an accurate estimate tailored to your project,',
      link: isFr
        ? '/blog/prix-peinture-montreal'
        : '/blog/prix-peinture-montreal',
    },
    {
      question: isFr
        ? 'Est-ce que vous protégez les surfaces avant de peindre ?'
        : 'Do you protect surfaces before painting?',
      answer: isFr
        ? 'Oui, absolument. La protection fait partie intégrante de notre processus professionnel. Nous couvrons systématiquement les planchers avec des toiles protectrices, protégeons tous les meubles et objets, masquons les cadres de portes et fenêtres, et utilisons du ruban de masquage de qualité professionnelle pour garantir des lignes nettes. Nous nettoyons également entièrement après chaque journée de travail pour vous laisser un espace propre et protégé.'
        : 'Yes, absolutely. Protection is an integral part of our professional process. We systematically cover floors with protective cloths, protect all furniture and objects, mask door and window frames, and use professional-quality masking tape to ensure clean lines. We also thoroughly clean up after each workday to leave you with a clean and protected space.',
    },
    {
      question: isFr
        ? 'Travaillez-vous sur des projets commerciaux ?'
        : 'Do you work on commercial projects?',
      answer: isFr
        ? "Oui, nous sommes spécialisés dans les projets commerciaux et comprenons les exigences spécifiques des entreprises. Nous intervenons dans les bureaux, commerces de détail, restaurants, cliniques médicales, cabinets professionnels, écoles privées, halls d'immeubles et espaces de coworking. Nous offrons des horaires flexibles (soirs et fins de semaine) pour minimiser l'impact sur vos opérations, respectons les normes de sécurité commerciales et coordonnons efficacement avec les gestionnaires d'immeubles."
        : 'Yes, we specialize in commercial projects and understand the specific requirements of businesses. We work in offices, retail stores, restaurants, medical clinics, professional offices, private schools, building halls, and coworking spaces. We offer flexible schedules (evenings and weekends) to minimize impact on your operations, comply with commercial safety standards, and coordinate effectively with building managers.',
    },
    {
      question: isFr
        ? "Quelle est la durée typique d'un projet de peinture ?"
        : 'What is the typical duration of a painting project?',
      answer: isFr
        ? "La durée varie selon l'ampleur du projet. Pour une pièce standard (chambre ou salon), comptez 1 à 2 jours. Un appartement complet (3-4 pièces) prend généralement 3 à 5 jours. Une maison complète peut nécessiter 1 à 2 semaines selon la superficie. Les projets commerciaux sont planifiés selon vos contraintes opérationnelles. Nous vous fournirons un échéancier précis lors de la soumission."
        : 'Duration varies depending on project scope. For a standard room (bedroom or living room), expect 1 to 2 days. A complete apartment (3-4 rooms) generally takes 3 to 5 days. A complete house may require 1 to 2 weeks depending on size. Commercial projects are scheduled according to your operational constraints. We will provide you with a precise timeline when quoting.',
    },
    {
      question: isFr
        ? 'Utilisez-vous des peintures écologiques et sans odeur ?'
        : 'Do you use eco-friendly and odorless paints?',
      answer: isFr
        ? "Oui, nous proposons une gamme complète de peintures écologiques à faible émission de COV (composés organiques volatils). Ces produits sont idéaux pour les chambres d'enfants, les personnes sensibles aux odeurs, et les espaces commerciaux qui doivent rester opérationnels. Nous travaillons avec des marques réputées comme Bétonel Dulux, en utilisant notamment les gammes VIP, Diamond et Lifemaster, reconnues pour leur durabilité, leur excellente couvrance et leurs faibles émissions de COV. Nous vous conseillerons sur le meilleur choix selon votre projet et votre budget."
        : "Yes, we offer a complete range of eco-friendly low-VOC (volatile organic compounds) paints. These products are ideal for children's rooms, people sensitive to odors, and commercial spaces that need to remain operational. We work with reputable brands such as Bétonel Dulux, using in particular the VIP, Diamond and Lifemaster ranges, known for their durability, excellent coverage and low VOC emissions. We will advise you on the best choice based on your project and budget.",
    },
  ];


  return (
    <Fragment>
      <SEOHead
        title={isFr ? 'Peintre professionnel Montréal | Équipe qualifiée RBQ – Le Lever du Pinceau' : 'Professional painter Montreal | RBQ qualified team – Le Lever du Pinceau'}
        description={isFr ? 'Peintres professionnels à Montréal, Laval, Longueuil. Peinture résidentielle, commerciale, intérieure et extérieure. Expertise, précision, résultats garantis. Devis gratuit.' : 'Professional painters in Montreal, Laval, Longueuil. Residential, commercial, interior and exterior painting. Expertise, precision, guaranteed results. Free quote.'}
        canonicalPath="/peintre-professionnel"
        schemaArray={[breadcrumbSchema, localBusinessSchema, faqSchema]}
      />

      <Box w="100%" bg="white" overflowX="hidden">
        <Box position="relative" w="100%" pb={{ base: 12, md: 14, lg: 16 }}>
          <Container
            maxW="1440px"
            px={{ base: 4, md: 6, lg: 8 }}
            pt={{ base: 14, md: 18, lg: 24 }}
            pb={{ base: 12, md: 14, lg: 16 }}
          >
            <Grid
            templateColumns={{ base: '1fr', md: '1fr 1fr' }}
            gap={{ base: 8, md: 10, lg: 12 }}
            alignItems={{ md: 'flex-start' }}
          >
            <Stack spacing={0} minW={0}>
              <HStack
                spacing={3}
                textStyle="bodyLarge"
                color="gray.600"
                mb={{ base: 4, md: 6 }}
              >
                <Link href="/" _hover={{ textDecoration: 'underline' }} color="gray.600" textStyle="bodyLarge">
                  {isFr ? 'Accueil' : 'Home'}
                </Link>
                <Text textStyle="bodyLarge">›</Text>
                <Text color="gray.800" fontWeight="medium" textStyle="bodyLarge">
                  {isFr ? 'Peintres professionnels' : 'Professional Painters'}
                </Text>
              </HStack>
              <Stack spacing={{ base: 4, md: 6, lg: 8 }}>
                <Heading
                  as="h1"
                  fontSize={{
                    base: '2xl',
                    sm: '2.5xl',
                    md: '3xl',
                    lg: '4xl',
                    xl: '5xl',
                  }}
                  fontWeight="800"
                  color="gray.900"
                  lineHeight="1.1"
                  mb={{ base: 3, md: 4 }}
                >
                  {isFr
                    ? 'Peintres professionnels à Montréal'
                    : 'Professional Painters in Montreal'}
                  <Text
                    as="span"
                    display="block"
                    fontSize={{
                      base: 'xl',
                      sm: '2xl',
                      md: '3xl',
                      lg: '4xl',
                      xl: '4.5xl',
                    }}
                    color="brand.500"
                    mt={{ base: 1, md: 2 }}
                  >
                    Le Lever du Pinceau
                  </Text>
                </Heading>
                <Text
                  textStyle="bodyLarge"
                  color="gray.600"
                  lineHeight={{ base: '1.6', md: '1.8' }}
                  maxW="600px"
                >
                  {isFr
                    ? 'Chez Le Lever du Pinceau, nos peintres professionnels accompagnent propriétaires, commerces et immeubles dans tous leurs projets de peinture à Montréal, Laval et Longueuil. Nous combinons expertise technique, finition impeccable et service rapide pour offrir des résultats durables et esthétiques. Sur cette page, vous trouverez notre approche professionnelle, les services disponibles, les zones desservies et les réponses essentielles pour choisir le bon peintre.'
                    : 'At Le Lever du Pinceau, our professional painters assist homeowners, businesses and buildings in all their painting projects in Montreal, Laval and Longueuil. We combine technical expertise, impeccable finish and fast service to offer durable and aesthetic results. On this page you will find our professional approach, available services, service areas and essential answers for choosing the right painter.'}
                </Text>
              </Stack>
            </Stack>
            <Box
              w="100%"
              py={{ base: 2, md: 4 }}
              pl={{ base: 0, md: 2 }}
            >
              <Box
                w="100%"
                aspectRatio={{ base: '1', md: '3/2' }}
                borderRadius="xl"
                overflow="hidden"
                bg="gray.100"
                boxShadow="lg"
              >
                <Image
                  src={peintreProPhotoHeader}
                  alt={isFr ? 'Peintres professionnels – Le Lever du Pinceau' : 'Professional Painters – Le Lever du Pinceau'}
                  w="100%"
                  h="100%"
                  objectFit="cover"
                  objectPosition="center"
                />
              </Box>
            </Box>
          </Grid>
        </Container>
          <TrustBanner compact />
        </Box>

        <Container
          maxW="1440px"
          px={{ base: 4, md: 6 }}
          pt={0}
        >
          <Stack spacing={0}>
            <Box
              mt={0}
              pt={{ base: 20, md: 24, lg: 28 }}
              pb={{ base: 12, md: 16, lg: 20 }}
              bg="gray.50"
              borderRadius="xl"
              mb={{ base: 8, md: 12 }}
            >
              <Container maxW="1440px" px={{ base: 4, md: 6 }}>
                <Stack spacing={8}>
                  <Stack spacing={3} textAlign="left">
                    <Heading
                      as="h2"
                      size="section"
                      fontWeight="bold"
                      color="gray.800"
                    >
                      {isFr
                        ? 'Expertise, précision et résultats garantis'
                        : 'Expertise, precision and guaranteed results'}
                    </Heading>
                    <Text
                      textStyle="bodyLarge"
                      color="gray.600"
                      lineHeight="1.7"
                    >
                      {isFr
                        ? "Faire appel à un peintre professionnel, c'est obtenir :"
                        : 'Calling on a professional painter means getting:'}
                    </Text>
                  </Stack>

                  <Stack spacing={3}>
                    {whyChooseProfessional.map((item, index) => (
                      <Flex
                        key={index}
                        align="start"
                        gap={4}
                        p={4}
                        bg="white"
                        borderRadius="lg"
                        border="1px solid"
                        borderColor="gray.200"
                        _hover={{
                          borderColor: 'brand.500',
                          boxShadow: 'sm',
                          transform: 'translateX(4px)',
                        }}
                        transition="all 0.2s ease"
                      >
                        <Icon
                          as={FontAwesomeIcon}
                          icon={faCheckCircle}
                          color="brand.500"
                          boxSize={5}
                          mt={0.5}
                          flexShrink={0}
                        />
                        <Text
                          textStyle="body"
                          color="gray.700"
                          lineHeight="1.6"
                          fontWeight="500"
                          textAlign="left"
                        >
                          {item}
                        </Text>
                      </Flex>
                    ))}
                  </Stack>

                  <Text
                    textStyle="bodyLarge"
                    color="gray.600"
                    lineHeight="1.7"
                    mt={4}
                  >
                    {isFr
                      ? "Nos peintres sont formés aux meilleures techniques du marché et interviennent dans tous les types d'environnements : maisons, condos, commerces, bureaux, immeubles et bâtiments extérieurs."
                      : 'Our painters are trained in the best market techniques and work in all types of environments: houses, condos, businesses, offices, buildings and exterior structures.'}
                  </Text>
                </Stack>
              </Container>
            </Box>

            <ProcessStepsSection
              title={
                isFr
                  ? 'Un processus simple, efficace et orienté qualité'
                  : 'A simple, efficient and quality-oriented process'
              }
              steps={processSteps}
              buttonText={isFr ? 'Recevoir ma soumission gratuite' : 'Get my free quote'}
              onButtonClick={onOpen}
            />

            <Box
              py={{ base: 12, md: 16, lg: 20 }}
              bg="gray.50"
              borderRadius="xl"
              mb={{ base: 8, md: 12 }}
            >
              <Container maxW="1440px" px={{ base: 4, md: 6 }}>
                <Stack spacing={8}>
                  <Stack spacing={3} textAlign="left">
                    <Heading
                      as="h2"
                      size="section"
                      fontWeight="bold"
                      color="gray.800"
                    >
                      {isFr
                        ? 'Services offerts par nos peintres professionnels'
                        : 'Services offered by our professional painters'}
                    </Heading>
                  </Stack>

                  <Flex
                    maxW="1200px"
                    mx="auto"
                    w="100%"
                    wrap="wrap"
                    justify="center"
                    gap={{ base: 4, md: 6 }}
                  >
                    {services.map((service, index) => (
                      <Box
                        key={index}
                        as={RouterLink}
                        to={service.link}
                        _hover={{ textDecoration: 'none' }}
                        w={{ base: '100%', md: 'calc(50% - 12px)', lg: 'calc(33.333% - 16px)' }}
                        maxW={{ lg: '380px' }}
                        display="block"
                      >
                        <ServiceCard
                          image={service.image}
                          title={service.title}
                          subtitle={service.description}
                          stripText={service.description}
                          noHoverBorder
                          fillHeight
                        />
                      </Box>
                    ))}
                  </Flex>
                  <Box textAlign="center" mt={{ base: 6, md: 8 }}>
                    <Button
                      as={RouterLink}
                      to="/services"
                      variant="outline"
                      borderColor="brand.500"
                      color="brand.500"
                      rightIcon={<ArrowForwardIcon />}
                      borderRadius="full"
                      px={{ base: 6, md: 8 }}
                      py={{ base: 3, md: 4 }}
                      textStyle="nav"
                      _hover={{ bg: 'brand.500', color: 'white' }}
                    >
                      {isFr ? 'Voir tous nos services' : 'View all our services'}
                    </Button>
                  </Box>
                </Stack>
              </Container>
            </Box>

            <SectorsSection
              title={
                isFr
                  ? 'Nos peintres professionnels se déplacent partout dans le Grand Montréal'
                  : 'Our professional painters travel throughout Greater Montreal'
              }
              subtitle={
                isFr
                  ? 'Nous intervenons rapidement dans les villes suivantes :'
                  : 'We intervene quickly in the following cities:'
              }
            />

            <Box
              py={{ base: 12, md: 16, lg: 20 }}
              bg="white"
              borderRadius="xl"
              mb={{ base: 8, md: 12 }}
            >
              <Container maxW="1440px" px={{ base: 4, md: 6 }}>
                <Stack spacing={8}>
                  <Stack spacing={3} textAlign="left">
                    <Heading
                      as="h2"
                      size="section"
                      fontWeight="bold"
                      color="gray.800"
                    >
                      {isFr
                        ? 'Résultats de peintres professionnels à Montréal'
                        : 'Professional Painters Results in Montreal'}
                    </Heading>
                    <Text
                      textStyle="bodyLarge"
                      color="gray.600"
                      lineHeight="1.7"
                    >
                      {isFr
                        ? 'Nous avons réalisé des centaines de projets résidentiels, commerciaux et extérieurs dans la région.'
                        : 'We have completed hundreds of residential, commercial and exterior projects in the region.'}
                    </Text>
                  </Stack>
                  <BeforeAfter isFr={isFr} />
                </Stack>
              </Container>
            </Box>

            <Box
              py={{ base: 12, md: 16, lg: 20 }}
              bg="gray.50"
              borderRadius="xl"
              mb={{ base: 8, md: 12 }}
            >
              <Container maxW="1440px" px={{ base: 4, md: 6 }}>
                <Stack spacing={8}>
                  <Stack spacing={3} textAlign="center">
                    <Heading
                      as="h2"
                      size="section"
                      fontWeight="bold"
                      color="gray.800"
                    >
                      {isFr
                        ? 'Questions fréquentes sur nos peintres professionnels'
                        : 'Frequently asked questions about our professional painters'}
                    </Heading>
                  </Stack>

                  <Accordion
                    allowToggle
                    allowMultiple
                    w="100%"
                    maxW="800px"
                    mx="auto"
                  >
                    {faqs.map((faq, index) => (
                      <AccordionItem
                        key={index}
                        bg="white"
                        mb={4}
                        border="1px solid"
                        borderColor="gray.200"
                        borderRadius="xl"
                        overflow="hidden"
                        _hover={{ borderColor: 'brand.500', boxShadow: 'sm' }}
                        transition="all 0.2s"
                        boxShadow="sm"
                        _last={{ mb: 0 }}
                      >
                        <h2>
                          <AccordionButton
                            py={6}
                            px={8}
                            _hover={{ bg: 'gray.50' }}
                          >
                            <Box
                              flex="1"
                              textAlign="left"
                              fontWeight="bold"
                              color="gray.800"
                              textStyle="bodyLarge"
                            >
                              {faq.question}
                            </Box>
                            <AccordionIcon color="brand.500" />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={6} px={8} pt={0}>
                          <Text color="gray.600" lineHeight="1.7">
                            {faq.answer}
                            {faq.link && (
                              <Link
                                href={faq.link}
                                color="brand.500"
                                ml={1}
                                fontWeight="medium"
                                _hover={{ textDecoration: 'underline' }}
                              >
                                {isFr
                                  ? 'Voir notre article sur les prix.'
                                  : 'See our article on pricing.'}
                              </Link>
                            )}
                          </Text>
                        </AccordionPanel>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </Stack>
              </Container>
            </Box>

            <ResourcesSection />
          </Stack>
        </Container>

        <Box
          w="100%"
          py={{ base: 12, md: 16, lg: 20 }}
          bg="app.ctaBg"
          mt={{ base: 8, md: 12 }}
        >
          <Container maxW="1440px" px={{ base: 4, md: 6 }}>
            <Stack spacing={8} textAlign="center">
              <Stack spacing={3}>
                <Heading
                  as="h2"
                  size="section"
                  fontWeight="bold"
                  color="white"
                >
                  {isFr
                    ? 'Obtenez votre soumission gratuite'
                    : 'Get your free quote'}
                </Heading>
                <Text
                  textStyle="bodyLarge"
                  color="whiteAlpha.900"
                  maxW="800px"
                  mx="auto"
                >
                  {isFr
                    ? 'Nos peintres professionnels sont disponibles rapidement pour vos projets intérieurs, extérieurs, résidentiels et commerciaux.'
                    : 'Our professional painters are quickly available for your interior, exterior, residential and commercial projects.'}
                </Text>
              </Stack>

              <Box>
                <Link
                  as={RouterLink}
                  to="/contact"
                  _hover={{ textDecoration: 'none' }}
                >
                  <Button
                    rightIcon={<ArrowForwardIcon />}
                    bg="white"
                    color="brand.500"
                    borderRadius="full"
                    textStyle="nav"
                    px={{ base: 5, md: 7 }}
                    py={{ base: 3, md: 4 }}
                    _hover={{ bg: 'gray.100' }}
                    size="lg"
                  >
                    {isFr ? 'Soumission gratuite' : 'Free quote'}
                  </Button>
                </Link>
              </Box>
            </Stack>
          </Container>
        </Box>
      </Box>

      <SubmissionModal isOpen={isOpen} onClose={onClose} />
    </Fragment>
  );
}
