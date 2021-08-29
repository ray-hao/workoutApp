import React, { useState, useEffect, useReducer } from 'react';

import Modal from 'react-bootstrap/Modal';

import Button from 'react-bootstrap/Button';

import Alert from 'react-bootstrap/Alert';

import { updateExercise } from '../services/api/exercise/exercise-api';

import { selectExercise, updateSelectedExercise } from '../Redux/exercise/exercise-actions';
import { selectSelectedExercise } from '../Redux/exercise/exercise-selector';

import { createStructuredSelector } from 'reselect';

import { connect } from 'react-redux';

const reducer = (state, action) => {

    switch (action.type) {

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

const initialState = {
    Name: "default",
    Reps: -1,
    Sets: -1,
}

const UpdateExercise = ({exerciseID, selectedData, selectExerciseData, updateExerciseData}) => {

    const [show, setShow] = useState(false);

    const [showAlert, setshowAlert] = useState(false);

    const [state, dispatch] = useReducer(reducer, initialState);

    const handleShow = async () => {
    
        await selectExerciseData(exerciseID);

        setShow(true);
    
    }

    useEffect(() => {

        dispatch({type: 'Name', payload: selectedData[0].Name})
        dispatch({type: 'Reps', payload: selectedData[0].Reps})
        dispatch({type: 'Sets', payload: selectedData[0].Sets})

    }, [selectedData])

    const handleClose = () => setShow(false); 

    const handleSave = async () => {

        if (state.Reps <= 0 || 
            state.Sets <= 0 || 
            state.Reps.toString().indexOf('.') !== -1 || 
            state.Sets.toString().indexOf('.') !== -1) {

            setshowAlert(true);

            setTimeout(() => {
                setshowAlert(false)
            }, 5000)

        } else {

        const updatedExercise = await updateExercise(state, exerciseID);

        updateExerciseData(updatedExercise);

        handleClose();
        }

    }

    return (
        <>
            
            <div onClick={handleShow}>edit </div>

            <Modal show={show} onHide={handleClose} contentClassName="" dialogClassName="">

                <Modal.Header closeButton>
                    <Modal.Title>Edit Exercise</Modal.Title>
                </Modal.Header>
                
                <Modal.Body>
                    
                    <input type={"text"} onChange={(e) => dispatch({type: 'Name', payload: e.target.value})} placeholder={selectedData[0].Name} />
                    
                    <input type={"number"} onChange={(e) => dispatch({type: 'Reps', payload: e.target.value})} placeholder={selectedData[0].Reps} />
            
                    <input type={"number"} onChange={(e) => dispatch({type: 'Sets', payload: e.target.value})}  placeholder={selectedData[0].Sets} />

                </Modal.Body>
                
                <Modal.Footer>
                    <Button onClick={handleClose}>
                        Close
                    </Button>
                    <Button onClick={handleSave}>Save</Button>
                </Modal.Footer>

                {showAlert ?
                <Alert variant={"danger"}>
                    INPUT ERROR
                </Alert> :
                <></>}

            </Modal>

        </>
    )
}

const mapState = createStructuredSelector({
    selectedData: selectSelectedExercise,
});

const mapDispatch = dispatch => ({
    selectExerciseData: (exerciseID) => dispatch(selectExercise(exerciseID)),
    updateExerciseData: (exercise) => dispatch(updateSelectedExercise(exercise))
})

export default connect(mapState, mapDispatch)(UpdateExercise);

