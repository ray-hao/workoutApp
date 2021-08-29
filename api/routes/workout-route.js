const express = require('express');
const router = express.Router();

const Workout = require('../models/workout-model');

router.get('/getAllWorkout', async (req, res, next) => {
    const allWorkout = await Workout.find();
    res.json(allWorkout);
});

router.post('/makeNewWorkout', async (req, res, next) => {
    const newWorkout = new Workout({Name: req.body.Name});
    await newWorkout.save();
    res.json(newWorkout);
});

router.delete('/deleteAllWorkout', async (req, res, next) => {
    const allWorkout = await Workout.remove({});
    res.json(allWorkout);
})

router.delete('/deleteWorkout/:id', async (req, res, next) => {
    const deleteWorkout = await Workout.findByIdAndDelete(req.params.id);
    res.json(deleteWorkout);
});

router.put('/updateWorkout/:id', async (req, res, next) => {
    const selectedWorkout = await Workout.findById(req.params.id);
    selectedWorkout.Name = req.body.Name;
    selectedWorkout.Exercises = req.body.Exercises;
    selectedWorkout.save();
    res.json(selectedWorkout);
});

module.exports = router;