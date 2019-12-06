import { GET_OFFICERS, ADD_OFFICER, DELETE_OFFICER } from "./types";

const initialState = []

const officerReducer = (state =initialState, action) => {
    switch(action.type) {
        case GET_OFFICERS: 
            return action.payload;
        case ADD_OFFICER:
            return [...state, action.payload]
        case DELETE_OFFICER:
                return state.filter(({id}) => id !== action.id);
        default: 
            return state;
    }
}
export default officerReducer
