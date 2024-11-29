import { Box, Heading, Icon, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { FaStar } from 'react-icons/fa6';
import { FiThumbsUp } from 'react-icons/fi';

export default function ClientReviewsHero({ lang, onDrawerOpen }) {
  return (
    <Stack
      position="relative"
      w="100%"
      bgSize="auto"
      bgPosition="center"
      bgRepeat="no-repeat"
      display="flex"
      alignItems="center"
      px={{ base: '10px', md: '100px' }}
    >
      <Box
        textAlign="center"
        my={8}
        px={{ base: 4, md: 0 }}
        position="relative"
      >
        <Heading
          as="h2"
          fontSize={{ base: '3xl', md: '4xl' }}
          fontWeight="bold"
          color="rgba(1, 42, 104, 1)"
          mb={2}
          position="relative"
          display="inline-block"
          _after={{
            content: '""',
            position: 'absolute',
            width: '60%',
            height: '3px',
            backgroundColor: 'blue.500',
            bottom: '-4px',
            left: '20%',
          }}
        >
          {lang === 'fr' ? 'Avis de nos clients' : 'Customer Reviews'}
        </Heading>
      </Box>

      <Box
        bg="#F5F6F8"
        p={4}
        borderRadius="md"
        textAlign="left"
        maxW="500px"
        w="100%"
        mb={4}
        position="relative"
      >
        <Text fontWeight="bold" fontSize="md" color="gray.800">
          {lang === 'fr' ? 'Chantal Baril' : 'Chantal Baril'}
        </Text>
        <Text fontSize="sm" color="gray.500">
          {lang === 'fr' ? 'Il y a 2 mois' : '2 months ago'}
        </Text>
        <Box display="flex" alignItems="center" mt={1} mb={2}>
          {[...Array(5)].map((_, i) => (
            <Icon key={i} as={FaStar} color="#EAA82E" />
          ))}
        </Box>
        <Text fontSize="md" color="gray.700">
          {lang === 'fr'
            ? 'Je suis très satisfaite des travaux qui ont été effectués à notre résidence. J’ai reçu un devis rapidement et les travaux ont débuté tel que convenu, malgré une météo inclémente. Le résultat a dépassé mes attentes; le souci du détail est apparent!'
            : 'I am very satisfied with the work that was done at our residence. I received a quote quickly, and the work started as agreed, despite inclement weather. The result exceeded my expectations; the attention to detail is evident!'}
        </Text>
        <Box mt={2} display="flex" justifyContent="flex-start">
          <Icon as={FiThumbsUp} color="gray.500" fontSize="lg" />
        </Box>
      </Box>

      <Box
        textAlign="center"
        display="flex"
        flexDirection="column"
        alignItems="center"
        position="relative"
        bottom={{ base: '70px', md: '60px' }}
      >
        <Image
          loading="lazy"
          src="https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/SSSS+(1).png"
          alt={lang === 'fr' ? 'Logo Google' : 'Google Logo'}
          w={{ base: '100px', md: '100px' }}
        />
      </Box>

      <Box
        textAlign="center"
        mb={{ base: '-60px', md: '0px' }}
        position="relative"
        top="-50px"
        onClick={onDrawerOpen}
      >
        <Box
          position="absolute"
          right={{ base: '-65px', md: '-95px' }}
          top={{ base: '-20px', md: '-35px' }}
          transform="translateY(-50%)"
        >
          <Image
            loading="lazy"
            src="https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/nicearrow%2B(1)2+(1).png"
            alt={
              lang === 'fr'
                ? 'Flèche pointant vers Voir plus de commentaires'
                : 'Arrow pointing to See more reviews'
            }
            w={{ base: '80px', md: '125px' }}
          />
        </Box>
        <Text
          fontSize="md"
          color="gray.600"
          fontWeight="bold"
          textDecoration="underline"
          cursor="pointer"
          _hover={{ color: 'gray.800' }}
        >
          {lang === 'fr' ? 'Voir plus de commentaires' : 'See more reviews'}
        </Text>
      </Box>
    </Stack>
  );
}
