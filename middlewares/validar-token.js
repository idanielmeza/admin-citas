const jwt = require('jsonwebtoken');
const Usuario = require('../models/user');

const validarJWT = async(req,res,next)=>{

    let token = req.header('x-token');

    token = String(token)

    if(!token){
        return res.status(401).json({msg: 'No hay token'})
    }

    try {
        const {id} = jwt.verify(token, 'hdjak2jda7n');
        
        const usuario = await Usuario.findById(id);

        if(!usuario){
            return res.status(401).json({msg: 'Token no valido - Usuario no existe'})
        }

        req.usuario = usuario;

        next();
    } catch (error) {
        console.log(error)
        res.status(401).json({msg: 'Token no valido'})

    }

    

}

module.exports ={
    validarJWT
}