import { Icon } from '@chakra-ui/react';
import { FaChevronDown } from 'react-icons/fa';

export const PopoverIcon = (props) => {
  const iconStyles = {
    transform: props.isOpen ? 'rotate(-180deg)' : undefined,
    transition: 'transform 0.2s',
    transformOrigin: 'center',
  };
  return (
    <Icon
      aria-hidden
      as={FaChevronDown}
      __css={iconStyles}
    />
  );
};
