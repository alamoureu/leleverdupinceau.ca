import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Badge,
  Button,
  Select,
  Input,
  Card,
  CardBody,
  CardHeader,
  Spinner,
  Alert,
  AlertIcon,
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
} from "@chakra-ui/react";
import { ViewIcon } from "@chakra-ui/icons";
import {
  collection,
  query,
  getDocs,
  where,
  doc,
  getDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { AuthService } from "../services/authService";
import PasswordProtection from "../components/PasswordProtection";

export default function TimeSheetDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [timesheets, setTimesheets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedEmployee, setSelectedEmployee] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [employees, setEmployees] = useState([]);

  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (AuthService.isAuthenticated(AuthService.ROLES.ADMIN)) {
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      fetchTimesheets();
    }
  }, [isAuthenticated, selectedEmployee, selectedDate]);

  const fetchTimesheets = async () => {
    setLoading(true);
    try {
      let timesheetData = [];

      if (selectedEmployee && selectedDate) {
        const documentId = `${selectedEmployee}_${selectedDate}`;
        const docRef = doc(db, "timesheets", documentId);
        const docSnap = await getDoc(docRef);

        timesheetData = docSnap.exists()
          ? [{ id: docSnap.id, ...docSnap.data() }]
          : [];
      } else if (selectedEmployee) {
        const q = query(
          collection(db, "timesheets"),
          where("employeeName", "==", selectedEmployee)
        );
        const querySnapshot = await getDocs(q);
        timesheetData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
      } else if (selectedDate) {
        const querySnapshot = await getDocs(collection(db, "timesheets"));
        const allData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        timesheetData = allData.filter((item) => item.date === selectedDate);
      } else {
        const querySnapshot = await getDocs(collection(db, "timesheets"));
        timesheetData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
      }

      const allQuerySnapshot = await getDocs(collection(db, "timesheets"));
      const allData = allQuerySnapshot.docs.map((doc) => doc.data());
      const uniqueEmployees = [
        ...new Set(allData.map((ts) => ts.employeeName)),
      ];
      setEmployees(uniqueEmployees);

      const sortedData = timesheetData.sort(
        (a, b) => new Date(b.date || 0) - new Date(a.date || 0)
      );
      setTimesheets(sortedData);
    } catch (error) {
      console.error("Error fetching timesheets:", error);
    } finally {
      setLoading(false);
    }
  };

  const openPhotoModal = (photoURL) => {
    setSelectedPhoto(photoURL);
    onOpen();
  };

  const formatTime = (timeString) => {
    if (!timeString) return "-";
    return new Date(timeString).toLocaleTimeString("fr-CA", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const formatDate = (dateString) => {
    if (!dateString) return "-";
    return new Date(dateString).toLocaleDateString("fr-CA", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getStatusBadge = (record) => {
    if (record.clockInTime && record.clockOutTime) {
      return <Badge colorScheme="green">Complet</Badge>;
    } else if (record.clockInTime && !record.clockOutTime) {
      return <Badge colorScheme="yellow">En cours</Badge>;
    } else {
      return <Badge colorScheme="red">Incomplet</Badge>;
    }
  };

  // Calculate statistics
  const totalEmployees = employees.length;
  const today = new Date().toISOString().split("T")[0];
  const todaysRecords = timesheets.filter((record) => record.date === today);
  const todayActiveEmployees = todaysRecords.filter(
    (record) => record.clockInTime
  ).length;
  const todayCompletedShifts = todaysRecords.filter(
    (record) => record.clockInTime && record.clockOutTime
  ).length;

  if (!isAuthenticated) {
    return (
      <PasswordProtection
        role={AuthService.ROLES.ADMIN}
        onAuthenticated={() => setIsAuthenticated(true)}
        title="Gestion des Feuilles de Temps - Admin"
        description="Veuillez entrer le mot de passe administrateur pour accéder au tableau de bord."
      />
    );
  }

  return (
    <Box bg="gray.50" minH="100vh" p={4}>
      <Container maxW="container.xl">
        <VStack spacing={6} align="stretch">
          {/* Header */}
          <Box textAlign="center">
            <Heading size="lg" color="blue.600" mb={2}>
              Gestion des Feuilles de Temps
            </Heading>
            <Text color="gray.600">
              Tableau de bord administrateur pour consulter les heures des
              employés
            </Text>
          </Box>

          {/* Statistics Cards */}
          <SimpleGrid columns={{ base: 1, md: 4 }} spacing={4}>
            <Card>
              <CardBody>
                <Stat>
                  <StatLabel>Employés Total</StatLabel>
                  <StatNumber>{totalEmployees}</StatNumber>
                  <StatHelpText>Employés enregistrés</StatHelpText>
                </Stat>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <Stat>
                  <StatLabel>Aujourd'hui - Actifs</StatLabel>
                  <StatNumber>{todayActiveEmployees}</StatNumber>
                  <StatHelpText>Employés présents</StatHelpText>
                </Stat>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <Stat>
                  <StatLabel>Aujourd'hui - Terminés</StatLabel>
                  <StatNumber>{todayCompletedShifts}</StatNumber>
                  <StatHelpText>Journées complètes</StatHelpText>
                </Stat>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <Stat>
                  <StatLabel>Total Enregistrements</StatLabel>
                  <StatNumber>{timesheets.length}</StatNumber>
                  <StatHelpText>Clock-in/out total</StatHelpText>
                </Stat>
              </CardBody>
            </Card>
          </SimpleGrid>

          {/* Filters */}
          <Card>
            <CardHeader>
              <Heading size="md">Filtres</Heading>
            </CardHeader>
            <CardBody>
              <HStack spacing={4} wrap="wrap">
                <Box minW="200px">
                  <Text mb={2} fontSize="sm" fontWeight="medium">
                    Employé:
                  </Text>
                  <Select
                    placeholder="Tous les employés"
                    value={selectedEmployee}
                    onChange={(e) => setSelectedEmployee(e.target.value)}
                  >
                    {employees.map((employee) => (
                      <option key={employee} value={employee}>
                        {employee}
                      </option>
                    ))}
                  </Select>
                </Box>
                <Box minW="200px">
                  <Text mb={2} fontSize="sm" fontWeight="medium">
                    Date:
                  </Text>
                  <Input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                  />
                </Box>
                <Box>
                  <Text mb={2} fontSize="sm" fontWeight="medium" opacity={0}>
                    Actions:
                  </Text>
                  <Button
                    onClick={() => {
                      setSelectedEmployee("");
                      setSelectedDate("");
                    }}
                    variant="outline"
                  >
                    Réinitialiser
                  </Button>
                </Box>
              </HStack>
            </CardBody>
          </Card>

          {/* Daily Summaries Table */}
          <Card>
            <CardHeader>
              <Heading size="md">Résumé Quotidien</Heading>
            </CardHeader>
            <CardBody>
              {loading ? (
                <Flex justify="center" p={8}>
                  <Spinner size="lg" />
                </Flex>
              ) : timesheets.length === 0 ? (
                <Alert status="info">
                  <AlertIcon />
                  Aucune donnée trouvée pour les critères sélectionnés.
                </Alert>
              ) : (
                <TableContainer>
                  <Table variant="simple" size="sm">
                    <Thead>
                      <Tr>
                        <Th>Employé</Th>
                        <Th>Date</Th>
                        <Th>Entrée</Th>
                        <Th>Sortie</Th>
                        <Th>Lunch (min)</Th>
                        <Th>Heures Travaillées</Th>
                        <Th>Statut</Th>
                        <Th>Photos</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {timesheets.map((record) => (
                        <Tr key={record.id}>
                          <Td fontWeight="medium">{record.employeeName}</Td>
                          <Td>{formatDate(record.date)}</Td>
                          <Td>{formatTime(record.clockInTime)}</Td>
                          <Td>{formatTime(record.clockOutTime)}</Td>
                          <Td>{record.lunchDurationMinutes || "-"}</Td>
                          <Td>
                            <Text
                              fontWeight="bold"
                              color={
                                record.totalWorkedHours
                                  ? "green.600"
                                  : "gray.500"
                              }
                            >
                              {record.totalWorkedHours
                                ? `${record.totalWorkedHours}h`
                                : "-"}
                            </Text>
                          </Td>
                          <Td>{getStatusBadge(record)}</Td>
                          <Td>
                            <HStack spacing={2}>
                              {record.clockInPhoto && (
                                <IconButton
                                  size="sm"
                                  icon={<ViewIcon />}
                                  onClick={() =>
                                    openPhotoModal(record.clockInPhoto)
                                  }
                                  title="Photo d'entrée"
                                  colorScheme="green"
                                  variant="outline"
                                />
                              )}
                              {record.clockOutPhoto && (
                                <IconButton
                                  size="sm"
                                  icon={<ViewIcon />}
                                  onClick={() =>
                                    openPhotoModal(record.clockOutPhoto)
                                  }
                                  title="Photo de sortie"
                                  colorScheme="red"
                                  variant="outline"
                                />
                              )}
                            </HStack>
                          </Td>
                        </Tr>
                      ))}
                    </Tbody>
                  </Table>
                </TableContainer>
              )}
            </CardBody>
          </Card>

          {/* Raw Records Table */}
          <Card>
            <CardHeader>
              <Heading size="md">Enregistrements Détaillés</Heading>
            </CardHeader>
            <CardBody>
              {loading ? (
                <Flex justify="center" p={8}>
                  <Spinner size="lg" />
                </Flex>
              ) : timesheets.length === 0 ? (
                <Alert status="info">
                  <AlertIcon />
                  Aucun enregistrement trouvé.
                </Alert>
              ) : (
                <TableContainer>
                  <Table variant="simple" size="sm">
                    <Thead>
                      <Tr>
                        <Th>Employé</Th>
                        <Th>Type</Th>
                        <Th>Date & Heure</Th>
                        <Th>Lunch (min)</Th>
                        <Th>Photo</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {timesheets.map((record) => (
                        <Tr key={record.id}>
                          <Td fontWeight="medium">{record.employeeName}</Td>
                          <Td>
                            <Badge
                              colorScheme={
                                record.type === "clock-in" ? "green" : "red"
                              }
                            >
                              {record.type === "clock-in" ? "Entrée" : "Sortie"}
                            </Badge>
                          </Td>
                          <Td>
                            {new Date(record.localTimestamp).toLocaleString(
                              "fr-CA",
                              {
                                timeZone: "America/Montreal",
                              }
                            )}
                          </Td>
                          <Td>{record.lunchDurationMinutes || "-"}</Td>
                          <Td>
                            <IconButton
                              size="sm"
                              icon={<ViewIcon />}
                              onClick={() => openPhotoModal(record.photoURL)}
                              title="Voir la photo"
                              variant="outline"
                            />
                          </Td>
                        </Tr>
                      ))}
                    </Tbody>
                  </Table>
                </TableContainer>
              )}
            </CardBody>
          </Card>
        </VStack>

        {/* Photo Modal */}
        <Modal isOpen={isOpen} onClose={onClose} size="xl">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Photo</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {selectedPhoto && (
                <Image
                  src={selectedPhoto}
                  alt="Photo d'employé"
                  w="100%"
                  borderRadius="md"
                />
              )}
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Fermer</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Container>
    </Box>
  );
}
