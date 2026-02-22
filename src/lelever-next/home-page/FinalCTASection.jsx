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

export default function FinalCTASection({
  onSubmissionOpen,
  title,
  subtitle,
  buttonText,
}) {
  const { t } = useTranslation();

  return (
    <Box
      w='100%'
      py={{ base: 12, md: 16, lg: 20 }}
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

          <Button
            rightIcon={<ArrowForwardIcon />}
            bg='white'
            color='brand.500'
            onClick={onSubmissionOpen}
            textStyle='bodyLarge'
            fontWeight='bold'
            px={{ base: 10, md: 12 }}
            py={{ base: 3, md: 4 }}
            borderRadius='full'
            _hover={{
              bg: 'gray.100',
              transform: 'translateY(-2px)',
              boxShadow: 'xl',
            }}
            transition='all 0.2s cubic-bezier(0.4, 0, 0.2, 1)'
            boxShadow='lg'
          >
            {buttonText || t.ctaButton}
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
