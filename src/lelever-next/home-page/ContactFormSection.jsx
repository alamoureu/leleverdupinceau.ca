import React, { useState, useContext } from 'react';
import { Box, Stack, Text } from '@chakra-ui/react';
import { useTranslation } from '../i18n';
import SubmissionForm from './SubmissionForm';
import appContext from '../../AppProvider';

export default function ContactFormSection() {
  const { t } = useTranslation();
  const { currentLang } = useContext(appContext);
  const isFr = currentLang === 'fr';
  const [isFormSuccess, setIsFormSuccess] = useState(false);

  return (
    <Stack
      pt={{ base: 4, sm: 6, md: 8, lg: 10 }}
      pb={{ base: 8, sm: 10, md: 12, lg: 14 }}
      align="center"
      px={{ base: 3, sm: 4, md: 6, lg: 8 }}
      bg="white"
    >
      <Box
        w="100%"
        maxW={{
          base: '100%',
          sm: '520px',
          md: '720px',
          lg: '900px',
          xl: '960px',
          '2xl': '1000px',
        }}
      >
        {!isFormSuccess && (
          <Text
            as="h2"
            id="submission-form-title"
            fontSize={{
              base: 'lg',
              sm: 'xl',
              md: '2xl',
              lg: '3xl',
              xl: '4xl',
              '2xl': '4xl',
            }}
            fontWeight="bold"
            color="gray.900"
            textAlign="center"
            pb={1}
            textTransform="uppercase"
          >
            {t.contactFormTitle}
          </Text>
        )}
        {!isFormSuccess && (
          <Text
            textAlign="center"
            color="gray.600"
            fontSize={{ base: 'sm', md: 'lg' }}
            fontWeight="medium"
            pb={2}
          >
            en moins de 24h
          </Text>
        )}
        <Box px={{ base: 0, sm: 0, md: 0 }} py={{ base: 0, sm: 0, md: 0 }}>
          <SubmissionForm
            onSubmissionStateChange={setIsFormSuccess}
            fields={{
              name: true,
              phone: true,
              email: true,
              address: false,
              paintingType: false,
              projectDetails: 'optional',
            }}
            phoneFirst
            projectDetailsLabel={isFr ? 'Description du projet' : 'Project description'}
          />
        </Box>
      </Box>
    </Stack>
  );
}
