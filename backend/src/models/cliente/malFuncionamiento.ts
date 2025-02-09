import mongoose , {Schema} from 'mongoose';

const MalFuncionamientoSchema = new Schema({
    idZona: { type: Number, required: true },
    date: { type: Date, required: true },
    descripcion: { type: String, required: true },
    userId: { type: Number, required: true }
})

const MalFuncionamientoModel = mongoose.model('MalFuncionamientoSchema', MalFuncionamientoSchema)

export default MalFuncionamientoModel