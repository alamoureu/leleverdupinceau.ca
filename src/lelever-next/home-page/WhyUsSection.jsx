import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Button,
  Flex,
  Icon,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPaintRoller,
  faShield,
  faClock,
  faCheckCircle,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from '../i18n';

export default function WhyUsSection({ onSubmissionOpen }) {
  const { t } = useTranslation();

  const benefits = [
    {
      icon: faPaintRoller,
      title: t.benefit1Title,
      description: t.benefit1Desc,
    },
    {
      icon: faShield,
      title: t.benefit2Title,
      description: t.benefit2Desc,
    },
    {
      icon: faClock,
      title: t.benefit3Title,
      description: t.benefit3Desc,
      hasCheck: true,
    },
    {
      icon: faStar,
      title: t.benefit4Title,
      description: t.benefit4Desc,
    },
  ];
  return (
    <Box py={{ base: 12, md: 16, lg: 20 }} bg='white'>
      <Container maxW='1440px' px={{ base: 4, md: 6 }}>
        <Heading
          as='h2'
          size='section'
          color='gray.800'
          mb={{ base: 6, md: 8 }}
          textAlign='center'
        >
          {t.whyUsTitle}
        </Heading>

        <Stack spacing={{ base: 4, md: 6 }} maxW='800px' mx='auto'>
          {benefits.map((benefit, index) => (
            <Flex key={index} direction='row' align='start' gap={4}>
              {benefit.hasCheck ? (
                <Box position='relative' flexShrink={0}>
                  <Icon
                    as={FontAwesomeIcon}
                    icon={faClock}
                    color='brand.500'
                    boxSize={{ base: 5, md: 6 }}
                    mt={1}
                  />
                  <Icon
                    as={FontAwesomeIcon}
                    icon={faCheckCircle}
                    color='brand.500'
                    boxSize={{ base: 2.5, md: 3 }}
                    position='absolute'
                    bottom='-2px'
                    right='-2px'
                  />
                </Box>
              ) : (
                <Icon
                  as={FontAwesomeIcon}
                  icon={benefit.icon}
                  color='brand.500'
                  boxSize={{ base: 5, md: 6 }}
                  mt={1}
                  flexShrink={0}
                />
              )}

              <Stack spacing={{ base: 1, md: 2 }} flex={1}>
                <Text
                  textStyle='bodyLarge'
                  fontWeight='600'
                  color='gray.800'
                  lineHeight='1.4'
                >
                  {benefit.title}
                </Text>
                <Text
                  textStyle='body'
                  color='gray.600'
                  lineHeight='1.6'
                >
                  {benefit.description}
                </Text>
              </Stack>
            </Flex>
          ))}

          <Box pt={4} textAlign='center'>
            <Button
              onClick={onSubmissionOpen}
              bg='brand.500'
              color='white'
              textStyle='nav'
              px={{ base: 8, md: 10 }}
              h={{ base: '45px', md: '55px' }}
              borderRadius='full'
              boxShadow='lg'
              _hover={{ bg: 'brand.600' }}
              w={{ base: '100%', md: 'auto' }}
            >
              {t.freeSubmission}
            </Button>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
