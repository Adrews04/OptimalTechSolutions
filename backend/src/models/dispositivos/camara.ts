import mongoose , {Schema} from 'mongoose';

const CamaraSchema = new Schema({
    idZona: { type: Number, required: true }
})

const CamaraModel = mongoose.model('CamaraSchema', CamaraSchema)

export default CamaraModel