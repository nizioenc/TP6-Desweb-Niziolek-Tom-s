// src/App.jsx
import { useEffect, useState } from 'react';
import ProductForm from './components/ProductForm';
import ProductTable from './components/ProductTable';
import {
  getProductos,
  createProducto,
  updateProducto,
  deleteProducto,
} from './services/productService';

function App() {
  const [productos, setProductos] = useState([]);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  const cargarProductos = async () => {
    const res = await getProductos();
    setProductos(res.data);
  };

  useEffect(() => {
    cargarProductos();
  }, []);

  const guardarProducto = async (producto) => {
    if (producto._id) {
      await updateProducto(producto._id, producto);
    } else {
      await createProducto(producto);
    }
    cargarProductos();
    setProductoSeleccionado(null);
  };

  const eliminarProducto = async (id) => {
    await deleteProducto(id);
    cargarProductos();
  };

  return (
    <div>
      <h1>Gestión de Productos</h1>
      <ProductForm onSave={guardarProducto} selectedProduct={productoSeleccionado} />
      <ProductTable
        productos={productos}
        onEdit={setProductoSeleccionado}
        onDelete={eliminarProducto}
      />
    </div>
  );
}

export default App;
