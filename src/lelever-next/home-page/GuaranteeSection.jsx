import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Stack,
  Button,
  Text,
  Image,
  Heading,
  Flex,
} from '@chakra-ui/react';
import { useTranslation } from '../i18n';
import satisfactionBadgeFr from '../images/satisfaction_fr.PNG';
import satisfactionBadgeEn from '../images/satisfaction_en.PNG';

/** Même cadre carré FR / EN ; les deux PNG devraient idéalement avoir le même cadrage du sceau. */
const SATISFACTION_BADGE_FRAME = {
  base: '118px',
  sm: '128px',
  md: '152px',
  lg: '188px',
  xl: '216px',
  '2xl': '236px',
};

/** Sceaux : `src/lelever-next/images/satisfaction_fr.PNG` | `satisfaction_en.PNG` */
export default function GuaranteeSection({
  onSubmissionOpen,
  hideCta = false,
  badgeSrc: badgeSrcProp,
  badgeAlt: badgeAltProp,
  ctaText: ctaTextProp,
  ctaSubtitle: ctaSubtitleProp,
  title: titleProp,
  body: bodyProp,
  mt,
  sectionPy,
}) {
  const { t, currentLang } = useTranslation();
  const [badgeError, setBadgeError] = useState(false);

  const badgeSrc =
    badgeSrcProp ??
    (currentLang === 'en' ? satisfactionBadgeEn : satisfactionBadgeFr);

  useEffect(() => {
    setBadgeError(false);
  }, [badgeSrc]);
  const badgeAlt = badgeAltProp ?? t.guaranteeBadgeAlt;
  const ctaText = ctaTextProp ?? t.ctaButton;
  const ctaSubtitle = ctaSubtitleProp ?? t.ctaSubtitle;
  const title = titleProp ?? t.guaranteeTitle;
  const body = bodyProp ?? t.guaranteeBody;

  const defaultPtPb =
    sectionPy == null
      ? {
          pt: {
            base: hideCta ? 4 : 5,
            sm: hideCta ? 5 : 7,
            md: hideCta ? 6 : 10,
            lg: hideCta ? 8 : 10,
          },
          pb: {
            base: hideCta ? 4 : 3,
            sm: hideCta ? 5 : 4,
            md: hideCta ? 6 : 6,
            lg: hideCta ? 8 : 6,
          },
        }
      : { pt: sectionPy, pb: sectionPy };

  return (
    <Box mt={mt} pt={defaultPtPb.pt} pb={defaultPtPb.pb} bg="white">
      <Container
        maxW={hideCta ? '1440px' : '550px'}
        px={{ base: 4, sm: 5, md: 6, lg: 8, xl: 10, '2xl': 12 }}
      >
        <Stack spacing={{ base: 2, sm: 3, md: 5 }} align="center">
          {!hideCta && (
            <Stack spacing={1} align="center" w="100%">
              <Button
                onClick={onSubmissionOpen}
                bg="brand.500"
                color="white"
                fontSize={{ base: 'lg', sm: 'xl', md: 'xl' }}
                fontWeight="semibold"
                px={{ base: 5, sm: 6, md: 8 }}
                py={{ base: 4, sm: 4, md: 5 }}
                h="auto"
                minH={{ base: '52px', sm: '56px', md: '62px' }}
                borderRadius="full"
                boxShadow="md"
                _hover={{ bg: 'brand.600', boxShadow: 'lg' }}
              >
                {ctaText}
              </Button>
              <Text
                fontSize={{ base: 'sm', md: 'lg' }}
                color="gray.600"
                fontWeight="medium"
              >
                {ctaSubtitle}
              </Text>
            </Stack>
          )}

          <Flex
            w="100%"
            mx="auto"
            align="center"
            justify="center"
            flexWrap="nowrap"
            gap={{ base: 6, sm: 7, md: 7, lg: 9, xl: 10, '2xl': 12 }}
            minW={0}
            mt={hideCta ? { base: 0, md: 0 } : { base: 10, sm: 12, md: 16 }}
          >
            <Box
              flexShrink={0}
              w={SATISFACTION_BADGE_FRAME}
              aspectRatio={1}
              maxH={SATISFACTION_BADGE_FRAME}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              {!badgeError && badgeSrc ? (
                <Image
                  key={badgeSrc}
                  src={badgeSrc}
                  alt={badgeAlt}
                  w="100%"
                  h="100%"
                  objectFit="contain"
                  objectPosition="center"
                  maxW="100%"
                  maxH="100%"
                  loading={hideCta ? 'eager' : 'lazy'}
                  decoding="async"
                  draggable={false}
                  onError={() => setBadgeError(true)}
                />
              ) : (
                <Box
                  w="100%"
                  h="100%"
                  borderRadius="full"
                  border="2px solid"
                  borderColor="gray.200"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  textAlign="center"
                  px={4}
                >
                  <Text fontWeight="bold" color="gray.800" fontSize="sm">
                    {t.guaranteeFallbackShort}
                  </Text>
                </Box>
              )}
            </Box>

            <Stack
              spacing={{ base: 2, md: 2, lg: 2.5, xl: 3 }}
              textAlign="left"
              align="flex-start"
              flex="1 1 0"
              minW={0}
              maxW="min(100%, clamp(17rem, 12vw + 11rem, 28rem))"
            >
              <Heading
                as="h3"
                fontSize={{
                  base: 'lg',
                  sm: 'xl',
                  md: 'xl',
                  lg: '2xl',
                  xl: '2xl',
                  '2xl': '3xl',
                }}
                fontWeight="bold"
                color="gray.900"
                lineHeight={{ base: '1.25', lg: '1.2' }}
              >
                {title}
              </Heading>
              <Text
                color="gray.600"
                fontSize={{
                  base: 'sm',
                  sm: 'md',
                  md: 'md',
                  lg: 'lg',
                  xl: 'lg',
                  '2xl': 'xl',
                }}
                lineHeight={{ base: '1.65', md: '1.7', lg: '1.75' }}
                overflowWrap="break-word"
                wordBreak="break-word"
              >
                {body}
              </Text>
            </Stack>
          </Flex>
        </Stack>
      </Container>
    </Box>
  );
}
