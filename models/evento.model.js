const mongoose = require('mongoose');

const router = express.Router();
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

// Ruta para crear un evento
router.post('/eventos', async (req, res) => {
  try {
    const nuevoEvento = new Evento(req.body);
    const eventoGuardado = await nuevoEvento.save();
    res.status(201).json(eventoGuardado);
  } catch (error) {
    if (error.name === 'ValidationError') {
      // Error de validación
      res.status(400).json({ error: 'Datos de evento no válidos' });
    } else {
      // Otros errores
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  }
});


export default Evento;
