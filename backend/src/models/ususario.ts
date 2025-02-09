import mongoose , {Schema} from 'mongoose';

const UsuarioSchema = new Schema({
    // EN ESTE ESQUEMA, EL ID DEL USUARIO ES EL ID PERTENECIENTE A SU HUELLA DACTILAR
    nombre: { type: String, required: true },
})

const UsuarioModel = mongoose.model('UsuarioSchema', UsuarioSchema)

export default UsuarioModel