const personaService = require('../services/personaService');

const crearPersona = async (req, res) => {
  try {
    const persona = await personaService.crearPersona(req.body);
    res.status(201).json(persona);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear persona' });
  }
};

const obtenerPersonas = async (req, res) => {
  try {
    const personas = await personaService.obtenerPersonas();
    res.json(personas);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener personas' });
  }
};

const actualizarPersona = async (req, res) => {
  try {
    const persona = await personaService.actualizarPersona(req.params.id, req.body);
    res.json(persona);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar persona' });
  }
};

const eliminarPersona = async (req, res) => {
  try {
    await personaService.eliminarPersona(req.params.id);
    res.json({ mensaje: 'Persona eliminada' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar persona' });
  }
};

module.exports = {
  crearPersona,
  obtenerPersonas,
  actualizarPersona,
  eliminarPersona
};
