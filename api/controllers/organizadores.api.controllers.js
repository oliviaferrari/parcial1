import Organizador from '../../models/organizador.model.js'; 

// controlador para obtener todos los organizadores
async function getOrganizadores(req, res) {
  try {
    const organizadores = await Organizador.find();
    res.status(200).json(organizadores);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// controlador para obtener un organizador por su ID
async function getOrganizadorById(req, res) {
  const { id } = req.params;
  try {
    const organizador = await Organizador.findById(id);
    if (!organizador) {
      return res.status(404).json({ error: 'Organizador no encontrado' });
    }
    res.status(200).json(organizador);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// controlador para crear un nuevo organizador
async function createOrganizador(req, res) {
  const { nombre, email, telefono } = req.body;
  try {
    const nuevoOrganizador = new Organizador({ nombre, email, telefono });
    const organizador = await nuevoOrganizador.save();
    res.status(201).json(organizador);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// controlador para actualizar un organizador existente
async function updateOrganizador(req, res) {
  const { id } = req.params;
  const { nombre, email, telefono } = req.body;
  try {
    const organizador = await Organizador.findByIdAndUpdate(id, { nombre, email, telefono }, { new: true });
    if (!organizador) {
      return res.status(404).json({ error: 'Organizador no encontrado' });
    }
    res.status(200).json(organizador);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// controlador para eliminar un organizador por su ID
async function deleteOrganizador(req, res) {
  const { id } = req.params;
  try {
    const organizador = await Organizador.findByIdAndDelete(id);
    if (!organizador) {
      return res.status(404).json({ error: 'Organizador no encontrado' });
    }
    res.status(200).json(organizador);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export {
  getOrganizadores,
  getOrganizadorById,
  createOrganizador,
  updateOrganizador,
  deleteOrganizador
};
