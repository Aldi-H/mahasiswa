import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
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
  );
}
