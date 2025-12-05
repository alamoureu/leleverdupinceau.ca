import React, { useContext } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Link,
  Button,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import appContext from '../../../AppProvider';

export default function ServiceCTASection({ title, description, buttonText }) {
  const { currentLang } = useContext(appContext);
  const isFr = currentLang === 'fr';

  const defaultTitle = isFr
    ? 'Obtenez votre soumission gratuite'
    : 'Get your free quote';

  const defaultDescription = isFr
    ? 'Nos équipes sont disponibles rapidement pour tous vos projets de peinture.'
    : 'Our teams are quickly available for all your painting projects.';

  const defaultButtonText = isFr ? 'Soumission gratuite' : 'Free quote';

  return (
    <Box
      w='100%'
      py={{ base: 12, md: 16 }}
      bg='#014CC4'
      mt={{ base: 8, md: 12 }}
    >
      <Container maxW='1440px' px={{ base: 4, md: 6 }}>
        <Stack spacing={8} textAlign='center'>
          <Stack spacing={3}>
            <Heading
              as='h2'
              fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
              fontWeight='bold'
              color='white'
            >
              {title || defaultTitle}
            </Heading>
            <Text
              fontSize={{ base: 'md', md: 'lg' }}
              color='whiteAlpha.900'
              maxW='800px'
              mx='auto'
            >
              {description || defaultDescription}
            </Text>
          </Stack>

          <Box>
            <Link href='/contact' _hover={{ textDecoration: 'none' }}>
              <Button
                rightIcon={<ArrowForwardIcon />}
                bg='white'
                color='#014CC4'
                borderRadius='full'
                fontSize={{ base: 'sm', md: 'md' }}
                px={{ base: 5, md: 7 }}
                py={{ base: 3, md: 4 }}
                _hover={{ bg: 'gray.100' }}
                size='lg'
              >
                {buttonText || defaultButtonText}
              </Button>
            </Link>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
