import { useEffect, useState } from "react";

import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
} from "@chakra-ui/react";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(false);

  const handleName = () => {
    const decoded = Buffer.from(
      localStorage.getItem("user").split(".")[1],
      "base64",
    ).toString();

    const nim = JSON.parse(decoded).nim;
    return setUser(nim);
  };

  const logoutHandler = () => {
    setUser({});
    localStorage.clear();
    setIsLogin(false);
  };

  const loginHandler = () => {
    if (!localStorage.getItem("user")) {
      setIsLogin(false);
    }

    return setIsLogin(true);
  };

  useEffect(() => {
    loginHandler();
    handleName();
  }, []);

  return (
    <Box px={10}>
      <Flex my={5} h={16} alignItems="center" justifyContent="space-between">
        <Heading as="h2" size="md">
          Mahasiswa
        </Heading>

        <Stack spacing={8} alignItems="center">
          <Heading as="h3" size="lg">
            Easy
          </Heading>
        </Stack>

        <Flex alignItems="center" gridColumnGap={4}>
          {isLogin ? (
            <>
              <Text fontSize="lg">{user}</Text>
              <Menu m={0}>
                <MenuButton minW={0} rounded="full">
                  <Avatar size="sm" />
                </MenuButton>
                <MenuList>
                  <MenuItem onClick={logoutHandler}>Logout</MenuItem>
                </MenuList>
              </Menu>
            </>
          ) : (
            <Link href="./login">
              <Button>Login</Button>
            </Link>
          )}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
