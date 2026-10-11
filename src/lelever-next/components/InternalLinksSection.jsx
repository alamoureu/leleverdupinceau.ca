import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  Link,
  HStack,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

const DEFAULT_SECTION_PY = { base: 16, md: 20, lg: 24 };

/**
 * Reusable related-links grid.
 * links: [{ title, description, to }]
 */
export default function InternalLinksSection({
  title,
  links = [],
  sectionBg = 'gray.50',
  sectionPy,
  columns = { base: 1, sm: 2, md: 3, lg: 4 },
  seeLabel = 'Voir',
}) {
  if (!links.length) return null;

  return (
    <Box py={sectionPy ?? DEFAULT_SECTION_PY} bg={sectionBg}>
      <Container maxW="1440px" px={{ base: 4, md: 6 }}>
        <Stack spacing={{ base: 8, md: 12 }}>
          {title && (
            <Heading
              as="h2"
              fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
              fontWeight="bold"
              color="gray.800"
              textAlign="center"
            >
              {title}
            </Heading>
          )}

          <SimpleGrid columns={columns} spacing={4}>
            {links.map((link) => (
              <Link
                key={link.to}
                as={RouterLink}
                to={link.to}
                _hover={{ textDecoration: 'none' }}
              >
                <Box
                  bg="white"
                  border="1px solid"
                  borderColor="gray.200"
                  borderRadius="xl"
                  p={5}
                  h="100%"
                  display="flex"
                  flexDirection="column"
                  _hover={{
                    borderColor: 'brand.500',
                    transform: 'translateY(-2px)',
                    boxShadow: 'md',
                  }}
                  transition="all 0.2s"
                >
                  <Stack spacing={3} flex={1} justify="space-between">
                    <Text
                      fontWeight="600"
                      color="gray.800"
                      fontSize={{ base: 'sm', md: 'md' }}
                      lineHeight="1.3"
                    >
                      {link.title}
                    </Text>
                    {link.description && (
                      <Text color="gray.500" fontSize="sm" lineHeight="1.6">
                        {link.description}
                      </Text>
                    )}
                    <HStack spacing={1} color="brand.500">
                      <Text fontSize="sm" fontWeight="medium">
                        {seeLabel}
                      </Text>
                      <ArrowForwardIcon boxSize={3} />
                    </HStack>
                  </Stack>
                </Box>
              </Link>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
}
