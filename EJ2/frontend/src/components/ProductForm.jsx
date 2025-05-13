// src/components/ProductForm.jsx
import { useState, useEffect } from 'react';

const ProductForm = ({ onSave, selectedProduct }) => {
  const [form, setForm] = useState({ nombre: '', descripcion: '', precio: '' });

  useEffect(() => {
    if (selectedProduct) setForm(selectedProduct);
  }, [selectedProduct]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
    setForm({ nombre: '', descripcion: '', precio: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="nombre" placeholder="Nombre" value={form.nombre} onChange={handleChange} required />
      <input name="descripcion" placeholder="Descripción" value={form.descripcion} onChange={handleChange} required />
      <input name="precio" type="number" placeholder="Precio" value={form.precio} onChange={handleChange} required />
      <button type="submit">{selectedProduct ? 'Actualizar' : 'Guardar'}</button>
    </form>
  );
};

export default ProductForm;
