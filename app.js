
import EventoRoute from './routes/eventos.routes.js';
import EventoRouteApi from './api/routes/eventos.api.routes.js';
import AsistentesRouteApi from './api/routes/asistentes.api.routes.js';
import OrganizadoresRouteApi from './api/routes/organizadores.api.routes.js';
import UbicacionesRouteApi from './api/routes/ubicaciones.api.routes.js';

const express = require('express');
app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

const app = express();
const port     = 2222;

app.use(errorHandler);
const rutasProtegidas = require('./rutasProtegidas.js');

app.use('/api', express.json());

app.use('/', express.static('public'));
app.use('/eventos', EventoRoute);
app.use('/api', EventoRouteApi);
app.use('/api', AsistentesRouteApi);
app.use('/api', OrganizadoresRouteApi);
app.use('/api', UbicacionesRouteApi);

app.listen(2222, function () {
    console.log('Servidor corriendo en el host http://localhost:2222');
});



mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Estas conectado :)'))
    .catch((err) => console.log('Error de conexion :(', err))


