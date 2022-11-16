import {
  Box,
  Container,
  Table,
  TableContainer,
  Thead,
  useColorModeValue,
  Tbody,
  Td,
  Th,
  Tr,
} from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Box
      justify="center"
      align="center"
      minH="100vh"
      bg={useColorModeValue("gray.50", "gray.800")}
      pt={5}
      pb={10}
      px={10}
    >
      <Navbar />
      <Box
        rounded="lg"
        bg={useColorModeValue("white", "gray.700")}
        p={8}
        boxShadow="lg"
      >
        <TableContainer>
          <Table alignContent="center" alignItems="center">
            <Thead>
              <Tr>
                <Th>No</Th>
                <Th>NIM</Th>
                <Th>Nama</Th>
                <Th>Angkatan</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>1</Td>
                <Td>1909</Td>
                <Td>Test User</Td>
                <Td>2019</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}
