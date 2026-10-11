import {
  Box,
  Button,
  Collapse,
  Flex,
  HStack,
  Icon,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { PopoverIcon } from './PopoverIcon';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaintRoller } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import appContext from '../../AppProvider';

const services = [
  {
    fr: 'Peinture résidentielle',
    en: 'Residential Painting',
    path: '/services/peinture-residentielle',
  },
  {
    fr: 'Peinture commerciale',
    en: 'Commercial Painting',
    path: '/services/peinture-commerciale',
  },
  {
    fr: 'Peinture intérieure',
    en: 'Interior Painting',
    path: '/services/peinture-interieure',
  },
  {
    fr: 'Peinture extérieure',
    en: 'Exterior Painting',
    path: '/services/peinture-exterieure',
  },
  {
    fr: 'Peinture industrielle',
    en: 'Industrial Painting',
    path: '/services/peinture-industrielle',
  },
];

export const DocumentCollapse = ({ onClose }) => {
  const navigate = useNavigate();
  const { currentLang } = useContext(appContext);
  const isFr = currentLang === 'fr';
  const { isOpen, onToggle } = useDisclosure();

  function handleNav(path) {
    navigate(path);
    onClose();
  }

  return (
    <Box>
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
        onClick={onToggle}
        cursor="pointer"
        transition="background-color 0.15s ease"
        bg={isOpen ? 'brand.50' : 'transparent'}
        _hover={{ bg: 'brand.50' }}
        _active={{ bg: 'brand.100' }}
        aria-expanded={isOpen}
      >
        <HStack spacing={3} w="100%" align="center">
          <Flex
            w="38px"
            h="38px"
            borderRadius="lg"
            bg={isOpen ? 'brand.100' : 'brand.50'}
            align="center"
            justify="center"
            flexShrink={0}
            color="brand.500"
          >
            <Icon as={FontAwesomeIcon} icon={faPaintRoller} boxSize="15px" />
          </Flex>
          <Text
            as="span"
            flex="1"
            textAlign="left"
            textStyle="drawer"
            fontWeight="600"
            color="gray.800"
          >
            Services
          </Text>
          <Box color="brand.500" fontSize="sm" pr={1}>
            <PopoverIcon isOpen={isOpen} />
          </Box>
        </HStack>
      </Button>

      <Collapse in={isOpen} animateOpacity>
        <Stack
          spacing={0.5}
          mt={1}
          mb={1}
          ml={{ base: 4, sm: 5 }}
          pl={3}
          borderLeft="2px solid"
          borderColor="brand.100"
        >
          {services.map((service) => (
            <Button
              key={service.path}
              type="button"
              variant="unstyled"
              display="flex"
              justifyContent="flex-start"
              alignItems="center"
              w="100%"
              h="auto"
              px={3}
              py={2.5}
              borderRadius="lg"
              onClick={() => handleNav(service.path)}
              cursor="pointer"
              _hover={{ bg: 'brand.50', color: 'brand.600' }}
              color="gray.700"
            >
              <Text as="span" fontSize="md" fontWeight="500" textAlign="left">
                {isFr ? service.fr : service.en}
              </Text>
            </Button>
          ))}
          <Button
            type="button"
            variant="unstyled"
            display="flex"
            justifyContent="flex-start"
            alignItems="center"
            w="100%"
            h="auto"
            px={3}
            py={2.5}
            borderRadius="lg"
            onClick={() => handleNav('/services')}
            cursor="pointer"
            color="brand.500"
            _hover={{ bg: 'brand.50', color: 'brand.600' }}
          >
            <Text as="span" fontSize="md" fontWeight="700" textAlign="left">
              {isFr ? 'Voir tous les services' : 'View all services'}
            </Text>
          </Button>
        </Stack>
      </Collapse>
    </Box>
  );
};
