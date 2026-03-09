import { useContext } from 'react';
import appContext from '../../AppProvider';
import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  useDisclosure,
  Box,
  Divider,
} from '@chakra-ui/react';
import { PopoverIcon } from './PopoverIcon';
import { useNavigate } from '@/lib/next-router';

export const ServicesPopover = () => {
  const { currentLang } = useContext(appContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const services = [
    {
      fr: 'Peinture résidentielle',
      en: 'Residential painting',
      path: '/services/peinture-residentielle',
    },
    {
      fr: 'Peinture commerciale',
      en: 'Commercial painting',
      path: '/services/peinture-commerciale',
    },
    {
      fr: 'Peinture intérieure',
      en: 'Interior painting',
      path: '/services/peinture-interieure',
    },
    {
      fr: 'Peinture extérieure',
      en: 'Exterior painting',
      path: '/services/peinture-exterieure',
    },
    {
      fr: 'Peinture industrielle',
      en: 'Industrial painting',
      path: '/services/peinture-industrielle',
    },
  ];

  function handleNav(path) {
    navigate(path);
    onClose();
  }

  return (
    <Popover
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}
      trigger="hover"
      openDelay={0}
      placement="bottom-start"
    >
      <PopoverTrigger>
        <Button
          rightIcon={<PopoverIcon isOpen={isOpen} />}
          textStyle="nav"
          px={{ base: 3, lg: 3, xl: 3 }}
          color="white"
          _hover={{ color: 'gray.200', bg: 'whiteAlpha.200' }}
        >
          {currentLang === 'fr' ? 'Services' : 'Services'}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        p={0}
        w="280px"
        bg="white"
        borderRadius="lg"
        boxShadow="xl"
        border="none"
        mt={2}
      >
        <Stack spacing={0} py={2}>
          {services.map((service, id) => (
            <Box
              key={id}
              as="button"
              w="100%"
              px={4}
              py={3}
              textAlign="left"
              textStyle="nav"
              color="gray.700"
              fontWeight="normal"
              transition="all 0.2s"
              _hover={{
                bg: 'gray.50',
                color: 'brand.700',
              }}
              onClick={() => handleNav(service.path)}
            >
              {currentLang === 'fr' ? service.fr : service.en}
            </Box>
          ))}
          <Divider borderColor="gray.200" my={1} />
          <Box
            as="button"
            w="100%"
            px={4}
            py={3.5}
            textAlign="left"
            textStyle="nav"
            color="brand.500"
            fontWeight="600"
            letterSpacing="0.01em"
            transition="all 0.2s"
            _hover={{
              bg: 'brand.500',
              color: 'white',
            }}
            onClick={() => handleNav('/services')}
          >
            {currentLang === 'fr'
              ? 'Voir tous les services'
              : 'View all services'}
          </Box>
        </Stack>
      </PopoverContent>
    </Popover>
  );
};
