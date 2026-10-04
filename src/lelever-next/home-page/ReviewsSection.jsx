import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Button,
  Link,
  Icon,
  IconButton,
  HStack,
  Image,
  Flex,
  useBreakpointValue,
} from '@chakra-ui/react';
import {
  ArrowForwardIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import { FaStar } from 'react-icons/fa';
import { motion, useReducedMotion } from 'framer-motion';
import { useTranslation } from '../i18n';
import { GOOGLE_RATING_LABEL, GOOGLE_REVIEWS } from '../constants/googleReviews';

const GOOGLE_G_SRC = 'https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png';
const AVATAR_COLORS = ['#1A73E8', '#EA4335', '#34A853', '#F9AB00', '#8E24AA', '#00897B'];
const AUTOPLAY_MS = 5000;
const SWIPE_PX = 50;

/** step: décalage horizontal (% de la largeur d'une carte) par rang; range: rangs visibles de chaque côté. */
const STAGE = {
  base: { step: 18, range: 1, rotate: 0 },
  md: { step: 58, range: 1, rotate: 20 },
  lg: { step: 58, range: 2, rotate: 20 },
};

function Stars({ boxSize = 4 }) {
  return (
    <HStack spacing={0.5}>
      {[...Array(5)].map((_, i) => (
        <Icon key={i} as={FaStar} color='#FBBC05' boxSize={boxSize} />
      ))}
    </HStack>
  );
}

function ReviewCard({ review, index, isActive }) {
  return (
    <Flex
      direction='column'
      bg='white'
      h='100%'
      p={{ base: 5, md: 7 }}
      borderRadius='2xl'
      border='1px solid'
      borderColor='gray.100'
      boxShadow={isActive ? '0 24px 48px -12px rgba(15, 23, 42, 0.25)' : '0 8px 24px -8px rgba(15, 23, 42, 0.15)'}
      transition='box-shadow 0.4s'
    >
      <Box opacity={isActive ? 1 : 0.55} transition='opacity 0.4s' display='flex' flexDirection='column' h='100%'>
        <HStack spacing={3} align='center'>
          <Flex
            align='center'
            justify='center'
            boxSize={{ base: '40px', md: '44px' }}
            flexShrink={0}
            borderRadius='full'
            bg={AVATAR_COLORS[index % AVATAR_COLORS.length]}
            color='white'
            fontWeight='bold'
            fontSize='lg'
          >
            {review.name.charAt(0)}
          </Flex>
          <Box flex={1} minW={0}>
            <Text fontWeight='bold' color='gray.800' noOfLines={1}>
              {review.name}
            </Text>
            <Text textStyle='caption' color='gray.500'>
              {review.time}
            </Text>
          </Box>
          <Image
            src={GOOGLE_G_SRC}
            alt='Google'
            boxSize={{ base: '24px', md: '28px' }}
            flexShrink={0}
            loading='lazy'
            decoding='async'
            htmlWidth={128}
            htmlHeight={128}
          />
        </HStack>
        <Box mt={3}>
          <Stars />
        </Box>
        <Text
          mt={3}
          fontSize={{ base: 'sm', md: 'md' }}
          color='gray.700'
          lineHeight='1.65'
          noOfLines={{ base: 7, md: 6 }}
        >
          {review.content}
        </Text>
      </Box>
    </Flex>
  );
}

export default function ReviewsSection({
  hideTitle = false,
  hideButton = false,
  title,
  subtitle,
  reviewsOverride,
  /** e.g. landing: "white" so the bandeau RBQ sous les avis n’est pas sur gray.50 */
  sectionBg = 'gray.50',
  /** Si défini, remplace le padding haut */
  sectionPaddingTop,
  /** Si défini, remplace le padding bas (ex. avant TrustBanner) pour équilibrer l’espace */
  sectionPaddingBottom,
}) {
  const { t, currentLang } = useTranslation();

  const allReviews =
    reviewsOverride ||
    GOOGLE_REVIEWS.map(({ name, time, content }) => ({
      name,
      time: time[currentLang],
      content: content[currentLang],
    }));
  const count = allReviews.length;

  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();
  const stage = useBreakpointValue(STAGE, { ssr: false }) ?? STAGE.base;

  const goTo = (index) => setActiveIndex(((index % count) + count) % count);

  useEffect(() => {
    if (paused || reduceMotion || count < 2) return undefined;
    const timer = setTimeout(() => setActiveIndex((i) => (i + 1) % count), AUTOPLAY_MS);
    return () => clearTimeout(timer);
  }, [activeIndex, paused, reduceMotion, count]);

  const defaultSectionPt = { base: 12, md: 16, lg: 20 };
  const sectionPt =
    sectionPaddingTop !== undefined ? sectionPaddingTop : defaultSectionPt;
  const sectionPb =
    sectionPaddingBottom !== undefined ? sectionPaddingBottom : defaultSectionPt;

  const arrowProps = {
    borderRadius: 'full',
    bg: 'white',
    border: '1px solid',
    borderColor: 'gray.200',
    _hover: { bg: 'gray.50', borderColor: 'brand.500' },
    color: 'brand.500',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  };

  return (
    <Box
      pt={sectionPt}
      pb={sectionPb}
      bg={sectionBg}
      borderRadius={sectionBg === 'white' ? 'none' : 'xl'}
      overflow='hidden'
    >
      <Container maxW='1440px' px={{ base: 4, md: 6 }}>
        <Stack spacing={{ base: 6, md: 8 }} align='center'>
          {!hideTitle && (
            <Stack spacing={{ base: 2, md: 3 }} textAlign='center'>
              <Heading as='h2' size='section' fontWeight='bold' color='gray.800' lineHeight='1.3'>
                {title ?? t.reviewsTitle}
              </Heading>
              <Text textStyle='bodyLarge' color='gray.600' lineHeight='1.7'>
                {subtitle ?? t.reviewsSubtitle}
              </Text>
            </Stack>
          )}

          <Box
            as={motion.div}
            role='region'
            aria-roledescription='carousel'
            aria-label={title ?? t.reviewsTitle}
            position='relative'
            w='100%'
            h={{ base: '330px', md: '320px' }}
            style={{ perspective: '1400px', touchAction: 'pan-y' }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
            onPanStart={() => setPaused(true)}
            onPanEnd={(e, { offset }) => {
              if (offset.x < -SWIPE_PX) goTo(activeIndex + 1);
              else if (offset.x > SWIPE_PX) goTo(activeIndex - 1);
              setPaused(false);
            }}
          >
            {allReviews.map((review, index) => {
              let offset = (index - activeIndex + count) % count;
              if (offset > count / 2) offset -= count;
              const distance = Math.abs(offset);
              const visible = distance <= stage.range;
              const isActive = offset === 0;

              return (
                <motion.div
                  key={index}
                  aria-hidden={!isActive}
                  onClick={() => !isActive && goTo(index)}
                  initial={false}
                  animate={{
                    x: `${offset * stage.step}%`,
                    z: -distance * 140,
                    rotateY: -Math.sign(offset) * stage.rotate,
                    scale: 1 - distance * 0.12,
                    opacity: visible ? 1 : 0,
                  }}
                  transition={reduceMotion ? { duration: 0 } : { type: 'spring', stiffness: 260, damping: 32 }}
                  style={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    margin: '0 auto',
                    width: 'min(80%, 420px)',
                    zIndex: 10 - distance,
                    cursor: isActive ? 'grab' : 'pointer',
                    pointerEvents: visible ? 'auto' : 'none',
                  }}
                >
                  <ReviewCard review={review} index={index} isActive={isActive} />
                </motion.div>
              );
            })}
          </Box>

          <HStack spacing={{ base: 3, md: 4 }}>
            <IconButton
              aria-label='Previous review'
              icon={<ChevronLeftIcon boxSize={6} />}
              onClick={() => goTo(activeIndex - 1)}
              {...arrowProps}
            />
            <HStack
              spacing={2}
              bg='white'
              border='1px solid'
              borderColor='gray.200'
              borderRadius='full'
              px={{ base: 3, md: 4 }}
              py={2}
              boxShadow='0 2px 8px rgba(0,0,0,0.06)'
            >
              <Image src={GOOGLE_G_SRC} alt='Google' boxSize='20px' loading='lazy' decoding='async' htmlWidth={128} htmlHeight={128} />
              <Text fontWeight='bold' color='gray.800'>
                {GOOGLE_RATING_LABEL[currentLang]}
              </Text>
              <Box display={{ base: 'none', sm: 'block' }}>
                <Stars boxSize={3.5} />
              </Box>
              <Text fontSize='sm' fontWeight='semibold' color='gray.600' whiteSpace='nowrap'>
                {t.googleReviewsBadge}
              </Text>
            </HStack>
            <IconButton
              aria-label='Next review'
              icon={<ChevronRightIcon boxSize={6} />}
              onClick={() => goTo(activeIndex + 1)}
              {...arrowProps}
            />
          </HStack>

          {!hideButton && (
            <Link
              as={RouterLink}
              to='/avis-clients'
              _hover={{ textDecoration: 'none' }}
            >
              <Button
                rightIcon={<ArrowForwardIcon />}
                variant='outline'
                borderColor='brand.500'
                color='brand.500'
                bg='white'
                borderRadius='full'
                textStyle='nav'
                px={{ base: 5, md: 7 }}
                py={{ base: 3, md: 4 }}
                _hover={{ bg: 'brand.500', color: 'white' }}
              >
                {t.viewAllReviews}
              </Button>
            </Link>
          )}
        </Stack>
      </Container>
    </Box>
  );
}
