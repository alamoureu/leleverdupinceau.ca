import React, { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Card,
  CardBody,
  CardHeader,
  Spinner,
  Input,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Badge,
  Button,
  useToast,
  Flex,
  IconButton,
} from '@chakra-ui/react';
import { ArrowBackIcon, TimeIcon, CalendarIcon } from '@chakra-ui/icons';
import { collection, query, getDocs, where } from 'firebase/firestore';
import { db } from '../firebase';
import { AuthService } from '../services/authService';
import PasswordProtection from '../components/PasswordProtection';
import {
  calculateTotalHours,
  formatHoursDisplay,
} from '../utils/timesheetCalculations';

export default function EmployeeDetails() {
  const [searchParams] = useSearchParams();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [timesheets, setTimesheets] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState('');
  const [selectedDate, setSelectedDate] = useState(() => {
    const now = new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(
      2,
      '0'
    )}-${String(now.getDate()).padStart(2, '0')}`;
  });
  const [employees, setEmployees] = useState([]);
  const [dayHours, setDayHours] = useState(0);
  const [weekHours, setWeekHours] = useState(0);
  const [monthHours, setMonthHours] = useState(0);

  const toast = useToast();

  useEffect(() => {
    const checkAuth = () => {
      const isAuth = AuthService.isAuthenticated(AuthService.ROLES.ADMIN);
      setIsAuthenticated(isAuth);
      if (!isAuth) {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const fetchEmployees = useCallback(async () => {
    try {
      const employeesRef = collection(db, 'employees');
      const employeesSnapshot = await getDocs(employeesRef);
      const employeesList = employeesSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setEmployees(employeesList);

      // Check if employee is specified in URL params
      const employeeFromUrl = searchParams.get('employee');
      if (
        employeeFromUrl &&
        employeesList.find((emp) => emp.id === employeeFromUrl)
      ) {
        setSelectedEmployee(employeeFromUrl);
      } else if (employeesList.length > 0 && !selectedEmployee) {
        setSelectedEmployee(employeesList[0].id);
      }
    } catch (error) {
      console.error('Error fetching employees:', error);
      toast({
        title: 'Erreur',
        description: 'Erreur lors du chargement des employés.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  }, [selectedEmployee, searchParams, toast]);

  const fetchTimesheets = useCallback(async () => {
    if (!selectedEmployee) return;

    setLoading(true);
    try {
      const timesheetsRef = collection(db, 'TimeSheet');
      const q = query(
        timesheetsRef,
        where('employeeId', '==', selectedEmployee)
      );

      const querySnapshot = await getDocs(q);
      const timesheetData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      // Sort by date in descending order (most recent first)
      const sortedTimesheetData = timesheetData.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB - dateA; // Descending order
      });

      setTimesheets(sortedTimesheetData);

      // Calculate hours for selected date only
      const selectedDateObj = new Date(selectedDate);

      // Selected day hours
      const dayRecords = sortedTimesheetData.filter((record) => {
        return record.date === selectedDate;
      });

      // Selected week hours (Sunday to Sunday)
      const startOfWeek = new Date(selectedDateObj);
      // getDay() returns 0 for Sunday, 1 for Monday, etc.
      // To get to the start of the week (Sunday), we need to subtract the current day
      // If it's Sunday (0), we don't subtract anything
      // If it's Monday (1), we subtract 1 day to get to Sunday
      // If it's Saturday (6), we subtract 6 days to get to Sunday
      startOfWeek.setDate(selectedDateObj.getDate() - selectedDateObj.getDay());
      startOfWeek.setHours(0, 0, 0, 0);

      const endOfWeek = new Date(startOfWeek);
      endOfWeek.setDate(startOfWeek.getDate() + 6); // Add 6 days to get to Saturday
      endOfWeek.setHours(23, 59, 59, 999);

      const weekRecords = sortedTimesheetData.filter((record) => {
        const recordDate = new Date(record.date);
        return recordDate >= startOfWeek && recordDate <= endOfWeek;
      });

      // Selected month hours
      // Parse the date string properly to avoid timezone issues
      const [year, month, day] = selectedDate.split('-').map(Number);
      const startOfMonth = new Date(year, month - 1, 1);
      const endOfMonth = new Date(year, month, 0);

      const monthRecords = sortedTimesheetData.filter((record) => {
        const recordDate = new Date(record.date);
        return recordDate >= startOfMonth && recordDate <= endOfMonth;
      });

      setDayHours(calculateTotalHours(dayRecords));
      setWeekHours(calculateTotalHours(weekRecords));
      setMonthHours(calculateTotalHours(monthRecords));
    } catch (error) {
      console.error('Error fetching timesheets:', error);
      toast({
        title: 'Erreur',
        description: 'Erreur lors du chargement des données.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  }, [selectedEmployee, selectedDate, toast]);

  useEffect(() => {
    if (isAuthenticated) {
      fetchEmployees();
    }
  }, [isAuthenticated, fetchEmployees]);

  useEffect(() => {
    if (selectedEmployee) {
      fetchTimesheets();
    }
  }, [selectedEmployee, selectedDate, fetchTimesheets]);

  const handleLogout = () => {
    AuthService.logout(AuthService.ROLES.ADMIN);
    setIsAuthenticated(false);
    toast({
      title: 'Déconnexion réussie',
      description: 'Vous avez été déconnecté avec succès.',
      status: 'info',
      duration: 3000,
      isClosable: true,
    });
  };

  const getEmployeeName = (employeeId) => {
    const employee = employees.find((emp) => emp.id === employeeId);
    return employee ? employee.name : employeeId;
  };

  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split('-').map(Number);
    const date = new Date(year, month - 1, day);
    return date.toLocaleDateString('fr-CA', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const formatTime = (timeString) => {
    return new Date(timeString).toLocaleTimeString('fr-CA', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (!isAuthenticated) {
    return <PasswordProtection onAuthenticated={setIsAuthenticated} />;
  }

  if (loading) {
    return (
      <Container maxW='container.xl' py={8}>
        <Flex justify='center' align='center' minH='50vh'>
          <VStack spacing={4}>
            <Spinner size='xl' color='blue.500' />
            <Text>Chargement des données...</Text>
          </VStack>
        </Flex>
      </Container>
    );
  }

  return (
    <Container maxW='container.xl' py={8}>
      <VStack spacing={6} align='stretch'>
        {/* Header */}
        <Flex justify='space-between' align='center' wrap='wrap' gap={4}>
          <HStack spacing={4}>
            <IconButton
              icon={<ArrowBackIcon />}
              onClick={() => window.history.back()}
              variant='outline'
              aria-label='Retour'
            />
            <VStack align='start' spacing={1}>
              <Heading size={{ base: 'md', md: 'lg' }}>
                Détails Employé -{' '}
                {employees.find((emp) => emp.id === selectedEmployee)?.name ||
                  'Chargement...'}
              </Heading>
              <Text color='gray.600' fontSize='sm'>
                Heures travaillées par période
              </Text>
            </VStack>
          </HStack>
          <Button onClick={handleLogout} variant='outline' size='sm'>
            Déconnexion
          </Button>
        </Flex>

        {/* Controls */}
        <Card>
          <CardBody>
            <Box>
              <Text fontWeight='semibold' mb={2}>
                Date de référence:
              </Text>
              <Text fontSize='sm' color='blue.600' mb={2}>
                Affichage du mois:{' '}
                {(() => {
                  const [year, month] = selectedDate.split('-').map(Number);
                  const monthNames = [
                    'janvier',
                    'février',
                    'mars',
                    'avril',
                    'mai',
                    'juin',
                    'juillet',
                    'août',
                    'septembre',
                    'octobre',
                    'novembre',
                    'décembre',
                  ];
                  return `${monthNames[month - 1]} ${year}`;
                })()}
              </Text>
              <Input
                type='date'
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                max={(() => {
                  const now = new Date();
                  return `${now.getFullYear()}-${String(
                    now.getMonth() + 1
                  ).padStart(2, '0')}-${String(now.getDate()).padStart(
                    2,
                    '0'
                  )}`;
                })()}
              />
              <Text fontSize='xs' color='gray.600' mt={1}>
                Sélectionnez une date pour voir les heures de ce jour, semaine
                et mois
              </Text>
            </Box>
          </CardBody>
        </Card>

        {/* Statistics */}
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
          {/* Day */}
          <Card bg='blue.50' borderTop='4px' borderColor='blue.500'>
            <CardBody p={4}>
              <Stat>
                <StatLabel fontSize='sm' color='blue.600'>
                  <HStack>
                    <TimeIcon color='blue.500' />
                    <Text>Jour</Text>
                  </HStack>
                </StatLabel>
                <StatNumber fontSize='xl' color='blue.700'>
                  {formatHoursDisplay(dayHours)}
                </StatNumber>
                <StatHelpText fontSize='xs' color='blue.600'>
                  {(() => {
                    const [year, month, day] = selectedDate
                      .split('-')
                      .map(Number);
                    const date = new Date(year, month - 1, day);
                    return date.toLocaleDateString('fr-CA', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    });
                  })()}
                </StatHelpText>
              </Stat>
            </CardBody>
          </Card>

          {/* Week */}
          <Card bg='green.50' borderTop='4px' borderColor='green.500'>
            <CardBody p={4}>
              <Stat>
                <StatLabel fontSize='sm' color='green.600'>
                  <HStack>
                    <TimeIcon color='green.500' />
                    <Text>Semaine</Text>
                  </HStack>
                </StatLabel>
                <StatNumber fontSize='xl' color='green.700'>
                  {formatHoursDisplay(weekHours)}
                </StatNumber>
                <StatHelpText fontSize='xs' color='green.600'>
                  {(() => {
                    const selectedDateObj = new Date(selectedDate);
                    const startOfWeek = new Date(selectedDateObj);
                    startOfWeek.setDate(
                      selectedDateObj.getDate() - selectedDateObj.getDay()
                    );
                    const endOfWeek = new Date(startOfWeek);
                    endOfWeek.setDate(startOfWeek.getDate() + 6);

                    return `${startOfWeek.toLocaleDateString('fr-CA', {
                      month: 'short',
                      day: 'numeric',
                    })} - ${endOfWeek.toLocaleDateString('fr-CA', {
                      month: 'short',
                      day: 'numeric',
                    })}`;
                  })()}
                </StatHelpText>
              </Stat>
            </CardBody>
          </Card>

          {/* Month */}
          <Card bg='purple.50' borderTop='4px' borderColor='purple.500'>
            <CardBody p={4}>
              <Stat>
                <StatLabel fontSize='sm' color='purple.600'>
                  <HStack>
                    <CalendarIcon color='purple.500' />
                    <Text>Mois</Text>
                  </HStack>
                </StatLabel>
                <StatNumber fontSize='xl' color='purple.700'>
                  {formatHoursDisplay(monthHours)}
                </StatNumber>
                <StatHelpText fontSize='xs' color='purple.600'>
                  {(() => {
                    const [year, month] = selectedDate.split('-').map(Number);
                    const monthNames = [
                      'janvier',
                      'février',
                      'mars',
                      'avril',
                      'mai',
                      'juin',
                      'juillet',
                      'août',
                      'septembre',
                      'octobre',
                      'novembre',
                      'décembre',
                    ];
                    return `${monthNames[month - 1]} ${year}`;
                  })()}
                </StatHelpText>
              </Stat>
            </CardBody>
          </Card>
        </SimpleGrid>

        {/* Timesheet Records */}
        <Card>
          <CardHeader>
            <Heading size='md'>
              Historique des heures - {getEmployeeName(selectedEmployee)}
            </Heading>
          </CardHeader>
          <CardBody>
            {timesheets.filter((record) => {
              // Use string comparison to avoid timezone issues
              const [year, month] = selectedDate.split('-').map(Number);
              const recordYear = parseInt(record.date.split('-')[0]);
              const recordMonth = parseInt(record.date.split('-')[1]);
              return recordYear === year && recordMonth === month;
            }).length === 0 ? (
              <Text textAlign='center' py={8} color='gray.500'>
                Aucun enregistrement trouvé pour le mois de{' '}
                {(() => {
                  const [year, month] = selectedDate.split('-').map(Number);
                  const monthNames = [
                    'janvier',
                    'février',
                    'mars',
                    'avril',
                    'mai',
                    'juin',
                    'juillet',
                    'août',
                    'septembre',
                    'octobre',
                    'novembre',
                    'décembre',
                  ];
                  return `${monthNames[month - 1]} ${year}`;
                })()}
                .
              </Text>
            ) : (
              <Box overflowX='auto'>
                <Table size={{ base: 'sm', md: 'md' }}>
                  <Thead>
                    <Tr>
                      <Th>Date</Th>
                      <Th>Entrée</Th>
                      <Th>Sortie</Th>
                      <Th>Lunch</Th>
                      <Th>Total</Th>
                      <Th>Statut</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {timesheets
                      .filter((record) => {
                        // Use string comparison to avoid timezone issues
                        const [year, month] = selectedDate
                          .split('-')
                          .map(Number);
                        const recordYear = parseInt(record.date.split('-')[0]);
                        const recordMonth = parseInt(record.date.split('-')[1]);
                        return recordYear === year && recordMonth === month;
                      })
                      .map((record) => (
                        <Tr key={record.id}>
                          <Td fontWeight='medium'>{formatDate(record.date)}</Td>
                          <Td>
                            {record.clockInTime
                              ? formatTime(record.clockInTime)
                              : '-'}
                          </Td>
                          <Td>
                            {record.clockOutTime
                              ? formatTime(record.clockOutTime)
                              : '-'}
                          </Td>
                          <Td>
                            {record.lunchDurationMinutes !== null
                              ? `${record.lunchDurationMinutes} min`
                              : '-'}
                          </Td>
                          <Td fontWeight='bold' color='green.600'>
                            {record.totalWorkedHours
                              ? formatHoursDisplay(record.totalWorkedHours)
                              : '-'}
                          </Td>
                          <Td>
                            <Badge
                              colorScheme={
                                record.clockOutTime ? 'green' : 'yellow'
                              }
                              variant='subtle'
                            >
                              {record.clockOutTime ? 'Complet' : 'En cours'}
                            </Badge>
                          </Td>
                        </Tr>
                      ))}
                  </Tbody>
                </Table>
              </Box>
            )}
          </CardBody>
        </Card>
      </VStack>
    </Container>
  );
}
