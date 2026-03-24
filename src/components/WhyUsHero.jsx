import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { FaStar } from 'react-icons/fa6';
import { useTranslation } from '../lelever-next/i18n';

const DEFAULT_SECTION_PY = {
  base: 5,
  sm: 6,
  md: 8,
  lg: 9,
  xl: 8,
  '2xl': 8,
};
const DEFAULT_SECTION_PB = { base: 18, md: 22, lg: 26 };

export default function WhyUsHero({
  onSubmissionOpen,
  sectionPy,
  sectionPt,
  sectionPb,
}) {
  const { t } = useTranslation();
  const pt =
    sectionPt !== undefined
      ? sectionPt
      : sectionPy !== undefined
        ? sectionPy
        : DEFAULT_SECTION_PY;
  const pb =
    sectionPb !== undefined
      ? sectionPb
      : sectionPy !== undefined
        ? sectionPy
        : DEFAULT_SECTION_PB;

  return (
    <Box
      bg="white"
      mt={{
        base: '-1rem',
        sm: '-1.125rem',
        md: '-0.75rem',
        lg: '-1rem',
        xl: 'calc(-1 * min(14vh, 8.5rem))',
        '2xl': 'calc(-1 * min(16vh, 9.5rem))',
      }}
      pt={pt}
      pb={pb}
      color="gray.700"
    >
      <Container maxW="1440px" px={{ base: 4, md: 6 }}>
        <Stack spacing={{ base: 2, md: 8 }} align="center" textAlign="center">
          <Stack spacing={{ base: 2, md: 6 }} maxW="720px">
            <Text
              fontSize={{ base: 'sm', md: 'lg' }}
              fontWeight="semibold"
              fontStyle="italic"
              color="#53514E"
            >
              {t.whyUsAddValue}
              <br />
              <Box as="span" fontWeight="normal" fontStyle="normal">
                {t.whyUsAddValueSub}
              </Box>
            </Text>

            <Heading
              as="h2"
              size="section"
              fontWeight="bold"
              color="gray.800"
              lineHeight={{ base: '1.2', md: '1.3' }}
            >
              {t.whyUsChooseTitle}
            </Heading>
            <Text
              fontSize={{ base: 'sm', md: 'lg' }}
              color="gray.600"
              sx={{ textWrap: 'balance' }}
            >
              {t.whyUsChooseSub}
            </Text>
          </Stack>

          <Flex
            justify="center"
            align="center"
            gap={{ base: 3, md: 10, lg: 12 }}
            direction={{ base: 'column', md: 'row' }}
            pt={{ base: 0, md: 3 }}
            w="100%"
          >
            <Box textAlign="center" minW={{ md: '180px' }}>
              <Text
                fontSize={{ base: '3xl', md: '4xl' }}
                fontWeight="bold"
                color="#53514E"
              >
                800+
              </Text>
              <Text fontSize={{ base: 'sm', md: 'md' }} color="gray.600">
                {t.whyUsClients}
              </Text>
            </Box>

            <Box textAlign="center" minW={{ md: '220px' }}>
              <Text
                fontSize={{ base: '3xl', md: '4xl' }}
                fontWeight="bold"
                color="#53514E"
              >
                4.9+
              </Text>
              <Flex justify="center" align="center" mb="1" mt="0">
                {[...Array(5)].map((_, i) => (
                  <Icon as={FaStar} key={i} color="#FBBC04" boxSize="4" />
                ))}
              </Flex>
              <Box
                display="flex"
                flexDir="row"
                justifyContent="center"
                alignItems="center"
                gap={1}
              >
                <Text fontSize={{ base: 'sm', md: 'md' }} color="gray.600">
                  {t.whyUsRated}
                </Text>
                <Image
                  loading="lazy"
                  decoding="async"
                  src="https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/images+(1).png"
                  mt="2px"
                  h="20px"
                  _hover={{ cursor: 'pointer', textDecor: 'underline' }}
                  onClick={() =>
                    window.open('https://g.co/kgs/b5mg4aP', '_blank')
                  }
                />
              </Box>
            </Box>

            <Box textAlign="center" minW={{ md: '200px' }}>
              <Text
                fontSize={{ base: '3xl', md: '4xl' }}
                fontWeight="bold"
                color="#53514E"
              >
                100%
              </Text>
              <Text fontSize={{ base: 'sm', md: 'md' }} color="gray.600">
                {t.whyUsSatisfaction}
              </Text>
            </Box>
          </Flex>

          <Stack
            spacing={{ base: 2, md: 5 }}
            align="center"
            pt={{ base: 1, md: 6 }}
            w="100%"
          >
            <Box
              position="relative"
              w={{
                base: 'min(72%, 300px)',
                sm: 'min(100%, 340px)',
                md: 'min(100%, 400px)',
              }}
              maxW={{ base: '300px', sm: '360px', md: '420px' }}
            >
              <Button
                bg="brand.500"
                textColor="white"
                _hover={{ bg: 'brand.600' }}
                size="lg"
                fontSize={{ base: 'md', sm: 'lg', md: 'xl' }}
                fontWeight="bold"
                px={{ base: 3, sm: 4, md: 5 }}
                py={{ base: 5, sm: 6, md: 7 }}
                minH={{ base: '58px', sm: '62px', md: '68px' }}
                h="auto"
                whiteSpace="normal"
                lineHeight="1.15"
                w="100%"
                borderRadius="full"
                boxShadow="md"
                onClick={onSubmissionOpen}
              >
                {t.whyUsCtaButton}
              </Button>
              <Box
                position="absolute"
                right={{ base: '-59px', sm: '-71px', md: '-83px' }}
                top="50%"
                transform={{ base: 'translateY(-40%)', md: 'translateY(-42%)' }}
                display="block"
                pointerEvents="none"
              >
                <Image
                  loading="lazy"
                  decoding="async"
                  src="https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/nicearrow+(1).png"
                  alt="Arrow pointing to button"
                  w={{ base: '72px', sm: '84px', md: '100px' }}
                  opacity={0.92}
                />
              </Box>
            </Box>

            <Stack
              spacing={{ base: 2, md: 3 }}
              mt={{ base: 2, md: 5 }}
              maxW="560px"
            >
              <Text
                textAlign="center"
                fontSize={{ base: 'lg', md: '2xl' }}
                color="gray.600"
                fontWeight="semibold"
                sx={{ textWrap: 'balance' }}
              >
                {t.whyUsWantToKnow}
              </Text>
              <Box
                display="flex"
                flexDir="row"
                alignItems="center"
                justifyContent="center"
              >
                <Text
                  textAlign="center"
                  fontSize={{ base: 'lg', md: '2xl' }}
                  fontWeight="semibold"
                  color="gray.900"
                >
                  {t.whyUsLessThan}
                </Text>
                <Image
                  loading="lazy"
                  decoding="async"
                  src="https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/IMG_1089+(1)+(1).jpg"
                  h={{ base: '84px', sm: '104px', md: '138px' }}
                />
              </Box>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
