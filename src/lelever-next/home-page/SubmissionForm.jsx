import React, { useState, useEffect } from 'react';
import {
  Stack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  ChakraProvider,
  extendTheme,
  Text,
  Radio,
  RadioGroup,
  Box,
  useToast,
  Heading,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useTranslation } from '../i18n';
import ShakeButton from './ShakeButton';
import { db } from '../../firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { sendToGoHighLevel } from '../../utils/gohighlevelWebhook';
import { sendWebsiteLeadToErp } from '../../utils/erpWebsiteWebhook';
import { trackFormCompletion } from '../../config/analytics';
import { fontFamily } from '../../theme';

const activeLabelStyles = {
  transform: 'scale(0.8) translateY(-27px)',
};

const BRAND_BLUE = '#2355CA';
const BRAND_BLUE_HOVER = '#1E4BB5';

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
            'input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label':
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
          fontSize: 'sm',
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
  fields,
  phoneFirst = false,
  projectDetailsLabel,
}) {
  const { t, currentLang } = useTranslation();
  const toast = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    projectDetails: '',
    paintingType: '',
    consentAccepted: true,
  });

  const [isProjectDetailsFocused, setIsProjectDetailsFocused] = useState(false);

  const effectiveFields = {
    name: true,
    email: true,
    phone: true,
    address: true,
    projectDetails: true,
    paintingType: true,
    consentAccepted: true,
    ...fields,
  };

  const resolvedProjectDetailsLabelBase =
    projectDetailsLabel ?? t.formProjectDetails;

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
    if (effectiveFields.name && !formData.name?.trim())
      err.name = (t.formName ?? '') + suffix;
    if (effectiveFields.email && !formData.email?.trim())
      err.email = (t.formEmail ?? '') + suffix;
    if (effectiveFields.phone && !formData.phone?.trim())
      err.phone = (t.formPhone ?? '') + suffix;
    if (effectiveFields.address && !formData.address?.trim())
      err.address = (t.formAddress ?? '') + suffix;
    if (
      effectiveFields.projectDetails === true &&
      !formData.projectDetails?.trim()
    ) {
      err.projectDetails = (t.formProjectDetails ?? '') + suffix;
    }
    if (effectiveFields.paintingType && !formData.paintingType)
      err.paintingType = (t.formPaintingType ?? '') + suffix;
    if (effectiveFields.consentAccepted && !formData.consentAccepted)
      err.consentAccepted = t.formConsentRequired ?? '';
    return err;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = getErrors();

    if (Object.keys(errors).length > 0) {
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

      const termsText = [
        t.formConsentText,
        t.formTermsAndConditions,
        t.formAnd,
        t.formPrivacyPolicy,
        t.formOf,
      ]
        .filter(Boolean)
        .join(' ');

      const ghlData = {
        ...formData,
        address: effectiveFields.address ? formData.address : '',
        projectDetails: effectiveFields.projectDetails
          ? formData.projectDetails
          : '',
        paintingType: effectiveFields.paintingType ? formData.paintingType : '',
        terms_and_conditions: termsText,
      };
      try {
        await sendToGoHighLevel(ghlData, { language: currentLang });
      } catch (webhookError) {
        if (import.meta.env?.DEV)
          console.error('GoHighLevel webhook error:', webhookError);
      }
      try {
        await sendWebsiteLeadToErp(ghlData, { language: currentLang });
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
      if (onSubmissionStateChange) onSubmissionStateChange(true);

      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        projectDetails: '',
        paintingType: '',
        consentAccepted: true,
      });
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
              <Text
                fontSize={{ base: 'sm', md: 'sm' }}
                color="gray.500"
                fontStyle="italic"
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
          pt={{ base: 3, md: 3 }}
          px={isModal ? 5 : 0}
        >
          <Stack
            spacing={isModal ? { base: 3, md: 4 } : { base: 4, md: 5 }}
            align="stretch"
            w="100%"
            pb={isModal ? { base: 2, md: 3 } : { base: 4, md: 6 }}
          >
            {effectiveFields.name && (
              <FormControl variant="floating" isRequired>
                <Input
                  ref={initialFocusRef}
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder=" "
                  size="md"
                  fontSize="16px"
                  borderColor="gray.300"
                  _focus={{
                    borderColor: 'brand.500',
                    boxShadow: '0 0 0 1px var(--chakra-colors-brand-500)',
                  }}
                />
                <FormLabel
                  fontSize="sm"
                  color="gray.700"
                  requiredIndicator={null}
                >
                  {t.formName}
                </FormLabel>
              </FormControl>
            )}

            {phoneFirst ? (
              <>
                {effectiveFields.phone && (
                  <FormControl variant="floating" isRequired>
                    <Input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder=" "
                      size="md"
                      fontSize="16px"
                      borderColor="gray.300"
                      _focus={{
                        borderColor: 'brand.500',
                        boxShadow: '0 0 0 1px var(--chakra-colors-brand-500)',
                      }}
                    />
                    <FormLabel
                      fontSize="sm"
                      color="gray.700"
                      requiredIndicator={null}
                    >
                      {t.formPhone}
                    </FormLabel>
                  </FormControl>
                )}

                {effectiveFields.email && (
                  <FormControl variant="floating" isRequired>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder=" "
                      size="md"
                      fontSize="16px"
                      borderColor="gray.300"
                      _focus={{
                        borderColor: 'brand.500',
                        boxShadow: '0 0 0 1px var(--chakra-colors-brand-500)',
                      }}
                    />
                    <FormLabel
                      fontSize="sm"
                      color="gray.700"
                      requiredIndicator={null}
                    >
                      {t.formEmail}
                    </FormLabel>
                  </FormControl>
                )}
              </>
            ) : (
              <>
                {effectiveFields.email && (
                  <FormControl variant="floating" isRequired>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder=" "
                      size="md"
                      fontSize="16px"
                      borderColor="gray.300"
                      _focus={{
                        borderColor: 'brand.500',
                        boxShadow: '0 0 0 1px var(--chakra-colors-brand-500)',
                      }}
                    />
                    <FormLabel
                      fontSize="sm"
                      color="gray.700"
                      requiredIndicator={null}
                    >
                      {t.formEmail}
                    </FormLabel>
                  </FormControl>
                )}

                {effectiveFields.phone && (
                  <FormControl variant="floating" isRequired>
                    <Input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder=" "
                      size="md"
                      fontSize="16px"
                      borderColor="gray.300"
                      _focus={{
                        borderColor: 'brand.500',
                        boxShadow: '0 0 0 1px var(--chakra-colors-brand-500)',
                      }}
                    />
                    <FormLabel
                      fontSize="sm"
                      color="gray.700"
                      requiredIndicator={null}
                    >
                      {t.formPhone}
                    </FormLabel>
                  </FormControl>
                )}
              </>
            )}

            {effectiveFields.address && (
              <FormControl variant="floating" isRequired>
                <Input
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder=" "
                  size="md"
                  fontSize="16px"
                  borderColor="gray.300"
                  _focus={{
                    borderColor: 'brand.500',
                    boxShadow: '0 0 0 1px var(--chakra-colors-brand-500)',
                  }}
                />
                <FormLabel
                  fontSize="sm"
                  color="gray.700"
                  requiredIndicator={null}
                >
                  {t.formAddress}
                </FormLabel>
              </FormControl>
            )}

            {effectiveFields.projectDetails !== false && (
              <FormControl
                variant="floating"
                isRequired={effectiveFields.projectDetails === true}
              >
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
                  _placeholder={{
                    fontSize: 'md',
                    color: 'gray.400',
                  }}
                  _focus={{
                    borderColor: 'brand.500',
                    boxShadow: '0 0 0 1px var(--chakra-colors-brand-500)',
                  }}
                />
                <FormLabel
                  fontSize="sm"
                  color="gray.700"
                  requiredIndicator={null}
                >
                  {effectiveFields.projectDetails === 'optional' &&
                  !isProjectDetailsFocused &&
                  !formData.projectDetails
                    ? `${resolvedProjectDetailsLabelBase} ${
                        currentLang === 'fr' ? '(optionnel)' : '(optional)'
                      }`
                    : resolvedProjectDetailsLabelBase}
                </FormLabel>
              </FormControl>
            )}

            {effectiveFields.paintingType && (
              <FormControl isRequired w="100%">
                <FormLabel
                  fontSize="sm"
                  color="gray.700"
                  mb={1}
                  requiredIndicator={null}
                >
                  {t.formPaintingType}
                </FormLabel>
                <RadioGroup
                  value={formData.paintingType}
                  onChange={handleRadioChange}
                >
                  <Stack direction="column" spacing={1.5} w="100%">
                    <Radio value="interior" colorScheme="brand" size="md">
                      {t.formInteriorPainting ?? t.serviceInterior}
                    </Radio>
                    <Radio value="exterior" colorScheme="brand" size="md">
                      {t.formExteriorPainting ?? t.serviceExterior}
                    </Radio>
                  </Stack>
                </RadioGroup>
              </FormControl>
            )}

            {/* Consent moved under the button */}
          </Stack>

          {!isModal && (
            <Box
              flexShrink={0}
              w="100%"
              pt={{ base: 4, md: 6 }}
              pb={0}
              borderTopWidth={0}
              borderColor="gray.200"
              mt="auto"
              bg="white"
            >
              <ShakeButton>
                <Button
                  type="submit"
                  bgGradient={`linear(to-r, ${BRAND_BLUE}, ${BRAND_BLUE_HOVER})`}
                  color="white"
                  w="100%"
                  fontSize={{ base: 'md', md: 'md' }}
                  py={{ base: 3, md: 4 }}
                  fontWeight="bold"
                  letterSpacing="0.01em"
                  borderRadius="full"
                  boxShadow="0 8px 28px rgba(35, 85, 202, 0.45)"
                  _hover={{
                    bgGradient: `linear(to-r, ${BRAND_BLUE_HOVER}, #183D9A)`,
                    transform: 'translateY(-2px)',
                    boxShadow: '0 12px 36px rgba(35, 85, 202, 0.55)',
                  }}
                  _active={{ transform: 'translateY(0)' }}
                  _loading={{
                    opacity: 0.8,
                    cursor: 'not-allowed',
                  }}
                  transition="all 0.22s cubic-bezier(0.4, 0, 0.2, 1)"
                  isLoading={isSubmitting}
                  loadingText={t.formSubmitting}
                  spinnerPlacement="start"
                  disabled={isSubmitting}
                >
                  {t.formSubmit}
                </Button>
              </ShakeButton>

            </Box>
          )}
        </Box>
      </Box>
    </ChakraProvider>
  );
}
