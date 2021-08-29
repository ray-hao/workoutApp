import { combineReducers } from 'redux';

import exerciseReducer from './exercise/exercise-reducer';
import workoutReducer from './workout/workout-reducer';

const rootReducer = combineReducers({
    exercises: exerciseReducer,
    workouts: workoutReducer
})

export default rootReducer