import { useEffect, useState } from "react";

import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Link,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
  Text,
} from "@chakra-ui/react";

const Layout = (props) => {
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(false);

  const handleName = () => {
    const decoded = Buffer.from(
      localStorage.getItem("token").split(".")[1],
      "base64",
    ).toString();

    const nim = JSON.parse(decoded).nim;
    return setUser(nim);
    // console.log(nim);
  };

  const logoutHandler = () => {
    localStorage.removeItem("token");
    setIsLogin(false);
  };

  const loginHandler = () => {
    if (!localStorage.getItem("token")) {
      setIsLogin(false);
    }

    return setIsLogin(true);
  };

  useEffect(() => {
    loginHandler();
    handleName();
  }, []);

  return (
    <>
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

          <Flex alignItems="center">
            <HStack spacing="3">
              {isLogin ? (
                <>
                  <Text fontSize="lg">{user}</Text>
                  <Menu>
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
            </HStack>
          </Flex>
        </Flex>
      </Box>

      <>{props.children}</>
    </>
  );
};

export default Layout;
