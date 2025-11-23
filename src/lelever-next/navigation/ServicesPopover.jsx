import { useContext } from 'react';
import appContext from '../../AppProvider';
import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  useDisclosure,
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
      <PopoverContent p='2' maxW='fit-content' bg='white' borderRadius='sm'>
        <Stack gap='2' alignItems='stretch'>
          {services.map((service, id) => (
            <Button
              key={id}
              variant='tertiary'
              justifyContent='start'
              textColor='black'
              size='sm'
              borderRadius='sm'
              _hover={{ bg: 'blue.700', color: 'white' }}
              onClick={() => handleNav(service.path)}
            >
              {currentLang === 'fr' ? service.fr : service.en}
            </Button>
          ))}
        </Stack>
      </PopoverContent>
    </Popover>
  );
};
