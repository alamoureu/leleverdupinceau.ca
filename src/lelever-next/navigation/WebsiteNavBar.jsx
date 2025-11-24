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

export default function WebsiteNavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { currentLang } = useContext(appContext);
  const { t } = useTranslation();

  const isHomePage = location.pathname === '/new-home';

  return (
    <Box spacing={0} gap={0} bg='red'>
      <Box
        position='fixed'
        top={0}
        left={0}
        right={0}
        w='100%'
        zIndex={1000}
        bg='black'
      >
        <Box
          maxW='1440px'
          mx='auto'
          py={{ base: 2, sm: 2 }}
          px={{ base: 4, sm: 6, lg: 8, xl: 8, '2xl': 0 }}
        >
          <HStack justify='space-between' spacing={4}>
            <HStack spacing={4}>
              <HStack spacing={2} h='20px' alignItems='center'>
                <Text
                  fontSize={{ base: 'sm', sm: 'md' }}
                  color='white'
                  fontWeight='light'
                >
                  Suivez-nous
                </Text>
                <IconButton
                  as='a'
                  href='https://www.instagram.com/leleverdupinceau/'
                  aria-label='Instagram'
                  icon={<FontAwesomeIcon icon={faInstagram} />}
                  size='sm'
                  color='white'
                  variant='ghost'
                  _hover={{ bg: 'gray.800' }}
                  fontSize={{ base: '16px', sm: '18px' }}
                  mr='-10px'
                />
                <IconButton
                  as='a'
                  href='https://www.facebook.com/profile.php?id=100094900160859'
                  aria-label='Facebook'
                  icon={<FontAwesomeIcon icon={faFacebook} />}
                  size='sm'
                  color='white'
                  variant='ghost'
                  _hover={{ bg: 'gray.800' }}
                  fontSize={{ base: '16px', sm: '18px' }}
                />
              </HStack>
            </HStack>

            <HStack spacing={2} alignItems='center'>
              <Icon
                as={FontAwesomeIcon}
                icon={faPhoneAlt}
                color='white'
                fontSize={{ base: '14px', sm: '16px' }}
              />
              <a href='tel:4388680772'>
                <Text
                  fontSize={{ base: 'sm', sm: 'md' }}
                  color='white'
                  fontWeight='medium'
                  _hover={{ textDecoration: 'underline' }}
                >
                  (438) 868-0772
                </Text>
              </a>
            </HStack>
          </HStack>
        </Box>
      </Box>

      <Box
        w='100%'
        bg='#022A68'
        py={{ base: 2, sm: 2 }}
        px={{ base: 4, sm: 6, lg: 8 }}
        shadow='md'
        position='relative'
        mt='37px'
      >
        <Box maxW='1440px' w='100%' mx='auto' position='relative'>
          <HStack
            spacing='4'
            alignItems='center'
            justify={{ base: 'space-between', lg: 'space-between' }}
            w='100%'
          >
            <Image
              loading='lazy'
              src={
                'https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/whitelogo.png'
              }
              h={{ base: '70px', sm: '70px', lg: '70px' }}
              onClick={() => navigate('/new-home')}
              cursor='pointer'
            />

            <Spacer display={{ base: 'none', lg: 'block' }} />

            <ButtonGroup
              size={{ base: 'sm', sm: 'md', lg: 'sm', xl: 'md' }}
              variant='text.accent'
              spacing={{ base: '2', lg: '1.5', xl: '2' }}
              display={{ base: 'none', lg: 'flex' }}
              color='white'
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
                onClick={() => navigate('/new-home/a-propos')}
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
                onClick={() => navigate('/contact')}
                fontSize={{ base: 'sm', sm: 'md', lg: 'sm', xl: 'sm' }}
                px={{ base: 4, lg: 5, xl: 6 }}
                py={{ base: 2, lg: 2.5, xl: 3 }}
                bg='#014CC4'
                color='white'
                borderRadius='full'
                fontWeight='semibold'
                _hover={{ bg: '#0139A0' }}
                transition='all 0.2s'
              >
                {currentLang === 'fr' ? 'Contact' : 'Contact'}
              </Button>
            </ButtonGroup>

            <Box display={{ base: 'block', lg: 'none' }}>
              <MobileDrawer />
            </Box>
          </HStack>

          {isHomePage && (
            <Box
              position='absolute'
              top='100%'
              right={{ base: '-5px', md: '10px', lg: '10px' }}
              zIndex={10}
              bg='white'
              borderTopRadius='none'
              borderBottomRadius='full'
              p={{ base: 1.5, md: 5 }}
              boxShadow='0 4px 6px rgba(0, 0, 0, 0.1)'
              minW={{ base: '80px', md: '150px' }}
              mt={2}
            >
              <Stack spacing={0} align='center'>
                <Text
                  fontSize={{ base: 'sm', md: 'lg' }}
                  color='gray.600'
                  fontWeight='600'
                >
                  {t.googleReviews}
                </Text>
                <Flex align='center' gap={{ base: 0.5, md: 1 }}>
                  <Text
                    fontSize={{ base: 'sm', md: '2xl' }}
                    color='gray.600'
                    fontWeight='600'
                  >
                    {t.googleRating}
                  </Text>
                  <Flex gap={0.5}>
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        color='#FBBC04'
                        boxSize={{ base: 2.5, md: 4 }}
                      />
                    ))}
                  </Flex>
                </Flex>
                <Image
                  src='https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png'
                  alt='Google'
                  h={{ base: '45px', md: '45px' }}
                  w={{ base: '45px', md: '45px' }}
                  mt={{ base: 0.5, md: 1 }}
                />
              </Stack>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}
