import mongoose, { Schema } from 'mongoose';

const SalidaGasSchema = new Schema({
    idZona: { type: Number, required: true },
    idSalida: { type: Number, required: true },
    status: { type: Boolean, required: true }
});

const SalidaGasModel = mongoose.model('SalidaGasShema', SalidaGasSchema);


export default SalidaGasModel;