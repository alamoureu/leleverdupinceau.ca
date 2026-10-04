import React from 'react';
import { Button } from '@chakra-ui/react';
import ShakeButton from './ShakeButton';

const WRAPPER_STYLE = { maxWidth: '420px' };

const VARIANTS = {
  primary: {
    bg: 'brand.500',
    color: 'white',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.12)',
    _hover: { bg: 'brand.600' },
  },
  light: {
    bg: 'white',
    color: 'brand.500',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.12)',
    _hover: { bg: 'gray.50' },
  },
};

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
        transition="background-color 0.2s ease"
        {...VARIANTS[variant]}
        {...props}
      >
        {children}
      </Button>
    </ShakeButton>
  );
}
