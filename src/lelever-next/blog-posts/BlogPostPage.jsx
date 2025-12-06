import React, { Fragment, useContext } from 'react';
import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Link,
} from '@chakra-ui/react';
import appContext from '../../AppProvider';
import BlogPostContent from './components/BlogPostContent';

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
      })
    ),
  };

  // Build schema with language-specific content
  const buildSchema = () => {
    const lang = isFr ? 'fr' : 'en';
    const schema = { ...blogData.schema };

    // Handle different schema structures
    if (schema['@graph']) {
      // Handle graph structure (like prixPeintureMontrealData)
      return schema;
    } else {
      // Handle single object structure (like commentChoisirPeintreProfessionnelData)
      const blogSchema = {
        ...schema,
        headline: schema.headline?.[lang] || schema.headline,
        description: schema.description?.[lang] || schema.description,
      };

      if (schema.faqSchema) {
        // Handle FAQ schema separately
        const faqSchema = {
          ...schema.faqSchema,
          mainEntity: schema.faqSchema.mainEntity.map((item) => ({
            ...item,
            name: item.name?.[lang] || item.name,
            acceptedAnswer: {
              ...item.acceptedAnswer,
              text: item.acceptedAnswer.text?.[lang] || item.acceptedAnswer.text,
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
          name='description'
          content={blogData.seo.metaDescription[isFr ? 'fr' : 'en']}
        />
        <link rel='canonical' href={blogData.url} />
        <meta name='robots' content='noindex, nofollow' />
        <meta name='googlebot' content='noindex, nofollow' />
        <script type='application/ld+json'>
          {JSON.stringify(breadcrumbSchema)}
        </script>
        {schemas.blogSchema && (
          <script type='application/ld+json'>
            {JSON.stringify(schemas.blogSchema)}
          </script>
        )}
        {schemas.faqSchema && (
          <script type='application/ld+json'>
            {JSON.stringify(schemas.faqSchema)}
          </script>
        )}
        {schemas['@graph'] && (
          <script type='application/ld+json'>
            {JSON.stringify(schemas)}
          </script>
        )}
      </Helmet>

      <Box w='100%' bg='white' overflowX='hidden'>
        <Container
          maxW='1440px'
          px={{ base: 4, md: 6 }}
          pt={{ base: 8, md: 12 }}
        >
          <Stack spacing={0}>
            {/* Breadcrumb */}
            <Box
              fontSize={{ base: 'md', md: 'lg' }}
              color='gray.600'
              mb={{ base: 4, md: 6 }}
              display='flex'
              flexWrap='wrap'
              alignItems='center'
              gap={2}
            >
              {blogData.breadcrumb[isFr ? 'fr' : 'en'].map((item, index) => (
                <Fragment key={index}>
                  {index > 0 && (
                    <Text
                      fontSize={{ base: 'md', md: 'lg' }}
                      whiteSpace='nowrap'
                      mx={1}
                    >
                      ›
                    </Text>
                  )}
                  {index < blogData.breadcrumb[isFr ? 'fr' : 'en'].length - 1 ? (
                    <Link
                      href={
                        index === 0
                          ? '/new-home'
                          : index === 1
                          ? '/blog'
                          : '#'
                      }
                      _hover={{ textDecoration: 'underline' }}
                      color='gray.600'
                      fontSize={{ base: 'md', md: 'lg' }}
                      whiteSpace='nowrap'
                    >
                      {item}
                    </Link>
                  ) : (
                    <Text
                      color='gray.800'
                      fontWeight='medium'
                      fontSize={{ base: 'md', md: 'lg' }}
                      whiteSpace='nowrap'
                    >
                      {item}
                    </Text>
                  )}
                </Fragment>
              ))}
            </Box>

            {/* H1 */}
            <Heading
              as='h1'
              fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
              fontWeight='bold'
              color='gray.800'
              mb={{ base: 6, md: 8 }}
              lineHeight='1.2'
            >
              {blogData.h1[isFr ? 'fr' : 'en']}
            </Heading>

            {/* Introduction */}
            <Text
              fontSize={{ base: 'md', md: 'lg' }}
              color='gray.600'
              lineHeight='1.7'
              mb={{ base: 8, md: 10 }}
              whiteSpace='pre-line'
            >
              {blogData.introduction[isFr ? 'fr' : 'en']}
            </Text>

            {/* Content */}
            <Box
              maxW='900px'
              mx='auto'
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

        {/* CTA Section - Full Width */}
        <Box
          w='100%'
          py={{ base: 10, md: 12 }}
          bg='#014CC4'
          mt={{ base: 8, md: 10 }}
        >
          <Container maxW='1440px' px={{ base: 4, md: 6 }}>
            <Stack spacing={6} textAlign='center'>
              <Stack spacing={3}>
                <Heading
                  as='h2'
                  fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                  fontWeight='bold'
                  color='white'
                >
                  {isFr
                    ? 'Prêt à discuter de votre projet ?'
                    : 'Ready to discuss your project?'}
                </Heading>
                <Text
                  fontSize={{ base: 'md', md: 'lg' }}
                  color='whiteAlpha.900'
                  maxW='800px'
                  mx='auto'
                >
                  {isFr
                    ? 'Demandez votre soumission gratuite dès maintenant.'
                    : 'Request your free quote now.'}
                </Text>
              </Stack>
              <Box>
                <Link
                  href='/new-contact'
                  _hover={{ textDecoration: 'none' }}
                >
                  <Box
                    as='button'
                    bg='white'
                    color='#014CC4'
                    borderRadius='full'
                    fontSize={{ base: 'sm', md: 'md' }}
                    px={{ base: 5, md: 7 }}
                    py={{ base: 3, md: 4 }}
                    _hover={{ bg: 'gray.100' }}
                    fontWeight='semibold'
                  >
                    {isFr ? 'Soumission gratuite' : 'Free quote'}
                  </Box>
                </Link>
              </Box>
            </Stack>
          </Container>
        </Box>
      </Box>
    </Fragment>
  );
}

