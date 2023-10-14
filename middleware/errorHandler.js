function errorHandler(err, req, res, next) {
    console.error(err);
  
    if (err.name === 'ValidationError') {
      // error de validación 
      return res.status(400).json({ error: err.message });
    }
  
    if (err.name === 'CastError') {
      // error de conversión de tipo 
      return res.status(400).json({ error: 'ID inválido' });
    }
  
    // otros errores
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
  
  module.exports = errorHandler;