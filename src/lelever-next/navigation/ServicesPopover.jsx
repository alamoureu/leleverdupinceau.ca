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
import { useNavigate } from 'react-router-dom';

export const ServicesPopover = () => {
  const { currentLang } = useContext(appContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

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
      path: '/services/new-peinture-interieure',
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
      trigger='hover'
      openDelay={0}
      placement='bottom-start'
    >
      <PopoverTrigger>
        <Button
          rightIcon={<PopoverIcon isOpen={isOpen} />}
          fontSize={{ base: 'sm', sm: 'md', lg: 'sm', xl: 'sm' }}
          px={{ base: 3, lg: 3, xl: 3 }}
        >
          {currentLang === 'fr' ? 'Services' : 'Services'}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        p={0}
        w='280px'
        bg='white'
        borderRadius='lg'
        boxShadow='xl'
        border='none'
        mt={2}
      >
        <Stack spacing={0} py={2}>
          {services.map((service, id) => (
            <Box
              key={id}
              as='button'
              w='100%'
              px={4}
              py={3}
              textAlign='left'
              fontSize='sm'
              color='gray.700'
              fontWeight='normal'
              transition='all 0.2s'
              _hover={{
                bg: 'gray.50',
                color: '#022A68',
              }}
              onClick={() => handleNav(service.path)}
            >
              {currentLang === 'fr' ? service.fr : service.en}
            </Box>
          ))}
          <Divider borderColor='gray.200' my={1} />
          <Box
            as='button'
            w='100%'
            px={4}
            py={3.5}
            textAlign='left'
            fontSize='sm'
            color='#014CC4'
            fontWeight='600'
            letterSpacing='0.01em'
            transition='all 0.2s'
            _hover={{
              bg: '#014CC4',
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
