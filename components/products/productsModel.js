import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const productsSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    //category: { type: String, required: true },
    //stock: { type: Number, required: true },
    //discount: { type: Number, required: true },
    created_at: { type: Date, default: new Date().toUTCString() },
    updated_at: { type: Date, default: new Date().toUTCString() },
    enabled: { type: Boolean, default: true }
});

const model = mongoose.model('products', productsSchema);

export default model;