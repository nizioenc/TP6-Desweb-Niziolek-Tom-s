const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/productosdb')
  .then(() => {
    console.log('✅ Conectado a MongoDB');
  })
  .catch((error) => {
    console.error('❌ Error al conectar a MongoDB:', error);
  });

module.exports = mongoose;
