import React, { useContext } from 'react';
import { Stack, Text, Flex, useDisclosure } from '@chakra-ui/react';
import appContext from '../AppProvider';
import MainHero from '../components/MainHero';
import SubmissionModal from '../components/SubmissionModal';
import SoumissionForm from '../landing-page/SoumissionForm';
import NosServices from '../landing-page/NosServices';
import AddValueHero from '../components/AddValueHero';
import WhyUsHero from '../components/WhyUsHero';
import ClientReviewsHero from '../components/ClientReviewsHero';
import ReviewsDrawer from '../landing-page/ReviewsDrawer';

export default function WebSiteLandingPage() {
  const { currentLang } = useContext(appContext);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    isOpen: isDrawerOpen,
    onOpen: onDrawerOpen,
    onClose: onDrawerClose,
  } = useDisclosure();

  return (
    <Flex
      direction="column"
      w="100%"
      h="100%"
      display="flex"
      spacing="0px"
      gap="0"
    >
      <Stack pt="90px">
        <MainHero onSubmissionFormOpen={onOpen} lang={currentLang} />
      </Stack>

      <AddValueHero lang={currentLang} />

      <WhyUsHero lang={currentLang} onSubmissionOpen={onOpen} />

      <Stack
        pt={{ base: '10px', md: '25px' }}
        pb={{ base: '25px', md: '50px' }}
      >
        <NosServices lang={currentLang} />
      </Stack>

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
          color="#0056D2"
        >
          {currentLang === 'fr'
            ? 'OBTENIR UNE SOUMISSION GRATUITE'
            : 'GET A FREE QUOTE'}
        </Text>

        <Stack w={{ base: '100%', md: '400px' }}>
          <SoumissionForm />
        </Stack>
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
  );
}
