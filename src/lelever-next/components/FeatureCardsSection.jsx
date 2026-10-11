import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Flex,
  HStack,
  Icon,
  SimpleGrid,
} from '@chakra-ui/react';
import {
  CENTER_LAST_ODD_MD_SX,
  DESKTOP_THREE_PLUS_TWO_SX,
  GRID_HOVER_PAD,
} from '../constants/responsiveGrid';
import { PAGE_SECTION_PY, TRUST_BANNER_AIR_SPACE } from '../constants/sectionSpacing';

const DEFAULT_SECTION_PY = PAGE_SECTION_PY;

/**
 * Reusable icon-card grid (checkmarks, situations, specialties).
 * items: [{ icon, title, text }]
 * variant: "inline" (icon beside title) | "stacked" (icon above title)
 */
export default function FeatureCardsSection({
  title,
  subtitle,
  items = [],
  variant = 'inline',
  sectionBg = 'white',
  sectionPy,
  sectionPaddingTop,
  sectionPaddingBottom,
  columns,
  cardBg = 'white',
}) {
  if (!items.length) return null;

  const fallbackPy = sectionPy ?? DEFAULT_SECTION_PY;
  const pt = sectionPaddingTop !== undefined ? sectionPaddingTop : fallbackPy;
  const pb = sectionPaddingBottom !== undefined ? sectionPaddingBottom : fallbackPy;

  const isInline = variant === 'inline';
  const colObj =
    typeof columns === 'number'
      ? { base: 1, md: columns }
      : columns || null;
  const mdColCount = colObj?.md ?? colObj?.sm ?? 2;
  const useFiveCardLayout = Boolean(colObj) && items.length === 5;

  const renderCard = (item, i) => {
    const iconBox = (
      <Flex
        w={isInline ? '44px' : '48px'}
        h={isInline ? '44px' : '48px'}
        borderRadius={isInline ? 'lg' : 'xl'}
        bg="brand.50"
        align="center"
        justify="center"
        flexShrink={0}
      >
        <Icon as={item.icon} color="brand.500" boxSize={5} />
      </Flex>
    );

    if (isInline) {
      return (
        <Box
          key={item.title || i}
          bg={cardBg}
          border="1px solid"
          borderColor="gray.200"
          borderRadius="xl"
          p={{ base: 5, md: 6 }}
          boxShadow="0 2px 12px rgba(0,0,0,0.05)"
          _hover={{ borderColor: 'brand.500', boxShadow: 'md' }}
          transition="all 0.2s"
          w={columns ? undefined : { base: '100%', md: 'calc(50% - 10px)', lg: 'calc(33.333% - 14px)' }}
          maxW={columns ? undefined : { lg: '420px' }}
        >
          <HStack spacing={4} mb={3} align="center">
            {iconBox}
            <Text
              fontWeight="bold"
              color="gray.800"
              fontSize={{ base: 'sm', md: 'md' }}
              lineHeight="1.3"
            >
              {item.title}
            </Text>
          </HStack>
          <Text color="gray.600" fontSize={{ base: 'sm', md: 'md' }} lineHeight="1.7">
            {item.text}
          </Text>
        </Box>
      );
    }

    return (
      <Box
        key={item.title || i}
        bg={cardBg}
        border="1px solid"
        borderColor="gray.200"
        borderRadius="xl"
        p={{ base: 6, md: 7 }}
        boxShadow="sm"
        _hover={{ borderColor: 'brand.500', boxShadow: 'md', transform: 'translateY(-2px)' }}
        transition="all 0.2s"
        h="100%"
        w={columns ? undefined : { base: '100%', md: 'calc(50% - 12px)', lg: 'calc(33.333% - 16px)' }}
        maxW={columns ? undefined : { lg: '420px' }}
      >
        <Stack spacing={4}>
          {iconBox}
          <Heading
            as="h3"
            fontSize={{ base: 'md', md: 'lg' }}
            fontWeight="700"
            color="gray.800"
            lineHeight="1.3"
          >
            {item.title}
          </Heading>
          <Text color="gray.600" fontSize={{ base: 'sm', md: 'md' }} lineHeight="1.7">
            {item.text}
          </Text>
        </Stack>
      </Box>
    );
  };

  return (
    <Box pt={pt} pb={pb} bg={sectionBg}>
      <Container maxW="1440px" px={{ base: 4, md: 6 }}>
        <Stack spacing={TRUST_BANNER_AIR_SPACE}>
          {(title || subtitle) && (
            <Stack
              spacing={{ base: 2, md: 3 }}
              textAlign="center"
              maxW={{ base: '100%', md: '960px', lg: '1100px' }}
              mx="auto"
            >
              {title && (
                <Heading
                  as="h2"
                  fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                  fontWeight="bold"
                  color="gray.800"
                >
                  {title}
                </Heading>
              )}
              {subtitle && (
                <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" lineHeight="1.7">
                  {subtitle}
                </Text>
              )}
            </Stack>
          )}

          {colObj ? (
            <SimpleGrid
              columns={
                useFiveCardLayout
                  ? {
                      base: colObj.base ?? 1,
                      ...(colObj.sm != null ? { sm: colObj.sm } : {}),
                      md: 2,
                      lg: 6,
                    }
                  : colObj
              }
              spacing={5}
              {...GRID_HOVER_PAD}
              sx={{
                ...(mdColCount === 2 || useFiveCardLayout
                  ? CENTER_LAST_ODD_MD_SX
                  : {}),
                ...(useFiveCardLayout ? DESKTOP_THREE_PLUS_TWO_SX : {}),
              }}
            >
              {items.map(renderCard)}
            </SimpleGrid>
          ) : (
            <Flex
              wrap="wrap"
              justify="center"
              gap={isInline ? 5 : 6}
              {...GRID_HOVER_PAD}
            >
              {items.map(renderCard)}
            </Flex>
          )}
        </Stack>
      </Container>
    </Box>
  );
}
