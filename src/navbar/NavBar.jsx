import React, { useState, useEffect, useContext } from 'react';
import { HStack, ButtonGroup, Button, Stack, Image } from '@chakra-ui/react';
import { DocumentPopover } from './DocumentPopover';
import { MobileDrawer } from './MobileDrawer';
import { useNavigate } from 'react-router-dom';
import appContext from '../AppProvider';
import './styles.css';
import logo from './logo_dark.jpg';

export default function NavBar() {
  const navigate = useNavigate();

  const { currentLang } = useContext(appContext);

  const [navSize, setnavSize] = useState('6rem');
  const [navColor, setnavColor] = useState('#061729');

  const [className, setClassName] = useState('');

  var lastScrollTop = 0;

  useEffect(() => {
    window.addEventListener(
      'scroll',
      function () {
        var st = window.pageYOffset || document.documentElement.scrollTop;
        if (st > lastScrollTop) {
          setnavColor('transparent');
          setnavSize('0rem');
          setClassName('fade-in-image');
        } else if (st < lastScrollTop) {
          setnavColor('#061729');
          setnavSize('6rem');
          setClassName('fade-out-image');
        }

        lastScrollTop = st <= 0 ? 0 : st;
      },
      false
    );
  }, []);

  return (
    <HStack
      justify="space-between"
      w="100%"
      zIndex="tooltip"
      px={{ base: '2%', lg: '10%' }}
      shadow="md"
      style={{
        backgroundColor: navColor,
        height: navSize,
        color: navSize === '0rem' ? 'transparent' : 'white',
        transition: 'all 1s',
      }}
    >
      <HStack spacing="4" alignItems="center">
        <MobileDrawer navColor={navColor} navSize={navSize} />

        <Stack className={className} pl="10px">
          <Image
            src={logo}
            h={{ base: '50px', lg: '60px' }}
            onClick={() => navigate('/')}
          />
        </Stack>
      </HStack>

      <ButtonGroup
        size="lg"
        variant="text.accent"
        color="white"
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
        <Stack>
          <DocumentPopover />
        </Stack>
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
