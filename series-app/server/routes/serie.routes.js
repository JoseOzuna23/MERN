const ControladorSeries = require('../controllers/serie.controllers')

module.exports = (app) =>{
    app.get('/api/obtenerseries', ControladorSeries.obtenerSeries)
    app.post('/api/crearserie', ControladorSeries.crearSeries)
    app.get('/api/unaserie/:id', ControladorSeries.obtenerUnaSerie)
    app.delete('/api/borrarserie/:id', ControladorSeries.eliminarSerie)
    app.put('/api/editarserie/:id', authenticate, ControladorSeries.editarSerie)
    
}