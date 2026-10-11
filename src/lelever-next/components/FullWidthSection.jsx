import React from 'react';
import { Box, Container } from '@chakra-ui/react';
import { CONTENT_MAX_W, CONTENT_PX } from '../layout/layoutConstants';
import { SECTION_PY } from '../constants/sectionSpacing';

/**
 * Full-bleed page band: background always spans the viewport width.
 * Content stays centered in the standard Container.
 * Never apply borderRadius on the band - that creates the boxed look.
 */
export default function FullWidthSection({
  bg = 'gray.50',
  py,
  pt,
  pb,
  mb,
  maxW = CONTENT_MAX_W,
  px = CONTENT_PX,
  children,
  containerProps,
  ...rest
}) {
  const pad =
    pt !== undefined || pb !== undefined
      ? { pt, pb }
      : { py: py ?? SECTION_PY };

  return (
    <Box w="100%" maxW="100%" bg={bg} borderRadius="none" mb={mb} {...pad} {...rest}>
      <Container maxW={maxW} px={px} {...containerProps}>
        {children}
      </Container>
    </Box>
  );
}
