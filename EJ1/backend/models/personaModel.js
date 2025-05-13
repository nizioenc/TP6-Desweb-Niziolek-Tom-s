const mongoose = require('mongoose');

const PersonaSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  edad: { type: Number, required: true }
});

module.exports = mongoose.model('Persona', PersonaSchema);
