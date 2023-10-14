import { Router } from 'express';
import * as controller from '../controllers/organizadores.api.controllers.js'; 
const router = express.Router();
const route = Router();

//  las rutas para la gestión de organizadores en la API
route.get('/organizadores', controller.getOrganizadores); // obtiene la lista de todos los organizadores
route.get('/organizadores/:id', controller.getOrganizadorById); // obtiene un organizador por su ID
route.post('/organizadores', controller.createOrganizador); // crea un nuevo organizador
route.put('/organizadores/:id', controller.updateOrganizador); // actualiza un organizador existente por su ID
route.delete('/organizadores/:id', controller.deleteOrganizador); // elimina un organizador por su ID

export default route;
