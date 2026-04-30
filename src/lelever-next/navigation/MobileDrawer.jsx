import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Image,
  Stack,
  useDisclosure,
  IconButton,
} from '@chakra-ui/react';
import { DocumentCollapse } from './DocumentCollapse';
import { ToggleButton } from './ToggleButton';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faPhoneAlt,
  faTimes,
  faMapMarkerAlt,
  faPaintBrush,
  faStar,
  faNewspaper,
} from '@fortawesome/free-solid-svg-icons';
import { Fragment, useContext } from 'react';
import appContext from '../../AppProvider';

export const MobileDrawer = () => {
  const navigate = useNavigate();
  const { currentLang } = useContext(appContext);

  const { isOpen, onToggle, onClose } = useDisclosure();

  function handleNav(location) {
    navigate(location);
    onClose();
  }

  return (
    <Fragment>
      <IconButton
        aria-label='Open menu'
        icon={<ToggleButton isOpen={isOpen} />}
        onClick={onToggle}
        display={{
          base: 'inline-flex',
          lg: 'none',
        }}
        variant='ghost'
        color='white'
        minW={{ base: '44px', sm: '48px' }}
        minH={{ base: '44px', sm: '48px' }}
        _hover={{ bg: 'whiteAlpha.200' }}
        _active={{ bg: 'whiteAlpha.300' }}
        pointerEvents='auto'
        position='relative'
        zIndex={10}
      />
      <Drawer
        placement='top'
        isOpen={isOpen}
        onClose={onClose}
        blockScrollOnMount
        closeOnOverlayClick
        closeOnEsc
      >
        <DrawerOverlay zIndex={10000} />
        <DrawerContent
          borderBottomRadius='2xl'
          pointerEvents='auto'
          zIndex={10001}
          pt={{ base: 6, sm: 8 }}
        >
          <DrawerHeader
            bg='white'
            py={{ base: 5, sm: 6 }}
            px={{ base: 4, sm: 6 }}
            position='relative'
            display='flex'
            justifyContent='center'
            alignItems='center'
          >
            <Image
              src='https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/whitelogo.png'
              alt='Le Lever du Pinceau'
              h={{ base: '48px', sm: '56px' }}
              w='auto'
              maxW='200px'
              objectFit='contain'
              filter='brightness(0)'
            />
            <IconButton
              icon={<FontAwesomeIcon icon={faTimes} />}
              aria-label='Close menu'
              onClick={onClose}
              fontSize={{ base: 'xl', sm: '2xl' }}
              top={{ base: 4, sm: 5 }}
              right={{ base: 4, sm: 6 }}
              variant='ghost'
              position='absolute'
              color='gray.600'
              _hover={{ bg: 'gray.100', color: 'gray.800' }}
              type='button'
            />
          </DrawerHeader>
          <DrawerBody
            p={{ base: 4, sm: 6 }}
            bg='white'
            textColor='black'
            pointerEvents='auto'
          >
            <Stack spacing={{ base: 2, sm: 3 }}>
              <Button
                type='button'
                size='md'
                variant='tertiary'
                justifyContent='start'
                onClick={() => handleNav('/')}
                leftIcon={<FontAwesomeIcon icon={faHome} />}
                py={{ base: 3, sm: 4 }}
                textStyle='drawer'
                fontWeight='medium'
                _hover={{ bg: 'gray.50' }}
                cursor='pointer'
              >
                {currentLang === 'fr' ? 'Accueil' : 'Home'}
              </Button>
              <DocumentCollapse onClose={onClose} />
              <Button
                type='button'
                size='md'
                variant='tertiary'
                justifyContent='start'
                leftIcon={<FontAwesomeIcon icon={faMapMarkerAlt} />}
                onClick={() => handleNav('/secteurs')}
                py={{ base: 3, sm: 4 }}
                textStyle='drawer'
                fontWeight='medium'
                _hover={{ bg: 'gray.50' }}
                cursor='pointer'
              >
                {currentLang === 'fr' ? 'Secteurs desservis' : 'Service Areas'}
              </Button>
              <Button
                type='button'
                size='md'
                variant='tertiary'
                justifyContent='start'
                leftIcon={<FontAwesomeIcon icon={faPaintBrush} />}
                onClick={() => handleNav('/peintre-professionnel')}
                py={{ base: 3, sm: 4 }}
                textStyle='drawer'
                fontWeight='medium'
                _hover={{ bg: 'gray.50' }}
                cursor='pointer'
              >
                {currentLang === 'fr'
                  ? 'Peintres professionnels'
                  : 'Professional Painters'}
              </Button>
              <Button
                type='button'
                size='md'
                variant='tertiary'
                justifyContent='start'
                leftIcon={<FontAwesomeIcon icon={faStar} />}
                onClick={() => handleNav('/avis-clients')}
                py={{ base: 3, sm: 4 }}
                textStyle='drawer'
                fontWeight='medium'
                _hover={{ bg: 'gray.50' }}
                cursor='pointer'
              >
                {currentLang === 'fr' ? 'Avis' : 'Reviews'}
              </Button>
              <Button
                type='button'
                size='md'
                variant='tertiary'
                justifyContent='start'
                leftIcon={<FontAwesomeIcon icon={faNewspaper} />}
                onClick={() => handleNav('/blog')}
                py={{ base: 3, sm: 4 }}
                textStyle='drawer'
                fontWeight='medium'
                _hover={{ bg: 'gray.50' }}
                cursor='pointer'
              >
                {currentLang === 'fr' ? 'Blog' : 'Blog'}
              </Button>
              <Button
                type='button'
                size='md'
                variant='tertiary'
                justifyContent='start'
                leftIcon={<FontAwesomeIcon icon={faPhoneAlt} />}
                onClick={() => handleNav('/contact')}
                py={{ base: 3, sm: 4 }}
                textStyle='drawer'
                fontWeight='medium'
                bg='brand.500'
                color='white'
                borderRadius='full'
                _hover={{ bg: 'brand.600' }}
                cursor='pointer'
              >
                {currentLang === 'fr' ? 'Contact' : 'Contact'}
              </Button>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Fragment>
  );
};
