import React, { useContext } from 'react';
import {
  Box,
  Container,
  Heading,
  Stack,
  SimpleGrid,
  Link,
  Text,
  HStack,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import appContext from '../../../AppProvider';

export default function CityResourcesSection({ cityName }) {
  const { currentLang } = useContext(appContext);
  const isFr = currentLang === 'fr';

  const blogArticles =
    cityName === 'Montréal' || cityName === 'Montreal'
      ? [
          {
            title: isFr
              ? 'Comment choisir un peintre professionnel\u00A0?'
              : 'How to choose a professional painter\u00A0?',
            link: '/blog/comment-choisir-un-peintre-professionnel',
          },
          {
            title: isFr
              ? "Prix peinture Montréal : ce qu'il faut savoir"
              : 'Painting prices Montreal: what you need to know',
            link: '/blog/prix-peinture-montreal',
          },
          {
            title: isFr
              ? 'Erreurs à éviter avant de repeindre votre propriété'
              : 'Mistakes to avoid before repainting your property',
            link: '/blog/erreurs-a-eviter-peinture',
          },
        ]
      : cityName === 'Laval'
      ? [
          {
            title: isFr
              ? 'Comment choisir un peintre professionnel ?'
              : 'How to choose a professional painter?',
            link: '/blog/comment-choisir-un-peintre-professionnel',
          },
          {
            title: isFr
              ? 'Prix peinture Laval / Montréal : comparatif utile'
              : 'Painting prices Laval / Montreal: useful comparison',
            link: '/blog/prix-peinture-montreal',
          },
          {
            title: isFr
              ? 'Erreurs à éviter avant de repeindre votre propriété'
              : 'Mistakes to avoid before repainting your property',
            link: '/blog/erreurs-a-eviter-peinture',
          },
        ]
      : cityName === 'Longueuil'
      ? [
          {
            title: isFr
              ? 'Comment choisir un peintre professionnel ?'
              : 'How to choose a professional painter?',
            link: '/blog/comment-choisir-un-peintre-professionnel',
          },
          {
            title: isFr
              ? 'Prix peinture Montréal/Longueuil — estimation utile'
              : 'Painting prices Montreal/Longueuil — useful estimate',
            link: '/blog/prix-peinture-montreal',
          },
          {
            title: isFr
              ? 'Les erreurs à éviter avant de repeindre'
              : 'Mistakes to avoid before repainting',
            link: '/blog/erreurs-a-eviter-peinture',
          },
        ]
      : [
          {
            title: isFr
              ? 'Comment choisir un peintre professionnel ?'
              : 'How to choose a professional painter?',
            link: '/blog/comment-choisir-un-peintre-professionnel',
          },
          {
            title: isFr
              ? 'Prix peinture Montréal / Rive-Sud — analyse complète'
              : 'Painting prices Montreal / South Shore — complete analysis',
            link: '/blog/prix-peinture-montreal',
          },
          {
            title: isFr
              ? 'Les erreurs à éviter avant de repeindre votre maison ou commerce'
              : 'Mistakes to avoid before repainting your house or business',
            link: '/blog/erreurs-a-eviter-peinture',
          },
        ];

  return (
    <Box py={{ base: 12, md: 16 }} mb={{ base: 8, md: 12 }}>
      <Container maxW='1440px' px={{ base: 4, md: 6 }}>
        <Stack spacing={8}>
          <Stack spacing={3} textAlign='center'>
            <Heading
              as='h2'
              fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
              fontWeight='bold'
              color='gray.800'
            >
              {isFr
                ? cityName === 'Montréal'
                  ? 'Conseils avant de lancer un projet de peinture à Montréal'
                  : cityName === 'Laval'
                  ? 'Conseils avant votre projet de peinture à Laval'
                  : `Conseils pour vos projets de peinture à ${cityName}`
                : cityName === 'Montreal'
                ? 'Tips before launching a painting project in Montreal'
                : cityName === 'Laval'
                ? 'Tips before your painting project in Laval'
                : `Tips for your painting projects in ${cityName}`}
            </Heading>
          </Stack>

          <SimpleGrid
            columns={{ base: 1, md: 3 }}
            spacing={{ base: 4, md: 6 }}
            maxW='1000px'
            mx='auto'
          >
            {blogArticles.map((article, index) => (
              <Link
                key={index}
                href={article.link}
                _hover={{ textDecoration: 'none' }}
              >
                <Box
                  bg='white'
                  p={{ base: 4, md: 6 }}
                  borderRadius='xl'
                  border='1px solid'
                  borderColor='gray.200'
                  _hover={{
                    borderColor: '#014CC4',
                    transform: 'translateY(-2px)',
                    boxShadow: 'md',
                  }}
                  transition='all 0.2s'
                >
                  <Stack spacing={3}>
                    <Text
                      fontWeight='bold'
                      color='gray.800'
                      fontSize='md'
                      lineHeight='1.5'
                    >
                      {article.title}
                    </Text>
                    <HStack spacing={2} color='#014CC4'>
                      <Text fontSize='sm' fontWeight='medium'>
                        {isFr ? 'Lire' : 'Read'}
                      </Text>
                      <ArrowForwardIcon boxSize={4} />
                    </HStack>
                  </Stack>
                </Box>
              </Link>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
}
