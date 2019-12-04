
const initialState = {
    first_name: "",
    last_name: "",
    image:"",
    date:"",
    event:"",
    description:""
}
export const GET_EVENTS = 'GET_EVENTS'
export const GET_OFFICERS = 'GET_OFFICERS'

export const getEvents = (date, event, description) => {
    return {
        type: GET_EVENTS,
        payload: {date, event, description}
    }
}
export const getOfficers = (first_name, last_name, image) => {
    return {
        type: GET_OFFICERS,
        payload: {first_name, last_name, image}
    }
}

export default function reducer(state = initialState, action){
    switch(action.type){
        case GET_EVENTS:
            return {...state, ...action.payload}
        case GET_OFFICERS:
            return {...state, ...action.payload}
        default: return state
    }
}