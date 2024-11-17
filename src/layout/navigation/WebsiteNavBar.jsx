/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from 'react';
import {
  HStack,
  ButtonGroup,
  Button,
  Stack,
  Image,
  Text,
  Spacer,
  Box,
} from '@chakra-ui/react';
import { DocumentPopover } from './DocumentPopover';
import { MobileDrawer } from './MobileDrawer';
import { useNavigate } from 'react-router-dom';
import appContext from '../../AppProvider';
import '../../css/navBar.css';

export default function WebsiteNavBar() {
  const navigate = useNavigate();
  const { currentLang } = useContext(appContext);

  const [navSize, setNavSize] = useState('6rem');
  const [navColor, setNavColor] = useState('#004BA8');
  const [className, setClassName] = useState('');
  let lastScrollTop = 0;

  const [logoFadeClass, setLogoFadeClass] = useState('fade-int-slow');

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        setNavColor('transparent');
        setNavSize('0rem');
        setLogoFadeClass('fade-out');
      } else if (scrollTop < lastScrollTop) {
        setNavColor('#004BA8');
        setNavSize('6rem');
        setClassName('fade-out-image');
        setLogoFadeClass('fade-int-slow');
      }

      lastScrollTop = Math.max(scrollTop, 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <HStack
      justify="space-between"
      w="100%"
      px={{ base: '2%', lg: '10%' }}
      shadow="md"
      style={{
        backgroundColor: navColor,
        height: navSize,
        color: navSize === '0rem' ? 'transparent' : 'white',
        transition: 'all 1s',
      }}
    >
      <HStack spacing="4" alignItems="center" w="100%">
        <MobileDrawer navColor={navColor} navSize={navSize} />
        <Stack className={className} pl="10px">
          <Image
            src={
              'https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/whitelogo.png'
            }
            h={{ base: '50px', lg: '60px' }}
            onClick={() => navigate('/')}
            className={logoFadeClass}
          />
        </Stack>
        <Spacer />
        <Box display={{ base: 'initial', md: 'none' }}>
          <a href="tel:4388680772">
            <Stack
              cursor="pointer"
              className={navSize === '0rem' ? 'fade-out' : 'fade-int'}
            >
              <Text fontSize="md" color="white" fontWeight="semibold">
                (438) 868-0772
              </Text>
            </Stack>
          </a>
        </Box>
      </HStack>

      <ButtonGroup
        size="lg"
        variant="text.accent"
        spacing="2"
        display={{ base: 'none', lg: 'flex' }}
        style={{
          color: navSize === '0rem' ? 'transparent' : 'white',
          transition: 'all 1s',
        }}
      >
        <Button onClick={() => navigate('/')}>
          {currentLang === 'fr' ? 'Accueil' : 'Home'}
        </Button>
        <DocumentPopover />
        <Button onClick={() => navigate('/soumission')}>
          {currentLang === 'fr' ? 'Soumission Gratuite' : 'Free Quotation'}
        </Button>
        <Button onClick={() => navigate('/contact')}>
          {currentLang === 'fr' ? 'Nous joindre' : 'Contact us'}
        </Button>
        <Button onClick={() => navigate('/a-propos-de-nous')}>
          {currentLang === 'fr' ? 'À propos de nous' : 'About us'}
        </Button>
        <Button onClick={() => navigate('/emplois')}>
          {currentLang === 'fr' ? 'Emplois' : 'Employment'}
        </Button>
      </ButtonGroup>
    </HStack>
  );
}
