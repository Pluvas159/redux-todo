import tasksReducer from './tasksReducer.js'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    tasks : tasksReducer,
})

export default rootReducer