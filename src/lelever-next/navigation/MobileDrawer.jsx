import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  Stack,
  useDisclosure,
  Image,
  Flex,
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
  faTools,
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
      <ToggleButton
        isOpen={isOpen}
        onClick={onToggle}
        aria-label='Open menu'
        display={{
          base: 'inline-flex',
          lg: 'none',
        }}
        style={{
          color: 'white',
          transition: 'all 0.5s',
          cursor: 'pointer',
        }}
      />
      <Drawer placement='top' isOpen={isOpen} onClose={onClose}>
        <DrawerContent borderBottomRadius='2xl'>
          <DrawerHeader
            bg='white'
            py={{ base: 4, sm: 6 }}
            px={{ base: 4, sm: 6 }}
          >
            <IconButton
              icon={<FontAwesomeIcon icon={faTimes} />}
              aria-label='Close menu'
              onClick={onClose}
              fontSize='2xl'
              top={{ base: 4, sm: 6 }}
              right={{ base: 4, sm: 6 }}
              variant='ghost'
              position='absolute'
              color='gray.600'
              _hover={{ bg: 'gray.100', color: 'gray.800' }}
            />
            <Flex w='100%' justifyContent='center' pt={8}>
              <Image
                loading='lazy'
                src={
                  'https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/logo-pinceau.png'
                }
                h={{ base: '140px', sm: '160px' }}
                alignSelf='center'
                alt='Company Logo'
              />
            </Flex>
          </DrawerHeader>
          <DrawerBody
            p={{ base: 4, sm: 6 }}
            bg='white'
            textColor='black'
            mt='-30px'
          >
            <Stack spacing={{ base: 2, sm: 3 }}>
              <Button
                size='md'
                variant='tertiary'
                justifyContent='start'
                onClick={() => handleNav('/new-home')}
                leftIcon={<FontAwesomeIcon icon={faHome} />}
                py={{ base: 3, sm: 4 }}
                fontSize={{ base: 'md', sm: 'lg' }}
                fontWeight='medium'
                _hover={{ bg: 'gray.50' }}
              >
                {currentLang === 'fr' ? 'Accueil' : 'Home'}
              </Button>
              <Button
                size='md'
                variant='tertiary'
                justifyContent='start'
                leftIcon={<FontAwesomeIcon icon={faTools} />}
                onClick={() => handleNav('/services')}
                py={{ base: 3, sm: 4 }}
                fontSize={{ base: 'md', sm: 'lg' }}
                fontWeight='medium'
                _hover={{ bg: 'gray.50' }}
              >
                {currentLang === 'fr' ? 'Services' : 'Services'}
              </Button>
              <DocumentCollapse onClose={onClose} />
              <Button
                size='md'
                variant='tertiary'
                justifyContent='start'
                leftIcon={<FontAwesomeIcon icon={faMapMarkerAlt} />}
                onClick={() => handleNav('/secteurs-desservis')}
                py={{ base: 3, sm: 4 }}
                fontSize={{ base: 'md', sm: 'lg' }}
                fontWeight='medium'
                _hover={{ bg: 'gray.50' }}
              >
                {currentLang === 'fr' ? 'Secteurs desservis' : 'Service Areas'}
              </Button>
              <Button
                size='md'
                variant='tertiary'
                justifyContent='start'
                leftIcon={<FontAwesomeIcon icon={faPaintBrush} />}
                onClick={() => handleNav('/peintre-professionnel')}
                py={{ base: 3, sm: 4 }}
                fontSize={{ base: 'md', sm: 'lg' }}
                fontWeight='medium'
                _hover={{ bg: 'gray.50' }}
              >
                {currentLang === 'fr'
                  ? 'Peintres professionnels'
                  : 'Professional Painters'}
              </Button>
              <Button
                size='md'
                variant='tertiary'
                justifyContent='start'
                leftIcon={<FontAwesomeIcon icon={faStar} />}
                onClick={() => handleNav('/avis')}
                py={{ base: 3, sm: 4 }}
                fontSize={{ base: 'md', sm: 'lg' }}
                fontWeight='medium'
                _hover={{ bg: 'gray.50' }}
              >
                {currentLang === 'fr' ? 'Avis' : 'Reviews'}
              </Button>
              <Button
                size='md'
                variant='tertiary'
                justifyContent='start'
                leftIcon={<FontAwesomeIcon icon={faNewspaper} />}
                onClick={() => handleNav('/blog')}
                py={{ base: 3, sm: 4 }}
                fontSize={{ base: 'md', sm: 'lg' }}
                fontWeight='medium'
                _hover={{ bg: 'gray.50' }}
              >
                {currentLang === 'fr' ? 'Blog' : 'Blog'}
              </Button>
              <Button
                size='md'
                variant='tertiary'
                justifyContent='start'
                leftIcon={<FontAwesomeIcon icon={faPhoneAlt} />}
                onClick={() => handleNav('/new-contact')}
                py={{ base: 3, sm: 4 }}
                fontSize={{ base: 'md', sm: 'lg' }}
                fontWeight='medium'
                bg='#014CC4'
                color='white'
                borderRadius='full'
                _hover={{ bg: '#0139A0' }}
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
