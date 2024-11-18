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

export const DocumentPopover = () => {
  const { currentLang } = useContext(appContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  function handleNav(value) {
    const type =
      value === 'Peinture Intérieure'
        ? 'peinture-interieure'
        : 'peinture-exterieure';
    const path = '/services/' + type;
    navigate(path);
  }
  return (
    <Popover
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}
      trigger="hover"
      openDelay={0}
    >
      <PopoverTrigger>
        <Button rightIcon={<PopoverIcon isOpen={isOpen} />}>
          {currentLang === 'fr' ? 'Résidentiel' : 'Residential'}
        </Button>
      </PopoverTrigger>
      <PopoverContent p="2" maxW="fit-content" bg="white" borderRadius="sm">
        <Stack gap="2" alignItems="stretch">
          {[
            { fr: 'Peinture Intérieure', en: 'Interior Painting' },
            {
              fr: 'Peinture et Teinture Extérieure',
              en: 'Exterior Painting and Staining',
            },
          ].map((item) => (
            <Button
              key={item}
              variant="tertiary"
              justifyContent="start"
              textColor="black"
              size="sm"
              borderRadius="sm"
              _hover={{ bg: 'blue.700', color: 'white' }}
              onClick={() => handleNav(item.fr)}
            >
              {currentLang === 'fr' ? item.fr : item.en}
            </Button>
          ))}
        </Stack>
      </PopoverContent>
    </Popover>
  );
};
