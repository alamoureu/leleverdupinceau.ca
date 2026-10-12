import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  Link,
  Image,
  Button,
  Flex,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { useTranslation } from '../i18n';
import { SECTION_PY, TRUST_BANNER_AIR_SPACE } from '../constants/sectionSpacing';
import commentChoisirPeintre from '../images/5-landing-page/Photo/louis_Consultation.jpeg';
import prixProjetPeinture from '../images/1-page-principale/blog hub/prix-projet-montreal.png';
import erreursEviterImage from '../images/1-page-principale/blog hub/erreurs-eviter-peindre.png';

export default function ResourcesSection({
  title,
  subtitle,
  thirdArticleOverride,
  articles: articlesProp,
  hideButton = false,
  hideSubtitle = false,
  sectionBg = 'white',
  titleAlign = 'center',
  sectionPaddingTop,
  sectionPaddingBottom,
}) {
  const { t } = useTranslation();

  const defaultThird = {
    title: t.article3Title,
    href: '/blog/erreurs-a-eviter-peinture-interieure',
    image: erreursEviterImage,
  };
  const thirdArticle = thirdArticleOverride ?? defaultThird;

  const articles =
    Array.isArray(articlesProp) && articlesProp.length > 0
      ? articlesProp
      : [
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
          thirdArticle,
        ];

  const pt = sectionPaddingTop !== undefined ? sectionPaddingTop : SECTION_PY;
  const pb = sectionPaddingBottom !== undefined ? sectionPaddingBottom : SECTION_PY;

  return (
    <Box pt={pt} pb={pb} bg={sectionBg}>
      <Container maxW="1440px" px={{ base: 4, md: 6 }}>
        <Stack spacing={TRUST_BANNER_AIR_SPACE}>
          <Stack spacing={{ base: 2, md: 3 }} textAlign={titleAlign} maxW="720px" mx={titleAlign === 'center' ? 'auto' : undefined}>
            <Heading as="h2" size="section" color="gray.800">
              {title || t.resourcesTitle}
            </Heading>
            {!hideSubtitle && (
              <Text textStyle="bodyLarge" color="gray.600" lineHeight="1.7">
                {subtitle || t.resourcesSubtitle}
              </Text>
            )}
          </Stack>

          <SimpleGrid
            columns={{ base: 1, md: 3 }}
            spacing={{ base: 4, md: 5, lg: 6 }}
            w="100%"
            maxW={{ base: '100%', md: '1100px', lg: '1200px' }}
            mx="auto"
          >
            {articles.map((article) => (
              <Link
                key={article.href}
                as={RouterLink}
                to={article.href}
                display="block"
                h="100%"
                _hover={{ textDecoration: 'none' }}
                sx={{
                  '&:hover .resource-card': {
                    borderColor: 'var(--chakra-colors-brand-500)',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
                    transform: 'translateY(-2px)',
                  },
                  '&:hover .resource-image': {
                    transform: 'scale(1.04)',
                  },
                  '&:hover .resource-cta': {
                    color: 'var(--chakra-colors-brand-600)',
                  },
                  '&:hover .resource-cta-icon': {
                    transform: 'translateX(2px)',
                  },
                }}
              >
                <Box
                  className="resource-card"
                  bg="white"
                  borderRadius="2xl"
                  overflow="hidden"
                  border="1px solid"
                  borderColor="gray.200"
                  boxShadow="sm"
                  h="100%"
                  display="flex"
                  flexDirection="column"
                  transition="border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease"
                >
                  <Box
                    position="relative"
                    overflow="hidden"
                    h={{ base: '190px', md: '200px' }}
                    bg="gray.100"
                  >
                    <Image
                      className="resource-image"
                      src={article.image}
                      alt={article.title}
                      w="100%"
                      h="100%"
                      objectFit="cover"
                      loading="lazy"
                      decoding="async"
                      htmlWidth={1600}
                      htmlHeight={1067}
                      transition="transform 0.35s ease"
                    />
                  </Box>

                  <Stack p={{ base: 5, md: 6 }} spacing={4} flex={1} justify="space-between">
                    <Text
                      fontWeight="600"
                      color="gray.800"
                      fontSize={{ base: 'md', md: 'lg' }}
                      lineHeight="1.4"
                      noOfLines={2}
                    >
                      {article.title}
                    </Text>
                    <Flex
                      className="resource-cta"
                      align="center"
                      gap={1.5}
                      color="brand.500"
                      fontWeight="semibold"
                      fontSize="sm"
                      transition="color 0.2s ease"
                    >
                      <Text>{t.readArticle}</Text>
                      <ArrowForwardIcon
                        className="resource-cta-icon"
                        boxSize={3}
                        transition="transform 0.2s ease"
                      />
                    </Flex>
                  </Stack>
                </Box>
              </Link>
            ))}
          </SimpleGrid>

          {!hideButton && (
            <Stack align="center" pt={{ base: 2, md: 4 }}>
              <Button
                variant="ctaOutline"
                as={RouterLink}
                to="/blog"
                borderRadius="full"
                textStyle="nav"
                px={{ base: 5, md: 7 }}
                py={{ base: 3, md: 4 }}
                rightIcon={<ArrowForwardIcon />}
              >
                {t.viewAllArticles}
              </Button>
            </Stack>
          )}
        </Stack>
      </Container>
    </Box>
  );
}
