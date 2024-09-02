import { Schema, model, Types } from 'mongoose';
import db from '../apis/db/cosmosDB.js';

const hotelSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        default: 'Hotel Name'
    },
    address: {
        type: String,
        required: true,
        trim: true,
        default: 'Hotel Address'
    },
    phone: {
        type: String,
        required: true,
        trim: true,
        default: '123456789'
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
        default: 3
    },
    price: {
        type: Number,
        required: true,
        min: 0,
        default: 0
    },
    description: {
        type: String,
        required: true,
        trim: true,
        default: 'Hotel Description'
    },
    facilities: {
        type: [String],
        required: true,
        default: []
    },
    images: {
        type: [String],
        required: true,
        default: []
    },
    foods: [{
        type: Types.ObjectId,
        ref: 'Food',
        default: null
    }],
    apps: [{
        type: Types.ObjectId,
        ref: 'App',
        default: null
    }],
    owner: {
        type: Types.ObjectId,
        ref: 'User',
        required: true
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

const Hotel = db.model('hotel', hotelSchema);

export default Hotel;

