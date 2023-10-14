import express from 'express';
import { Router } from 'express';
import * as controller from '../controllers/eventos.controllers.js'; // Importa el controlador
import Evento from '../models/evento.model.js'; // Importa el modelo Evento

const route = express.Router();

// Rutas para la gestión de eventos
route.get('/', controller.getAllEventos); // Obtiene todos los eventos
route.get('/:id', controller.getEventoById); // Obtiene un evento por su ID
route.post('/', controller.createEvento); // Crea un nuevo evento

// ruta para crear un evento
route.post('/eventos', async (req, res) => {
  try {
    const nuevoEvento = new Evento(req.body);
    const eventoGuardado = await nuevoEvento.save();
    res.status(201).json(eventoGuardado);
  } catch (error) {
    res.status(400).json({ error: 'No se pudo crear el evento' });
  }
});

export default route;
