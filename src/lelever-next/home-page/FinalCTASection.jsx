import React from 'react';
import { Box, Container, Heading, Stack, Button } from '@chakra-ui/react';
import { useTranslation } from '../i18n';

export default function FinalCTASection({ onSubmissionOpen }) {
  const { t } = useTranslation();
  return (
    <Box py={{ base: 12, md: 16 }} bg='#014CC4' color='white'>
      <Container maxW='1440px' px={{ base: 4, md: 6 }}>
        <Stack spacing={6} align='center' textAlign='center'>
          <Heading
            as='h2'
            fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
            fontWeight='bold'
            color='white'
          >
            {t.ctaTitle}
          </Heading>

          <Button
            bg='white'
            color='#014CC4'
            onClick={onSubmissionOpen}
            fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
            px={{ base: 6, md: 8, lg: 10 }}
            py={{ base: 4, md: 5, lg: 6 }}
            fontWeight='semibold'
            borderRadius='full'
            _hover={{ bg: 'gray.100' }}
          >
            {t.ctaButton}
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
