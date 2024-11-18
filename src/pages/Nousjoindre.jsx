import React, { useContext, useEffect } from 'react';
import { Stack, Text, Icon, Image } from '@chakra-ui/react';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import MidleBarInfo from '../components/MidleBarInfo';
import appContext from '../AppProvider';
import ContactForm from '../components/ContactForm';

export default function Nousjoindre() {
  const { currentLang } = useContext(appContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Stack w="100%" h="100%" bg="white" gap="0" pt="110px" alignItems="center">
      <Stack
        w="100%"
        justifyContent="center"
        maxW="container.xl"
        h={{ base: '100%', lg: '100%' }}
        gap="2"
        px={{ base: '8', md: '10%' }}
      >
        <Stack gap="1">
          <Text
            fontSize={{ base: '23px', lg: 'xx-large' }}
            fontWeight="bold"
            textColor="#53514E"
          >
            {currentLang === 'fr'
              ? 'Joindre Le Lever Du Pinceau'
              : 'Join Le Lever Du Pinceau'}
          </Text>
          <Text fontSize="md" fontWeight="normal" textColor="#53514E">
            {currentLang === 'fr'
              ? 'Des travaux réalisés professionnellement par des professionnels'
              : 'Work carried out professionally by professionals'}
          </Text>
        </Stack>
        <Stack
          w="100%"
          minH="100px"
          bg="#2D72D2"
          borderRadius="xl"
          gap="4"
          py={{ base: '25px', lg: '10px' }}
          px={{ base: '15px', lg: '20%' }}
          direction={{ base: 'column', lg: 'row' }}
          justifyContent="space-between"
          alignItems={{ base: 'normal', md: 'center' }}
          textColor="white"
        >
          <Stack direction="row">
            <Icon as={AiOutlinePhone} fontSize="30px" />
            <Stack gap="0">
              <Text fontWeight="bold">
                {currentLang === 'fr' ? 'TÉLÉPHONE' : 'PHONE NUMBER'}
              </Text>
              <a href="tel:4388680772">
                <Text>(438) 868-0772</Text>
              </a>
            </Stack>
          </Stack>
          <Stack direction="row">
            <Icon as={AiOutlineMail} fontSize="30px" />
            <Stack gap="0">
              <Text fontWeight="bold">
                {currentLang === 'fr' ? 'COURRIEL' : 'EMAIL'}
              </Text>
              <Text
                textDecor="underline"
                onClick={() =>
                  (window.location = 'mailto:leleverdupinceau@gmail.com')
                }
              >
                leleverdupinceau@gmail.com
              </Text>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          direction={{ base: 'column', lg: 'row' }}
          justifyContent="space-between"
          px={{ base: '0', lg: '0%' }}
        >
          <Text maxW={{ base: '400px', sm: '900px' }} textColor="#53514E">
            {currentLang === 'fr'
              ? "Peu importe l'envergure de votre projet de peinture résidentielle ou commerciale, nous nous déplaçons partout sur la Rive-Sud, Rive-Nord, Montréal, Estrie et Gatineau. Afin de vous donner l'heure juste, nous offrons la soumission gratuite et sans engagement de votre part. Durant cette rencontre, nous allons évaluer l'étendue de votre projet pour vous donner un échéancier qui sera respecté. Vous n'aurez ainsi aucune mauvaise surprise."
              : 'No matter the size of your residential or commercial painting project, we travel anywhere on the South Shore, North Shore, Montreal, Estrie and Gatineau. In order to give you the facts, we offer a free quote with no obligation on your part. During this meeting, we will assess the scope of your project to give you a schedule that will be respected. You will therefore have no unpleasant surprises.'}{' '}
            <br />
            {currentLang === 'fr'
              ? "Offrez-vous un projet clé en main de qualité supérieure au meilleur prix sur le marché. C'est la promesse que Le Lever Du Pinceau vous fait!"
              : 'Treat yourself to a top quality turnkey project at the best price on the market. This is the promise that Lever Du Pinceau makes to you!'}
          </Text>
          <Image
            src={
              'https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/photo_lever_1.jpg'
            }
            w={{ base: '100%', lg: '450px' }}
            borderRadius="xl"
          />
        </Stack>
      </Stack>
      <Stack
        px={{ base: '8', md: '10%' }}
        bg="white"
        w="100%"
        alignItems="center"
        justifyContent="center"
        py={{ base: '0px', md: '50px' }}
        gap="2"
      >
        <Stack w="100%" alignItems="center" pt="50px">
          <Text
            fontSize={{ base: '25px', md: '40px' }}
            fontWeight="bold"
            borderRadius="md"
            color="#012A68"
          >
            {currentLang === 'fr'
              ? 'COMMUNIQUEZ AVEC NOUS DÈS MAINTENANT'
              : 'CONTACT US NOW'}
          </Text>
        </Stack>
        <ContactForm />
      </Stack>
      <MidleBarInfo />
    </Stack>
  );
}
