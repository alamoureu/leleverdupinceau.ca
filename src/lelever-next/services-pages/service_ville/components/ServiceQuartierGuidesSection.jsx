import React, { useContext } from 'react';
import {
  Box,
  Container,
  Heading,
  Stack,
  SimpleGrid,
  Link,
  Text,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import appContext from '../../../../AppProvider';
import commentChoisirPeintre from '../../../images/comment_choisir_un_peintre.jpg';
import prixProjetPeinture from '../../../images/prix_projet_peinture_montreal.jpg';
import erreurEviterProjet from '../../../images/erreur_eviter_projet_peinture.jpg';

// Helper function to get image based on blog href
const getBlogImage = (href) => {
  if (href.includes('comment-choisir')) {
    return commentChoisirPeintre;
  }
  if (href.includes('prix')) {
    return prixProjetPeinture;
  }
  if (href.includes('erreur')) {
    return erreurEviterProjet;
  }
  return null;
};

export default function ServiceQuartierGuidesSection({ title, guides }) {
  const { currentLang } = useContext(appContext);
  const isFr = currentLang === 'fr';

  const defaultTitle = isFr
    ? 'Guides utiles pour les entreprises'
    : 'Useful guides for businesses';

  return (
    <Box py={{ base: 12, md: 16 }} mb={{ base: 8, md: 12 }}>
      <Container maxW='1440px' px={{ base: 4, md: 6 }}>
        <Stack spacing={8}>
          <Stack spacing={3} textAlign='left'>
            <Heading
              as='h2'
              fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
              fontWeight='bold'
              color='gray.800'
            >
              {title || defaultTitle}
            </Heading>
          </Stack>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 4, md: 6 }}>
            {guides.map((guide, index) => {
              const guideImage = guide.image || getBlogImage(guide.href);
              const guideTitle =
                typeof guide.title === 'object'
                  ? guide.title[isFr ? 'fr' : 'en']
                  : guide.title;

              return (
                <Link
                  key={index}
                  href={guide.href}
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
                    _hover={{
                      borderColor: '#014CC4',
                      transform: 'translateY(-2px)',
                      boxShadow: 'md',
                    }}
                    transition='all 0.2s'
                  >
                    {guideImage && (
                      <Box
                        position='relative'
                        overflow='hidden'
                        h='200px'
                        bg='gray.100'
                        bgImage={`url(${guideImage})`}
                        bgSize='cover'
                        bgPosition='center'
                      />
                    )}
                    <Stack p={6} spacing={4} flex={1}>
                      <Text
                        fontWeight='bold'
                        color='gray.800'
                        fontSize='lg'
                        lineHeight='1.4'
                      >
                        {guideTitle}
                      </Text>
                      <Box
                        display='flex'
                        alignItems='center'
                        color='#014CC4'
                        fontWeight='semibold'
                        fontSize='sm'
                        mt='auto'
                      >
                        <Text mr={2}>
                          {isFr ? "Lire l'article" : 'Read article'}
                        </Text>
                        <ArrowForwardIcon boxSize={4} />
                      </Box>
                    </Stack>
                  </Box>
                </Link>
              );
            })}
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
}
