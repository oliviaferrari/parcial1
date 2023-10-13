const express = require('express');
const router = express.Router();
const protectRoute = require('./middleware/auth.middleware'); // Ajusta la ruta según tu estructura


router.get('/ruta-protegida', protectRoute, (req, res) => {
  res.json({ message: '¡Acceso permitido! Este es un recurso protegido.' });
});

module.exports = router;
