const {Schema,model} = require('mongoose');

const userSchema = new Schema({

    nombre:{
        type:String,
        required:[true,'El nombre es necesario']
    },

    email:{
        type:String,
        required:[true,'El email es necesario']
    },

    password:{
        type:String,
        required:[true, 'La contrasena es necesaria']
    }

});

module.exports = model('Usuario',userSchema);