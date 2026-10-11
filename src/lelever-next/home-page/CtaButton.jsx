import React from 'react';
import { Button } from '@chakra-ui/react';
import ShakeButton from './ShakeButton';

/** Plafond largeur CTA site-wide (hors boutons formulaire). Assez large pour le libellé FR + icône. */
export const CTA_MAX_W = '22rem'; // 352px

const SIZES = {
  default: {
    minH: { base: '44px', md: '48px' },
    px: { base: 5, md: 6 },
    py: 2,
    fontSize: { base: 'sm', md: 'md' },
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
 * Largeur au contenu, plafonnée à CTA_MAX_W (sauf `size="form"`).
 * `align`: "center" (défaut, sections centrées) ou "start" (héros aligné à gauche).
 */
export default function CtaButton({
  variant = 'primary',
  fullWidth = false,
  size = 'default',
  align = 'center',
  children,
  ...props
}) {
  const sizeStyles = SIZES[size] || SIZES.default;
  const isForm = size === 'form';
  const button = (
    <Button
      variant={variant === 'light' ? 'ctaLight' : 'cta'}
      w={isForm || fullWidth ? '100%' : 'auto'}
      maxW={isForm || fullWidth ? '100%' : CTA_MAX_W}
      h="auto"
      fontWeight="600"
      letterSpacing="0.01em"
      whiteSpace="nowrap"
      lineHeight="1.25"
      textAlign="center"
      overflow="hidden"
      {...sizeStyles}
      {...props}
    >
      {children}
    </Button>
  );

  if (isForm) return button;

  const wrapperStyle = {
    maxWidth: `min(100%, ${CTA_MAX_W})`,
    width: fullWidth ? '100%' : 'fit-content',
    marginLeft: align === 'start' ? 0 : 'auto',
    marginRight: align === 'start' ? 0 : 'auto',
  };

  return <ShakeButton style={wrapperStyle}>{button}</ShakeButton>;
}
