import mongoose , {Schema} from 'mongoose';

const accesoSchema = new Schema({
    idZona: { type: Number, required: true },
    usuarioId: { type: Number, required: true }
})

const accesoModel = mongoose.model('accesoSchema', accesoSchema)

export default accesoModel