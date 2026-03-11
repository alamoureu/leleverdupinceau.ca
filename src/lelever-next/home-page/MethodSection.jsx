import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Flex,
  Image,
  Button,
} from '@chakra-ui/react';
import { useTranslation } from '../i18n';
import method1 from '../images/new-landing/method-1.jpeg';
import method2 from '../images/new-landing/method-2.jpeg';
import method3 from '../images/new-landing/method-3.PNG';
import method4 from '../images/new-landing/method-4.PNG';

const stepImages = [method1, method2, method3, method4];

export default function MethodSection({ onSubmissionOpen, hideCta = false }) {
  const { t } = useTranslation();
  const titleParts = t.methodTitle.split(', ');
  const hasTwoParts = titleParts.length >= 2;

  const steps = [
    { title: t.methodStep1Title, description: t.methodStep1Desc },
    { title: t.methodStep2Title, description: t.methodStep2Desc },
    { title: t.methodStep3Title, description: t.methodStep3Desc },
    { title: t.methodStep4Title, description: t.methodStep4Desc },
  ];

  return (
    <Box
      py={{ base: 12, md: 16, lg: 20 }}
      bg="white"
    >
      <Container
        maxW="1440px"
        px={{ base: 4, sm: 5, md: 5, lg: 8, xl: 10, '2xl': 12 }}
      >
        <Stack spacing={{ base: 4, sm: 6, md: 6, lg: 8, xl: 10, '2xl': 12 }}>
          <Stack
            spacing={{ base: 1, md: 2 }}
            textAlign="center"
            maxW={{ base: '100%', md: '900px', lg: '1100px', xl: '1200px' }}
            mx="auto"
            mb={{ base: 0, md: 1 }}
          >
            <Heading
              as="h2"
              size="section"
              fontSize={{ base: 'lg', md: '2xl', lg: '3xl' }}
              fontWeight="bold"
              color="gray.800"
              whiteSpace={{ base: 'normal', lg: 'nowrap' }}
            >
              {hasTwoParts ? (
                <>
                  {titleParts[0]},{' '}
                  <Box as="span" display={{ base: 'block', md: 'inline' }}>
                    {titleParts.slice(1).join(', ')}
                  </Box>
                </>
              ) : (
                t.methodTitle
              )}
            </Heading>
            <Text textStyle="bodyLarge" color="gray.600" lineHeight="1.7">
              {t.methodSubtitle}
            </Text>
          </Stack>

          {steps.map((step, index) => {
            const isImageRight = index % 2 === 0;
            const textBlock = (
              <Stack
                flex={{ base: '1 1 0', md: 1 }}
                minW={{ base: '160px', sm: '180px', md: 0 }}
                maxW={{ md: '340px', lg: '420px', xl: '460px' }}
                spacing={{ base: 1, sm: 1, md: 2 }}
                textAlign="left"
                justify="center"
                py={{ base: 2, md: 0 }}
                pr={isImageRight ? { base: 2, sm: 2, md: 2, lg: 3, xl: 4 } : 0}
                pl={
                  isImageRight
                    ? 0
                    : { base: 3, sm: 3, md: 4, lg: 4, xl: 5, '2xl': 6 }
                }
              >
                <Heading
                  as="h3"
                  fontSize={{
                    base: 'sm',
                    sm: 'md',
                    md: 'lg',
                    lg: 'xl',
                    xl: '2xl',
                  }}
                  fontWeight="bold"
                  color="gray.900"
                >
                  {step.title}
                </Heading>
                <Text
                  color="gray.600"
                  fontSize={{ base: 'sm', md: 'sm', lg: 'md' }}
                  lineHeight="1.6"
                  textAlign="left"
                  css={{ hyphens: 'none', wordBreak: 'normal' }}
                >
                  {step.description}
                </Text>
              </Stack>
            );
            const imageBlockWithBadge = (
              <Box
                flex={{ base: '1 1 0', md: 1 }}
                minW={{ base: '90px', sm: '100px', md: 0 }}
                maxW={{ md: '320px', lg: '400px', xl: '440px' }}
                position="relative"
                borderRadius={{ base: 'md', md: 'lg' }}
                boxShadow="0 8px 32px rgba(0,0,0,0.1), 0 2px 8px rgba(0,0,0,0.06)"
                overflow="visible"
                ml={
                  index % 2 === 0 ? { base: 4, sm: 4, md: 5, lg: 6, xl: 8 } : 0
                }
                mr={
                  index % 2 === 1 ? { base: 4, sm: 4, md: 5, lg: 6, xl: 8 } : 0
                }
              >
                <Box
                  position="relative"
                  overflow="hidden"
                  borderRadius={{ base: 'md', md: 'lg' }}
                  h="100%"
                >
                  <Image
                    src={stepImages[index]}
                    alt={step.title}
                    w="100%"
                    h={{
                      base: '140px',
                      sm: '160px',
                      md: '200px',
                      lg: '260px',
                      xl: '320px',
                      '2xl': '360px',
                    }}
                    objectFit="cover"
                    display="block"
                    loading="lazy"
                    decoding="async"
                  />
                </Box>
                <Flex
                  position="absolute"
                  top="50%"
                  left={index % 2 === 0 ? '0' : undefined}
                  right={index % 2 === 1 ? '0' : undefined}
                  transform={
                    index % 2 === 0
                      ? 'translate(-50%, -50%)'
                      : 'translate(50%, -50%)'
                  }
                  zIndex={10}
                  align="center"
                  justify="center"
                  bg="brand.500"
                  color="white"
                  borderRadius="full"
                  w={{
                    base: '44px',
                    sm: '48px',
                    md: '56px',
                    lg: '72px',
                    xl: '80px',
                    '2xl': '88px',
                  }}
                  h={{
                    base: '44px',
                    sm: '48px',
                    md: '56px',
                    lg: '72px',
                    xl: '80px',
                    '2xl': '88px',
                  }}
                  fontWeight="bold"
                  fontSize={{
                    base: 'md',
                    sm: 'lg',
                    md: 'xl',
                    lg: '2xl',
                    xl: '3xl',
                    '2xl': '3xl',
                  }}
                  boxShadow="0 4px 24px rgba(1, 76, 196, 0.45)"
                  pointerEvents="none"
                >
                  {index + 1}
                </Flex>
              </Box>
            );

            return (
              <Flex
                key={index}
                direction="row"
                align="flex-start"
                justify="center"
                gap={{ base: 1, sm: 2, md: 2, lg: 2, xl: 3 }}
                flexWrap="nowrap"
                py={{ base: 2, sm: 2, md: 1 }}
              >
                {isImageRight ? (
                  <>
                    {textBlock}
                    {imageBlockWithBadge}
                  </>
                ) : (
                  <>
                    {imageBlockWithBadge}
                    {textBlock}
                  </>
                )}
              </Flex>
            );
          })}

          {!hideCta && (
            <Stack
              spacing={3}
              align="center"
              pt={{ base: 4, sm: 6, md: 10, lg: 12, xl: 14 }}
              pb={{ base: 2, md: 4 }}
              w="100%"
            >
              <Button
                onClick={onSubmissionOpen}
                bg="brand.500"
                color="white"
                fontSize={{ base: 'lg', sm: 'xl', md: 'xl', lg: '2xl' }}
                fontWeight="semibold"
                px={{ base: 8, sm: 10, md: 12, lg: 14 }}
                py={{ base: 4, sm: 4, md: 5, lg: 6 }}
                h="auto"
                minH={{ base: '52px', sm: '56px', md: '62px', lg: '68px' }}
                w="fit-content"
                borderRadius="full"
                boxShadow="md"
                _hover={{ bg: 'brand.600', boxShadow: 'lg' }}
              >
                {t.freeSubmission}
              </Button>
              <Text
                fontSize={{ base: 'sm', md: 'lg', lg: 'xl' }}
                color="gray.600"
                fontWeight="medium"
              >
                {t.ctaSubtitle}
              </Text>
            </Stack>
          )}
        </Stack>
      </Container>
    </Box>
  );
}
