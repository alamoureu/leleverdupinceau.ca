import React, { Fragment, useContext, useEffect, useState } from 'react';
import { Divider, Flex, Icon, Image, Stack, Text } from '@chakra-ui/react';
import { AiOutlineFileDone } from 'react-icons/ai';
import { BiPaintRoll } from 'react-icons/bi';
import { MdCleaningServices } from 'react-icons/md';
import ReactCompareImage from 'react-compare-image';
import appContext from '../AppProvider';
import { Helmet } from 'react-helmet';

export default function PeintureExt() {
  const { currentLang } = useContext(appContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Fragment>
      <Helmet>
        <title>Peinture et Teinture Extérieure</title>
        <meta
          name="description"
          content="Découvrez des services de peinture extérieure de qualité à Montréal avec Le Lever du Pinceau. Propreté, efficacité et matériaux haut de gamme pour protéger et embellir votre propriété. Demandez une estimation gratuite dès aujourd'hui."
        />
        <meta
          name="keywords"
          content="Peinture extérieure Montréal, Services de peinture résidentielle, Peintres professionnels Montréal, Rénovation extérieure, Estimation gratuite peinture"
        />
      </Helmet>

      <Stack
        h="100%"
        w="100%"
        pt={{ base: '90px', md: '80px', xl: '0px' }}
        gap="4"
        bg="white"
        color="black"
      >
        <Stack
          spacing={{ base: '4', xl: '12' }}
          px={{ base: '4', md: '20%' }}
          py={{ base: '10', md: '5%' }}
          direction={{
            base: 'column',
            md: 'column',
            xl: 'row',
          }}
          justifyContent="space-between"
          alignItems="center"
          h={{ base: '100%', xl: '100vh' }}
        >
          <Stack gap="2">
            <Stack gap="2">
              <Stack gap="0">
                <Text
                  fontWeight="semibold"
                  fontSize={{ base: '15px', md: 'lg' }}
                  color="#578FDB"
                >
                  {currentLang === 'fr' ? 'Résidentiel' : 'Residential'}
                </Text>
                <Text
                  fontWeight="bold"
                  fontSize={{ base: '25px', md: 'xx-large' }}
                  pl="5px"
                  textColor="#53514E"
                >
                  {currentLang === 'fr'
                    ? 'Peinture et Teinture Extérieure'
                    : 'Exterior Painting'}
                </Text>
              </Stack>

              <Divider borderColor="gray.200" maxW="300px" />
              <Text
                fontSize={{ base: 'sm', md: 'md' }}
                fontWeight="normal"
                maxW="600px"
                textColor="#53514E"
              >
                {currentLang === 'fr'
                  ? 'Votre revêtement ou votre balcon a durement été abîmé par les intempéries Québécoises? Que ce soit pour un renouveau de son apparence, ou pour sa protection, on s’en occupe.'
                  : 'Has your covering or your balcony been badly damaged by the bad weather in Quebec ? Whether it is for a renewal of its appearance, or for its protection, we take care of it.'}
              </Text>
            </Stack>
            <Stack gap="0">
              <Stack
                direction="row"
                alignItems="center"
                gap="1"
                textColor="#53514E"
              >
                <Icon as={MdCleaningServices} fontSize="20px" />
                <Text fontWeight="semibold" fontSize="md">
                  {currentLang === 'fr'
                    ? 'Propre et efficace'
                    : 'Clean and efficient'}
                </Text>
              </Stack>
              <Stack
                direction="row"
                alignItems="center"
                gap="1"
                textColor="#53514E"
              >
                <Icon as={BiPaintRoll} fontSize="20px" />
                <Text fontWeight="semibold" fontSize="md">
                  {currentLang === 'fr'
                    ? 'Matériel de haute qualité'
                    : 'High quality materials'}
                </Text>
              </Stack>
              <Stack
                direction="row"
                alignItems="center"
                gap="1"
                textColor="#53514E"
              >
                <Icon as={AiOutlineFileDone} fontSize="20px" />
                <Text fontWeight="semibold" fontSize="md">
                  {currentLang === 'fr'
                    ? 'Estimation gratuite'
                    : 'Free quotation '}
                </Text>
              </Stack>
            </Stack>
          </Stack>

          <Image
            loading="lazy"
            borderRadius="xl"
            src="https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/service2.jpg"
            w={{ base: '100%', md: '550px' }}
          />
        </Stack>

        <Stack
          gap="2"
          bg="gray.200"
          h="100%"
          w="100%"
          p="16"
          px={{ base: '20px', md: '20%' }}
          justifyContent="center"
          textColor="black"
        >
          <Stack gap="0">
            <Text
              fontWeight="semibold"
              fontSize={{ base: 'md', md: 'lg' }}
              color="#578FDB"
            >
              {currentLang === 'fr'
                ? 'Service de Peinture Extérieure'
                : 'Exterior Painting Service'}
            </Text>
            <Text
              fontWeight="bold"
              fontSize={{ base: '27px', md: '25px' }}
              pl="5px"
              textColor="#53514E"
            >
              {currentLang === 'fr'
                ? 'TRAVAIL EXCEPTIONNEL'
                : 'EXCEPTIONAL WORK'}
            </Text>
          </Stack>
          <Text
            fontWeight="normal"
            fontSize={{ base: 'sm', md: '16px' }}
            textAlign="justify"
            pb="10px"
            textColor="#53514E"
          >
            {currentLang === 'fr'
              ? 'Le Lever Du Pinceau se concentre sur la fourniture de services de peinture extérieure de qualité à des tarifs très compétitifs.'
              : 'Le Lever Du Pinceau focuses on providing services of quality exterior painting at very competitive prices.'}
          </Text>

          <ExteriorBeforeAfter currentLang={currentLang} />
        </Stack>
      </Stack>
    </Fragment>
  );
}

function ExteriorBeforeAfter({ currentLang }) {
  const exteriorPhotos = [
    {
      leftImage:
        'https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/image_67225601.JPG',
      rightImage:
        'https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/image_67206657.JPG',
    },
    {
      leftImage:
        'https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/image_67513345.JPG',
      rightImage:
        'https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/image_67237633.JPG',
    },
    {
      leftImage:
        'https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/image_67204865.JPG',
      rightImage:
        'https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/image_67212545.JPG',
    },
    {
      leftImage:
        'https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/image_67209217.JPG',
      rightImage:
        'https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/image_67231745.JPG',
    },
    {
      leftImage:
        'https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/after+1.jpg',
      rightImage:
        'https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/beffore1.jpg',
    },
    {
      leftImage:
        'https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/before+2.jpg',
      rightImage:
        'https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/after+2.jpg',
    },
  ];

  const [isInteracting, setIsInteracting] = useState(false);

  const lockScroll = () => {
    document.body.style.overflow = 'hidden';
  };

  const unlockScroll = () => {
    document.body.style.overflow = '';
  };

  const handleInteractionStart = () => {
    if (!isInteracting) {
      setIsInteracting(true);
      lockScroll();
    }
  };

  const handleInteractionEnd = () => {
    if (isInteracting) {
      setIsInteracting(false);
      unlockScroll();
    }
  };

  return (
    <Flex
      py="10px"
      flexDir="row"
      flexWrap="wrap"
      gap="10"
      w="100%"
      justifyContent={{ base: 'center', md: 'center' }}
    >
      <Stack
        gap="8"
        flexWrap="wrap"
        flexDir={{ base: 'column', md: 'row' }}
        display="flex"
      >
        {exteriorPhotos.map((photo, index) => (
          <Stack
            key={index}
            alignItems="center"
            justifyContent="center"
            gap="1"
            style={{ touchAction: 'none' }}
            w="250px"
            onMouseDown={handleInteractionStart}
            onTouchStart={handleInteractionStart}
            onMouseUp={handleInteractionEnd}
            onTouchEnd={handleInteractionEnd}
          >
            <ReactCompareImage
              leftImage={photo.leftImage}
              rightImage={photo.rightImage}
              aspectRatio="taller"
              vertical={true}
              leftImageLabel={currentLang === 'fr' ? 'AVANT' : 'BEFORE'}
              rightImageLabel={currentLang === 'fr' ? 'APRÈS' : 'AFTER'}
            />
          </Stack>
        ))}
      </Stack>

      <Stack w="100%">
        <Stack gap="0">
          <Text
            fontWeight="semibold"
            fontSize={{ base: 'md', md: 'lg' }}
            color="#578FDB"
          >
            {currentLang === 'fr' ? 'Services de qualités' : 'Quality Services'}
          </Text>
          <Text
            fontWeight="bold"
            fontSize={{ base: '27px', md: '25px' }}
            pl="5px"
            textColor="#53514E"
          >
            {currentLang === 'fr'
              ? 'Résultats exceptionnels'
              : 'Exceptional Results'}
          </Text>
        </Stack>
        <Stack
          direction={{
            base: 'column',
            md: 'column',
            lg: 'row',
          }}
          gap="4"
          w="100%"
          justifyContent="space-between"
        >
          <Text
            fontWeight="normal"
            fontSize={{ base: 'sm', md: '16px' }}
            textAlign="justify"
            maxW={{ base: '400px', lg: '500px' }}
            textColor="#53514E"
          >
            {currentLang === 'fr'
              ? 'Chez Le Lever du Pinceau, nous offrons des services de peinture qui sont toujours à la hauteur de nos standards à des prix très compétitifs.'
              : 'At Le Lever du Pinceau, we offer painting services that always meet our standards at very competitive prices.'}
          </Text>
          <Image
            loading="lazy"
            src="https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/1920X1080_conseil_conseils_peindre_teindre_terrasse.jpg"
            w={{ base: '350px', md: '450px' }}
            borderRadius="xl"
          />
        </Stack>
      </Stack>
    </Flex>
  );
}
