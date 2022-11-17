import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8000",
});

// export const getAllMahasiswa = async () => {
//   try {
//     const res = await backend.get("/mahasiswa");

//     return res.data;
//   } catch (error) {
//     console.log(error);
//   }
// };
