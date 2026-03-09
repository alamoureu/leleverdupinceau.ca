'use client';

import React from 'react';
import { Box, Image as ChakraImage } from '@chakra-ui/react';
import NextImage from 'next/image';

/**
 * Use for images that can be either:
 * - Static import (object): rendered with next/image (official Next.js approach)
 * - URL string (e.g. S3): rendered with Chakra Image
 * See: https://nextjs.org/docs/app/api-reference/components/image#src
 */
export default function AppImage({ src, alt, priority, ...rest }) {
  const isStaticImport = src != null && typeof src === 'object' && 'src' in src;

  if (isStaticImport) {
    const { position, top, left, w, h, zIndex, objectFit, objectPosition, ...nextRest } = rest;
    return (
      <Box position={position ?? 'absolute'} top={top ?? 0} left={left ?? 0} w={w ?? '100%'} h={h ?? '100%'} zIndex={zIndex}>
        <NextImage
          src={src}
          alt={alt ?? ''}
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          priority={!!priority}
          sizes="100vw"
        />
      </Box>
    );
  }

  const srcStr = typeof src === 'string' ? src : src?.src ?? '';
  return (
    <ChakraImage
      src={srcStr}
      alt={alt ?? ''}
      loading={priority ? 'eager' : 'lazy'}
      {...(priority && { fetchPriority: 'high' })}
      decoding="async"
      {...rest}
    />
  );
}
