import mongoose from 'mongoose';

const eventoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  fecha: {
    type: Date,
    required: true,
  },
  ubicacion: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Ubicacion',
  },
});

const Evento = mongoose.model('Evento', eventoSchema);

export default Evento;
