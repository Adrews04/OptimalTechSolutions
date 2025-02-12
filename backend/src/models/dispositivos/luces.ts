import mongoose, { Schema } from 'mongoose';

const LucesSchema = new Schema({
    idZona: { type: Number, required: true },
    idTuboLed: { type: Number, required: true },
    status: { type: Boolean, required: true }
});

const LucesModel = mongoose.model('LucesSchema', LucesSchema);


export default LucesModel;