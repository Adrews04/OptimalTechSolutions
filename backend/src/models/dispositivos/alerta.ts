import mongoose, { Schema } from 'mongoose';

const AlertaSchema = new Schema({
    idAlerta: { type: Number, required: true },
    mensaje: { type: String, required: true },
});

const AlertaModel = mongoose.model('AlertaSchema', AlertaSchema);


export default AlertaModel;