import React from 'react';
import { Button } from '@chakra-ui/react';
import ShakeButton from './ShakeButton';

const WRAPPER_STYLE = { maxWidth: '420px' };

/**
 * Bouton call-to-action unique du site : même taille partout + respiration lente.
 * `fullWidth` remplit le parent (ex. formulaire) au lieu du max 420px.
 */
export default function CtaButton({
  variant = 'primary',
  fullWidth = false,
  children,
  ...props
}) {
  return (
    <ShakeButton style={fullWidth ? undefined : WRAPPER_STYLE}>
      <Button
        variant={variant === 'light' ? 'ctaLight' : 'cta'}
        w="100%"
        h="auto"
        minH={{ base: '56px', md: '64px', lg: '72px' }}
        px={{ base: 8, md: 12 }}
        py={{ base: 4, md: 5 }}
        fontSize={{ base: 'lg', md: 'xl' }}
        fontWeight="bold"
        letterSpacing="0.01em"
        borderRadius="full"
        whiteSpace="normal"
        lineHeight="1.15"
        {...props}
      >
        {children}
      </Button>
    </ShakeButton>
  );
}
