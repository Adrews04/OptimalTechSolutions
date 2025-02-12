import mongoose, { Schema } from 'mongoose';

const TermometroSchema = new Schema({
    idZona: { type: Number, required: true },
    temperatura: { type: Number, required: true }
});

const TemperaturaModel = mongoose.model('TermometroSchema', TermometroSchema);


export default TemperaturaModel;