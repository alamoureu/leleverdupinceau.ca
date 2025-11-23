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

  function handleNav(value) {
    const type =
      value === 'Peinture Intérieure'
        ? 'peinture-interieure'
        : 'peinture-exterieure';
    const path = '/services/' + type;
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
      >
        <Stack justifyContent='space-between' direction='row' w='100%'>
          <Text as='span'>
            {currentLang === 'fr' ? 'Résidentiel' : 'Residential'}
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
          {[
            { fr: 'Peinture Intérieure', en: 'Interior Painting' },
            {
              fr: 'Peinture et Teinture Extérieure',
              en: 'Exterior Painting and Staining',
            },
          ].map((item, id) => (
            <Button
              key={id}
              variant='tertiary'
              size='md'
              justifyContent='start'
              textColor='black'
              onClick={() => handleNav(item.fr)}
              py={{ base: 3, sm: 4 }}
              fontSize={{ base: 'md', sm: 'lg' }}
              fontWeight='medium'
              _hover={{ bg: 'gray.50' }}
            >
              {currentLang === 'fr' ? item.fr : item.en}
            </Button>
          ))}
        </Stack>
      </Collapse>
    </>
  );
};
