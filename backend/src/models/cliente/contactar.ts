import mongoose , {Schema} from 'mongoose';

const ContactarSchema = new Schema({
    nombreContacto: { type: String, required: true },
    telefonoContacto: { type: String, required: true }
})

const ContactarModel = mongoose.model('ContactarSchema', ContactarSchema)

export default ContactarModel