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
  useColorModeValue,
  FormLabel,
  Text,
  Link,
  Icon,
} from "@chakra-ui/react";

import { BiIdCard, BiLockAlt, BiShow, BiHide } from "react-icons/bi";
import { useRouter } from "next/router";
import backend from "../api/backend";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [nim, setNim] = useState("");
  const [password, setPassword] = useState("");
  const [validation, setValidation] = useState([]);

  const router = useRouter();

  const handleShowPassword = () => setShowPassword(!showPassword);

  const loginhandler = async (e) => {
    e.preventDefault();

    await backend
      .post("/auth/login", {
        nim,
        password,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.data.token);
        router.push("/");
      })
      .catch((err) => {
        setValidation(err.response.data.message);
      });
  };

  return (
    <Flex
      justify="center"
      align="center"
      minH="100vh"
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Heading fontSize="4xl">Sign in to your account</Heading>

        <Box
          rounded="lg"
          bg={useColorModeValue("white", "gray.700")}
          p={8}
          boxShadow="lg"
        >
          <form onSubmit={loginhandler}>
            <Stack spacing={4}>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    children={
                      <Icon as={BiIdCard} w="6" h="6" color="gray.300" />
                    }
                  />
                  <Input
                    type="text"
                    placeholder="NIM"
                    value={nim}
                    onChange={(e) => setNim(e.target.value)}
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    children={
                      <Icon as={BiLockAlt} w="6" h="6" color="gray.300" />
                    }
                  />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <InputRightElement h="full">
                    <Button variant="ghost" onClick={handleShowPassword}>
                      {showPassword ? (
                        <Icon as={BiShow} />
                      ) : (
                        <Icon as={BiHide} />
                      )}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  type="submit"
                  value="submit"
                  size="lg"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  // onClick={() => router.push("/")}
                >
                  Sign in
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align="center">
                  Don't have an account?{" "}
                  <Link color="blue.400" href="./register">
                    register
                  </Link>
                </Text>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Login;
