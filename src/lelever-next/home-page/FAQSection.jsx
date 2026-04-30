import React from 'react';
import {
  Box,
  Container,
  Heading,
  Stack,
  Text,
  Link,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { useTranslation } from '../i18n';

function getFaqs(isFr) {
  return [
    {
      question: isFr
        ? 'Combien coûte un peintre professionnel à Montréal ?'
        : 'How much does a professional painter cost in Montreal?',
      answer: isFr
        ? "Le coût dépend de la superficie, de l'état des surfaces et du nombre de couches. En moyenne, pour un projet résidentiel standard, comptez entre 1$ et 3$ par pied carré. Pour obtenir une estimation précise adaptée à votre projet,"
        : "The cost depends on the area, surface condition, and number of coats. On average, expect between $1 and $3 per square foot for a standard residential project. For an accurate estimate tailored to your project,",
      link: true,
    },
    {
      question: isFr
        ? 'Offrez-vous une garantie sur vos travaux ?'
        : 'Do you offer a guarantee on your work?',
      answer: isFr
        ? 'Oui. Nous offrons une garantie satisfaction à 100%. Si le résultat ne répond pas à vos attentes, nous corrigeons le tout sans frais supplémentaires.'
        : "Yes. We offer a 100% satisfaction guarantee. If the result doesn't meet your expectations, we will correct it at no additional cost.",
    },
    {
      question: isFr
        ? 'Est-ce que vos peintres sont licenciés RBQ ?'
        : 'Are your painters RBQ licensed?',
      answer: isFr
        ? "Oui. Le Lever du Pinceau détient la licence RBQ #5864-1481-01 et une assurance responsabilité de 5 millions de dollars. De plus, tous nos peintres de métier ont plus de 10 ans d'expérience."
        : 'Yes. Le Lever du Pinceau holds RBQ license #5864-1481-01 and $5M liability insurance. All our professional painters have over 10 years of experience.',
    },
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
        ? "Quelle est la durée typique d'un projet de peinture ?"
        : 'What is the typical duration of a painting project?',
      answer: isFr
        ? "La durée varie selon l'ampleur du projet. Pour une pièce standard (chambre ou salon), comptez 1 à 2 jours. Un appartement complet (3-4 pièces) prend généralement 3 à 5 jours. Une maison complète peut nécessiter 1 à 2 semaines selon la superficie. Les projets commerciaux sont planifiés selon vos contraintes opérationnelles. Nous vous fournirons un échéancier précis lors de la soumission."
        : 'Duration varies depending on project scope. For a standard room (bedroom or living room), expect 1 to 2 days. A complete apartment (3-4 rooms) generally takes 3 to 5 days. A complete house may require 1 to 2 weeks depending on size. Commercial projects are scheduled according to your operational constraints. We will provide you with a precise timeline when quoting.',
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
        ? 'Est-ce que vous peinturez les armoires de cuisine ?'
        : 'Do you paint kitchen cabinets?',
      answer: isFr
        ? "Absolument. La peinture d'armoires est l'un de nos services les plus demandés. Nous utilisons un processus spécifique (sablage, apprêt, 2-3 couches) pour un fini durable qui coûte une fraction du remplacement."
        : 'Absolutely. Cabinet painting is one of our most popular services. We use a specific process (sanding, primer, 2-3 coats) for a durable finish that costs a fraction of replacement.',
    },
    {
      question: isFr
        ? 'Utilisez-vous des peintures écologiques et sans odeur ?'
        : 'Do you use eco-friendly and low-odor paints?',
      answer: isFr
        ? "Oui, nous proposons une gamme complète de peintures écologiques à faible émission de COV (composés organiques volatils). Ces produits sont idéaux pour les chambres d'enfants, les personnes sensibles aux odeurs, et les espaces commerciaux qui doivent rester opérationnels. Nous travaillons avec des marques réputées comme Bétonel Dulux, en utilisant notamment les gammes VIP, Diamond et Lifemaster, reconnues pour leur durabilité, leur excellente couvrance et leurs faibles émissions de COV. Nous vous conseillerons sur le meilleur choix selon votre projet et votre budget."
        : "Yes, we offer a complete range of eco-friendly low-VOC (volatile organic compounds) paints. These products are ideal for children's rooms, people sensitive to odors, and commercial spaces that need to remain operational. We work with reputable brands such as Bétonel Dulux, using in particular the VIP, Diamond and Lifemaster ranges, known for their durability, excellent coverage and low VOC emissions. We will advise you on the best choice based on your project and budget.",
    },
  ];
}

const DEFAULT_SECTION_PY = { base: 12, md: 16, lg: 20 };

export default function FAQSection({ faqsOverride, title, sectionPy }) {
  const { t, currentLang } = useTranslation();
  const isFr = currentLang === 'fr';
  const faqs = Array.isArray(faqsOverride) && faqsOverride.length > 0 ? faqsOverride : getFaqs(isFr);

  // Generate Schema Markup for FAQPage
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <Box w="100%" py={sectionPy ?? DEFAULT_SECTION_PY} bg="gray.50">
      <Container maxW="1440px" px={{ base: 4, md: 6 }}>
        <Stack spacing={8}>
          <Stack spacing={{ base: 2, md: 3 }} textAlign="center">
            <Heading as="h2" size="section" color="gray.800">
              {title ?? t.faqDefaultTitle}
            </Heading>
          </Stack>

          <Accordion allowMultiple w="100%" maxW="800px" mx="auto">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.question}
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
                  <AccordionButton py={6} px={8} _hover={{ bg: 'gray.50' }}>
                    <Box flex="1" textAlign="left" fontWeight="bold" color="gray.800" textStyle="bodyLarge">
                      {faq.question}
                    </Box>
                    <AccordionIcon color="brand.500" />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={6} px={8} pt={0}>
                  <Text fontSize={{ base: 'sm', md: 'md' }} color="gray.600" lineHeight="1.7">
                    {faq.answer}
                    {faq.link && (
                      <Link
                        as={RouterLink}
                        to="/blog/prix-peinture-montreal"
                        color="brand.500"
                        ml={1}
                        fontWeight="medium"
                        _hover={{ textDecoration: 'underline' }}
                      >
                        {t.faqPricingLink}
                      </Link>
                    )}
                  </Text>
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </Stack>
      </Container>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </Box>
  );
}
