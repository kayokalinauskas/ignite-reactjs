import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

import { IProfileProps } from './@interfaces';

export function Profile({
  showProfileData = true,
}: IProfileProps): JSX.Element {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Kayo Kalinauskas</Text>
          <Text color="gray.300" fontSize="small">
            kalinauskas@live.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Kayo Kalinauskas"
        src="https://github.com/kayokalinauskas.png"
      />
    </Flex>
  );
}
