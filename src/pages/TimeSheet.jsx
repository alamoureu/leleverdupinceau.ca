import React, { useState, useRef, useCallback, useEffect } from 'react';
import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Select,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Spinner,
  useToast,
  Card,
  CardBody,
  Divider,
  Badge,
  IconButton,
  Image,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';
import { LockIcon } from '@chakra-ui/icons';
import Webcam from 'react-webcam';
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  collection,
  getDocs,
} from 'firebase/firestore';
import { db } from '../firebase';
import { AuthService } from '../services/authService';
import {
  calculateTotalWorkedHours,
  generateDocumentId,
  determineClockStatus,
  validateTimesheetAction,
  validateTimeSequence,
} from '../utils/timesheetCalculations';
import PasswordProtection from '../components/PasswordProtection';

export default function TimeSheet() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState('');
  const [lunchDurationMinutes, setLunchDurationMinutes] = useState(30);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [cameraLoading, setCameraLoading] = useState(false);
  const [currentAction, setCurrentAction] = useState(null);
  const [loadingEmployees, setLoadingEmployees] = useState(false);

  const webcamRef = useRef(null);
  const toast = useToast();

  const fetchEmployees = useCallback(async () => {
    setLoadingEmployees(true);
    try {
      const querySnapshot = await getDocs(collection(db, 'employees'));
      const employeeData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      // Filter only active employees
      const activeEmployees = employeeData.filter(
        (emp) => emp.status === 'active'
      );
      setEmployees(activeEmployees);
    } catch (error) {
      toast({
        title: 'Erreur',
        description: 'Erreur lors du chargement des employés.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setLoadingEmployees(false);
    }
  }, [toast]);

  useEffect(() => {
    if (AuthService.isAuthenticated(AuthService.ROLES.EMPLOYEE)) {
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      fetchEmployees();
    }
  }, [isAuthenticated, fetchEmployees]);

  const checkEmployeeStatus = useCallback(async (employeeId) => {
    try {
      const now = new Date();
      const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(
        2,
        '0'
      )}-${String(now.getDate()).padStart(2, '0')}`;
      // First try the expected document ID format
      const documentId = generateDocumentId(employeeId, today);

      const docRef = doc(db, 'TimeSheet', documentId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        setCurrentAction(determineClockStatus(data));
      } else {
        // If no document with expected ID, search by employeeId and date
        const querySnapshot = await getDocs(collection(db, 'TimeSheet'));
        const matchingDocs = querySnapshot.docs.filter((doc) => {
          const data = doc.data();
          return data.employeeId === employeeId && data.date === today;
        });

        if (matchingDocs.length > 0) {
          const data = matchingDocs[0].data();
          setCurrentAction(determineClockStatus(data));
        } else {
          setCurrentAction('clock-in');
        }
      }
    } catch (error) {
      // Handle error silently
    }
  }, []);

  // Check employee status when employee is selected
  useEffect(() => {
    if (selectedEmployee) {
      checkEmployeeStatus(selectedEmployee);
    }
  }, [selectedEmployee, checkEmployeeStatus]);

  const handleLogout = () => {
    AuthService.logout(AuthService.ROLES.EMPLOYEE);
    setIsAuthenticated(false);
    toast({
      title: 'Déconnexion réussie',
      description: 'Vous avez été déconnecté avec succès.',
      status: 'info',
      duration: 3000,
      isClosable: true,
    });
  };

  const capturePhoto = useCallback(() => {
    try {
      const imageSrc = webcamRef.current.getScreenshot();

      if (imageSrc) {
        setPhotoPreview(imageSrc);

        // Store the data URL directly - no blob conversion needed
        setPhoto(imageSrc);
        setIsCameraActive(false);
      }
    } catch (error) {
      toast({
        title: 'Erreur',
        description: 'Erreur lors de la capture de la photo.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  }, [toast]);

  const retakePhoto = useCallback(() => {
    setPhoto(null);
    setPhotoPreview(null);
    setIsCameraActive(true);
  }, []);

  const uploadPhoto = async (photoDataUrl, employeeId, timestamp, type) => {
    try {
      // Store the data URL directly in Firestore - no CORS issues!
      return photoDataUrl; // Return the data URL as the "URL"
    } catch (error) {
      throw new Error(`Failed to process photo: ${error.message}`);
    }
  };

  const handleSubmit = async () => {
    if (!selectedEmployee) {
      toast({
        title: 'Erreur',
        description: 'Veuillez sélectionner un employé.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    if (!photo) {
      toast({
        title: 'Erreur',
        description: 'Veuillez prendre une photo.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    if (isSubmitting) {
      return; // Prevent multiple submissions
    }

    setIsSubmitting(true);

    try {
      const now = new Date();
      const timestamp = now.getTime();
      const dateKey = `${now.getFullYear()}-${String(
        now.getMonth() + 1
      ).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
      const documentId = generateDocumentId(selectedEmployee, dateKey);

      const photoURL = await uploadPhoto(
        photo,
        selectedEmployee,
        timestamp,
        currentAction
      );

      const docRef = doc(db, 'TimeSheet', documentId);
      const docSnap = await getDoc(docRef);
      const existingRecord = docSnap.exists() ? docSnap.data() : null;

      // Validate action to prevent duplicates
      const validation = validateTimesheetAction(
        selectedEmployee,
        dateKey,
        currentAction,
        existingRecord
      );
      if (!validation.isValid) {
        toast({
          title: 'Erreur',
          description: validation.error,
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
        return;
      }

      if (currentAction === 'clock-in') {
        const docData = {
          employeeId: selectedEmployee,
          date: dateKey,
          clockInTime: now.toISOString(),
          clockInPhoto: photoURL,
          clockOutTime: null,
          clockOutPhoto: null,
          lunchDurationMinutes: null,
          totalWorkedHours: null,
        };

        if (docSnap.exists()) {
          await updateDoc(docRef, docData);
        } else {
          await setDoc(docRef, docData);
        }
      } else if (currentAction === 'clock-out') {
        // Additional validation for clock-out time sequence
        const timeValidation = validateTimeSequence(
          existingRecord?.clockInTime,
          now.toISOString()
        );
        if (!timeValidation.isValid) {
          toast({
            title: 'Erreur',
            description: timeValidation.error,
            status: 'error',
            duration: 5000,
            isClosable: true,
          });
          return;
        }

        const existingData = docSnap.data();
        const clockInTime = new Date(existingData.clockInTime);
        const clockOutTime = now;
        const lunchMinutes = parseInt(lunchDurationMinutes);

        const totalWorkedHours = calculateTotalWorkedHours(
          clockInTime,
          clockOutTime,
          lunchMinutes
        );
        await updateDoc(docRef, {
          clockOutTime: now.toISOString(),
          clockOutPhoto: photoURL,
          lunchDurationMinutes: lunchMinutes,
          totalWorkedHours: totalWorkedHours,
        });
      }

      toast({
        title: 'Succès!',
        description: `${
          currentAction === 'clock-in' ? 'Entrée' : 'Sortie'
        } enregistrée avec succès.`,
        status: 'success',
        duration: 5000,
        isClosable: true,
      });

      // Reset form and check status again
      setPhoto(null);
      setPhotoPreview(null);
      setLunchDurationMinutes(30);
      setIsCameraActive(false);
      await checkEmployeeStatus(selectedEmployee);
    } catch (error) {
      toast({
        title: 'Erreur',
        description: `Erreur: ${error.message || 'Une erreur est survenue'}`,
        status: 'error',
        duration: 7000,
        isClosable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <PasswordProtection
        role={AuthService.ROLES.EMPLOYEE}
        onAuthenticated={() => setIsAuthenticated(true)}
        title='Feuille de Temps - Employés'
        description='Veuillez entrer le mot de passe employé pour accéder à la feuille de temps.'
      />
    );
  }

  if (loadingEmployees) {
    return (
      <Box bg='gray.50' minH='100vh' py={8}>
        <Container maxW='container.md'>
          <VStack spacing={6} align='center'>
            <Spinner size='xl' color='blue.500' />
            <Text fontSize='lg' color='gray.600'>
              Chargement des employés...
            </Text>
          </VStack>
        </Container>
      </Box>
    );
  }

  return (
    <Box bg='gray.50' minH='100vh' py={8}>
      <Container maxW='container.md'>
        <VStack spacing={6} align='stretch'>
          <Box textAlign='center' position='relative'>
            <Heading size='lg' color='blue.600' mb={2}>
              Feuille de Temps
            </Heading>
            <Text color='gray.600'>
              Enregistrez vos heures d'entrée et de sortie
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
          </Box>

          <Card>
            <CardBody>
              <VStack spacing={6} align='stretch'>
                <Box>
                  <Text fontWeight='semibold' mb={2}>
                    Sélectionnez votre nom:
                  </Text>
                  <Select
                    placeholder={
                      employees.length === 0
                        ? 'Aucun employé actif'
                        : 'Choisir un employé...'
                    }
                    value={selectedEmployee}
                    onChange={(e) => setSelectedEmployee(e.target.value)}
                    size='lg'
                    isDisabled={employees.length === 0}
                  >
                    {employees.map((employee) => (
                      <option key={employee.id} value={employee.id}>
                        {employee.name}
                      </option>
                    ))}
                  </Select>
                  {employees.length === 0 && (
                    <Text fontSize='sm' color='red.500' mt={2}>
                      Aucun employé actif trouvé. Contactez l'administrateur.
                    </Text>
                  )}
                </Box>

                {selectedEmployee && currentAction && (
                  <>
                    <Divider />

                    <Alert
                      status={currentAction === 'clock-in' ? 'info' : 'warning'}
                      borderRadius='md'
                    >
                      <AlertIcon />
                      <Box>
                        <AlertTitle>
                          {currentAction === 'clock-in'
                            ? "Prêt pour l'entrée"
                            : 'Prêt pour la sortie'}
                        </AlertTitle>
                        <AlertDescription>
                          {currentAction === 'clock-in'
                            ? 'Prenez une photo de présence pour enregistrer votre entrée.'
                            : 'Prenez une photo du chantier et sélectionnez votre durée de lunch pour enregistrer votre sortie.'}
                        </AlertDescription>
                      </Box>
                    </Alert>

                    {currentAction === 'clock-out' && (
                      <FormControl isRequired>
                        <FormLabel fontWeight='semibold' mb={3}>
                          Durée du lunch (minutes):
                        </FormLabel>
                        <NumberInput
                          value={lunchDurationMinutes}
                          onChange={(valueNumber) =>
                            setLunchDurationMinutes(valueNumber)
                          }
                          defaultValue={30}
                          min={0}
                          max={120}
                        >
                          <NumberInputField />
                          <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                          </NumberInputStepper>
                        </NumberInput>
                        <Text fontSize='sm' color='gray.600' mt={1}>
                          Entrez la durée en minutes (minimum 0)
                        </Text>
                      </FormControl>
                    )}

                    <Divider />

                    <Box>
                      <Text fontWeight='semibold' mb={3}>
                        Photo{' '}
                        {currentAction === 'clock-in'
                          ? 'de présence'
                          : 'du chantier'}
                        :
                      </Text>

                      {!isCameraActive && !photo && (
                        <Button
                          onClick={() => {
                            setCameraLoading(true);
                            setIsCameraActive(true);
                          }}
                          colorScheme='blue'
                          size='lg'
                          width='full'
                          isLoading={cameraLoading}
                          loadingText='Chargement de la caméra...'
                        >
                          Ouvrir la caméra
                        </Button>
                      )}

                      {isCameraActive && (
                        <VStack spacing={4}>
                          <Box
                            borderRadius='md'
                            overflow='hidden'
                            position='relative'
                          >
                            {cameraLoading && (
                              <Box
                                position='absolute'
                                top='0'
                                left='0'
                                right='0'
                                bottom='0'
                                bg='gray.100'
                                display='flex'
                                alignItems='center'
                                justifyContent='center'
                                zIndex={1}
                                minH='300px'
                              >
                                <VStack spacing={3}>
                                  <Spinner size='lg' color='blue.500' />
                                  <Text color='gray.600' fontSize='sm'>
                                    Chargement de la caméra...
                                  </Text>
                                </VStack>
                              </Box>
                            )}
                            <Webcam
                              ref={webcamRef}
                              audio={false}
                              screenshotFormat='image/jpeg'
                              videoConstraints={{
                                facingMode: 'environment',
                              }}
                              onUserMedia={(stream) => {
                                // Webcam started successfully
                                setCameraLoading(false);
                              }}
                              onUserMediaError={(error) => {
                                setCameraLoading(false);
                                toast({
                                  title: 'Erreur Caméra',
                                  description:
                                    "Impossible d'accéder à la caméra. Vérifiez les permissions.",
                                  status: 'error',
                                  duration: 5000,
                                  isClosable: true,
                                });
                                setIsCameraActive(false);
                              }}
                              style={{
                                width: '100%',
                                maxWidth: '400px',
                                height: 'auto',
                              }}
                            />
                          </Box>
                          <HStack spacing={4}>
                            <Button
                              onClick={capturePhoto}
                              colorScheme='green'
                              size='lg'
                            >
                              Prendre la photo
                            </Button>
                            <Button
                              onClick={() => {
                                setIsCameraActive(false);
                                setCameraLoading(false);
                              }}
                              variant='outline'
                            >
                              Annuler
                            </Button>
                          </HStack>
                        </VStack>
                      )}

                      {photo && !isCameraActive && (
                        <VStack spacing={4}>
                          <Badge colorScheme='green' p={2}>
                            Photo prête ✓
                          </Badge>
                          {photoPreview && (
                            <Box
                              borderRadius='md'
                              overflow='hidden'
                              maxW='300px'
                            >
                              <Image
                                src={photoPreview}
                                alt='Photo capturée'
                                w='100%'
                                h='auto'
                                borderRadius='md'
                              />
                            </Box>
                          )}
                          <Button onClick={retakePhoto} variant='outline'>
                            Reprendre la photo
                          </Button>
                        </VStack>
                      )}
                    </Box>

                    <Divider />

                    <Alert status='info' borderRadius='md'>
                      <AlertIcon />
                      <Box>
                        <AlertTitle>Heure actuelle:</AlertTitle>
                        <AlertDescription>
                          {new Date().toLocaleString('fr-CA', {
                            timeZone: 'America/Montreal',
                            year: 'numeric',
                            month: '2-digit',
                            day: '2-digit',
                            hour: '2-digit',
                            minute: '2-digit',
                            second: '2-digit',
                          })}
                        </AlertDescription>
                      </Box>
                    </Alert>

                    <Button
                      onClick={handleSubmit}
                      colorScheme={
                        currentAction === 'clock-in' ? 'green' : 'red'
                      }
                      size='lg'
                      isLoading={isSubmitting}
                      loadingText='Enregistrement...'
                      disabled={!photo}
                    >
                      {isSubmitting ? (
                        <HStack>
                          <Spinner size='sm' />
                          <Text>Enregistrement...</Text>
                        </HStack>
                      ) : (
                        `Enregistrer ${
                          currentAction === 'clock-in'
                            ? "l'entrée"
                            : 'la sortie'
                        }`
                      )}
                    </Button>
                  </>
                )}

                {selectedEmployee && !currentAction && (
                  <Alert status='success' borderRadius='md'>
                    <AlertIcon />
                    <Box>
                      <AlertTitle>Journée complète</AlertTitle>
                      <AlertDescription>
                        Vous avez déjà enregistré votre entrée et sortie pour
                        aujourd'hui.
                      </AlertDescription>
                    </Box>
                  </Alert>
                )}
              </VStack>
            </CardBody>
          </Card>
        </VStack>
      </Container>
    </Box>
  );
}
