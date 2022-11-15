import { useState } from "react";

import {
  Box,
  Button,
  Flex,
  FormControl,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
  VStack,
} from "@chakra-ui/react";

import { EmailIcon, LockIcon } from "@chakra-ui/icons";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [nim, setNim] = useState("");
  const [password, setPassword] = useState("");

  const handleShowPassword = () => setShowPassword(!showPassword);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("nim: ", nim);
    console.log("password: ", password);
  };

  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      width="100wh"
    >
      <VStack justifyContent="center" alignItems="center" mb="4">
        <Heading>Log in to your account</Heading>
        <form onSubmit={handleSubmit}>
          <Box>
            <Stack spacing={4}>
              <FormControl>
                <InputGroup>
                  <InputLeftElement children={<EmailIcon color="gray.300" />} />
                  <Input
                    type="text"
                    placeholder="NIM"
                    value={nim}
                    onChange={(e) => setNim(e.target.value)}
                  ></Input>
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement children={<LockIcon color="gray.300" />} />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <InputRightElement width="4.5rem">
                    <Button size="sm" h="1.75rem" onClick={handleShowPassword}>
                      {showPassword ? "hide" : "show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Button type="submit" value="submit">
                Login
              </Button>
            </Stack>
          </Box>
        </form>
      </VStack>
    </Flex>
  );
};

export default Login;
