import React, { Fragment, useContext } from 'react';
import { Helmet } from 'react-helmet';
import { Box, Container, Heading, Text, Stack } from '@chakra-ui/react';
import appContext from '../../AppProvider';
import BlogPostContent from './components/BlogPostContent';
import HeroBreadcrumb from '../components/HeroBreadcrumb';
import FinalCTASection from '../home-page/FinalCTASection';

export default function BlogPostPage({ blogData }) {
  const { currentLang } = useContext(appContext);
  const isFr = currentLang === 'fr';

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: blogData.breadcrumb[isFr ? 'fr' : 'en'].map(
      (item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item,
        item:
          index === 0
            ? 'https://leleverdupinceau.ca/'
            : index === 1
              ? 'https://leleverdupinceau.ca/blog'
              : blogData.url,
      }),
    ),
  };

  const buildSchema = () => {
    const lang = isFr ? 'fr' : 'en';
    const schema = { ...blogData.schema };

    if (schema['@graph']) {
      return schema;
    } else {
      const blogSchema = {
        ...schema,
        headline: schema.headline?.[lang] || schema.headline,
        description: schema.description?.[lang] || schema.description,
      };

      if (schema.faqSchema) {
        const faqSchema = {
          ...schema.faqSchema,
          mainEntity: schema.faqSchema.mainEntity.map((item) => ({
            ...item,
            name: item.name?.[lang] || item.name,
            acceptedAnswer: {
              ...item.acceptedAnswer,
              text:
                item.acceptedAnswer.text?.[lang] || item.acceptedAnswer.text,
            },
          })),
        };
        return { blogSchema, faqSchema, breadcrumbSchema };
      }

      return { blogSchema, breadcrumbSchema };
    }
  };

  const schemas = buildSchema();

  return (
    <Fragment>
      <Helmet>
        <title>
          {blogData.seo.title[isFr ? 'fr' : 'en']} | Le Lever du Pinceau
        </title>
        <meta
          name="description"
          content={blogData.seo.metaDescription[isFr ? 'fr' : 'en']}
        />
        <link rel="canonical" href={blogData.url} />
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        {schemas.blogSchema && (
          <script type="application/ld+json">
            {JSON.stringify(schemas.blogSchema)}
          </script>
        )}
        {schemas.faqSchema && (
          <script type="application/ld+json">
            {JSON.stringify(schemas.faqSchema)}
          </script>
        )}
        {schemas['@graph'] && (
          <script type="application/ld+json">{JSON.stringify(schemas)}</script>
        )}
      </Helmet>

      <Box w="100%" bg="white" overflowX="hidden">
        <Container
          maxW="1440px"
          px={{ base: 4, md: 6 }}
          pt={{ base: 12, md: 16, lg: 20 }}
        >
          <Stack spacing={0}>
            <HeroBreadcrumb
              variant="page"
              mb={{ base: 4, md: 6 }}
              items={blogData.breadcrumb[isFr ? 'fr' : 'en'].map((item, index, arr) => ({
                label: item,
                ...(index < arr.length - 1
                  ? { href: index === 0 ? '/' : index === 1 ? '/blog' : '#' }
                  : {}),
              }))}
            />

            <Box mb={{ base: 8, md: 10 }} maxW={{ base: '100%', md: '880px', lg: '960px' }}>
              <Heading
                as="h1"
                fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                fontWeight="bold"
                color="gray.800"
                mb={{ base: 6, md: 8 }}
                lineHeight="1.2"
              >
                {blogData.h1[isFr ? 'fr' : 'en']}
              </Heading>

              <Text
                fontSize={{ base: 'md', md: 'lg' }}
                color="gray.600"
                lineHeight="1.7"
                whiteSpace="pre-line"
              >
                {blogData.introduction[isFr ? 'fr' : 'en']}
              </Text>
              <Box mt={6} pt={6} borderTopWidth="1px" borderColor="gray.200">
                <Text fontWeight="semibold" color="gray.800" fontSize={{ base: 'md', md: 'lg' }}>
                  Philippe Beaudoin
                </Text>
                <Text fontSize={{ base: 'sm', md: 'md' }} color="gray.600" lineHeight="1.5">
                  {isFr
                    ? 'Entrepreneur en peinture résidentielle et commerciale à Montréal, licencié RBQ et CCQ'
                    : 'Residential and commercial painting entrepreneur in Montreal, RBQ and CCQ licensed'}
                </Text>
              </Box>
            </Box>

            <Box
              mb={{ base: 10, md: 12 }}
              sx={{
                '& h2': {
                  scrollMarginTop: '80px',
                },
                '& h3': {
                  scrollMarginTop: '80px',
                },
              }}
            >
              <BlogPostContent
                content={blogData.content}
                isFr={isFr}
                blogSlug={blogData.slug}
              />
            </Box>
          </Stack>
        </Container>

        <FinalCTASection
          title={isFr ? 'Prêt à discuter de votre projet ?' : 'Ready to discuss your project?'}
          subtitle={isFr ? 'Demandez votre soumission gratuite dès maintenant.' : 'Request your free quote now.'}
        />
      </Box>
    </Fragment>
  );
}
