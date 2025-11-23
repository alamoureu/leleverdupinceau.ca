import React, { Fragment } from 'react';
import {
  Stack,
  Text,
  ButtonGroup,
  IconButton,
  Flex,
  Image,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { Outlet } from 'react-router-dom';
import WebsiteNavBar from '../navigation/WebsiteNavBar';
import FloatingLanguageToggle from '../components/FloatingLanguageToggle';
import { Helmet } from 'react-helmet';

export default function NewWebsiteLayout() {
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
              streetAddress: '2175 Saint-Patrick St',
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

        <Stack
          position='static'
          bottom='0'
          w='100%'
          spacing={{ base: 6, sm: 8 }}
          bg='#022A68'
          py={{ base: 8, sm: 10, lg: 12 }}
          px={{ base: 4, sm: 6, lg: 12 }}
        >
          <Stack
            justify='space-between'
            direction={{ base: 'column', md: 'row' }}
            align={{ base: 'center', md: 'center' }}
            spacing={{ base: 8, sm: 6, md: 0 }}
          >
            <Image
              loading='lazy'
              src={
                'https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/whitelogo.png'
              }
              h={{ base: '80px', sm: '90px', md: '70px', lg: '80px' }}
              w='auto'
            />
            <ButtonGroup variant='tertiary.accent'>
              <IconButton
                as='a'
                textColor='white'
                href='https://www.instagram.com/leleverdupinceau/'
                aria-label='Instagram'
                fontSize={{ base: '28px', md: '28px', lg: '32px' }}
                icon={<FontAwesomeIcon icon={faInstagram} />}
              />
              <IconButton
                as='a'
                href='https://www.facebook.com/profile.php?id=100094900160859'
                textColor='white'
                fontSize={{ base: '28px', md: '28px', lg: '32px' }}
                aria-label='Facebook'
                icon={<FontAwesomeIcon icon={faFacebook} />}
              />
            </ButtonGroup>
          </Stack>
          <Text
            fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
            textColor='white'
            textAlign={{ base: 'center', md: 'left' }}
            pb={{ base: 4, md: 6 }}
          >
            &copy; {new Date().getFullYear()} Le Lever Du Pinceau, Tout les
            droits réservés
          </Text>
        </Stack>
        <FloatingLanguageToggle />
      </Flex>
    </Fragment>
  );
}
