import { Router } from 'express';
import * as controller from '../controllers/asistentes.api.controllers.js'; // Asegúrate de importar los controladores adecuados para asistentes
const router = express.Router();
const route = Router();

//  rutas para la gestión de asistentes en la API
route.get('/asistentes', controller.getAsistentes); //  la lista de todos los asistentes
route.get('/asistentes/:id', controller.getAsistenteById); //  un asistente por su ID
route.post('/asistentes', controller.createAsistente); // crea un nuevo asistente
route.put('/asistentes/:id', controller.updateAsistente); // actualiza un asistente existente por su ID
route.delete('/asistentes/:id', controller.deleteAsistente); // elimina un asistente por su ID

export default route;
