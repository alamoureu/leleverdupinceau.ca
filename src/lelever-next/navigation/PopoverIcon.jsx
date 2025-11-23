import { Icon } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export const PopoverIcon = (props) => {
  const iconStyles = {
    transform: props.isOpen ? 'rotate(-180deg)' : undefined,
    transition: 'transform 0.2s',
    transformOrigin: 'center',
  };
  return (
    <Icon
      aria-hidden
      as={FontAwesomeIcon}
      icon={faChevronDown}
      __css={iconStyles}
    />
  );
};
