import express from 'express';
import * as controller from '../controllers/eventos.controllers.js'; // Asegúrate de importar los controladores de eventos
const Evento = require('../models/evento.model');

const route = express.Router();

// rutas para la gestión de eventos
route.get('/', controller.getAllEventos); // Obtiene todos los eventos
route.get('/:id', controller.getEventoById); // Obtiene un evento por su ID
route.post('/', controller.createEvento); // Crea un nuevo evento
route.put('/:id', controller.updateEvento); // Actualiza un evento existente por su ID
route.delete('/:id', controller.deleteEvento); // Elimina un evento por su ID

export default route;


// ruta para crear un evento
router.post('/eventos', async (req, res) => {
    try {
      const nuevoEvento = new Evento(req.body);
      const eventoGuardado = await nuevoEvento.save();
      res.status(201).json(eventoGuardado);
    } catch (error) {
      res.status(400).json({ error: 'No se pudo crear el evento' });
    }
  });
  
  module.exports = router;
  