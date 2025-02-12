import mongoose , {Schema} from 'mongoose';

const AlertasProtocolosAccionablesSchema = new Schema({
    message: { type: String, required: true },
    idZona: { type: Number, required: true },
    idUsuario: { type: Number, required: true },
    estado: { type: Boolean, required: true, default: false }
})

const AlertasProtocolosAccionablesModel = mongoose.model('AlertasProttocolosAccionablesSchema', AlertasProtocolosAccionablesSchema)

export default AlertasProtocolosAccionablesModel