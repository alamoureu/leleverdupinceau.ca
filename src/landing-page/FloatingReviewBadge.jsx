import React, { useState } from 'react';
import { Box, Text, Icon, Image, Stack } from '@chakra-ui/react';
import { FaStar, FaTimes } from 'react-icons/fa';

export default function FloatingReviewBadge({ onOpen, lang }) {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <Box
      position="fixed"
      bottom={{ base: '7px', md: '7px' }}
      left={{ base: '7px', md: '7px' }}
      bg="white"
      p={3}
      borderRadius="md"
      boxShadow="lg"
      zIndex="1000"
      cursor="pointer"
      display="flex"
      alignItems="center"
      onClick={onOpen}
      _hover={{ boxShadow: 'xl' }}
    >
      <Box
        position="absolute"
        top="5px"
        right="10px"
        onClick={(e) => {
          e.stopPropagation();
          handleClose();
        }}
      >
        <Icon as={FaTimes} color="gray.500" boxSize="15px" cursor="pointer" />
      </Box>
      <Stack direction="column" align="center">
        <Image
          src="https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/dssdds.jpg"
          alt="Google logo"
          boxSize="20px"
          mb={1}
        />

        <Text fontSize="lg" fontWeight="bold" color="black">
          4.8
        </Text>
        <Stack direction="row" spacing="1px">
          {[...Array(5)].map((_, i) => (
            <Icon key={i} as={FaStar} color="yellow.500" boxSize="12px" />
          ))}
        </Stack>
        <Text fontSize="xs" color="gray.500">
          {lang === 'fr' ? 'Lire nos autres ommentaires' : 'Read our other reviews'}
        </Text>
      </Stack>
    </Box>
  );
}
