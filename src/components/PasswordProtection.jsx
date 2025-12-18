import React, { useState, useEffect, useRef } from 'react';
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Heading,
  Text,
  Alert,
  AlertIcon,
  Card,
  CardBody,
  InputGroup,
  InputRightElement,
  IconButton,
  useToast,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { AuthService } from '../services/authService';

export default function PasswordProtection({
  role = AuthService.ROLES.ADMIN,
  onAuthenticated,
  title = 'Accès Sécurisé',
  description = 'Veuillez entrer le mot de passe pour accéder à cette page.',
  autoFillPassword = '', // For development/testing - auto-fills password
  autoSubmit = false, // For development/testing - auto-submits after filling
}) {
  const [password, setPassword] = useState(autoFillPassword);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const toast = useToast();
  const hasAutoSubmitted = useRef(false);

  // Auto-submit if password is pre-filled and autoSubmit is enabled
  useEffect(() => {
    if (autoSubmit && autoFillPassword && !hasAutoSubmitted.current) {
      hasAutoSubmitted.current = true;
      // Small delay to ensure component is fully mounted
      setTimeout(() => {
        handleSubmit({ preventDefault: () => {} });
      }, 100);
    }
  }, [autoSubmit, autoFillPassword]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!password.trim()) {
      setError('Veuillez entrer un mot de passe.');
      return;
    }

    setIsLoading(true);
    setError('');

    // Simulate a small delay for better UX
    setTimeout(() => {
      const isAuthenticated = AuthService.authenticate(password, role);

      if (isAuthenticated) {
        toast({
          title: 'Connexion réussie!',
          description: 'Vous êtes maintenant connecté.',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
        onAuthenticated();
      } else {
        setError('Mot de passe incorrect. Veuillez réessayer.');
        setPassword('');
        toast({
          title: 'Erreur de connexion',
          description: 'Mot de passe incorrect.',
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      }

      setIsLoading(false);
    }, 500);
  };

  const getRoleDisplayName = () => {
    switch (role) {
      case AuthService.ROLES.ADMIN:
        return 'Administrateur';
      case AuthService.ROLES.EMPLOYEE:
        return 'Employé';
      default:
        return 'Utilisateur';
    }
  };

  return (
    <Box
      bg='gray.50'
      minH='100vh'
      display='flex'
      alignItems='center'
      justifyContent='center'
    >
      <Container maxW='md'>
        <Card>
          <CardBody>
            <VStack spacing={6} align='stretch'>
              <Box textAlign='center'>
                <Heading size='lg' color='blue.600' mb={2}>
                  {title}
                </Heading>
                <Text color='gray.600' fontSize='sm'>
                  {description}
                </Text>
                <Text color='blue.500' fontSize='sm' fontWeight='medium' mt={2}>
                  Accès: {getRoleDisplayName()}
                </Text>
              </Box>

              {error && (
                <Alert status='error' borderRadius='md'>
                  <AlertIcon />
                  {error}
                </Alert>
              )}

              <form onSubmit={handleSubmit}>
                <VStack spacing={4}>
                  <FormControl isRequired>
                    <FormLabel>Mot de passe</FormLabel>
                    <InputGroup>
                      <Input
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Entrez votre mot de passe'
                        size='lg'
                        isDisabled={isLoading}
                      />
                      <InputRightElement height='100%'>
                        <IconButton
                          variant='ghost'
                          icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                          onClick={() => setShowPassword(!showPassword)}
                          size='sm'
                          isDisabled={isLoading}
                        />
                      </InputRightElement>
                    </InputGroup>
                  </FormControl>

                  <Button
                    type='submit'
                    colorScheme='blue'
                    size='lg'
                    width='full'
                    isLoading={isLoading}
                    loadingText='Vérification...'
                  >
                    Se connecter
                  </Button>
                </VStack>
              </form>

              <Box
                textAlign='center'
                pt={4}
                borderTop='1px'
                borderColor='gray.200'
              >
                <Text fontSize='xs' color='gray.500'>
                  Cette page est protégée par mot de passe pour votre sécurité.
                </Text>
              </Box>
            </VStack>
          </CardBody>
        </Card>
      </Container>
    </Box>
  );
}
