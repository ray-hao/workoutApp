import { createSelector } from "reselect";

const selectAllWorkouts = state => state.workouts

export const selectWorkouts = createSelector(
    [selectAllWorkouts],
    workouts => workouts
)