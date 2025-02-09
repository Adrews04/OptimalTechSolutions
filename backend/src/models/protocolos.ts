import mongoose , {Schema} from 'mongoose';

const ProtocolosSchema = new Schema({
    nombreProtocolo: { type: String, required: true }
})

const ProtocolosModel = mongoose.model('ProtocolosSchema', ProtocolosSchema)

export default ProtocolosModel