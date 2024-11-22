import React, { Fragment, useContext } from 'react';
import {
  Stack,
  Text,
  Flex,
  useDisclosure,
  useBreakpointValue,
  Center,
} from '@chakra-ui/react';
import appContext from '../AppProvider';
import MainHero from '../components/MainHero';
import SubmissionModal from '../components/SubmissionModal';
import SoumissionForm from '../components/SoumissionForm';
import NosServices from '../components/NosServices';
import AddValueHero from '../components/AddValueHero';
import WhyUsHero from '../components/WhyUsHero';
import ClientReviewsHero from '../components/ClientReviewsHero';
import ReviewsDrawer from '../landing-page/ReviewsDrawer';
import BestSolutionHero from '../components/BestSolutionHero';
import BetonelBanerHero from '../components/BetonelBanerHero';
import { Helmet } from 'react-helmet';

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
        <title>
          Entreprise de Peinture à Montréal | Peinture Intérieure et Extérieure
          | Le Lever du Pinceau
        </title>
        <meta
          name="description"
          content="Découvrez les meilleurs services de peinture intérieure et extérieure à Montréal avec Le Lever du Pinceau. Travail professionnel, matériaux de qualité et prix compétitifs. Demandez votre soumission gratuite dès aujourd'hui."
        />
        <meta
          name="keywords"
          content="Peinture intérieure Montréal, Peinture extérieure Montréal, Services de peinture résidentielle, Peintres professionnels, Devis peinture Montréal"
        />
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
          px={{ base: '20px', md: '30px' }}
        >
          <Text
            fontSize={{ base: '25px', md: '40px' }}
            fontWeight="bold"
            borderRadius="md"
            color="#1A365D"
            pb="4"
          >
            {currentLang === 'fr'
              ? 'OBTENIR UNE SOUMISSION GRATUITE'
              : 'GET A FREE QUOTE'}
          </Text>
          <Center>
            <Stack w={{ base: '100%', md: '400px' }}>
              <SoumissionForm />
            </Stack>
          </Center>
        </Stack>

        <Stack
          pb={{ base: '75px', md: '150px' }}
          pt={{ base: '25px', md: '100px' }}
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
