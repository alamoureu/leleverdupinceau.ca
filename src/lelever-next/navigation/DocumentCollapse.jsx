import { Button, Collapse, Stack, Text, useDisclosure } from '@chakra-ui/react';
import { PopoverIcon } from './PopoverIcon';
import { useNavigate } from '@/lib/next-router';
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
  ];

  function handleNav(path) {
    navigate(path);
    onClose();
  }

  return (
    <>
      <Button
        type='button'
        variant='tertiary'
        size='md'
        onClick={onToggle}
        leftIcon={<FontAwesomeIcon icon={faPaintRoller} />}
        py={{ base: 3, sm: 4 }}
        textStyle='drawer'
        fontWeight='medium'
        _hover={{ bg: 'gray.50' }}
        justifyContent='start'
        cursor='pointer'
      >
        <Stack justifyContent='space-between' direction='row' w='100%'>
          <Text as='span' textStyle='drawer' fontWeight='medium'>
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
              type='button'
              variant='tertiary'
              size='md'
              justifyContent='start'
              textColor='black'
              onClick={() => handleNav(service.path)}
              py={{ base: 3, sm: 4 }}
              textStyle='drawer'
              fontWeight='medium'
              _hover={{ bg: 'gray.50' }}
              cursor='pointer'
            >
              {currentLang === 'fr' ? service.fr : service.en}
            </Button>
          ))}
          <Button
            type='button'
            variant='tertiary'
            size='md'
            justifyContent='start'
            textColor='black'
            onClick={() => handleNav('/services')}
            py={{ base: 3, sm: 4 }}
            textStyle='drawer'
            fontWeight='semibold'
            _hover={{ bg: 'gray.50' }}
            cursor='pointer'
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
