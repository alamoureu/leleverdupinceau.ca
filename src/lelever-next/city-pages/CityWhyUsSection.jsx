import React, { useContext } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  Button,
  Link,
  Flex,
  Icon,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import appContext from '../../AppProvider';

export default function CityWhyUsSection({
  cityName,
  whyUsContent,
  whyUsIntroText,
}) {
  const { currentLang } = useContext(appContext);
  const isFr = currentLang === 'fr';

  return (
    <Box
      py={{ base: 12, md: 16 }}
      bg='gray.50'
      borderRadius='xl'
      mb={{ base: 8, md: 12 }}
    >
      <Container maxW='1440px' px={{ base: 4, md: 6 }}>
        <Stack spacing={8} align='center' maxW='900px' mx='auto'>
          <Stack spacing={6}>
            <Stack spacing={3} textAlign='left'>
              <Heading
                as='h2'
                fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                fontWeight='bold'
                color='gray.800'
              >
                {isFr
                  ? cityName === 'Montréal'
                    ? 'Une équipe de peintres basée dans le Grand Montréal'
                    : cityName === 'Brossard'
                      ? 'Une équipe de peintres professionnels sur la Rive-Sud'
                      : cityName === 'Laval'
                        ? 'Une équipe de peintres professionnels basée près de Laval'
                        : cityName === 'Longueuil'
                          ? 'Une équipe locale, rapide et expérimentée'
                          : `Une équipe de peintres professionnels sur la Rive-Sud ${cityName}`
                  : cityName === 'Montreal'
                    ? 'A team of painters based in Greater Montreal'
                    : cityName === 'Brossard'
                      ? 'A team of professional painters on the South Shore'
                      : cityName === 'Laval'
                        ? 'A team of professional painters based near Laval'
                        : cityName === 'Longueuil'
                          ? 'A local, fast and experienced team'
                          : `A team of professional painters on the South Shore ${cityName}`}
              </Heading>
            </Stack>

            {whyUsContent ? (
              typeof whyUsContent === 'string' ? (
                <Text
                  fontSize={{ base: 'md', md: 'lg' }}
                  color='gray.600'
                  lineHeight='1.7'
                  textAlign='left'
                >
                  {whyUsContent}
                </Text>
              ) : (
                <Stack spacing={3}>
                  {whyUsIntroText && (
                    <Text
                      fontSize={{ base: 'md', md: 'lg' }}
                      color='gray.600'
                      lineHeight='1.7'
                      textAlign='left'
                      mb={2}
                    >
                      {whyUsIntroText}
                    </Text>
                  )}
                  {whyUsContent.map((item, index) => (
                    <Flex
                      key={index}
                      align='start'
                      gap={4}
                      p={4}
                      bg='white'
                      borderRadius='lg'
                      border='1px solid'
                      borderColor='gray.200'
                    >
                      <Icon
                        as={FontAwesomeIcon}
                        icon={faCheckCircle}
                        color='#014CC4'
                        boxSize={5}
                        mt={0.5}
                        flexShrink={0}
                      />
                      <Text
                        fontSize='md'
                        color='gray.700'
                        lineHeight='1.6'
                        fontWeight='500'
                        textAlign='left'
                      >
                        {item.replace(/^•\s*/, '')}
                      </Text>
                    </Flex>
                  ))}
                </Stack>
              )
            ) : (
              <Text
                fontSize={{ base: 'md', md: 'lg' }}
                color='gray.600'
                lineHeight='1.7'
                textAlign='left'
              >
                {isFr
                  ? `Contenu à compléter avec les avantages spécifiques à ${cityName}.`
                  : `Content to be completed with specific advantages for ${cityName}.`}
              </Text>
            )}

            <Link
              href='/peintre-professionnel'
              _hover={{ textDecoration: 'none' }}
              w={{ base: '100%', md: 'auto' }}
            >
              <Button
                rightIcon={<ArrowForwardIcon />}
                variant='outline'
                borderColor='#014CC4'
                color='#014CC4'
                borderRadius='full'
                fontSize={{ base: 'sm', md: 'md' }}
                px={{ base: 5, md: 7 }}
                py={{ base: 3, md: 4 }}
                _hover={{ bg: '#014CC4', color: 'white' }}
                whiteSpace='normal'
                textAlign='center'
                lineHeight='1.4'
                h='auto'
                minH='48px'
              >
                {isFr
                  ? 'En savoir plus sur nos peintres professionnels'
                  : 'Learn more about our professional painters'}
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
