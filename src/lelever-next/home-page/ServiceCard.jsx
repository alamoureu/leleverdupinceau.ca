import React from 'react';
import { Box, Image, Heading, Text, HStack } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

/**
 * Reusable service card: image with title overlay, white fade, subtitle in white strip below.
 *
 * @param {string} image - Image src
 * @param {string} title - Main title (white on image overlay)
 * @param {string} [subtitle] - Subtitle on image overlay (and in strip if stripText not set)
 * @param {string} [stripText] - Optional different text for white strip below image (overrides subtitle there)
 * @param {boolean} [subtitleOnImageOnly] - If true, subtitle is shown only in image overlay (not in bottom strip), avoiding truncation
 * @param {string} [ctaLabel] - Optional CTA text in strip (e.g. "Voir") shown in brand blue with arrow
 * @param {string} [description] - Optional body text below
 * @param {string} [alt] - Alt text for image
 * @param {boolean} [compact] - Shorter image height for dense layouts (e.g. 5-card grid)
 */
export default function ServiceCard({
  image,
  title,
  subtitle,
  stripText,
  subtitleOnImageOnly = false,
  ctaLabel,
  description,
  alt,
  noHoverBorder = false,
  fillHeight = false,
  compact = false,
  children,
}) {
  const bottomText = stripText ?? (subtitleOnImageOnly ? undefined : subtitle);
  const showStrip = bottomText || ctaLabel;
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
  /** Fade height = image + 1px so it overlaps the seam and removes the 1px line */
  const fadeHeights = compact
    ? { base: '181px', sm: '201px', md: '221px', lg: '241px' }
    : {
        base: '261px',
        sm: '281px',
        md: '301px',
        lg: '321px',
        xl: '341px',
        '2xl': '361px',
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
      overflow="hidden"
      border="1px solid"
      borderColor="gray.200"
      boxShadow="0 2px 12px rgba(0,0,0,0.06)"
      transition="box-shadow 0.2s, border-color 0.2s"
      _hover={{
        boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
        ...(noHoverBorder ? {} : { borderColor: 'brand.500' }),
      }}
      w="100%"
      h="100%"
      display="flex"
      flexDirection="column"
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
      maxW={{
        base: '100%',
        sm: '320px',
        md: '360px',
        lg: '380px',
        xl: '400px',
        '2xl': '420px',
      }}
      mx={{ base: 0, md: 'auto' }}
      {...(fillHeight && {
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
        />
        {/* Dark overlay: title + subtitle */}
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
        {/* White fade at bottom of image */}
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          w="100%"
          h={fadeHeights}
          pointerEvents="none"
          zIndex={2}
          display="flex"
          alignItems="flex-end"
        >
          <Box
            w="100%"
            h="40%"
            bgGradient="linear(to-t, white 0%, rgba(255,255,255,0.9) 20%, rgba(255,255,255,0.4) 50%, transparent 100%)"
          />
        </Box>
      </Box>

      {/* Text in white strip below image */}
      {showStrip && (
        <Box
          bg="white"
          py={{ base: 3, sm: 4, md: 4, lg: 5 }}
          px={{ base: 4, sm: 5, md: 5, lg: 6 }}
          minH={stripMinHeight}
          {...(fillHeight && { minH: stripMinHeight })}
          display="flex"
          alignItems="center"
          justifyContent={ctaLabel && !bottomText ? 'flex-start' : bottomText && ctaLabel ? 'space-between' : undefined}
          gap={3}
          textAlign="left"
          position="relative"
          zIndex={3}
          flexShrink={0}
        >
          {bottomText && (
            <Text
              fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
              lineHeight="1.5"
              color="gray.700"
              fontWeight="medium"
              flex="1"
            >
              {bottomText}
            </Text>
          )}
          {ctaLabel && (
            <HStack spacing={2} color="brand.500" fontWeight="medium" fontSize={{ base: 'sm', md: 'md' }} flexShrink={0}>
              <Text as="span">{ctaLabel}</Text>
              <ArrowForwardIcon boxSize={4} />
            </HStack>
          )}
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
