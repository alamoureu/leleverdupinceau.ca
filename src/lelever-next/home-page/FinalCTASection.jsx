import React from 'react';
import {
  Box,
  Container,
  Heading,
  Stack,
  Button,
  Text,
  Icon,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { useTranslation } from '../i18n';

export default function FinalCTASection({
  onSubmissionOpen,
  title,
  subtitle,
  buttonText,
}) {
  const { t } = useTranslation();

  return (
    <Box
      w='100%'
      py={{ base: 16, md: 24 }}
      bg='#022A68' // Deep Navy Blue for premium feel
      position='relative'
      overflow='hidden'
    >
      <Container maxW='1000px' px={{ base: 4, md: 6 }} position='relative' zIndex={1}>
        <Stack spacing={{ base: 8, md: 10 }} align='center' textAlign='center'>
          <Stack spacing={4}>
            <Heading
              as='h2'
              fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
              fontWeight='800' // Extra bold
              color='white'
              letterSpacing='tight'
              lineHeight='1.1'
            >
              {title || t.ctaTitle}
            </Heading>
            {subtitle && (
              <Text
                fontSize={{ base: 'lg', md: 'xl' }}
                color='gray.200'
                maxW='700px'
                mx='auto'
                lineHeight='1.6'
              >
                {subtitle}
              </Text>
            )}
          </Stack>

          <Button
            rightIcon={<ArrowForwardIcon />}
            bg='white'
            color='#022A68'
            onClick={onSubmissionOpen}
            fontSize={{ base: 'md', md: 'lg' }}
            px={{ base: 10, md: 12 }}
            py={{ base: 7, md: 8 }}
            fontWeight='bold' // Bold text
            borderRadius='full'
            _hover={{
              bg: 'gray.100',
              transform: 'translateY(-2px)',
              boxShadow: 'xl',
            }}
            transition='all 0.2s cubic-bezier(0.4, 0, 0.2, 1)'
            boxShadow='lg'
          >
            {buttonText || t.ctaButton}
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
