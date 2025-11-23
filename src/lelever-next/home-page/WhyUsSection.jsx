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
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={{ base: 8, md: 12, lg: 16 }}
        >
          <Stack spacing={{ base: 8, md: 10, lg: 12 }}>
            <Heading
              as='h2'
              fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
              fontWeight='bold'
              color='gray.800'
              mb={4}
            >
              {t.whyUsTitle}
            </Heading>

            <Stack spacing={{ base: 8, md: 10 }}>
              {benefits.map((benefit, index) => (
                <Flex key={index} direction='row' align='start' gap={4}>
                  <Icon
                    as={FontAwesomeIcon}
                    icon={benefit.icon}
                    color='#014CC4'
                    boxSize={{ base: 7, md: 8 }}
                    mt={1}
                    flexShrink={0}
                  />

                  <Stack spacing={2} flex={1}>
                    <Heading
                      as='h3'
                      fontSize={{ base: 'lg', md: 'xl' }}
                      fontWeight='bold'
                      color='gray.800'
                    >
                      {benefit.title}
                    </Heading>
                    <Text
                      fontSize={{ base: 'sm', md: 'md' }}
                      color='gray.600'
                      lineHeight='1.6'
                    >
                      {benefit.description}
                    </Text>
                  </Stack>
                </Flex>
              ))}
            </Stack>

            <Button
              onClick={onSubmissionOpen}
              bg='#014CC4'
              color='white'
              fontSize={{ base: 'sm', md: 'md', lg: 'lg', xl: 'xl' }}
              px={{ base: 8, md: 10 }}
              h={{ base: '40px', md: '55px', lg: '70px', xl: '80px' }}
              w={{ base: '200px', md: '325px', lg: '365px', xl: '375px' }}
              borderRadius='full'
              boxShadow='lg'
              _hover={{ bg: '#0139A0' }}
            >
              {t.freeSubmission}
            </Button>
          </Stack>

          <Box>
            <Image
              src='https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&q=80'
              alt={t.professionalPainterAlt}
              borderRadius='lg'
              w='100%'
              h={{ base: '300px', md: '400px', lg: '500px' }}
              objectFit='cover'
              border='1px solid'
              borderColor='gray.200'
            />
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
