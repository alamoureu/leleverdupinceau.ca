import { Icon } from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';

export const ToggleButton = (props) => {
  const { isOpen: _isOpen, ...iconButtonProps } = props;
  return (
    <Icon
      variant='unstyled'
      display='inline-flex'
      fontSize={{ base: '24px', sm: '30px' }}
      w='fit-content'
      zIndex={9999999}
      as={FiMenu}
      {...iconButtonProps}
    />
  );
};
