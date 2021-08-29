const express = require('express');
const router = express.Router();

const exercise = require('../models/exercise-model');

router.get('/getAllExercise', async (req, res, next) => {
    const allExercise = await exercise.find()
                                      .populate('Workout');
    res.json(allExercise);
});

router.post('/makeNewExercise', async (req, res, next) => {
    const newExercise = new exercise({Name: req.body.Name, Reps: req.body.Reps, Sets: req.body.Sets, Workout: req.body.workoutID});
    await newExercise.save();
    res.json(newExercise);
});

router.delete('/deleteAllExercise', async (req, res, next) => {
    const allExercise = await exercise.remove({});
    res.json(allExercise);
})

router.delete('/deleteExercise/:id', async (req, res, next) => {
    const deleteExercise = await exercise.findByIdAndDelete(req.params.id);
    res.json(deleteExercise);
});

router.put('/updateExercise/:id', async (req, res, next) => {
    const selectedExercise = await exercise.findById(req.params.id);
    selectedExercise.Name = req.body.Name;
    selectedExercise.Reps = req.body.Reps;
    selectedExercise.Sets = req.body.Sets;
    selectedExercise.save();
    res.json(selectedExercise);
});

module.exports = router;