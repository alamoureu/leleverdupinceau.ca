import React from 'react';
import { Box, Container, Heading, Stack } from '@chakra-ui/react';
import { useTranslation } from '../i18n';
import SubmissionForm from './SubmissionForm';

export default function ContactFormSection() {
  const { t } = useTranslation();

  return (
    <Box py={{ base: 12, md: 16, lg: 20 }} bg='gray.50' borderRadius='xl'>
      <Container maxW='1440px' px={{ base: 4, md: 6 }}>
        <Stack spacing={8}>
          <Stack spacing={{ base: 2, md: 3 }} textAlign='center'>
            <Heading as='h2' size='section' fontWeight='bold' color='gray.800' lineHeight='1.3'>
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
            <SubmissionForm />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
