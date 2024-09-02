import { Schema, model, Types } from 'mongoose';
import db from '../apis/db/cosmosDB.js';

const roomSchema = new Schema({
    roomNumber: {
        type: Number,
        required: true,
        min: 0
    },
    roomType: {
        type: String,
        required: true,
        trim: true,
        default: 'Single'
    },
    price: {
        type: Number,
        required: true,
        min: 0,
        default: 0
    },
    isBooked: {
        type: Boolean,
        required: true,
        default: false
    },
    hotel: {
        type: Types.ObjectId,
        ref: 'Hotel',
        required: true
    },
    user: {
        type: Types.ObjectId,
        ref: 'User',
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


const Rooms = db.model('Room', roomSchema);

export default Rooms;
