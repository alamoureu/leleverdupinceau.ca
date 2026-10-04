import React, { useState, useEffect } from 'react';
import {
  Stack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  ChakraProvider,
  extendTheme,
  Text,
  Box,
  useToast,
  Heading,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useTranslation } from '../i18n';
import CtaButton from './CtaButton';
import { sendToGoHighLevel } from '../../utils/gohighlevelWebhook';
import { sendWebsiteLeadToErp } from '../../utils/erpWebsiteWebhook';
import { trackFormCompletion } from '../../config/analytics';
import { colors, fontFamily } from '../../theme';

const activeLabelStyles = {
  transform: 'scale(0.8) translateY(-27px)',
};

const BRAND_BLUE = '#2355CA';

const EMPTY_FORM = {
  name: '',
  phone: '',
  email: '',
  projectDetails: '',
};

const REQUIRED_FIELDS = [
  { name: 'name', labelKey: 'formName' },
  { name: 'phone', labelKey: 'formPhone', type: 'tel' },
  { name: 'email', labelKey: 'formEmail', type: 'email' },
];

const inputFocusStyle = {
  borderColor: 'brand.500',
  boxShadow: '0 0 0 1px var(--chakra-colors-brand-500)',
};

const theme = extendTheme({
  colors,
  fonts: {
    heading: fontFamily,
    body: fontFamily,
    mono: `"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace`,
  },
  components: {
    Form: {
      variants: {
        floating: {
          container: {
            _focusWithin: { label: { ...activeLabelStyles } },
            'input:not(:placeholder-shown) + label, textarea:not(:placeholder-shown) ~ label':
              { ...activeLabelStyles },
            label: {
              top: 0,
              left: 0,
              zIndex: 2,
              position: 'absolute',
              backgroundColor: 'white',
              pointerEvents: 'none',
              mx: 3,
              px: 1,
              my: 2,
              transformOrigin: 'left top',
              transition: 'all 0.2s',
            },
            input: { backgroundColor: 'white' },
            textarea: { backgroundColor: 'white' },
          },
        },
      },
    },
  },
});

export default function SubmissionForm({
  onSubmit,
  onSubmissionStateChange,
  onSubmittingChange,
  isModal = false,
  formId,
  initialFocusRef,
}) {
  const { t, currentLang } = useTranslation();
  const toast = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [isProjectDetailsFocused, setIsProjectDetailsFocused] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    onSubmissionStateChange?.(isSubmitted);
  }, [isSubmitted, onSubmissionStateChange]);

  useEffect(() => {
    if (isModal && onSubmittingChange) {
      onSubmittingChange(isSubmitting);
    }
  }, [isModal, isSubmitting, onSubmittingChange]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const hasMissingField = REQUIRED_FIELDS.some(
      ({ name }) => !formData[name]?.trim(),
    );

    if (hasMissingField) {
      toast({
        title: t.formErrorTitle ?? 'Error',
        description:
          t.formErrorDescription ?? 'Please fill in all required fields.',
        status: 'warning',
        duration: 4000,
        isClosable: true,
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Load Firebase only on submit so marketing pages stay off the critical path
      const [{ db }, { collection, addDoc, Timestamp }] = await Promise.all([
        import('../../firebase'),
        import('firebase/firestore'),
      ]);

      await addDoc(collection(db, 'Soumission'), {
        ...formData,
        date: Timestamp.now(),
        source: 'Website Form',
      });

      const termsText = [
        t.formConsentText,
        t.formTermsAndConditions,
        t.formAnd,
        t.formPrivacyPolicy,
        t.formOf,
      ]
        .filter(Boolean)
        .join(' ');

      const leadData = { ...formData, terms_and_conditions: termsText };
      try {
        await sendToGoHighLevel(leadData, { language: currentLang });
      } catch (webhookError) {
        if (import.meta.env?.DEV)
          console.error('GoHighLevel webhook error:', webhookError);
      }
      try {
        await sendWebsiteLeadToErp(leadData, { language: currentLang });
      } catch (erpError) {
        if (import.meta.env?.DEV)
          console.error('ERP website lead error:', erpError);
      }

      trackFormCompletion({
        form_name: isModal ? 'website_modal_quote_form' : 'website_inline_quote_form',
        language: currentLang,
      });

      if (onSubmit) onSubmit(formData);
      setIsSubmitted(true);
      setFormData(EMPTY_FORM);
    } catch (error) {
      if (import.meta.env?.DEV) console.error('Submission error:', error);
      toast({
        title: t.formErrorTitle ?? 'Error',
        description:
          t.formErrorTryAgain ?? 'An error occurred. Please try again.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <ChakraProvider theme={theme}>
        <Box w="100%" textAlign="center" px={6} py={6}>
          <Stack spacing={6}>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: 'spring',
                stiffness: 200,
                damping: 15,
                duration: 0.5,
              }}
            >
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                w={{ base: '60px', md: '80px' }}
                h={{ base: '60px', md: '80px' }}
                mx="auto"
                bg={BRAND_BLUE}
                borderRadius="full"
                boxShadow="0 4px 15px rgba(1, 76, 196, 0.3)"
              >
                <Text
                  fontSize={{ base: '2xl', md: '3xl' }}
                  color="white"
                  fontWeight="bold"
                >
                  ✓
                </Text>
              </Box>
            </motion.div>

            <Heading
              as="h3"
              fontSize={{ base: 'xl', md: '2xl' }}
              fontWeight="bold"
              color={BRAND_BLUE}
              textAlign="center"
            >
              {t.formConfirmationTitle}
            </Heading>

            <Text
              fontSize={{ base: 'md', md: 'lg' }}
              color="gray.600"
              lineHeight="1.8"
              maxW="500px"
              mx="auto"
              textAlign="center"
            >
              {t.formConfirmationMessage
                ?.split('(438) 868-0772')
                .map((part, i, arr) =>
                  i < arr.length - 1 ? (
                    <React.Fragment key={i}>
                      {part}
                      <span style={{ whiteSpace: 'nowrap' }}>
                        (438) 868-0772
                      </span>
                    </React.Fragment>
                  ) : (
                    part
                  ),
                )}
            </Text>

            {t.formSuccessClosing && (
              <Text fontSize="sm" color="gray.500" fontStyle="italic" pt={2}>
                {t.formSuccessClosing}
              </Text>
            )}
          </Stack>
        </Box>
      </ChakraProvider>
    );
  }

  return (
    <ChakraProvider theme={theme}>
      <Box
        as="form"
        id={isModal ? formId : undefined}
        onSubmit={handleSubmit}
        w="100%"
        maxW={{ base: '100%', sm: '520px', md: '600px' }}
        mx="auto"
        pt={isModal ? 0 : { base: 4, md: 6 }}
        pb={isModal ? 0 : { base: 8, md: 10 }}
        px={isModal ? 0 : { base: 4, sm: 6 }}
      >
        <Box
          flex={isModal ? '1' : undefined}
          minH={isModal ? 0 : undefined}
          overflowY={isModal ? 'auto' : 'visible'}
          overscrollBehavior="contain"
          w="100%"
          pt={3}
          px={isModal ? 5 : 0}
        >
          <Stack
            spacing={isModal ? { base: 3, md: 4 } : { base: 4, md: 5 }}
            align="stretch"
            w="100%"
            pb={isModal ? { base: 2, md: 3 } : { base: 4, md: 6 }}
          >
            {REQUIRED_FIELDS.map(({ name, labelKey, type }, index) => (
              <FormControl key={name} variant="floating" isRequired>
                <Input
                  ref={index === 0 ? initialFocusRef : undefined}
                  name={name}
                  type={type}
                  value={formData[name]}
                  onChange={handleChange}
                  placeholder=" "
                  size="md"
                  fontSize="16px"
                  borderColor="gray.300"
                  _focus={inputFocusStyle}
                />
                <FormLabel fontSize="sm" color="gray.700" requiredIndicator={null}>
                  {t[labelKey]}
                </FormLabel>
              </FormControl>
            ))}

            <FormControl variant="floating">
              <Textarea
                name="projectDetails"
                value={formData.projectDetails}
                onChange={handleChange}
                placeholder=" "
                onFocus={() => setIsProjectDetailsFocused(true)}
                onBlur={() => setIsProjectDetailsFocused(false)}
                rows={2}
                size="md"
                fontSize="16px"
                borderColor="gray.300"
                resize="vertical"
                _focus={inputFocusStyle}
              />
              <FormLabel fontSize="sm" color="gray.700" requiredIndicator={null}>
                {!isProjectDetailsFocused && !formData.projectDetails
                  ? `${t.formProjectDetails} ${
                      currentLang === 'fr' ? '(optionnel)' : '(optional)'
                    }`
                  : t.formProjectDetails}
              </FormLabel>
            </FormControl>
          </Stack>

          {!isModal && (
            <Box flexShrink={0} w="100%" pt={{ base: 4, md: 6 }} mt="auto" bg="white">
              <CtaButton
                fullWidth
                type="submit"
                _loading={{ opacity: 0.8, cursor: 'not-allowed' }}
                isLoading={isSubmitting}
                loadingText={t.formSubmitting}
                spinnerPlacement="start"
              >
                {t.formSubmit}
              </CtaButton>
            </Box>
          )}
        </Box>
      </Box>
    </ChakraProvider>
  );
}
