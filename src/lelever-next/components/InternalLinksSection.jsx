import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Flex,
  Link,
  HStack,
  Image,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { columnsForCount, GRID_HOVER_PAD } from '../constants/responsiveGrid';
import { thumbnailForRoute } from '../constants/routeThumbnails';

const DEFAULT_SECTION_PY = { base: 16, md: 20, lg: 24 };

function widthFromColumns(cols, gapPx) {
  if (!cols || cols <= 1) return '100%';
  const gapTotal = gapPx * (cols - 1);
  return `calc((100% - ${gapTotal}px) / ${cols})`;
}

/**
 * Reusable related-links grid.
 * links: [{ title, description, to, image? }]
 * Uses flex-wrap + justify center so leftover cards never look orphaned.
 * Image defaults from ROUTE_THUMBNAIL_BY_PATH when not provided on the link.
 */
export default function InternalLinksSection({
  title,
  links = [],
  sectionBg = 'gray.50',
  sectionPy,
  columns,
  seeLabel = 'Voir',
}) {
  if (!links.length) return null;

  const cols = columns || columnsForCount(links.length);
  const gap = { base: 16, md: 16 }; // matches spacing={4}

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

          <Flex
            wrap="wrap"
            justify="center"
            gap={4}
            w="100%"
            {...GRID_HOVER_PAD}
          >
            {links.map((link) => {
              const image = link.image ?? thumbnailForRoute(link.to);

              return (
                <Link
                  key={link.to}
                  as={RouterLink}
                  to={link.to}
                  _hover={{ textDecoration: 'none' }}
                  display="block"
                  w={{
                    base: widthFromColumns(cols.base ?? 1, gap.base),
                    sm: widthFromColumns(cols.sm ?? cols.md ?? 2, gap.base),
                    md: widthFromColumns(cols.md ?? 2, gap.md),
                    lg: widthFromColumns(cols.lg ?? 3, gap.md),
                  }}
                  maxW={{ lg: cols.lg >= 4 ? '320px' : '380px' }}
                >
                  <Box
                    bg="white"
                    border="1px solid"
                    borderColor="gray.200"
                    borderRadius="xl"
                    overflow="hidden"
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
                    {image && (
                      <Box
                        h={{ base: '140px', md: '160px' }}
                        overflow="hidden"
                        flexShrink={0}
                      >
                        <Image
                          src={image}
                          alt=""
                          w="100%"
                          h="100%"
                          objectFit="cover"
                          objectPosition="center"
                          loading="lazy"
                          decoding="async"
                          htmlWidth={640}
                          htmlHeight={400}
                        />
                      </Box>
                    )}
                    <Stack spacing={3} flex={1} justify="space-between" p={5}>
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
              );
            })}
          </Flex>
        </Stack>
      </Container>
    </Box>
  );
}
