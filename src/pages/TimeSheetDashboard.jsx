import React, { useEffect, useState, useCallback } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Select,
  Input,
  Card,
  CardBody,
  CardHeader,
  Spinner,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Flex,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  SimpleGrid,
  IconButton,
  FormControl,
  FormLabel,
  Textarea,
  useToast,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';
import {
  EditIcon,
  AddIcon,
  CheckIcon,
  TimeIcon,
  CalendarIcon,
  InfoIcon,
  CheckCircleIcon,
  CloseIcon,
} from '@chakra-ui/icons';
import {
  collection,
  query,
  getDocs,
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from 'firebase/firestore';
import { db } from '../firebase';
import { AuthService } from '../services/authService';
import PasswordProtection from '../components/PasswordProtection';
import employeeData from '../data/employees.json';
import {
  calculateTotalWorkedHours,
  calculateTodayTotalHours,
  calculateWeekTotalHours,
  calculateMonthTotalHours,
  getCurrentDateString,
  validateTimesheetAction,
  validateTimeSequence,
  findDuplicateRecords,
} from '../utils/timesheetCalculations';

export default function TimeSheetDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [timesheets, setTimesheets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState(getCurrentDateString());
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [employees, setEmployees] = useState([]);
  const [editingRecord, setEditingRecord] = useState(null);
  const [manualForm, setManualForm] = useState({
    employeeId: '',
    date: '',
    clockInTime: '',
    clockOutTime: '',
    lunchDuration: 30,
    notes: '',
  });

  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isEditOpen,
    onOpen: onEditOpen,
    onClose: onEditClose,
  } = useDisclosure();
  const {
    isOpen: isAddOpen,
    onOpen: onAddOpen,
    onClose: onAddClose,
  } = useDisclosure();

  const toast = useToast();

  const fetchEmployees = useCallback(async () => {
    try {
      // First try to get employees from the employees collection
      const querySnapshot = await getDocs(collection(db, 'employees'));
      const employeeData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      if (employeeData.length > 0) {
        // Filter only active employees for the dropdown
        const activeEmployees = employeeData.filter(
          (emp) => emp.status === 'active'
        );
        setEmployees(activeEmployees);
      } else {
        // If no employees in collection, create them from test data IDs
        const testEmployeeIds = [
          'juan_006',
          'moses_001',
          'anar_004',
          'dany_008',
          'lux_007',
          'pedro_002',
          'italo_005',
          'alex_003',
        ];

        const testEmployees = testEmployeeIds.map((id) => ({
          id: id,
          name: id.replace('_', ' ').replace(/\d+/g, '').trim(), // Convert juan_006 to "juan"
          status: 'active',
        }));

        setEmployees(testEmployees);
      }
    } catch (error) {}
  }, []);

  useEffect(() => {
    if (AuthService.isAuthenticated(AuthService.ROLES.ADMIN)) {
      setIsAuthenticated(true);
      fetchEmployees();
    }
  }, [fetchEmployees]);

  // Mobile detection removed - using responsive design instead

  const fetchTimesheets = useCallback(async () => {
    setLoading(true);
    try {
      let timesheetData = [];

      {
        // Query for the selected date only, then filter in JavaScript
        const q = query(collection(db, 'TimeSheet'));
        const querySnapshot = await getDocs(q);
        const allData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        // Filter for records with clockInTime in JavaScript
        timesheetData = allData.filter((record) => record.clockInTime != null);
      }

      // Check for duplicates and log them
      const duplicates = findDuplicateRecords(timesheetData);
      if (duplicates.length > 0) {
        console.warn('Duplicate records detected:', duplicates);
        toast({
          title: 'Attention',
          description: `${duplicates.length} doublon(s) détecté(s) dans les données.`,
          status: 'warning',
          duration: 5000,
          isClosable: true,
        });
      }

      const sortedData = timesheetData.sort(
        (a, b) => new Date(b.date || 0) - new Date(a.date || 0)
      );
      setTimesheets(sortedData);

      // Extract unique employees from timesheet data, filtering out undefined/null values
      const uniqueEmployeeIds = [
        ...new Set(
          sortedData
            .map((record) => record.employeeId)
            .filter((id) => id != null && id !== undefined && id !== '')
        ),
      ];

      // Fetch employee details for the unique IDs
      const employeeDetails = [];
      for (const employeeId of uniqueEmployeeIds) {
        // Skip if employeeId is invalid
        if (
          !employeeId ||
          employeeId === 'undefined' ||
          employeeId === 'null'
        ) {
          continue;
        }

        try {
          const employeeDoc = await getDoc(doc(db, 'employees', employeeId));
          if (employeeDoc.exists()) {
            employeeDetails.push({ id: employeeDoc.id, ...employeeDoc.data() });
          } else {
            // If employee doesn't exist in employees collection, create a basic entry
            employeeDetails.push({
              id: employeeId,
              name: employeeId.replace('_', ' ').replace(/\d+/g, '').trim(),
              status: 'active',
            });
          }
        } catch (error) {
          // Fallback: create basic entry
          employeeDetails.push({
            id: employeeId,
            name: employeeId.replace('_', ' ').replace(/\d+/g, '').trim(),
            status: 'active',
          });
        }
      }
      setEmployees(employeeDetails);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }, [toast]);

  useEffect(() => {
    if (isAuthenticated) {
      fetchTimesheets();
    }
  }, [isAuthenticated, fetchTimesheets, selectedDate]);

  const openPhotoModal = (photoURL) => {
    setSelectedPhoto(photoURL);
    onOpen();
  };

  const formatTime = (timeString) => {
    if (!timeString) return '-';
    return new Date(timeString).toLocaleTimeString('fr-CA', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getEmployeeStatus = (employeeId, date) => {
    const record = timesheets.find(
      (r) => r.employeeId === employeeId && r.date === date
    );
    if (!record) {
      return { clockedIn: false, clockedOut: false };
    }
    return {
      clockedIn: !!record.clockInTime,
      clockedOut: !!record.clockOutTime,
      record: record,
    };
  };

  const getStatusIcon = (status) => {
    if (status) {
      return <CheckCircleIcon color='green.500' boxSize={4} />;
    }
    return <CloseIcon color='red.500' boxSize={4} />;
  };

  // Employee list component (responsive)
  const EmployeeList = () => {
    const allEmployees = employees.filter((emp) => emp.status === 'active');

    return (
      <Flex
        direction={{ base: 'column', md: 'row' }}
        wrap='wrap'
        gap={{ base: 3, md: 4 }}
        justify={{ base: 'stretch', md: 'start' }}
      >
        {allEmployees.map((employee) => {
          const status = getEmployeeStatus(employee.id, selectedDate);
          return (
            <Card
              key={employee.id}
              w={{
                base: '100%',
                md: 'calc(50% - 8px)',
                lg: 'calc(33.333% - 11px)',
              }}
              shadow='sm'
              size='sm'
            >
              <CardBody p={{ base: 3, md: 4 }}>
                <VStack spacing={3} align='stretch'>
                  {/* Employee Name and Status */}
                  <HStack justify='space-between' align='center'>
                    <VStack align='start' spacing={1}>
                      <Text
                        fontWeight='bold'
                        fontSize={{ base: 'md', md: 'lg' }}
                        color='gray.800'
                      >
                        {employee.name}
                      </Text>
                      <HStack spacing={3}>
                        <HStack spacing={1}>
                          <Text
                            fontSize={{ base: 'xs', md: 'sm' }}
                            color='gray.600'
                          >
                            Entrée:
                          </Text>
                          {getStatusIcon(status.clockedIn)}
                        </HStack>
                        <HStack spacing={1}>
                          <Text
                            fontSize={{ base: 'xs', md: 'sm' }}
                            color='gray.600'
                          >
                            Sortie:
                          </Text>
                          {getStatusIcon(status.clockedOut)}
                        </HStack>
                      </HStack>
                    </VStack>
                  </HStack>

                  {/* Time Information */}
                  {status.record && (
                    <Box bg='gray.50' p={3} borderRadius='md'>
                      <VStack spacing={2} align='stretch'>
                        <VStack spacing={1} align='stretch'>
                          <HStack
                            justify='space-between'
                            fontSize={{ base: 'xs', md: 'sm' }}
                            color='gray.600'
                          >
                            <Text>Entrée:</Text>
                            <Text>{formatTime(status.record.clockInTime)}</Text>
                          </HStack>
                          {status.record.clockOutTime && (
                            <HStack
                              justify='space-between'
                              fontSize={{ base: 'xs', md: 'sm' }}
                              color='gray.600'
                            >
                              <Text>Sortie:</Text>
                              <Text>
                                {formatTime(status.record.clockOutTime)}
                              </Text>
                            </HStack>
                          )}
                        </VStack>
                        {status.record.totalWorkedHours && (
                          <HStack justify='center'>
                            <Text
                              fontWeight='bold'
                              color='green.600'
                              fontSize={{ base: 'sm', md: 'md' }}
                            >
                              Total: {status.record.totalWorkedHours}h
                            </Text>
                          </HStack>
                        )}
                      </VStack>
                    </Box>
                  )}

                  {/* Photo Thumbnails */}
                  {status.record && (
                    <HStack justify='center' spacing={4}>
                      {status.record.clockInPhoto && (
                        <VStack spacing={1}>
                          <Text
                            fontSize='xs'
                            color='gray.600'
                            textAlign='center'
                          >
                            Entrée
                          </Text>
                          <Box
                            w='60px'
                            h='60px'
                            borderRadius='md'
                            overflow='hidden'
                            border='2px'
                            borderColor='green.300'
                            cursor='pointer'
                            onClick={() =>
                              openPhotoModal(status.record.clockInPhoto)
                            }
                          >
                            <Image
                              src={status.record.clockInPhoto}
                              alt="Photo d'entrée"
                              w='100%'
                              h='100%'
                              objectFit='cover'
                              onError={(e) => {
                                e.target.style.display = 'none';
                              }}
                            />
                          </Box>
                        </VStack>
                      )}
                      {status.record.clockOutPhoto && (
                        <VStack spacing={1}>
                          <Text
                            fontSize='xs'
                            color='gray.600'
                            textAlign='center'
                          >
                            Sortie
                          </Text>
                          <Box
                            w='60px'
                            h='60px'
                            borderRadius='md'
                            overflow='hidden'
                            border='2px'
                            borderColor='red.300'
                            cursor='pointer'
                            onClick={() =>
                              openPhotoModal(status.record.clockOutPhoto)
                            }
                          >
                            <Image
                              src={status.record.clockOutPhoto}
                              alt='Photo de sortie'
                              w='100%'
                              h='100%'
                              objectFit='cover'
                              onError={(e) => {
                                e.target.style.display = 'none';
                              }}
                            />
                          </Box>
                        </VStack>
                      )}
                    </HStack>
                  )}

                  {/* Action Buttons */}
                  <HStack spacing={2} justify='space-between' wrap='wrap'>
                    <HStack spacing={1}>
                      {status.record ? (
                        <IconButton
                          size={{ base: 'xs', md: 'sm' }}
                          icon={<EditIcon />}
                          onClick={() => handleEditRecord(status.record)}
                          title='Modifier'
                          colorScheme='blue'
                          variant='outline'
                        />
                      ) : (
                        <IconButton
                          size={{ base: 'xs', md: 'sm' }}
                          colorScheme='green'
                          variant='outline'
                          icon={<AddIcon />}
                          onClick={() => {
                            // Create datetime-local format without timezone conversion
                            const clockInTime = `${selectedDate}T08:00`;
                            const clockOutTime = `${selectedDate}T17:00`;

                            setManualForm({
                              employeeId: employee.id,
                              date: selectedDate,
                              clockInTime: clockInTime,
                              clockOutTime: clockOutTime,
                              lunchDuration: 30,
                              notes: '',
                            });
                            onAddOpen();
                          }}
                          aria-label='Ajouter Entrée'
                        />
                      )}
                    </HStack>
                    <HStack spacing={1}>
                      {status.clockedIn && !status.clockedOut && (
                        <IconButton
                          size={{ base: 'xs', md: 'sm' }}
                          colorScheme='orange'
                          variant='outline'
                          icon={<TimeIcon />}
                          onClick={() => handleManualClockOut(status.record)}
                          aria-label='Sortie Manuelle'
                        />
                      )}
                    </HStack>
                  </HStack>
                </VStack>
              </CardBody>
            </Card>
          );
        })}
      </Flex>
    );
  };

  // Admin functions
  const handleManualClockOut = async (record) => {
    try {
      const now = new Date();
      const clockInTime = new Date(record.clockInTime);
      const lunchMinutes = 30; // Default lunch duration

      const totalWorkedHours = calculateTotalWorkedHours(
        clockInTime,
        now,
        lunchMinutes
      );

      await updateDoc(doc(db, 'TimeSheet', record.id), {
        clockOutTime: now.toISOString(),
        lunchDurationMinutes: lunchMinutes,
        totalWorkedHours: totalWorkedHours,
        adminModified: true,
        adminNotes: "Sortie ajoutée manuellement par l'administrateur",
      });

      toast({
        title: 'Succès',
        description: 'Sortie ajoutée manuellement avec succès.',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });

      fetchTimesheets();
    } catch (error) {
      toast({
        title: 'Erreur',
        description: "Erreur lors de l'ajout de la sortie manuelle.",
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleEditRecord = (record) => {
    setEditingRecord(record);
    onEditOpen();
  };

  const handleSaveEdit = async () => {
    if (!editingRecord) return;

    try {
      const clockInTime = new Date(editingRecord.clockInTime);
      const clockOutTime = editingRecord.clockOutTime
        ? new Date(editingRecord.clockOutTime)
        : null;

      let totalWorkedHours = null;
      if (clockOutTime) {
        totalWorkedHours = calculateTotalWorkedHours(
          clockInTime,
          clockOutTime,
          editingRecord.lunchDuration || 30
        );
      }

      await updateDoc(doc(db, 'TimeSheet', editingRecord.id), {
        ...editingRecord,
        totalWorkedHours,
        adminModified: true,
      });

      toast({
        title: 'Succès',
        description: 'Enregistrement modifié avec succès.',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });

      onEditClose();
      setEditingRecord(null);
      fetchTimesheets();
    } catch (error) {
      toast({
        title: 'Erreur',
        description: 'Erreur lors de la modification.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleSaveManualEntry = async () => {
    try {
      // Check if entry already exists using utility function
      const documentId = `${manualForm.employeeId}_${manualForm.date}`;
      const docRef = doc(db, 'TimeSheet', documentId);
      const docSnap = await getDoc(docRef);
      const existingRecord = docSnap.exists() ? docSnap.data() : null;

      // Validate for duplicates
      const validation = validateTimesheetAction(
        manualForm.employeeId,
        manualForm.date,
        'edit',
        existingRecord
      );
      if (existingRecord && !validation.isValid) {
        toast({
          title: 'Erreur',
          description: 'Une entrée existe déjà pour cet employé à cette date.',
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
        return;
      }

      // Validate required fields
      if (!manualForm.employeeId || !manualForm.date) {
        toast({
          title: 'Erreur',
          description: 'Veuillez sélectionner un employé et une date.',
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
        return;
      }

      // Validate that at least one time is provided
      if (!manualForm.clockInTime && !manualForm.clockOutTime) {
        toast({
          title: 'Erreur',
          description: 'Veuillez saisir au moins une heure (entrée ou sortie).',
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
        return;
      }

      const clockInTime = manualForm.clockInTime
        ? new Date(manualForm.clockInTime)
        : null;
      const clockOutTime = manualForm.clockOutTime
        ? new Date(manualForm.clockOutTime)
        : null;

      // Validate time sequence using utility function
      const timeValidation = validateTimeSequence(clockInTime, clockOutTime);
      if (!timeValidation.isValid) {
        toast({
          title: 'Erreur',
          description: timeValidation.error,
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
        return;
      }

      let totalWorkedHours = null;
      if (clockInTime && clockOutTime) {
        totalWorkedHours = calculateTotalWorkedHours(
          clockInTime,
          clockOutTime,
          manualForm.lunchDuration
        );
      }

      const docData = {
        employeeId: manualForm.employeeId,
        date: manualForm.date,
        clockInTime: clockInTime ? clockInTime.toISOString() : null,
        clockOutTime: clockOutTime ? clockOutTime.toISOString() : null,
        lunchDurationMinutes: manualForm.lunchDuration,
        totalWorkedHours,
        notes: manualForm.notes,
        adminCreated: true,
      };

      await setDoc(docRef, docData);

      toast({
        title: 'Succès',
        description: 'Entrée manuelle créée avec succès.',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });

      onAddClose();
      setManualForm({
        employeeId: '',
        date: '',
        clockInTime: '',
        clockOutTime: '',
        lunchDuration: 30,
        notes: '',
      });
      fetchTimesheets();
    } catch (error) {
      toast({
        title: 'Erreur',
        description: "Erreur lors de la création de l'entrée.",
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  // Calculate statistics based on selected date
  const totalEmployees = employeeData.totalEmployees;
  const selectedDateObj = new Date(selectedDate);

  // Selected date records
  const todaysRecords = timesheets.filter(
    (record) => record.date === selectedDate && record.clockInTime
  );

  // Week calculation for selected date
  const startOfWeek = new Date(selectedDateObj);
  startOfWeek.setDate(selectedDateObj.getDate() - selectedDateObj.getDay());
  startOfWeek.setHours(0, 0, 0, 0);
  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 6);
  endOfWeek.setHours(23, 59, 59, 999);

  // Month calculation for selected date
  const startOfMonth = new Date(
    selectedDateObj.getFullYear(),
    selectedDateObj.getMonth(),
    1
  );
  startOfMonth.setHours(0, 0, 0, 0);
  const endOfMonth = new Date(
    selectedDateObj.getFullYear(),
    selectedDateObj.getMonth() + 1,
    0
  );
  endOfMonth.setHours(23, 59, 59, 999);

  // Filter records for different periods (now handled by utility functions)

  // Calculate total hours using utility functions
  const todayTotalHours = calculateTodayTotalHours(timesheets, selectedDate);
  const weekTotalHours = calculateWeekTotalHours(timesheets);
  const monthTotalHours = calculateMonthTotalHours(timesheets);

  if (!isAuthenticated) {
    return (
      <PasswordProtection
        role={AuthService.ROLES.ADMIN}
        onAuthenticated={() => setIsAuthenticated(true)}
        title='Gestion des Feuilles de Temps - Admin'
        description='Veuillez entrer le mot de passe administrateur pour accéder au tableau de bord.'
      />
    );
  }

  return (
    <Box bg='gray.50' minH='100vh' p={{ base: 1, md: 4 }}>
      <Container maxW='container.xl' px={{ base: 1, md: 4 }}>
        <VStack spacing={{ base: 4, md: 6 }} align='stretch'>
          {/* Header */}
          <Box textAlign='center' mt={4}>
            <Heading size={{ base: 'md', md: 'lg' }} color='blue.600' mb={2}>
              Gestion des Feuilles de Temps
            </Heading>
            <Text color='gray.600' fontSize={{ base: 'sm', md: 'md' }}>
              Tableau de bord administrateur pour consulter les heures des
              employés
            </Text>
          </Box>

          {/* Date Filter - Compact Design */}
          <Box
            bg='blue.50'
            border='1px solid'
            borderColor='blue.200'
            borderRadius='lg'
            p={{ base: 3, md: 4 }}
          >
            <HStack justify='space-between' align='center' wrap='wrap' gap={2}>
              <VStack align='start' spacing={1}>
                <HStack>
                  <CalendarIcon />
                  <Text
                    fontSize={{ base: 'sm', md: 'md' }}
                    fontWeight='semibold'
                    color='blue.700'
                  >
                    Filtre par Date
                  </Text>
                </HStack>
                <Text fontSize={{ base: 'xs', md: 'sm' }} color='blue.600'>
                  Sélectionnez une date
                </Text>
              </VStack>
              <Input
                type='date'
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                size={{ base: 'sm', md: 'md' }}
                maxW={{ base: '150px', md: '200px' }}
                bg='white'
                borderColor='blue.300'
                _focus={{
                  borderColor: 'blue.500',
                  boxShadow: '0 0 0 1px blue.500',
                }}
              />
            </HStack>
          </Box>

          {/* Statistics Cards */}
          <SimpleGrid columns={{ base: 2, md: 4 }} spacing={{ base: 2, md: 4 }}>
            <Card>
              <CardBody p={{ base: 2, md: 4 }}>
                <Stat>
                  <StatLabel fontSize={{ base: 'xs', md: 'sm' }}>
                    <HStack>
                      <TimeIcon />
                      <Text>Heures Jour</Text>
                    </HStack>
                  </StatLabel>
                  <StatNumber fontSize={{ base: 'md', md: 'xl' }}>
                    {todayTotalHours.toFixed(1)}h
                  </StatNumber>
                  <StatHelpText fontSize={{ base: 'xs', md: 'sm' }}>
                    {todaysRecords.length} actifs
                  </StatHelpText>
                </Stat>
              </CardBody>
            </Card>
            <Card>
              <CardBody p={{ base: 2, md: 4 }}>
                <Stat>
                  <StatLabel fontSize={{ base: 'xs', md: 'sm' }}>
                    <HStack>
                      <CalendarIcon />
                      <Text>Heures Semaine</Text>
                    </HStack>
                  </StatLabel>
                  <StatNumber fontSize={{ base: 'md', md: 'xl' }}>
                    {weekTotalHours.toFixed(1)}h
                  </StatNumber>
                  <StatHelpText fontSize={{ base: 'xs', md: 'sm' }}>
                    {startOfWeek.toLocaleDateString('fr-CA', {
                      month: 'short',
                      day: 'numeric',
                    })}{' '}
                    -{' '}
                    {endOfWeek.toLocaleDateString('fr-CA', {
                      day: 'numeric',
                    })}
                  </StatHelpText>
                </Stat>
              </CardBody>
            </Card>
            <Card>
              <CardBody p={{ base: 2, md: 4 }}>
                <Stat>
                  <StatLabel fontSize={{ base: 'xs', md: 'sm' }}>
                    <HStack>
                      <CalendarIcon />
                      <Text>Heures Mois</Text>
                    </HStack>
                  </StatLabel>
                  <StatNumber fontSize={{ base: 'md', md: 'xl' }}>
                    {monthTotalHours.toFixed(1)}h
                  </StatNumber>
                  <StatHelpText fontSize={{ base: 'xs', md: 'sm' }}>
                    {startOfMonth.toLocaleDateString('fr-CA', {
                      month: 'short',
                      year: 'numeric',
                    })}
                  </StatHelpText>
                </Stat>
              </CardBody>
            </Card>
            <Card
              cursor='pointer'
              _hover={{ shadow: 'md', transform: 'translateY(-2px)' }}
              transition='all 0.2s'
              onClick={() => (window.location.href = '/employees')}
            >
              <CardBody p={{ base: 2, md: 4 }}>
                <Stat>
                  <StatLabel fontSize={{ base: 'xs', md: 'sm' }}>
                    <HStack>
                      <InfoIcon />
                      <Text>Employés</Text>
                    </HStack>
                  </StatLabel>
                  <StatNumber fontSize={{ base: 'md', md: 'xl' }}>
                    {totalEmployees}
                  </StatNumber>
                  <StatHelpText fontSize={{ base: 'xs', md: 'sm' }}>
                    Voir employés
                  </StatHelpText>
                </Stat>
              </CardBody>
            </Card>
          </SimpleGrid>

          {/* Daily Summaries Table */}
          <Card>
            <CardHeader p={{ base: 3, md: 4 }}>
              <VStack
                spacing={{ base: 3, md: 0 }}
                align={{ base: 'stretch', md: 'start' }}
              >
                <Heading size={{ base: 'sm', md: 'md' }}>
                  Résumé Quotidien
                </Heading>
              </VStack>
            </CardHeader>
            <CardBody p={{ base: 2, md: 4 }}>
              {loading ? (
                <Flex justify='center' p={8}>
                  <Spinner size='lg' />
                </Flex>
              ) : (
                <EmployeeList />
              )}
            </CardBody>
          </Card>
        </VStack>

        {/* Photo Modal */}
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          size={{ base: 'full', md: 'xl' }}
        >
          <ModalOverlay />
          <ModalContent maxW='90vw' maxH='90vh'>
            <ModalHeader>Photo d'employé</ModalHeader>
            <ModalCloseButton />
            <ModalBody p={4}>
              {selectedPhoto ? (
                <Box>
                  <Image
                    src={selectedPhoto}
                    alt="Photo d'employé"
                    w='100%'
                    h='auto'
                    maxH='70vh'
                    objectFit='contain'
                    borderRadius='md'
                    onError={(e) => {
                      // Handle image load error silently
                    }}
                    fallback={
                      <Box
                        p={8}
                        textAlign='center'
                        bg='gray.100'
                        borderRadius='md'
                      >
                        <Text color='red.500' mb={2} fontSize='lg'>
                          Erreur de chargement de l'image
                        </Text>
                        <Text fontSize='sm' color='gray.600' mb={2}>
                          Type: {typeof selectedPhoto}
                        </Text>
                        <Text fontSize='sm' color='gray.600' mb={2}>
                          Longueur: {selectedPhoto?.length} caractères
                        </Text>
                        <Text fontSize='sm' color='gray.600' mb={2}>
                          Base64:{' '}
                          {selectedPhoto?.startsWith('data:image')
                            ? 'Oui'
                            : 'Non'}
                        </Text>
                        <Text
                          fontSize='xs'
                          color='gray.500'
                          wordBreak='break-all'
                        >
                          {selectedPhoto?.substring(0, 100)}...
                        </Text>
                      </Box>
                    }
                  />
                </Box>
              ) : (
                <Text>Aucune photo sélectionnée</Text>
              )}
            </ModalBody>
            <ModalFooter>
              <IconButton
                onClick={onClose}
                colorScheme='blue'
                icon={<CloseIcon />}
                aria-label='Fermer'
              />
            </ModalFooter>
          </ModalContent>
        </Modal>

        {/* Edit Record Modal */}
        <Modal
          isOpen={isEditOpen}
          onClose={onEditClose}
          size={{ base: 'full', md: 'xl' }}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modifier les Heures (Admin)</ModalHeader>
            <ModalCloseButton />
            <ModalBody p={{ base: 4, md: 6 }}>
              {editingRecord && (
                <VStack spacing={{ base: 3, md: 4 }}>
                  <FormControl>
                    <FormLabel fontSize={{ base: 'sm', md: 'md' }}>
                      Employé
                    </FormLabel>
                    <Input
                      value={editingRecord.employeeId}
                      isReadOnly
                      size={{ base: 'sm', md: 'md' }}
                    />
                  </FormControl>

                  <FormControl>
                    <FormLabel fontSize={{ base: 'sm', md: 'md' }}>
                      Date
                    </FormLabel>
                    <Input
                      value={editingRecord.date}
                      isReadOnly
                      size={{ base: 'sm', md: 'md' }}
                    />
                  </FormControl>

                  <VStack spacing={4} w='100%' align='stretch'>
                    <FormControl>
                      <FormLabel fontSize={{ base: 'sm', md: 'md' }}>
                        Heure d'Entrée
                      </FormLabel>
                      <Input
                        type='datetime-local'
                        size={{ base: 'sm', md: 'md' }}
                        value={
                          editingRecord.clockInTime
                            ? new Date(editingRecord.clockInTime)
                                .toISOString()
                                .slice(0, 16)
                            : ''
                        }
                        onChange={(e) =>
                          setEditingRecord({
                            ...editingRecord,
                            clockInTime: e.target.value
                              ? new Date(e.target.value).toISOString()
                              : null,
                          })
                        }
                      />
                    </FormControl>

                    <FormControl>
                      <FormLabel fontSize={{ base: 'sm', md: 'md' }}>
                        Heure de Sortie
                      </FormLabel>
                      <Input
                        type='datetime-local'
                        size={{ base: 'sm', md: 'md' }}
                        value={
                          editingRecord.clockOutTime
                            ? new Date(editingRecord.clockOutTime)
                                .toISOString()
                                .slice(0, 16)
                            : ''
                        }
                        onChange={(e) =>
                          setEditingRecord({
                            ...editingRecord,
                            clockOutTime: e.target.value
                              ? new Date(e.target.value).toISOString()
                              : null,
                          })
                        }
                      />
                    </FormControl>
                  </VStack>

                  <FormControl>
                    <FormLabel fontSize={{ base: 'sm', md: 'md' }}>
                      Durée du Lunch (minutes)
                    </FormLabel>
                    <NumberInput
                      value={editingRecord.lunchDuration || 30}
                      size={{ base: 'sm', md: 'md' }}
                      onChange={(value) =>
                        setEditingRecord({
                          ...editingRecord,
                          lunchDuration: parseInt(value) || 30,
                        })
                      }
                    >
                      <NumberInputField />
                      <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                      </NumberInputStepper>
                    </NumberInput>
                  </FormControl>

                  <FormControl>
                    <FormLabel fontSize={{ base: 'sm', md: 'md' }}>
                      Notes
                    </FormLabel>
                    <Textarea
                      value={editingRecord.notes || ''}
                      size={{ base: 'sm', md: 'md' }}
                      onChange={(e) =>
                        setEditingRecord({
                          ...editingRecord,
                          notes: e.target.value,
                        })
                      }
                      placeholder='Notes additionnelles...'
                    />
                  </FormControl>
                </VStack>
              )}
            </ModalBody>
            <ModalFooter p={{ base: 3, md: 4 }}>
              <IconButton
                variant='ghost'
                mr={3}
                onClick={onEditClose}
                size={{ base: 'sm', md: 'md' }}
                icon={<CloseIcon />}
                aria-label='Annuler'
              />
              <IconButton
                colorScheme='blue'
                onClick={handleSaveEdit}
                size={{ base: 'sm', md: 'md' }}
                icon={<CheckIcon />}
                aria-label='Sauvegarder'
              />
            </ModalFooter>
          </ModalContent>
        </Modal>

        {/* Add Manual Entry Modal */}
        <Modal
          isOpen={isAddOpen}
          onClose={onAddClose}
          size={{ base: 'full', md: 'xl' }}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Ajouter Entrée Manuelle</ModalHeader>
            <ModalCloseButton />
            <ModalBody p={{ base: 4, md: 6 }}>
              <VStack spacing={{ base: 3, md: 4 }}>
                <FormControl isRequired>
                  <FormLabel fontSize={{ base: 'sm', md: 'md' }}>
                    Employé
                  </FormLabel>
                  <Select
                    placeholder='Sélectionner un employé'
                    value={manualForm.employeeId}
                    size={{ base: 'sm', md: 'md' }}
                    onChange={(e) =>
                      setManualForm({
                        ...manualForm,
                        employeeId: e.target.value,
                      })
                    }
                  >
                    {employees.map((employee) => (
                      <option key={employee.id} value={employee.id}>
                        {employee.name}
                      </option>
                    ))}
                  </Select>
                </FormControl>

                <FormControl isRequired>
                  <FormLabel fontSize={{ base: 'sm', md: 'md' }}>
                    Date
                  </FormLabel>
                  <Input
                    type='date'
                    value={manualForm.date}
                    size={{ base: 'sm', md: 'md' }}
                    isReadOnly
                    bg='gray.50'
                    _readOnly={{ bg: 'gray.50' }}
                  />
                  <Text fontSize='xs' color='gray.500' mt={1}>
                    Date sélectionnée dans le filtre
                  </Text>
                </FormControl>

                <VStack spacing={4} w='100%' align='stretch'>
                  <FormControl>
                    <FormLabel fontSize={{ base: 'sm', md: 'md' }}>
                      Heure d'Entrée
                    </FormLabel>
                    <Input
                      type='datetime-local'
                      value={manualForm.clockInTime}
                      size={{ base: 'sm', md: 'md' }}
                      onChange={(e) =>
                        setManualForm({
                          ...manualForm,
                          clockInTime: e.target.value,
                        })
                      }
                    />
                  </FormControl>

                  <FormControl>
                    <FormLabel fontSize={{ base: 'sm', md: 'md' }}>
                      Heure de Sortie
                    </FormLabel>
                    <Input
                      type='datetime-local'
                      value={manualForm.clockOutTime}
                      size={{ base: 'sm', md: 'md' }}
                      onChange={(e) =>
                        setManualForm({
                          ...manualForm,
                          clockOutTime: e.target.value,
                        })
                      }
                    />
                  </FormControl>
                </VStack>

                <FormControl>
                  <FormLabel fontSize={{ base: 'sm', md: 'md' }}>
                    Durée du Lunch (minutes)
                  </FormLabel>
                  <NumberInput
                    value={manualForm.lunchDuration}
                    size={{ base: 'sm', md: 'md' }}
                    onChange={(value) =>
                      setManualForm({
                        ...manualForm,
                        lunchDuration: parseInt(value) || 30,
                      })
                    }
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </FormControl>

                <FormControl>
                  <FormLabel fontSize={{ base: 'sm', md: 'md' }}>
                    Notes
                  </FormLabel>
                  <Textarea
                    value={manualForm.notes}
                    size={{ base: 'sm', md: 'md' }}
                    onChange={(e) =>
                      setManualForm({
                        ...manualForm,
                        notes: e.target.value,
                      })
                    }
                    placeholder='Notes additionnelles...'
                  />
                </FormControl>
              </VStack>
            </ModalBody>
            <ModalFooter p={{ base: 3, md: 4 }}>
              <IconButton
                variant='ghost'
                mr={3}
                onClick={onAddClose}
                size={{ base: 'sm', md: 'md' }}
                icon={<CloseIcon />}
                aria-label='Annuler'
              />
              <IconButton
                colorScheme='green'
                onClick={handleSaveManualEntry}
                size={{ base: 'sm', md: 'md' }}
                icon={<AddIcon />}
                aria-label='Créer Entrée'
              />
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Container>
    </Box>
  );
}
