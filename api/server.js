const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const exercise = require('./routes/exercise-route');
const workout = require('./routes/workout-route');

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/workout", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(console.log("Connected to DB..."));

app.use('/exercise', exercise);
app.use('/workout', workout);

app.listen(8080, () => {
    console.log("Listening on Port 8080...")
});