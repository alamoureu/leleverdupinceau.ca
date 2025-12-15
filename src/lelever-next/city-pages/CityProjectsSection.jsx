import React, { useContext } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Flex,
  Icon,
  SimpleGrid,
  Image,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import appContext from '../../AppProvider';

export default function CityProjectsSection({
  cityName,
  projectsContent,
  projectImages,
}) {
  const { currentLang } = useContext(appContext);
  const isFr = currentLang === 'fr';

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
              {isFr
                ? cityName === 'Montréal'
                  ? 'Projets résidentiels, commerciaux et industriels à Montréal'
                  : cityName === 'Laval'
                    ? 'Projets résidentiels, commerciaux et industriels à Laval'
                    : cityName === 'Longueuil'
                      ? 'Exemples de projets résidentiels, commerciaux et industriels'
                      : cityName === 'Brossard'
                        ? 'Exemples de projets réalisés dans la ville de Brossard'
                        : `Exemples de projets réalisés dans la ville de ${cityName}`
                : cityName === 'Montreal'
                  ? 'Residential, commercial and industrial projects in Montreal'
                  : cityName === 'Laval'
                    ? 'Residential, commercial and industrial projects in Laval'
                    : cityName === 'Longueuil'
                      ? 'Examples of residential, commercial and industrial projects'
                      : cityName === 'Brossard'
                        ? 'Examples of projects completed in the city of Brossard'
                        : `Examples of projects completed in the city of ${cityName}`}
            </Heading>
          </Stack>

          <Box maxW='900px'>
            <Stack spacing={8}>
              {projectsContent ? (
                typeof projectsContent === 'string' ? (
                  <Text
                    fontSize={{ base: 'md', md: 'lg' }}
                    color='gray.600'
                    lineHeight='1.7'
                    textAlign='left'
                  >
                    {projectsContent}
                  </Text>
                ) : (
                  <Stack spacing={3}>
                    {projectsContent.map((project, index) => (
                      <Flex
                        key={index}
                        align='start'
                        gap={4}
                        p={4}
                        bg='white'
                        borderRadius='lg'
                        border='1px solid'
                        borderColor='gray.200'
                        _hover={{
                          borderColor: '#014CC4',
                          boxShadow: 'sm',
                          transform: 'translateX(4px)',
                        }}
                        transition='all 0.2s ease'
                      >
                        <Icon
                          as={FontAwesomeIcon}
                          icon={faCheckCircle}
                          color='#014CC4'
                          boxSize={5}
                          mt={0.5}
                          flexShrink={0}
                        />
                        <Text
                          fontSize='md'
                          color='gray.700'
                          lineHeight='1.6'
                          fontWeight='500'
                          textAlign='left'
                        >
                          {project.replace(/^•\s*/, '')}
                        </Text>
                      </Flex>
                    ))}
                  </Stack>
                )
              ) : (
                <Text
                  fontSize={{ base: 'md', md: 'lg' }}
                  color='gray.600'
                  lineHeight='1.7'
                  textAlign='left'
                >
                  {isFr
                    ? `Contenu à compléter avec les projets spécifiques à ${cityName}.`
                    : `Content to be completed with specific projects for ${cityName}.`}
                </Text>
              )}

              {projectImages && projectImages.length > 0 && (
                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6} mt={8}>
                  {projectImages.map((img, index) => (
                    <Box
                      key={index}
                      borderRadius='xl'
                      overflow='hidden'
                      boxShadow='md'
                      _hover={{ transform: 'scale(1.02)' }}
                      transition='all 0.3s ease'
                    >
                      <Image
                        src={img}
                        alt={`Project ${cityName} ${index + 1}`}
                        w='100%'
                        h='250px'
                        objectFit='cover'
                      />
                    </Box>
                  ))}
                </SimpleGrid>
              )}
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
