import React, { useState, useEffect } from 'react';
import {
  Box,
  Input,
  List,
  ListItem,
  Text,
  Heading,
  Stack,
  Flex,
} from '@chakra-ui/react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { PasswordProtection } from './SoumissionDashboard';

export default function ContactsDashboard() {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const storedPassword = localStorage.getItem('leverDuPinceauPassword');
    if (storedPassword === '111tbel') {
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      const fetchContacts = async () => {
        const querySnapshot = await getDocs(collection(db, 'Contact'));
        const contactList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setContacts(contactList);
      };

      fetchContacts();
    }
  }, [isAuthenticated]);

  const filteredContacts = contacts.filter((contact) =>
    Object.values(contact).some((value) =>
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
        Contacts Dashboard
      </Heading>
      <Input
        placeholder="Rechcher une requête de contact"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        mb={4}
      />
      <List spacing={3}>
        {filteredContacts.map((contact) => (
          <ListItem
            key={contact.id}
            p={4}
            borderWidth="1px"
            borderRadius="md"
            bg="gray.50"
            shadow="sm"
          >
            <Flex justifyContent="space-between" alignItems="center">
              <Stack spacing={2}>
                <Text>
                  <strong>Name:</strong> {contact.name}
                </Text>
                <Text>
                  <strong>Email:</strong>{' '}
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </Text>
                <Text>
                  <strong>Phone:</strong> {contact.phoneNumber}
                </Text>
                <Text>
                  <strong>Message:</strong>{' '}
                  {contact.message || 'No message provided'}
                </Text>
              </Stack>
            </Flex>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
