import { WORKOUT_API_BASE } from "../../../App"

import { APIParser } from "../api-parser"

export const fetchWorkouts = () => {

    return fetch(WORKOUT_API_BASE + '/getAllWorkout', {
        method: "GET"
    }).then(res => APIParser(res))

}