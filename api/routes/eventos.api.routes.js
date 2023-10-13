import { Router } from 'express';
import * as controller from '../controllers/eventos.api.controllers.js'; 
const route = Router();

route.get('/eventos', controller.getEventos); // obtener todos los eventos
route.post('/eventos', controller.createEvento); // crear un evento
route.get('/eventos/:idEvento', controller.getEventoById); // obtener un evento por su ID

export default route;
