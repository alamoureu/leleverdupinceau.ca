import React from 'react';
import { Box, Image, Stack, Heading, Text } from '@chakra-ui/react';

/**
 * Reusable service card matching the UI: image with title/subtitle overlay (dark gradient),
 * then description below. All content passed via props.
 *
 * @param {string} image - Image src (imported asset or URL)
 * @param {string} title - Main title (shown in white on image overlay)
 * @param {string} [subtitle] - Optional subtitle (shown in white on image overlay)
 * @param {string} description - Body text below the image (dark grey, left-aligned)
 * @param {string} [alt] - Alt text for image (defaults to title)
 */
export default function ServiceCard({
  image,
  title,
  subtitle,
  description,
  alt,
  noHoverBorder = false,
}) {
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
        ...(noHoverBorder ? {} : { borderColor: '#014CC4' }),
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
        {/* Dark overlay top-left for text readability */}
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
          <Stack spacing={0.5} textAlign="left">
            <Heading
              as="h3"
              fontSize={{ base: 'md', sm: 'lg', md: '2xl', lg: '2xl' }}
              fontWeight="bold"
              color="white"
              lineHeight="1.2"
            >
              {title}
            </Heading>
            {subtitle && (
              <Text
                fontSize={{ base: 'sm', sm: 'md', md: 'lg' }}
                color="white"
                fontWeight="normal"
              >
                {subtitle}
              </Text>
            )}
          </Stack>
        </Box>
      </Box>

      {/* Soft white fade: extends 1px past image bottom to cover the seam */}
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

      <Box
        pt={{ base: 4, sm: 5, md: 6, lg: 7, xl: 8 }}
        pb={{ base: 4, sm: 5, md: 6, lg: 7, xl: 8 }}
        px={{ base: 4, sm: 5, md: 6, lg: 7, xl: 8 }}
        textAlign="left"
      >
        <Text
          fontSize={{ base: 'xs', sm: 'sm', md: 'md' }}
          color="gray.700"
          lineHeight="1.6"
        >
          {description}
        </Text>
      </Box>
    </Box>
  );
}
