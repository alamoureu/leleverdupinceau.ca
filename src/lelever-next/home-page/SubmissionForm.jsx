import React, { useState } from 'react';
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
} from '@chakra-ui/react';
import { useTranslation } from '../i18n';

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
}) {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.consentAccepted) {
      alert(t.formConsentRequired);
      return;
    }
    if (onSubmit) {
      onSubmit(formData);
    } else {
      console.log('Form submitted:', formData);
    }
    setFormData({
      name: '',
      phone: '',
      address: '',
      projectDetails: '',
      paintingType: '',
      consentAccepted: false,
    });
    if (onClose) {
      onClose();
    }
  };

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
              <Stack direction='row' spacing={6}>
                <Radio value='interior' colorScheme='blue'>
                  {t.formInteriorPainting}
                </Radio>
                <Radio value='exterior' colorScheme='blue'>
                  {t.formExteriorPainting}
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
          >
            {t.formSubmit}
          </Button>
        </Stack>
      </form>
    </ChakraProvider>
  );
}
