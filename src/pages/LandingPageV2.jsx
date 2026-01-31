import React, { Fragment, useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Box, useDisclosure, Stack, Text } from '@chakra-ui/react';
import appContext from '../AppProvider';
import { GA_MEASUREMENT_ID } from '../config/analytics';
import HeroSection from '../lelever-next/home-page/HeroSection';
import TrustBanner from '../lelever-next/home-page/TrustBanner';
import ControlSection from '../lelever-next/home-page/ControlSection';
import MethodSection from '../lelever-next/home-page/MethodSection';
import ReviewsSection from '../lelever-next/home-page/ReviewsSection';
import FAQSection from '../lelever-next/home-page/FAQSection';
import FinalCTASection from '../lelever-next/home-page/FinalCTASection';
import SubmissionForm from '../lelever-next/home-page/SubmissionForm';
import SubmissionModal from '../components/SubmissionModal';
import { useTranslation } from '../lelever-next/i18n';

const META = {
  fr: {
    title: 'Entreprise de Peinture à Montréal | Le Lever du Pinceau',
    description:
      "Découvrez les meilleurs services de peinture intérieure et extérieure à Montréal avec Le Lever du Pinceau. Travail professionnel, matériaux de qualité et prix compétitifs. Demandez votre soumission gratuite dès aujourd'hui.",
    keywords:
      'Peinture intérieure Montréal, Peinture extérieure Montréal, Services de peinture résidentielle, Peintres professionnels, Devis peinture Montréal',
  },
  en: {
    title: 'Painting Company Montreal | Le Lever du Pinceau',
    description:
      'Discover the best interior and exterior painting services in Montreal with Le Lever du Pinceau. Professional work, quality materials and competitive prices. Request your free quote today.',
    keywords:
      'Interior painting Montreal, Exterior painting Montreal, Residential painting services, Professional painters, Painting quote Montreal',
  },
};

const CANONICAL_BASE = 'https://www.leleverdupinceau.ca';

function LandingPageV2({ lang: langProp = undefined, indexable = false } = {}) {
  const { currentLang, setCurrentLang } = useContext(appContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { t } = useTranslation();
  const [isFormSuccess, setIsFormSuccess] = useState(false);

  const lang = (indexable && langProp ? langProp : currentLang) || 'fr';
  const isFr = lang === 'fr';
  const pageContext = t.pageContextName ?? (isFr ? 'Accueil' : 'Home');

  useEffect(() => {
    if (indexable && langProp) setCurrentLang(langProp);
  }, [indexable, langProp, setCurrentLang]);

  const meta = META[lang] || META.fr;

  return (
    <Fragment>
      <Helmet>
        <html lang={lang} />
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        {indexable && (
          <link rel="canonical" href={`${CANONICAL_BASE}/${lang}/peintre-montreal`} />
        )}
        {!indexable && <meta name="robots" content="noindex, nofollow" />}
        {!indexable && <meta name="googlebot" content="noindex, nofollow" />}
        {indexable && <meta property="og:type" content="website" />}
        {indexable && <meta property="og:title" content={meta.title} />}
        {indexable && <meta property="og:description" content={meta.description} />}
        {indexable && <meta property="og:url" content={`${CANONICAL_BASE}/${lang}/peintre-montreal`} />}
        {indexable && <meta property="og:locale" content={lang === 'fr' ? 'fr_CA' : 'en_CA'} />}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}');
            `,
          }}
        />
      </Helmet>

      <Box w="100%" bg="white" overflowX="hidden" position="relative">
        <Box position="relative">
          <HeroSection onSubmissionOpen={onOpen} pageContext={pageContext} />
          <TrustBanner />
        </Box>

        <ControlSection onSubmissionOpen={onOpen} />

        <MethodSection />

        <Stack
          py={{ base: 6, sm: 8, md: 10, lg: 12, xl: 14 }}
          align="center"
          px={{ base: 3, sm: 4, md: 6, lg: 8 }}
        >
          <Box
            position="relative"
            bg="white"
            borderRadius="xl"
            pl={{ base: 6, sm: 7, md: 11, lg: 12 }}
            pr={{ base: 5, sm: 6, md: 10, lg: 12 }}
            py={{ base: 5, sm: 6, md: 7, lg: 8 }}
            borderWidth="1px"
            borderColor="gray.200"
            boxShadow="0 2px 16px rgba(1, 76, 196, 0.06)"
            textAlign="center"
            maxW={{
              base: '100%',
              sm: '520px',
              md: '720px',
              lg: '900px',
              xl: '960px',
              '2xl': '1000px',
            }}
            w="100%"
          >
            <Box
              position="absolute"
              left={0}
              top="50%"
              transform="translateY(-50%)"
              w="4px"
              h="60%"
              minH="32px"
              bg="#014CC4"
              borderTopRightRadius="4px"
              borderBottomRightRadius="4px"
            />
            <Text
              fontSize={{ base: 'md', sm: 'lg', md: 'xl', lg: 'xl', xl: '2xl' }}
              color="gray.800"
              fontWeight="semibold"
              lineHeight="1.5"
              letterSpacing="-0.01em"
            >
              {t.promiseText}
            </Text>
          </Box>
        </Stack>

        <Stack
          py={{ base: 8, sm: 10, md: 12, lg: 14 }}
          align="center"
          px={{ base: 3, sm: 4, md: 6, lg: 8 }}
        >
          <Box
            w="100%"
            maxW={{
              base: '100%',
              sm: '520px',
              md: '720px',
              lg: '900px',
              xl: '960px',
              '2xl': '1000px',
            }}
          >
            {!isFormSuccess && (
              <Text
                as="h2"
                id="submission-form-title"
                fontSize={{ base: 'lg', sm: 'xl', md: '2xl', lg: '3xl', xl: '4xl', '2xl': '4xl' }}
                fontWeight="bold"
                color="gray.900"
                textAlign="center"
                pb={4}
                textTransform="uppercase"
              >
                {t.contactFormTitle}
              </Text>
            )}
            <SubmissionForm onSubmissionStateChange={setIsFormSuccess} />
          </Box>
        </Stack>
      </Box>

      <ReviewsSection />

      <FAQSection />

      <FinalCTASection onSubmissionOpen={onOpen} />

      <SubmissionModal isOpen={isOpen} onClose={onClose} />
    </Fragment>
  );
}

export default LandingPageV2;
