const mongoose = require('mongoose');

const ubicacionSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  direccion: {
    type: String,
    required: true,
  },
  capacidad: {
    type: Number,
    required: true,
  },

});

const Ubicacion = mongoose.model('Ubicacion', ubicacionSchema);

export default Ubicacion;
