import React, { useState, useEffect } from 'react';
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
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

const simpleHash = (str, salt) => {
  let hash = 0;
  const combined = str + salt;
  for (let i = 0; i < combined.length; i++) {
    const char = combined.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  return Math.abs(hash).toString(36);
};

const PASSWORD_HASH = simpleHash('111tbel', 'leverDuPinceau_salt_2025');

export default function PasswordProtectedPage({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // PROTECTED: Requires password
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const storedAuth = sessionStorage.getItem('newHomePageAuth');
    if (storedAuth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    const passwordHash = simpleHash(password, 'leverDuPinceau_salt_2025');
    if (passwordHash === PASSWORD_HASH) {
      sessionStorage.setItem('newHomePageAuth', 'true');
      setIsAuthenticated(true);
    } else {
      setError('Mot de passe incorrect. Veuillez réessayer.');
      setPassword('');
    }
  };

  if (isAuthenticated) {
    return <>{children}</>;
  }

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
                  Accès Protégé
                </Heading>
                <Text color='gray.600' fontSize='sm'>
                  Cette page est protégée par mot de passe. Veuillez entrer le
                  mot de passe pour continuer.
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
                      />
                      <InputRightElement height='100%'>
                        <IconButton
                          variant='ghost'
                          icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                          onClick={() => setShowPassword(!showPassword)}
                          size='sm'
                        />
                      </InputRightElement>
                    </InputGroup>
                  </FormControl>

                  <Button
                    type='submit'
                    colorScheme='blue'
                    size='lg'
                    width='full'
                  >
                    Se connecter
                  </Button>
                </VStack>
              </form>
            </VStack>
          </CardBody>
        </Card>
      </Container>
    </Box>
  );
}
