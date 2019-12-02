
const initialState = {
    member_rank: "",
    first_name: "",
    last_name: "",
    image:"",
    date:"",
    event:"",
    description:""
}
GET_EVENTS = 'GET_EVENTS'
GET_OFFICERS = 'GET_OFFICERS'

export const getEvents = (date, event, description) => {
    return {
        type: GET_EVENTS,
        payload: {date, event, description}
    }
}
export const getOfficers = (member_rank, first_name, last_name, image) => {
    return {
        type: GET_OFFICERS,
        payload: {member_rank, first_name, last_name, image}
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