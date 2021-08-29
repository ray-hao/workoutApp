import { createSelector } from 'reselect';

const selectAllExercises = state => state.exercises;

const selectOneExercise = state => state.exercises.selectedExercise;

export const selectExercises = createSelector(
    [selectAllExercises],
    exercises => exercises
)

export const selectSelectedExercise = createSelector(
    [selectOneExercise],
    exercise => exercise
)