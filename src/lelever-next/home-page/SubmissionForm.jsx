import React, { useState, useEffect } from 'react';
import {
  Stack,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
  Button,
  ChakraProvider,
  extendTheme,
  Text,
  Radio,
  RadioGroup,
  Checkbox,
  Link,
  Box,
  useToast,
  Heading,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useTranslation } from '../i18n';
import { db } from '../../firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { sendToGoHighLevel } from '../../utils/gohighlevelWebhook';
import { fontFamily } from '../../theme';

const activeLabelStyles = {
  transform: 'scale(0.85) translateY(-24px)',
};

const BRAND_BLUE = '#1E4BBA';
const BRAND_BLUE_HOVER = '#183D9A';

const theme = extendTheme({
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
            'input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label': { ...activeLabelStyles },
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
    Radio: {
      baseStyle: {
        control: {
          w: 6,
          h: 6,
          border: '2px solid',
          borderColor: 'gray.300',
          borderRadius: 'full',
          bg: 'white',
          transition: 'border-color 0.2s, background 0.2s, box-shadow 0.2s',
          _hover: { borderColor: 'gray.400', bg: 'gray.50' },
          _checked: {
            bg: BRAND_BLUE,
            borderColor: BRAND_BLUE,
            borderWidth: '2px',
            color: 'white',
            _before: {
              content: '""',
              display: 'block',
              w: 2,
              h: 2,
              borderRadius: 'full',
              bg: 'white',
              transform: 'scale(1)',
            },
            _hover: { bg: BRAND_BLUE_HOVER, borderColor: BRAND_BLUE_HOVER },
          },
          _focusVisible: { boxShadow: `0 0 0 3px ${BRAND_BLUE}` },
        },
        label: {
          ml: 3,
          fontWeight: 'medium',
          color: 'gray.800',
          cursor: 'pointer',
        },
      },
      sizes: {
        md: { control: { w: 6, h: 6 } },
        lg: { control: { w: 6, h: 6 } },
      },
    },
    Checkbox: {
      baseStyle: {
        control: {
          w: 6,
          h: 6,
          minW: 6,
          minH: 6,
          borderRadius: 'md',
          border: '2px solid',
          borderColor: 'gray.300',
          transition: 'border-color 0.2s, background 0.2s',
          _hover: { borderColor: 'gray.400' },
          _checked: {
            bg: BRAND_BLUE,
            borderColor: BRAND_BLUE,
            color: 'white',
            _hover: { bg: BRAND_BLUE_HOVER, borderColor: BRAND_BLUE_HOVER },
          },
          _focusVisible: { boxShadow: `0 0 0 3px ${BRAND_BLUE}` },
        },
      },
      sizes: {
        md: { control: { w: 6, h: 6, minW: 6, minH: 6 } },
        lg: { control: { w: 6, h: 6, minW: 6, minH: 6 } },
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
  const [touched, setTouched] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    projectDetails: '',
    paintingType: '',
    consentAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleRadioChange = (value) => {
    setFormData({
      ...formData,
      paintingType: value,
    });
  };

  useEffect(() => {
    if (isSubmitted && onSubmissionStateChange) {
      onSubmissionStateChange(true);
    } else if (!isSubmitted && onSubmissionStateChange) {
      onSubmissionStateChange(false);
    }
  }, [isSubmitted, onSubmissionStateChange]);

  useEffect(() => {
    if (isModal && onSubmittingChange) {
      onSubmittingChange(isSubmitting);
    }
  }, [isModal, isSubmitting, onSubmittingChange]);

  const getErrors = () => {
    const suffix = t.formRequiredSuffix ?? ' required';
    const err = {};
    if (!formData.name?.trim()) err.name = (t.formName ?? '') + suffix;
    if (!formData.email?.trim()) err.email = (t.formEmail ?? '') + suffix;
    if (!formData.phone?.trim()) err.phone = (t.formPhone ?? '') + suffix;
    if (!formData.address?.trim()) err.address = (t.formAddress ?? '') + suffix;
    if (!formData.projectDetails?.trim()) err.projectDetails = (t.formProjectDetails ?? '') + suffix;
    if (!formData.paintingType) err.paintingType = (t.formPaintingType ?? '') + suffix;
    if (!formData.consentAccepted) err.consentAccepted = t.formConsentRequired ?? '';
    return err;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = getErrors();
    setTouched(Object.fromEntries(Object.keys(errors).map((k) => [k, true])));

    if (Object.keys(errors).length > 0) {
      toast({
        title: t.formErrorTitle ?? 'Error',
        description: t.formErrorDescription ?? 'Please fill in all required fields.',
        status: 'warning',
        duration: 4000,
        isClosable: true,
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const firebaseData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        projectDetails: formData.projectDetails,
        paintingType: formData.paintingType,
        date: Timestamp.now(),
        source: 'Website Form',
      };

      await addDoc(collection(db, 'Soumission'), firebaseData);

      const termsText = [t.formConsentText, t.formTermsAndConditions, t.formAnd, t.formPrivacyPolicy, t.formOf].filter(Boolean).join(' ');
      const ghlData = { ...formData, terms_and_conditions: termsText };
      try {
        await sendToGoHighLevel(ghlData, { language: currentLang });
      } catch (webhookError) {
        if (import.meta.env?.DEV) console.error('GoHighLevel webhook error:', webhookError);
      }

      if (onSubmit) onSubmit(formData);
      setIsSubmitted(true);
      if (onSubmissionStateChange) onSubmissionStateChange(true);

      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        projectDetails: '',
        paintingType: '',
        consentAccepted: false,
      });
    } catch (error) {
      if (import.meta.env?.DEV) console.error('Submission error:', error);
      toast({
        title: t.formErrorTitle ?? 'Error',
        description: t.formErrorTryAgain ?? 'An error occurred. Please try again.',
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
        <Box w="100%" p={{ base: 6, sm: 8, md: 10 }} textAlign="center">
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
                display='flex'
                justifyContent='center'
                alignItems='center'
                w={{ base: '60px', md: '80px' }}
                h={{ base: '60px', md: '80px' }}
                mx='auto'
                bg={BRAND_BLUE}
                borderRadius="full"
                boxShadow="0 4px 15px rgba(1, 76, 196, 0.3)"
              >
                <Text
                  fontSize={{ base: '2xl', md: '3xl' }}
                  color='white'
                  fontWeight='bold'
                >
                  ✓
                </Text>
              </Box>
            </motion.div>

            <Heading
              as='h3'
              fontSize={{ base: 'xl', md: '2xl' }}
              fontWeight='bold'
              color={BRAND_BLUE}
              textAlign='center'
            >
              {t.formConfirmationTitle}
            </Heading>

            <Text
              fontSize={{ base: 'md', md: 'lg' }}
              color='gray.600'
              lineHeight='1.8'
              maxW='500px'
              mx='auto'
              textAlign='center'
            >
              {t.formConfirmationMessage}
            </Text>

            {t.formSuccessClosing && (
              <Text
                fontSize={{ base: 'sm', md: 'sm' }}
                color='gray.500'
                fontStyle='italic'
                pt={2}
              >
                {t.formSuccessClosing}
              </Text>
            )}
          </Stack>
        </Box>
      </ChakraProvider>
    );
  }

  const errors = getErrors();
  const showError = (field) => touched[field] && errors[field];

  return (
    <ChakraProvider theme={theme}>
      <Box
        as="form"
        id={isModal ? formId : undefined}
        onSubmit={handleSubmit}
        w="100%"
        maxW={{ base: '100%', sm: '480px', md: '520px' }}
        mx="auto"
        py={isModal ? 0 : { base: 6, md: 8 }}
        px={isModal ? 0 : { base: 2, sm: 4 }}
      >
        <Stack spacing={6} align="stretch" w="100%">
          <FormControl variant="floating" isRequired isInvalid={showError('name')}>
            <Input
              ref={initialFocusRef}
              name="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={() => setTouched((prev) => ({ ...prev, name: true }))}
              placeholder=" "
              size="lg"
              borderColor="gray.300"
              _focus={{ borderColor: 'brand.500', boxShadow: '0 0 0 1px var(--chakra-colors-brand-500)' }}
              _invalid={{ borderColor: 'red.400', boxShadow: '0 0 0 1px var(--chakra-colors-red-400)' }}
            />
            <FormLabel color="gray.700" requiredIndicator={<Text as="span" color="red.500">*</Text>}>
              {t.formName}
            </FormLabel>
            <FormErrorMessage>{errors.name}</FormErrorMessage>
          </FormControl>

          <FormControl variant="floating" isRequired isInvalid={showError('email')}>
            <Input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={() => setTouched((prev) => ({ ...prev, email: true }))}
              placeholder=" "
              size="lg"
              borderColor="gray.300"
              _focus={{ borderColor: 'brand.500', boxShadow: '0 0 0 1px var(--chakra-colors-brand-500)' }}
              _invalid={{ borderColor: 'red.400', boxShadow: '0 0 0 1px var(--chakra-colors-red-400)' }}
            />
            <FormLabel color="gray.700" requiredIndicator={<Text as="span" color="red.500">*</Text>}>
              {t.formEmail}
            </FormLabel>
            <FormErrorMessage>{errors.email}</FormErrorMessage>
          </FormControl>

          <FormControl variant="floating" isRequired isInvalid={showError('phone')}>
            <Input
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              onBlur={() => setTouched((prev) => ({ ...prev, phone: true }))}
              placeholder=" "
              size="lg"
              borderColor="gray.300"
              _focus={{ borderColor: 'brand.500', boxShadow: '0 0 0 1px var(--chakra-colors-brand-500)' }}
              _invalid={{ borderColor: 'red.400', boxShadow: '0 0 0 1px var(--chakra-colors-red-400)' }}
            />
            <FormLabel color="gray.700" requiredIndicator={<Text as="span" color="red.500">*</Text>}>
              {t.formPhone}
            </FormLabel>
            <FormErrorMessage>{errors.phone}</FormErrorMessage>
          </FormControl>

          <FormControl variant="floating" isRequired isInvalid={showError('address')}>
            <Input
              name="address"
              value={formData.address}
              onChange={handleChange}
              onBlur={() => setTouched((prev) => ({ ...prev, address: true }))}
              placeholder=" "
              size="lg"
              borderColor="gray.300"
              _focus={{ borderColor: 'brand.500', boxShadow: '0 0 0 1px var(--chakra-colors-brand-500)' }}
              _invalid={{ borderColor: 'red.400', boxShadow: '0 0 0 1px var(--chakra-colors-red-400)' }}
            />
            <FormLabel color="gray.700" requiredIndicator={<Text as="span" color="red.500">*</Text>}>
              {t.formAddress}
            </FormLabel>
            <FormErrorMessage>{errors.address}</FormErrorMessage>
          </FormControl>

          <FormControl variant="floating" isRequired isInvalid={showError('projectDetails')}>
            <Textarea
              name="projectDetails"
              value={formData.projectDetails}
              onChange={handleChange}
              onBlur={() => setTouched((prev) => ({ ...prev, projectDetails: true }))}
              placeholder=" "
              rows={4}
              size="lg"
              borderColor="gray.300"
              resize="vertical"
              _focus={{ borderColor: 'brand.500', boxShadow: '0 0 0 1px var(--chakra-colors-brand-500)' }}
              _invalid={{ borderColor: 'red.400', boxShadow: '0 0 0 1px var(--chakra-colors-red-400)' }}
            />
            <FormLabel color="gray.700" requiredIndicator={<Text as="span" color="red.500">*</Text>}>
              {t.formProjectDetails}
            </FormLabel>
            <FormErrorMessage>{errors.projectDetails}</FormErrorMessage>
          </FormControl>

          <FormControl isRequired isInvalid={showError('paintingType')} w="100%">
            <FormLabel color="gray.700" mb={2} requiredIndicator={<Text as="span" color="red.500">*</Text>}>
              {t.formPaintingType}
            </FormLabel>
            <RadioGroup
              value={formData.paintingType}
              onChange={(value) => {
                handleRadioChange(value);
                setTouched((prev) => ({ ...prev, paintingType: true }));
              }}
            >
              <Stack direction="column" spacing={3} w="100%">
                <Radio value="interior" colorScheme="brand" size="lg">
                  {t.formInteriorPainting ?? t.serviceInterior}
                </Radio>
                <Radio value="exterior" colorScheme="brand" size="lg">
                  {t.formExteriorPainting ?? t.serviceExterior}
                </Radio>
              </Stack>
            </RadioGroup>
            <FormErrorMessage>{errors.paintingType}</FormErrorMessage>
          </FormControl>

          <FormControl isRequired isInvalid={showError('consentAccepted')} w="100%">
            <Stack direction="row" spacing={3} alignItems="flex-start" w="100%">
              <Checkbox
                name="consentAccepted"
                isChecked={formData.consentAccepted}
                onChange={handleChange}
                size="md"
                mt={0.5}
              />
              <Box fontSize={{ base: 'xs', sm: 'sm' }} color="gray.700" flex={1} lineHeight="1.5">
                {t.formConsentText}{' '}
                <Link href="/politiques/termes-conditions" color="#1E4BBA" textDecoration="underline" _hover={{ color: '#183D9A' }}>
                  {t.formTermsAndConditions}
                </Link>{' '}
                {t.formAnd}{' '}
                <Link href="/politiques/confidentialite" color="#1E4BBA" textDecoration="underline" _hover={{ color: '#183D9A' }}>
                  {t.formPrivacyPolicy}
                </Link>{' '}
                {t.formOf}
              </Box>
            </Stack>
            <FormErrorMessage mt={2}>{errors.consentAccepted}</FormErrorMessage>
          </FormControl>

        </Stack>

        {!isModal && (
          <Button
            type="submit"
            colorScheme="brand"
            w="100%"
            size="lg"
            mt={6}
            isLoading={isSubmitting}
            loadingText={t.formSubmitting}
            spinnerPlacement="start"
            disabled={isSubmitting}
          >
            {t.formSubmit}
          </Button>
        )}
      </Box>
    </ChakraProvider>
  );
}
