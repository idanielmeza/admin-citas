const jwt = require('jsonwebtoken');

const generarJWT = (id = '')=>{
    return new Promise( (res,rej) =>{

        const payload = {id};

        jwt.sign(
            payload,
            'hdjak2jda7n',
            {expiresIn: '12h'},
            (e,token) =>{
                if(e){
                    console.log(e);
                    rej('No se pudo generar el token');
                }else{
                    res(token);
                }
            }
        )

    })
}

module.exports ={
    generarJWT
}