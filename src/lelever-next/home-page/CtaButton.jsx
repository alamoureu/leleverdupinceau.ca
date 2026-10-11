import React from 'react';
import { Button } from '@chakra-ui/react';
import ShakeButton from './ShakeButton';

const WRAPPER_STYLE = { maxWidth: '420px' };

const SIZES = {
  default: {
    minH: { base: '56px', md: '64px', lg: '72px' },
    px: { base: 8, md: 12 },
    py: { base: 4, md: 5 },
    fontSize: { base: 'lg', md: 'xl' },
    borderRadius: 'full',
  },
  // Aligné sur les champs Input size="md" (~40px), pill comme les autres CTA
  form: {
    minH: '40px',
    h: '40px',
    px: 6,
    py: 0,
    fontSize: 'md',
    borderRadius: 'full',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12)',
    _hover: { bg: 'brand.600', boxShadow: '0 2px 6px rgba(0, 0, 0, 0.16)' },
  },
};

/**
 * Bouton call-to-action unique du site : respiration lente.
 * `fullWidth` remplit le parent (ex. formulaire) au lieu du max 420px.
 * `size="form"` pour coller à la hauteur des inputs (sans animation).
 */
export default function CtaButton({
  variant = 'primary',
  fullWidth = false,
  size = 'default',
  children,
  ...props
}) {
  const sizeStyles = SIZES[size] || SIZES.default;
  const button = (
    <Button
      variant={variant === 'light' ? 'ctaLight' : 'cta'}
      w="100%"
      h="auto"
      fontWeight="bold"
      letterSpacing="0.01em"
      whiteSpace="normal"
      lineHeight="1.15"
      {...sizeStyles}
      {...props}
    >
      {children}
    </Button>
  );

  if (size === 'form') return button;

  return (
    <ShakeButton style={fullWidth ? undefined : WRAPPER_STYLE}>{button}</ShakeButton>
  );
}
