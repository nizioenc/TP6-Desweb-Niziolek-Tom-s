const Persona = require('../models/personaModel');

const crearPersona = async (datos) => {
  const persona = new Persona(datos);
  return await persona.save();
};

const obtenerPersonas = async () => {
  return await Persona.find();
};

const actualizarPersona = async (id, datos) => {
  return await Persona.findByIdAndUpdate(id, datos, { new: true });
};

const eliminarPersona = async (id) => {
  return await Persona.findByIdAndDelete(id);
};

module.exports = {
  crearPersona,
  obtenerPersonas,
  actualizarPersona,
  eliminarPersona
};
