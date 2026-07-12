import React, { Fragment, useEffect } from 'react';
import { Box, Flex, Stack } from '@chakra-ui/react';
import { Helmet } from 'react-helmet';
import SubmissionForm from '../lelever-next/home-page/SubmissionForm';

export default function SoumissionPage() {
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
        pt={{ base: '90px', md: '100px' }}
        pb={{ base: '80px', md: '50px' }}
        direction="column"
        w="100%"
        display="flex"
        spacing="0px"
        gap="0"
        bg="white"
        minH={{ base: '100vh', md: '100vh' }}
        align="center"
        mt="30px"
      >
        <Stack id="soumission" w="100%" align="center">
          <Stack align="center" w={{ base: '100%', md: '600px' }}>
            <Box w="100%" px={{ base: 4, md: 0 }}>
              <SubmissionForm />
            </Box>
          </Stack>
        </Stack>
      </Flex>
    </Fragment>
  );
}
