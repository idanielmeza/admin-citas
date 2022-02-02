const {Schema,model} = require('mongoose');

const citaSchema = new Schema({

    nombre:{
        type:String,
        required:[true,'El nombre es necesario']

    },

    numero:{
        type:Number,
        required:[true,'El numero es necesario']
    },

    numero2:{
        type:Number
    },

    email:{
        type:String
    },

    fecha:{
        type:String,
        required:[true,'La fecha es necesaria']
    },

    hora:{
        type:String,
        required:[true,'La hora es necesaria']
    },

    hospital:{
        type:String
    },

    informacion:{
        type:String
    },

    doctor:{
        type:Schema.Types.ObjectId,
        ref:'Usuario',
        required:[true,'El usuario es necesario']
    },

    tipo:{
        type:String,
    },

    costo:{
        type:Number
    },
    edad:{
        type: Number
    }

});

module.exports = model('Cita',citaSchema);