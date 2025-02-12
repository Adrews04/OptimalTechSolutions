import mongoose , {Schema} from 'mongoose';

const ZonasSchema = new Schema({
    idZona: { type: Number, required: true },
    horasDisponiblesInicio: { type: Date, required: true },
    horasDisponiblesFinal: { type: Date, required: true },
})

const ZonasModel = mongoose.model('ZonasSchema', ZonasSchema)

export default ZonasModel