import { Button, Collapse, Stack, Text, useDisclosure } from '@chakra-ui/react';
import { PopoverIcon } from './PopoverIcon';
import { useNavigate } from 'react-router-dom';
import { BsPaintBucket } from 'react-icons/bs';
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
        variant="tertiary"
        size="md"
        onClick={onToggle}
        leftIcon={<BsPaintBucket />}
      >
        <Stack justifyContent="space-between" direction="row" w="100%">
          <Text as="span">
            {currentLang === 'fr' ? 'Résidentiel' : 'Residential'}
          </Text>
          <PopoverIcon isOpen={isOpen} />
        </Stack>
      </Button>
      <Collapse in={isOpen} animateOpacity>
        <Stack spacing="1" alignItems="stretch" ps="4">
          {[
            { fr: 'Peinture Intérieure', en: 'Interior Painting' },
            {
              fr: 'Peinture et Teinture Extérieure',
              en: 'Exterior Painting and Staining',
            },
          ].map((item) => (
            <Button
              onClick={() => handleNav(item.fr)}
              key={item}
              variant="tertiary"
              size="md"
              justifyContent="start"
              textColor="black"
            >
              {currentLang === 'fr' ? item.fr : item.en}
            </Button>
          ))}
        </Stack>
      </Collapse>
    </>
  );
};
