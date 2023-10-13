import Ubicacion from '../../models/ubicacion.model.js'; 

// controlador para obtener todas las ubicaciones
async function getUbicaciones(req, res) {
  try {
    const ubicaciones = await Ubicacion.find();
    res.status(200).json(ubicaciones);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// controlador para obtener una ubicación por su ID
async function getUbicacionById(req, res) {
  const { id } = req.params;
  try {
    const ubicacion = await Ubicacion.findById(id);
    if (!ubicacion) {
      return res.status(404).json({ error: 'Ubicación no encontrada' });
    }
    res.status(200).json(ubicacion);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// controlador para crear una nueva ubicación
async function createUbicacion(req, res) {
  const { nombre, direccion, capacidad } = req.body;
  try {
    const nuevaUbicacion = new Ubicacion({ nombre, direccion, capacidad });
    const ubicacion = await nuevaUbicacion.save();
    res.status(201).json(ubicacion);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// controlador para actualizar una ubicación existente
async function updateUbicacion(req, res) {
  const { id } = req.params;
  const { nombre, direccion, capacidad } = req.body;
  try {
    const ubicacion = await Ubicacion.findByIdAndUpdate(id, { nombre, direccion, capacidad }, { new: true });
    if (!ubicacion) {
      return res.status(404).json({ error: 'Ubicación no encontrada' });
    }
    res.status(200).json(ubicacion);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// controlador para eliminar una ubicación por su ID
async function deleteUbicacion(req, res) {
  const { id } = req.params;
  try {
    const ubicacion = await Ubicacion.findByIdAndDelete(id);
    if (!ubicacion) {
      return res.status(404).json({ error: 'Ubicación no encontrada' });
    }
    res.status(200).json(ubicacion);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export {
  getUbicaciones,
  getUbicacionById,
  createUbicacion,
  updateUbicacion,
  deleteUbicacion
};
