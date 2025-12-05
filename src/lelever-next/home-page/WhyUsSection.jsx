import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Button,
  SimpleGrid,
  Flex,
  Icon,
  Image,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPaintRoller,
  faClockRotateLeft,
  faStar,
  faRankingStar,
} from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from '../i18n';
import peintureProfessionnelleImg from '../images/peinture_pro.jpg';

export default function WhyUsSection({ onSubmissionOpen }) {
  const { t } = useTranslation();

  const benefits = [
    {
      icon: faRankingStar,
      title: t.benefit1Title,
      description: t.benefit1Desc,
    },
    {
      icon: faPaintRoller,
      title: t.benefit2Title,
      description: t.benefit2Desc,
    },
    {
      icon: faClockRotateLeft,
      title: t.benefit3Title,
      description: t.benefit3Desc,
    },
    {
      icon: faStar,
      title: t.benefit4Title,
      description: t.benefit4Desc,
    },
  ];
  return (
    <Box py={{ base: 12, md: 16 }} bg='white'>
      <Container maxW='1440px' px={{ base: 4, md: 6 }}>
        <Stack spacing={{ base: 8, md: 10 }} align='center' textAlign='center'>
          <Heading
            as='h2'
            fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
            fontWeight='bold'
            color='gray.800'
            mb={4}
          >
            {t.whyUsTitle}
          </Heading>

          <Stack spacing={{ base: 4, md: 6 }} maxW='800px' w='100%'>
            {benefits.map((benefit, index) => (
              <Flex
                key={index}
                direction='row'
                align='start'
                gap={4}
                justify='center'
              >
                <Icon
                  as={FontAwesomeIcon}
                  icon={benefit.icon}
                  color='#014CC4'
                  boxSize={{ base: 6, md: 7 }}
                  mt={1}
                  flexShrink={0}
                />

                <Text
                  fontSize={{ base: 'md', md: 'lg' }}
                  color='gray.700'
                  lineHeight='1.6'
                  textAlign='left'
                  flex={1}
                  maxW='600px'
                >
                  <Text as='span' fontWeight='bold' color='gray.800'>
                    {benefit.title}
                  </Text>
                  {' — '}
                  {benefit.description}
                </Text>
              </Flex>
            ))}
          </Stack>

          <Box pt={4}>
            <Button
              onClick={onSubmissionOpen}
              bg='#014CC4'
              color='white'
              fontSize={{ base: 'sm', md: 'md' }}
              px={{ base: 8, md: 10 }}
              h={{ base: '45px', md: '55px' }}
              borderRadius='full'
              boxShadow='lg'
              _hover={{ bg: '#0139A0' }}
            >
              {t.freeSubmission}
            </Button>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
