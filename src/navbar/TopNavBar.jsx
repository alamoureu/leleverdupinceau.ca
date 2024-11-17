import React, { useContext } from 'react';
import { Icon, Stack, Flex, Text, Button } from '@chakra-ui/react';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { motion } from 'framer-motion';
import appContext from '../AppProvider';

export default function TopNavBar() {
  const { currentLang, setCurrentLang } = useContext(appContext);
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      style={{ width: '100%' }}
    >
      <Flex
        display="flex"
        justifyContent="flex-end"
        w="100%"
        bg="black"
        p="5px"
        zIndex="tooltip"
      >
        <Stack
          direction="row"
          alignItems="center"
          justifySelf="flex-end"
          px="5%"
          gap="2"
        >
          <Icon
            as={AiOutlineMail}
            color="white"
            fontSize="16px"
            onClick={() =>
              (window.location = 'mailto:leleverdupinceau@gmail.com')
            }
          />
          <a href="tel:4388680772">
            <Stack cursor="pointer" direction="row" gap="2">
              <Icon as={AiOutlinePhone} color="white" fontSize="16px" />
              <Text fontSize="12px" color="white" fontWeight="semibold">
                (438) 868-0772
              </Text>
            </Stack>
          </a>

          <Button
            bg="blue.400"
            size="xs"
            borderRadius="xs"
            h="20px"
            ml="10px"
            onClick={() => setCurrentLang(currentLang === 'fr' ? 'en' : 'fr')}
          >
            {currentLang === 'fr' ? 'EN' : 'FR'}
          </Button>
        </Stack>
      </Flex>
    </motion.div>
  );
}
