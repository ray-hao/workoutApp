import { WorkoutActionTypes } from "./workout-types";

import { fetchWorkouts } from "../../services/api/workout/workout-api";

export const getWorkouts = () => {
 
    return async (dispatch) => {

        try {

            dispatch(getWorkoutsStart());

            const workouts = await fetchWorkouts();

            dispatch(setWorkouts(workouts));

            dispatch(getWorkoutsSuccess());

            return workouts;

        } catch(error) {

            dispatch(getWorkoutsFailure());

            console.error(error);

        }

    }

};

export const setWorkouts = (workouts) => ({
    type: WorkoutActionTypes.SET_WORKOUTS,
    payload: workouts,
});

export const getWorkoutsStart = () => ({
    type: WorkoutActionTypes.GET_WORKOUTS_START
});

export const getWorkoutsSuccess = () => ({
    type: WorkoutActionTypes.GET_WORKOUTS_SUCCESS
});

export const getWorkoutsFailure = () => ({
    type: WorkoutActionTypes.GET_WORKOUTS_FAILURE
});