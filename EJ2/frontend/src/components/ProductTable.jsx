// src/components/ProductTable.jsx
const ProductTable = ({ productos, onEdit, onDelete }) => {
  return (
    <table border="1">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Descripción</th>
          <th>Precio</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {productos.map((p) => (
          <tr key={p._id}>
            <td>{p.nombre}</td>
            <td>{p.descripcion}</td>
            <td>${p.precio}</td>
            <td>
              <button onClick={() => onEdit(p)}>Editar</button>
              <button onClick={() => onDelete(p._id)}>Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
