
const jwt = require('/jwt.js'); 

function protectRoute(req, res, next) {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({ message: 'Acceso denegado. Token no proporcionado.' });
  }

  const decoded = jwt.verifyToken(token);
  if (!decoded) {
    return res.status(403).json({ message: 'Token inválido o expirado.' });
  }

  req.user = decoded; 
  next();
}

module.exports = protectRoute;
