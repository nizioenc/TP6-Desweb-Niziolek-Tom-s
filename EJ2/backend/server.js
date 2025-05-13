const express = require('express');
const cors = require('cors');
const app = express();

// Conectar a la base de datos
require('./database');

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
const productoRoutes = require('./routes/productoRoutes');
app.use('/api/productos', productoRoutes);

// Servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
