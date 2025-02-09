import mongoose, { Schema, InferSchemaType } from 'mongoose';

const PersonasSchema = new Schema({
    cantidadPersonas: { type: Number, required: true },
    hora: { type: Date, required: true },
    idZona: { type: Number, required: true }
});

const PersonasModel = mongoose.model('PersonasSchema', PersonasSchema);


export default PersonasModel;