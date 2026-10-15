import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Flex,
  Icon,
} from '@chakra-ui/react';
import { SECTION_PY, TRUST_BANNER_AIR_SPACE } from '../../constants/sectionSpacing';
import { FaCheckCircle } from 'react-icons/fa';

export default function ServiceWhyUsSection({
  title,
  subtitle,
  content,
  introText,
  outroText,
  children,
  centered = false,
  pt = SECTION_PY,
  pb = SECTION_PY,
  ...rest
}) {
  return (
    <Box pt={pt} pb={pb} bg='gray.50' w='100%' {...rest}>
      <Container maxW='1440px' px={{ base: 4, md: 6 }}>
        <Stack
          spacing={TRUST_BANNER_AIR_SPACE}
          align={centered ? 'center' : 'stretch'}
          maxW={centered ? '900px' : undefined}
          mx={centered ? 'auto' : undefined}
        >
          <Stack spacing={3} textAlign='left' w='100%'>
            <Heading
              as='h2'
              fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
              fontWeight='bold'
              color='gray.800'
            >
              {title}
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

          {content ? (
            typeof content === 'string' ? (
              <Text
                fontSize={{ base: 'md', md: 'lg' }}
                color='gray.600'
                lineHeight='1.7'
                textAlign='left'
                w='100%'
              >
                {content}
              </Text>
            ) : Array.isArray(content) ? (
              <Stack spacing={3} w='100%'>
                {introText && (
                  <Text
                    fontSize={{ base: 'md', md: 'lg' }}
                    color='gray.600'
                    lineHeight='1.7'
                    textAlign='left'
                    mb={2}
                  >
                    {introText}
                  </Text>
                )}
                {content.map((item, index) => (
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
                      borderColor: 'brand.500',
                      boxShadow: 'sm',
                      transform: 'translateX(4px)',
                    }}
                    transition='all 0.2s ease'
                  >
                    <Icon as={FaCheckCircle}
                      color='brand.500'
                      boxSize={5}
                      mt={0.5}
                      flexShrink={0}
                    />
                    <Text
                      fontSize={{ base: 'sm', md: 'md' }}
                      color='gray.700'
                      lineHeight='1.6'
                      fontWeight='500'
                      textAlign='left'
                    >
                      {item.replace(/^•\s*/, '')}
                    </Text>
                  </Flex>
                ))}
                {outroText && (
                  <Text
                    fontSize={{ base: 'md', md: 'lg' }}
                    color='gray.600'
                    lineHeight='1.7'
                    textAlign='left'
                    mt={4}
                  >
                    {outroText}
                  </Text>
                )}
              </Stack>
            ) : null
          ) : null}

          {children}
        </Stack>
      </Container>
    </Box>
  );
}
