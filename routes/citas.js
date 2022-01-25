const {Router} = require('express');
const {agregarCita, obtenerCitas, obtenerCitaId, actualizarCita, eliminarCita, obtenerCitaFecha} = require('../controllers/citasController');
const {validarJWT} = require('../middlewares/validar-token');
const {check} = require('express-validator');
const {validarCampos} = require('../middlewares/validar-errores');

const router = Router();

router.get('/',[
    validarJWT
] ,obtenerCitas)

router.get('/:id',[
    validarJWT
] ,obtenerCitaId) 

router.get('/fecha/:fecha',obtenerCitaFecha)

router.post('/',[
    validarJWT
] ,agregarCita);

router.put('/:id',[
    validarJWT
] ,actualizarCita);

router.delete('/:id',[
    validarJWT
] ,eliminarCita)

module.exports = router;