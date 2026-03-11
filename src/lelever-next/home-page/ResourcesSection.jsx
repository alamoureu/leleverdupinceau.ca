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
import commentChoisirPeintre from '../images/5-landing-page/Photo/louis_Consultation.jpeg';
import prixProjetPeinture from '../images/1-page-principale/blog hub/prix-projet-montreal.png';
import peindreArmoiresCuisine from '../images/IMG_5873.PNG';

export default function ResourcesSection({ title, subtitle, excludeSlugs = [] }) {
  const { t } = useTranslation();

  const articles = [
    {
      title: t.article2Title,
      href: '/blog/prix-peinture-montreal',
      image: prixProjetPeinture,
    },
    {
      title: t.article1Title,
      href: '/blog/comment-choisir-un-peintre-professionnel',
      image: commentChoisirPeintre,
    },
    {
      title: t.article3Title,
      href: '/blog/peindre-armoires-cuisine',
      image: peindreArmoiresCuisine,
    },
  ].filter((article) => !excludeSlugs.includes(article.href));
  const columns = useBreakpointValue({ base: 1, md: 3 });

  return (
    <Box py={{ base: 12, md: 16, lg: 20 }} bg='white'>
      <Container maxW='1440px' px={{ base: 4, md: 6 }}>
        <Stack spacing={8}>
          <Stack spacing={{ base: 2, md: 3 }} textAlign='center'>
            <Heading as='h2' size='section' fontWeight='bold' color='gray.800' lineHeight='1.3'>
              {title || t.resourcesTitle}
            </Heading>
            <Text textStyle='bodyLarge' color='gray.600' lineHeight='1.7'>
              {subtitle || t.resourcesSubtitle}
            </Text>
          </Stack>

          <SimpleGrid columns={columns} spacing={{ base: 4, md: 5, lg: 6 }}>
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
                      loading="lazy"
                      decoding="async"
                    />
                  </Box>

                  <Stack p={6} spacing={4} flex={1}>
                    <Text fontWeight='bold' color='gray.800' textStyle='bodyLarge' lineHeight='1.5' letterSpacing='-0.01em' mb={{ base: 2, md: 3 }} noOfLines={2}>
                      {article.title}
                    </Text>
                    <Box display='flex' alignItems='center' color='brand.500' fontWeight='semibold' textStyle='caption'>
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
