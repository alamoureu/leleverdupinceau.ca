import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { FaStar } from 'react-icons/fa6';

export default function WhyUsHero({ lang, onSubmissionOpen }) {
  return (
    <Box
      bg="white"
      pt={{ base: '72px', md: '96px', lg: '112px' }}
      pb={{ base: 18, md: 22, lg: 26 }}
      color="gray.700"
    >
      <Container maxW="1440px" px={{ base: 4, md: 6 }}>
        <Stack spacing={{ base: 6, md: 8 }} align="center" textAlign="center">
          <Stack spacing={{ base: 5, md: 6 }} maxW="720px">
            <Text
              fontSize={{ base: 'sm', md: 'lg' }}
              fontWeight="semibold"
              fontStyle="italic"
              color="#53514E"
            >
              {lang === 'fr'
                ? 'Augmentez la valeur de votre maison'
                : 'Increase Your Home Value'}
              <br />
              <Box as="span" fontWeight="normal" fontStyle="normal">
                {lang === 'fr' ? 'sans effort de votre part' : 'Effortlessly'}
              </Box>
            </Text>

            <Heading
              as="h2"
              size="section"
              fontWeight="bold"
              color="gray.800"
              sx={{ textWrap: 'balance' }}
            >
              {lang === 'fr'
                ? 'Pourquoi choisir Le Lever du Pinceau ?'
                : 'Why Choose Le Lever du Pinceau?'}
            </Heading>
            <Text
              fontSize={{ base: 'sm', md: 'lg' }}
              color="gray.600"
              sx={{ textWrap: 'balance' }}
            >
              {lang === 'fr'
                ? "Gagnez du temps, profitez d'un résultat parfait"
                : 'Save time, enjoy perfect results'}
            </Text>
          </Stack>

          <Flex
            justify="center"
            align="center"
            gap={{ base: 6, md: 10, lg: 12 }}
            direction={{ base: 'column', md: 'row' }}
            pt={{ base: 1, md: 3 }}
            w="100%"
          >
            <Box textAlign="center" minW={{ md: '180px' }}>
              <Text
                fontSize={{ base: '3xl', md: '4xl' }}
                fontWeight="bold"
                color="#53514E"
              >
                800+
              </Text>
              <Text fontSize={{ base: 'sm', md: 'md' }} color="gray.600">
                {lang === 'fr'
                  ? 'Plus de 800 clients ravis'
                  : 'Over 800 delighted clients'}
              </Text>
            </Box>

            <Box textAlign="center" minW={{ md: '220px' }}>
              <Text
                fontSize={{ base: '3xl', md: '4xl' }}
                fontWeight="bold"
                color="#53514E"
              >
                4.9+
              </Text>
              <Flex justify="center" align="center" mb="1" mt="0">
                {[...Array(5)].map((_, i) => (
                  <Icon as={FaStar} key={i} color="#FBBC04" boxSize="4" />
                ))}
              </Flex>
              <Box
                display="flex"
                flexDir="row"
                justifyContent="center"
                alignItems="center"
                gap={1}
              >
                <Text fontSize={{ base: 'sm', md: 'md' }} color="gray.600">
                  {lang === 'fr'
                    ? 'Noté 4.9 étoiles sur'
                    : 'Rated 4.9 stars on'}
                </Text>
                <Image
                  loading="lazy"
                  decoding="async"
                  src="https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/images+(1).png"
                  mt="2px"
                  h="20px"
                  _hover={{ cursor: 'pointer', textDecor: 'underline' }}
                  onClick={() =>
                    window.open('https://g.co/kgs/b5mg4aP', '_blank')
                  }
                />
              </Box>
            </Box>

            <Box textAlign="center" minW={{ md: '200px' }}>
              <Text
                fontSize={{ base: '3xl', md: '4xl' }}
                fontWeight="bold"
                color="#53514E"
              >
                100%
              </Text>
              <Text fontSize={{ base: 'sm', md: 'md' }} color="gray.600">
                {lang === 'fr'
                  ? '100% satisfaction garantie'
                  : '100% satisfaction guaranteed'}
              </Text>
            </Box>
          </Flex>

          <Stack
            spacing={{ base: 3, md: 5 }}
            align="center"
            pt={{ base: 4, md: 6 }}
            w="100%"
          >
            <Box
              position="relative"
              w={{ base: '70%', sm: '340px' }}
              maxW="360px"
            >
              <Button
                bg="brand.500"
                textColor="white"
                _hover={{ bg: 'brand.600' }}
                size={{ base: 'md', md: 'lg' }}
                w="100%"
                borderRadius="full"
                boxShadow="md"
                onClick={onSubmissionOpen}
              >
                {lang === 'fr'
                  ? 'Soumission gratuite en 24h'
                  : 'Free quote in 24h'}
              </Button>
              <Box
                position="absolute"
                right={{ base: '-60px', md: '-95px' }}
                top="50%"
                transform={{ base: 'translateY(-30%)', md: 'translateY(-35%)' }}
                display="block"
                pointerEvents="none"
              >
                <Image
                  loading="lazy"
                  decoding="async"
                  src="https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/nicearrow+(1).png"
                  alt="Arrow pointing to button"
                  w={{ base: '70px', md: '110px' }}
                  opacity={0.9}
                />
              </Box>
            </Box>

            <Stack
              spacing={{ base: 2, md: 3 }}
              mt={{ base: 3, md: 5 }}
              maxW="560px"
            >
              <Text
                textAlign="center"
                fontSize={{ base: 'lg', md: '2xl' }}
                color="gray.600"
                fontWeight="semibold"
                sx={{ textWrap: 'balance' }}
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
                  fontSize={{ base: 'lg', md: '2xl' }}
                  fontWeight="semibold"
                  color="gray.900"
                >
                  {lang === 'fr' ? 'moins de' : 'less than'}
                </Text>
                <Image
                  loading="lazy"
                  decoding="async"
                  src="https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/IMG_1089+(1)+(1).jpg"
                  h={{ base: '76px', sm: '96px', md: '128px' }}
                />
              </Box>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
