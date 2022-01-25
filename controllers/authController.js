const bcrypt = require('bcryptjs');
const Usuario = require('../models/user');

const {generarJWT} = require('../helpers/jwt');

const crearCuenta = async(req,res)=>{

    const usuario = req.body;

    const salt = await bcrypt.genSalt(10);
    usuario.password = await bcrypt.hash(usuario.password,salt);

    const usuarioDB = new Usuario(usuario);

    try{
        await usuarioDB.save();

        res.status(200).json(usuario);

    }catch(error){
        res.status(500).json({mensaje:'Error al agregar el usuario'});
    }


}

const actualizarCuenta = async(req,res)=>{

    const usuario = req.body;

    try{

        let usuarioDB = await Usuario.findById(usuario.id);

        if(!usuarioDB){
            return res.status(404).json({mensaje:'No se encontro el usuario'});
        }

        const salt = await bcrypt.genSalt(10);
        usuario.password = await bcrypt.hash(usuario.password,salt);

         usuarioDB = usuario;

         await usuarioDB.save();

        res.status(200).json(usuarioDB);

    }catch(error){
        res.status(500).json({mensaje:'Error al actualizar el usuario'});
    }


}

const login = async(req,res)=>{
    
        const usuario = req.body;
    
        try{
            const usuarioDB = await Usuario.findOne({email:usuario.email});
    
            const validarPassword = await bcrypt.compare(usuario.password,usuarioDB.password);
    
            if(!validarPassword){
                return res.status(401).json({msg: 'Credenciales incorrectas'})
            }
    
            const token = await generarJWT(usuarioDB.id);
            
            res.json({
                token,
                usuario: usuarioDB
            });
    
        }catch(error){
            res.status(500).json({mensaje:'Error al autenticar el usuario'});
        }
}

const obtenerUsuario = async(req,res)=>{

    const {usuario} = req;

    const token =  await generarJWT(usuario.id);

    return res.json({
        usuario,
        token
    });

}

module.exports = {
    crearCuenta,
    actualizarCuenta,
    login,
    obtenerUsuario
}