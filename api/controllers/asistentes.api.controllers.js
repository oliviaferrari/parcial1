import Asistente from '../../models/asistente.model.js'; 

// controlador para obtener todos los asistentes
async function getAsistentes(req, res) {
  try {
    const asistentes = await Asistente.find();
    res.status(200).json(asistentes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// controlador para obtener un asistente por su ID
async function getAsistenteById(req, res) {
  const { id } = req.params;
  try {
    const asistente = await Asistente.findById(id);
    if (!asistente) {
      return res.status(404).json({ error: 'Asistente no encontrado' });
    }
    res.status(200).json(asistente);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// controlador para crear un nuevo asistente
async function createAsistente(req, res) {
  const { nombre, email, edad } = req.body;
  try {
    const nuevoAsistente = new Asistente({ nombre, email, edad });
    const asistente = await nuevoAsistente.save();
    res.status(201).json(asistente);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// controlador para actualizar un asistente existente
async function updateAsistente(req, res) {
  const { id } = req.params;
  const { nombre, email, edad } = req.body;
  try {
    const asistente = await Asistente.findByIdAndUpdate(id, { nombre, email, edad }, { new: true });
    if (!asistente) {
      return res.status(404).json({ error: 'Asistente no encontrado' });
    }
    res.status(200).json(asistente);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// controlador para eliminar un asistente por su ID
async function deleteAsistente(req, res) {
  const { id } = req.params;
  try {
    const asistente = await Asistente.findByIdAndDelete(id);
    if (!asistente) {
      return res.status(404).json({ error: 'Asistente no encontrado' });
    }
    res.status(200).json(asistente);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export {
  getAsistentes,
  getAsistenteById,
  createAsistente,
  updateAsistente,
  deleteAsistente
};
