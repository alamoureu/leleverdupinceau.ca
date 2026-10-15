import React, { useEffect, useState } from 'react';
import {
  Box,
  Heading,
  Text,
  Stack,
  Container,
  IconButton,
} from '@chakra-ui/react';
import { FaLock as LockIcon } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { AuthService } from './authService';
import PasswordProtection from './PasswordProtection';

const LINKS = [
  { path: '/admin/emplois', label: "Demandes d'emplois" },
  { path: '/admin/contact', label: 'Requêtes de contact' },
  { path: '/admin/soumissions', label: 'Soumissions' },
];

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (AuthService.isAuthenticated(AuthService.ROLES.ADMIN)) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    AuthService.logout(AuthService.ROLES.ADMIN);
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return (
      <PasswordProtection
        role={AuthService.ROLES.ADMIN}
        onAuthenticated={() => setIsAuthenticated(true)}
        title='Tableau de Bord Administrateur'
        description='Veuillez entrer le mot de passe administrateur pour accéder au tableau de bord.'
      />
    );
  }

  return (
    <Box bg='gray.50' minH='100vh' p={4}>
      <Container maxW='container.md'>
        <Stack
          spacing={2}
          align='center'
          textAlign='center'
          position='relative'
        >
          <Heading size='lg' color='blue.600'>
            Admin Dashboard
          </Heading>
          <Text fontSize='md' color='gray.600'>
            Bienvenue au tableau de bord de l'administrateur.
          </Text>

          <Box position='absolute' top={0} right={0}>
            <IconButton
              icon={<LockIcon />}
              onClick={handleLogout}
              variant='ghost'
              colorScheme='red'
              size='sm'
              title='Se déconnecter'
            />
          </Box>
        </Stack>

        <Stack direction={{ base: 'column', sm: 'row' }} spacing={4} mt={6}>
          {LINKS.map(({ path, label }) => (
            <Box
              key={path}
              p={4}
              bg='white'
              borderRadius='md'
              boxShadow='md'
              flex='1'
              cursor='pointer'
              onClick={() => navigate(path)}
            >
              <Text fontSize='md' textAlign='center' fontWeight='semibold'>
                {label}
              </Text>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
