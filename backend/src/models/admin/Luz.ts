import mongoose, { Schema, InferSchemaType } from 'mongoose';

const LuzSchema = new Schema({
    consumoLuz: { type: Number, required: true},
    hora: { type: Date, required: true },
    idZona: { type: Number, required: true },
    idTuboLed: { type: Number, required: true }
});

const LuzModel = mongoose.model('LuzSchema', LuzSchema);

export default LuzModel;