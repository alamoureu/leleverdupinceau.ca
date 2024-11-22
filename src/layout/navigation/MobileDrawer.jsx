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
import { FiFile, FiHome, FiPhone, FiTool, FiUser, FiX } from 'react-icons/fi';
import { Fragment, useContext } from 'react';
import appContext from '../../AppProvider';

export const MobileDrawer = ({ navColor, navSize }) => {
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
        aria-label="Open menu"
        display={{
          base: 'inline-flex',
          xl: 'none',
        }}
        style={{
          color: navSize === '0rem' ? 'transparent' : 'white',
          transition: 'all 0.5s',
        }}
      />
      <Drawer placement="left" isOpen={isOpen} onClose={onClose}>
        <DrawerContent>
          <DrawerHeader bg="white">
            <IconButton
              icon={<FiX />}
              aria-label="Close menu"
              onClick={onClose}
              fontSize="2xl"
              mt="15px"
              left="15px"
              variant="ghost"
              position="absolute"
            />
            <Flex w="100%" justifyContent="center">
              <Image
                src={
                  'https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/logo-pinceau.png'
                }
                h="150px"
                alignSelf="center"
                alt="Company Logo"
              />
            </Flex>
          </DrawerHeader>
          <DrawerBody p="4" bg="white" textColor="black">
            <Stack spacing="1">
              <Button
                size="md"
                variant="tertiary"
                justifyContent="start"
                onClick={() => handleNav('/')}
                leftIcon={<FiHome />}
              >
                {currentLang === 'fr' ? 'Accueil' : 'Home'}
              </Button>
              <DocumentCollapse onClose={onClose} />
              <Button
                size="md"
                variant="tertiary"
                justifyContent="start"
                leftIcon={<FiFile />}
                onClick={() => handleNav('/soumission')}
              >
                {currentLang === 'fr'
                  ? 'Soumission Gratuite'
                  : 'Free Quotation '}
              </Button>
              <Button
                size="md"
                variant="tertiary"
                justifyContent="start"
                leftIcon={<FiPhone />}
                onClick={() => handleNav('/contact')}
              >
                {currentLang === 'fr' ? 'Nous joindre' : 'Contact us'}
              </Button>
              <Button
                size="md"
                variant="tertiary"
                justifyContent="start"
                leftIcon={<FiUser />}
                onClick={() => handleNav('/a-propos-de-nous')}
              >
                {currentLang === 'fr' ? 'À propos de nous' : 'About us'}
              </Button>
              <Button
                size="md"
                variant="tertiary"
                justifyContent="start"
                leftIcon={<FiTool />}
                onClick={() => handleNav('/emplois')}
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
