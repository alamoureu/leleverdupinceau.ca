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
import { DocumentPopover } from './DocumentPopover';
import { MobileDrawer } from './MobileDrawer';
import { useNavigate } from 'react-router-dom';
import appContext from '../../AppProvider';
import { useTranslation } from '../i18n';

export default function WebsiteNavBar() {
  const navigate = useNavigate();
  const { currentLang } = useContext(appContext);
  const { t } = useTranslation();

  return (
    <Box position='sticky' top={0} zIndex={1000}>
      <Box bg='black' w='100%'>
        <Box
          maxW='1440px'
          mx='auto'
          py={{ base: 2, sm: 2 }}
          px={{ base: 4, sm: 6, lg: 8 }}
        >
          <HStack justify='space-between' spacing={4}>
            <HStack spacing={4}>
              <Box display={{ base: 'block', lg: 'none' }}>
                <MobileDrawer navColor='black' navSize='6rem' />
              </Box>

              <HStack
                spacing={2}
                display={{ base: 'none', sm: 'flex' }}
                alignItems='center'
              >
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
                  fontSize='18px'
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
                  fontSize='18px'
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
      >
        <Box maxW='1440px' w='100%' mx='auto' position='relative'>
          <HStack
            spacing='4'
            alignItems='center'
            justify={{ base: 'center', lg: 'space-between' }}
            w='100%'
          >
            <Image
              loading='lazy'
              src={
                'https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/whitelogo.png'
              }
              h={{ base: '75px', sm: '75px', lg: '70px' }}
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
              <Button
                onClick={() => navigate('/new-home')}
                fontSize={{ base: 'sm', sm: 'md', lg: 'sm', xl: 'sm' }}
                px={{ base: 3, lg: 3, xl: 3 }}
              >
                {currentLang === 'fr' ? 'Accueil' : 'Home'}
              </Button>
              <DocumentPopover />
              <Button
                onClick={() => navigate('/soumission')}
                fontSize={{ base: 'sm', sm: 'md', lg: 'sm', xl: 'sm' }}
                px={{ base: 3, lg: 3, xl: 3 }}
              >
                {currentLang === 'fr'
                  ? 'Soumission Gratuite'
                  : 'Free Quotation'}
              </Button>
              <Button
                onClick={() => navigate('/contact')}
                fontSize={{ base: 'sm', sm: 'md', lg: 'sm', xl: 'sm' }}
                px={{ base: 3, lg: 3, xl: 3 }}
              >
                {currentLang === 'fr' ? 'Nous joindre' : 'Contact us'}
              </Button>
              <Button
                onClick={() => navigate('/a-propos-de-nous')}
                fontSize={{ base: 'sm', sm: 'md', lg: 'sm', xl: 'sm' }}
                px={{ base: 3, lg: 3, xl: 3 }}
              >
                {currentLang === 'fr' ? 'À propos de nous' : 'About us'}
              </Button>
              <Button
                onClick={() => navigate('/emplois')}
                fontSize={{ base: 'sm', sm: 'md', lg: 'sm', xl: 'sm' }}
                px={{ base: 3, lg: 3, xl: 3 }}
              >
                {currentLang === 'fr' ? 'Emplois' : 'Employment'}
              </Button>
            </ButtonGroup>
          </HStack>

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
            <Stack spacing={{ base: 1, md: 2.5 }} align='center'>
              <Text
                fontSize={{ base: 'sm', md: 'lg' }}
                color='gray.800'
                fontWeight='600'
              >
                {t.googleReviews}
              </Text>
              <Flex align='center' gap={{ base: 0.5, md: 1 }}>
                <Text
                  fontWeight='700'
                  fontSize={{ base: 'sm', md: '2xl' }}
                  color='gray.800'
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
                h={{ base: '20px', md: '40px' }}
                w={{ base: '20px', md: '40px' }}
                mt={{ base: 0.5, md: 1 }}
              />
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
