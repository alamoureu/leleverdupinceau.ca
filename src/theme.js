import { extendTheme } from '@chakra-ui/react';

const breakpoints = {
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
};

const colors = {
  brand: {
    50: '#E6EEFA',
    100: '#B3C9F0',
    200: '#80A5E6',
    300: '#4D81DC',
    400: '#1A5DD2',
    500: '#014CC4',
    600: '#0139A0',
    700: '#022A68',
    800: '#011D45',
    900: '#010F23',
  },
};

/** Spacing standards: use for consistent layout across all pages and components. */
const space = {
  sectionY: 12,
  sectionX: 6,
  containerMax: '1440px',
  /** Section wrapper vertical padding: py={{ base: 12, md: 16 }} */
  sectionPy: { base: 12, md: 16 },
  /** Page content top padding (below nav): pt={{ base: 8, md: 12 }} */
  pagePt: { base: 8, md: 12 },
  /** Stack/grid spacing between blocks: spacing={{ base: 4, md: 6 }} */
  stack: { base: 4, md: 6 },
  /** Tight spacing (e.g. title + subtitle): spacing={{ base: 2, md: 3 }} */
  tight: { base: 2, md: 3 },
};

const fontFamily =
  "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";

const theme = extendTheme({
  breakpoints,
  colors,
  space: {
    sectionY: 12,
    sectionX: 6,
  },
  fonts: {
    body: fontFamily,
    heading: fontFamily,
  },
  styles: {
    global: {
      // Keep 16px base on mobile for industry-standard readability and to avoid iOS zoom on inputs
      html: {
        fontSize: '16px',
      },
      body: {
        fontFamily,
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
      },
      'div:focus, span:focus, p:focus, h1:focus, h2:focus, h3:focus, h4:focus, h5:focus, h6:focus': {
        outline: 'none !important',
        boxShadow: 'none !important',
      },
      'a:focus-visible, button:focus-visible, input:focus-visible, select:focus-visible, textarea:focus-visible': {
        outline: '2px solid var(--chakra-colors-brand-500)',
        outlineOffset: '2px',
      },
      'a:focus:not(:focus-visible), button:focus:not(:focus-visible), input:focus:not(:focus-visible)': {
        outline: 'none',
      },
    },
  },
  components: {
    Box: {
      baseStyle: {
        _focus: {
          outline: 'none',
          boxShadow: 'none',
        },
        '&[role="button"]:focus-visible, &[role="link"]:focus-visible, &[tabindex]:focus-visible': {
          outline: '2px solid var(--chakra-colors-brand-500)',
          outlineOffset: '2px',
        },
      },
    },
    Heading: {
      sizes: {
        page: {
          fontSize: { base: '2xl', md: '3xl', lg: '4xl', xl: '5xl' },
          lineHeight: '1.2',
        },
        section: {
          fontSize: { base: 'xl', md: '2xl', lg: '3xl' },
          lineHeight: '1.3',
        },
        subsection: {
          fontSize: { base: 'lg', md: 'xl', lg: '2xl' },
          lineHeight: '1.35',
        },
        card: {
          fontSize: { base: 'md', md: 'lg', lg: 'xl' },
          lineHeight: '1.4',
        },
      },
    },
    Text: {
      baseStyle: {
        fontSize: { base: 'md', md: 'md' },
        lineHeight: '1.6',
      },
      variants: {
        body: {
          fontSize: { base: 'md', md: 'md' },
          lineHeight: '1.7',
        },
        bodyLarge: {
          fontSize: { base: 'md', md: 'lg' },
          lineHeight: '1.7',
        },
        caption: {
          fontSize: { base: 'sm', md: 'sm' },
          lineHeight: '1.5',
        },
      },
    },
    Container: {
      baseStyle: {
        maxW: '1440px',
        px: { base: 4, md: 6, lg: 8 },
      },
    },
    Button: {
      baseStyle: {
        minH: { base: '44px', md: '40px' },
        _focusVisible: {
          outline: '2px solid var(--chakra-colors-brand-500)',
          outlineOffset: '2px',
        },
      },
      defaultProps: {
        colorScheme: 'brand',
      },
      variants: {
        solid: {
          bg: 'brand.500',
          color: 'white',
          _hover: { bg: 'brand.600' },
          _active: { bg: 'brand.700' },
        },
        primary: {
          bg: 'brand.500',
          color: 'white',
          _hover: { bg: 'brand.600' },
          _active: { bg: 'brand.700' },
        },
        outline: {
          borderWidth: '2px',
          borderColor: 'brand.500',
          color: 'brand.500',
          _hover: { bg: 'brand.50' },
        },
        outlineBrand: {
          borderColor: 'brand.500',
          color: 'brand.500',
          _hover: { bg: 'brand.500', color: 'white' },
          _active: { bg: 'brand.600', color: 'white' },
        },
      },
    },
    Link: {
      baseStyle: {
        _focusVisible: {
          outline: '2px solid var(--chakra-colors-brand-500)',
          outlineOffset: '2px',
        },
      },
    },
    Modal: {
      baseStyle: {
        overlay: { zIndex: 10000 },
        dialogContainer: { zIndex: 10000 },
        dialog: { zIndex: 10001 },
      },
    },
    Drawer: {
      baseStyle: {
        overlay: { zIndex: 10000 },
        dialogContainer: { zIndex: 10000 },
        dialog: { zIndex: 10001 },
      },
    },
  },
  textStyles: {
    h1: { fontSize: { base: '2xl', md: '3xl', lg: '4xl', xl: '5xl' }, lineHeight: '1.2', fontWeight: 'bold' },
    h2: { fontSize: { base: 'xl', md: '2xl', lg: '3xl' }, lineHeight: '1.3', fontWeight: 'bold' },
    h3: { fontSize: { base: 'lg', md: 'xl', lg: '2xl' }, lineHeight: '1.35', fontWeight: 'semibold' },
    body: { fontSize: { base: 'md', md: 'md' }, lineHeight: '1.6' },
    bodyLarge: { fontSize: { base: 'md', md: 'lg' }, lineHeight: '1.7' },
    caption: { fontSize: { base: 'sm', md: 'sm' }, lineHeight: '1.5' },
    nav: { fontSize: { base: 'md', md: 'md' }, fontWeight: 'medium' },
    drawer: { fontSize: { base: 'md', md: 'lg' }, fontWeight: 'medium' },
    stat: { fontSize: { base: 'lg', md: 'xl' }, fontWeight: 'bold', lineHeight: '1' },
    footerHeading: { fontSize: { base: 'md', md: 'lg' }, fontWeight: 'bold' },
    footerLink: { fontSize: { base: 'sm', sm: 'sm' }, lineHeight: '1.5' },
  },
  semanticTokens: {
    colors: {
      'app.brand': 'brand.500',
      'app.brandHover': 'brand.600',
      'app.header': 'brand.700',
    },
  },
});

export { theme, space, colors, breakpoints, fontFamily };
