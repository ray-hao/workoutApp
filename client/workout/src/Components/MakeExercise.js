import React, {useReducer} from 'react';

import { connect } from 'react-redux';

import { addExercise } from '../services/api/exercise/exercise-api';
import { addExercises } from '../Redux/exercise/exercise-actions';

const initialState = {
    Name: "",
    Reps: 0,
    Sets: 0,
}

const reducer = (state, action) => {
    
    switch(action.type) {

        case 'Name': 
            return {
                ...state,
                Name: action.payload
            }

        case 'Reps':
            return {
                ...state,
                Reps: action.payload
            }

        case 'Sets':
            return {
                ...state,
                Sets: action.payload
            }

        default: return state
    }

}

const MakeExercise = ({ addExerciseData }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const addNewExercise = async () => {
        const newExercise = await addExercise(state);
        addExerciseData(newExercise);
    }
    
    return (
        <div>

            <input type={"text"} onChange={(e) => dispatch({type: 'Name', payload: e.target.value})} placeholder={"Exercise Name..."}></input>
            
            <input type={"number"} onChange={(e) => dispatch({type: 'Reps', payload: e.target.value})} placeholder={"Exercise Reps..."}></input>
            
            <input type={"number"} onChange={(e) => dispatch({type: 'Sets', payload: e.target.value})}  placeholder={"Exercise Sets..."}></input>

            <button onClick={() => addNewExercise()}>
                Make New Exercise
            </button>

        </div>
    )
}

const mapDispatch = dispatch => ({
    addExerciseData: exercises => dispatch(addExercises(exercises))
});

export default connect(null, mapDispatch)(MakeExercise);