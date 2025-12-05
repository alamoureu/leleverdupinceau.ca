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
import appContext from '../../../../AppProvider';

export default function ServiceQuartierAboutSection({
  title,
  description,
  buttonText,
  buttonLink,
}) {
  const { currentLang } = useContext(appContext);
  const isFr = currentLang === 'fr';

  const defaultTitle = isFr
    ? 'Des peintres professionnels actifs'
    : 'Active professional painters';

  const defaultButtonText = isFr
    ? 'En savoir plus sur nos peintres professionnels'
    : 'Learn more about our professional painters';

  return (
    <Box
      py={{ base: 12, md: 16 }}
      bg='gray.50'
      borderRadius='xl'
      mb={{ base: 8, md: 12 }}
    >
      <Container maxW='1440px' px={{ base: 4, md: 6 }}>
        <Stack spacing={6} textAlign='left'>
          <Heading
            as='h2'
            fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
            fontWeight='bold'
            color='gray.800'
          >
            {title || defaultTitle}
          </Heading>
          {description && (
            <Text
              fontSize={{ base: 'md', md: 'lg' }}
              color='gray.600'
              lineHeight='1.7'
            >
              {description}
            </Text>
          )}
          <Link
            href={buttonLink || '/peintre-professionnel'}
            _hover={{ textDecoration: 'none' }}
            w={{ base: '100%', md: 'auto' }}
          >
            <Button
              rightIcon={<ArrowForwardIcon />}
              variant='outline'
              borderColor='#014CC4'
              color='#014CC4'
              borderRadius='full'
              fontSize={{ base: 'sm', md: 'md' }}
              px={{ base: 5, md: 7 }}
              py={{ base: 3, md: 4 }}
              _hover={{ bg: '#014CC4', color: 'white' }}
              whiteSpace='normal'
              textAlign='center'
              lineHeight='1.4'
              h='auto'
              minH='48px'
            >
              {buttonText || defaultButtonText}
            </Button>
          </Link>
        </Stack>
      </Container>
    </Box>
  );
}

