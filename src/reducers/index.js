import tasksReducer from './tasksReducer.js'
import filterReducer from './filterReducer.js'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    tasks : tasksReducer,
    filterOfTasks: filterReducer
})

export default rootReducer