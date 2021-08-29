import React from 'react';

import MakeExercise from './Components/MakeExercise.js';
import ShowExercise from './Components/ShowExercise.js';

import ShowWorkout from './Components/ShowWorkout.js';

export const EXERCISE_API_BASE = "http://localhost:8080/exercise";
export const WORKOUT_API_BASE = "http://localhost:8080/workout";

const App = ()  => {
  
  return (
    <div>
      
        <ShowExercise />

        <hr></hr>

        <ShowWorkout />

        <MakeExercise />

    </div>
  )
}

export default App;
