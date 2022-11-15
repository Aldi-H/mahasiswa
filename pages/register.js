import { useState } from "react";

import {
  Flex,
  Box,
  Stack,
  VStack,
  Input,
  Button,
  Heading,
  FormControl,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Select,
} from "@chakra-ui/react";

import { EmailIcon, LockIcon } from "@chakra-ui/icons";

import { MdArrowDropDown } from "react-icons/md";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [nim, setNim] = useState("");
  const [password, setPassword] = useState("");
  const [nama, setNama] = useState("");
  const [angkatan, setAngkatan] = useState("");

  const handleShowPassword = () => setShowPassword(!showPassword);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("nim: ", nim);
    console.log("nama: ", nama);
    console.log("angkatan: ", angkatan);
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
        <Heading>Register an account</Heading>
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
                  <InputLeftElement children={<EmailIcon color="gray.300" />} />
                  <Input
                    type="text"
                    placeholder="Nama"
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                  ></Input>
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <Select
                    placeholder="Angkatan"
                    icon={<MdArrowDropDown />}
                    value={angkatan}
                    onChange={(e) => setAngkatan(e.target.value)}
                  >
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                  </Select>
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
                Register
              </Button>
            </Stack>
          </Box>
        </form>
      </VStack>
    </Flex>
  );
};

export default Register;
