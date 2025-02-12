import mongoose, { Schema, InferSchemaType } from 'mongoose';

const HuellaSchema = new Schema({
    usuario: { type: Number, required: true},
    hora: { type: Date, required: true },
    idZona: { type: Number, required: true }
});

const HuellaModel = mongoose.model('HuellaSchema', HuellaSchema);

export default HuellaModel;