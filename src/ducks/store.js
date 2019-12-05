import {createStore, combineReducers, applyMiddleware} from 'redux'
import eventReducer from './eventReducer'
import promiseMiddleware from 'redux-promise';

const rootReducer = combineReducers({
    events: eventReducer
})
const store = createStore(rootReducer, applyMiddleware(promiseMiddleware))
export default store