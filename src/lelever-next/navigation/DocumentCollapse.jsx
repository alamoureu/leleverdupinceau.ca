import { Button, Collapse, Stack, Text, useDisclosure } from '@chakra-ui/react';
import { PopoverIcon } from './PopoverIcon';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaintRoller } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import appContext from '../../AppProvider';

export const DocumentCollapse = ({ onClose }) => {
  const navigate = useNavigate();
  const { currentLang } = useContext(appContext);
  const { isOpen, onToggle } = useDisclosure();

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
    <>
      <Button
        variant='tertiary'
        size='md'
        onClick={onToggle}
        leftIcon={<FontAwesomeIcon icon={faPaintRoller} />}
        py={{ base: 3, sm: 4 }}
        fontSize={{ base: 'md', sm: 'lg' }}
        fontWeight='medium'
        _hover={{ bg: 'gray.50' }}
        justifyContent='start'
      >
        <Stack justifyContent='space-between' direction='row' w='100%'>
          <Text as='span'>
            {currentLang === 'fr' ? 'Services' : 'Services'}
          </Text>
          <PopoverIcon isOpen={isOpen} />
        </Stack>
      </Button>
      <Collapse in={isOpen} animateOpacity>
        <Stack
          spacing={{ base: 2, sm: 3 }}
          alignItems='stretch'
          ps={{ base: 4, sm: 6 }}
        >
          {services.map((service, id) => (
            <Button
              key={id}
              variant='tertiary'
              size='md'
              justifyContent='start'
              textColor='black'
              onClick={() => handleNav(service.path)}
              py={{ base: 3, sm: 4 }}
              fontSize={{ base: 'md', sm: 'lg' }}
              fontWeight='medium'
              _hover={{ bg: 'gray.50' }}
            >
              {currentLang === 'fr' ? service.fr : service.en}
            </Button>
          ))}
          <Button
            variant='tertiary'
            size='md'
            justifyContent='start'
            textColor='black'
            onClick={() => handleNav('/services')}
            py={{ base: 3, sm: 4 }}
            fontSize={{ base: 'md', sm: 'lg' }}
            fontWeight='semibold'
            _hover={{ bg: 'gray.50' }}
          >
            {currentLang === 'fr'
              ? 'Voir tous les services'
              : 'View all services'}
          </Button>
        </Stack>
      </Collapse>
    </>
  );
};
