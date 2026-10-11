import React from 'react';
import { Box, Image, Heading, Text } from '@chakra-ui/react';
import CardCaptionStrip from './CardCaptionStrip';

/**
 * Reusable service card: image with title overlay, white fade, subtitle in white strip below.
 *
 * @param {string} image - Image src
 * @param {string} title - Main title (white on image overlay, or strip when titleInStrip)
 * @param {string} [subtitle] - Subtitle on image overlay (and in strip if stripText not set)
 * @param {string} [stripText] - Optional different text for white strip below image (overrides subtitle there)
 * @param {boolean} [subtitleOnImageOnly] - If true, subtitle is shown only in image overlay (not in bottom strip), avoiding truncation
 * @param {boolean} [titleInStrip] - Put title + supporting line under the image (shared scroll-card layout)
 * @param {string} [description] - Optional body text below
 * @param {string} [alt] - Alt text for image
 * @param {boolean} [compact] - Shorter image height for dense layouts (e.g. 5-card grid)
 * @param {boolean} [fluid] - Fill parent width (no max-width / centering)
 */
export default function ServiceCard({
  image,
  title,
  subtitle,
  stripText,
  subtitleOnImageOnly = false,
  titleInStrip = false,
  description,
  alt,
  noHoverBorder = false,
  fillHeight = false,
  compact = false,
  fluid = false,
  children,
}) {
  const bottomText = stripText ?? (subtitleOnImageOnly ? undefined : subtitle);
  const showLegacyStrip = !titleInStrip && Boolean(bottomText);
  const showCaptionStrip = titleInStrip && (title || bottomText);
  const imageHeights = compact
    ? { base: '180px', sm: '200px', md: '220px', lg: '240px' }
    : {
        base: '260px',
        sm: '280px',
        md: '300px',
        lg: '320px',
        xl: '340px',
        '2xl': '360px',
      };
  /** Min height for the strip (fits ~2 lines); grows to fit content when needed */
  const stripMinHeight = compact
    ? { base: '56px', md: '60px' }
    : { base: '68px', md: '72px', lg: '76px' };

  return (
    <Box
      position="relative"
      bg="white"
      borderRadius="xl"
      border="1px solid"
      borderColor="gray.200"
      boxShadow="0 2px 12px rgba(0,0,0,0.06)"
      transition={noHoverBorder ? undefined : 'box-shadow 0.2s ease, border-color 0.2s ease'}
      _hover={
        noHoverBorder
          ? undefined
          : {
              boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
              borderColor: 'brand.500',
            }
      }
      w="100%"
      h="100%"
      display="flex"
      flexDirection="column"
      overflow="hidden"
      minH={
        compact
          ? { base: '248px', sm: '272px', md: '296px', lg: '316px' }
          : {
              base: '340px',
              sm: '360px',
              md: '380px',
              lg: '400px',
              xl: '420px',
              '2xl': '440px',
            }
      }
      {...(fluid
        ? { maxW: '100%', mx: 0 }
        : {
            maxW: {
              base: '100%',
              sm: '320px',
              md: '360px',
              lg: '380px',
              xl: '400px',
              '2xl': '420px',
            },
            mx: { base: 0, md: 'auto' },
          })}
      {...(fillHeight &&
        !compact && {
          minH: { base: '340px', sm: '360px', md: '380px', lg: '400px' },
        })}
    >
      <Box
        position="relative"
        overflow="hidden"
        bg="white"
        w="100%"
        minW="100%"
        h={imageHeights}
        flexShrink={0}
      >
        <Image
          src={image}
          alt={alt || title}
          w="100%"
          h="100%"
          objectFit="cover"
          objectPosition="center center"
          display="block"
          loading="lazy"
          decoding="async"
          htmlWidth={800}
          htmlHeight={600}
        />
        {!titleInStrip && (
          <Box
            position="absolute"
            inset={0}
            zIndex={2}
            bgGradient="linear(to-br, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 35%, transparent 70%)"
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            justifyContent="flex-start"
            p={{ base: 4, sm: 5, md: 5, lg: 6, xl: 6 }}
            pointerEvents="none"
          >
            <Heading as="h3" size="card" color="white" lineHeight="1.2">
              {title}
            </Heading>
            {subtitle && (
              <Text
                mt={1}
                color="white"
                fontWeight="normal"
                fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
                lineHeight="1.4"
              >
                {subtitle}
              </Text>
            )}
          </Box>
        )}
        {/*
          White fade: use rgba(255,255,255,0) not `transparent`.
          CSS `transparent` is rgba(0,0,0,0), so white→transparent interpolates
          through gray and the band looks like it shifts on scroll/repaint.
        */}
        <Box
          position="absolute"
          left={0}
          right={0}
          bottom={0}
          h={titleInStrip ? '58%' : '42%'}
          pointerEvents="none"
          zIndex={2}
          bgGradient={
            titleInStrip
              ? 'linear(to-t, #fff 0%, rgba(255,255,255,0.97) 12%, rgba(255,255,255,0.7) 38%, rgba(255,255,255,0.28) 62%, rgba(255,255,255,0) 100%)'
              : 'linear(to-t, #fff 0%, rgba(255,255,255,0.92) 22%, rgba(255,255,255,0.45) 55%, rgba(255,255,255,0) 100%)'
          }
          style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}
        />
      </Box>

      {showCaptionStrip && (
        <Box mt={titleInStrip ? { base: -4, md: -5 } : 0} position="relative" zIndex={3}>
          <CardCaptionStrip
            title={title}
            subtitle={bottomText || subtitle}
            compact={compact}
          />
        </Box>
      )}

      {showLegacyStrip && (
        <Box
          bg="white"
          py={{ base: 3, sm: 4, md: 4, lg: 5 }}
          px={{ base: 4, sm: 5, md: 5, lg: 6 }}
          minH={stripMinHeight}
          {...(fillHeight && { minH: stripMinHeight })}
          display="flex"
          alignItems="center"
          textAlign="left"
          position="relative"
          zIndex={3}
          flexShrink={0}
        >
          <Text
            fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
            lineHeight="1.5"
            color="gray.700"
            fontWeight="medium"
            flex="1"
          >
            {bottomText}
          </Text>
        </Box>
      )}

      {description || children ? (
        <Box
          pt={{ base: 4, sm: 5, md: 5, lg: 6 }}
          pb={{ base: 5, sm: 6, md: 6, lg: 7 }}
          px={{ base: 4, sm: 5, md: 5, lg: 6 }}
          textAlign="left"
          flex="1 1 auto"
          display="flex"
          flexDirection="column"
        >
          {description && (
            <Text textStyle="body" color="gray.700" lineHeight="1.6" mb={children ? 4 : 0}>
              {description}
            </Text>
          )}
          {children}
        </Box>
      ) : fillHeight ? (
        <Box flex="1 1 0" minH="0" aria-hidden />
      ) : null}
    </Box>
  );
}
