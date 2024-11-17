import { Box, Button, Flex, Icon, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { FaStar } from 'react-icons/fa6';

export default function WhyUsHero({ lang, onSubmissionOpen }) {
  return (
    <Stack py={{ base: '0px', md: '25px' }} pt={{ base: '10px', md: '40px' }}>
      <Text
        textAlign="center"
        fontSize={{ base: 'xl', md: '4xl' }}
        fontWeight="semibold"
        mx="15px"
      >
        {lang === 'fr'
          ? 'Pourquoi choisir Le Lever du Pinceau ?'
          : 'Why Choose Le Lever du Pinceau?'}
      </Text>
      <Text
        textAlign="center"
        fontSize={{ base: 'sm', md: 'lg' }}
        fontWeight="normal"
        mx="15px"
      >
        {lang === 'fr'
          ? "Gagnez du temps, profitez d'un résultat parfait"
          : 'Save time, enjoy perfect results'}
      </Text>
      <Flex
        justify="center"
        align="center"
        gap={{ base: '8', md: '12' }}
        direction={{ base: 'column', md: 'row' }}
        pt={{ base: '10px', md: '50px' }}
      >
        <Box textAlign="center">
          <Text fontSize="4xl" fontWeight="bold">
            400+
          </Text>
          <Text fontSize="md">
            {lang === 'fr'
              ? 'Plus de 400 clients satisfaits'
              : 'Over 400 satisfied clients'}
          </Text>
        </Box>

        <Box textAlign="center">
          <Text fontSize="4xl" fontWeight="bold">
            4.8+
          </Text>
          <Flex justify="center" align="center" mb="1" mt="0">
            {[...Array(5)].map((_, i) => (
              <Icon as={FaStar} key={i} color="#EAA82E" boxSize="4" />
            ))}
          </Flex>
          <Box display="flex" flexDir="row">
            <Text fontSize="md">
              {lang === 'fr' ? 'Noté 4.8 étoiles sur' : 'Rated 4.8 stars on'}
            </Text>
            <Image
              src="https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/images.png"
              fontWeight="bold"
              mt="4px"
              ml="5px"
              h="20px"
              _hover={{ cursor: 'pointer', textDecor: 'underline' }}
              onClick={() => window.open('https://g.co/kgs/b5mg4aP', '_blank')}
            />
          </Box>
        </Box>
        <Box textAlign="center">
          <Text fontSize="4xl" fontWeight="bold">
            100%
          </Text>
          <Text fontSize="md">
            {lang === 'fr'
              ? '100% satisfaction garanti'
              : '100% satisfaction guaranteed'}
          </Text>
        </Box>
      </Flex>
      <Box display="flex" flexDir="column" alignItems="center">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          position="relative"
          w="250px"
          mt={{ base: '20px', md: '70px' }}
        >
          <Button
            bg="#0056D2"
            textColor="white"
            _hover={{ bg: '#0056D2' }}
            size={{ base: 'md', md: 'lg' }}
            w="100%"
            onClick={onSubmissionOpen}
          >
            {lang === 'fr' ? 'Soumission gratuite' : 'Free Quote'}
          </Button>
          <Box
            position="absolute"
            right={{ base: '-70px', md: '-110px' }}
            top={{ base: '80%', md: '90%' }}
            transform="translateY(-50%)"
          >
            <Image
              src="https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/nicearrow.png"
              alt="Arrow pointing to button"
              w={{ base: '80px', md: '125px' }}
            />
          </Box>
        </Box>
        <Box spacing="0px" mt={{ base: '20px', md: '50px' }}>
          <Text
            textAlign="center"
            fontSize={{ base: 'xl', md: '2xl' }}
            textColor="gray.500"
            fontWeight="semibold"
            mx="15px"
          >
            {lang === 'fr'
              ? 'Vous voulez savoir combien coûte votre projet rapidement ?'
              : 'Want to know how much your project will cost quickly?'}
          </Text>
          <Box
            display="flex"
            flexDir="row"
            alignItems="center"
            justifyContent="center"
          >
            <Text
              textAlign="center"
              fontSize={{ base: 'xl', md: '2xl' }}
              fontWeight="semibold"
            >
              {lang === 'fr' ? 'moins de' : 'less than'}
            </Text>
            <Image
              src="https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/IMG_1089.JPG"
              h={{ base: '70px', md: '120px' }}
            />
          </Box>
        </Box>
      </Box>
    </Stack>
  );
}
