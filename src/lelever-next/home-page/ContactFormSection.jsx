import React, { useState } from 'react';
import { Box, Stack, Text } from '@chakra-ui/react';
import { useTranslation } from '../i18n';
import SubmissionForm from './SubmissionForm';

const DEFAULT_FIELDS = {
  name: true,
  phone: true,
  email: true,
  address: false,
  paintingType: false,
  projectDetails: 'optional',
};

export default function ContactFormSection({
  fields = DEFAULT_FIELDS,
  phoneFirst = false,
  projectDetailsLabel,
  onSubmissionStateChange,
}) {
  const { t } = useTranslation();
  const [isFormSuccess, setIsFormSuccess] = useState(false);

  const handleStateChange = (success) => {
    setIsFormSuccess(success);
    onSubmissionStateChange?.(success);
  };

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
          sm: '480px',
          md: '560px',
          lg: '600px',
        }}
        mx="auto"
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
            {t.contactFormSubtitle}
          </Text>
        )}
        <Box px={0} py={0}>
          <SubmissionForm
            onSubmissionStateChange={handleStateChange}
            fields={fields}
            phoneFirst={phoneFirst}
            projectDetailsLabel={projectDetailsLabel ?? t.formProjectDetails}
          />
        </Box>
      </Box>
    </Stack>
  );
}
