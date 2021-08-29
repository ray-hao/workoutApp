import { ExerciseActionTypes } from "./exercise-types";

import { fetchExercises } from "../../services/api/exercise/exercise-api";

export const getExercises = () => {
 
    return async (dispatch) => {

        try {

            dispatch(getExercisesStart());

            const exercises = await fetchExercises();

            dispatch(setExercises(exercises));

            dispatch(getExercisesSuccess());

            return exercises;

        } catch(error) {

            dispatch(getExercisesFailure());

            console.error(error);

        }

    }

};

export const setExercises = (exercises) => ({
    type: ExerciseActionTypes.SET_EXERCISES,
    payload: exercises,
});

export const addExercises = (exercise) => ({
    type: ExerciseActionTypes.ADD_EXERCISES,
    payload: exercise,
})

export const deleteExercises = (exercise) => ({
    type: ExerciseActionTypes.DELETE_EXERCISES,
    payload: exercise,
})

export const selectExercise = (exerciseID) => ({
    type: ExerciseActionTypes.SELECT_EXERCISES,
    payload: exerciseID,
})

export const updateSelectedExercise = (exercise) => ({
    type: ExerciseActionTypes.UPDATE_SELECTED_EXERCISES,
    payload: exercise,
})

export const getExercisesStart = () => ({
    type: ExerciseActionTypes.GET_EXERCISES_START
});

export const getExercisesSuccess = () => ({
    type: ExerciseActionTypes.GET_EXERCISES_SUCCESS
});

export const getExercisesFailure = () => ({
    type: ExerciseActionTypes.GET_EXERCISES_FAILURE
});