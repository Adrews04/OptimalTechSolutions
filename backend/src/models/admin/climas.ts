import mongoose, { Schema, InferSchemaType } from 'mongoose';

const ClimasSchema = new Schema({
    consumoElectrico: { type: Number, required: true },
    consumoGas: { type: Number, required: true },
    hora: { type: Date, required: true },
    idZona: { type: Number, required: true },
    idClima: { type: Number, required: true }
});

const ClimasModel = mongoose.model('ClimasSchema', ClimasSchema);

export default ClimasModel;