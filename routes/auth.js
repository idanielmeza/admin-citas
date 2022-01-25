const {Router} = require('express');
const {crearCuenta, login, obtenerUsuario} = require('../controllers/authController');
const {check} = require('express-validator');
const {validarCampos} = require('../middlewares/validar-errores');
const {validarJWT} = require('../middlewares/validar-token');

const router = Router();

router.post('/singup',[
    check('nombre','El nombre es obligatorio').not().isEmpty().escape(),
    check('email','El email es obligatorio').isEmail().normalizeEmail(),
    check('password','El password es obligatorio').not().isEmpty(),
    validarCampos
],crearCuenta)
router.post('/singin',[
    check('email','El email es obligatorio').isEmail().normalizeEmail(),
    check('password','El password es obligatorio').not().isEmpty(),
    validarCampos
] ,login)

router.get('/usuario',validarJWT, obtenerUsuario)

module.exports = router;