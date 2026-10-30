import React, { Fragment } from 'react';
import { Box, Flex, Stack } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import WebsiteNavBar from '../navigation/WebsiteNavBar';
import FloatingLanguageToggle from '../components/FloatingLanguageToggle';
import PromoBanner from '../home-page/PromoBanner';
import { LANDING_HEADER_OFFSET } from '../landing/constants';

/**
 * Chrome for ads/STLP landings only: promo + white minimal nav, no site footer.
 * Used as its own route layout so the blue site navbar can never mount here
 * (unlike toggling a flag inside WebsiteLayout from pathname).
 * `#main` pt matches WebsiteLayout + HEADER_OFFSET so heroes stay rectangular below the chrome.
 */
export default function LandingLayout() {
  return (
    <Fragment>
      <Box w="100%" maxW="1920px" mx="auto" minH="100%" minW={0} overflowX="hidden">
        <Flex
          direction="column"
          overflowX="hidden"
          minH="100%"
          minW={0}
          px="0"
          gap={0}
          flex="1"
        >
          <PromoBanner />
          <WebsiteNavBar isNewLanding />
          <FloatingLanguageToggle />

          <Stack
            as="main"
            id="main"
            gap={0}
            spacing={0}
            overflowX="hidden"
            minW={0}
            tabIndex={-1}
            flex="1"
            pt={LANDING_HEADER_OFFSET}
            mt={0}
          >
            <Outlet />
          </Stack>
        </Flex>
      </Box>
    </Fragment>
  );
}
