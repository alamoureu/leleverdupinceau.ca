import React, { useState } from 'react';
import { Box, Container, Stack, Button, Text, Image, Heading, Grid, GridItem } from '@chakra-ui/react';

export default function GuaranteeSection({
  onSubmissionOpen,
  badgeSrc,
  badgeAlt = 'Satisfaction 100% garantie',
  ctaText = 'Soumission gratuite',
  ctaSubtitle = 'en moins de 24h',
  title = 'Notre engagement',
  body = "Nous ne quittons pas le chantier tant que vous n’êtes pas 100% satisfait des travaux effectués.",
  mt,
}) {
  const [badgeError, setBadgeError] = useState(false);

  return (
    <Box
      mt={mt}
      pt={{ base: 5, sm: 7, md: 10 }}
      pb={{ base: 3, sm: 4, md: 6 }}
      bg="white"
    >
      <Container maxW="1440px" px={{ base: 4, sm: 5, md: 6, lg: 8, xl: 10, '2xl': 12 }}>
        <Stack spacing={{ base: 2, sm: 3, md: 5 }} align="center">
          <Stack spacing={1} align="center" w="100%">
            <Button
              onClick={onSubmissionOpen}
              bg="brand.500"
              color="white"
              fontSize={{ base: 'lg', sm: 'xl', md: 'xl' }}
              fontWeight="semibold"
              px={{ base: 10, sm: 12, md: 14 }}
              py={{ base: 4, sm: 4, md: 5 }}
              h="auto"
              minH={{ base: '52px', sm: '56px', md: '62px' }}
              borderRadius="full"
              boxShadow="md"
              _hover={{ bg: 'brand.600', boxShadow: 'lg' }}
            >
              {ctaText}
            </Button>
            <Text fontSize={{ base: 'sm', md: 'lg' }} color="gray.600" fontWeight="medium">
              {ctaSubtitle}
            </Text>
          </Stack>

          <Grid
            w="100%"
            maxW="900px"
            templateColumns={{ base: '150px 1fr', sm: '160px 1fr', md: '190px 1fr', lg: '210px 1fr', xl: '220px 1fr' }}
            templateAreas={{
              base: `"badge text"`,
              sm: `"badge text"`,
            }}
            columnGap={{ base: 3, sm: 6, md: 8 }}
            rowGap={{ base: 0, sm: 0 }}
            alignItems="center"
            mt={{ base: 12, sm: 10, md: 12 }}
          >
            <GridItem area="badge">
              <Box
                mx="auto"
                w={{ base: '140px', sm: '160px', md: '190px', lg: '210px', xl: '220px' }}
                h={{ base: '140px', sm: '160px', md: '190px', lg: '210px', xl: '220px' }}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                {!badgeError && badgeSrc ? (
                  <Image
                    src={badgeSrc}
                    alt={badgeAlt}
                    w="100%"
                    h="100%"
                    objectFit="contain"
                    maxW="100%"
                    maxH="100%"
                    loading="lazy"
                    decoding="async"
                    onError={() => setBadgeError(true)}
                  />
                ) : (
                  <Box
                    w="100%"
                    h="100%"
                    borderRadius="full"
                    border="2px solid"
                    borderColor="gray.200"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    textAlign="center"
                    px={4}
                  >
                    <Text fontWeight="bold" color="gray.800">
                      100%<br />
                      Garantie
                    </Text>
                  </Box>
                )}
              </Box>
            </GridItem>

            <GridItem area="text" minW={0}>
              <Stack
                spacing={1.5}
                textAlign="left"
                maxW="none"
                mx={0}
              >
                <Heading as="h3" fontSize={{ base: 'md', sm: 'lg', md: 'xl' }} fontWeight="bold" color="gray.900">
                  {title}
                </Heading>
                <Text color="gray.600" fontSize={{ base: 'sm', md: 'md' }} lineHeight="1.7">
                  {body}
                </Text>
              </Stack>
            </GridItem>
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
}

