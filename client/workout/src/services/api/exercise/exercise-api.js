import { EXERCISE_API_BASE } from "../../../App"

import { APIParser } from "../api-parser"

export const fetchExercises =  () => {

    return fetch(EXERCISE_API_BASE + '/getAllExercise', {
        method: "GET"
    }).then(res => APIParser(res))
  
}

export const addExercise = (newExercise) => {

    return fetch(EXERCISE_API_BASE + '/makeNewExercise', {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        Name: newExercise.Name,
        Reps: newExercise.Reps,
        Sets: newExercise.Sets,
    })
    }).then(res => APIParser(res));

}

export const deleteExercise = (exerciseID) => {

    return fetch(EXERCISE_API_BASE + '/deleteExercise/' + exerciseID, {
        method: "DELETE",
    }).then(res => APIParser(res))

}

export const updateExercise = (updatedExercise, exerciseID) => {
    return fetch(EXERCISE_API_BASE + '/updateExercise/' + exerciseID, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            Name: updatedExercise.Name,
            Reps: updatedExercise.Reps,
            Sets: updatedExercise.Sets,
        })
    }).then(res => APIParser(res))
}