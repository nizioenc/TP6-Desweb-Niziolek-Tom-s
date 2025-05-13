import { useState, useEffect } from "react";

export default function PersonForm({ onSave, personToEdit }) {
  const [form, setForm] = useState({ nombre: "", apellido: "", edad: "" });

  useEffect(() => {
    if (personToEdit) setForm(personToEdit);
  }, [personToEdit]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
    setForm({ nombre: "", apellido: "", edad: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="nombre" placeholder="Nombre" value={form.nombre} onChange={handleChange} required />
      <input name="apellido" placeholder="Apellido" value={form.apellido} onChange={handleChange} required />
      <input name="edad" type="number" placeholder="Edad" value={form.edad} onChange={handleChange} required />
      <button type="submit">{personToEdit ? "Actualizar" : "Guardar"}</button>
    </form>
  );
}
