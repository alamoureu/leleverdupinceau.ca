import React, { useContext } from 'react';
import {
  Box,
  Container,
  Heading,
  Stack,
  Flex,
  Link,
  Text,
  HStack,
  Image,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import appContext from '../../../AppProvider';

export default function ServiceSubServicesSection({
  title,
  subtitle,
  subServices,
}) {
  const { currentLang } = useContext(appContext);
  const isFr = currentLang === 'fr';

  const defaultTitle = isFr
    ? 'Sous-services disponibles'
    : 'Available sub-services';

  return (
    <Box py={{ base: 12, md: 16, lg: 20 }}>
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
            {subtitle && (
              <Text
                fontSize={{ base: 'md', md: 'lg' }}
                color='gray.600'
                lineHeight='1.7'
              >
                {subtitle}
              </Text>
            )}
          </Stack>

          <Flex
            flexWrap='wrap'
            justify='center'
            gap={{ base: 6, md: 8 }}
            mx='auto'
          >
            {subServices.map((service, index) => (
              <Link
                key={index}
                href={service.link}
                _hover={{ textDecoration: 'none' }}
                w={{ base: '100%', md: '380px' }}
                maxW={{ base: '100%', md: '420px' }}
                display='flex'
              >
                <Box
                  bg='white'
                  borderRadius='xl'
                  border='1px solid'
                  borderColor='gray.200'
                  w='100%'
                  display='flex'
                  flexDirection='column'
                  boxShadow='sm'
                  overflow='hidden'
                  _hover={{
                    borderColor: 'brand.500',
                    transform: 'translateY(-2px)',
                    boxShadow: 'md',
                  }}
                  transition='all 0.2s'
                >
                  {service.image ? (
                    <Box
                      as='span'
                      display='block'
                      w='100%'
                      h={{ base: '200px', md: '220px', lg: '240px' }}
                      flexShrink={0}
                      overflow='hidden'
                    >
                      <Image
                        src={service.image}
                        alt={service.title}
                        w='100%'
                        h='100%'
                        objectFit='cover'
                        objectPosition='center'
                      />
                    </Box>
                  ) : null}
                  <Stack
                    spacing={3}
                    flex={1}
                    p={{ base: 5, md: 6 }}
                    textAlign='left'
                    align='flex-start'
                  >
                    <Heading
                      as='h3'
                      fontSize={{ base: 'lg', md: 'xl' }}
                      fontWeight='bold'
                      color='gray.800'
                    >
                      {service.title}
                    </Heading>
                    {service.description && (
                      <Text color='gray.600' fontSize={{ base: 'sm', md: 'md' }} lineHeight='1.6'>
                        {service.description}
                      </Text>
                    )}
                    <HStack spacing={2} color='brand.500' pt={1}>
                      <Text fontSize={{ base: 'xs', md: 'sm' }} fontWeight='medium'>
                        {service.linkText ||
                          (isFr ? 'Voir la page' : 'View page')}
                      </Text>
                      <ArrowForwardIcon boxSize={4} />
                    </HStack>
                  </Stack>
                </Box>
              </Link>
            ))}
          </Flex>
        </Stack>
      </Container>
    </Box>
  );
}
