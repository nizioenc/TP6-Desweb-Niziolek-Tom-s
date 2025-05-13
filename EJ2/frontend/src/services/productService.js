// src/services/productService.js
import axios from 'axios';

const API = 'http://localhost:3000/api/productos';

export const getProductos = () => axios.get(API);
export const createProducto = (producto) => axios.post(API, producto);
export const updateProducto = (id, producto) => axios.put(`${API}/${id}`, producto);
export const deleteProducto = (id) => axios.delete(`${API}/${id}`);
