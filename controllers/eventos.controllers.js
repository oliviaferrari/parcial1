import * as services from '../services/eventos.services.js'; 
import express from 'express';
import Evento from '../models/evento.model.js';

const router = express.Router();

// Ruta para obtener eventos por sección
router.get('/section/:section', (req, res) => {
  const section = req.params.section;

  services.getEventosBySection({ section: section })
    .then(function (eventos) {
      if (eventos) {
        res.send(views.createEventosPage(eventos, section)); 
      } else {
        res.send(views.createPage('Sección no encontrada', '<p>La sección buscada no existe o no hay eventos que coincidan.</p>'));
      }
    });
});

// Ruta para crear un evento
router.post('/eventos', async (req, res) => {
  try {
    const nuevoEvento = new Evento(req.body);
    const eventoGuardado = await nuevoEvento.save();
    res.status(201).json(eventoGuardado);
  } catch (error) {
    res.status(400).json({ error: 'No se pudo crear el evento' });
  }
});

export default router;
