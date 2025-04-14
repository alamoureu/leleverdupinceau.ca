import React, { Fragment, useContext } from 'react';
import { Helmet } from 'react-helmet';
import {
  Stack,
  Flex,
  useDisclosure,
  useBreakpointValue,
} from '@chakra-ui/react';
import appContext from '../AppProvider';
import MainHero from '../components/MainHero';
import SubmissionModal from '../components/SubmissionModal';
import NosServices from '../components/NosServices';
import AddValueHero from '../components/AddValueHero';
import WhyUsHero from '../components/WhyUsHero';
import ClientReviewsHero from '../components/ClientReviewsHero';
import ReviewsDrawer from '../landing-page/ReviewsDrawer';
import BestSolutionHero from '../components/BestSolutionHero';
import BetonelBanerHero from '../components/BetonelBanerHero';
import EmbeddedSubmissionForm from '../components/EmbeddedSubmissionForm';

export default function WebSiteLandingPage() {
  const { currentLang } = useContext(appContext);
  const isMobile = useBreakpointValue({ base: true, md: false });

  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    isOpen: isDrawerOpen,
    onOpen: onDrawerOpen,
    onClose: onDrawerClose,
  } = useDisclosure();

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
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-81FGM6EH3M"
        ></script>
        <script>
          {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-81FGM6EH3M');
    `}
        </script>
      </Helmet>

      <Flex
        direction="column"
        w="100%"
        h="100%"
        display="flex"
        spacing="0px"
        gap="0"
      >
        <Stack pt="90px">
          <MainHero
            onSubmissionFormOpen={onOpen}
            lang={currentLang}
            buttonColor="#0056D2"
          />
        </Stack>

        <AddValueHero lang={currentLang} />

        <WhyUsHero lang={currentLang} onSubmissionOpen={onOpen} />

        <Stack
          pt={{ base: '10px', md: '25px' }}
          pb={{ base: '25px', md: '50px' }}
        >
          <NosServices lang={currentLang} />
        </Stack>
        <BetonelBanerHero isMobile={isMobile} lang={currentLang} />

        <BestSolutionHero lang={currentLang} />
        <Stack
          w="100%"
          alignItems="center"
          id="soumission"
          px={{ base: '0px', md: '30px' }}
        >
          <Stack w={{ base: '100%', md: '500px' }}>
            <EmbeddedSubmissionForm isModal={false} />
          </Stack>
        </Stack>

        <Stack
          pb={{ base: '75px', md: '150px' }}
          pt={{ base: '20px', md: '25px' }}
        >
          <ClientReviewsHero onDrawerOpen={onDrawerOpen} lang={currentLang} />
        </Stack>
        <SubmissionModal isOpen={isOpen} onClose={onClose} lang={currentLang} />

        <ReviewsDrawer
          isOpen={isDrawerOpen}
          onClose={onDrawerClose}
          lang={currentLang}
        />
      </Flex>
    </Fragment>
  );
}
