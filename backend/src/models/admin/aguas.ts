import mongoose, { Schema, InferSchemaType } from 'mongoose';

const AguasSchema = new Schema({
    consumoAgua: { type: Number, required: true },
    hora: { type: Date, required: true },
    idZona: { type: Number, required: true },
    idSalidaAgua: { type: Number, required: true }
});

const AguasModel = mongoose.model('AguasSchema', AguasSchema);


export default AguasModel;