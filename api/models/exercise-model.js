const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exerciseModel = new Schema({
    Name: {
        type: String,
        required: true,
    },
    Reps: {
        type: Number,
        required: true,
    },
    Sets: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model("exercise", exerciseModel);