import { Box } from '@chakra-ui/react';
import { Placeholder } from './Placeholder';

export const Footer = (props) => {
  return (
    <Box role="contentinfo" bg="bg.accent.default" {...props}>
      <Placeholder minH="20">Footer</Placeholder>
    </Box>
  );
};
