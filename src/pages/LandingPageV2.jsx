import React, { Fragment, useContext } from 'react';
import { Helmet } from 'react-helmet';
import { Box, useDisclosure, Stack, Text } from '@chakra-ui/react';
import appContext from '../AppProvider';
import HeroSection from '../lelever-next/home-page/HeroSection';
import TrustBanner from '../lelever-next/home-page/TrustBanner';
import ControlSection from '../lelever-next/home-page/ControlSection';
import MethodSection from '../lelever-next/home-page/MethodSection';
import SubmissionModal from '../components/SubmissionModal';
import { useTranslation } from '../lelever-next/i18n';

/**
 * New landing page — will eventually replace WebSiteLandingPage (current /).
 * Same form (SubmissionModal + ContactFormSection) and same Google Tag.
 * Password-protected; not in sitemap. UI matches screenshot: new-home hero/navbar,
 * services with image fade, method section with fade on photos.
 */
export default function LandingPageV2() {
  const { currentLang } = useContext(appContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { t } = useTranslation();
  const isFr = currentLang === 'fr';
  const pageContext = isFr ? 'Accueil' : 'Home';

  return (
    <Fragment>
      <Helmet>
        <title>Entreprise de Peinture à Montréal | Le Lever du Pinceau</title>
        <meta
          name="description"
          content="Découvrez les meilleurs services de peinture intérieure et extérieure à Montréal avec Le Lever du Pinceau. Travail professionnel, matériaux de qualité et prix compétitifs. Demandez votre soumission gratuite dès aujourd'hui."
        />
        <meta
          name="keywords"
          content="Peinture intérieure Montréal, Peinture extérieure Montréal, Services de peinture résidentielle, Peintres professionnels, Devis peinture Montréal"
        />
        <meta name="robots" content="noindex, nofollow" />
        <meta name="googlebot" content="noindex, nofollow" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-81FGM6EH3M"
        />
        <script>
          {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-81FGM6EH3M');
    `}
        </script>
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
      </Box>

      <SubmissionModal isOpen={isOpen} onClose={onClose} lang={currentLang} />
    </Fragment>
  );
}
