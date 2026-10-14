import React from 'react';
import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import blackLogo from './lelever-next/images/blacklogo.webp';

/**
 * Catches React render errors and shows a fallback UI so the app doesn't white-screen.
 * Production-ready: no stack trace in production, clear CTA to go home.
 */
export default class ErrorBoundary extends React.Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    if (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.DEV) {
      console.error('ErrorBoundary caught:', error, errorInfo);
    }
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <Box
          minH="100vh"
          display="flex"
          alignItems="center"
          justifyContent="center"
          bg="white"
          py={{ base: 12, md: 16 }}
          px={{ base: 4, sm: 6, md: 8 }}
          w="100%"
        >
          <Container maxW="container.md" px={{ base: 4, sm: 6, md: 8 }}>
            <VStack
              spacing={{ base: 8, md: 10 }}
              textAlign="center"
              w="100%"
            >
              <Image
                src={blackLogo}
                alt="Le Lever du Pinceau"
                htmlWidth={1409}
                htmlHeight={873}
                h={{ base: '72px', md: '88px' }}
                w={{ base: '116px', md: '142px' }}
                objectFit="contain"
                mx="auto"
              />

              <VStack spacing={{ base: 3, md: 4 }} maxW="520px" w="100%">
                <Heading
                  as="h1"
                  size="page"
                  color="gray.800"
                  lineHeight="1.2"
                >
                  Une erreur est survenue
                </Heading>
                <Text
                  textStyle="bodyLarge"
                  color="gray.600"
                  lineHeight={{ base: '1.6', md: '1.7' }}
                >
                  Veuillez rafraîchir la page ou retourner à l&apos;accueil.
                </Text>
              </VStack>

              <Stack
                direction={{ base: 'column', sm: 'row' }}
                spacing={{ base: 3, sm: 4 }}
                justify="center"
                align="center"
                w="100%"
                maxW={{ base: '100%', sm: '500px' }}
              >
                <Button
                  variant="cta"
                  size={{ base: 'md', sm: 'lg' }}
                  w={{ base: '100%', sm: 'auto' }}
                  minW={{ base: '100%', sm: '200px' }}
                  px={{ base: 8, sm: 10 }}
                  textStyle="nav"
                  fontWeight="600"
                  h={{ base: '44px', sm: '48px' }}
                  borderRadius="full"
                  onClick={() => window.location.assign('/')}
                >
                  Retour à l&apos;accueil
                </Button>
                <Button
                  variant="outline"
                  size={{ base: 'md', sm: 'lg' }}
                  w={{ base: '100%', sm: 'auto' }}
                  minW={{ base: '100%', sm: '180px' }}
                  px={{ base: 8, sm: 10 }}
                  textStyle="nav"
                  fontWeight="600"
                  h={{ base: '44px', sm: '48px' }}
                  borderRadius="full"
                  onClick={this.handleRetry}
                >
                  Réessayer
                </Button>
              </Stack>
            </VStack>
          </Container>
        </Box>
      );
    }
    return this.props.children;
  }
}
