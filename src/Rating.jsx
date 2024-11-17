import { HStack, Icon } from '@chakra-ui/react';
import { BsFillStarFill } from 'react-icons/bs';

export const Rating = (props) => (
  <HStack spacing="1.5" {...props}>
    {Array.from({
      length: 5,
    })
      .map((_, index) => index + 1)
      .map((index) => (
        <Icon
          key={index}
          as={BsFillStarFill}
          fontSize="xl"
          color="purple.500"
          _dark={{
            color: 'purple.200',
          }}
        />
      ))}
  </HStack>
);
