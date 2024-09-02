import { Schema, model, Types } from 'mongoose';
import db from '../apis/db/cosmosDB.js';

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
        default: ''
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        trim: true,
        lowercase: true,
        default: ''
    },
    role: {
        type: String,
        required: [true, 'Role is required'],
        enum: ['owner', 'client'],
        default: 'client'
    },
    hotel: {
        type: Types.ObjectId,
        ref: 'Hotel',
        default: null
    },
    room: {
        type: Types.ObjectId,
        ref: 'Room',
        default: null
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

const Users = db.model('User', userSchema);

export default Users;

