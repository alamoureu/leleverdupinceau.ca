import { IconButton, useColorModeValue } from '@chakra-ui/react'

export const ProductCardButton = (props) => (
  <IconButton
    bg={useColorModeValue('white', 'gray.800')}
    boxShadow="base"
    variant="tertiary"
    colorScheme="purple"
    size="lg"
    sx={{
      ':not(:hover)': {
        color: useColorModeValue('gray.600', 'gray.400'),
      },
    }}
    _focus={{
      boxShadow: 'none',
    }}
    _focusVisible={{
      boxShadow: 'outline',
    }}
    {...props}
  />
)
