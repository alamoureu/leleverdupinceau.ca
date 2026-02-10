import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Checkbox,
  Textarea,
  Link,
  HStack,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { AUDIT_PAGES } from '../data/auditPages';

const STORAGE_KEY = 'lelever-image-audit';
const NOTES_KEY = 'lelever-image-audit-notes';
const DEBOUNCE_MS = 300;

function loadSaved() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const notesRaw = localStorage.getItem(NOTES_KEY);
    return {
      checked: raw ? JSON.parse(raw) : {},
      notes: notesRaw ? JSON.parse(notesRaw) : {},
    };
  } catch {
    return { checked: {}, notes: {} };
  }
}

function saveChecked(checked) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(checked));
  } catch (e) {
    console.warn('Audit save failed', e);
  }
}

function saveNotes(notes) {
  try {
    localStorage.setItem(NOTES_KEY, JSON.stringify(notes));
  } catch (e) {
    console.warn('Audit notes save failed', e);
  }
}

export default function AuditImagesPage() {
  const [checked, setChecked] = useState({});
  const [notesInput, setNotesInput] = useState({});
  const debounceRef = useRef(null);
  const notesInputRef = useRef({});

  useEffect(() => {
    const { checked: c, notes: n } = loadSaved();
    setChecked(c);
    setNotesInput(n);
  }, []);

  useEffect(() => {
    notesInputRef.current = notesInput;
  }, [notesInput]);

  useEffect(() => {
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, []);

  const handleCheck = useCallback((path, value) => {
    setChecked((prev) => {
      const next = { ...prev, [path]: value };
      saveChecked(next);
      return next;
    });
  }, []);

  const handleNoteChange = useCallback((path, value) => {
    setNotesInput((prev) => ({ ...prev, [path]: value }));
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      saveNotes({ ...notesInputRef.current, [path]: value });
      debounceRef.current = null;
    }, DEBOUNCE_MS);
  }, []);

  const doneCount = AUDIT_PAGES.filter(([path]) => checked[path]).length;

  return (
    <Box w="100%" bg="white" minH="60vh" py={{ base: 8, md: 12 }}>
      <Container maxW="1200px" px={{ base: 4, md: 6 }}>
        <Stack spacing={6}>
          <HStack spacing={2} fontSize="sm" color="gray.600">
            <Link as={RouterLink} to="/" _hover={{ textDecoration: 'underline' }}>
              Accueil
            </Link>
            <Text>›</Text>
            <Text fontWeight="medium" color="gray.800">
              Audit des images
            </Text>
          </HStack>

          <Heading as="h1" size="lg" color="gray.800">
            Audit des images – toutes les pages
          </Heading>

          <Text color="gray.600" fontSize="md">
            Ouvrez chaque page, vérifiez que les images correspondent et ont du sens, cochez « Images OK » et ajoutez un commentaire si besoin. Tout est enregistré automatiquement dans ce navigateur.
          </Text>

          <Text fontWeight="medium" color="gray.700">
            Progression : {doneCount} / {AUDIT_PAGES.length} cochées
          </Text>

          <Box overflowX="auto">
            <Table size="sm" variant="simple">
              <Thead>
                <Tr bg="gray.800">
                  <Th color="white" w="40px">#</Th>
                  <Th color="white">Page</Th>
                  <Th color="white">URL</Th>
                  <Th color="white" w="100px">Ouvrir</Th>
                  <Th color="white" w="100px">Images OK</Th>
                  <Th color="white" minW="180px">Commentaire</Th>
                </Tr>
              </Thead>
              <Tbody>
                {AUDIT_PAGES.map(([path, label], i) => (
                  <Tr
                    key={path}
                    bg={checked[path] ? 'green.50' : undefined}
                    _hover={{ bg: checked[path] ? 'green.50' : 'gray.50' }}
                  >
                    <Td color="gray.500">{i + 1}</Td>
                    <Td fontWeight="500">{label}</Td>
                    <Td>
                      <Text as="code" fontSize="xs" bg="gray.100" px={1} py={0.5} borderRadius="md">
                        {path}
                      </Text>
                    </Td>
                    <Td>
                      <Link
                        href={path}
                        target="_blank"
                        rel="noopener noreferrer"
                        color="blue.600"
                        fontSize="sm"
                      >
                        Ouvrir <ExternalLinkIcon mx="2px" />
                      </Link>
                    </Td>
                    <Td>
                      <Checkbox
                        isChecked={!!checked[path]}
                        onChange={(e) => handleCheck(path, e.target.checked)}
                        colorScheme="green"
                      >
                        OK
                      </Checkbox>
                    </Td>
                    <Td>
                      <Textarea
                        placeholder="Commentaire..."
                        value={notesInput[path] ?? ''}
                        onChange={(e) => handleNoteChange(path, e.target.value)}
                        minH="80px"
                        minW="220px"
                        w="100%"
                        maxW="320px"
                        size="sm"
                        resize="vertical"
                        borderColor="gray.200"
                        _focus={{ borderColor: 'blue.400', boxShadow: '0 0 0 1px var(--chakra-colors-blue-400)' }}
                      />
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
