import React, { useContext } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  Stack,
  VStack,
} from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import appContext from '../../AppProvider';

export default function NotFoundPage() {
  const { currentLang } = useContext(appContext);
  const isFr = currentLang === 'fr';
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>
          {isFr
            ? 'Page non trouvée - Le Lever du Pinceau'
            : 'Page Not Found - Le Lever du Pinceau'}
        </title>
        <meta
          name='description'
          content={
            isFr
              ? 'La page que vous recherchez est introuvable.'
              : 'The page you are looking for cannot be found.'
          }
        />
        <meta name='robots' content='noindex, nofollow' />
      </Helmet>
      <Box
        display='flex'
        alignItems='center'
        justifyContent='center'
        bg='white'
        pt={{ base: 12, md: 16, lg: 20 }}
        pb={{ base: '60px', md: '90px', lg: '125px' }}
        px={{ base: 4, sm: 6, md: 8 }}
        w='100%'
      >
        <Container maxW='container.md' px={{ base: 4, sm: 6, md: 8 }}>
          <VStack
            spacing={{ base: 8, md: 10, lg: 12 }}
            textAlign='center'
            w='100%'
          >
            <Box position='relative' display='inline-block'>
              <Heading
                as='h1'
                fontSize={{ base: '6xl', sm: '7xl', md: '9xl', lg: '10xl' }}
                fontWeight='900'
                color='#014CC4'
                lineHeight='1'
                letterSpacing={{ base: '-0.01em', md: '-0.02em' }}
                w='100%'
              >
                404
              </Heading>
            </Box>

            <VStack
              spacing={{ base: 4, md: 6 }}
              maxW='600px'
              w='100%'
              px={{ base: 2, sm: 0 }}
            >
              <Heading
                as='h2'
                fontSize={{ base: '2xl', sm: '3xl', md: '4xl', lg: '5xl' }}
                fontWeight='bold'
                color='gray.800'
                lineHeight='1.2'
                px={{ base: 4, sm: 0 }}
              >
                {isFr ? 'Page non trouvée' : 'Page Not Found'}
              </Heading>
              <Text
                fontSize={{ base: 'md', sm: 'lg', md: 'xl' }}
                color='gray.600'
                lineHeight={{ base: '1.6', md: '1.7' }}
                px={{ base: 2, sm: 0 }}
              >
                {isFr
                  ? "Désolé, la page que vous recherchez n'existe pas ou a été déplacée."
                  : "Sorry, the page you're looking for doesn't exist or has been moved."}
              </Text>
            </VStack>

            <Stack
              direction={{ base: 'column', sm: 'row' }}
              spacing={{ base: 3, sm: 4 }}
              justify='center'
              align='center'
              w='100%'
              maxW={{ base: '100%', sm: '500px' }}
              px={{ base: 2, sm: 0 }}
            >
              <Button
                as={RouterLink}
                to='/'
                bg='#014CC4'
                color='white'
                size={{ base: 'md', sm: 'lg' }}
                w={{ base: '100%', sm: 'auto' }}
                minW={{ base: '100%', sm: '200px' }}
                px={{ base: 8, sm: 10 }}
                fontSize={{ base: 'sm', sm: 'md' }}
                fontWeight='600'
                h={{ base: '44px', sm: '48px' }}
                borderRadius='md'
                _hover={{
                  bg: '#0139a0',
                  transform: 'translateY(-2px)',
                  boxShadow: 'lg',
                }}
                transition='all 0.2s'
              >
                {isFr ? "Retour à l'accueil" : 'Back to Home'}
              </Button>
              <Button
                onClick={() => navigate(-1)}
                leftIcon={<ArrowBackIcon />}
                variant='outline'
                size={{ base: 'md', sm: 'lg' }}
                w={{ base: '100%', sm: 'auto' }}
                minW={{ base: '100%', sm: '180px' }}
                px={{ base: 8, sm: 10 }}
                fontSize={{ base: 'sm', sm: 'md' }}
                fontWeight='600'
                h={{ base: '44px', sm: '48px' }}
                borderColor='gray.300'
                color='gray.700'
                bg='white'
                borderRadius='md'
                _hover={{
                  bg: 'gray.50',
                  borderColor: '#014CC4',
                  color: '#014CC4',
                  transform: 'translateY(-2px)',
                  boxShadow: 'sm',
                }}
                transition='all 0.2s'
              >
                {isFr ? 'Retour' : 'Go Back'}
              </Button>
            </Stack>
          </VStack>
        </Container>
      </Box>
    </>
  );
}
