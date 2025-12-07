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

const activeLabelStyles = {
  transform: 'scale(0.85) translateY(-24px)',
};

const theme = extendTheme({
  fonts: {
    heading: `-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    body: `-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    mono: `"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace`,
  },
  components: {
    Form: {
      variants: {
        floating: {
          container: {
            _focusWithin: {
              label: {
                ...activeLabelStyles,
              },
            },
            'input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label':
              {
                ...activeLabelStyles,
              },
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
            input: {
              backgroundColor: 'white',
            },
            textarea: {
              backgroundColor: 'white',
            },
          },
        },
      },
    },
  },
});

export default function SubmissionForm({
  onSubmit,
  onClose,
  isModal: _isModal = false,
  onSubmissionStateChange,
}) {
  const { t } = useTranslation();
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

  // Notify parent of submission state
  useEffect(() => {
    if (isSubmitted && onSubmissionStateChange) {
      onSubmissionStateChange(true);
    } else if (!isSubmitted && onSubmissionStateChange) {
      onSubmissionStateChange(false);
    }
  }, [isSubmitted, onSubmissionStateChange]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.consentAccepted) {
      toast({
        title: t.formConsentRequired || 'Consent required',
        description:
          t.formConsentRequired || 'Please accept the terms and conditions.',
        status: 'warning',
        duration: 4000,
        isClosable: true,
      });
      return;
    }

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.address
    ) {
      toast({
        title: 'Error',
        description: 'Please fill in all required fields.',
        status: 'warning',
        duration: 4000,
        isClosable: true,
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare data for Firebase
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

      // Save to Firebase
      await addDoc(collection(db, 'Soumission'), firebaseData);

      // Send to GoHighLevel webhook
      try {
        await sendToGoHighLevel(formData);
      } catch (webhookError) {
        // Log webhook error but don't fail the submission
        console.error('GoHighLevel webhook error:', webhookError);
        // Optionally show a warning but continue
      }

      // Call custom onSubmit if provided
      if (onSubmit) {
        onSubmit(formData);
      }

      // Show success state
      setIsSubmitted(true);
      // Notify parent of submission state change
      if (onSubmissionStateChange) {
        onSubmissionStateChange(true);
      }

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        projectDetails: '',
        paintingType: '',
        consentAccepted: false,
      });

      // Close modal if provided (after showing confirmation)
      if (onClose) {
        setTimeout(() => {
          onClose();
        }, 5000);
      }
    } catch (error) {
      console.error('Submission error:', error);
      toast({
        title: 'Error',
        description: 'An error occurred. Please try again.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Show confirmation message if submitted
  if (isSubmitted) {
    return (
      <ChakraProvider theme={theme}>
        <Box w='100%' p={{ base: 8, md: 10 }} textAlign='center'>
          <Stack spacing={6}>
            {/* Success Icon with Animation */}
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
                bg='#014CC4'
                borderRadius='full'
                boxShadow='0 4px 15px rgba(1, 76, 196, 0.3)'
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

            {/* Title */}
            <Heading
              as='h3'
              fontSize={{ base: 'xl', md: '2xl' }}
              fontWeight='bold'
              color='#014CC4'
              textAlign='center'
            >
              {t.formConfirmationTitle}
            </Heading>

            {/* Subtitle */}
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
          </Stack>
        </Box>
      </ChakraProvider>
    );
  }

  return (
    <ChakraProvider theme={theme}>
      <form onSubmit={handleSubmit}>
        <Stack spacing={6}>
          <FormControl variant='floating' isRequired>
            <Input
              name='name'
              value={formData.name}
              onChange={handleChange}
              placeholder=' '
              size='lg'
              borderColor='gray.300'
              _focus={{
                borderColor: '#014CC4',
                boxShadow: '0 0 0 1px #014CC4',
              }}
            />
            <FormLabel
              color='gray.700'
              requiredIndicator={
                <Text as='span' color='red.500'>
                  *
                </Text>
              }
            >
              {t.formName}
            </FormLabel>
          </FormControl>

          <FormControl variant='floating' isRequired>
            <Input
              name='email'
              type='email'
              value={formData.email}
              onChange={handleChange}
              placeholder=' '
              size='lg'
              borderColor='gray.300'
              _focus={{
                borderColor: '#014CC4',
                boxShadow: '0 0 0 1px #014CC4',
              }}
            />
            <FormLabel
              color='gray.700'
              requiredIndicator={
                <Text as='span' color='red.500'>
                  *
                </Text>
              }
            >
              {t.formEmail || 'Email'}
            </FormLabel>
          </FormControl>

          <FormControl variant='floating' isRequired>
            <Input
              name='phone'
              type='tel'
              value={formData.phone}
              onChange={handleChange}
              placeholder=' '
              size='lg'
              borderColor='gray.300'
              _focus={{
                borderColor: '#014CC4',
                boxShadow: '0 0 0 1px #014CC4',
              }}
            />
            <FormLabel
              color='gray.700'
              requiredIndicator={
                <Text as='span' color='red.500'>
                  *
                </Text>
              }
            >
              {t.formPhone}
            </FormLabel>
          </FormControl>

          <FormControl variant='floating' isRequired>
            <Input
              name='address'
              value={formData.address}
              onChange={handleChange}
              placeholder=' '
              size='lg'
              borderColor='gray.300'
              _focus={{
                borderColor: '#014CC4',
                boxShadow: '0 0 0 1px #014CC4',
              }}
            />
            <FormLabel
              color='gray.700'
              requiredIndicator={
                <Text as='span' color='red.500'>
                  *
                </Text>
              }
            >
              {t.formAddress}
            </FormLabel>
          </FormControl>

          <FormControl variant='floating' isRequired>
            <Textarea
              name='projectDetails'
              value={formData.projectDetails}
              onChange={handleChange}
              placeholder=' '
              rows={5}
              size='lg'
              borderColor='gray.300'
              _focus={{
                borderColor: '#014CC4',
                boxShadow: '0 0 0 1px #014CC4',
              }}
            />
            <FormLabel
              color='gray.700'
              requiredIndicator={
                <Text as='span' color='red.500'>
                  *
                </Text>
              }
            >
              {t.formProjectDetails}
            </FormLabel>
          </FormControl>

          <FormControl isRequired>
            <FormLabel
              color='gray.700'
              mb={3}
              requiredIndicator={
                <Text as='span' color='red.500'>
                  *
                </Text>
              }
            >
              {t.formPaintingType}
            </FormLabel>
            <RadioGroup
              value={formData.paintingType}
              onChange={handleRadioChange}
            >
              <Stack direction='column' spacing={3}>
                <Radio value='interior' colorScheme='blue'>
                  {t.formInteriorPainting ||
                    t.serviceInterior ||
                    'Peinture intérieure'}
                </Radio>
                <Radio value='exterior' colorScheme='blue'>
                  {t.formExteriorPainting ||
                    t.serviceExterior ||
                    'Peinture extérieure'}
                </Radio>
              </Stack>
            </RadioGroup>
          </FormControl>

          <FormControl isRequired>
            <Stack direction='row' spacing={3} alignItems='flex-start'>
              <Checkbox
                name='consentAccepted'
                isChecked={formData.consentAccepted}
                onChange={handleChange}
                size='md'
                mt={1}
                borderColor='gray.300'
                _checked={{
                  bg: '#014CC4',
                  borderColor: '#014CC4',
                  color: 'white',
                  _hover: {
                    bg: '#0139A0',
                    borderColor: '#0139A0',
                  },
                }}
                _focus={{
                  boxShadow: '0 0 0 3px rgba(1, 76, 196, 0.2)',
                }}
              />
              <Box fontSize='sm' color='gray.700' flex={1}>
                {t.formConsentText}{' '}
                <Link
                  href='/politiques/termes-conditions'
                  color='#014CC4'
                  textDecoration='underline'
                  _hover={{ color: '#0139A0' }}
                >
                  {t.formTermsAndConditions}
                </Link>{' '}
                {t.formAnd}{' '}
                <Link
                  href='/politiques/confidentialite'
                  color='#014CC4'
                  textDecoration='underline'
                  _hover={{ color: '#0139A0' }}
                >
                  {t.formPrivacyPolicy}
                </Link>{' '}
                {t.formOf}
              </Box>
            </Stack>
          </FormControl>

          <Button
            type='submit'
            bg='#014CC4'
            color='white'
            w='100%'
            fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
            py={{ base: 4, md: 5, lg: 6 }}
            fontWeight='semibold'
            borderRadius='full'
            _hover={{ bg: '#0139A0' }}
            _loading={{
              opacity: 0.8,
              cursor: 'not-allowed',
            }}
            isLoading={isSubmitting}
            loadingText={t.formSubmitting || 'Envoi en cours...'}
            spinnerPlacement='start'
            disabled={isSubmitting}
          >
            {t.formSubmit || 'Envoyer'}
          </Button>
        </Stack>
      </form>
    </ChakraProvider>
  );
}
