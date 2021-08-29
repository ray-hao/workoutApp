const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutModel = new Schema({
    Name: {
        type: String,
        required: true,
    },
    CompletionDate: {
        type: Date,
        default: Date.now(),
        required: true,
    }
});

module.exports = mongoose.model("workout", workoutModel);