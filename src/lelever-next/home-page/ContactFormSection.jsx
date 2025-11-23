import React from 'react';
import { Box, Container, Heading, Stack } from '@chakra-ui/react';
import { useTranslation } from '../i18n';
import SubmissionForm from './SubmissionForm';

export default function ContactFormSection() {
  const { t } = useTranslation();
  const handleSubmit = (formData) => {
    console.log('Form submitted:', formData);
  };

  return (
    <Box py={{ base: 12, md: 16 }} bg='gray.50'>
      <Container maxW='1440px' px={{ base: 4, md: 6 }}>
        <Stack spacing={8}>
          <Stack spacing={3} textAlign='center'>
            <Heading
              as='h2'
              fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
              fontWeight='bold'
              color='gray.800'
            >
              {t.contactFormTitle}
            </Heading>
          </Stack>

          <Box
            bg='white'
            p={{ base: 6, md: 8 }}
            borderRadius='lg'
            border='1px solid'
            borderColor='gray.200'
            w={{ base: '100%', md: '600px' }}
            mx='auto'
          >
            <SubmissionForm onSubmit={handleSubmit} />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
