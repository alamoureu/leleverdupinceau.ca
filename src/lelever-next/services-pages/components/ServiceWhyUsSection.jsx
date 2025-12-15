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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

export default function ServiceWhyUsSection({
  title,
  subtitle,
  content,
  introText,
  outroText,
  ...rest
}) {
  return (
    <Box
      py={{ base: 12, md: 16 }}
      bg='gray.50'
      borderRadius='xl'
      mb={{ base: 8, md: 12 }}
      {...rest}
    >
      <Container maxW='1440px' px={{ base: 4, md: 6 }}>
        <Stack spacing={8}>
          <Stack spacing={3} textAlign='left'>
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
              >
                {content}
              </Text>
            ) : (
              <Stack spacing={3}>
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
            )
          ) : null}
        </Stack>
      </Container>
    </Box>
  );
}
