import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectExercises } from '../Redux/exercise/exercise-selector.js';

import { getExercises } from '../Redux/exercise/exercise-actions';

import DeleteExercise from './DeleteExercise.js';

import UpdateExercise from './UpdateExercise.js';

const ShowExercise = ({ exerciseData, getExerciseData }) => {

    useEffect(() => {
        getExerciseData();
    }, [getExerciseData])

    return (
        <div>
            <ul>
                {exerciseData.exercises.map((entry) => {
                    return (
                            <li key={`${entry._id}`}>
                                {`${entry.Name} ${entry.Workout} ${entry.Reps} ${entry.Sets}`} 
                                <DeleteExercise exerciseID={entry._id} />
                                <UpdateExercise exerciseID={entry._id} />
                            </li>
                    )
                })}
            </ul>

        </div>
    )
}

const mapState = createStructuredSelector({
    exerciseData: selectExercises,
});

const mapDispatch = dispatch => ({
    getExerciseData: () => dispatch(getExercises())
});

export default connect(mapState, mapDispatch)(ShowExercise);
