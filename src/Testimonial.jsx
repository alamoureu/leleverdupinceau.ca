import { Icon, Stack, StackDivider, Text } from '@chakra-ui/react';
import { Rating } from './Rating';
import { useContext } from 'react';
import appContext from './AppProvider';
import { FiMapPin } from 'react-icons/fi';

export const Testimonial = (props) => {
  const { currentLang } = useContext(appContext);
  const { nameFr, nameEn, quoteEn, quoteFr } = props;
  return (
    <Stack
      spacing={{
        base: '6',
        md: '8',
      }}
    >
      <Rating rating="5" />
      <Stack direction="row" alignItems="center">
        <Icon as={FiMapPin} />
        <Text>Montréal</Text>
      </Stack>
      <Text
        textStyle={{
          base: 'lg',
          md: 'xl',
        }}
        fontWeight="medium"
      >
        {currentLang === 'fr' ? quoteFr : quoteEn}
      </Text>
      <Stack
        gap="2"
        spacing="0"
        direction={{
          base: 'column',
          md: 'row',
        }}
        divider={
          <StackDivider
            display={{
              base: 'none',
              md: 'block',
            }}
          />
        }
        align={{
          base: 'flex-start',
          md: 'center',
        }}
      >
        <Stack
          spacing={{
            base: '2',
            md: '4',
          }}
          direction={{
            base: 'column',
            md: 'row',
          }}
        >
          <Stack direction="row">
            <Text fontWeight="normal">
              {currentLang === 'fr' ? nameFr : nameEn}
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
