import React from 'react'

import { connect } from 'react-redux';

import { deleteExercise } from '../services/api/exercise/exercise-api';
import { deleteExercises } from '../Redux/exercise/exercise-actions';

const DeleteExercise = ({exerciseID, deleteExerciseData}) => {

    const deleteNewExercise = async () => {
        const deletedExercise = await deleteExercise(exerciseID);
        deleteExerciseData(deletedExercise);

    }

    return (
        <div onClick={() => deleteNewExercise(exerciseID)}>
            x
        </div>
    )
}

const mapDispatch = dispatch => ({
    deleteExerciseData: exercise => dispatch(deleteExercises(exercise))
});

export default connect(null, mapDispatch)(DeleteExercise);
