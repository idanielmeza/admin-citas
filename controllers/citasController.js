const Citas = require('../models/cita');

const agregarCita = async(req, res) => {

    const cita = req.body;

    cita.doctor = req.usuario.id;

    if(cita.costo){
        cita.costo = 0;
    }

    try{

        const nuevaCita = new Citas(cita);

        await nuevaCita.save();

        res.status(200).json(nuevaCita);

    }catch(error){
        res.status(500).json({mensaje:'Error al agregar la cita'});
        console.log(error);
    }
    
    
}

const obtenerCitas = async(req,res) => {

    const date = new Date();

    let fecha;

    if(date.getMonth() < 10){
        fecha = date.getFullYear() + '-0' + (date.getMonth() + 1) + '-' + date.getDate();
    }else{
        fecha = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    }

    try {
        const citas = await Citas.find({fecha});

        res.status(200).json(citas);
    } catch (error) {
        console.log(error);

        res.status(500).json({mensaje:'Error al obtener las citas'});
    }

    

}

const obtenerCitaId = async(req,res)=>{

    try {

        const cita = await Citas.findById(req.params.id);

        res.status(200).json(cita);

    } catch (error) {
        res.status(500).json({mensaje:'Error al obtener la cita'});
    }

    
}

const actualizarCita = async(req,res)=>{

    const cita = req.body;

    try {
        let citaDB = await Citas.findById(req.params.id);

        if(!citaDB){
            return res.status(404).json({mensaje:'No se encontro la cita'});
        }

        citaDB.nombre = cita.nombre;
        citaDB.numero = cita.numero;
        citaDB.fecha = cita.fecha;
        citaDB.hora = cita.hora;


        citaDB.costo = cita.costo || 0;
        citaDB.hospital = cita.hospital || '';

        citaDB.informacion = cita.informacion || '';
        citaDB.numero2 = cita.numero2 || '';
        citaDB.email = cita.email || '';
        citaDB.edad = cita.edad || '';

        await citaDB.save();

        res.status(200).json(citaDB);

    } catch (error) {
        console.log(error);
        res.status(500).json({mensaje:'Error al actualizar la cita'});
    }

    
}

const eliminarCita = async(req,res)=>{

    try {
        await Citas.findByIdAndRemove(req.params.id);
        res.status(200).json({mensaje:'Cita eliminada'});
    } catch (error) {
        res.status(500).json({mensaje:'Error al eliminar la cita'});   
    }
    

}

const obtenerCitaFecha = async(req,res)=>{

    try {
        // const citas = await db.collection('citas').where('fecha', '==', Timestamp.fromDate(new Date(req.params.fecha) )).get();

        const citas = await Citas.find({fecha: req.params.fecha});

        res.status(200).json(citas);
    } catch (error) {
        res.status(500).json({mensaje:'Error al obtener las citas'});
    }



}

module.exports ={
    agregarCita,
    obtenerCitas,
    obtenerCitaId,
    actualizarCita,
    eliminarCita,
    obtenerCitaFecha
}