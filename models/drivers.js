const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Geo_Schema = new Schema({
    type: {
        type: String,
        default: 'Point'
    },
    coordinates: {
        type: [Number],
        index: '2dsphere'
    }
}) 

const Driver_Schema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    surname: {
        type: String,
        required: [true, 'Surname field is required']
    },
    age: {
        type: Number,
        required: [true, 'Age field is required']
    },
    drivers_license: {
        type: Number,
        required: [true, 'obviously, you must have driving license']
    },
    available: {
        type: Boolean,
        default: false
    },
    geometry: Geo_Schema
});

const Driver = mongoose.model('dirver', Driver_Schema);

module.exports = Driver;

