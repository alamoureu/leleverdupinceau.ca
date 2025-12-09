import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      // Remove focus outlines from non-interactive elements
      'div:focus, span:focus, p:focus, h1:focus, h2:focus, h3:focus, h4:focus, h5:focus, h6:focus': {
        outline: 'none !important',
        boxShadow: 'none !important',
      },
      // Only show focus on interactive elements with keyboard navigation
      'a:focus-visible, button:focus-visible, input:focus-visible, select:focus-visible, textarea:focus-visible': {
        outline: '2px solid #014CC4',
        outlineOffset: '2px',
      },
      // Remove focus outline from mouse clicks
      'a:focus:not(:focus-visible), button:focus:not(:focus-visible), input:focus:not(:focus-visible)': {
        outline: 'none',
      },
    },
  },
  components: {
    Box: {
      baseStyle: {
        // Remove default focus styles from Box components
        _focus: {
          outline: 'none',
          boxShadow: 'none',
        },
        // Only allow focus styles if Box has a role that makes it interactive
        '&[role="button"]:focus-visible, &[role="link"]:focus-visible, &[tabindex]:focus-visible': {
          outline: '2px solid #014CC4',
          outlineOffset: '2px',
        },
      },
    },
  },
});

export { theme };
