import { useState } from "react";

import {
  Avatar,
  Box,
  Flex,
  HStack,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

const Navbar = () => {
  const [login, setLogin] = useState(false);

  const handleLogin = () => {
    setLogin(!login);
  };

  return (
    <>
      <Box px={10} py={5}>
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <Box>Mahasiswa (Easy)</Box>

          <Flex alignItems="center">
            <HStack spacing="3">
              <Text>Username</Text>
              <Menu>
                <MenuButton minW={0} rounded="full">
                  <Avatar size="sm" />
                </MenuButton>
                <MenuList>
                  <MenuItem
                    onClick={() => {
                      alert("log out");
                    }}
                  >
                    Logout
                  </MenuItem>
                </MenuList>
              </Menu>
            </HStack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
