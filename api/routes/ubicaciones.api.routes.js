import { Router } from 'express';
import * as controller from '../controllers/ubicaciones.api.controllers.js'; 

const route = Router();

//  las rutas para la gestión de ubicaciones en la API
route.get('/ubicaciones', controller.getUbicaciones); // obtiene la lista de todas las ubicaciones
route.get('/ubicaciones/:id', controller.getUbicacionById); // obtiene una ubicación por su ID
route.post('/ubicaciones', controller.createUbicacion); // crea una nueva ubicación
route.put('/ubicaciones/:id', controller.updateUbicacion); // actualiza una ubicación existente por su ID
route.delete('/ubicaciones/:id', controller.deleteUbicacion); // elimina una ubicación por su ID

export default route;
