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
import { PROMO_BANNER_HEIGHT } from '../home-page/PromoBanner';

export default function WebsiteNavBar({ isNewLanding: isNewLandingProp }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { currentLang } = useContext(appContext);
  const { t } = useTranslation();

  const isHomePage = location.pathname === '/';
  const isNewLanding =
    isNewLandingProp !== undefined
      ? isNewLandingProp
      : location.pathname === '/fr/peintre-montreal' ||
        location.pathname === '/en/peintre-montreal' ||
        location.pathname === '/en/painter-montreal' ||
        location.pathname === '/fr/peintre-gatineau' ||
        location.pathname === '/en/peintre-gatineau' ||
        location.pathname === '/en/painter-gatineau';

  return (
    <Box
      as="header"
      spacing={0}
      gap={0}
      bg={isNewLanding ? 'white' : 'brand.700'}
      position="fixed"
      top={isNewLanding ? PROMO_BANNER_HEIGHT : 0}
      left={0}
      right={0}
      width="100%"
      zIndex={9999}
      pointerEvents="auto"
      margin={0}
      padding={0}
      overflow="visible"
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
                <a href="tel:+14388680772">
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
        bg={isNewLanding ? 'white' : 'brand.700'}
        py={{ base: 2.5, sm: 2, md: 3, lg: 4 }}
        px={{ base: 4, sm: 6, lg: 8 }}
        shadow="md"
        position="relative"
        zIndex={2}
        pointerEvents="auto"
        margin={0}
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
                decoding="async"
                src="https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/whitelogo.png"
                h="100%"
                w="auto"
                maxW="100%"
                objectFit="contain"
                pointerEvents="none"
                style={{
                  filter: isNewLanding ? 'invert(1)' : undefined,
                }}
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
                <a href="tel:+14388680772">
                  <Text
                    textStyle="nav"
                    color="brand.500"
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
            >
              <ServicesPopover />
              <Button
                onClick={() => navigate('/secteurs-desservis')}
                textStyle="nav"
                px={{ base: 3, lg: 3, xl: 3 }}
                color="white"
                _hover={{ color: 'gray.200', bg: 'whiteAlpha.200' }}
              >
                {currentLang === 'fr' ? 'Secteurs desservis' : 'Service Areas'}
              </Button>
              <Button
                onClick={() => navigate('/peintre-professionnel')}
                textStyle="nav"
                px={{ base: 3, lg: 3, xl: 3 }}
                color="white"
                _hover={{ color: 'gray.200', bg: 'whiteAlpha.200' }}
              >
                {currentLang === 'fr'
                  ? 'Peintres professionnels'
                  : 'Professional Painters'}
              </Button>
              <Button
                onClick={() => navigate('/avis')}
                textStyle="nav"
                px={{ base: 3, lg: 3, xl: 3 }}
                color="white"
                _hover={{ color: 'gray.200', bg: 'whiteAlpha.200' }}
              >
                {currentLang === 'fr' ? 'Avis' : 'Reviews'}
              </Button>
              <Button
                onClick={() => navigate('/blog')}
                textStyle="nav"
                px={{ base: 3, lg: 3, xl: 3 }}
                color="white"
                _hover={{ color: 'gray.200', bg: 'whiteAlpha.200' }}
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
            overflow="visible"
          >
            <Flex
              maxW="1440px"
              mx="auto"
              px={{ base: 4, sm: 6, lg: 8 }}
              justify="flex-end"
              pointerEvents="none"
              overflow="visible"
            >
              <Box
                mt={2}
                transform="translateY(100%)"
                bg="white"
                pointerEvents="auto"
                borderTopRadius="none"
                borderBottomRadius={
                  isNewLanding
                    ? {
                        base: '50px',
                        sm: '56px',
                        md: '64px',
                        lg: '72px',
                        xl: '88px',
                      }
                    : { base: '50px', sm: '60px', md: '80px', lg: '100px' }
                }
                p={
                  isNewLanding
                    ? { base: 2, sm: 2.5, md: 2.5, lg: 2.5, xl: 3 }
                    : { base: 2, sm: 2.5, md: 3 }
                }
                boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
                minW={
                  isNewLanding
                    ? {
                        base: '64px',
                        sm: '88px',
                        md: '86px',
                        lg: '90px',
                        xl: '94px',
                      }
                    : { base: '64px', sm: '92px', md: '94px' }
                }
                maxW={
                  isNewLanding
                    ? {
                        base: '84px',
                        sm: '106px',
                        md: '102px',
                        lg: '108px',
                        xl: '116px',
                      }
                    : { base: '84px', sm: '112px', md: '116px' }
                }
                overflow="visible"
                minH={
                  isNewLanding
                    ? {
                        base: '72px',
                        sm: '76px',
                        md: '74px',
                        lg: '78px',
                        xl: '88px',
                      }
                    : { base: '72px', sm: '80px', md: '88px' }
                }
              >
                <Stack spacing={0} align="center" overflow="visible">
                  <Text
                    fontSize={
                      isNewLanding
                        ? {
                            base: '2xs',
                            sm: 'xs',
                            md: 'xs',
                            lg: 'xs',
                            xl: 'sm',
                          }
                        : { base: '2xs', sm: 'xs', md: 'sm' }
                    }
                    color="gray.600"
                    fontWeight="600"
                    textAlign="center"
                    lineHeight="1.2"
                    noOfLines={2}
                  >
                    {t.googleReviews}
                  </Text>
                  <Flex align="center" gap={0.5}>
                    <Text
                      fontSize={
                        isNewLanding
                          ? {
                              base: '2xs',
                              sm: 'xs',
                              md: 'xs',
                              lg: 'xs',
                              xl: 'sm',
                            }
                          : { base: '2xs', sm: 'xs', md: 'sm' }
                      }
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
                          boxSize={
                            isNewLanding
                              ? { base: 1.5, sm: 2, md: 2, lg: 2.5, xl: 3 }
                              : { base: 1.5, sm: 2.5, md: 3 }
                          }
                        />
                      ))}
                    </Flex>
                  </Flex>
                  <Image
                    src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png"
                    alt="Google"
                    h={
                      isNewLanding
                        ? {
                            base: '22px',
                            sm: '24px',
                            md: '26px',
                            lg: '28px',
                            xl: '36px',
                          }
                        : { base: '22px', sm: '24px', md: '40px' }
                    }
                    w={
                      isNewLanding
                        ? {
                            base: '22px',
                            sm: '24px',
                            md: '26px',
                            lg: '28px',
                            xl: '36px',
                          }
                        : { base: '22px', sm: '24px', md: '40px' }
                    }
                    mt={{ base: 0.5, sm: 0.5, md: 1 }}
                    objectFit="contain"
                    loading="lazy"
                    decoding="async"
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
