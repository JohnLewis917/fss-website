import { GET_EVENTS, ADD_EVENT, UPDATE_EVENT, DELETE_EVENT } from "./types"
import axios from 'axios'

export const getEvents = async () => {
    const {data}= await axios.get("/api/Event")
      return {
          type: GET_EVENTS,
          payload: data
      }
}
export const addEvent = async (event) => {
    axios.post("/api/Event", event)
    
        return {
            type: ADD_EVENT,
            payload: event
        }   
}
export const updateEvent = async (event) => {
    axios.put("/api/Event", event)
    
        return {
            type: UPDATE_EVENT,
            payload: event
        }
}
export const deleteEvent = async (id) => {
    axios.delete(`/api/Event/${id}`)

    return {
        type: DELETE_EVENT,
        id: id
    }
}