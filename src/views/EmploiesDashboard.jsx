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

export default function EmployeesDashboard() {
  const [employees, setEmployees] = useState([]);
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
      const fetchEmployees = async () => {
        const querySnapshot = await getDocs(collection(db, 'Apply'));
        const employeeList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        employeeList.sort((a, b) => b.date.toDate() - a.date.toDate());
        setEmployees(employeeList);
      };

      fetchEmployees();
    }
  }, [isAuthenticated]);

  const filteredEmployees = employees.filter((employee) =>
    Object.values(employee).some((value) =>
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
        Employees Dashboard
      </Heading>
      <Input
        placeholder="Rechercher une demande d'emploi"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        mb={4}
      />
      <List spacing={3}>
        {filteredEmployees.map((employee) => (
          <ListItem
            key={employee.id}
            p={4}
            borderWidth="1px"
            borderRadius="md"
            bg="gray.50"
            shadow="sm"
          >
            <Flex justifyContent="space-between" alignItems="center">
              <Stack spacing={2}>
                <Text>
                  <strong>Name:</strong> {employee.name}
                </Text>
                <Text>
                  <strong>Email:</strong>{' '}
                  <a href={`mailto:${employee.email}`}>{employee.email}</a>
                </Text>
                <Text>
                  <strong>Phone:</strong> {employee.phoneNumber}
                </Text>
                <Text>
                  <strong>Date:</strong>{' '}
                  {employee.date.toDate().toLocaleDateString()}
                </Text>
                <Text>
                  <strong>Message:</strong> {employee.message}
                </Text>
              </Stack>
            </Flex>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
