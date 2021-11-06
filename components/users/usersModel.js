import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const usersSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
    created_at: { type: Date, default: new Date().toUTCString() },
    updated_at: { type: Date, default: new Date().toUTCString() },
    enabled: { type: Boolean, default: true }
});

const model = mongoose.model('users', usersSchema);

export default model;