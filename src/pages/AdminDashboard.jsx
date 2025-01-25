import React from 'react';
import { Box, Heading, Text, Stack, Container } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export default function AdminDashboard() {
  const navigate = useNavigate();
  return (
    <Box bg="gray.50" minH="100vh" p={4}>
      <Container maxW="container.md">
        <Stack spacing={2} align="center" textAlign="center">
          <Heading size="lg" color="blue.600">
            Admin Dashboard
          </Heading>
          <Text fontSize="md" color="gray.600">
            Bienvenue au tableau de bord de l'administrateur.
          </Text>
        </Stack>

        <Stack direction="row">
          <Box
            mt={6}
            p={4}
            bg="white"
            borderRadius="md"
            boxShadow="md"
            w="50%"
            cursor="pointer"
            justify="center"
            onClick={() => navigate('/admin/emplois')}
          >
            <Text fontSize="md" textAlign="center" fontWeight="semibold">
              Demandes d'emplois
            </Text>
          </Box>
          <Box
            mt={6}
            p={4}
            bg="white"
            borderRadius="md"
            boxShadow="md"
            w="50%"
            cursor="pointer"
            onClick={() => navigate('/admin/contact')}
          >
            <Text fontSize="md" textAlign="center" fontWeight="semibold">
              Requêtes de contact
            </Text>
          </Box>
        </Stack>
        <Box
          mt={6}
          p={4}
          bg="white"
          borderRadius="md"
          boxShadow="md"
          w="full"
          cursor="pointer"
          onClick={() => navigate('/admin/soumissions')}
        >
          <Text fontSize="md" textAlign="center" fontWeight="semibold">
            Soumissions
          </Text>
        </Box>
      </Container>
    </Box>
  );
}
