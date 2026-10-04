import React from 'react';
import {
  Box,
  Container,
  Heading,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { useTranslation } from '../i18n';
import CtaButton from './CtaButton';
import SubmissionModal from './SubmissionModal';

const DEFAULT_SECTION_PY = { base: 12, md: 16, lg: 20 };

/**
 * CTA de fin de page unique, site-wide. Sans `onSubmissionOpen`, gère sa propre modale de soumission.
 */
export default function FinalCTASection({
  onSubmissionOpen,
  title,
  subtitle,
  buttonText,
  sectionPy,
}) {
  const { t } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      w='100%'
      py={sectionPy ?? DEFAULT_SECTION_PY}
      bg='app.ctaBg'
      position='relative'
      overflow='hidden'
    >
      <Container maxW='1000px' px={{ base: 4, md: 6 }} position='relative' zIndex={1}>
        <Stack spacing={{ base: 4, md: 6 }} align='center' textAlign='center'>
          <Stack spacing={{ base: 2, md: 3 }}>
            <Heading as='h2' size='page' color='white' letterSpacing='tight' lineHeight='1.1' fontWeight='800'>
              {title || t.ctaTitle}
            </Heading>
            {subtitle && (
              <Text textStyle='bodyLarge' color='gray.200' maxW='700px' mx='auto' lineHeight='1.6'>
                {subtitle}
              </Text>
            )}
          </Stack>

          <CtaButton variant='light' rightIcon={<ArrowForwardIcon />} onClick={onSubmissionOpen || onOpen}>
            {buttonText || t.ctaButton}
          </CtaButton>
        </Stack>
      </Container>
      {!onSubmissionOpen && <SubmissionModal isOpen={isOpen} onClose={onClose} />}
    </Box>
  );
}
