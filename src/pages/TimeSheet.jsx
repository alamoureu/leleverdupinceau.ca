import React, { useState, useRef, useCallback, useEffect } from "react";
import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Select,
  RadioGroup,
  Radio,
  Stack,
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
} from "@chakra-ui/react";
import { LockIcon } from "@chakra-ui/icons";
import Webcam from "react-webcam";
import {
  serverTimestamp,
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../firebase";
import { AuthService } from "../services/authService";
import PasswordProtection from "../components/PasswordProtection";

const EMPLOYEES = [
  "Jean Dupont",
  "Marie Martin",
  "Pierre Durand",
  "Sophie Bernard",
  "Michel Moreau",
  "Catherine Petit",
  "Antoine Roux",
  "Isabelle Simon",
];

const LUNCH_DURATIONS = [
  { value: 15, label: "15 minutes" },
  { value: 20, label: "20 minutes" },
  { value: 30, label: "30 minutes" },
  { value: 45, label: "45 minutes" },
  { value: 60, label: "1 heure" },
];

export default function TimeSheet() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState("");
  const [actionType, setActionType] = useState("clock-in");
  const [lunchDuration, setLunchDuration] = useState("30");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [isCameraActive, setIsCameraActive] = useState(false);

  const webcamRef = useRef(null);
  const toast = useToast();

  useEffect(() => {
    if (AuthService.isAuthenticated(AuthService.ROLES.EMPLOYEE)) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    AuthService.logout(AuthService.ROLES.EMPLOYEE);
    setIsAuthenticated(false);
    toast({
      title: "Déconnexion réussie",
      description: "Vous avez été déconnecté avec succès.",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  const capturePhoto = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    if (imageSrc) {
      fetch(imageSrc)
        .then((res) => res.blob())
        .then((blob) => {
          setPhoto(blob);
          setIsCameraActive(false);
        });
    }
  }, []);

  const retakePhoto = useCallback(() => {
    setPhoto(null);
    setIsCameraActive(true);
  }, []);

  const uploadPhoto = async (photoBlob, employeeName, timestamp, type) => {
    const fileName = `timesheet/${employeeName}/${timestamp}_${type}.jpg`;
    const photoRef = ref(storage, fileName);

    await uploadBytes(photoRef, photoBlob);
    return await getDownloadURL(photoRef);
  };

  const handleSubmit = async () => {
    if (!selectedEmployee) {
      toast({
        title: "Erreur",
        description: "Veuillez sélectionner un employé.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    if (!photo) {
      toast({
        title: "Erreur",
        description: "Veuillez prendre une photo.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const now = new Date();
      const timestamp = now.getTime();
      const dateKey = now.toISOString().split("T")[0];
      const documentId = `${selectedEmployee}_${dateKey}`;

      const photoURL = await uploadPhoto(
        photo,
        selectedEmployee,
        timestamp,
        actionType
      );

      const docRef = doc(db, "timesheets", documentId);
      const docSnap = await getDoc(docRef);

      if (actionType === "clock-in") {
        if (docSnap.exists() && docSnap.data().clockInTime) {
          toast({
            title: "Erreur",
            description: "Vous avez déjà fait votre entrée aujourd'hui.",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
          return;
        }

        const docData = {
          employeeName: selectedEmployee,
          date: dateKey,
          clockInTime: now.toISOString(),
          clockInPhoto: photoURL,
          clockInTimestamp: serverTimestamp(),
          createdAt: serverTimestamp(),

          clockOutTime: null,
          clockOutPhoto: null,
          clockOutTimestamp: null,
          lunchDurationMinutes: null,
          totalWorkedHours: null,
        };

        if (docSnap.exists()) {
          await updateDoc(docRef, docData);
        } else {
          await setDoc(docRef, docData);
        }
      } else {
        if (!docSnap.exists() || !docSnap.data().clockInTime) {
          toast({
            title: "Erreur",
            description: "Vous devez d'abord faire votre entrée.",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
          return;
        }

        if (docSnap.data().clockOutTime) {
          toast({
            title: "Erreur",
            description: "Vous avez déjà fait votre sortie aujourd'hui.",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
          return;
        }

        const existingData = docSnap.data();
        const clockInTime = new Date(existingData.clockInTime);
        const clockOutTime = now;
        const lunchMinutes = parseInt(lunchDuration);

        const totalMinutes = (clockOutTime - clockInTime) / (1000 * 60);
        const workedMinutes = Math.max(0, totalMinutes - lunchMinutes);
        const totalWorkedHours = (workedMinutes / 60).toFixed(2);

        await updateDoc(docRef, {
          clockOutTime: now.toISOString(),
          clockOutPhoto: photoURL,
          clockOutTimestamp: serverTimestamp(),
          lunchDurationMinutes: lunchMinutes,
          totalWorkedHours: parseFloat(totalWorkedHours),
          updatedAt: serverTimestamp(),
        });
      }

      toast({
        title: "Succès!",
        description: `${
          actionType === "clock-in" ? "Entrée" : "Sortie"
        } enregistrée avec succès.`,
        status: "success",
        duration: 5000,
        isClosable: true,
      });

      setSelectedEmployee("");
      setPhoto(null);
      setLunchDuration("30");
      setActionType("clock-in");
      setIsCameraActive(false);
    } catch (error) {
      console.error("Error submitting timesheet:", error);
      toast({
        title: "Erreur",
        description: `Erreur: ${error.message || "Une erreur est survenue"}`,
        status: "error",
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
        title="Feuille de Temps - Employés"
        description="Veuillez entrer le mot de passe employé pour accéder à la feuille de temps."
      />
    );
  }

  return (
    <Box bg="gray.50" minH="100vh" py={8}>
      <Container maxW="container.md">
        <VStack spacing={6} align="stretch">
          <Box textAlign="center" position="relative">
            <Heading size="lg" color="blue.600" mb={2}>
              Feuille de Temps
            </Heading>
            <Text color="gray.600">
              Enregistrez vos heures d'entrée et de sortie
            </Text>

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
          </Box>

          <Card>
            <CardBody>
              <VStack spacing={6} align="stretch">
                <Box>
                  <Text fontWeight="semibold" mb={2}>
                    Sélectionnez votre nom:
                  </Text>
                  <Select
                    placeholder="Choisir un employé..."
                    value={selectedEmployee}
                    onChange={(e) => setSelectedEmployee(e.target.value)}
                    size="lg"
                  >
                    {EMPLOYEES.map((employee) => (
                      <option key={employee} value={employee}>
                        {employee}
                      </option>
                    ))}
                  </Select>
                </Box>

                <Divider />

                <Box>
                  <Text fontWeight="semibold" mb={3}>
                    Type d'action:
                  </Text>
                  <RadioGroup value={actionType} onChange={setActionType}>
                    <Stack direction="row" spacing={8}>
                      <Radio value="clock-in" colorScheme="green" size="lg">
                        <VStack align="start" spacing={0}>
                          <Text fontWeight="medium">Entrée (Clock-In)</Text>
                          <Text fontSize="sm" color="gray.600">
                            Début de journée
                          </Text>
                        </VStack>
                      </Radio>
                      <Radio value="clock-out" colorScheme="red" size="lg">
                        <VStack align="start" spacing={0}>
                          <Text fontWeight="medium">Sortie (Clock-Out)</Text>
                          <Text fontSize="sm" color="gray.600">
                            Fin de journée
                          </Text>
                        </VStack>
                      </Radio>
                    </Stack>
                  </RadioGroup>
                </Box>

                {actionType === "clock-out" && (
                  <>
                    <Divider />
                    <Box>
                      <Text fontWeight="semibold" mb={3}>
                        Durée du lunch:
                      </Text>
                      <RadioGroup
                        value={lunchDuration}
                        onChange={setLunchDuration}
                      >
                        <Stack spacing={2}>
                          {LUNCH_DURATIONS.map((duration) => (
                            <Radio
                              key={duration.value}
                              value={duration.value.toString()}
                            >
                              {duration.label}
                            </Radio>
                          ))}
                        </Stack>
                      </RadioGroup>
                    </Box>
                  </>
                )}

                <Divider />

                <Box>
                  <Text fontWeight="semibold" mb={3}>
                    Photo{" "}
                    {actionType === "clock-in" ? "de présence" : "du chantier"}:
                  </Text>

                  {!isCameraActive && !photo && (
                    <Button
                      onClick={() => setIsCameraActive(true)}
                      colorScheme="blue"
                      size="lg"
                      width="full"
                    >
                      Ouvrir la caméra
                    </Button>
                  )}

                  {isCameraActive && (
                    <VStack spacing={4}>
                      <Box borderRadius="md" overflow="hidden">
                        <Webcam
                          ref={webcamRef}
                          audio={false}
                          screenshotFormat="image/jpeg"
                          videoConstraints={{
                            facingMode: "environment",
                          }}
                          style={{
                            width: "100%",
                            maxWidth: "400px",
                            height: "auto",
                          }}
                        />
                      </Box>
                      <HStack spacing={4}>
                        <Button
                          onClick={capturePhoto}
                          colorScheme="green"
                          size="lg"
                        >
                          Prendre la photo
                        </Button>
                        <Button
                          onClick={() => setIsCameraActive(false)}
                          variant="outline"
                        >
                          Annuler
                        </Button>
                      </HStack>
                    </VStack>
                  )}

                  {photo && !isCameraActive && (
                    <VStack spacing={4}>
                      <Badge colorScheme="green" p={2}>
                        Photo prête ✓
                      </Badge>
                      <Button onClick={retakePhoto} variant="outline">
                        Reprendre la photo
                      </Button>
                    </VStack>
                  )}
                </Box>

                <Divider />

                <Alert status="info" borderRadius="md">
                  <AlertIcon />
                  <Box>
                    <AlertTitle>Heure actuelle:</AlertTitle>
                    <AlertDescription>
                      {new Date().toLocaleString("fr-CA", {
                        timeZone: "America/Montreal",
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                        hour: "2-digit",
                        minute: "2-digit",
                        second: "2-digit",
                      })}
                    </AlertDescription>
                  </Box>
                </Alert>

                <Button
                  onClick={handleSubmit}
                  colorScheme={actionType === "clock-in" ? "green" : "red"}
                  size="lg"
                  isLoading={isSubmitting}
                  loadingText="Enregistrement..."
                  disabled={!selectedEmployee || !photo}
                >
                  {isSubmitting ? (
                    <HStack>
                      <Spinner size="sm" />
                      <Text>Enregistrement...</Text>
                    </HStack>
                  ) : (
                    `Enregistrer ${
                      actionType === "clock-in" ? "l'entrée" : "la sortie"
                    }`
                  )}
                </Button>
              </VStack>
            </CardBody>
          </Card>
        </VStack>
      </Container>
    </Box>
  );
}
