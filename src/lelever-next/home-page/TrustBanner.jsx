import React, { useContext } from 'react';
import { Box, Flex, Text, Image, Divider } from '@chakra-ui/react';
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
            <React.Fragment key={`top-${index}`}>
              <Box flex={1} textAlign='center'>
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
              {index < TRUST_ITEMS.length - 1 && (
                <Divider
                  orientation='vertical'
                  borderColor='gray.300'
                  h={{ base: '40px', md: '50px', lg: '70px', xl: '100px' }}
                  alignSelf='center'
                />
              )}
            </React.Fragment>
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
            <React.Fragment key={`bottom-${index}`}>
              <Box flex={1} textAlign='center'>
                <Text
                  fontSize={{ base: '10px', md: 'sm', lg: 'md', xl: 'xl' }}
                  color='gray.800'
                  fontWeight='medium'
                  lineHeight='1.2'
                  mt={{ md: '15px', lg: '0px' }}
                >
                  {item.isMetric ? item.label : item.text}
                </Text>
              </Box>
              {index < TRUST_ITEMS.length - 1 && (
                <Divider
                  orientation='vertical'
                  borderColor='gray.300'
                  h={{ base: '15px', md: '18px', lg: '20px', xl: '25px' }}
                  alignSelf='flex-start'
                  mt={{ base: '2px', md: '3px' }}
                />
              )}
            </React.Fragment>
          ))}
        </Flex>
      </Box>
    </Box>
  );
}
