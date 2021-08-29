import { ExerciseActionTypes } from "./exercise-types.js";

const INITAL_EXERCISE_STATE = {
    exercises: [],
    selectedExercise: [{
        Name: '',
        Reps: 0,
        Sets: 0,
    }],
}

const exerciseReducer = (state = INITAL_EXERCISE_STATE, action) => {

    let currentExercises = state.exercises;

    switch (action.type) {

        case ExerciseActionTypes.SET_EXERCISES:
            
            return {
                ...state,
                exercises: [...action.payload]
            }

        case ExerciseActionTypes.ADD_EXERCISES:

            return {
                ...state,
                exercises: [...currentExercises, action.payload]
            }

        case ExerciseActionTypes.DELETE_EXERCISES:


            currentExercises.splice(currentExercises.findIndex(exercise => exercise._id === action.payload._id), 1);

            return {
                ...state,
                exercises: [...currentExercises]
            }
        
        case ExerciseActionTypes.SELECT_EXERCISES:

            const selectExercise = currentExercises.filter(exercise => exercise._id === action.payload)

            return {
                ...state,
                selectedExercise: [...selectExercise],
            }

        case ExerciseActionTypes.UPDATE_SELECTED_EXERCISES:

            const updateIndex = currentExercises.findIndex(exercise => exercise._id === action.payload._id);

            currentExercises[updateIndex].Name = action.payload.Name;
            currentExercises[updateIndex].Reps = action.payload.Reps;
            currentExercises[updateIndex].Sets = action.payload.Sets;

            return {
                ...state,
                exercises: [...currentExercises]
            }

        default:
            return state
    }

}

export default exerciseReducer;