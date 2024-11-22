import React, { Fragment, useContext, useEffect } from 'react';
import { Flex, Stack, Text } from '@chakra-ui/react';
import SoumissionForm from '../components/SoumissionForm';
import appContext from '../AppProvider';
import { Helmet } from 'react-helmet';

export default function SoumissionPage() {
  const { currentLang } = useContext(appContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Fragment>
      <Helmet>
        <title>Soumission Gratuite</title>
        <meta
          name="description"
          content="Demandez une soumission gratuite pour vos projets de peinture intérieure ou extérieure à Montréal avec Le Lever du Pinceau. Profitez de services professionnels, d'une estimation rapide et sans engagement pour transformer votre espace."
        />
        <meta
          name="keywords"
          content="Soumission gratuite peinture Montréal, Devis peinture résidentielle, Estimation travaux de peinture, Peintres professionnels Montréal, Services de peinture sans engagement"
        />
      </Helmet>
      <Flex
        pt={{ base: '90px', md: '155px' }}
        pb={{ base: '80px', md: '100px' }}
        direction="column"
        w="100%"
        display="flex"
        spacing="0px"
        gap="0"
        bg="white"
        minH={{ base: '100vh', md: '100%' }}
        justifyContent="center"
        alignItems="center"
      >
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

          <Stack w={{ base: '100%', md: '400px' }}>
            <SoumissionForm />
          </Stack>
        </Stack>
      </Flex>
    </Fragment>
  );
}
