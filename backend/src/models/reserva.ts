import mongoose , {Schema} from 'mongoose';

const ReservaSchema = new Schema({
    idZona: { type: Number, required: true },
    fechaHoraInicialReserva: { type: Date, required: true },
    fechaHoraFinalReserva: { type: Date, required: true },
    usuarioId: { type: Number, required: true },
    satisfaccion: { type: Number, required: true },
    comentarios: { type: String, required: false }
})

const ReservaModel = mongoose.model('ReservaSchema', ReservaSchema)

export default ReservaModel