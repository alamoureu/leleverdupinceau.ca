import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Button,
  SimpleGrid,
  Link,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { useTranslation } from '../i18n';

export default function TeamSection() {
  const { t } = useTranslation();
  return (
    <Box py={{ base: 12, md: 16 }} bg='white'>
      <Container maxW='1440px' px={{ base: 4, md: 6 }}>
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={{ base: 8, md: 12, lg: 16 }}
          align='center'
          mt={{ base: '-55px', md: '0px' }}
        >
          <Box display={{ base: 'none', md: 'block' }}>
            <Box
              borderRadius='lg'
              overflow='hidden'
              border='1px solid'
              borderColor='gray.200'
              bgImage="url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
              bgSize='cover'
              bgPosition='center'
              minH={{ base: '250px', md: '350px' }}
            />
          </Box>

          <Stack spacing={6}>
            <Stack spacing={3}>
              <Heading
                as='h2'
                fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                fontWeight='bold'
                color='gray.800'
              >
                {t.teamTitle}
              </Heading>
            </Stack>

            <Text
              fontSize={{ base: 'md', md: 'lg' }}
              color='gray.600'
              lineHeight='1.7'
            >
              {t.teamDescription}
            </Text>

            <Link
              href='/peintre-professionnel'
              _hover={{ textDecoration: 'none' }}
              w={{ base: '100%', md: 'auto' }}
            >
              <Button
                rightIcon={<ArrowForwardIcon />}
                variant='outline'
                borderColor='#014CC4'
                color='#014CC4'
                borderRadius='full'
                fontSize={{ base: 'xs', sm: 'sm', md: 'md' }}
                px={{ base: 4, sm: 5, md: 7 }}
                py={{ base: 3, md: 4 }}
                w={{ base: '100%', sm: 'auto' }}
                maxW={{ base: '100%', sm: '100%', md: 'none' }}
                whiteSpace='normal'
                wordBreak='break-word'
                _hover={{ bg: '#014CC4', color: 'white' }}
              >
                {t.learnMorePainters}
              </Button>
            </Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
