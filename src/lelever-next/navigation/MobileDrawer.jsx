import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  Icon,
  IconButton,
  Image,
  Stack,
  Text,
  useDisclosure,
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

const PHONE_DISPLAY = '(438) 868-0772';
const PHONE_HREF = 'tel:+14388680772';

function NavItem({ icon, label, onClick }) {
  return (
    <Button
      type="button"
      variant="unstyled"
      display="flex"
      alignItems="center"
      justifyContent="flex-start"
      w="100%"
      h="auto"
      px={3}
      py={2}
      borderRadius="xl"
      onClick={onClick}
      cursor="pointer"
      transition="background-color 0.15s ease, transform 0.15s ease"
      _hover={{ bg: 'brand.50' }}
      _active={{ bg: 'brand.100' }}
    >
      <HStack spacing={3} w="100%" align="center">
        <Flex
          w="38px"
          h="38px"
          borderRadius="lg"
          bg="brand.50"
          align="center"
          justify="center"
          flexShrink={0}
          color="brand.500"
        >
          <Icon as={FontAwesomeIcon} icon={icon} boxSize="15px" />
        </Flex>
        <Text
          as="span"
          textStyle="drawer"
          fontWeight="600"
          color="gray.800"
          textAlign="left"
        >
          {label}
        </Text>
      </HStack>
    </Button>
  );
}

export const MobileDrawer = () => {
  const navigate = useNavigate();
  const { currentLang } = useContext(appContext);
  const isFr = currentLang === 'fr';

  const { isOpen, onToggle, onClose } = useDisclosure();

  function handleNav(location) {
    navigate(location);
    onClose();
  }

  const links = [
    { icon: faHome, label: isFr ? 'Accueil' : 'Home', path: '/' },
    {
      icon: faMapMarkerAlt,
      label: isFr ? 'Secteurs desservis' : 'Service Areas',
      path: '/secteurs',
    },
    {
      icon: faPaintBrush,
      label: isFr ? 'Peintres professionnels' : 'Professional Painters',
      path: '/peintre-professionnel',
    },
    {
      icon: faStar,
      label: isFr ? 'Avis' : 'Reviews',
      path: '/avis-clients',
    },
    {
      icon: faNewspaper,
      label: 'Blog',
      path: '/blog',
    },
  ];

  return (
    <Fragment>
      <IconButton
        aria-label={isFr ? 'Ouvrir le menu' : 'Open menu'}
        icon={<ToggleButton isOpen={isOpen} />}
        onClick={onToggle}
        display={{
          base: 'inline-flex',
          lg: 'none',
        }}
        variant="ghost"
        color="white"
        minW={{ base: '44px', sm: '48px' }}
        minH={{ base: '44px', sm: '48px' }}
        _hover={{ bg: 'whiteAlpha.200' }}
        _active={{ bg: 'whiteAlpha.300' }}
        pointerEvents="auto"
        position="relative"
        zIndex={10}
      />
      <Drawer
        placement="top"
        isOpen={isOpen}
        onClose={onClose}
        blockScrollOnMount
        closeOnOverlayClick
        closeOnEsc
      >
        <DrawerOverlay bg="blackAlpha.600" backdropFilter="blur(2px)" zIndex={10000} />
        <DrawerContent
          borderBottomRadius="2xl"
          pointerEvents="auto"
          zIndex={10001}
          maxH="92vh"
          overflow="hidden"
          boxShadow="0 16px 48px rgba(10, 43, 104, 0.22)"
        >
          <DrawerHeader
            bg="brand.700"
            py={3}
            px={{ base: 4, sm: 5 }}
            position="relative"
            display="flex"
            justifyContent="center"
            alignItems="center"
            borderBottom="1px solid"
            borderColor="whiteAlpha.200"
          >
            <Image
              src="https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/whitelogo.png"
              alt="Le Lever du Pinceau"
              h={{ base: '40px', sm: '46px' }}
              w="auto"
              maxW="170px"
              objectFit="contain"
              htmlWidth={1409}
              htmlHeight={873}
            />
            <IconButton
              icon={<FontAwesomeIcon icon={faTimes} />}
              aria-label={isFr ? 'Fermer le menu' : 'Close menu'}
              onClick={onClose}
              fontSize="lg"
              top="50%"
              transform="translateY(-50%)"
              right={{ base: 3, sm: 4 }}
              variant="ghost"
              position="absolute"
              color="white"
              borderRadius="full"
              minW="40px"
              minH="40px"
              _hover={{ bg: 'whiteAlpha.200' }}
              _active={{ bg: 'whiteAlpha.300' }}
              type="button"
            />
          </DrawerHeader>

          <DrawerBody
            px={{ base: 3, sm: 4 }}
            py={2}
            bg="white"
            overflowY="auto"
            pointerEvents="auto"
          >
            <Stack spacing={0.5}>
              <NavItem
                icon={links[0].icon}
                label={links[0].label}
                onClick={() => handleNav(links[0].path)}
              />
              <DocumentCollapse onClose={onClose} />
              {links.slice(1).map((link) => (
                <NavItem
                  key={link.path}
                  icon={link.icon}
                  label={link.label}
                  onClick={() => handleNav(link.path)}
                />
              ))}
            </Stack>
          </DrawerBody>

          <DrawerFooter
            bg="gray.50"
            borderTop="1px solid"
            borderColor="gray.100"
            px={{ base: 4, sm: 5 }}
            py={3}
            flexDirection="column"
            alignItems="stretch"
            gap={2}
          >
            <Button
              type="button"
              variant="cta"
              w="100%"
              h="46px"
              borderRadius="full"
              fontWeight="bold"
              leftIcon={<FontAwesomeIcon icon={faPhoneAlt} />}
              onClick={() => handleNav('/contact')}
              cursor="pointer"
            >
              Contact
            </Button>
            <Box as="a" href={PHONE_HREF} textAlign="center">
              <Text
                fontSize="sm"
                fontWeight="600"
                color="brand.500"
                _hover={{ color: 'brand.600', textDecoration: 'underline' }}
              >
                {PHONE_DISPLAY}
              </Text>
            </Box>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Fragment>
  );
};
