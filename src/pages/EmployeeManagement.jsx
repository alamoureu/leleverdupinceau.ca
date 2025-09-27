import React, { useState, useEffect, useCallback } from 'react';
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
  Button,
  Input,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Card,
  CardBody,
  CardHeader,
  IconButton,
  Switch,
} from '@chakra-ui/react';
import { EditIcon, DeleteIcon, AddIcon } from '@chakra-ui/icons';
import { db } from '../firebase';
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  getDocs,
  doc,
} from 'firebase/firestore';
import { AuthService } from '../services/authService';
import PasswordProtection from '../components/PasswordProtection';

export default function EmployeeManagement() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [newEmployee, setNewEmployee] = useState({ name: '' });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  useEffect(() => {
    if (AuthService.isAuthenticated(AuthService.ROLES.ADMIN)) {
      setIsAuthenticated(true);
    }
  }, []);

  const fetchEmployees = useCallback(async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, 'employees'));
      const employeeData = querySnapshot.docs.map((doc) => ({
        documentId: doc.id,
        ...doc.data(),
      }));
      setEmployees(employeeData);
    } catch (error) {
      console.error('Error fetching employees:', error);
      toast({
        title: 'Erreur',
        description: 'Erreur lors du chargement des employés.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  }, [toast]);

  useEffect(() => {
    if (isAuthenticated) {
      fetchEmployees();
    }
  }, [isAuthenticated, fetchEmployees]);

  const generateUniqueId = async (name) => {
    // Convert name to lowercase, replace spaces with underscores, remove special chars
    const baseId = name
      .toLowerCase()
      .replace(/\s+/g, '_')
      .replace(/[^a-z0-9_]/g, '');

    try {
      // Get all existing employees from database to ensure uniqueness
      const querySnapshot = await getDocs(collection(db, 'employees'));
      const allEmployees = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      // Find the highest number for this base ID
      const existingIds = allEmployees
        .filter((emp) => emp.id.startsWith(baseId))
        .map((emp) => {
          const match = emp.id.match(new RegExp(`${baseId}_(\\d+)$`));
          return match ? parseInt(match[1]) : 0;
        });

      const nextNumber =
        existingIds.length > 0 ? Math.max(...existingIds) + 1 : 1;
      return `${baseId}_${nextNumber.toString().padStart(3, '0')}`;
    } catch (error) {
      console.error('Error generating unique ID:', error);
      // Fallback to timestamp-based ID
      return `${baseId}_${Date.now()}`;
    }
  };

  const handleAddEmployee = async () => {
    if (!newEmployee.name.trim()) {
      toast({
        title: 'Erreur',
        description: "Veuillez entrer le nom de l'employé.",
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    try {
      const uniqueId = await generateUniqueId(newEmployee.name.trim());

      await addDoc(collection(db, 'employees'), {
        name: newEmployee.name.trim(),
        id: uniqueId,
        status: 'active',
        createdAt: new Date(),
      });

      toast({
        title: 'Succès',
        description: 'Employé ajouté avec succès.',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });

      setNewEmployee({ name: '' });
      fetchEmployees();
    } catch (error) {
      console.error('Error adding employee:', error);
      toast({
        title: 'Erreur',
        description: "Erreur lors de l'ajout de l'employé.",
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleEditEmployee = async (employee, updatedData) => {
    try {
      const employeeRef = doc(db, 'employees', employee.documentId);
      await updateDoc(employeeRef, {
        name: updatedData.name,
        updatedAt: new Date(),
      });

      toast({
        title: 'Succès',
        description: 'Employé modifié avec succès.',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });

      fetchEmployees();
    } catch (error) {
      console.error('Error updating employee:', error);
      toast({
        title: 'Erreur',
        description: "Erreur lors de la modification de l'employé.",
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleToggleStatus = async (employee, currentStatus) => {
    try {
      const newStatus = currentStatus === 'active' ? 'inactive' : 'active';

      // Use the documentId field which is the Firestore document ID
      const employeeRef = doc(db, 'employees', employee.documentId);
      await updateDoc(employeeRef, {
        status: newStatus,
        updatedAt: new Date(),
      });

      toast({
        title: 'Succès',
        description: `Employé ${
          newStatus === 'active' ? 'activé' : 'désactivé'
        } avec succès.`,
        status: 'success',
        duration: 3000,
        isClosable: true,
      });

      fetchEmployees();
    } catch (error) {
      console.error('Error toggling employee status:', error);
      toast({
        title: 'Erreur',
        description: 'Erreur lors de la modification du statut.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleDeleteEmployee = async (employee) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cet employé ?')) {
      try {
        await deleteDoc(doc(db, 'employees', employee.documentId));

        toast({
          title: 'Succès',
          description: 'Employé supprimé avec succès.',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });

        fetchEmployees();
      } catch (error) {
        console.error('Error deleting employee:', error);
        toast({
          title: 'Erreur',
          description: "Erreur lors de la suppression de l'employé.",
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      }
    }
  };

  const openEditModal = (employee) => {
    setEditingEmployee(employee);
    onOpen();
  };

  if (!isAuthenticated) {
    return (
      <PasswordProtection
        role={AuthService.ROLES.ADMIN}
        onAuthenticated={() => setIsAuthenticated(true)}
        title='Gestion des Employés'
        description='Veuillez entrer le mot de passe administrateur pour gérer les employés.'
      />
    );
  }

  return (
    <Box bg='gray.50' minH='100vh' py={8}>
      <Container maxW='container.lg'>
        <VStack spacing={6} align='stretch'>
          <Box textAlign='center'>
            <Heading size='lg' color='blue.600' mb={2}>
              Gestion des Employés
            </Heading>
            <Text color='gray.600'>
              Ajoutez, modifiez ou supprimez des employés
            </Text>
          </Box>

          {/* Add Employee Form */}
          <Card>
            <CardHeader>
              <Heading size='md'>Ajouter un Employé</Heading>
            </CardHeader>
            <CardBody>
              <HStack spacing={4}>
                <FormControl flex={1}>
                  <FormLabel>Nom de l'employé</FormLabel>
                  <Input
                    placeholder='Ex: Jean Dupont'
                    value={newEmployee.name}
                    onChange={(e) => setNewEmployee({ name: e.target.value })}
                  />
                  <Text fontSize='xs' color='gray.500' mt={1}>
                    L'ID sera généré automatiquement (ex: jean_dupont_001)
                  </Text>
                </FormControl>
                <Button
                  colorScheme='blue'
                  leftIcon={<AddIcon />}
                  onClick={handleAddEmployee}
                  mt={6}
                  isDisabled={!newEmployee.name.trim()}
                >
                  Ajouter
                </Button>
              </HStack>
            </CardBody>
          </Card>

          {/* Employees List */}
          <Card>
            <CardHeader>
              <Heading size='md'>
                Liste des Employés ({employees.length})
              </Heading>
            </CardHeader>
            <CardBody>
              {loading ? (
                <Text>Chargement...</Text>
              ) : (
                <TableContainer>
                  <Table variant='simple'>
                    <Thead>
                      <Tr>
                        <Th>ID</Th>
                        <Th>Nom</Th>
                        <Th>Statut</Th>
                        <Th>Actions</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {employees.map((employee) => (
                        <Tr key={employee.documentId}>
                          <Td>{employee.id}</Td>
                          <Td>{employee.name}</Td>
                          <Td>
                            <HStack spacing={2}>
                              <Switch
                                isChecked={employee.status === 'active'}
                                onChange={() =>
                                  handleToggleStatus(employee, employee.status)
                                }
                                colorScheme='green'
                                size='sm'
                              />
                              <Text
                                fontSize='sm'
                                color={
                                  employee.status === 'active'
                                    ? 'green.500'
                                    : 'red.500'
                                }
                              >
                                {employee.status === 'active'
                                  ? 'Actif'
                                  : 'Inactif'}
                              </Text>
                            </HStack>
                          </Td>
                          <Td>
                            <HStack spacing={2}>
                              <IconButton
                                size='sm'
                                icon={<EditIcon />}
                                onClick={() => openEditModal(employee)}
                                colorScheme='blue'
                                variant='outline'
                              />
                              <IconButton
                                size='sm'
                                icon={<DeleteIcon />}
                                onClick={() => handleDeleteEmployee(employee)}
                                colorScheme='red'
                                variant='outline'
                              />
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
        </VStack>
      </Container>

      {/* Edit Modal */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modifier l'Employé</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4}>
              <FormControl>
                <FormLabel>Nom</FormLabel>
                <Input
                  value={editingEmployee?.name || ''}
                  onChange={(e) =>
                    setEditingEmployee({
                      ...editingEmployee,
                      name: e.target.value,
                    })
                  }
                />
              </FormControl>
              <FormControl>
                <FormLabel>ID (généré automatiquement)</FormLabel>
                <Input
                  value={editingEmployee?.id || ''}
                  isReadOnly
                  bg='gray.100'
                  color='gray.600'
                />
                <Text fontSize='xs' color='gray.500' mt={1}>
                  L'ID ne peut pas être modifié
                </Text>
              </FormControl>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme='blue'
              onClick={() => {
                handleEditEmployee(editingEmployee, editingEmployee);
                onClose();
              }}
            >
              Sauvegarder
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
