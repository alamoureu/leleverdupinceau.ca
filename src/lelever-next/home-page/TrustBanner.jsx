import React, { useContext } from 'react';
import { Box, Flex, Text, Image } from '@chakra-ui/react';
import appContext from '../../AppProvider';
import quebecLogo from '../images/rbqlogo.png';
import trushieldLogo from '../images/trushieldlogo.png';

const translations = {
  fr: {
    rbqAlt: 'Régie du bâtiment du Québec',
    rbqText: 'RBQ 5864-1481-01',
    clientsSatisfaits: 'Clients satisfaits',
    assurance: 'Assurance 5M$',
    trushieldAlt: 'TruShield Insurance',
  },
  en: {
    rbqAlt: 'Quebec Building Authority',
    rbqText: 'RBQ 5864-1481-01',
    clientsSatisfaits: 'Satisfied Clients',
    assurance: '$5M Insurance',
    trushieldAlt: 'TruShield Insurance',
  },
};

export default function TrustBanner() {
  const { currentLang } = useContext(appContext);
  const t = translations[currentLang];

  const TRUST_ITEMS = [
    {
      image: quebecLogo,
      alt: t.rbqAlt,
      text: t.rbqText,
      imageHeight: {
        base: '28px',
        sm: '30px',
        md: '30px',
        lg: '40px',
        xl: '60px',
      },
    },
    {
      isMetric: true,
      value: '800+',
      label: t.clientsSatisfaits,
    },
    {
      image: trushieldLogo,
      alt: t.trushieldAlt,
      text: t.assurance,
      imageHeight: {
        base: '25px',
        sm: '30px',
        md: '30px',
        lg: '40px',
        xl: '60px',
      },
    },
  ];

  return (
    <Box
      position='absolute'
      left='50%'
      maxW='1440px'
      w={{
        base: 'calc(100% - 30px)',
        sm: 'calc(100% - 40px)',
        md: 'calc(100% - 70px)',
        lg: 'calc(100% - 150px)',
        xl: 'calc(100% - 75px)',
      }}
      transform={'translate(-50%, -50%)'}
      h={{ base: '90px', sm: '90px', md: '100px', lg: '140px', xl: '200px' }}
      zIndex={10}
      bg='white'
      borderRadius='2xl'
      border='1px solid'
      borderColor='gray.200'
      py={{ md: 4, lg: 4, xl: 6 }}
      px={{ md: 4, lg: 4, xl: 6 }}
    >
      <Box h='100%' display='flex' flexDirection='column'>
        <Flex direction='row' justify='space-between' align='center' flex={1}>
          {TRUST_ITEMS.map((item, index) => (
            <Box key={`top-${index}`} flex={1} textAlign='center'>
              {item.isMetric ? (
                <Text
                  fontSize={{ base: '16px', md: '2xl', lg: '3xl', xl: '5xl' }}
                  fontWeight='bold'
                  color='gray.800'
                  lineHeight={1}
                >
                  {item.value}
                </Text>
              ) : (
                <Image
                  src={item.image}
                  alt={item.alt}
                  h={item.imageHeight}
                  w='auto'
                  objectFit='contain'
                  mx='auto'
                />
              )}
            </Box>
          ))}
        </Flex>

        <Flex
          direction='row'
          justify='space-between'
          align='flex-start'
          mb='20px'
          mt='-20px'
        >
          {TRUST_ITEMS.map((item, index) => (
            <Box key={`bottom-${index}`} flex={1} textAlign='center'>
              <Text
                fontSize={{ base: '10px', md: 'sm', lg: 'md', xl: 'xl' }}
                color='gray.800'
                fontWeight='medium'
                lineHeight='1.2'
              >
                {item.isMetric ? item.label : item.text}
              </Text>
            </Box>
          ))}
        </Flex>
      </Box>
    </Box>
  );
}
