const mongoose = require('mongoose');

const asistenteSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

const Asistente = mongoose.model('Asistente', asistenteSchema);

export default Asistente;
