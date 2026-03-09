import React, { Fragment, useContext } from 'react';
import {
  Stack,
  Text,
  ButtonGroup,
  IconButton,
  Flex,
  Image,
  Box,
  Link,
  SimpleGrid,
  Divider,
  HStack,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { Link as RouterLink, useLocation } from '@/lib/next-router';
import WebsiteNavBar from '../navigation/WebsiteNavBar';
import FloatingLanguageToggle from '../components/FloatingLanguageToggle';
import appContext from '../../AppProvider';
import { useTranslation } from '../i18n';
export default function NewWebsiteLayout({ children }) {
  const { currentLang, footerData } = useContext(appContext);
  const { t } = useTranslation();
  const location = useLocation();
  const isLocaleLanding =
    location.pathname === '/fr/peintre-montreal' ||
    location.pathname === '/en/peintre-montreal';

  return (
    <Fragment>
      <Box w="100%" maxW="1920px" mx="auto" minH="100%" minW={0} overflowX="hidden">
        <Flex
          direction="column"
          overflowX="hidden"
          minH="100%"
          minW={0}
          px="0"
          spacing="0"
          gap={0}
          flex="1"
        >
          <WebsiteNavBar isNewLanding={isLocaleLanding} />

          <Stack
            id="main"
            gap={0}
            spacing={0}
            overflowX="hidden"
            minW={0}
            tabIndex={-1}
            flex="1"
            pt={isLocaleLanding
              ? { base: '72px', sm: '76px', md: '88px' }
              : { base: '94px', sm: '98px', md: '112px' }}
            mt={0}
          >
            {children}
          </Stack>

          {!isLocaleLanding && (
            <Box
              position="static"
              bottom="0"
              w="100%"
              bg="brand.700"
              py={{ base: 8, md: 12 }}
              px={{ base: 4, md: 6 }}
            >
              <Box maxW="1440px" mx="auto">
                <Stack
                  spacing={{ base: 4, md: 6 }}
                  align={{ base: 'center', md: 'flex-start' }}
                  mb={{ base: 8, md: 10 }}
                >
                  <RouterLink to="/">
                    <Image
                      loading="lazy"
                      alt="Le Lever du Pinceau"
                      src={
                        'https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/whitelogo.png'
                      }
                      h={{ base: '60px', md: '70px' }}
                      w="auto"
                      cursor="pointer"
                    />
                  </RouterLink>
                  <Box
                    as={RouterLink}
                    to="/"
                    cursor="pointer"
                    _hover={{ textDecoration: 'underline' }}
                  >
                    <Text
                      textStyle="bodyLarge"
                      color="white"
                      fontWeight="medium"
                      _hover={{ color: 'gray.300' }}
                    >
                      {footerData?.description ||
                        (currentLang === 'fr'
                          ? 'Une peinture propre, rapide et impeccable.'
                          : 'Clean, fast and impeccable painting.')}
                    </Text>
                  </Box>
                </Stack>

                <Divider borderColor="gray.600" mb={{ base: 4, md: 6 }} />

                <SimpleGrid
                  columns={{ base: 1, sm: 2, md: 3 }}
                  spacing={{ base: 4, md: 6 }}
                  mb={{ base: 8, md: 10 }}
                >
                  <Stack spacing={2}>
                    <Text
                      textStyle="footerHeading"
                      color="white"
                      mb={2}
                    >
                      SERVICES
                    </Text>
                    <Stack spacing={2}>
                      <Link
                        as={RouterLink}
                        to="/services/peinture-residentielle"
                        color="white"
                        textStyle="footerLink"
                        _hover={{
                          textDecoration: 'underline',
                          color: 'gray.300',
                        }}
                      >
                        - {t.serviceResidential}
                      </Link>
                      <Link
                        as={RouterLink}
                        to="/services/peinture-commerciale"
                        color="white"
                        textStyle="footerLink"
                        _hover={{
                          textDecoration: 'underline',
                          color: 'gray.300',
                        }}
                      >
                        - {t.serviceCommercial}
                      </Link>
                      <Link
                        as={RouterLink}
                        to="/services/peinture-interieure"
                        color="white"
                        textStyle="footerLink"
                        _hover={{
                          textDecoration: 'underline',
                          color: 'gray.300',
                        }}
                      >
                        - {t.serviceInterior}
                      </Link>
                      <Link
                        as={RouterLink}
                        to="/services/peinture-exterieure"
                        color="white"
                        textStyle="footerLink"
                        _hover={{
                          textDecoration: 'underline',
                          color: 'gray.300',
                        }}
                      >
                        - {currentLang === 'fr' ? 'Peinture extérieure' : 'Exterior painting'}
                      </Link>
                      <Link
                        as={RouterLink}
                        to="/services/peinture-industrielle"
                        color="white"
                        textStyle="footerLink"
                        _hover={{
                          textDecoration: 'underline',
                          color: 'gray.300',
                        }}
                      >
                        - {currentLang === 'fr' ? 'Peinture industrielle' : 'Industrial painting'}
                      </Link>
                    </Stack>
                  </Stack>

                  <Stack spacing={2}>
                    <Text
                      textStyle="footerHeading"
                      color="white"
                      mb={2}
                    >
                      ENTREPRISE
                    </Text>
                    <Stack spacing={2}>
                      <Link
                        as={RouterLink}
                        to="/a-propos"
                        color="white"
                        textStyle="footerLink"
                        _hover={{
                          textDecoration: 'underline',
                          color: 'gray.300',
                        }}
                      >
                        - {currentLang === 'fr' ? 'À propos' : 'About'}
                      </Link>
                      <Link
                        as={RouterLink}
                        to="/avis"
                        color="white"
                        textStyle="footerLink"
                        _hover={{
                          textDecoration: 'underline',
                          color: 'gray.300',
                        }}
                      >
                        -{' '}
                        {currentLang === 'fr' ? 'Avis clients' : 'Client reviews'}
                      </Link>
                      <Link
                        as={RouterLink}
                        to="/peintre-professionnel"
                        color="white"
                        textStyle="footerLink"
                        _hover={{
                          textDecoration: 'underline',
                          color: 'gray.300',
                        }}
                      >
                        -{' '}
                        {currentLang === 'fr'
                          ? 'Peintres professionnels'
                          : 'Professional painters'}
                      </Link>
                    </Stack>
                  </Stack>

                  <Stack spacing={2}>
                    <Text
                      textStyle="footerHeading"
                      color="white"
                      mb={2}
                    >
                      RESSOURCES
                    </Text>
                    <Stack spacing={2}>
                      <Link
                        as={RouterLink}
                        to="/blog"
                        color="white"
                        textStyle="footerLink"
                        _hover={{
                          textDecoration: 'underline',
                          color: 'gray.300',
                        }}
                      >
                        - {currentLang === 'fr' ? 'Blog' : 'Blog'}
                      </Link>
                      <Link
                        as={RouterLink}
                        to="/contact"
                        color="white"
                        textStyle="footerLink"
                        _hover={{
                          textDecoration: 'underline',
                          color: 'gray.300',
                        }}
                      >
                        - {currentLang === 'fr' ? 'Contact' : 'Contact'}
                      </Link>
                      <Link
                        as={RouterLink}
                        to="/secteurs-desservis"
                        color="white"
                        textStyle="footerLink"
                        _hover={{
                          textDecoration: 'underline',
                          color: 'gray.300',
                        }}
                      >
                        -{' '}
                        {currentLang === 'fr'
                          ? 'Secteurs desservis'
                          : 'Service areas'}
                      </Link>
                    </Stack>
                  </Stack>
                </SimpleGrid>

                <Divider borderColor="gray.600" mb={{ base: 4, md: 6 }} />

                <Flex
                  direction={{ base: 'column', md: 'row' }}
                  justify="space-between"
                  align={{ base: 'flex-start', md: 'center' }}
                  spacing={4}
                  mb={{ base: 6, md: 8 }}
                >
                  <Stack spacing={2}>
                    <Link
                      href="tel:4388680772"
                      color="white"
                      textStyle="footerLink"
                      _hover={{ textDecoration: 'underline', color: 'gray.300' }}
                    >
                      (438) 868-0772
                    </Link>
                    <Link
                      href="mailto:leleverdupinceau@gmail.com"
                      color="white"
                      textStyle="footerLink"
                      wordBreak="break-all"
                      _hover={{ textDecoration: 'underline', color: 'gray.300' }}
                    >
                      leleverdupinceau@gmail.com
                    </Link>
                    <Text color="white" textStyle="footerLink" fontSize={{ base: 'sm', sm: 'sm' }} wordBreak="break-word">
                      2175 Rue Saint-Patrick, Montréal, QC H3K 1B4
                    </Text>
                  </Stack>
                  <ButtonGroup variant="tertiary.accent" mt={{ base: 4, md: 0 }}>
                    <IconButton
                      as="a"
                      textColor="white"
                      href="https://www.instagram.com/leleverdupinceau/"
                      aria-label="Instagram"
                      fontSize={{ base: 'lg', md: 'xl' }}
                      icon={<FontAwesomeIcon icon={faInstagram} />}
                      _hover={{ color: 'gray.300' }}
                    />
                    <IconButton
                      as="a"
                      href="https://www.facebook.com/profile.php?id=100094900160859"
                      textColor="white"
                      fontSize={{ base: 'lg', md: 'xl' }}
                      aria-label="Facebook"
                      icon={<FontAwesomeIcon icon={faFacebook} />}
                      _hover={{ color: 'gray.300' }}
                    />
                  </ButtonGroup>
                </Flex>

                <Divider borderColor="gray.600" mb={4} />

                <HStack
                  spacing={4}
                  justify={{ base: 'center', md: 'flex-start' }}
                  flexWrap="wrap"
                >
                  <Link
                    as={RouterLink}
                    to="/politiques/termes-conditions"
                    color="white"
                    textStyle="footerLink"
                    _hover={{ textDecoration: 'underline', color: 'gray.300' }}
                  >
                    {currentLang === 'fr' ? 'Mentions légales' : 'Legal notice'}
                  </Link>
                  <Text color="white" textStyle="footerLink">
                    |
                  </Text>
                  <Link
                    as={RouterLink}
                    to="/politiques/confidentialite"
                    color="white"
                    textStyle="footerLink"
                    _hover={{ textDecoration: 'underline', color: 'gray.300' }}
                  >
                    {currentLang === 'fr'
                      ? 'Politique de confidentialité'
                      : 'Privacy policy'}
                  </Link>
                </HStack>
              </Box>
            </Box>
          )}
          <FloatingLanguageToggle />
        </Flex>
      </Box>
    </Fragment>
  );
}
