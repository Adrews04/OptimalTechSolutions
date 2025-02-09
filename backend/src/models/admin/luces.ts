import mongoose, { Schema, InferSchemaType } from 'mongoose';

const LucesSchema = new Schema({
    consumoLuz: { type: Number, required: true},
    hora: { type: Date, required: true },
    idZona: { type: Number, required: true },
    idTuboLed: { type: Number, required: true }
});

const LucesModel = mongoose.model('LucesSchema', LucesSchema);

export default LucesModel;