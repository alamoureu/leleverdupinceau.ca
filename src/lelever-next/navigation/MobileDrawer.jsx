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
  faFileAlt,
  faHome,
  faPhoneAlt,
  faWrench,
  faUser,
  faTimes,
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
              <DocumentCollapse onClose={onClose} />
              <Button
                size='md'
                variant='tertiary'
                justifyContent='start'
                leftIcon={<FontAwesomeIcon icon={faFileAlt} />}
                onClick={() => handleNav('/soumission')}
                py={{ base: 3, sm: 4 }}
                fontSize={{ base: 'md', sm: 'lg' }}
                fontWeight='medium'
                _hover={{ bg: 'gray.50' }}
              >
                {currentLang === 'fr'
                  ? 'Soumission Gratuite'
                  : 'Free Quotation '}
              </Button>
              <Button
                size='md'
                variant='tertiary'
                justifyContent='start'
                leftIcon={<FontAwesomeIcon icon={faPhoneAlt} />}
                onClick={() => handleNav('/contact')}
                py={{ base: 3, sm: 4 }}
                fontSize={{ base: 'md', sm: 'lg' }}
                fontWeight='medium'
                _hover={{ bg: 'gray.50' }}
              >
                {currentLang === 'fr' ? 'Nous joindre' : 'Contact us'}
              </Button>
              <Button
                size='md'
                variant='tertiary'
                justifyContent='start'
                leftIcon={<FontAwesomeIcon icon={faUser} />}
                onClick={() => handleNav('/a-propos-de-nous')}
                py={{ base: 3, sm: 4 }}
                fontSize={{ base: 'md', sm: 'lg' }}
                fontWeight='medium'
                _hover={{ bg: 'gray.50' }}
              >
                {currentLang === 'fr' ? 'À propos de nous' : 'About us'}
              </Button>
              <Button
                size='md'
                variant='tertiary'
                justifyContent='start'
                leftIcon={<FontAwesomeIcon icon={faWrench} />}
                onClick={() => handleNav('/emplois')}
                py={{ base: 3, sm: 4 }}
                fontSize={{ base: 'md', sm: 'lg' }}
                fontWeight='medium'
                _hover={{ bg: 'gray.50' }}
              >
                {currentLang === 'fr' ? 'Emplois' : 'Employment'}
              </Button>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Fragment>
  );
};
