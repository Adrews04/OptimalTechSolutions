import mongoose, { Schema, InferSchemaType } from 'mongoose';

const GasSchema = new Schema({
    consumoGas: { type: Number, required: true },
    hora: { type: Date, required: true },
    idZona: { type: Number, required: true },
    idSalidaGas: { type: Number, required: true }
});

const GasModel = mongoose.model('GasSchema', GasSchema);


export default GasModel;