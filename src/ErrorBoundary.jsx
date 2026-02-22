import React from 'react';
import { Box, Button, Container, Heading, Text, VStack } from '@chakra-ui/react';

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
        <Container maxW="md" py={16}>
          <VStack spacing={6} textAlign="center">
            <Heading size="lg" color="gray.800">
              Une erreur est survenue
            </Heading>
            <Text color="gray.600">
              Veuillez rafraîchir la page ou retourner à l&apos;accueil.
            </Text>
            <Box>
              <Button
                colorScheme="brand"
                onClick={() => window.location.assign('/')}
                mr={3}
              >
                Retour à l&apos;accueil
              </Button>
              <Button variant="outline" onClick={this.handleRetry}>
                Réessayer
              </Button>
            </Box>
          </VStack>
        </Container>
      );
    }
    return this.props.children;
  }
}
