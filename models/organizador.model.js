import mongoose from 'mongoose';


const organizadorSchema = new mongoose.Schema({
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

const Organizador = mongoose.model('Organizador', organizadorSchema);

export default Organizador;
