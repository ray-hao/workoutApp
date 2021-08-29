import { WorkoutActionTypes } from "./workout-types";

const INITAL_WORKOUT_STATE = {
    workouts: [],
}

const workoutReducer = (state = INITAL_WORKOUT_STATE, action) => {

    switch (action.type) {

        case WorkoutActionTypes.SET_WORKOUTS:

            return {
                ...state,
                workouts: [...action.payload]
            }

        default: return state
    }

}

export default workoutReducer;