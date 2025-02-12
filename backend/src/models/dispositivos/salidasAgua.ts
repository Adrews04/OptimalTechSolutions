import mongoose, { Schema } from 'mongoose';

const SalidaAguaSchema = new Schema({
    idZona: { type: Number, required: true },
    idSalida: { type: Number, required: true },
    status: { type: Boolean, required: true }
});

const SalidaAguaModel = mongoose.model('SalidaAguaSchema', SalidaAguaSchema);


export default SalidaAguaModel;