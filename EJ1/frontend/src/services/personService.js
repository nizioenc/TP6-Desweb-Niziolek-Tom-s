import axios from "axios";

const API = "http://localhost:3000/api/personas"; // Ajustar si usás otro puerto

export default {
  getAll: async () => {
    const res = await axios.get(API);
    return res.data;
  },
  create: async (person) => {
    const res = await axios.post(API, person);
    return res.data;
  },
  update: async (id, person) => {
    const res = await axios.put(`${API}/${id}`, person);
    return res.data;
  },
  remove: async (id) => {
    const res = await axios.delete(`${API}/${id}`);
    return res.data;
  },
};
