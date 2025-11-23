import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  Button,
  Link,
  Icon,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from '../i18n';

const sectors = ['Montréal', 'Laval', 'Longueuil', 'Brossard'];

export default function SectorsSection() {
  const { t } = useTranslation();
  return (
    <Box py={{ base: 12, md: 16 }} bg='gray.50' borderRadius='xl'>
      <Container maxW='1440px' px={{ base: 4, md: 6 }}>
        <Stack spacing={8} align='center'>
          <Stack spacing={3} textAlign='center'>
            <Heading
              as='h2'
              fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
              fontWeight='bold'
              color='gray.800'
            >
              {t.sectorsTitle}
            </Heading>
            <Text fontSize={{ base: 'md', md: 'lg' }} color='gray.600'>
              {t.sectorsSubtitle}
            </Text>
          </Stack>

          <SimpleGrid
            columns={{ base: 2, sm: 4 }}
            spacing={6}
            w='100%'
            maxW='700px'
          >
            {sectors.map((sector, index) => (
              <Box
                key={index}
                p={8}
                bg='white'
                borderRadius='2xl'
                textAlign='center'
                border='1px solid'
                borderColor='gray.200'
                cursor='pointer'
              >
                <Stack spacing={4} align='center'>
                  <Icon
                    as={FontAwesomeIcon}
                    icon={faMapMarkerAlt}
                    boxSize={6}
                    color='#014CC4'
                  />
                  <Text
                    fontWeight='700'
                    color='gray.800'
                    fontSize='xl'
                    letterSpacing='-0.02em'
                  >
                    {sector}
                  </Text>
                </Stack>
              </Box>
            ))}
          </SimpleGrid>

          <Link href='/secteurs-desservis' _hover={{ textDecoration: 'none' }}>
            <Button
              rightIcon={<ArrowForwardIcon />}
              variant='outline'
              colorScheme='blue'
              borderColor='#014CC4'
              color='#014CC4'
              borderRadius='full'
              fontSize={{ base: 'sm', md: 'md' }}
              px={{ base: 5, md: 7 }}
              py={{ base: 3, md: 4 }}
              _hover={{ bg: '#014CC4', color: 'white' }}
            >
              {t.viewAllSectors}
            </Button>
          </Link>
        </Stack>
      </Container>
    </Box>
  );
}
