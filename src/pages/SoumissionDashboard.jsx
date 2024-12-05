import React, { useState, useEffect } from 'react';
import {
  Box,
  Input,
  List,
  ListItem,
  Text,
  Heading,
  Stack,
  Tag,
  Flex,
  VStack,
  Button,
  useToast,
  Center,
} from '@chakra-ui/react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

export default function SoumissionDashboard() {
  const [soumissions, setSoumissions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const storedPassword = localStorage.getItem('soumissionPassword');
    if (storedPassword === '111tbel') {
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      const fetchSoumissions = async () => {
        const querySnapshot = await getDocs(collection(db, 'Soumission'));
        const soumissionList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setSoumissions(soumissionList);
      };

      fetchSoumissions();
    }
  }, [isAuthenticated]);

  const filteredSoumissions = soumissions.filter((soumission) =>
    Object.values(soumission).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  if (!isAuthenticated) {
    return (
      <PasswordProtection onPasswordCorrect={() => setIsAuthenticated(true)} />
    );
  }

  return (
    <Box p={4}>
      <Heading mb={4} textAlign="center">
        Soumission Dashboard
      </Heading>
      <Input
        placeholder="Rechercher une soumission"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        mb={4}
      />
      <List spacing={3}>
        {filteredSoumissions.map((soumission) => (
          <ListItem
            key={soumission.id}
            p={4}
            borderWidth="1px"
            borderRadius="md"
            bg="gray.50"
            shadow="sm"
          >
            <Flex justifyContent="space-between" alignItems="center">
              <Stack spacing={2}>
                <Text>
                  <strong>Name</strong> <br />
                  {soumission.name}
                </Text>
                <Text>
                  <strong>Address:</strong> <br />
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      soumission.address
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {soumission.address}
                  </a>
                </Text>
                <Text>
                  <strong>Email:</strong> <br />
                  <a href={`mailto:${soumission.email}`}>{soumission.email}</a>
                </Text>
                <Text>
                  <strong>Phone:</strong> <br />
                  <a href={`tel:${soumission.tel}`}>{soumission.tel}</a>
                </Text>
                <Text>
                  <strong>Besoins</strong> <br />
                  {soumission.besoinPeinture.join(', ')}
                </Text>
                <Text>
                  <strong>Description</strong> {soumission.message}
                </Text>
              </Stack>
              <VStack alignSelf="start" w="100%">
                <Tag size="sm" colorScheme="blue">
                  {soumission.typePeinture}
                </Tag>
                <Text fontSize="sm" fontWeight="semibold">
                  {soumission.date.toDate().toLocaleDateString('en-US', {
                    day: 'numeric',
                    month: 'short',
                  })}
                  ,{' '}
                  {soumission.date.toDate().toLocaleTimeString('en-US', {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </Text>
              </VStack>
            </Flex>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

const PasswordProtection = ({ onPasswordCorrect }) => {
  const [password, setPassword] = useState('');
  const toast = useToast();

  const handlePasswordSubmit = () => {
    const predefinedPassword = '111tbel';
    if (password === predefinedPassword) {
      localStorage.setItem('leverDuPinceauPassword', password);
      onPasswordCorrect();
    } else {
      toast({
        title: 'Incorrect password',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Center p={4} alignSelf="center">
      <VStack>
        <Heading fontSize="30px">Enter password to access</Heading>
        <Stack spacing={4} w="250px">
          <Input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handlePasswordSubmit} colorScheme="blue">
            Submit
          </Button>
        </Stack>
      </VStack>
    </Center>
  );
};
