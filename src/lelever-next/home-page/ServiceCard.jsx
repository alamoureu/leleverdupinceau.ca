import React from 'react';
import { Box, Image, Heading, Text } from '@chakra-ui/react';

/**
 * Reusable service card: image with title overlay, white fade, subtitle in white strip below.
 *
 * @param {string} image - Image src
 * @param {string} title - Main title (white on image overlay)
 * @param {string} [subtitle] - Subtitle on image overlay (and in strip if stripText not set)
 * @param {string} [stripText] - Optional different text for white strip below image (overrides subtitle there)
 * @param {string} [description] - Optional body text below
 * @param {string} [alt] - Alt text for image
 */
export default function ServiceCard({
  image,
  title,
  subtitle,
  stripText,
  description,
  alt,
  noHoverBorder = false,
}) {
  const bottomText = stripText ?? subtitle;
  const imageHeights = {
    base: '150px',
    sm: '165px',
    md: '220px',
    lg: '240px',
    xl: '260px',
    '2xl': '280px',
  };
  /** Fade height = image + 1px so it overlaps the seam and removes the 1px line */
  const fadeHeights = {
    base: '151px',
    sm: '166px',
    md: '221px',
    lg: '241px',
    xl: '261px',
    '2xl': '281px',
  };

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
      maxW={{
        base: '100%',
        sm: '320px',
        md: '360px',
        lg: '380px',
        xl: '400px',
        '2xl': '420px',
      }}
      mx={{ base: 0, md: 'auto' }}
    >
      <Box
        position="relative"
        overflow="hidden"
        bg="white"
        w="100%"
        minW="100%"
        h={imageHeights}
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
              textStyle="body"
              color="white"
              fontWeight="normal"
              fontSize={{ base: 'sm', md: 'md' }}
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
      {bottomText && (
        <Box
          bg="white"
          py={{ base: 3, sm: 4, md: 4, lg: 5 }}
          px={{ base: 4, sm: 5, md: 5, lg: 6 }}
          textAlign="left"
          position="relative"
          zIndex={3}
        >
          <Text textStyle="body" color="gray.700" fontWeight="medium" lineHeight="1.5">
            {bottomText}
          </Text>
        </Box>
      )}

      {description && (
        <Box
          pt={{ base: 4, sm: 5, md: 6, lg: 7, xl: 8 }}
          pb={{ base: 4, sm: 5, md: 6, lg: 7, xl: 8 }}
          px={{ base: 4, sm: 5, md: 6, lg: 7, xl: 8 }}
          textAlign="left"
        >
          <Text textStyle="body" color="gray.700" lineHeight="1.6">
            {description}
          </Text>
        </Box>
      )}
    </Box>
  );
}
