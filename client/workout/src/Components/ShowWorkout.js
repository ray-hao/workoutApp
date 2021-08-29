import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectWorkouts } from '../Redux/workout/workout-selector.js';

import { getWorkouts } from '../Redux/workout/workout-actions';

const ShowWorkout = ({workoutData, getWorkoutData}) => {

    useEffect(() => {
        getWorkoutData()
    }, [getWorkoutData])

    return (
        <div>
            <ul>
                {workoutData.workouts.map((entry) => {
                    return (
                            <li key={`${entry._id}`}>
                                {`${entry.Name} ${entry.CompletionDate.slice(0, 10)}`} 
                            </li>
                    )
                })}
            </ul>
        </div>
    )
}

const mapState = createStructuredSelector({
    workoutData: selectWorkouts
})

const mapDispatch = (dispatch) => ({
    getWorkoutData: () => dispatch(getWorkouts())
})

export default connect(mapState, mapDispatch)(ShowWorkout)
