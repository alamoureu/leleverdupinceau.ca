import React, { Fragment, useContext } from 'react';
import {
  Stack,
  Text,
  ButtonGroup,
  IconButton,
  Flex,
  Image,
  Box,
  Link,
  SimpleGrid,
  Divider,
  HStack,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { Outlet, Link as RouterLink } from 'react-router-dom';
import WebsiteNavBar from '../navigation/WebsiteNavBar';
import FloatingLanguageToggle from '../components/FloatingLanguageToggle';
import { Helmet } from 'react-helmet';
import appContext from '../../AppProvider';
import { useTranslation } from '../i18n';

export default function NewWebsiteLayout() {
  const { currentLang } = useContext(appContext);
  const { t } = useTranslation();

  return (
    <Fragment>
      <Helmet>
        <script type='application/ld+json'>
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Le Lever du Pinceau',
            description:
              'Entreprise spécialisée en peinture intérieure et extérieure à Montréal. Travail méticuleux et résultats exceptionnels.',
            url: 'https://www.leleverdupinceau.com',
            telephone: '+14388680772',
            email: 'leleverdupinceau@gmail.com',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '2175 Rue Saint-Patrick',
              addressLocality: 'Montréal',
              addressRegion: 'QC',
              postalCode: 'H3K 1B4',
              addressCountry: 'Canada',
            },
            openingHours: 'Mo-Sa 05:30-11:30',
            image:
              'https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/photo_lever_1.jpg',
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 45.48264,
              longitude: -73.56835,
            },
            sameAs: [
              'https://www.facebook.com/profile.php?id=100094900160859',
              'https://www.instagram.com/leleverdupinceau',
            ],
          })}
        </script>
      </Helmet>

      <Flex
        direction='column'
        overflow='hidden'
        h='100%'
        px='0'
        spacing='0'
        flex='1'
      >
        <WebsiteNavBar />

        <Stack
          gap='0'
          overflowX='none'
          overflowY='auto'
          h='100%'
          css={{
            '&::-webkit-scrollbar': {
              width: '2px',
            },
            '&::-webkit-scrollbar-track': {
              width: '2px',
            },
            '&::-webkit-scrollbar-thumb': {
              background: 'gray',
            },
          }}
        >
          <Outlet />
        </Stack>

        <Box
          position='static'
          bottom='0'
          w='100%'
          bg='#022A68'
          py={{ base: 8, md: 12 }}
          px={{ base: 4, md: 6, lg: 12 }}
        >
          <Box maxW='1440px' mx='auto'>
            <Stack
              spacing={3}
              align={{ base: 'center', md: 'flex-start' }}
              mb={{ base: 8, md: 10 }}
            >
              <RouterLink to='/new-home'>
                <Image
                  loading='lazy'
                  src={
                    'https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/whitelogo.png'
                  }
                  h={{ base: '60px', md: '70px' }}
                  w='auto'
                  cursor='pointer'
                />
              </RouterLink>
              <Box
                as={RouterLink}
                to='/new-home'
                cursor='pointer'
                _hover={{ textDecoration: 'underline' }}
              >
                <Text
                  fontSize={{ base: 'md', md: 'lg' }}
                  color='white'
                  fontWeight='medium'
                  _hover={{ color: 'gray.300' }}
                >
                  {currentLang === 'fr'
                    ? 'Une peinture propre, rapide et impeccable.'
                    : 'Clean, fast and impeccable painting.'}
                </Text>
              </Box>
            </Stack>

            <Divider borderColor='gray.600' mb={{ base: 6, md: 8 }} />

            <SimpleGrid
              columns={{ base: 1, sm: 2, md: 3 }}
              spacing={{ base: 6, md: 8 }}
              mb={{ base: 8, md: 10 }}
            >
              <Stack spacing={3}>
                <Text
                  fontSize={{ base: 'md', md: 'lg' }}
                  fontWeight='bold'
                  color='white'
                  mb={2}
                >
                  SERVICES
                </Text>
                <Stack spacing={2}>
                  <Link
                    as={RouterLink}
                    to='/services/new-peinture-interieure'
                    color='white'
                    fontSize='sm'
                    _hover={{ textDecoration: 'underline', color: 'gray.300' }}
                  >
                    - {t.serviceInterior}
                  </Link>
                  <Link
                    as={RouterLink}
                    to='/services/new-peinture-exterieure'
                    color='white'
                    fontSize='sm'
                    _hover={{ textDecoration: 'underline', color: 'gray.300' }}
                  >
                    - {t.serviceCommercial}
                  </Link>
                  <Link
                    as={RouterLink}
                    to='/services'
                    color='white'
                    fontSize='sm'
                    _hover={{ textDecoration: 'underline', color: 'gray.300' }}
                  >
                    - {t.serviceResidential}
                  </Link>
                </Stack>
              </Stack>

              <Stack spacing={3}>
                <Text
                  fontSize={{ base: 'md', md: 'lg' }}
                  fontWeight='bold'
                  color='white'
                  mb={2}
                >
                  ENTREPRISE
                </Text>
                <Stack spacing={2}>
                  <Link
                    as={RouterLink}
                    to='/a-propos'
                    color='white'
                    fontSize='sm'
                    _hover={{ textDecoration: 'underline', color: 'gray.300' }}
                  >
                    - {currentLang === 'fr' ? 'À propos' : 'About'}
                  </Link>
                  <Link
                    as={RouterLink}
                    to='/avis'
                    color='white'
                    fontSize='sm'
                    _hover={{ textDecoration: 'underline', color: 'gray.300' }}
                  >
                    - {currentLang === 'fr' ? 'Avis clients' : 'Client reviews'}
                  </Link>
                  <Link
                    as={RouterLink}
                    to='/peintre-professionnel'
                    color='white'
                    fontSize='sm'
                    _hover={{ textDecoration: 'underline', color: 'gray.300' }}
                  >
                    -{' '}
                    {currentLang === 'fr'
                      ? 'Peintres pro'
                      : 'Professional painters'}
                  </Link>
                </Stack>
              </Stack>

              <Stack spacing={3}>
                <Text
                  fontSize={{ base: 'md', md: 'lg' }}
                  fontWeight='bold'
                  color='white'
                  mb={2}
                >
                  RESSOURCES
                </Text>
                <Stack spacing={2}>
                  <Link
                    as={RouterLink}
                    to='/blog'
                    color='white'
                    fontSize='sm'
                    _hover={{ textDecoration: 'underline', color: 'gray.300' }}
                  >
                    - {currentLang === 'fr' ? 'Blog' : 'Blog'}
                  </Link>
                  <Link
                    as={RouterLink}
                    to='/new-contact'
                    color='white'
                    fontSize='sm'
                    _hover={{ textDecoration: 'underline', color: 'gray.300' }}
                  >
                    - {currentLang === 'fr' ? 'Contact' : 'Contact'}
                  </Link>
                  <Link
                    as={RouterLink}
                    to='/secteurs-desservis'
                    color='white'
                    fontSize='sm'
                    _hover={{ textDecoration: 'underline', color: 'gray.300' }}
                  >
                    -{' '}
                    {currentLang === 'fr'
                      ? 'Secteurs desservis'
                      : 'Service areas'}
                  </Link>
                </Stack>
              </Stack>
            </SimpleGrid>

            <Divider borderColor='gray.600' mb={{ base: 6, md: 8 }} />

            <Flex
              direction={{ base: 'column', md: 'row' }}
              justify='space-between'
              align={{ base: 'flex-start', md: 'center' }}
              spacing={4}
              mb={{ base: 6, md: 8 }}
            >
              <Stack spacing={2}>
                <Link
                  href='tel:4388680772'
                  color='white'
                  fontSize='sm'
                  _hover={{ textDecoration: 'underline', color: 'gray.300' }}
                >
                  (438) 868-0772
                </Link>
                <Link
                  href='mailto:leleverdupinceau@gmail.com'
                  color='white'
                  fontSize='sm'
                  _hover={{ textDecoration: 'underline', color: 'gray.300' }}
                >
                  leleverdupinceau@gmail.com
                </Link>
                <Text color='white' fontSize='sm'>
                  2175 Rue Saint-Patrick, Montréal, QC H3K 1B4
                </Text>
              </Stack>
              <ButtonGroup variant='tertiary.accent' mt={{ base: 4, md: 0 }}>
                <IconButton
                  as='a'
                  textColor='white'
                  href='https://www.instagram.com/leleverdupinceau/'
                  aria-label='Instagram'
                  fontSize='24px'
                  icon={<FontAwesomeIcon icon={faInstagram} />}
                  _hover={{ color: 'gray.300' }}
                />
                <IconButton
                  as='a'
                  href='https://www.facebook.com/profile.php?id=100094900160859'
                  textColor='white'
                  fontSize='24px'
                  aria-label='Facebook'
                  icon={<FontAwesomeIcon icon={faFacebook} />}
                  _hover={{ color: 'gray.300' }}
                />
              </ButtonGroup>
            </Flex>

            <Divider borderColor='gray.600' mb={4} />

            <HStack
              spacing={4}
              justify={{ base: 'center', md: 'flex-start' }}
              flexWrap='wrap'
            >
              <Link
                as={RouterLink}
                to='/politiques/termes-conditions'
                color='white'
                fontSize='sm'
                _hover={{ textDecoration: 'underline', color: 'gray.300' }}
              >
                {currentLang === 'fr' ? 'Mentions légales' : 'Legal notice'}
              </Link>
              <Text color='white' fontSize='sm'>
                |
              </Text>
              <Link
                as={RouterLink}
                to='/politiques/confidentialite'
                color='white'
                fontSize='sm'
                _hover={{ textDecoration: 'underline', color: 'gray.300' }}
              >
                {currentLang === 'fr'
                  ? 'Politique de confidentialité'
                  : 'Privacy policy'}
              </Link>
            </HStack>
          </Box>
        </Box>
        <FloatingLanguageToggle />
      </Flex>
    </Fragment>
  );
}
