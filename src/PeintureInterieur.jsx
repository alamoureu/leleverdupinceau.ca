import { Divider, Flex, Icon, Image, Stack, Tag, Text } from '@chakra-ui/react';
import React, { useContext, useEffect } from 'react';
import { AiOutlineFileDone } from 'react-icons/ai';
import { BiPaintRoll } from 'react-icons/bi';
import { MdCleaningServices } from 'react-icons/md';
import { FiMapPin } from 'react-icons/fi';
import ReactCompareImage from 'react-compare-image';
import appContext from './AppProvider';
import imgBg from './bgMain2.JPG';

export default function PeintureInt() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { currentLang } = useContext(appContext);

  return (
    <Stack h="100%" w="100%" pt="110px" gap="4" bg="white" color="black">
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
        <Stack gap="4">
          <Stack gap="2">
            <Stack gap="0">
              <Text
                fontWeight="semibold"
                fontSize={{ base: '15px', md: 'lg' }}
                color="blue.400"
              >
                {currentLang === 'fr' ? 'Résidentiel' : 'Residential'}
              </Text>
              <Text
                fontWeight="bold"
                fontSize={{ base: '25px', md: 'xx-large' }}
                pl="5px"
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
            >
              {currentLang === 'fr'
                ? 'Votre maison a besoin d’un renouveau de peinture? Notre équipe dynamique et professionnelle s’appliquera à vous offrir un service exceptionnel. Nous incluons dans notre service préparatif à la peinture, la protection ainsi que le déplacement des meubles et objets encombrants.'
                : 'Your Home needs a new look? Our professional and dynamic team of painters will offer you an exceptional service. We include in our services, the protection of all surfaces and moving all furniture.'}
            </Text>
          </Stack>
          <Stack gap="0">
            <Stack direction="row" alignItems="center" gap="1">
              <Icon as={MdCleaningServices} fontSize="20px" />
              <Text fontWeight="semibold" fontSize="md">
                {currentLang === 'fr'
                  ? 'Propre et efficace'
                  : 'Clean and efficient'}
              </Text>
            </Stack>
            <Stack direction="row" alignItems="center" gap="1">
              <Icon as={BiPaintRoll} fontSize="20px" />
              <Text fontWeight="semibold" fontSize="md">
                {currentLang === 'fr'
                  ? 'Matériel de haute qualité'
                  : 'High quality materials'}
              </Text>
            </Stack>
            <Stack direction="row" alignItems="center" gap="1">
              <Icon as={AiOutlineFileDone} fontSize="20px" />
              <Text fontWeight="semibold" fontSize="md">
                {currentLang === 'fr'
                  ? 'Estimation gratuite'
                  : 'Free quotation '}
              </Text>
            </Stack>
          </Stack>
          <Stack>
            <Text fontWeight="semibold" color="gray.700" fontSize="md">
              {currentLang === 'fr'
                ? 'Nos services de peinture intérieure'
                : 'Our interior painting services'}
            </Text>
            <Flex direction="row" flexWrap="wrap" gap="1">
              <Tag colorScheme="blue" size="md" borderRadius="sm">
                <Text color="blue.900">
                  {currentLang === 'fr' ? 'Plinthes' : 'Skirting boards'}
                </Text>
              </Tag>
              <Tag colorScheme="blue" size="md" borderRadius="sm">
                <Text color="blue.900">
                  {currentLang === 'fr' ? 'Portes' : 'Doors'}
                </Text>
              </Tag>
              <Tag colorScheme="blue" size="md" borderRadius="sm">
                <Text color="blue.900">
                  {currentLang === 'fr' ? 'Plafonds' : 'Ceilings'}
                </Text>
              </Tag>
              <Tag colorScheme="blue" size="md" borderRadius="sm">
                <Text color="blue.900">
                  {currentLang === 'fr' ? 'Moulures' : 'Moldings'}
                </Text>
              </Tag>
              <Tag colorScheme="blue" size="md" borderRadius="sm">
                <Text color="blue.900">
                  {currentLang === 'fr' ? 'Rampes d’escalier' : 'Stair rails'}
                </Text>
              </Tag>
              <Tag colorScheme="blue" size="md" borderRadius="sm">
                <Text color="blue.900">
                  {currentLang === 'fr'
                    ? 'Marches et contremarches'
                    : 'Treads and risers'}
                </Text>
              </Tag>
              <Tag colorScheme="blue" size="md" borderRadius="sm">
                <Text color="blue.900">
                  {currentLang === 'fr'
                    ? 'Planchers et escaliers'
                    : 'Floors and stairs'}
                </Text>
              </Tag>
              <Tag colorScheme="blue" size="md" borderRadius="sm">
                <Text color="blue.900">
                  {currentLang === 'fr' ? 'Planchers' : 'Floors'}
                </Text>
              </Tag>
              <Tag colorScheme="blue" size="md" borderRadius="sm">
                <Text color="blue.900">
                  {currentLang === 'fr' ? 'Armoires' : 'Cabinets'}
                </Text>
              </Tag>
            </Flex>
          </Stack>
        </Stack>

        <Image
          borderRadius="sm"
          py="10px"
          src="https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/Peinture-15-idees-pour-personnaliser-son-interieur.jpg"
          h={{ base: '300px', md: '400px' }}
        />
      </Stack>

      <Stack
        gap="2"
        bg="#d7e9f7"
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
            color="blue.400"
          >
            {currentLang === 'fr'
              ? 'Service de Peinture Intérieure'
              : 'Interior Painting Service'}
          </Text>
          <Text
            fontWeight="bold"
            fontSize={{ base: '27px', md: '25px' }}
            pl="5px"
          >
            {currentLang === 'fr' ? 'TRAVAIL EXCEPTIONNEL' : 'EXCEPTIONAL WORK'}
          </Text>
        </Stack>
        <Text
          fontWeight="normal"
          fontSize={{ base: 'sm', md: '16px' }}
          textAlign="justify"
          pb="10px"
        >
          {currentLang === 'fr'
            ? 'Le Lever Du Pinceau se concentre sur la fourniture de services de peinture intérieure de qualité à des tarifs très compétitifs.'
            : 'Le Lever Du Pinceau focuses on providing services of quality interior painting at very competitive prices.'}
        </Text>

        <Flex
          py="10px"
          flexDir="row"
          flexWrap="wrap"
          gap="10"
          w="100%"
          justifyContent={{ base: 'center', md: 'center' }}
        >
          <Stack
            gap="4"
            flexWrap="wrap"
            flexDir={{ base: 'column', md: 'row' }}
            display="flex"
          >
            <Stack
              alignItems="center"
              justifyContent="center"
              gap="1"
              w="250px"
              style={{ touchAction: 'none' }}
            >
              <ReactCompareImage
                leftImage={
                  'https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/iteriorbefore.jpg'
                }
                rightImage={
                  'https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/interior1.jpg'
                }
                aspectRatio="taller"
                leftImageLabel="AVANT"
                rightImageLabel="APRÈS"
                vertical={false}
              />

              <Stack
                alignItems="center"
                justifyContent="center"
                w="100%"
                gap="0"
              >
                <Stack direction="row">
                  <Stack
                    direction="row"
                    fontWeight="semibold"
                    alignItems="center"
                    gap="1"
                  >
                    <Icon
                      as={FiMapPin}
                      fontSize={{ base: 'sm', md: 'normal' }}
                    />
                    <Text fontSize={{ base: 'sm', md: 'normal' }}>
                      {currentLang === 'fr' ? 'Montréal' : 'Montreal'}
                    </Text>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
          <Stack w="100%">
            <Stack gap="0">
              <Text
                fontWeight="semibold"
                fontSize={{ base: 'md', md: 'lg' }}
                color="blue.400"
              >
                {currentLang === 'fr'
                  ? 'Services de qualités'
                  : 'Quality services'}
              </Text>
              <Text
                fontWeight="bold"
                fontSize={{ base: '27px', md: '25px' }}
                pl="5px"
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
              <Image src={imgBg} w="350px" />
            </Stack>
          </Stack>
        </Flex>
      </Stack>
    </Stack>
  );
}
