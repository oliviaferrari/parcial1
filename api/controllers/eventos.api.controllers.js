import  Evento  from '../../models/evento.model.js';

// controlador para obtener todos los eventos
async function getEventos(req, res) {
  try {
    const eventos = await Evento.find();
    res.status(200).json(eventos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// controlador para obtener un evento por su ID
async function getEventoById(req, res) {
  const { id } = req.params;
  try {
    const evento = await Evento.findById(id);
    if (!evento) {
      return res.status(404).json({ error: 'Evento no encontrado' });
    }
    res.status(200).json(evento);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// controlador para crear un nuevo evento
async function createEvento(req, res) {
  const { nombre, fecha, ubicacion, organizador } = req.body;
  try {
    const nuevoEvento = new Evento({ nombre, fecha, ubicacion, organizador });
    const evento = await nuevoEvento.save();
    res.status(201).json(evento);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Controlador para actualizar un evento existente
async function updateEvento(req, res) {
  const { id } = req.params;
  const { nombre, fecha, ubicacion, organizador } = req.body;
  try {
    const evento = await Evento.findByIdAndUpdate(id, { nombre, fecha, ubicacion, organizador }, { new: true });
    if (!evento) {
      return res.status(404).json({ error: 'Evento no encontrado' });
    }
    res.status(200).json(evento);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// controlador para eliminar un evento por su ID
async function deleteEvento(req, res) {
  const { id } = req.params;
  try {
    const evento = await Evento.findByIdAndDelete(id);
    if (!evento) {
      return res.status(404).json({ error: 'Evento no encontrado' });
    }
    res.status(200).json(evento);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export {
  getEventos,
  getEventoById,
  createEvento,
  updateEvento,
  deleteEvento
};
