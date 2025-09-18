import React, { useEffect, useState } from "react";
import {
  Box,
  Heading,
  Text,
  Stack,
  Container,
  IconButton,
} from "@chakra-ui/react";
import { LockIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { AuthService } from "../services/authService";
import PasswordProtection from "../components/PasswordProtection";

export default function AdminDashboard() {
  const navigate = useNavigate();

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is already authenticated as admin
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
        title="Tableau de Bord Administrateur"
        description="Veuillez entrer le mot de passe administrateur pour accéder au tableau de bord."
      />
    );
  }

  return (
    <Box bg="gray.50" minH="100vh" p={4}>
      <Container maxW="container.md">
        <Stack
          spacing={2}
          align="center"
          textAlign="center"
          position="relative"
        >
          <Heading size="lg" color="blue.600">
            Admin Dashboard
          </Heading>
          <Text fontSize="md" color="gray.600">
            Bienvenue au tableau de bord de l'administrateur.
          </Text>

          {/* Logout Button */}
          <Box position="absolute" top={0} right={0}>
            <IconButton
              icon={<LockIcon />}
              onClick={handleLogout}
              variant="ghost"
              colorScheme="red"
              size="sm"
              title="Se déconnecter"
            />
          </Box>
        </Stack>

        <Stack direction="row" spacing={4}>
          <Box
            mt={6}
            p={4}
            bg="white"
            borderRadius="md"
            boxShadow="md"
            w="50%"
            cursor="pointer"
            justify="center"
            onClick={() => navigate("/admin/emplois")}
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
            onClick={() => navigate("/admin/contact")}
          >
            <Text fontSize="md" textAlign="center" fontWeight="semibold">
              Requêtes de contact
            </Text>
          </Box>
        </Stack>
        <Stack direction="row" spacing={4}>
          <Box
            mt={6}
            p={4}
            bg="white"
            borderRadius="md"
            boxShadow="md"
            w="50%"
            cursor="pointer"
            onClick={() => navigate("/admin/soumissions")}
          >
            <Text fontSize="md" textAlign="center" fontWeight="semibold">
              Soumissions
            </Text>
          </Box>
          <Box
            mt={6}
            p={4}
            bg="blue.500"
            borderRadius="md"
            boxShadow="md"
            w="50%"
            cursor="pointer"
            onClick={() => navigate("/admin/timesheets")}
            _hover={{ bg: "blue.600" }}
          >
            <Text
              fontSize="md"
              textAlign="center"
              fontWeight="semibold"
              color="white"
            >
              Feuilles de Temps
            </Text>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
