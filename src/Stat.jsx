import { Heading, Stack, Text } from '@chakra-ui/react';

export const Stat = (props) => {
  const { label, value, ...stackProps } = props;
  return (
    <Stack spacing="3" textAlign="center" {...stackProps}>
      <Heading
        size={{
          base: 'lg',
          md: 'xl',
        }}
        color="accent"
      >
        {value}
      </Heading>
      <Text fontSize="lg" fontWeight="medium" color="fg.muted">
        {label}
      </Text>
    </Stack>
  );
};
