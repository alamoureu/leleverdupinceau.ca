import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  Link,
  Image,
  useBreakpointValue,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { useTranslation } from '../i18n';

export default function ResourcesSection() {
  const { t } = useTranslation();

  const articles = [
    {
      title: t.article1Title,
      href: '/blog/comment-choisir-peintre-professionnel',
      image:
        'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: t.article2Title,
      href: '/blog/prix-projet-peinture-montreal',
      image:
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: t.article3Title,
      href: '/blog/erreurs-eviter-avant-peindre',
      image:
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
  ];
  const columns = useBreakpointValue({ base: 1, md: 3 });

  return (
    <Box py={{ base: 12, md: 16 }} bg='white'>
      <Container maxW='1440px' px={{ base: 4, md: 6 }}>
        <Stack spacing={8}>
          <Stack spacing={3} textAlign='center'>
            <Heading
              as='h2'
              fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
              fontWeight='bold'
              color='gray.800'
            >
              {t.resourcesTitle}
            </Heading>
            <Text fontSize={{ base: 'md', md: 'lg' }} color='gray.600'>
              {t.resourcesSubtitle}
            </Text>
          </Stack>

          <SimpleGrid columns={columns} spacing={6}>
            {articles.map((article, index) => (
              <Link
                key={index}
                href={article.href}
                _hover={{ textDecoration: 'none' }}
              >
                <Box
                  bg='white'
                  borderRadius='xl'
                  overflow='hidden'
                  border='1px solid'
                  borderColor='gray.200'
                  h='100%'
                  display='flex'
                  flexDirection='column'
                >
                  <Box
                    position='relative'
                    overflow='hidden'
                    h='200px'
                    bg='gray.100'
                  >
                    <Image
                      src={article.image}
                      alt={article.title}
                      w='100%'
                      h='100%'
                      objectFit='cover'
                    />
                  </Box>

                  <Stack p={6} spacing={4} flex={1}>
                    <Text
                      fontWeight='bold'
                      color='gray.800'
                      fontSize='lg'
                      lineHeight='1.4'
                      noOfLines={2}
                    >
                      {article.title}
                    </Text>
                    <Box
                      display='flex'
                      alignItems='center'
                      color='#014CC4'
                      fontWeight='semibold'
                      fontSize='sm'
                    >
                      <Text mr={2}>{t.readArticle}</Text>
                      <ArrowForwardIcon boxSize={4} />
                    </Box>
                  </Stack>
                </Box>
              </Link>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
}
