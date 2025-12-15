import React, { useContext } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Button,
  Link,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import appContext from '../../AppProvider';

export default function CityCTASection({ cityName }) {
  const { currentLang } = useContext(appContext);
  const isFr = currentLang === 'fr';

  return (
    <Box
      w='100%'
      py={{ base: 12, md: 16 }}
      bg='#022A68'
      mt={{ base: 8, md: 12 }}
    >
      <Container maxW='1440px' px={{ base: 4, md: 6 }}>
        <Stack spacing={8} textAlign='center'>
          <Stack spacing={3}>
            <Heading
              as='h2'
              fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
              fontWeight='bold'
              color='white'
            >
              {isFr
                ? cityName === 'Longueuil'
                  ? 'Obtenez une soumission pour un projet de peinture à Longueuil'
                  : `Obtenez votre soumission pour un projet de peinture à ${cityName}`
                : cityName === 'Longueuil'
                  ? 'Get a quote for a painting project in Longueuil'
                  : `Get your quote for a painting project in ${cityName}`}
            </Heading>
            <Text
              fontSize={{ base: 'md', md: 'lg' }}
              color='whiteAlpha.900'
              maxW='800px'
              mx='auto'
            >
              {isFr
                ? cityName === 'Montréal'
                  ? 'Vous avez un projet de peinture résidentielle, commerciale ou industrielle à Montréal ? Nos peintres se déplacent rapidement dans votre secteur.'
                  : cityName === 'Laval'
                    ? 'Nous pouvons intervenir rapidement pour vos projets résidentiels, commerciaux ou industriels.'
                    : cityName === 'Longueuil'
                      ? "Que ce soit pour l'intérieur, l'extérieur, un commerce ou un bâtiment industriel, notre équipe se déplace rapidement partout à Longueuil."
                      : 'Nous offrons des services rapides, fiables et professionnels pour tous vos travaux de peinture résidentiels, commerciaux ou industriels.'
                : cityName === 'Montreal'
                  ? 'Do you have a residential, commercial or industrial painting project in Montreal? Our painters quickly travel to your area.'
                  : cityName === 'Laval'
                    ? 'We can quickly intervene for your residential, commercial or industrial projects.'
                    : cityName === 'Longueuil'
                      ? "Whether it's for interior, exterior, commercial or industrial building work, our team quickly travels throughout Longueuil."
                      : 'We offer fast, reliable and professional services for all your residential, commercial or industrial painting work.'}
            </Text>
          </Stack>

          <Box>
            <Link
              as={RouterLink}
              to='/new-contact'
              _hover={{ textDecoration: 'none' }}
            >
              <Button
                rightIcon={<ArrowForwardIcon />}
                bg='white'
                color='#022A68'
                borderRadius='full'
                fontSize={{ base: 'sm', md: 'md' }}
                px={{ base: 5, md: 7 }}
                py={{ base: 3, md: 4 }}
                _hover={{ bg: 'gray.100' }}
                size='lg'
              >
                {isFr ? 'Soumission gratuite' : 'Free quote'}
              </Button>
            </Link>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
