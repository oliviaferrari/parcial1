
const jwt = require('jsonwebtoken');

// clave secreta para firmar y verificar el token
const secretKey = 'your_secret_key';

function generateToken(payload) {
  return jwt.sign(payload, secretKey, { expiresIn: '1h' }); // El token expira en 1 hora
}

function verifyToken(token) {
  try {
    const decoded = jwt.verify(token, secretKey);
    return decoded;
  } catch (error) {
    return null;
  }
}

module.exports = { generateToken, verifyToken };
