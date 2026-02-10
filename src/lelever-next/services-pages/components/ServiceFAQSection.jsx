import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';

export default function ServiceFAQSection({ title, faqs, isFr = true }) {
  if (!faqs || faqs.length === 0) {
    return null;
  }

  return (
    <Box py={{ base: 12, md: 16, lg: 20 }} bg="gray.50">
      <Container maxW="1440px" px={{ base: 4, md: 6 }}>
        <Stack spacing={{ base: 8, md: 10 }}>
          <Stack spacing={2} textAlign="center">
            <Heading as="h2" size="section" color="gray.800">
              {title || (isFr ? 'Questions fréquentes' : 'Frequently asked questions')}
            </Heading>
          </Stack>

          <Box maxW="900px" mx="auto" w="100%">
            <Accordion allowToggle>
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  border="none"
                  bg="white"
                  mb={3}
                  borderRadius="lg"
                  overflow="hidden"
                  boxShadow="sm"
                >
                  <AccordionButton
                    py={4}
                    px={6}
                    _hover={{ bg: 'gray.50' }}
                    _expanded={{ bg: 'brand.50', borderBottom: '1px solid', borderColor: 'gray.200' }}
                  >
                    <Box flex="1" textAlign="left">
                      <Text fontWeight="semibold" color="gray.800" fontSize={{ base: 'md', md: 'lg' }}>
                        {faq.question}
                      </Text>
                    </Box>
                    <AccordionIcon color="brand.500" />
                  </AccordionButton>
                  <AccordionPanel pb={4} pt={3} px={6}>
                    <Text color="gray.600" lineHeight="1.7" fontSize={{ base: 'sm', md: 'md' }}>
                      {faq.answer}
                    </Text>
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
