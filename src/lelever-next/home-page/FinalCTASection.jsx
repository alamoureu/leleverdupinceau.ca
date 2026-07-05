import React from 'react';
import {
  Box,
  Container,
  Heading,
  Stack,
  Button,
  Text,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { useTranslation } from '../i18n';
import ShakeButton from './ShakeButton';

const DEFAULT_SECTION_PY = { base: 12, md: 16, lg: 20 };

export default function FinalCTASection({
  onSubmissionOpen,
  title,
  subtitle,
  buttonText,
  sectionPy,
  compactMobile = false,
}) {
  const { t } = useTranslation();

  return (
    <Box
      w='100%'
      py={sectionPy ?? DEFAULT_SECTION_PY}
      bg='app.ctaBg'
      position='relative'
      overflow='hidden'
    >
      <Container
        maxW='1000px'
        px={compactMobile ? { base: 3, md: 6 } : { base: 4, md: 6 }}
        position='relative'
        zIndex={1}
      >
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

          <ShakeButton style={{ display: 'inline-block', width: 'auto' }} glowColor='rgba(255, 255, 255, 0.4)'>
            <Button
              rightIcon={<ArrowForwardIcon />}
              bg='white'
              color='brand.500'
              onClick={onSubmissionOpen}
              textStyle='bodyLarge'
              fontWeight='bold'
              letterSpacing='0.01em'
              px={{ base: 10, md: 12 }}
              py={{ base: 3, md: 4 }}
              borderRadius='full'
              boxShadow='0 8px 28px rgba(0, 0, 0, 0.25)'
              _hover={{
                bg: 'gray.50',
                transform: 'translateY(-2px)',
                boxShadow: '0 14px 40px rgba(0, 0, 0, 0.35)',
              }}
              _active={{ transform: 'translateY(0)' }}
              transition='all 0.22s cubic-bezier(0.4, 0, 0.2, 1)'
            >
              {buttonText || t.ctaButton}
            </Button>
          </ShakeButton>
        </Stack>
      </Container>
    </Box>
  );
}
