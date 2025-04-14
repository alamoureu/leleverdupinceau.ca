/* eslint-disable jsx-a11y/iframe-has-title */
import React, { Fragment, useEffect } from 'react';
import {
  Stack,
  Box,
  Image,
  Heading,
  Flex,
  Text,
  useDisclosure,
  useBreakpointValue,
} from '@chakra-ui/react';
import NosServices from '../components/NosServices';
import ReviewsDrawer from '../landing-page/ReviewsDrawer';
import FloatingReviewBadge from '../landing-page/FloatingReviewBadge';
import MainHero from '../components/MainHero';
import SubmissionModal from '../components/SubmissionModal';
import BeforeNAfter from '../landing-page/BeforeNAfter';
import AddValueHero from '../components/AddValueHero';
import WhyUsHero from '../components/WhyUsHero';
import ClientReviewsHero from '../components/ClientReviewsHero';
import BestSolutionHero from '../components/BestSolutionHero';
import BetonelBanerHero from '../components/BetonelBanerHero';
import { Helmet } from 'react-helmet';
import EmbeddedSubmissionForm from '../components/EmbeddedSubmissionForm';

export default function LandingPage({ lang }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    isOpen: isDrawerOpen,
    onOpen: onDrawerOpen,
    onClose: onDrawerClose,
  } = useDisclosure();

  const isMobile = useBreakpointValue({ base: true, md: false });

  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-K3QRGR65';
    script.innerHTML = `
      (function(w,d,s,l,i){
        w[l]=w[l]||[];
        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
        var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
        j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
        f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-K3QRGR65');
    `;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Fragment>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-K3QRGR65"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        ></iframe>
      </noscript>

      <Helmet>
        <title>Entreprise de Peinture à Montréal | Le Lever du Pinceau</title>
        <meta
          name="description"
          content="Obtenez des services de peinture de haute qualité à Montréal avec Le Lever du Pinceau. Satisfaction garantie, prix compétitifs et résultats exceptionnels. Demandez une soumission gratuite dès aujourd'hui."
        />
        <meta
          name="keywords"
          content="Peinture intérieure Montréal, Peinture extérieure Montréal, Services de peinture, Devis peinture Montréal, Peintres professionnels Montréal"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-2WYQLD2VZD"
        ></script>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-F53S9VD6MB"
        ></script>
        <script>
          {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-2WYQLD2VZD');
      gtag('config', 'G-F53S9VD6MB');
    `}
        </script>
      </Helmet>

      <Flex
        direction="column"
        w="100%"
        h="100%"
        display="flex"
        bg="white"
        overflowX="hidden"
      >
        {/**Section 1 */}
        <MainHero
          onSubmissionFormOpen={onOpen}
          lang={lang}
          buttonColor={'#0056D2'}
        />

        {/**Section 2 */}
        <AddValueHero lang={lang} />

        {/**Section 3 */}
        <WhyUsHero lang={lang} onSubmissionOpen={onOpen} />

        {/**Section 4 */}
        <BetonelBanerHero isMobile={isMobile} lang={lang} />

        {/**Section 5 */}
        <BestSolutionHero lang={lang} />

        {/**Section 6 */}
        <Box
          position="relative"
          w="100%"
          h={{ base: '200px', md: '300px' }}
          spacing="0px"
        >
          <Image
            loading="lazy"
            src={
              'https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/11.png'
            }
            alt="Background Image"
            w="100%"
            h="100%"
            objectFit="cover"
            objectPosition="center"
            top={0}
            left={0}
            zIndex={-1}
          />

          <Box
            position="absolute"
            top="50%"
            w={{ base: '100%', md: 'normal' }}
            left={{ base: '55%', md: '55%' }}
            transform="translate(-50%, -50%)"
            color="white"
          >
            <Heading
              fontSize={{ base: '3xl', md: '5xl' }}
              fontWeight="bold"
              color="rgba(1, 42, 104, 1)"
            >
              {lang === 'fr'
                ? 'Les prix les plus \n compétitifs'
                : 'The Most Competitive \n Prices and'}
            </Heading>
            <Text
              fontSize={{ base: '3xl', md: '5xl' }}
              fontWeight="bold"
              color="blue.500"
            >
              {lang === 'fr'
                ? 'Satisfaction garantie'
                : 'Guaranteed Satisfaction'}
            </Text>
          </Box>
        </Box>

        {/**Section 8 */}
        <Stack
          w="100%"
          alignItems="center"
          id="soumission"
          pt="80px"
          px={{ base: '0px', md: '30px' }}
        >
          <Stack w={{ base: '100%', md: '500px' }}>
            <EmbeddedSubmissionForm isModal={false} />
          </Stack>
        </Stack>
        {/**Section 7 */}
        <Stack pt={{ base: '20px', md: '100px' }}>
          <ClientReviewsHero onDrawerOpen={onDrawerOpen} />
        </Stack>

        {/**Section 9 */}
        <Stack
          pt={{ base: '50px', md: '20px' }}
          pb={{ base: '25px', md: '50px' }}
        >
          <NosServices lang={lang} />
        </Stack>

        <BeforeNAfter lang={lang} />

        <SubmissionModal isOpen={isOpen} onClose={onClose} lang={lang} />

        <ReviewsDrawer
          isOpen={isDrawerOpen}
          onClose={onDrawerClose}
          lang={lang}
        />
        <FloatingReviewBadge onOpen={onDrawerOpen} lang={lang} />
      </Flex>
    </Fragment>
  );
}
