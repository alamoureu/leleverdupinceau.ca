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
  faShield,
  faClock,
  faCheckCircle,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from '../i18n';
import peintureProfessionnelleImg from '../images/peinture_pro.jpg';

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
    <Box py={{ base: 12, md: 16 }} bg='white'>
      <Container maxW='1440px' px={{ base: 4, md: 6 }}>
        <Heading
          as='h2'
          fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
          fontWeight='bold'
          color='gray.800'
          mb={{ base: 8, md: 10 }}
          textAlign='center'
        >
          {t.whyUsTitle}
        </Heading>

        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, lg: 12 }}
          alignItems='center'
        >
          {/* Left Column - Text Content */}
          <Stack spacing={{ base: 4, md: 6 }}>
            {benefits.map((benefit, index) => (
              <Flex
                key={index}
                direction='row'
                align='start'
                gap={4}
              >
                {benefit.hasCheck ? (
                  <Box position='relative' flexShrink={0}>
                    <Icon
                      as={FontAwesomeIcon}
                      icon={faClock}
                      color='#014CC4'
                      boxSize={{ base: 6, md: 7 }}
                      mt={1}
                    />
                    <Icon
                      as={FontAwesomeIcon}
                      icon={faCheckCircle}
                      color='#014CC4'
                      boxSize={{ base: 3, md: 4 }}
                      position='absolute'
                      bottom='-2px'
                      right='-2px'
                    />
                  </Box>
                ) : (
                  <Icon
                    as={FontAwesomeIcon}
                    icon={benefit.icon}
                    color='#014CC4'
                    boxSize={{ base: 6, md: 7 }}
                    mt={1}
                    flexShrink={0}
                  />
                )}

                <Text
                  fontSize={{ base: 'md', md: 'lg' }}
                  color='gray.700'
                  lineHeight='1.6'
                  textAlign='left'
                  flex={1}
                >
                  <Text as='span' fontWeight='bold' color='gray.800'>
                    {benefit.title}
                  </Text>
                  {' — '}
                  {benefit.description}
                </Text>
              </Flex>
            ))}

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
                w={{ base: '100%', md: 'auto' }}
              >
                {t.freeSubmission}
              </Button>
            </Box>
          </Stack>

          {/* Right Column - Image */}
          <Box
            borderRadius='xl'
            overflow='hidden'
            boxShadow='lg'
            order={{ base: -1, lg: 0 }}
          >
            <Image
              src={peintureProfessionnelleImg}
              alt='Professional painting service'
              w='100%'
              h='auto'
              objectFit='cover'
            />
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
