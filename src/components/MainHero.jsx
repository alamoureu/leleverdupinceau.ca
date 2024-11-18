import { Box, Button, Heading, Image, Stack } from '@chakra-ui/react';
import React from 'react';

export default function MainHero({ onSubmissionFormOpen, lang, buttonColor }) {
  return (
    <Stack
      w="100%"
      h={{ base: '350px', md: '700px' }}
      position="relative"
      spacing="0px"
      mb={{ base: '-20px', md: '-100px' }}
    >
      <Box
        w="100%"
        h="100%"
        position="absolute"
        overflow="hidden"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 80%, 50% 90%, 0 80%)',
        }}
        zIndex="0"
      >
        <Image
          src="https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/dsdsd.png"
          alt="Background Image"
          objectFit={{ base: 'cover', md: 'cover' }}
          objectPosition="center"
          w="100%"
          h="100%"
        />
        <Box
          position="absolute"
          top="0"
          left="0"
          w="100%"
          h="100%"
          bg="rgba(0, 0, 0, 0.5)"
        />
      </Box>
      <Box
        position="relative"
        zIndex="1"
        color="white"
        textAlign="left"
        ml={{ base: '15px', md: '100px' }}
        pt={{ base: '50px', md: '100px' }}
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="center"
      >
        <Heading fontSize={{ base: '3xl', md: '7xl' }}>
          {lang === 'fr'
            ? "Peintre d'expérience\nmontréalais"
            : 'Experienced\nMontreal Painter'}
        </Heading>

        <Heading
          fontSize={{ base: 'xl', md: '3xl' }}
          fontWeight="normal"
          mb={{ base: '2', md: '4' }}
        >
          {lang === 'fr'
            ? 'Qualité garantie, au meilleur prix'
            : 'Guaranteed Quality, Best Price'}
        </Heading>

        <Button
          bg={buttonColor}
          textColor="white"
          _hover={{ bg: '#0056D2' }}
          shadow="xl"
          maxW={{ base: 'fit-content', md: '100%' }}
          size={{ base: 'sm', md: 'lg' }}
          onClick={onSubmissionFormOpen}
        >
          {lang === 'fr'
            ? 'Obtenez votre soumission gratuite'
            : 'Get Your Free Quote'}
        </Button>
      </Box>
      <Box
        position="absolute"
        right={{ base: '20px', md: '50px' }}
        bottom={{ base: '40px', md: '50px' }}
        display="flex"
        justifyContent="center"
        w={{ base: '80px', md: '125px' }}
      >
        <Image
          src={
            lang === 'fr'
              ? 'https://harbor-file-system.s3.ca-central-1.amazonaws.com/SSSS.png'
              : 'https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/ratinnnggs.png'
          }
        />
      </Box>
    </Stack>
  );
}
