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

const DEFAULT_SECTION_PT = { base: 4, sm: 6, md: 8, lg: 10 };
const DEFAULT_SECTION_PB = { base: 8, sm: 10, md: 12, lg: 14 };

export default function ContactFormSection({
  fields = DEFAULT_FIELDS,
  phoneFirst = false,
  projectDetailsLabel,
  onSubmissionStateChange,
  sectionPy,
  sectionPaddingTop,
  sectionPaddingBottom,
  sectionBg = 'white',
}) {
  const { t } = useTranslation();
  const [isFormSuccess, setIsFormSuccess] = useState(false);

  const handleStateChange = (success) => {
    setIsFormSuccess(success);
    onSubmissionStateChange?.(success);
  };

  const fallbackPt = sectionPy ?? DEFAULT_SECTION_PT;
  const fallbackPb = sectionPy ?? DEFAULT_SECTION_PB;
  const pt = sectionPaddingTop !== undefined ? sectionPaddingTop : fallbackPt;
  const pb = sectionPaddingBottom !== undefined ? sectionPaddingBottom : fallbackPb;

  const isBlue = sectionBg !== 'white' && sectionBg !== 'gray.50';

  return (
    <Stack
      pt={pt}
      pb={pb}
      align="center"
      px={{ base: 3, sm: 4, md: 6, lg: 8 }}
      bg={sectionBg}
      spacing={isBlue ? { base: 4, md: 6 } : 0}
    >
      {/* Title + subtitle above the card */}
      {!isFormSuccess && (
        <Box
          w="100%"
          maxW={{ base: '100%', sm: '480px', md: '560px', lg: '600px' }}
          mx="auto"
        >
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
            color={isBlue ? 'white' : 'gray.900'}
            textAlign="center"
            pb={1}
            textTransform="uppercase"
          >
            {t.contactFormTitle}
          </Text>
          <Text
            textAlign="center"
            color={isBlue ? 'whiteAlpha.800' : 'gray.600'}
            fontSize={{ base: 'sm', md: 'lg' }}
            fontWeight="medium"
          >
            {t.contactFormSubtitle}
          </Text>
        </Box>
      )}

      {/* Form — white card when section is blue */}
      <Box
        w="100%"
        maxW={{ base: '100%', sm: '480px', md: '560px', lg: '600px' }}
        mx="auto"
        bg={isBlue ? 'white' : 'transparent'}
        borderRadius={isBlue ? '2xl' : 'none'}
        boxShadow={isBlue ? '0 8px 40px rgba(0,0,0,0.18)' : 'none'}
        pt={isBlue ? { base: 2, md: 4 } : 0}
        pb={isBlue ? { base: 2, md: 4 } : 0}
      >
        <SubmissionForm
          onSubmissionStateChange={handleStateChange}
          fields={fields}
          phoneFirst={phoneFirst}
          projectDetailsLabel={projectDetailsLabel ?? t.formProjectDetails}
        />
      </Box>
    </Stack>
  );
}
