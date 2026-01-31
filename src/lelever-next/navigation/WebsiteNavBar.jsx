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

  const isHomePage = location.pathname === '/new-home';
  const isNewLanding =
    isNewLandingProp !== undefined
      ? isNewLandingProp
      : (location.pathname === '/fr/peintre-montreal' || location.pathname === '/en/peintre-montreal');

  return (
    <Box spacing={0} gap={0} bg="white">
      {!isNewLanding && (
        <Box
          position="fixed"
          top={0}
          left={0}
          right={0}
          w="100%"
          zIndex={1000}
          bg="black"
        >
          <Box
            maxW="1440px"
            mx="auto"
            py={{ base: 1.5, sm: 2 }}
            px={{ base: 4, sm: 6, lg: 8, xl: 8, '2xl': 0 }}
          >
            <HStack justify="space-between" spacing={4}>
              <HStack spacing={4}>
                <HStack spacing={2} h="20px" alignItems="center">
                  <Text
                    fontSize={{ base: 'sm', sm: 'md' }}
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
                    fontSize={{ base: '16px', sm: '18px' }}
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
                    fontSize={{ base: '16px', sm: '18px' }}
                  />
                </HStack>
              </HStack>

              <HStack spacing={2} alignItems="center">
                <Icon
                  as={FontAwesomeIcon}
                  icon={faPhoneAlt}
                  color="white"
                  fontSize={{ base: '14px', sm: '16px' }}
                />
                <a href="tel:4388680772">
                  <Text
                    fontSize={{ base: 'sm', sm: 'md' }}
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
        bg="#022A68"
        py={{ base: 1.5, sm: 2, md: 3, lg: 4 }}
        px={{ base: 4, sm: 6, lg: 8 }}
        shadow="md"
        position="relative"
        mt={isNewLanding ? 0 : { base: '30px', sm: '37px' }}
      >
        <Box maxW="1440px" w="100%" mx="auto" position="relative">
          <HStack
            spacing={{ base: 3, sm: 4 }}
            alignItems="center"
            justify="space-between"
            w="100%"
            flexWrap="nowrap"
            minW={0}
          >
            {/* Logo: left (not clickable on new-landing) */}
            <Image
              loading="lazy"
              src={
                'https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/whitelogo.png'
              }
              h={{ base: '56px', md: '64px', lg: '68px' }}
              maxH={{ base: '56px', md: '64px', lg: '68px' }}
              w="auto"
              objectFit="contain"
              flexShrink={0}
              sx={{ imageRendering: 'auto' }}
              onClick={isNewLanding ? undefined : () => navigate('/new-home')}
              cursor={isNewLanding ? 'default' : 'pointer'}
              pointerEvents={isNewLanding ? 'none' : 'auto'}
            />

            <Spacer
              display={isNewLanding ? 'block' : { base: 'none', lg: 'block' }}
            />

            {/* Phone + icon: only on new-landing (logo left, phone right) */}
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
                  fontSize="15px"
                />
                <a href="tel:4388680772">
                  <Text
                    fontSize="sm"
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
                fontSize={{ base: 'sm', sm: 'md', lg: 'sm', xl: 'sm' }}
                px={{ base: 3, lg: 3, xl: 3 }}
              >
                {currentLang === 'fr' ? 'Secteurs desservis' : 'Service Areas'}
              </Button>
              <Button
                onClick={() => navigate('/peintre-professionnel')}
                fontSize={{ base: 'sm', sm: 'md', lg: 'sm', xl: 'sm' }}
                px={{ base: 3, lg: 3, xl: 3 }}
              >
                {currentLang === 'fr'
                  ? 'Peintres professionnels'
                  : 'Professional Painters'}
              </Button>
              <Button
                onClick={() => navigate('/a-propos')}
                fontSize={{ base: 'sm', sm: 'md', lg: 'sm', xl: 'sm' }}
                px={{ base: 3, lg: 3, xl: 3 }}
              >
                {currentLang === 'fr' ? 'À propos' : 'About'}
              </Button>
              <Button
                onClick={() => navigate('/avis')}
                fontSize={{ base: 'sm', sm: 'md', lg: 'sm', xl: 'sm' }}
                px={{ base: 3, lg: 3, xl: 3 }}
              >
                {currentLang === 'fr' ? 'Avis' : 'Reviews'}
              </Button>
              <Button
                onClick={() => navigate('/blog')}
                fontSize={{ base: 'sm', sm: 'md', lg: 'sm', xl: 'sm' }}
                px={{ base: 3, lg: 3, xl: 3 }}
              >
                {currentLang === 'fr' ? 'Blog' : 'Blog'}
              </Button>
              <Button
                onClick={() => navigate('/new-contact')}
                fontSize={{ base: 'sm', sm: 'md', lg: 'sm', xl: 'sm' }}
                px={{ base: 4, lg: 5, xl: 6 }}
                py={{ base: 2, lg: 2.5, xl: 3 }}
                bg="#014CC4"
                color="white"
                borderRadius="full"
                fontWeight="semibold"
                _hover={{ bg: '#0139A0' }}
                transition="all 0.2s"
              >
                {currentLang === 'fr' ? 'Contact' : 'Contact'}
              </Button>
            </ButtonGroup>

            <Box
              display={{
                base: isNewLanding ? 'none' : 'block',
                lg: 'none',
              }}
            >
              <MobileDrawer />
            </Box>
          </HStack>
        </Box>

        {/* Google badge: anchored to bottom of full navbar, then shifted down so it sits just below */}
        {(isHomePage || isNewLanding) && (
          <Box
            position="absolute"
            bottom={0}
            left={0}
            right={0}
            zIndex={10}
            pointerEvents="none"
          >
            <Flex
              maxW="1440px"
              mx="auto"
              px={{ base: 4, sm: 6, lg: 8 }}
              justify="flex-end"
              pointerEvents="auto"
            >
              <Box
                mt={2}
                transform="translateY(100%)"
                bg="white"
                borderTopRadius="none"
                borderBottomRadius={{ base: '70px', md: '80px', lg: '100px' }}
                p={{ base: 2, md: 3 }}
                boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
                minW={{ base: '65px', md: '90px' }}
                maxW={{ base: '75px', md: '110px' }}
              >
                <Stack spacing={0} align="center">
                  <Text
                    fontSize={{ base: '2xs', md: 'sm' }}
                    color="gray.600"
                    fontWeight="600"
                  >
                    {t.googleReviews}
                  </Text>
                  <Flex align="center" gap={0.5}>
                    <Text
                      fontSize={{ base: '2xs', md: 'sm' }}
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
                          boxSize={{ base: 2, md: 3 }}
                        />
                      ))}
                    </Flex>
                  </Flex>
                  <Image
                    src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png"
                    alt="Google"
                    h={{ base: '30px', md: '40px' }}
                    w={{ base: '30px', md: '40px' }}
                    mt={1}
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
