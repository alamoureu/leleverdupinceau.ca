import React, { useContext } from 'react';
import {
  HStack,
  ButtonGroup,
  Button,
  Image,
  Text,
  Spacer,
  Box,
  Icon,
  IconButton,
  Flex,
  Stack,
} from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { ServicesPopover } from './ServicesPopover';
import { MobileDrawer } from './MobileDrawer';
import { useNavigate, useLocation } from 'react-router-dom';
import appContext from '../../AppProvider';
import { useTranslation } from '../i18n';

export default function WebsiteNavBar({ isNewLanding: isNewLandingProp }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { currentLang } = useContext(appContext);
  const { t } = useTranslation();

  const isHomePage = location.pathname === '/';
  const isNewLanding =
    isNewLandingProp !== undefined
      ? isNewLandingProp
      : (location.pathname === '/fr/peintre-montreal' || location.pathname === '/en/peintre-montreal');

  return (
    <Box
      as="header"
      spacing={0}
      gap={0}
      bg="white"
      position="sticky"
      top={0}
      left={0}
      right={0}
      zIndex={9999}
      pointerEvents="auto"
    >
      {!isNewLanding && (
        <Box
          position="relative"
          w="100%"
          zIndex={1}
          bg="black"
          pointerEvents="auto"
        >
          <Box
            maxW="1440px"
            mx="auto"
            py={{ base: 0.5, sm: 1 }}
            px={{ base: 4, sm: 6, lg: 8, xl: 8, '2xl': 0 }}
          >
            <HStack justify="space-between" spacing={4}>
              <HStack spacing={4}>
                <HStack spacing={2} h="18px" alignItems="center">
                  <Text
                    fontSize={{ base: 'xs', sm: 'sm' }}
                    color="white"
                    fontWeight="light"
                  >
                    Suivez-nous
                  </Text>
                  <IconButton
                    as="a"
                    href="https://www.instagram.com/leleverdupinceau/"
                    aria-label="Instagram"
                    icon={<FontAwesomeIcon icon={faInstagram} />}
                    size="sm"
                    color="white"
                    variant="ghost"
                    _hover={{ bg: 'gray.800' }}
                    fontSize={{ base: 'sm', sm: 'md' }}
                    mr="-10px"
                  />
                  <IconButton
                    as="a"
                    href="https://www.facebook.com/profile.php?id=100094900160859"
                    aria-label="Facebook"
                    icon={<FontAwesomeIcon icon={faFacebook} />}
                    size="sm"
                    color="white"
                    variant="ghost"
                    _hover={{ bg: 'gray.800' }}
                    fontSize={{ base: 'sm', sm: 'md' }}
                  />
                </HStack>
              </HStack>

              <HStack spacing={2} alignItems="center">
                <Icon
                  as={FontAwesomeIcon}
                  icon={faPhoneAlt}
                  color="white"
                  fontSize={{ base: 'xs', sm: 'sm' }}
                />
                <a href="tel:4388680772">
                  <Text
                    fontSize={{ base: 'xs', sm: 'sm' }}
                    color="white"
                    fontWeight="medium"
                    _hover={{ textDecoration: 'underline' }}
                  >
                    (438) 868-0772
                  </Text>
                </a>
              </HStack>
            </HStack>
          </Box>
        </Box>
      )}

      <Box
        w="100%"
        bg="brand.700"
        py={{ base: 1.5, sm: 2, md: 3, lg: 4 }}
        px={{ base: 4, sm: 6, lg: 8 }}
        shadow="md"
        position="relative"
        zIndex={2}
        pointerEvents="auto"
      >
        <Box maxW="1440px" w="100%" mx="auto" position="relative" zIndex={1}>
          <HStack
            spacing={{ base: 3, sm: 4 }}
            alignItems="center"
            justify="space-between"
            w="100%"
            flexWrap="nowrap"
            minW={0}
            position="relative"
            zIndex={2}
            pointerEvents="auto"
          >
            <Box
              as="button"
              type="button"
              flexShrink={0}
              onClick={isNewLanding ? undefined : () => navigate('/')}
              cursor={isNewLanding ? 'default' : 'pointer'}
              pointerEvents="auto"
              aria-label={currentLang === 'fr' ? 'Accueil' : 'Home'}
              display="flex"
              alignItems="center"
              h={{ base: '52px', sm: '56px', md: '64px', lg: '68px' }}
              maxW={{ base: '160px', sm: '180px', md: 'none' }}
            >
              <Image
                loading="lazy"
                src="https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/whitelogo.png"
                h="100%"
                w="auto"
                maxW="100%"
                objectFit="contain"
                pointerEvents="none"
              />
            </Box>

            <Spacer
              display={isNewLanding ? 'block' : { base: 'none', lg: 'block' }}
            />

            {isNewLanding && (
              <HStack
                spacing={2}
                alignItems="center"
                flexShrink={0}
                ml={{ base: 2, lg: 4 }}
                minW="max-content"
              >
                <Icon
                  as={FontAwesomeIcon}
                  icon={faPhoneAlt}
                  color="white"
                  textStyle="nav"
                />
                <a href="tel:4388680772">
                  <Text
                    textStyle="nav"
                    color="white"
                    fontWeight="medium"
                    _hover={{ textDecoration: 'underline' }}
                    whiteSpace="nowrap"
                  >
                    (438) 868-0772
                  </Text>
                </a>
              </HStack>
            )}

            <Spacer
              display={{ base: 'none', lg: isNewLanding ? 'none' : 'block' }}
            />

            <ButtonGroup
              size={{ base: 'sm', sm: 'md', lg: 'sm', xl: 'md' }}
              variant="text.accent"
              spacing={{ base: '2', lg: '1.5', xl: '2' }}
              display={{ base: 'none', lg: isNewLanding ? 'none' : 'flex' }}
              color="white"
            >
              <ServicesPopover />
              <Button
                onClick={() => navigate('/secteurs-desservis')}
                textStyle="nav"
                px={{ base: 3, lg: 3, xl: 3 }}
              >
                {currentLang === 'fr' ? 'Secteurs desservis' : 'Service Areas'}
              </Button>
              <Button
                onClick={() => navigate('/peintre-professionnel')}
                textStyle="nav"
                px={{ base: 3, lg: 3, xl: 3 }}
              >
                {currentLang === 'fr'
                  ? 'Peintres professionnels'
                  : 'Professional Painters'}
              </Button>
              <Button
                onClick={() => navigate('/a-propos')}
                textStyle="nav"
                px={{ base: 3, lg: 3, xl: 3 }}
              >
                {currentLang === 'fr' ? 'À propos' : 'About'}
              </Button>
              <Button
                onClick={() => navigate('/avis')}
                textStyle="nav"
                px={{ base: 3, lg: 3, xl: 3 }}
              >
                {currentLang === 'fr' ? 'Avis' : 'Reviews'}
              </Button>
              <Button
                onClick={() => navigate('/blog')}
                textStyle="nav"
                px={{ base: 3, lg: 3, xl: 3 }}
              >
                {currentLang === 'fr' ? 'Blog' : 'Blog'}
              </Button>
              <Button
                onClick={() => navigate('/contact')}
                textStyle="nav"
                px={{ base: 4, lg: 5, xl: 6 }}
                py={{ base: 2, lg: 2.5, xl: 3 }}
                bg="brand.500"
                color="white"
                borderRadius="full"
                fontWeight="semibold"
                _hover={{ bg: 'brand.600' }}
                transition="all 0.2s"
              >
                {currentLang === 'fr' ? 'Contact' : 'Contact'}
              </Button>
            </ButtonGroup>

            <Box
              display={{
                base: isNewLanding ? 'none' : 'flex',
                lg: 'none',
              }}
              alignItems="center"
              flexShrink={0}
              position="relative"
              zIndex={10}
              pointerEvents="auto"
            >
              <MobileDrawer />
            </Box>
          </HStack>
        </Box>

        {(isHomePage || isNewLanding) && (
          <Box
            position="absolute"
            bottom={0}
            left={0}
            right={0}
            zIndex={1}
            pointerEvents="none"
          >
            <Flex
              maxW="1440px"
              mx="auto"
              px={{ base: 4, sm: 6, lg: 8 }}
              justify="flex-end"
              pointerEvents="none"
            >
              <Box
                mt={2}
                transform="translateY(100%)"
                bg="white"
                pointerEvents="auto"
                borderTopRadius="none"
                borderBottomRadius={{ base: '50px', sm: '60px', md: '80px', lg: '100px' }}
                p={{ base: 1.5, sm: 2, md: 3 }}
                boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
                minW={{ base: '52px', sm: '60px', md: '90px' }}
                maxW={{ base: '60px', sm: '70px', md: '110px' }}
              >
                <Stack spacing={0} align="center">
                  <Text
                    fontSize={{ base: '2xs', sm: 'xs', md: 'sm' }}
                    color="gray.600"
                    fontWeight="600"
                  >
                    {t.googleReviews}
                  </Text>
                  <Flex align="center" gap={0.5}>
                    <Text
                      fontSize={{ base: '2xs', sm: 'xs', md: 'sm' }}
                      color="gray.600"
                      fontWeight="600"
                    >
                      {t.googleRating}
                    </Text>
                    <Flex gap={0.5}>
                      {[...Array(5)].map((_, i) => (
                        <StarIcon
                          key={i}
                          color="#FBBC04"
                          boxSize={{ base: 1.5, sm: 2, md: 3 }}
                        />
                      ))}
                    </Flex>
                  </Flex>
                  <Image
                    src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png"
                    alt="Google"
                    h={{ base: '14px', sm: '18px', md: '40px' }}
                    w={{ base: '14px', sm: '18px', md: '40px' }}
                    mt={{ base: 0.5, md: 1 }}
                    objectFit="contain"
                  />
                </Stack>
              </Box>
            </Flex>
          </Box>
        )}
      </Box>
    </Box>
  );
}
