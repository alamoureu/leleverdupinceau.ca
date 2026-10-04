import React from 'react';
import { Box, Container, Stack, Heading, Text, Image, Button } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { useTranslation } from '../i18n';
import satisfactionBadgeFr from '../images/satisfaction_fr.webp';
import satisfactionBadgeEn from '../images/satisfaction_en.webp';

export default function ServiceGuaranteeSection({
  title = 'Satisfaction 100% garantie',
  body,
  onCtaClick,
  ctaText,
  note,
}) {
  const { t, currentLang } = useTranslation();

  return (
    <Box py={{ base: 16, md: 20, lg: 24 }} bg="gray.50">
      <Container maxW="900px" px={{ base: 4, md: 6 }} textAlign="center">
        <Stack spacing={6} align="center">
          <Image
            src={currentLang === 'en' ? satisfactionBadgeEn : satisfactionBadgeFr}
            alt={t.guaranteeBadgeAlt}
            boxSize={{ base: '120px', md: '150px' }}
            objectFit="contain"
            loading="lazy"
          />
          <Heading as="h2" fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }} fontWeight="bold" color="gray.800">
            {title}
          </Heading>
          <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.700" lineHeight="1.8" maxW="720px">
            {body}
          </Text>
          <Button
            size={{ base: 'md', md: 'lg' }}
            bg="brand.500"
            color="white"
            _hover={{ bg: 'brand.600' }}
            rightIcon={<ArrowForwardIcon />}
            onClick={onCtaClick}
            borderRadius="full"
            px={{ base: 6, md: 8 }}
            fontWeight="600"
          >
            {ctaText ?? t.heroButton}
          </Button>
          {note && (
            <Text fontSize="sm" color="gray.500">
              {note}
            </Text>
          )}
        </Stack>
      </Container>
    </Box>
  );
}
