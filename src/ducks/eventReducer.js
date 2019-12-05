import { GET_EVENTS, ADD_EVENT, UPDATE_EVENT, DELETE_EVENT } from "./types";

const initialState = []

const eventReducer = (state =initialState, action) => {
    switch(action.type) {
        case GET_EVENTS: 
            return action.payload;
        case ADD_EVENT:
            return [...state, action.payload]
        case UPDATE_EVENT:
            const newArray = state.map((item) => {
                    return item.id === action.payload.id ? action.payload: item 
                })
            return newArray 
        case DELETE_EVENT:
            return state.filter(({id}) => id !==action.payload)
        default: 
            return state;
    }
}
export default eventReducer