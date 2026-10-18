import React from 'react';
import { Box, Stack, Text } from '@chakra-ui/react';

/**
 * Shared under-image caption for home-page scrolling cards.
 * Title + optional subtitle under a smooth image fade (no divider).
 */
export default function CardCaptionStrip({
  title,
  subtitle,
  compact = false,
}) {
  if (!title && !subtitle) return null;

  return (
    <Box
      bg="transparent"
      pt={compact ? { base: 1, md: 1.5 } : { base: 1.5, md: 2 }}
      pb={compact ? { base: 2.5, md: 3 } : { base: 3.5, md: 4 }}
      px={{ base: 4, md: 5 }}
      minH={compact ? undefined : { base: '64px', md: '68px' }}
      display="flex"
      alignItems="center"
      justifyContent="flex-start"
      flexShrink={0}
      position="relative"
      zIndex={3}
    >
      <Stack spacing={0.5} flex="1" minW={0} textAlign="left">
        {title && (
          <Text
            fontWeight="semibold"
            color="gray.800"
            fontSize={{ base: 'sm', md: 'md' }}
            lineHeight="1.3"
            noOfLines={1}
            transition="color 0.15s"
            // Parent card links must stay role=link (not role=group) for a11y.
            sx={{
              'a:hover &, a:focus-visible &': {
                color: 'var(--chakra-colors-brand-500)',
                textDecoration: 'underline',
              },
            }}
          >
            {title}
          </Text>
        )}
        {subtitle && (
          <Text
            fontSize={{ base: 'xs', md: 'sm' }}
            color="gray.500"
            lineHeight="1.4"
            noOfLines={2}
          >
            {subtitle}
          </Text>
        )}
      </Stack>
    </Box>
  );
}
