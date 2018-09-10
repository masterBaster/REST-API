const mongoose = require('mongoose');
const Schema = mongoose.Schema;
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
    }
    // add geo location...
});

const Driver = mongoose.model('dirver', Driver_Schema);

module.exports = Driver;

