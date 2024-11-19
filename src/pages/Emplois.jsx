import React, { Fragment, useContext, useEffect } from 'react';
import { Stack, Text } from '@chakra-ui/react';
import appContext from '../AppProvider';
import ApplyForm from '../components/ApplyForm';
import { Helmet } from 'react-helmet';

export default function Emplois() {
  const { currentLang } = useContext(appContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Fragment>
      <Helmet>
        <title>
          Rejoignez l'Équipe de Peinture | Opportunités d'Emploi à Montréal
        </title>
        <meta
          name="description"
          content="Rejoignez une équipe dynamique et professionnelle chez Le Lever du Pinceau. Postulez pour des opportunités d'emploi en peinture résidentielle sur l'île de Montréal. Envoyez votre candidature dès aujourd'hui !"
        />
        <meta
          name="keywords"
          content="Emploi peinture Montréal, Recrutement peintre, Opportunités d'emploi Montréal, Travailler en peinture, Équipe dynamique peinture"
        />
      </Helmet>

      <Stack w="100%" h="100%" gap="0" pt="90px" bg="white">
        <Stack
          direction="column"
          h={{ base: 'fit-content', lg: '400px' }}
          pt="30px"
          px={{ base: '20px', md: '10%' }}
          w="100%"
          alignItems="center"
          justifyContent="center"
        >
          <Stack
            bg="#2D72D2"
            maxW="800px"
            p="25px"
            textColor="white"
            py="40px"
            borderRadius="xl"
          >
            <Text
              fontSize={{ base: '25px', lg: 'xx-large' }}
              fontWeight="extrabold"
              textColor="white"
            >
              {currentLang === 'fr'
                ? "Rejoignez l'équipe de Peinture"
                : 'Join the Painting team'}
            </Text>
            <Text
              fontSize={{ base: 'sm', md: 'md' }}
              fontWeight="semibold"
              textColor="white"
            >
              {currentLang === 'fr'
                ? 'Vous souhaitez rejoindre une équipe dynamique, jeune et formée de peintres professionnels ?'
                : 'You would like to join a dynamic, young team made up of professional painters ?'}
            </Text>
            <Text
              fontSize={{ base: 'sm', md: 'md' }}
              fontWeight="semibold"
              maxW="750px"
              textColor="white"
            >
              {currentLang === 'fr'
                ? "Envoyez votre candidature au Lever Du Pinceau ! Nous cherchons des employés motivés et travaillants qui souhaitent intervenir sur des projets résidentiels sur l'île de Montréal."
                : 'Send your application to Lever Du Pinceau! We are looking for motivated and hardworking employees who wish to intervene on residential projects on the island of Montreal.'}
            </Text>
          </Stack>
        </Stack>
        <Stack
          bg="white"
          px={{ base: '15px', lg: '20%' }}
          w="100%"
          alignItems="center"
          zIndex="overlay"
        >
          <Stack
            gap="4"
            maxW="500px"
            pb="125px"
            alignItems="center"
            pt="25px"
            w={{ base: '325px', md: '500px' }}
          >
            <Text
              fontSize={{ base: '23px', lg: 'x-large' }}
              color="#012A68"
              fontWeight="semibold"
            >
              {currentLang === 'fr'
                ? 'Envoyez-nous votre candidature'
                : 'Send us your application'}
            </Text>

            <ApplyForm lang={currentLang} />
          </Stack>
        </Stack>
      </Stack>
    </Fragment>
  );
}
