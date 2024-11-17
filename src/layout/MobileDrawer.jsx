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
} from '@chakra-ui/react';
import { DocumentCollapse } from '../navbar/DocumentCollapse';
import { ToggleButton } from './ToggleButton';
import { useNavigate } from 'react-router-dom';
import { FiFile, FiHome, FiPhone, FiTool, FiUser } from 'react-icons/fi';
import { Fragment, useContext } from 'react';
import appContext from '../AppProvider';
import logo from '../img/logo_jpeg.jpg';

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
          lg: 'none',
        }}
        style={{
          backgroundColor: navColor,
          height: navSize,
          color: navSize === '0rem' ? 'transparent' : 'white',
          transition: 'all 1s',
        }}
        bg="red"
      />
      <Drawer placement="left" isOpen={isOpen} onClose={onClose}>
        <DrawerContent>
          {/* Drawer Header with Logo */}
          <DrawerHeader bg="white">
            <Flex justify="center" align="center">
              <Image src={logo} h="100px" alt="Company Logo" />
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
