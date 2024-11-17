import { Image, Stack } from '@chakra-ui/react';
import { motion } from 'framer-motion';

export const ProductCard = (img) => {
  return (
    <Stack spacing="4" h="100%">
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 1 }}>
        <Stack
          h="300px"
          w="300px"
          bg="gray.200"
          borderRadius="lg"
          cursor="pointer"
        >
          <Image src={img} h="300px" w="300px" borderRadius="lg" />
        </Stack>
      </motion.div>
    </Stack>
  );
};
