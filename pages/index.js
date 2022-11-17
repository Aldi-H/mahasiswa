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

import { useEffect, useState } from "react";

import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/navbar";
import styles from "../styles/Home.module.css";

import backend from "../api/backend";
import { getAllMahasiswa } from "../api/backend";
import axios from "axios";

// export const getStaticProps = async () => {
//   const res = await backend.get("/mahasiswa");
//   const data = res.json();

//   return {
//     props: {
//       mahasiswas: data,
//     },
//   };
// };

export default function Home() {
  const [mahasiswas, setMahasiswas] = useState([]);

  async function getAllMahasiswa() {
    try {
      const res = await backend.get("/mahasiswa");
      const data = res.data;

      console.log(data.data.mahasiswa);
      setMahasiswas(data.data.mahasiswa);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllMahasiswa();
  }, []);

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
          <Table>
            <Thead>
              <Tr>
                <Th>No</Th>
                <Th>NIM</Th>
                <Th>Nama</Th>
                <Th>Angkatan</Th>
              </Tr>
            </Thead>
            <Tbody>
              {mahasiswas &&
                mahasiswas.map((mahasiswa, index) => (
                  <Tr key={mahasiswa.nim}>
                    <Td>{index + 1}</Td>
                    <Td>{mahasiswa.nim}</Td>
                    <Td>{mahasiswa.nama}</Td>
                    <Td>{mahasiswa.angkatan}</Td>
                  </Tr>
                ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}
