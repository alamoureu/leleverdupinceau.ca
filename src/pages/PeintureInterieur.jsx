import {
  Divider,
  Grid,
  GridItem,
  Icon,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import React, { Fragment, useContext, useEffect, useState } from 'react';
import { AiOutlineFileDone } from 'react-icons/ai';
import { BiPaintRoll } from 'react-icons/bi';
import { MdCleaningServices } from 'react-icons/md';
import ReactCompareImage from 'react-compare-image';
import appContext from '../AppProvider';
import { Helmet } from 'react-helmet';

export default function PeintureInt() {
  const { currentLang } = useContext(appContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Fragment>
      <Helmet>
        <title>Peinture Intérieure</title>
        <meta
          name="description"
          content="Découvrez des services de peinture intérieure de qualité à Montréal avec Le Lever du Pinceau. Propreté, efficacité et matériaux haut de gamme pour transformer et embellir votre intérieur. Demandez une estimation gratuite dès aujourd'hui."
        />
        <meta
          name="keywords"
          content="Peinture intérieure Montréal, Services de peinture résidentielle, Peintres professionnels Montréal, Rénovation intérieure, Estimation gratuite peinture"
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
                    ? 'Peinture Intérieure'
                    : 'Interior Painting'}
                </Text>
              </Stack>
              <Divider borderColor="gray.200" maxW="300px" />
              <Text
                fontSize={{ base: 'sm', md: 'md' }}
                fontWeight="normal"
                maxW="600px"
                whiteSpace="break-spaces"
                textColor="#53514E"
              >
                {currentLang === 'fr'
                  ? 'Votre maison a besoin d’un renouveau de peinture? Notre équipe dynamique et professionnelle s’appliquera à vous offrir un service exceptionnel. Nous incluons dans notre service préparatif à la peinture, la protection ainsi que le déplacement des meubles et objets encombrants.'
                  : 'Your Home needs a new look? Our professional and dynamic team of painters will offer you an exceptional service. We include in our services, the protection of all surfaces and moving all furniture.'}
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
            src="https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/service1.jpg"
            objectFit="cover"
            objectPosition="center-top"
            h={{ base: '250px', lg: '400px', xl: '550px' }}
            w={{ base: '100%', lg: '80%', xl: '550px' }}
          />
        </Stack>

        <Stack
          gap="2"
          bg="gray.200"
          h="100%"
          w="100%"
          p={{ base: '8', md: '16' }}
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
                ? 'Service de Peinture Intérieure'
                : 'Interior Painting Service'}
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
            whiteSpace="break-spaces"
          >
            {currentLang === 'fr'
              ? 'Le Lever Du Pinceau se concentre sur la fourniture de services de peinture intérieure de qualité à des tarifs très compétitifs.'
              : 'Le Lever Du Pinceau focuses on providing services of quality interior painting at very competitive prices.'}
          </Text>

          <InteriorBeforeAfter lang={currentLang} />
          <Stack w="100%">
            <Stack gap="0">
              <Text
                fontWeight="semibold"
                fontSize={{ base: 'md', md: 'lg' }}
                color="#578FDB"
              >
                {currentLang === 'fr'
                  ? 'Services de qualités'
                  : 'Quality services'}
              </Text>
              <Text
                fontWeight="bold"
                fontSize={{ base: '27px', md: '25px' }}
                pl="5px"
                textColor="#53514E"
              >
                {currentLang === 'fr'
                  ? 'Résultats exceptionnels'
                  : 'Exceptional results'}
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
                pr={{ base: '0px', md: '25px' }}
                maxW={{ base: 'fit-content', lg: '500px' }}
              >
                {currentLang === 'fr'
                  ? 'Chez Le Lever du Pinceau nous offrons des services de peinture qui sont toujours à la hauteur de nos standards a de prix très compétitif.'
                  : 'Le Lever du Pinceau offers painting services that are always at our standards at very competitive prices.'}
              </Text>
              <Image
                loading="lazy"
                src={
                  'https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/bgMain2.JPG'
                }
                w={{ base: '350px', md: '400px' }}
                borderRadius="xl"
              />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Fragment>
  );
}

function InteriorBeforeAfter({ lang }) {
  const [isInteracting, setIsInteracting] = useState(false);

  const interiorPhotos = [
    {
      leftImage:
        'https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/iteriorbefore.jpg',
      rightImage:
        'https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/interior1.jpg',
    },
    {
      leftImage:
        'https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/before1interiorr.jpg',
      rightImage:
        'https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/after1interior.jpg',
    },
  ];

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
    <Stack w="100%" alignItems="center">
      <Grid
        templateColumns={{
          base: '1fr',
          md: 'repeat(2, 1fr)',
          lg: 'repeat(3, 1fr)',
        }}
        gap="8"
        pb="50px"
      >
        {interiorPhotos.map((pair, index) => (
          <GridItem key={index}>
            <Stack
              alignItems="center"
              justifyContent="center"
              gap="1"
              w="250px"
              onMouseDown={handleInteractionStart}
              onTouchStart={handleInteractionStart}
              onMouseUp={handleInteractionEnd}
              onTouchEnd={handleInteractionEnd}
            >
              <ReactCompareImage
                leftImage={pair.leftImage}
                rightImage={pair.rightImage}
                aspectRatio="taller"
                vertical={pair.vertical || false}
                leftImageLabel={lang === 'fr' ? 'AVANT' : 'BEFORE'}
                rightImageLabel={lang === 'fr' ? 'APRÈS' : 'AFTER'}
              />
            </Stack>
          </GridItem>
        ))}
      </Grid>
    </Stack>
  );
}
