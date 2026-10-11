import React, { Fragment } from 'react';
import { HStack, Link, Text, useBreakpointValue } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const VARIANTS = {
  hero: {
    fontSize: { base: 'xs', md: 'sm' },
    lineHeight: '1.2',
    spacing: { base: 1, md: 1.5 },
    flexWrap: 'nowrap',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    separatorColor: 'whiteAlpha.600',
    linkColor: 'whiteAlpha.800',
    linkHover: { color: 'white', textDecoration: 'underline' },
    currentColor: 'white',
  },
  page: {
    fontSize: { base: 'md', md: 'lg' },
    lineHeight: '1.4',
    spacing: 3,
    flexWrap: 'wrap',
    whiteSpace: undefined,
    overflow: undefined,
    separatorColor: 'gray.500',
    linkColor: 'gray.600',
    linkHover: { textDecoration: 'underline' },
    currentColor: 'gray.800',
  },
};

/**
 * Reusable breadcrumb for photo heroes (`variant="hero"`) and in-page trails (`variant="page"`).
 * Long trails collapse to first › last on small screens.
 *
 * @param {{
 *   items: Array<{ label: string, to?: string, href?: string }>,
 *   variant?: 'hero' | 'page',
 *   clearBadge?: boolean,
 *   mb?: object | number | string,
 *   compactThreshold?: number,
 *   ariaLabel?: string,
 * }} props
 */
export default function HeroBreadcrumb({
  items = [],
  variant = 'hero',
  clearBadge = false,
  mb,
  compactThreshold = 3,
  ariaLabel = "Fil d'Ariane",
}) {
  const safeItems = Array.isArray(items)
    ? items.filter((item) => item && typeof item.label === 'string' && item.label)
    : [];
  const styles = VARIANTS[variant] || VARIANTS.hero;
  const compact = useBreakpointValue({ base: true, md: false }) ?? true;
  if (!safeItems.length) return null;
  const displayItems =
    compact && safeItems.length > compactThreshold
      ? [safeItems[0], safeItems[safeItems.length - 1]]
      : safeItems;

  return (
    <HStack
      as="nav"
      aria-label={ariaLabel}
      spacing={styles.spacing}
      fontSize={styles.fontSize}
      lineHeight={styles.lineHeight}
      flexWrap={styles.flexWrap}
      whiteSpace={styles.whiteSpace}
      overflow={styles.overflow}
      minW={0}
      maxW="100%"
      layerStyle={clearBadge ? 'clearReviewBadge' : undefined}
      mb={mb}
    >
      {displayItems.map((item, index) => {
        const isLast = index === displayItems.length - 1;
        const linkProps = item.to
          ? { as: RouterLink, to: item.to }
          : item.href
            ? { href: item.href }
            : null;

        return (
          <Fragment key={`${item.label}-${index}`}>
            {index > 0 && (
              <Text
                as="span"
                fontSize="inherit"
                lineHeight="inherit"
                color={styles.separatorColor}
                flexShrink={0}
                aria-hidden
              >
                ›
              </Text>
            )}
            {linkProps && !isLast ? (
              <Link
                {...linkProps}
                fontSize="inherit"
                lineHeight="inherit"
                color={styles.linkColor}
                _hover={styles.linkHover}
                flexShrink={0}
              >
                {item.label}
              </Link>
            ) : (
              <Text
                as="span"
                fontSize="inherit"
                lineHeight="inherit"
                color={styles.currentColor}
                fontWeight="medium"
                minW={0}
                isTruncated={variant === 'hero'}
                {...(isLast ? { 'aria-current': 'page' } : {})}
              >
                {item.label}
              </Text>
            )}
          </Fragment>
        );
      })}
    </HStack>
  );
}
